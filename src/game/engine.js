import { players } from '../data/players';
import { seasons } from '../data/seasons';

export const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const shuffle = (arr) => [...arr].sort(() => Math.random() - .5);
export const clamp = (v,min,max) => Math.max(min, Math.min(max, v));
export const round1 = v => Math.round(v*10)/10;

export function seasonStartYear(seasonText){
  const y = Number(String(seasonText).slice(0,4));
  return Number.isFinite(y) ? y : 2000;
}

export function seasonMetaById(id){ return seasons.find(s => s.id === id); }

export function positionFit(player, slot) {
  if (!player || !slot) return 0;
  if (player.positions.includes(slot)) return 1;
  const soft = {
    LW:['RW','ST','CAM','LM'], RW:['LW','ST','CAM','RM'], ST:['LW','RW','CAM'],
    CAM:['CM','ST','LW','RW'], CM:['CDM','CAM','RM','LM'], CDM:['CM','CB'],
    LB:['LWB','RB','CB'], RB:['RWB','LB','CB'], LWB:['LB','LM','LW'], RWB:['RB','RM','RW'],
    CB:['CDM','LB','RB'], LM:['LW','CM','LWB'], RM:['RW','CM','RWB'], GK:[]
  };
  return (soft[slot] || []).some(p => player.positions.includes(p)) ? .88 : .52;
}

export function eligibleSlotsForPlayer(player, slots, strict=false) {
  return slots.filter(s => !s.player && (strict ? player.positions.includes(s.position) : positionFit(player, s.position) >= .88));
}

export function pickSeason({draftedIds=[], eraRange=[2000,2026], needPosition=null, draftMode='balanced'} = {}) {
  const availableSeasons = seasons.filter(s => {
    const y = seasonStartYear(s.season);
    return y >= eraRange[0] && y <= eraRange[1];
  });
  const viable = availableSeasons.filter(s => {
    const pool = players.filter(p => p.seasonId === s.id && !draftedIds.includes(p.id));
    if (!needPosition || draftMode === 'chaos') return pool.length > 0;
    return pool.some(p => positionFit(p, needPosition) >= .88) || pool.length >= 3;
  });
  return rand(viable.length ? viable : availableSeasons);
}

export function pickOptions({draftedIds=[], selectedSeasonId, neededSlot=null, draftMode='balanced', count=8}) {
  let pool = players.filter(p => !draftedIds.includes(p.id));
  if (selectedSeasonId) pool = pool.filter(p => p.seasonId === selectedSeasonId);
  if (draftMode === 'position-first' && neededSlot) {
    const fits = pool.filter(p => positionFit(p, neededSlot) >= .88);
    if (fits.length) pool = fits;
  }
  if (draftMode === 'strict-position' && neededSlot) {
    const exact = pool.filter(p => p.positions.includes(neededSlot));
    if (exact.length) pool = exact;
  }
  if (draftMode === 'chaos') return shuffle(pool).slice(0, Math.min(5, pool.length));
  return shuffle(pool).sort((a,b)=> (neededSlot ? positionFit(b, neededSlot)-positionFit(a, neededSlot) : 0)).slice(0, Math.min(count, pool.length));
}

function roleBucket(position) {
  if (position === 'GK') return 'GK';
  if (['CB','LB','RB','LWB','RWB'].includes(position)) return 'DEF';
  if (['CDM','CM','CAM','LM','RM'].includes(position)) return 'MID';
  return 'ATT';
}

export function calculateSquad(slots) {
  const filled = slots.filter(s => s.player);
  const totalSlots = slots.length || 11;
  if (!filled.length) return { avg:0, chemistry:0, balance:0, bigMatch:0, penalty:0, total:0, powerPct:0, chemistryPct:0, tacticalPct:0, projected:null, odds:null };

  const fits = filled.map(s => positionFit(s.player, s.position));
  const adjusted = filled.map((s, idx) => s.player.rating * fits[idx]);
  const avg = adjusted.reduce((a,b)=>a+b,0)/filled.length;
  const sameSeason = countMax(filled.map(s => s.player.seasonId));
  const sameClub = countMax(filled.map(s => s.player.club));
  const chemistry = Math.min(12, Math.max(0, (sameSeason-1)*1.9 + (sameClub-1)*.7));

  const targets = slots.reduce((acc, s) => {
    const bucket = roleBucket(s.position);
    acc[bucket] = (acc[bucket] || 0) + 1;
    return acc;
  }, {});
  const filledRoles = filled.reduce((acc, s) => {
    const bucket = roleBucket(s.position);
    acc[bucket] = (acc[bucket] || 0) + 1;
    return acc;
  }, {});
  const roleCoverage = Object.entries(targets).reduce((sum, [role, target]) => {
    return sum + Math.min(1, (filledRoles[role] || 0) / Math.max(1, target));
  }, 0) / Math.max(1, Object.keys(targets).length);
  const fitAvg = fits.reduce((a,b)=>a+b,0) / filled.length;
  const fillPct = filled.length / totalSlots;
  const tacticalPct = round1(clamp((fitAvg * 58) + (roleCoverage * 28) + (fillPct * 14), 0, 100));

  const hasGK = filled.some(s=>s.position==='GK');
  const def = filled.filter(s=>roleBucket(s.position)==='DEF').length;
  const mid = filled.filter(s=>roleBucket(s.position)==='MID').length;
  const atk = filled.filter(s=>roleBucket(s.position)==='ATT').length;
  const completeBalance = hasGK && def>=4 && mid>=3 && atk>=2 ? 7 : hasGK && def>=3 && mid>=2 ? 3 : -5;
  const liveBalance = Math.round((tacticalPct - 62) / 8);
  const balance = filled.length < totalSlots ? clamp(liveBalance, -4, 4) : completeBalance;

  const bigMatch = filled.reduce((sum, s)=>sum + s.player.traits.filter(t => ['UCL Legend','Clutch','Big Game','Ballon d’Or','Captain','Mentality'].includes(t)).length, 0) * .85;
  const penalty = filled.reduce((sum, s)=>sum + (positionFit(s.player, s.position) < .88 ? 7 : 0), 0);
  const total = Math.round((avg + chemistry + balance + bigMatch - penalty) * 10) / 10;
  const powerPct = round1(clamp((total / 112) * 100, 0, 100));
  const chemistryPct = round1(clamp((chemistry / 12) * 100, 0, 100));

  return { avg:Math.round(avg*10)/10, chemistry:Math.round(chemistry*10)/10, balance, bigMatch:Math.round(bigMatch*10)/10, penalty, total, powerPct, chemistryPct, tacticalPct, projected: projectFinish(total), odds: odds(total) };
}

function countMax(arr) {
  const map = arr.reduce((m, x)=> (m[x]=(m[x]||0)+1, m), {});
  return Math.max(...Object.values(map), 0);
}

export function projectFinish(score) {
  const s = Math.max(68, Math.min(112, score));
  const expectedPoints = Math.round(7 + (s - 76) * .36);
  let finish = 'League phase exit';
  let rank = 31;
  if (s >= 104) { finish = 'Champion favorite'; rank = 1; }
  else if (s >= 99) { finish = 'Final / Champion contender'; rank = 3; }
  else if (s >= 94) { finish = 'Semi-final level'; rank = 6; }
  else if (s >= 89) { finish = 'Top 8 / R16 seed'; rank = 8; }
  else if (s >= 84) { finish = 'Play-off/R16 level'; rank = 15; }
  else if (s >= 79) { finish = 'Play-off bubble'; rank = 23; }
  return { finish, rank, expectedPoints: Math.max(2, Math.min(24, expectedPoints)) };
}

export function odds(score) {
  const s = Math.max(70, Math.min(110, score));
  const win = clamp(((s-82)/28)**3 * 100, 0.4, 86);
  const final = clamp(win*1.7 + 6, 5, 94);
  const semi = clamp(final*1.35 + 6, 10, 98);
  const ko = clamp(45 + (s-78)*2.2, 8, 99.6);
  return { win:round1(win), final:round1(final), semi:round1(semi), knockout:round1(ko), disaster:round1(100-ko) };
}

const POT_BASE = [
  { pot:1, level:'Elite', teams:[
    ['Real Madrid',98], ['Manchester City',97], ['Bayern Munich',96], ['Paris Saint-Germain',95], ['Liverpool',94], ['Inter Milan',93], ['Barcelona',93], ['Chelsea',91], ['Arsenal',91]
  ]},
  { pot:2, level:'Strong', teams:[
    ['Borussia Dortmund',90], ['Atlético Madrid',90], ['Juventus',89], ['Napoli',88], ['Bayer Leverkusen',88], ['Benfica',87], ['Tottenham Hotspur',86], ['Atalanta',86], ['AC Milan',86]
  ]},
  { pot:3, level:'Tricky', teams:[
    ['Sporting CP',84], ['Villarreal',84], ['PSV Eindhoven',83], ['Monaco',83], ['Marseille',82], ['Newcastle United',82], ['Galatasaray',81], ['Ajax',81], ['Porto',81]
  ]},
  { pot:4, level:'Banana skin', teams:[
    ['Eintracht Frankfurt',80], ['Athletic Club',79], ['FC Copenhagen',77], ['Club Brugge',77], ['Celtic',76], ['Qarabağ',74], ['Bodø/Glimt',74], ['Kairat Almaty',71], ['Slavia Praha',73]
  ]}
];


const BOSS_TEAMS = [
  { name:'Real Madrid 2016/17', power:101, pot:1, bossAura:'Champions DNA' },
  { name:'Barcelona 2014/15', power:100, pot:1, bossAura:'MSN nightmare' },
  { name:'Bayern Munich 2019/20', power:99, pot:1, bossAura:'Pressing machine' },
  { name:'Manchester City 2022/23', power:99, pot:1, bossAura:'Treble boss' },
  { name:'Liverpool 2018/19', power:98, pot:1, bossAura:'Anfield intensity' }
];

const DIFFICULTY_CONFIG = {
  casual: { label:'Casual', powerShift:-5, koBonus:4, chaos:-1.5 },
  balanced: { label:'Balanced', powerShift:0, koBonus:0, chaos:0 },
  legendary: { label:'Legendary', powerShift:6, koBonus:-4, chaos:2.5 }
};

function difficultyConfig(difficulty='balanced'){
  return DIFFICULTY_CONFIG[difficulty] || DIFFICULTY_CONFIG.balanced;
}

function dangerFromPower(power){
  if (power >= 96) return 'Boss fight';
  if (power >= 91) return 'Elite threat';
  if (power >= 85) return 'Dangerous';
  if (power >= 78) return 'Tricky';
  return 'Banana skin';
}

function allPotTeams(){
  return POT_BASE.flatMap(p => p.teams.map(([name,power]) => ({ name, power, pot:p.pot, level:p.level })));
}

export function drawGroup(score){
  return drawLeaguePhaseOpponents(score);
}

export function drawLeaguePhaseOpponents(score){
  const used = new Set();
  const picked = [];
  POT_BASE.forEach(pot => {
    const two = shuffle(pot.teams).slice(0,2);
    two.forEach(([name,power], i) => {
      used.add(name);
      picked.push({ name, power, pot:pot.pot, danger:pot.level, level:pot.level, venue:i===0?'Home':'Away' });
    });
  });
  const homes = picked.filter(p=>p.venue==='Home').length;
  const aways = picked.filter(p=>p.venue==='Away').length;
  return shuffle(picked).map((o,i)=>({ ...o, label:`MD${i+1}`, venue:o.venue || (i % 2 === 0 ? 'Home' : 'Away'), usedCount:used.size, homes, aways }));
}

function matchResult(score, opponentPower=85, label='', venue='Home', difficulty='balanced'){
  const cfg = difficultyConfig(difficulty);
  const adjustedOpponent = opponentPower + cfg.powerShift;
  const venueBonus = venue === 'Home' ? 2.2 : venue === 'Away' ? -1.7 : 0;
  const pressurePenalty = ['Play-off','R16','QF','SF','Final'].some(x=>String(label).includes(x)) ? 1.4 : 0;
  const power = score - adjustedOpponent + 86 + venueBonus + (Math.random()*(12 + cfg.chaos) - (6 + cfg.chaos/2)) - pressurePenalty;
  const gf = clamp(Math.round((power-74)/11 + Math.random()*2.05), 0, 6);
  const ga = clamp(Math.round((93-power)/13 + Math.random()*2.05), 0, 5);
  let status = gf > ga ? 'Win' : gf === ga ? 'Draw' : 'Loss';
  if (['Play-off','R16','QF','SF','Final'].some(x=>String(label).includes(x)) && status === 'Draw') {
    status = Math.random() < clamp((score-opponentPower+18)/36, .25, .82) ? 'Win' : 'Loss';
  }
  const notes = status === 'Win' ? ['clean job','late winner','keeper masterclass','midfield cooked them','heritage night','away day robbery'] : status === 'Draw' ? ['tense draw','VAR chaos','away ground survived','missed chances tax'] : ['got cooked','bottle warning','painful night','set-piece disaster'];
  return { gf, ga, scoreline:`${gf}-${ga}`, status, note:rand(notes) };
}

function pointsFromStatus(status){ return status === 'Win' ? 3 : status === 'Draw' ? 1 : 0; }
function statusFromGoals(gf,ga){ return gf>ga ? 'Win' : gf===ga ? 'Draw' : 'Loss'; }

function makeTableRow(name, power, isUser=false){
  return { name, power, isUser, played:0, wins:0, draws:0, losses:0, gf:0, ga:0, gd:0, points:0, rank:0, zone:'' };
}

function addTableMatch(row, gf, ga){
  row.played += 1; row.gf += gf; row.ga += ga; row.gd = row.gf-row.ga;
  const status = statusFromGoals(gf,ga);
  if(status==='Win') { row.wins += 1; row.points += 3; }
  else if(status==='Draw') { row.draws += 1; row.points += 1; }
  else row.losses += 1;
}

function simulateNeutralFixture(teamA, teamB){
  const edge = teamA.power - teamB.power + (Math.random()*10 - 5);
  const a = clamp(Math.round((82+edge-74)/12 + Math.random()*2), 0, 5);
  const b = clamp(Math.round((82-edge-74)/12 + Math.random()*2), 0, 5);
  addTableMatch(teamA, a, b);
  addTableMatch(teamB, b, a);
}

function buildLeagueTable(score, opponents, leagueMatches, difficulty='balanced'){
  const opponentNames = new Set(opponents.map(o=>o.name));
  const filler = shuffle(allPotTeams().filter(t=>!opponentNames.has(t.name))).slice(0, 27);
  const rows = [makeTableRow('Your Draft XI', score, true)];
  const cfg = difficultyConfig(difficulty);
  opponents.forEach(o=>rows.push(makeTableRow(o.name, o.power + cfg.powerShift, false)));
  filler.forEach(t=>rows.push(makeTableRow(t.name, t.power, false)));
  const byName = Object.fromEntries(rows.map(r=>[r.name,r]));
  leagueMatches.forEach(m=>{
    addTableMatch(byName['Your Draft XI'], m.gf, m.ga);
    addTableMatch(byName[m.opponent], m.ga, m.gf);
  });
  // Fill every other team to 8 played with quick neutral fixtures.
  const nonUser = rows.filter(r=>!r.isUser);
  let guard = 0;
  while(nonUser.some(t=>t.played<8) && guard < 600){
    const need = shuffle(nonUser.filter(t=>t.played<8));
    const a = need[0];
    const b = need.find(t=>t.name!==a.name && t.played<8);
    if(!a || !b) break;
    simulateNeutralFixture(a,b);
    guard++;
  }
  rows.sort((a,b)=> b.points-a.points || b.gd-a.gd || b.gf-a.gf || b.power-a.power);
  rows.forEach((r,i)=>{
    r.rank=i+1;
    r.zone = r.rank<=8 ? 'R16 seed' : r.rank<=24 ? 'Play-off' : 'Eliminated';
  });
  return rows;
}

function knockoutChance(score, opponentPower, bonus=0){
  return clamp(.5 + (score - opponentPower + bonus)/32, .18, .88);
}

function buildKnockoutMatches(score, leagueRank, difficulty='balanced'){
  const matches = [];
  const cfg = difficultyConfig(difficulty);
  let alive = true;
  if (leagueRank > 24) return matches;
  if (leagueRank > 8) {
    const opp = rand(allPotTeams().filter(t=>t.power>=80 && t.power<=90));
    const adjustedPower = opp.power + cfg.powerShift;
    const win = Math.random() < knockoutChance(score, adjustedPower, (leagueRank<=16 ? 3 : -1) + cfg.koBonus);
    const r = matchResult(score, opp.power, 'Play-off', 'Two legs', difficulty);
    matches.push({ round:'Knockout play-off', label:'Play-off', opponent:opp.name, venue:'Two legs', pot:opp.pot, opponentPower:adjustedPower, danger:dangerFromPower(adjustedPower), ...r, status:win?'Win':'Loss' });
    alive = win;
  }
  const rounds = [
    { label:'R16', pool:[88,94] },
    { label:'QF', pool:[90,97] },
    { label:'SF', pool:[92,98] },
    { label:'Final', pool:[94,99] }
  ];
  for (const round of rounds) {
    if (!alive) break;
    const candidates = allPotTeams().filter(t=>t.power>=round.pool[0] && t.power<=round.pool[1]);
    const opp = round.label === 'Final' ? rand(BOSS_TEAMS) : rand(candidates.length ? candidates : allPotTeams());
    const venue = round.label === 'Final' ? 'Neutral' : 'Two legs';
    const adjustedPower = opp.power + cfg.powerShift + (round.label === 'Final' ? 2 : 0);
    const win = Math.random() < knockoutChance(score, adjustedPower, (leagueRank<=8 ? 3 : 0) + cfg.koBonus) - (round.label==='Final'?.04:0);
    const r = matchResult(score, opp.power, round.label, venue, difficulty);
    matches.push({ round:'Knockout', label:round.label, opponent:opp.name, venue, pot:opp.pot, opponentPower:adjustedPower, danger:round.label === 'Final' ? 'Final Boss' : dangerFromPower(adjustedPower), boss:round.label === 'Final', bossAura:opp.bossAura, ...r, status:win?'Win':'Loss' });
    alive = win;
  }
  return matches;
}

export function buildMatches(score, opponents, difficulty='balanced'){
  const leagueOpponents = opponents?.length === 8 ? opponents : drawLeaguePhaseOpponents(score);
  const leagueMatches = leagueOpponents.map((o, idx)=>({
    round:'League Phase', phase:'league', label:`MD${idx+1}`, opponent:o.name, venue:o.venue, pot:o.pot, danger:o.danger, opponentPower:o.power,
    difficulty, opponentPower:o.power + difficultyConfig(difficulty).powerShift, ...matchResult(score, o.power, `MD${idx+1}`, o.venue, difficulty)
  }));
  const leagueTable = buildLeagueTable(score, leagueOpponents, leagueMatches, difficulty);
  const userRow = leagueTable.find(r=>r.isUser);
  const koMatches = buildKnockoutMatches(score, userRow.rank, difficulty);
  const all = [...leagueMatches, ...koMatches];
  return all.map(m=>({ ...m, leagueTable, leagueRank:userRow.rank, leaguePoints:userRow.points, qualification:userRow.zone }));
}

export function campaignOutcome(matches, squadScore){
  const leagueMatches = matches.filter(m=>m.phase==='league' || m.round === 'League Phase');
  const completedLeague = leagueMatches.length >= 8;
  const latest = matches[matches.length-1];
  const leagueTable = latest?.leagueTable || [];
  const userRow = leagueTable.find(r=>r.isUser);
  const leagueRank = userRow?.rank || latest?.leagueRank || 36;
  const leaguePoints = userRow?.points ?? leagueMatches.reduce((sum,m)=>sum+pointsFromStatus(m.status),0);
  let exit = completedLeague ? 'Champion' : 'League phase running';
  if (completedLeague && leagueRank > 24) exit = 'League phase exit';
  if (completedLeague && leagueRank <= 24) {
    for (const m of matches.filter(m=>m.round !== 'League Phase' && m.phase !== 'league')) {
      if (m.status === 'Loss') { exit = `${m.label} exit`; break; }
    }
    const koLabels = matches.filter(m=>m.round !== 'League Phase' && m.phase !== 'league').map(m=>m.label);
    if (exit === 'Champion' && !koLabels.includes('Final')) {
      exit = leagueRank <= 8 ? 'Qualified to R16' : 'Qualified to play-off';
    }
  }
  let tier = 'SS';
  if (exit==='Champion' && squadScore.total>=103) tier='SSS';
  else if (exit==='Champion') tier='SS';
  else if (exit.includes('Final')) tier='S';
  else if (exit.includes('SF')) tier='A';
  else if (exit.includes('QF')) tier='B';
  else if (exit.includes('R16') || exit.includes('Play-off')) tier='C';
  else tier='D';
  return { points:leaguePoints, leaguePoints, leagueRank, leagueTable, qualification:userRow?.zone || '', exit, tier };
}

function finishRankFromOutcome(outcome){
  if (outcome.exit === 'Champion') return 1;
  if (outcome.exit.includes('Final')) return 2;
  if (outcome.exit.includes('SF')) return 4;
  if (outcome.exit.includes('QF')) return 8;
  if (outcome.exit.includes('R16')) return 16;
  if (outcome.exit.includes('Play-off')) return 24;
  return outcome.leagueRank || 31;
}

function ordinal(n){
  const v=n%100; if(v>=11&&v<=13) return `${n}th`;
  return `${n}${['th','st','nd','rd'][Math.min(n%10,4)] || 'th'}`;
}

export function summarizeSeason(matches, outcome, score){
  const wins = matches.filter(m=>m.status==='Win').length;
  const draws = matches.filter(m=>m.status==='Draw').length;
  const losses = matches.filter(m=>m.status==='Loss').length;
  const gf = matches.reduce((s,m)=>s+(m.gf ?? Number((m.scoreline||'0-0').split('-')[0])),0);
  const ga = matches.reduce((s,m)=>s+(m.ga ?? Number((m.scoreline||'0-0').split('-')[1])),0);
  const cleanSheets = matches.filter(m=>(m.ga ?? Number((m.scoreline||'0-0').split('-')[1]))===0).length;
  const points = wins*3 + draws;
  const finishedRank = finishRankFromOutcome(outcome);
  const projectedRank = score.projected?.rank || 20;
  const delta = projectedRank - finishedRank;
  const verdict = delta >= 3 ? 'OVERPERFORMED' : delta <= -3 ? 'UNDERPERFORMED' : 'ON PAR';
  const q = outcome.qualification ? `League phase: ${ordinal(outcome.leagueRank)} on ${outcome.leaguePoints} pts, ${outcome.qualification}.` : '';
  const line = outcome.exit === 'Champion'
    ? `Champions after finishing ${ordinal(outcome.leagueRank)} in the league phase. That XI had black air force energy.`
    : `${outcome.exit}. ${q} ${losses ? 'One or two ugly nights cooked the run.' : 'Solid, but not ruthless enough.'}`;
  const note = verdict === 'UNDERPERFORMED' ? 'Great paper squad, but the simulation said “football heritage tax”.' : verdict === 'OVERPERFORMED' ? 'This team punched above the numbers. Proper chaos merchants.' : 'Pretty much what the model expected. No agenda, no robbery.';
  const biggestWin = [...matches].sort((a,b)=>((b.gf-b.ga)-(a.gf-a.ga)))[0];
  const highestScoring = [...matches].sort((a,b)=>((b.gf+b.ga)-(a.gf+a.ga)))[0];
  return { wins, draws, losses, points, gf, ga, cleanSheets, finishedRank, projectedRank, verdict, line, note, biggestWin, highestScoring, longestWinStreak: longestStreak(matches,'Win') };
}

function longestStreak(matches,status){
  let best=0,cur=0;
  for (const m of matches){ if(m.status===status){cur++; best=Math.max(best,cur)} else cur=0; }
  return best;
}

export function generatePlayerStats(slots, matches){
  const attackers = ['ST','LW','RW','CAM'];
  const creators = ['CAM','CM','RW','LW','RM','LM'];
  const defenders = ['GK','CB','LB','RB','LWB','RWB','CDM'];
  const totalGF = matches.reduce((s,m)=>s+(m.gf||0),0);
  const cleanSheets = matches.filter(m=>(m.ga||0)===0).length;
  const rows = slots.map(s=>{
    const p=s.player;
    const fit = positionFit(p,s.position);
    const attackWeight = attackers.includes(s.position) ? 1.35 : creators.includes(s.position) ? .78 : s.position==='CDM' ? .35 : .18;
    const assistWeight = creators.includes(s.position) ? 1.25 : attackers.includes(s.position) ? .72 : ['LB','RB','LWB','RWB'].includes(s.position) ? .55 : .2;
    const quality = ((p.rating-78)/22) * fit;
    const goals = s.position==='GK' ? 0 : Math.max(0, Math.round(totalGF * attackWeight * quality / 9.2 + Math.random()*2 - .8));
    const assists = s.position==='GK' ? 0 : Math.max(0, Math.round(totalGF * assistWeight * quality / 10.6 + Math.random()*2 - .7));
    const cs = defenders.includes(s.position) ? cleanSheets : null;
    return { id:p.id, name:p.name, position:s.position, club:p.club, season:p.season, rating:p.rating, goals, assists, cleanSheets:cs, score:goals*4+assists*3+(cs||0)*1.5+p.rating*.15 };
  });
  const goldenBoot = [...rows].sort((a,b)=>b.goals-a.goals)[0];
  const playmaker = [...rows].sort((a,b)=>b.assists-a.assists)[0];
  const goldenGlove = rows.find(r=>r.position==='GK') || [...rows].sort((a,b)=>(b.cleanSheets||0)-(a.cleanSheets||0))[0];
  const playerOfSeason = [...rows].sort((a,b)=>b.score-a.score)[0];
  return { rows: rows.sort((a,b)=>b.score-a.score), awards:{ goldenBoot, playmaker, goldenGlove, playerOfSeason } };
}
