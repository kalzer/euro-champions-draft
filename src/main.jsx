import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Trophy, Shuffle, RotateCcw, Sparkles, ShieldCheck, Play, Dice5, Target, Zap, Medal, Goal, Handshake, Shield, Crown, Swords, Gauge, Timer, Star, Layers, Eye, EyeOff, Wand2, Users, CalendarRange, ChevronRight, Download, Copy, Smartphone, Volume2, VolumeX, AlertTriangle, RefreshCw } from 'lucide-react';
import { formations } from './data/formations';
import { seasons } from './data/seasons';
import { players } from './data/players';
import { calculateSquad, pickOptions, pickSeason, positionFit, seasonStartYear, drawGroup, buildMatches, campaignOutcome, eligibleSlotsForPlayer, summarizeSeason, generatePlayerStats } from './game/engine';
import './style.css';

const MODES = [
  { id:'classic', name:'Classic', tag:'2 re-spins', desc:'Rating kelihatan. Draft nyaman tapi tetep butuh otak.', icon:Trophy },
  { id:'expert', name:'Expert', tag:'1 re-spin', desc:'Rating disembunyiin. Bola knowledge lu diuji.', icon:EyeOff },
  { id:'hardcore', name:'Hardcore', tag:'0 re-spin', desc:'No re-spin. Salah pick ya makan tuh penderitaan.', icon:Swords },
  { id:'chaos', name:'Chaos', tag:'0 re-spin', desc:'Opsi random lebih sedikit. Pure gambling football heritage.', icon:Zap },
  { id:'scout', name:'Scout Mode', tag:'1 re-spin', desc:'Stats kebuka, OVR hidden. Cocok buat yang sok paham talent.', icon:Eye }
];

const RESPIN_LIMITS = { classic:2, expert:1, hardcore:0, chaos:0, scout:1 };

const DRAFT_MODES = [
  { id:'balanced', name:'Balanced Roulette', desc:'Spin club-season, opsi condong ke kebutuhan slot.', icon:Shuffle },
  { id:'position-first', name:'Position First', desc:'Pilih slot dulu, sistem cari pemain yang lebih cocok.', icon:Target },
  { id:'strict-position', name:'Strict Position', desc:'Prioritas posisi asli. Lebih fair, lebih sadis.', icon:ShieldCheck },
  { id:'chaos', name:'Pure Chaos', desc:'Random club-season dan opsi terbatas. Jangan nangis.', icon:Dice5 }
];

const DIFFICULTIES = [
  { id:'casual', name:'Casual', tag:'for fun', desc:'Lawan sedikit lebih manusiawi. Cocok buat ngerasain champion run dulu.', icon:ShieldCheck },
  { id:'balanced', name:'Balanced', tag:'default', desc:'Fair fight. Squad jelek ya kebakar, squad bagus tetap bisa kena bola itu bulat.', icon:Gauge },
  { id:'legendary', name:'Legendary', tag:'sweaty', desc:'Lawan naik power. Mode buat yang pengen mentalnya dites.', icon:Swords }
];


const TACTICAL_STYLES = [
  { id:'balanced', name:'Balanced', tag:'safe', desc:'No gimmick. Tim main normal, cocok buat squad campuran.', icon:Gauge },
  { id:'gegenpress', name:'Gegenpress', tag:'high risk', desc:'Pressing brutal. Attack naik kalau stamina/defense lu kuat, tapi bisa bocor.', icon:Zap },
  { id:'tikitaka', name:'Tiki-Taka', tag:'chem boost', desc:'Chemistry dan midfielder makin penting. Cocok buat squad satu DNA.', icon:Handshake },
  { id:'counter', name:'Counter Attack', tag:'direct', desc:'Winger dan striker jadi senjata. Cocok buat tim cepat dan tajam.', icon:Target },
  { id:'parkbus', name:'Park The Bus', tag:'defense', desc:'Defense lebih aman, tapi goal chance agak turun. Haram tapi efektif.', icon:Shield }
];

const yearBounds = players.reduce((acc,p)=>{
  const y = seasonStartYear(p.season); return [Math.min(acc[0],y), Math.max(acc[1],y)];
}, [2099, 0]);

function makeSlots(formation){
  return formations[formation].slots.map((s,i)=>({ id:`${formation}-${s.position}-${i}`, ...s, player:null, assignedPosition:s.position }));
}

function seasonLabelFromYear(year){ return `${year}/${String((year+1)%100).padStart(2,'0')}`; }
function ordinal(n){ const v=n%100; if(v>=11&&v<=13) return `${n}th`; return `${n}${['th','st','nd','rd'][Math.min(n%10,4)] || 'th'}`; }
function getRarity(rating){
  if (rating >= 96) return 'mythic';
  if (rating >= 92) return 'legend';
  if (rating >= 88) return 'elite';
  if (rating >= 84) return 'star';
  return 'core';
}


function getTacticalStyle(id){ return TACTICAL_STYLES.find(s=>s.id===id) || TACTICAL_STYLES[0]; }
function getHigherDifficulty(id){
  const order = ['casual','balanced','legendary'];
  const next = order[Math.min(order.length-1, order.indexOf(id)+1)];
  return next === id ? null : next;
}
function countRoles(slots=[]){
  const filled = slots.filter(s=>s.player);
  const exactMiss = filled.filter(s=>positionFit(s.player, s.position) < .88).length;
  return {
    filled: filled.length,
    gk: filled.filter(s=>s.position==='GK').length,
    def: filled.filter(s=>['CB','LB','RB','LWB','RWB'].includes(s.position)).length,
    mid: filled.filter(s=>['CDM','CM','CAM','LM','RM'].includes(s.position)).length,
    att: filled.filter(s=>['LW','RW','ST'].includes(s.position)).length,
    wide: filled.filter(s=>['LW','RW','LM','RM','LB','RB','LWB','RWB'].includes(s.position)).length,
    creators: filled.filter(s=>['CAM','CM','RW','LW','RM','LM'].includes(s.position)).length,
    exactMiss
  };
}
function tacticalImpact(slots=[], styleId='balanced', score=null){
  const c = countRoles(slots);
  const chem = score?.chemistry || 0;
  let bonus = 0;
  let label = 'Stable setup';
  let note = 'No major tactical risk. This is the boring but sane option.';
  if (styleId === 'gegenpress') {
    bonus = (c.mid>=3 ? 2.4 : -1.2) + (c.att>=3 ? 1.2 : 0) - (c.def<4 ? 2.2 : 0) - (c.exactMiss*.5);
    label = bonus >= 0 ? 'Pressing bonus active' : 'Pressing risk detected';
    note = bonus >= 0 ? 'Midfield and attack can hunt the ball aggressively.' : 'Too open for high press. One ball over the top and mampus.';
  } else if (styleId === 'tikitaka') {
    bonus = (c.mid>=3 ? 2.1 : -1.5) + Math.min(2.6, chem*.22) - (c.exactMiss*.45);
    label = bonus >= 0 ? 'Control boost active' : 'Possession looks forced';
    note = bonus >= 0 ? 'Chemistry and midfield shape help the team recycle possession.' : 'Not enough midfield/chemistry buat sok tiki-taka.';
  } else if (styleId === 'counter') {
    bonus = (c.att>=2 ? 1.8 : -1.2) + (c.wide>=3 ? 1.5 : 0) + (c.def>=4 ? .9 : -1.1);
    label = bonus >= 0 ? 'Counter punch ready' : 'Counter lacks weapons';
    note = bonus >= 0 ? 'Wide players and forwards can punish space behind.' : 'Counter attack tanpa outlet itu cuma clearance panik.';
  } else if (styleId === 'parkbus') {
    bonus = (c.def>=4 ? 2.2 : -1.4) + (c.gk ? 1 : -2) - (c.att<2 ? 1.2 : 0);
    label = bonus >= 0 ? 'Low block secured' : 'Bus has no wheels';
    note = bonus >= 0 ? 'Defense gets safer, but don’t expect champagne football.' : 'Park the bus tanpa defense itu bukan taktik, itu pasrah.';
  }
  bonus = Math.round(bonus*10)/10;
  return { bonus, label, note, adjustedScore: Math.round(((score?.total || 0)+bonus)*10)/10 };
}
function applyTacticalScore(total, styleId, slots, score){
  return Math.max(64, Math.min(118, Math.round((Number(total || 0) + tacticalImpact(slots, styleId, score).bonus)*10)/10));
}
function buildSquadWeaknesses(slots=[], score=null, tacticalStyle='balanced'){
  const c = countRoles(slots);
  const issues = [];
  if (!c.gk) issues.push({level:'danger', title:'No natural GK', desc:'Tim lu literally belum punya kiper. Ini bukan street football coy.'});
  if (c.def < 3) issues.push({level:'danger', title:'Defense exposed', desc:'Bek kurang. Lawan elite bakal masuk kayak tamu kondangan.'});
  else if (c.def < 4) issues.push({level:'warn', title:'Backline thin', desc:'Defense masih tipis, apalagi kalau lawan winger cepat.'});
  if (c.mid < 2) issues.push({level:'warn', title:'Midfield kosong', desc:'Build-up dan duel tengah rawan kalah.'});
  if (c.att < 2) issues.push({level:'warn', title:'Attack kurang galak', desc:'Butuh minimal dua ancaman biar nggak gampang dimatiin.'});
  if (c.exactMiss >= 3) issues.push({level:'danger', title:'Too many off-position picks', desc:'Rating gede percuma kalau dipaksa main posisi ngaco.'});
  else if (c.exactMiss) issues.push({level:'info', title:'Position compromise', desc:`${c.exactMiss} pemain kurang natural di slot-nya.`});
  if ((score?.chemistry || 0) < 3 && c.filled >= 7) issues.push({level:'info', title:'Chemistry low', desc:'Banyak bintang, tapi belum tentu nyambung.'});
  if (tacticalStyle === 'gegenpress' && c.def < 4) issues.push({level:'danger', title:'Gegenpress trap', desc:'High press tanpa backline kuat bisa kena counter goblok.'});
  if (tacticalStyle === 'tikitaka' && c.mid < 3) issues.push({level:'warn', title:'Tiki-taka butuh midfielder', desc:'Kurang gelandang buat pegang tempo.'});
  if (tacticalStyle === 'counter' && c.wide < 3) issues.push({level:'warn', title:'Counter kurang lebar', desc:'Butuh sisi lapangan buat transisi cepat.'});
  if (tacticalStyle === 'parkbus' && c.att < 2) issues.push({level:'info', title:'Low block risk', desc:'Bisa solid, tapi outlet serangan minim.'});
  if (!issues.length && c.filled === 11) issues.push({level:'good', title:'No major weakness', desc:'Squad keliatan cukup waras. Sekarang tinggal bola itu bulat.'});
  return issues.slice(0,4);
}
let sfxCtx;
function playSfx(type='click', enabled=true){
  if (!enabled || typeof window === 'undefined') return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    sfxCtx = sfxCtx || new AudioContext();
    if (sfxCtx.state === 'suspended') sfxCtx.resume?.();
    const now = sfxCtx.currentTime;
    const gain = sfxCtx.createGain();
    gain.connect(sfxCtx.destination);
    gain.gain.setValueAtTime(0.0001, now);
    const patterns = {
      click:[420], spin:[260,330,420], reveal:[520,740], goal:[392,523,659,784], concede:[180,130], trophy:[523,659,784,1046], whistle:[880,660]
    };
    const notes = patterns[type] || patterns.click;
    notes.forEach((freq,i)=>{
      const osc = sfxCtx.createOscillator();
      osc.type = type === 'concede' ? 'sawtooth' : 'sine';
      osc.frequency.setValueAtTime(freq, now + i*.07);
      osc.connect(gain);
      osc.start(now + i*.07);
      osc.stop(now + i*.07 + .08);
    });
    gain.gain.exponentialRampToValueAtTime(type==='goal' || type==='trophy' ? .075 : .045, now+.02);
    gain.gain.exponentialRampToValueAtTime(.0001, now + Math.max(.18, notes.length*.08+.1));
  } catch {}
}

function drawRoundedRect(ctx, x, y, w, h, r){
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.arcTo(x+w, y, x+w, y+h, r);
  ctx.arcTo(x+w, y+h, x, y+h, r);
  ctx.arcTo(x, y+h, x, y, r);
  ctx.arcTo(x, y, x+w, y, r);
  ctx.closePath();
}
function fitText(ctx, text, maxWidth, font){
  ctx.font = font;
  const words = String(text).split(' ');
  let line = '';
  const lines = [];
  for (const word of words){
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line){ lines.push(line); line = word; }
    else line = test;
  }
  if (line) lines.push(line);
  return lines;
}
function downloadSharePng({summary,outcome,score,statPack,xi}){
  const canvas = document.createElement('canvas');
  canvas.width = 1080; canvas.height = 1350;
  const ctx = canvas.getContext('2d');
  const bg = ctx.createLinearGradient(0,0,1080,1350);
  bg.addColorStop(0,'#061122'); bg.addColorStop(.54,'#111a33'); bg.addColorStop(1,'#2a1a06');
  ctx.fillStyle = bg; ctx.fillRect(0,0,1080,1350);
  const aura = ctx.createRadialGradient(780,80,20,780,80,650);
  aura.addColorStop(0,'rgba(255,212,107,.42)'); aura.addColorStop(.45,'rgba(93,248,255,.10)'); aura.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle = aura; ctx.fillRect(0,0,1080,1350);
  ctx.fillStyle = 'rgba(255,255,255,.04)';
  for(let i=0;i<80;i++){ ctx.beginPath(); ctx.arc((i*137)%1080, (i*211)%1350, (i%4)+1, 0, Math.PI*2); ctx.fill(); }

  ctx.fillStyle = '#7bf7ff'; ctx.font = '700 34px Inter, Arial'; ctx.fillText('EUROPEAN CHAMPIONS DRAFT', 70, 95);
  ctx.fillStyle = '#ffffff'; ctx.font = '900 76px Inter, Arial'; ctx.fillText(outcome.exit, 70, 178);
  ctx.fillStyle = '#b9c8e3'; ctx.font = '500 30px Inter, Arial';
  ctx.fillText(`Projected ${ordinal(summary.projectedRank)} · Finished ${ordinal(summary.finishedRank)} · Score ${score.total}`, 70, 228);

  drawRoundedRect(ctx,70,285,940,190,34); ctx.fillStyle='rgba(255,255,255,.09)'; ctx.fill(); ctx.strokeStyle='rgba(255,212,107,.38)'; ctx.lineWidth=2; ctx.stroke();
  const stats = [[`${summary.wins}W`, 'Wins'], [`${summary.draws}D`, 'Draws'], [`${summary.losses}L`, 'Losses'], [`${summary.gf}:${summary.ga}`, 'Goals'], [`${outcome.leaguePoints ?? outcome.points}`, 'LP Pts']];
  stats.forEach((st,i)=>{ const x=105+i*180; ctx.fillStyle='#fff'; ctx.font='900 46px Inter, Arial'; ctx.fillText(st[0],x,360); ctx.fillStyle='#8da2c6'; ctx.font='700 22px Inter, Arial'; ctx.fillText(st[1].toUpperCase(),x,405); });

  ctx.fillStyle='#ffd46b'; ctx.font='900 30px Inter, Arial'; ctx.fillText('SEASON AWARDS',70,548);
  const awards = [
    ['Golden Boot', `${statPack.awards.goldenBoot.name} · ${statPack.awards.goldenBoot.goals}G`],
    ['Playmaker', `${statPack.awards.playmaker.name} · ${statPack.awards.playmaker.assists}A`],
    ['Golden Glove', `${statPack.awards.goldenGlove.name} · ${statPack.awards.goldenGlove.cleanSheets || 0}CS`],
    ['Player of Season', statPack.awards.playerOfSeason.name]
  ];
  awards.forEach((a,i)=>{ const x=70+(i%2)*485, y=590+Math.floor(i/2)*118; drawRoundedRect(ctx,x,y,450,92,24); ctx.fillStyle='rgba(255,255,255,.075)'; ctx.fill(); ctx.strokeStyle='rgba(255,255,255,.13)'; ctx.stroke(); ctx.fillStyle='#83f7ff'; ctx.font='800 21px Inter, Arial'; ctx.fillText(a[0].toUpperCase(),x+24,y+34); ctx.fillStyle='#fff'; ctx.font='800 25px Inter, Arial'; fitText(ctx,a[1],390,'800 25px Inter, Arial').slice(0,1).forEach((line,j)=>ctx.fillText(line,x+24,y+66+j*28)); });

  ctx.fillStyle='#ffd46b'; ctx.font='900 30px Inter, Arial'; ctx.fillText('YOUR XI',70,870);
  xi.slice(0,11).forEach((p,i)=>{ const col=i<6?0:1; const row=col?i-6:i; const x=70+col*485, y=906+row*58; drawRoundedRect(ctx,x,y,450,44,14); ctx.fillStyle='rgba(255,255,255,.06)'; ctx.fill(); ctx.fillStyle='#7bf7ff'; ctx.font='900 21px Inter, Arial'; ctx.fillText(p.position,x+16,y+29); ctx.fillStyle='#fff'; ctx.font='800 22px Inter, Arial'; const nm = p.name.length>24 ? p.name.slice(0,23)+'…' : p.name; ctx.fillText(nm,x+76,y+29); ctx.fillStyle='#ffd46b'; ctx.font='900 20px Inter, Arial'; ctx.fillText(String(p.rating),x+400,y+29); });

  ctx.fillStyle='#8ea3c8'; ctx.font='600 24px Inter, Arial'; ctx.fillText('Fan-made · Share your draft result',70,1290);
  const url = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.download = `european-champions-draft-${outcome.exit.toLowerCase().replaceAll(' ','-')}.png`;
  a.href = url; a.click();
}

function App(){
  const [started,setStarted]=useState(false);
  const [formation,setFormation]=useState('4-3-3');
  const [mode,setMode]=useState('classic');
  const [draftMode,setDraftMode]=useState('balanced');
  const [difficulty,setDifficulty]=useState('balanced');
  const [tacticalStyle,setTacticalStyle]=useState('balanced');
  const [soundEnabled,setSoundEnabled]=useState(true);
  const [era,setEra]=useState(yearBounds);
  const [slots,setSlots]=useState(()=>makeSlots('4-3-3'));
  const [selectedSlotId,setSelectedSlotId]=useState(null);
  const [spinMeta,setSpinMeta]=useState(null);
  const [options,setOptions]=useState([]);
  const [phase,setPhase]=useState('draft');
  const [group,setGroup]=useState([]);
  const [matches,setMatches]=useState([]);
  const [visibleMatches,setVisibleMatches]=useState(0);
  const [visibleDraw,setVisibleDraw]=useState(0);
  const [respinsUsed,setRespinsUsed]=useState(0);
  const [isSpinning,setIsSpinning]=useState(false);
  const [recentPickSlotId,setRecentPickSlotId]=useState(null);

  const selectedSlot = slots.find(s=>s.id===selectedSlotId && !s.player) || slots.find(s=>!s.player) || null;
  const draftedIds = slots.filter(s=>s.player).map(s=>s.player.id);
  const score = calculateSquad(slots);
  const full = slots.every(s=>s.player);
  const outcome = useMemo(()=> matches.length ? campaignOutcome(matches.slice(0, visibleMatches), score) : null, [matches, visibleMatches, score]);
  const finalOutcome = useMemo(()=> matches.length && visibleMatches >= matches.length ? campaignOutcome(matches, score) : null, [matches, visibleMatches, score]);
  const progressPct = Math.round((draftedIds.length / 11) * 100);

  useEffect(()=>{
    if (phase !== 'draw' || !matches.length) return;
    const leagueDraw = matches.filter(m=>m.round === 'League Phase');
    if (visibleDraw >= leagueDraw.length) {
      const id = setTimeout(()=>setPhase('simulating'), 650);
      return ()=>clearTimeout(id);
    }
    const id = setTimeout(()=>setVisibleDraw(v=>v+1), 420);
    return ()=>clearTimeout(id);
  }, [phase, visibleDraw, matches]);

  useEffect(()=>{
    if (phase !== 'simulating' || !matches.length) return;
    if (visibleMatches >= matches.length) { setPhase('result'); return; }
    const id = setTimeout(()=>setVisibleMatches(v=>v+1), 4300);
    return ()=>clearTimeout(id);
  }, [phase, visibleMatches, matches]);


  useEffect(()=>{
    if (phase !== 'simulating' || visibleMatches <= 0) return;
    const last = matches[visibleMatches-1];
    if (!last) return;
    playSfx(last.status === 'Win' ? 'goal' : last.status === 'Loss' ? 'concede' : 'whistle', soundEnabled);
  }, [visibleMatches, phase, matches, soundEnabled]);

  useEffect(()=>{
    if (phase === 'result') playSfx(finalOutcome?.exit === 'Champion' ? 'trophy' : 'whistle', soundEnabled);
  }, [phase, finalOutcome?.exit, soundEnabled]);

  function start(){
    playSfx('click', soundEnabled);
    const fresh = makeSlots(formation);
    setSlots(fresh); setSelectedSlotId(fresh.find(s=>!s.player)?.id); setStarted(true);
    setSpinMeta(null); setOptions([]); setPhase('draft'); setGroup([]); setMatches([]); setVisibleMatches(0); setVisibleDraw(0); setRespinsUsed(0); setIsSpinning(false); setRecentPickSlotId(null);
  }

  function reset(){
    playSfx('click', soundEnabled);
    setStarted(false); setPhase('draft'); setSpinMeta(null); setOptions([]); setGroup([]); setMatches([]); setVisibleMatches(0); setVisibleDraw(0); setRespinsUsed(0); setIsSpinning(false); setRecentPickSlotId(null);
    setSlots(makeSlots(formation)); setSelectedSlotId(null);
  }

  function spin(){
    if(!selectedSlot || full || phase !== 'draft' || isSpinning) return;
    const isRespin = options.length > 0;
    const limit = RESPIN_LIMITS[mode] ?? 1;
    if (isRespin && respinsUsed >= limit) return;
    playSfx('spin', soundEnabled);
    setIsSpinning(true);
    setSpinMeta(null);
    setOptions([]);
    setTimeout(()=>{
      const effectiveDraft = mode === 'chaos' ? 'chaos' : draftMode;
      const season = pickSeason({ draftedIds, eraRange:era, needPosition:selectedSlot.position, draftMode:effectiveDraft });
      const picked = pickOptions({ draftedIds, selectedSeasonId:season.id, neededSlot:selectedSlot.position, draftMode:effectiveDraft, count: mode==='chaos' || effectiveDraft==='chaos' ? 5 : 8 });
      setSpinMeta({...season, available:picked.length, totalLeft:players.filter(p=>p.seasonId===season.id && !draftedIds.includes(p.id)).length});
      setOptions(picked);
      if (isRespin) setRespinsUsed(v=>v+1);
      setIsSpinning(false);
    }, 850);
  }

  function assignPlayer(player, slotId){
    const slot = slots.find(s=>s.id===slotId);
    if (!slot || slot.player || draftedIds.includes(player.id)) return;
    const updated = slots.map(s=> s.id===slotId ? {...s, player, assignedPosition:s.position} : s);
    playSfx('reveal', soundEnabled);
    setSlots(updated); setOptions([]); setSpinMeta(null); setRecentPickSlotId(slotId);
    setTimeout(()=>setRecentPickSlotId(null), 900);
    const next = updated.find(s=>!s.player);
    setSelectedSlotId(next?.id || null);
    if (updated.every(s=>s.player)) {
      const draw = drawGroup(calculateSquad(updated).total);
      setGroup(draw); setPhase('preseason');
    }
  }

  function startCampaign(){
    playSfx('whistle', soundEnabled);
    const tacticalScore = applyTacticalScore(score.total, tacticalStyle, slots, score);
    const built = buildMatches(tacticalScore, group.length?group:drawGroup(tacticalScore), difficulty).map(m => m.label === 'Final' ? {...m, boss:true, danger:'Final Boss', bossAura:m.bossAura || 'Champions DNA'} : m);
    setMatches(built); setVisibleMatches(0); setVisibleDraw(0); setPhase('draw');
  }

  function skipCampaign(){
    if (!matches.length) return;
    playSfx('click', soundEnabled);
    setVisibleMatches(matches.length);
    setPhase('result');
  }



  function playAgain(nextDifficulty=null){
    playSfx('click', soundEnabled);
    if (nextDifficulty) setDifficulty(nextDifficulty);
    const fresh = makeSlots(formation);
    setSlots(fresh); setSelectedSlotId(fresh.find(s=>!s.player)?.id); setStarted(true);
    setSpinMeta(null); setOptions([]); setPhase('draft'); setGroup([]); setMatches([]); setVisibleMatches(0); setVisibleDraw(0); setRespinsUsed(0); setIsSpinning(false); setRecentPickSlotId(null);
  }

  if(!started) return <Home formation={formation} setFormation={setFormation} mode={mode} setMode={setMode} draftMode={draftMode} setDraftMode={setDraftMode} difficulty={difficulty} setDifficulty={setDifficulty} tacticalStyle={tacticalStyle} setTacticalStyle={setTacticalStyle} soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} era={era} setEra={setEra} start={start}/>;

  return <main className="app shellBg">
    <nav className="nav glassNav">
      <div className="brandMark"><span>ECD</span><div><b>European Champions Draft</b><small>36-team league phase · fan-made</small></div></div>
      <div className="navActions"><span>{MODES.find(m=>m.id===mode)?.name} · {getTacticalStyle(tacticalStyle).name} · {DIFFICULTIES.find(d=>d.id===difficulty)?.name}</span><button className="soundToggle" onClick={()=>setSoundEnabled(v=>!v)}>{soundEnabled ? <Volume2 size={16}/> : <VolumeX size={16}/>} SFX</button><button onClick={reset}><RotateCcw size={16}/> Reset</button></div>
    </nav>

    <section className="gameGrid pageEnter">
      <div className="panel pitchPanel stadiumPanel">
        <div className="panelHead">
          <div><span className="eyebrow">Draft Board</span><h2>{formation}</h2><small>{full ? 'XI Complete' : `Pick ${draftedIds.length+1}/11 · klik slot yang mau diisi`}</small></div>
          <strong className="scorePill">{score.total || '—'}</strong>
        </div>
        <FormationPitch slots={slots} selectedSlotId={selectedSlot?.id} setSelectedSlotId={setSelectedSlotId} phase={phase} recentPickSlotId={recentPickSlotId}/>
        <DraftProgress slots={slots} progressPct={progressPct}/>
      </div>

      <div className="panel draftPanel commandPanel">
        <ScoreCard score={score} filledCount={draftedIds.length} totalSlots={slots.length}/>
        <SquadWeaknessPanel slots={slots} score={score} tacticalStyle={tacticalStyle} compact={phase==='draft'}/>
        {phase === 'draft' && <DraftPanel mode={mode} selectedSlot={selectedSlot} spin={spin} spinMeta={spinMeta} options={options} slots={slots} assignPlayer={assignPlayer} draftedIds={draftedIds} respinsUsed={respinsUsed} respinLimit={RESPIN_LIMITS[mode] ?? 1} isSpinning={isSpinning}/>}        
        {phase === 'preseason' && <PreSeason score={score} group={group} startCampaign={startCampaign} slots={slots} difficulty={difficulty} tacticalStyle={tacticalStyle}/>}        
        {phase === 'draw' && <LeagueDrawPresentation matches={matches} visibleDraw={visibleDraw}/>}        
        {phase === 'simulating' && <Simulation matches={matches} visibleMatches={visibleMatches} outcome={outcome} slots={slots} onSkip={skipCampaign} difficulty={difficulty} tacticalStyle={tacticalStyle}/>}        
        {phase === 'result' && <Result matches={matches} outcome={finalOutcome} score={score} slots={slots} difficulty={difficulty} tacticalStyle={tacticalStyle} onPlayAgain={()=>playAgain()} onTryHigher={()=>playAgain(getHigherDifficulty(difficulty))} nextDifficulty={getHigherDifficulty(difficulty)}/>}        
      </div>
    </section>
  </main>
}

function Home({formation,setFormation,mode,setMode,draftMode,setDraftMode,difficulty,setDifficulty,tacticalStyle,setTacticalStyle,soundEnabled,setSoundEnabled,era,setEra,start}){
 const availableStats = useMemo(()=>{
  const seasonIds = new Set(players.filter(p=>{ const y=seasonStartYear(p.season); return y>=era[0] && y<=era[1]; }).map(p=>p.seasonId));
  return { playerCount: players.filter(p=>{ const y=seasonStartYear(p.season); return y>=era[0] && y<=era[1]; }).length, seasonCount: seasonIds.size };
 },[era]);
 return <main className="home shellBg">
  <section className="hero pageEnter">
    <div className="heroCopy">
      <div className="badge"><ShieldCheck size={16}/> Unofficial fan-made strategy game</div>
      <h1>Build a European champion XI. Survive the new league phase.</h1>
      <p>Draft legends and current stars dari club-season ikonik, terus gas format 36-team league phase sampai final. Sekarang UI-nya dibikin lebih gamey: card, pitch, spin, placement, dan animasi draft.</p>
      <div className="heroStats">
        <span><b>36</b> team table</span><span><b>8</b> matchdays</span><span><b>{seasons.length}</b> club-seasons</span><span><b>{players.length}</b> player cards</span>
      </div>
      <div className="heroBadges"><div className="mobilePromise"><Smartphone size={16}/> Mobile layout polished for one-hand draft flow.</div><button className="homeSoundToggle" onClick={()=>setSoundEnabled(v=>!v)}>{soundEnabled ? <Volume2 size={16}/> : <VolumeX size={16}/>} Sound FX {soundEnabled ? 'On' : 'Off'}</button></div>
    </div>
    <div className="floatingDeck" aria-hidden="true">
      <div className="mockCard mythic"><small>UCL Legend</small><b>98</b><span>LW / ST</span></div>
      <div className="mockCard legend"><small>Playmaker</small><b>94</b><span>CM</span></div>
      <div className="mockCard elite"><small>Wall</small><b>91</b><span>CB</span></div>
    </div>
  </section>

  <section className="setupBoard pageEnter delay1">
    <div className="setupHeader"><span className="eyebrow">Step 1 of 4</span><h2>Choose your rules</h2><p>Mode, draft logic, formasi, sama range era semuanya ngaruh ke pool pemain.</p></div>
    <ChoiceGrid title="Game Mode" items={MODES} selected={mode} onSelect={setMode} footer={`Re-spin limit: ${RESPIN_LIMITS[mode] ?? 1}`}/>
    <ChoiceGrid title="Draft Mode" items={DRAFT_MODES} selected={draftMode} onSelect={setDraftMode}/>
    <ChoiceGrid title="Difficulty" items={DIFFICULTIES} selected={difficulty} onSelect={setDifficulty}/>
    <ChoiceGrid title="Tactical Style" items={TACTICAL_STYLES} selected={tacticalStyle} onSelect={setTacticalStyle} footer={getTacticalStyle(tacticalStyle).tag}/>
    <FormationPicker formation={formation} setFormation={setFormation}/>
    <EraSlider era={era} setEra={setEra} stats={availableStats}/>
    <button className="primary big startBtn" onClick={start}><Trophy/> Start Draft <ChevronRight size={18}/></button>
  </section>

  <ClubSeasonPool seasons={seasons}/>
 </main>
}


function ClubSeasonPool({seasons}){
  const [expanded,setExpanded] = useState(false);
  const visibleSeasons = expanded ? seasons : seasons.slice(0, 12);
  const clubCount = new Set(seasons.map(s=>s.club)).size;
  const winnerCount = seasons.filter(s=>String(s.result).toLowerCase().includes('winner')).length;

  return <section className="poolSection pageEnter delay2">
    <div className="poolCompactHead">
      <div className="poolTitleBlock">
        <span className="eyebrow">Data pool</span>
        <h2>Club-season cards</h2>
        <p>Pool-nya sekarang dibuat ringkas. Nggak lagi numpuk panjang di depan, tinggal swipe buat intip isi data.</p>
      </div>
      <div className="poolQuickStats">
        <span><b>{seasons.length}</b> seasons</span>
        <span><b>{clubCount}</b> clubs</span>
        <span><b>{winnerCount}</b> winners</span>
      </div>
    </div>

    <div className="poolRailWrap">
      <div className="poolRail" aria-label="Club-season data pool slider">
        {visibleSeasons.map((s,i)=><article className="poolSeasonCard" key={s.id} style={{animationDelay:`${i*35}ms`}}>
          <div className="poolCardTop"><Layers size={16}/><span>{s.result}</span></div>
          <b>{s.club}</b>
          <em>{s.season}</em>
          <small>{s.theme}</small>
        </article>)}
      </div>
      <div className="poolFade" aria-hidden="true"/>
    </div>

    <button className="poolToggle" type="button" onClick={()=>setExpanded(v=>!v)}>
      {expanded ? 'Ringkas lagi' : `Lihat semua ${seasons.length} card`} <ChevronRight size={16}/>
    </button>
  </section>
}

function ChoiceGrid({title,items,selected,onSelect,footer}){
 return <section className="choiceSection"><div className="choiceHead"><h3>{title}</h3>{footer && <span>{footer}</span>}</div><div className="choiceGrid">{items.map(item=>{ const Icon=item.icon || Sparkles; return <button key={item.id} onClick={()=>onSelect(item.id)} className={`choiceCard ${selected===item.id?'active':''}`}><Icon size={19}/><b>{item.name}</b><em>{item.tag}</em><small>{item.desc}</small></button>})}</div></section>
}

function FormationPicker({formation,setFormation}){
 return <section className="choiceSection"><div className="choiceHead"><h3>Formation</h3><span>{formation} selected</span></div><div className="formationGrid">{Object.keys(formations).map(f=><button key={f} onClick={()=>setFormation(f)} className={`formationCard ${formation===f?'active':''}`}><b>{f}</b><MiniPitch slots={formations[f].slots}/><small>{formations[f].slots.map(s=>s.position).join(' · ')}</small></button>)}</div></section>
}
function MiniPitch({slots}){ return <div className="miniPitch">{slots.map((s,i)=><i key={`${s.position}-${i}`} style={{left:`${s.x}%`, top:`${s.y}%`}}/>)}</div> }

function EraSlider({era,setEra,stats}){
  const [minBound,maxBound]=yearBounds;
  function setMin(v){ const n=Number(v); setEra(([_,max])=>[Math.min(n,max),max]); }
  function setMax(v){ const n=Number(v); setEra(([min])=>[min,Math.max(n,min)]); }
  return <section className="eraBox choiceSection"><div className="choiceHead"><h3><CalendarRange size={18}/> Era Range</h3><span>{seasonLabelFromYear(era[0])} – {seasonLabelFromYear(era[1])}</span></div>
    <div className="rangeRows">
      <label><span>Start</span><input type="range" min={minBound} max={maxBound} value={era[0]} onChange={e=>setMin(e.target.value)}/><b>{era[0]}</b></label>
      <label><span>End</span><input type="range" min={minBound} max={maxBound} value={era[1]} onChange={e=>setMax(e.target.value)}/><b>{era[1]+1}</b></label>
    </div>
    <div className="eraStats"><span><b>{stats?.seasonCount ?? '-'}</b> club-seasons</span><span><b>{stats?.playerCount ?? '-'}</b> players</span>{stats?.playerCount < 80 && <em>Tiny pool. Hope your ball knowledge is serious.</em>}</div>
  </section>
}

function FormationPitch({slots,selectedSlotId,setSelectedSlotId,phase,recentPickSlotId}){
  return <div className="pitch">
    <div className="pitchGlow"></div><div className="pitchLine halfway"></div><div className="pitchLine centerCircle"></div><div className="pitchLine box topBox"></div><div className="pitchLine box bottomBox"></div>
    {slots.map((s)=><button key={s.id} disabled={!!s.player || phase!=='draft'} onClick={()=>setSelectedSlotId(s.id)} className={`slot ${selectedSlotId===s.id?'selected':''} ${s.player?'filled':''} ${recentPickSlotId===s.id?'justPlaced':''}`} style={{left:`${s.x}%`, top:`${s.y}%`}}>
      <small>{s.position}</small><b>{s.player?.name || '+ Empty'}</b><em>{s.player ? `${s.player.club} · ${s.player.season}` : 'click to fill'}</em>{s.player && <strong>{s.player.rating}</strong>}
    </button>)}
  </div>
}

function DraftProgress({slots,progressPct}){
 const filled = slots.filter(s=>s.player).length;
 const counts = {
  GK: slots.filter(s=>s.player && s.position==='GK').length,
  DEF: slots.filter(s=>s.player && ['CB','LB','RB','LWB','RWB'].includes(s.position)).length,
  MID: slots.filter(s=>s.player && ['CDM','CM','CAM','LM','RM'].includes(s.position)).length,
  ATT: slots.filter(s=>s.player && ['LW','RW','ST'].includes(s.position)).length
 };
 const insight = filled === 0 ? 'Start with a spine: GK, CB, CM, ST biar nggak kacau.' : !counts.GK ? 'You still need a goalkeeper. Jangan jadi PSG meme.' : counts.DEF < 3 ? 'Defense might get cooked. Cari bek dulu coy.' : counts.MID < 2 ? 'Midfield looks thin. Nanti kalah duel di tengah.' : counts.ATT < 2 ? 'Attack kurang galak. Butuh killer.' : filled === 11 ? 'XI complete. Time to see if this squad is legit.' : 'Squad shape udah mulai kebentuk.';
 return <div className="draftProgress"><div><span>Draft Progress</span><b>{filled}/11 Players</b></div><i><em style={{width:`${progressPct}%`}}/></i><p>{insight}</p><div className="roleChips"><span>GK {counts.GK}/1</span><span>DEF {counts.DEF}</span><span>MID {counts.MID}</span><span>ATT {counts.ATT}</span></div></div>
}

function ScoreCard({score, filledCount=0, totalSlots=11}){
  const hasPlayers = filledCount > 0;
  const powerValue = hasPlayers ? score.powerPct : 0;
  const chemistryValue = hasPlayers ? score.chemistryPct : 0;
  const tacticalValue = hasPlayers ? score.tacticalPct : 0;

  return <div className={`scoreCard ${hasPlayers ? 'live' : ''}`}>
    <Sparkles/>
    <div><span>Squad Power</span><strong>{hasPlayers ? score.total : '—'}</strong><small>{filledCount}/{totalSlots} players placed</small></div>
    <p>AVG {score.avg} · Chem +{score.chemistry} · Balance {score.balance>=0?'+':''}{score.balance} · Big Match +{score.bigMatch}</p>
    <MetricBar label="Power" value={powerValue}/>
    <MetricBar label="Chemistry" value={chemistryValue}/>
    <MetricBar label="Tactical" value={tacticalValue}/>
  </div>
}
function MetricBar({label,value}){ return <div className="metricBar"><span>{label}</span><i><em style={{width:`${value <= 0 ? 0 : Math.max(4,Math.min(100,value))}%`}}/></i></div> }

function DraftPanel({mode,selectedSlot,spin,spinMeta,options,slots,assignPlayer,draftedIds,respinsUsed,respinLimit,isSpinning}){
  const isRespin = options.length > 0 || !!spinMeta;
  const canSpin = !!selectedSlot && (!isRespin || respinsUsed < respinLimit) && !isSpinning;
  return <>
    <div className="slotTarget glassMini"><Target size={18}/><div><span>Selected Slot</span><b>{selectedSlot ? selectedSlot.position : 'No empty slot'}</b><small>Re-spin left: {Math.max(0, respinLimit-respinsUsed)} / {respinLimit}</small></div></div>
    <button className="primary fullBtn spinBtn" onClick={spin} disabled={!canSpin}>{isSpinning ? <Wand2 className="spinIcon"/> : <Shuffle/>} {isSpinning ? 'Drawing club-season...' : isRespin ? 'Re-spin draw' : 'Spin club season'}</button>
    {isSpinning && <SpinRoulette/>}
    {spinMeta && !isSpinning && <div className="spinBanner"><Dice5/><div><span>Club-season draw</span><b>{spinMeta.club} · {spinMeta.season}</b><small>{spinMeta.theme} · {spinMeta.totalLeft} players left in pool</small></div></div>}
    {spinMeta && !isSpinning && options.length > 0 && <DraftRevealBanner options={options}/>}
    <div className="options">
      {options.length===0 && !isSpinning && <p className="muted emptyHint">Pilih slot di lapangan, klik spin, nanti keluar opsi pemain. Pemain yang udah masuk squad nggak akan muncul lagi.</p>}
      {options.map((p,i)=><PlayerCard key={p.id} player={p} mode={mode} selectedSlot={selectedSlot} slots={slots} assignPlayer={assignPlayer} draftedIds={draftedIds} index={i}/>) }
    </div>
  </>
}

function SpinRoulette(){
 const sample = ['Real Madrid 2016/17','Barcelona 2014/15','Bayern 2012/13','PSG 2025/26','Inter 2009/10','Man City 2022/23','Liverpool 2018/19'];
 return <div className="roulette"><div>{sample.map(s=><b key={s}>{s}</b>)}</div><span>Locking the draw...</span></div>
}

function DraftRevealBanner({options}){
 const best = [...options].sort((a,b)=>b.rating-a.rating)[0];
 return <div className="draftRevealBanner">
  <Sparkles size={18}/><div><span>Pack reveal animation</span><b>{options.length} cards revealed</b><small>Highest pull: {best?.name} · {best?.rating} OVR</small></div>
 </div>
}

function PlayerCard({player, mode, selectedSlot, slots, assignPlayer, index=0}){
  const available = eligibleSlotsForPlayer(player, slots, false);
  const priority = selectedSlot && available.some(s=>s.id===selectedSlot.id) ? selectedSlot.id : available[0]?.id;
  const hideRating = mode==='expert' || mode==='scout';
  const rarity = getRarity(player.rating);
  return <article className={`playerCard ${rarity} draftReveal`} style={{animationDelay:`${index*65}ms`}}>
    <div className="cardTop"><span>{player.club} · {player.season}</span><strong>{hideRating?'??':player.rating}</strong></div><i className="revealStamp">REVEALED</i>
    <h3>{player.name}</h3>
    <p>{player.positions.join(' / ')}{selectedSlot ? ` · Fit ${Math.round(positionFit(player, selectedSlot.position)*100)}%` : ''}</p>
    <small>{player.traits.join(' · ')}</small>
    <div className="positionChoices">
      {available.length===0 && <button disabled>No compatible empty slot</button>}
      {available.map(s=><button key={s.id} className={s.id===priority?'recommended':''} onClick={()=>assignPlayer(player,s.id)}>Put as {s.position}</button>)}
    </div>
  </article>
}



function SquadWeaknessPanel({slots,score,tacticalStyle,compact=false}){
  const filled = slots.filter(s=>s.player).length;
  if (!filled) return null;
  const issues = buildSquadWeaknesses(slots, score, tacticalStyle);
  const style = getTacticalStyle(tacticalStyle);
  const impact = tacticalImpact(slots, tacticalStyle, score);
  return <section className={`weaknessPanel ${compact?'compact':''}`}>
    <div className="weaknessHead"><AlertTriangle size={17}/><div><b>Squad weakness warning</b><small>{style.name} · {impact.label} ({impact.bonus>=0?'+':''}{impact.bonus})</small></div></div>
    <div className="weaknessList">
      {issues.map((i,idx)=><article key={`${i.title}-${idx}`} className={`weaknessItem ${i.level}`}><b>{i.title}</b><span>{i.desc}</span></article>)}
    </div>
  </section>
}

function TacticalBrief({slots,score,tacticalStyle}){
  const style = getTacticalStyle(tacticalStyle);
  const impact = tacticalImpact(slots, tacticalStyle, score);
  const Icon = style.icon || Gauge;
  return <section className="tacticalBrief">
    <div className="tacticalIcon"><Icon size={22}/></div>
    <div><span className="eyebrow">Tactical setup</span><h3>{style.name}</h3><p>{impact.note}</p></div>
    <strong>{impact.bonus>=0?'+':''}{impact.bonus}</strong>
  </section>
}

function LeagueDrawPresentation({matches,visibleDraw}){
  const league = matches.filter(m=>m.round === 'League Phase');
  const visible = league.slice(0, visibleDraw);
  const pots = [1,2,3,4].map(pot => visible.filter(m=>m.pot===pot));
  return <div className="drawShow pageEnter">
    <div className="drawOrb"><Layers size={42}/></div>
    <span className="eyebrow">League Phase Draw</span>
    <h2>Drawing 8 opponents</h2>
    <p className="muted">2 dari tiap pot, 4 home + 4 away. Lawan muncul satu-satu biar kerasa undiannya, bukan langsung jebret.</p>
    <div className="drawProgress"><em style={{width:`${(visibleDraw/Math.max(1,league.length))*100}%`}}/></div>
    <div className="potGrid">
      {pots.map((rows,idx)=><section key={idx} className="potCard">
        <b>Pot {idx+1}</b>
        {rows.length===0 && <small className="muted">Drawing...</small>}
        {rows.map((m,i)=><article key={`${m.label}-${m.opponent}`} className="drawOpponent" style={{animationDelay:`${i*80}ms`}}>
          <span>{m.label}</span><strong>{m.opponent}</strong><em>{m.venue} · {m.danger}</em>
        </article>)}
      </section>)}
    </div>
    <div className="drawTicker">{visibleDraw < league.length ? `Drawing matchday ${visibleDraw+1}...` : 'Schedule locked. Opening the Match Centre...'}</div>
  </div>
}

function LiveEvents({match}){
  if(!match) return null;
  const win = match.status === 'Win';
  const loss = match.status === 'Loss';
  const userScorer = win ? 'Your star forward' : loss ? match.opponent : 'Your midfield';
  const events = [
    {min:12, text:`High press early. ${match.venue === 'Away' ? 'Away crowd is nasty.' : 'Home crowd is bouncing.'}`},
    {min:28, text: win ? `GOAL — ${userScorer} breaks the line.` : loss ? `Danger — ${match.opponent} forces a big save.` : 'Both teams trading chances.'},
    {min:51, text: match.gf>0 ? `Assist chance created. Your XI looking sharp.` : `Attack still blunt. Need more movement.`},
    {min:73, text: win ? 'Control phase. Midfield killing the tempo.' : loss ? 'Defensive line getting cooked. Pain.' : 'Tense final spell. One goal can flip this.'},
    {min:90, text:`FT incoming — ${match.status} ${match.scoreline}. ${match.note}`}
  ];
  return <div className="eventTicker">{events.map((e,i)=><div key={e.min} style={{animationDelay:`${i*120}ms`}}><b>{e.min}'</b><span>{e.text}</span></div>)}</div>
}

function CompactLeagueTable({table}){
  if(!table?.length) return null;
  const user = table.find(r=>r.isUser);
  const around = user ? table.slice(Math.max(0,user.rank-4), Math.min(table.length,user.rank+3)) : table.slice(0,8);
  return <section className="compactTableBox">
    <div className="choiceHead"><h3>Live 36-team table</h3><span>{user ? `You: ${ordinal(user.rank)} · ${user.zone}` : 'League phase'}</span></div>
    <div className="miniZones"><span className="seed">1–8 R16</span><span className="playoff">9–24 Play-off</span><span className="out">25–36 Out</span></div>
    <LeagueTable table={around}/>
  </section>
}


function CampaignRoad({matches=[], visibleMatches=0, currentLabel=null, compact=false}){
  const labels = getRoundOrder(matches);
  return <section className={`campaignRoad ${compact?'compact':''}`}>
    <div className="choiceHead"><h3><Trophy size={17}/> Road to UCL Final</h3><span>{visibleMatches}/{Math.max(1,matches.length)} played</span></div>
    <div className="roadRail">
      {labels.map(label=>{
        const idx = matches.findIndex(m=>m.label===label);
        const m = idx >= 0 ? matches[idx] : null;
        const done = idx >= 0 && idx < visibleMatches;
        const active = currentLabel === label;
        const locked = idx === -1;
        return <div key={label} className={`roadNode ${done?'done':''} ${active?'active':''} ${locked?'locked':''} ${m?.status?.toLowerCase() || ''}`}>
          <b>{label}</b><span>{done ? m.status : active ? 'LIVE' : locked ? 'TBD' : 'Next'}</span>
        </div>
      })}
    </div>
  </section>
}

function OpponentReveal({match,difficulty}){
  if(!match) return null;
  const threat = Math.round(match.opponentPower || 85);
  const diff = DIFFICULTIES.find(d=>d.id===difficulty)?.name || 'Balanced';
  const styles = match.boss ? `Final Boss · ${match.bossAura || 'Champions DNA'}` : match.label === 'Final' ? 'Final night' : match.venue === 'Away' ? 'Hostile away crowd' : match.venue === 'Home' ? 'Home advantage' : 'Two-leg pressure';
  return <section className={`opponentReveal ${match.label==='Final'?'finalReveal':''} ${match.boss?'bossReveal':''}`}>
    <div className="opponentBadge">{match.boss ? <Crown size={26}/> : <Swords size={26}/>}<span>{teamAbbr(match.opponent)}</span></div>
    <div className="opponentCopy"><span className="eyebrow">Opponent reveal</span><h2>Your XI vs {match.opponent}</h2><p>{match.label} · {styles} · Difficulty: {diff}</p></div>
    <div className="threatMeter"><span>Threat Level</span><b>{threat}</b><i><em style={{width:`${Math.min(100,threat)}%`}}/></i><small>{match.danger || 'European threat'}</small></div>
  </section>
}

function MatchRatings({match,slots}){
  const ratings = buildMatchRatings(slots, match);
  if(!ratings.length) return null;
  return <section className="matchRatings">
    <div className="choiceHead"><h3><Star size={17}/> Player rating after match</h3><span>{match.label} · {match.status} {match.scoreline}</span></div>
    <div className="ratingRows">
      {ratings.slice(0,6).map((r,i)=><div key={r.id} className="ratingRow"><em className={`posTag pos-${r.position}`}>{r.position}</em><b>{r.name}</b><span>{i===0?'MOTM':'Form'}</span><strong>{r.rating}</strong></div>)}
    </div>
  </section>
}

function AchievementGrid({achievements}){
  if(!achievements?.length) return null;
  return <section className="achievementBox"><span className="sectionLabel">ACHIEVEMENTS UNLOCKED</span><div className="achievementGrid">
    {achievements.map((a,i)=><article key={`${a.title}-${i}`} className={`achievement ${a.tier}`}><Medal size={18}/><div><b>{a.title}</b><small>{a.desc}</small></div></article>)}
  </div></section>
}

function KnockoutBracket({matches,visibleMatches}){
  const completed = matches.slice(0,visibleMatches).filter(m=>m.round !== 'League Phase');
  const allKo = matches.filter(m=>m.round !== 'League Phase');
  if(!allKo.length) return null;
  const labels = ['Play-off','R16','QF','SF','Final'];
  return <section className="bracketBox">
    <div className="choiceHead"><h3><Crown size={17}/> Knockout path</h3><span>{completed.length}/{allKo.length} played</span></div>
    <div className="bracketRail">
      {labels.map(label=>{
        const m = completed.find(x=>x.label===label);
        const scheduled = allKo.find(x=>x.label===label);
        const active = scheduled && !m && completed.length === allKo.findIndex(x=>x.label===label);
        return <div key={label} className={`bracketNode ${m?.status?.toLowerCase() || ''} ${active?'active':''} ${scheduled?'scheduled':'locked'}`}>
          <b>{label}</b><span>{m?.opponent || scheduled?.opponent || 'TBD'}</span><em>{m ? `${m.status} ${m.scoreline}` : scheduled ? 'upcoming' : 'locked'}</em>
        </div>
      })}
    </div>
  </section>
}

function ShareCard({summary,outcome,score,statPack,slots,difficulty,tacticalStyle,achievements=[]}){
  const xi = slots.filter(s=>s.player).slice(0,11);
  return <section className={`shareCard premiumShare ${outcome.exit==='Champion'?'champion':''}`}>
    <div className="shareCardHeader"><span>EUROPEAN CHAMPIONS DRAFT</span><b>{outcome.exit}</b><small>{DIFFICULTIES.find(d=>d.id===difficulty)?.name} · {getTacticalStyle(tacticalStyle).name} · Finished {ordinal(summary.finishedRank)}</small></div>
    <div className="sharePitchMini">{xi.map((s)=><i key={s.id} style={{left:`${s.x}%`, top:`${s.y}%`}}><em>{s.position}</em></i>)}</div>
    <div className="shareStats"><span>{summary.wins}W</span><span>{summary.draws}D</span><span>{summary.losses}L</span><span>{summary.gf}:{summary.ga}</span><span>{score.total}</span></div>
    <div className="shareBadges"><span>MOTM: {statPack.awards.playerOfSeason.name}</span><span>{achievements[0]?.title || 'Campaign Logged'}</span></div>
    <p>Top scorer: <b>{statPack.awards.goldenBoot.name}</b> · POTS: <b>{statPack.awards.playerOfSeason.name}</b></p>
  </section>
}

function PreSeason({score,group,startCampaign,slots,difficulty,tacticalStyle}){
  const odds = score.odds;
  return <div className="preseason pageEnter">
    <div className="trophy">🏆</div><h2>Squad Complete</h2><p className="muted">Ini proyeksi sebelum match generate. Abis ini baru league phase jalan satu-satu.</p>
    <section className="oddsBox">
      <div className="oddsHead"><span>PRE-SEASON ODDS</span><small>Based on squad avg, chemistry, balance</small></div>
      <div className="project"><div><span>PROJECTED FINISH</span><b>{score.projected.finish}</b></div><div><span>EXPECTED POINTS</span><b>{score.projected.expectedPoints}</b></div></div>
      <OddsBar label="Win Europe" value={odds.win}/><OddsBar label="Reach Final" value={odds.final}/><OddsBar label="Reach Semi" value={odds.semi}/><OddsBar label="Qualify Knockout" value={odds.knockout}/><OddsBar label="Disaster Chance" value={odds.disaster}/>
    </section>
    <TacticalBrief slots={slots} score={score} tacticalStyle={tacticalStyle}/>
    <SquadWeaknessPanel slots={slots} score={score} tacticalStyle={tacticalStyle}/>
    <section className="miniXIbox"><span className="sectionLabel">Your XI Preview · {DIFFICULTIES.find(d=>d.id===difficulty)?.name} difficulty · {getTacticalStyle(tacticalStyle).name}</span>{slots.map(s=><span key={s.id}><b>{s.position}</b>{s.player?.name}</span>)}</section>
    <CampaignRoad matches={[]} visibleMatches={0} compact/>
    <section className="groupBox"><h3>League Phase Draw</h3><p className="muted">8 lawan: 2 dari tiap pot, 4 home + 4 away.</p><div className="groupTeam you"><b>You</b><span>Your Draft XI</span><em>Custom Squad</em></div>{group.map((g,i)=><div key={`${g.name}-${g.label}`} className="groupTeam" style={{animationDelay:`${i*70}ms`}}><b>{g.label} · Pot {g.pot}</b><span>{g.name}</span><em>{g.venue} · {g.danger}</em></div>)}</section>
    <button className="primary fullBtn" onClick={startCampaign}><Play/> Start Campaign</button>
  </div>
}

function OddsBar({label,value}){ return <div className="oddsRow"><div><span>{label}</span><b>{value}%</b></div><i><em style={{width:`${Math.min(100,value)}%`}}></em></i></div> }


const OPPONENT_SHAPE = [
  { position:'GK', x:50, y:8 }, { position:'LB', x:86, y:28 }, { position:'CB', x:62, y:25 }, { position:'CB', x:38, y:25 }, { position:'RB', x:14, y:28 },
  { position:'CDM', x:50, y:42 }, { position:'CM', x:68, y:52 }, { position:'CM', x:32, y:52 },
  { position:'LW', x:82, y:76 }, { position:'ST', x:50, y:83 }, { position:'RW', x:18, y:76 }
];

function shortPlayerName(name=''){
  const clean = String(name).replace(/\(.+?\)/g,'').trim();
  const parts = clean.split(' ').filter(Boolean);
  return parts.length > 1 ? parts.at(-1) : clean.slice(0,10);
}

function teamAbbr(name='OPP'){
  const words = String(name).replace(/FC|CF|AC|CP|SC|Club/gi,'').trim().split(/\s+/).filter(Boolean);
  return (words.length >= 2 ? words.map(w=>w[0]).join('') : String(name).slice(0,3)).slice(0,4).toUpperCase();
}


function seededValue(seed=''){
  let h = 2166136261;
  for (let i=0;i<String(seed).length;i++) h = Math.imul(h ^ String(seed).charCodeAt(i), 16777619);
  return ((h >>> 0) % 1000) / 1000;
}

function buildMatchRatings(slots=[], match=null){
  if(!match) return [];
  const resultBoost = match.status === 'Win' ? .55 : match.status === 'Draw' ? .08 : -.45;
  return slots.filter(s=>s.player).map((s)=>{
    const p = s.player;
    const bucket = slotBucket(s.position);
    const seed = seededValue(`${match.label}-${match.opponent}-${p.id}`);
    let rating = 6.05 + ((p.rating || 84) - 84) * .055 + resultBoost + (seed * .9);
    if (bucket === 'ATT') rating += (match.gf || 0) * .18 - (match.ga || 0) * .035;
    if (bucket === 'MID') rating += (match.gf || 0) * .10 + (match.status !== 'Loss' ? .15 : -.05);
    if (bucket === 'DEF') rating += (match.ga === 0 ? .45 : -(match.ga || 0) * .16) + (match.status === 'Win' ? .12 : 0);
    if (bucket === 'GK') rating += (match.ga === 0 ? .75 : -(match.ga || 0) * .2) + (seed * .25);
    rating = Math.max(4.8, Math.min(9.8, rating));
    return { id:p.id, name:p.name, position:s.position, club:p.club, rating:Math.round(rating*10)/10, raw:rating };
  }).sort((a,b)=>b.raw-a.raw);
}

function getRoundOrder(matches=[]){
  const labels = ['MD1','MD2','MD3','MD4','MD5','MD6','MD7','MD8'];
  if (matches.some(m=>m.label==='Play-off')) labels.push('Play-off');
  labels.push('R16','QF','SF','Final');
  return labels;
}


function buildAchievements({summary,outcome,score,slots,matches,statPack,difficulty}){
  const xi = slots.filter(s=>s.player);
  const maxClub = Math.max(...Object.values(xi.reduce((m,s)=>(m[s.player.club]=(m[s.player.club]||0)+1,m),{})),0);
  const maxSeason = Math.max(...Object.values(xi.reduce((m,s)=>(m[s.player.seasonId]=(m[s.player.seasonId]||0)+1,m),{})),0);
  const achievements = [];
  if(outcome.exit==='Champion') achievements.push({title:'Road to UCL Final', desc:'Completed the whole campaign and lifted the trophy.', tier:'gold'});
  if(difficulty==='legendary' && !outcome.exit.includes('League phase exit')) achievements.push({title:'Legendary Survivor', desc:'Survived sweaty difficulty without getting folded early.', tier:'purple'});
  if(summary.losses===0) achievements.push({title:'Invincible Run', desc:'Finished the campaign without a single loss.', tier:'gold'});
  if(summary.cleanSheets>=4) achievements.push({title:'Clean Sheet King', desc:`${summary.cleanSheets} clean sheets. Backline was moving like tax collectors.`, tier:'blue'});
  if(maxClub>=5) achievements.push({title:'Club DNA Merchant', desc:`${maxClub} players from the same club. Proper chemistry abuse.`, tier:'cyan'});
  if(maxSeason>=4) achievements.push({title:'Same Season Sauce', desc:`${maxSeason} players from one club-season core.`, tier:'cyan'});
  if(score.total < 86 && !outcome.exit.includes('League phase exit')) achievements.push({title:'Underdog Run', desc:'Low squad power, still made noise. Football heritage.', tier:'green'});
  if(statPack.awards.goldenBoot.goals >= 7) achievements.push({title:'Golden Boot Demon', desc:`${statPack.awards.goldenBoot.name} dropped ${statPack.awards.goldenBoot.goals} goals.`, tier:'red'});
  if(matches.some(m=>m.label==='Final' && m.status==='Win')) achievements.push({title:'Final Boss Cleared', desc:'Won the biggest night of the campaign.', tier:'gold'});
  if(!achievements.length) achievements.push({title:'Campaign Logged', desc:'Completed a full European run. Not every story needs confetti.', tier:'silver'});
  return achievements.slice(0,8);
}

function slotBucket(position){
  if (position === 'GK') return 'GK';
  if (['CB','LB','RB','LWB','RWB'].includes(position)) return 'DEF';
  if (['CDM','CM','CAM','LM','RM'].includes(position)) return 'MID';
  return 'ATT';
}

function firstByBucket(rows, bucket, fallback=0){
  return rows.find(r=>slotBucket(r.position)===bucket) || rows[fallback] || rows[0];
}

function buildOpponentDots(opponent){
  const abbr = teamAbbr(opponent);
  return OPPONENT_SHAPE.map((p,i)=>({ ...p, id:`opp-${i}`, team:'opponent', name:`${abbr} ${p.position}`, label:p.position }));
}

function buildMatchVisualFlow(match, slots){
  const own = slots.filter(s=>s.player).map((s,i)=>({ ...s, id:`own-${s.id}`, team:'own', name:s.player.name, label:shortPlayerName(s.player.name), rating:s.player.rating }));
  const opp = buildOpponentDots(match?.opponent || 'Opponent');
  const userOnBall = match?.status !== 'Loss' || (match?.gf || 0) >= (match?.ga || 0);
  const rows = userOnBall ? own : opp;
  const start = userOnBall ? firstByBucket(rows,'DEF',1) : firstByBucket(rows,'DEF',1);
  const middle = firstByBucket(rows,'MID',5);
  const creator = rows.find(r=>['CAM','LW','RW','LM','RM','CM'].includes(r.position)) || middle;
  const finisher = firstByBucket(rows,'ATT',8);
  const target = userOnBall ? { id:'goal-top', team:'goal', name:'Goal', label:'GOAL', x:50, y:4 } : { id:'goal-bottom', team:'goal', name:'Goal', label:'GOAL', x:50, y:96 };
  const saveTarget = userOnBall ? (opp.find(p=>p.position==='GK') || target) : (own.find(p=>p.position==='GK') || target);
  const hasGoal = userOnBall ? (match?.gf || 0) > 0 : (match?.ga || 0) > 0;
  const sequence = hasGoal ? [start, middle, creator, finisher, target] : [start, middle, creator, finisher, saveTarget];
  const headline = hasGoal
    ? (userOnBall ? `GOOOAL! ${finisher?.label || 'Your XI'} buries it.` : `${teamAbbr(match?.opponent)} scores. Defense got cooked.`)
    : (userOnBall ? `${finisher?.label || 'Forward'} shoots — saved.` : `Huge save. Your GK keeps it alive.`);
  return { own, opp, sequence, userOnBall, hasGoal, headline };
}

function passLineStyle(a,b,i){
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const length = Math.sqrt(dx*dx + dy*dy);
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  return { left:`${a.x}%`, top:`${a.y}%`, width:`${length}%`, transform:`rotate(${angle}deg)`, animationDelay:`${i*.48}s` };
}

function MatchVisualizer({match, slots, index}){
  if(!match) return null;
  const visual = buildMatchVisualFlow(match, slots || []);
  const points = visual.sequence;
  const vars = points.slice(0,5).reduce((acc,p,i)=>({ ...acc, [`--x${i+1}`]:`${p.x}%`, [`--y${i+1}`]:`${p.y}%` }), {});
  const activeIds = new Set(points.map(p=>p.id));
  const phaseText = match.status === 'Win' ? 'Your XI momentum' : match.status === 'Loss' ? `${teamAbbr(match.opponent)} pressure` : 'End-to-end chaos';

  return <section className="fmViewer" key={`${match.label}-${match.opponent}-${index}`} style={vars}>
    <div className="fmTopBar">
      <div><span>{match.label} · {match.venue}</span><b>{phaseText}</b></div>
      <strong>{match.gf}-{match.ga}</strong>
    </div>
    <div className="fmPitch">
      <div className="fmGrass"/><div className="fmHalf"/><div className="fmCircle"/><div className="fmBox fmBoxTop"/><div className="fmBox fmBoxBottom"/><div className="fmGoal fmGoalTop"/><div className="fmGoal fmGoalBottom"/>
      {points.slice(0,-1).map((p,i)=><i key={`trace-${i}`} className={`passTrace ${visual.userOnBall?'own':'opponent'}`} style={passLineStyle(p, points[i+1], i)}/>)}
      {[...visual.opp, ...visual.own].map((p,i)=><div key={p.id} className={`fmPlayer ${p.team} ${activeIds.has(p.id)?'active':''}`} style={{left:`${p.x}%`, top:`${p.y}%`, '--dx':`${((i%3)-1)*5}px`, '--dy':`${(i%2?1:-1)*4}px`, animationDelay:`${i*90}ms`}}>
        <b>{p.label}</b><small>{p.position}</small>
      </div>)}
      <div className="matchBall"/>
      {visual.hasGoal && <div className={`goalFlash ${visual.userOnBall?'own':'opponent'}`}>GOAL</div>}
    </div>
    <div className="fmCommentary">
      <span>Live highlight</span>
      <b>{visual.headline}</b>
      <small>{match.note} · final score locked by squad power simulation</small>
    </div>
  </section>
}

function Simulation({matches,visibleMatches,outcome,slots,onSkip,difficulty,tacticalStyle}){
  const current = matches[visibleMatches];
  const last = matches[Math.max(0, visibleMatches-1)];
  const leagueDone = visibleMatches >= matches.filter(m=>m.round === 'League Phase').length;
  const finalActive = current?.label === 'Final';
  return <div className={`simulation ${finalActive?'finalNight':''}`}>
    <div className="simHeader">
      <h2><Zap/> Match Centre</h2>
      <button type="button" className="skipCampaignBtn" onClick={onSkip}>Skip to final result</button>
    </div>
    <div className="progress"><em style={{width:`${(visibleMatches/matches.length)*100}%`}}></em></div>
    <CampaignRoad matches={matches} visibleMatches={visibleMatches} currentLabel={current?.label} compact/>
    {current && <OpponentReveal match={current} difficulty={difficulty}/>}
    {current && <div className={`liveCard matchCentre ${finalActive?'grandFinal':''}`}>
      <span>{current.label === 'Final' ? 'European Final' : current.label}</span>
      <b>Your XI vs {current.opponent}</b>
      <small>{current.venue} · {getTacticalStyle(tacticalStyle).name} · FM-style highlight</small>
      <div className="scoreboard"><strong>Your XI</strong><em>{current.gf ?? 0} - {current.ga ?? 0}</em><strong>{current.opponent}</strong></div>
      <MatchVisualizer match={current} slots={slots} index={visibleMatches}/>
      <LiveEvents match={current}/>
    </div>}
    {!current && last && <div className="liveCard championPulse"><span>Campaign complete</span><b>Final whistle</b><small>Preparing season review...</small></div>}
    {last && visibleMatches > 0 && <MatchRatings match={last} slots={slots}/>}
    <KnockoutBracket matches={matches} visibleMatches={visibleMatches}/>
    {leagueDone && outcome?.leagueTable && <CompactLeagueTable table={outcome.leagueTable}/>}    
    <div className="matchList">{matches.slice(0,visibleMatches).map((m,i)=><div key={`${m.label}-${i}`} className={`match ${m.status.toLowerCase()}`}><b>{m.label}</b><span>{m.opponent}</span><em>{m.status} {m.scoreline}</em><small>{m.venue} · {m.note}</small></div>)}</div>
    {outcome && <p className="muted">Current: {outcome.leaguePoints ?? outcome.points} league-phase pts · rank {outcome.leagueRank || '-'} · {outcome.qualification || 'running'}</p>}
  </div>
}

function Result({matches,outcome,score,slots,difficulty,tacticalStyle,onPlayAgain,onTryHigher,nextDifficulty}){
 const summary = summarizeSeason(matches, outcome, score);
 const statPack = generatePlayerStats(slots, matches);
 const xi = slots.map(s=>({position:s.position, ...s.player}));
 const achievements = buildAchievements({summary,outcome,score,slots,matches,statPack,difficulty});
 const share = `European Champions Draft — ${outcome.exit} | Difficulty ${DIFFICULTIES.find(d=>d.id===difficulty)?.name} | Tactical ${getTacticalStyle(tacticalStyle).name} | League Rank ${outcome.leagueRank} | ${summary.wins}W ${summary.draws}D ${summary.losses}L | ${summary.gf} GF ${summary.ga} GA | Score ${score.total} | Achievement: ${achievements[0]?.title}`;
 return <div className={`result seasonReview pageEnter ${outcome.exit==='Champion'?'championResult':''}`}>
  <section className="campaignHero"><div><span>{outcome.exit==='Champion'?'CHAMPIONS':'CAMPAIGN COMPLETE'}</span><h2>{outcome.exit}</h2><p>{summary.line}</p></div><Crown size={54}/></section>
  <div className="resultTop">
    <div className="resultBox"><span>FINISHED</span><b>{ordinal(summary.finishedRank)}</b><small>{outcome.exit} · LP {outcome.leagueRank || '-'}</small></div>
    <div className="resultBox"><span>PROJECTED</span><b>{ordinal(summary.projectedRank)}</b><small>{score.projected.finish}</small></div>
    <div className={`resultBox verdict ${summary.verdict.toLowerCase().replace(' ','')}`}><b>{summary.verdict}</b><small>Tier {outcome.tier}</small></div>
  </div>
  <section className="numbersBox"><h2>Making up the numbers</h2><p>{summary.line}</p><small>{summary.note}</small></section>
  <CampaignRoad matches={matches} visibleMatches={matches.length} compact/>
  <ShareCard summary={summary} outcome={outcome} score={score} statPack={statPack} slots={slots} difficulty={difficulty} tacticalStyle={tacticalStyle} achievements={achievements}/>
  <AchievementGrid achievements={achievements}/>
  <div className="shareActions">
    <button className="primary fullBtn" onClick={()=>downloadSharePng({summary,outcome,score,statPack,xi})}><Download size={18}/> Download share PNG</button>
    <button className="secondary fullBtn" onClick={()=>navigator.clipboard?.writeText(share)}><Copy size={18}/> Copy share text</button>
  </div>
  <div className="quickRestartBox">
    <button className="primary fullBtn" onClick={onPlayAgain}><RefreshCw size={18}/> Play again</button>
    {nextDifficulty && <button className="secondary fullBtn" onClick={onTryHigher}><Swords size={18}/> Try {DIFFICULTIES.find(d=>d.id===nextDifficulty)?.name}</button>}
  </div>
  <section className="yourXIBox"><span className="sectionLabel">YOUR XI</span>{xi.map(p=><div className="xiRow" key={p.id}><em className={`posTag pos-${p.position}`}>{p.position}</em><b>{p.name}</b><span>{p.club.slice(0,3).toUpperCase()} {p.season.slice(0,4)}</span><strong>{p.rating}</strong></div>)}</section>
  <section className="statGrid"><StatBox value={summary.wins} label="Wins" good/><StatBox value={summary.draws} label="Draws" warn/><StatBox value={summary.losses} label="Losses" bad/><StatBox value={outcome.leaguePoints ?? outcome.points} label="League Points"/><StatBox value={summary.gf} label="Goals For" good/><StatBox value={summary.ga} label="Goals Against" bad/></section>
  <section className="seasonAwards"><span className="sectionLabel">SEASON AWARDS</span><div className="awardGrid"><Award icon={<Goal size={15}/>} title="Golden Boot" main={statPack.awards.goldenBoot.name} sub={`${statPack.awards.goldenBoot.goals} goals`}/><Award icon={<Handshake size={15}/>} title="Playmaker" main={statPack.awards.playmaker.name} sub={`${statPack.awards.playmaker.assists} assists`}/><Award icon={<Shield size={15}/>} title="Golden Glove" main={statPack.awards.goldenGlove.name} sub={`${statPack.awards.goldenGlove.cleanSheets || 0} clean sheets`}/><Award icon={<Medal size={15}/>} title="Player of the Season" main={statPack.awards.playerOfSeason.name} sub={`${statPack.awards.playerOfSeason.goals}G · ${statPack.awards.playerOfSeason.assists}A` } gold/></div></section>
  <section className="playerStatsTable"><div className="tableHead"><span>PLAYER</span><span>G</span><span>A</span><span>CS</span></div>{statPack.rows.map(r=><div className="tableRow" key={r.id}><div><em className={`posTag pos-${r.position}`}>{r.position}</em><b>{r.name}</b></div><strong>{r.goals || '-'}</strong><strong>{r.assists || '-'}</strong><strong>{r.cleanSheets ?? '-'}</strong></div>)}</section>
  <section className="statGrid compact"><StatBox value={summary.cleanSheets} label="Clean Sheets"/><StatBox value={summary.longestWinStreak} label="Longest Win Streak"/><div className="miniMoment"><span>Biggest Win</span><b>{summary.biggestWin?.scoreline} vs {summary.biggestWin?.opponent}</b></div><div className="miniMoment"><span>Highest-Scoring</span><b>{summary.highestScoring?.scoreline} vs {summary.highestScoring?.opponent}</b></div></section>
  <details className="finalTable" open><summary>Final 36-team league table</summary><LeagueTable table={outcome.leagueTable || []}/></details><details className="finalTable"><summary>Full match log</summary><div className="matchList final">{matches.map((m,i)=><div key={`${m.label}-${i}`} className={`match ${m.status.toLowerCase()}`}><b>{m.label}</b><span>{m.opponent}</span><em>{m.status} {m.scoreline}</em><small>{m.venue} · {m.note}</small></div>)}</div></details>
 </div>
}

function LeagueTable({table}){
  return <div className="leagueTable"><div className="leagueRow head"><span>#</span><span>Club</span><span>MP</span><span>GD</span><span>Pts</span><span>Zone</span></div>{table.map(r=><div key={r.name} className={`leagueRow ${r.isUser?'you':''} ${r.rank<=8?'seed':r.rank<=24?'playoff':'out'}`}><span>{r.rank}</span><b>{r.name}</b><span>{r.played}</span><span>{r.gd>0?`+${r.gd}`:r.gd}</span><strong>{r.points}</strong><em>{r.zone}</em></div>)}</div>
}
function StatBox({value,label,good,bad,warn}){ return <div className={`statBox ${good?'good':''} ${bad?'bad':''} ${warn?'warn':''}`}><b>{value}</b><span>{label}</span></div> }
function Award({icon,title,main,sub,gold}){ return <article className={`award ${gold?'gold':''}`}><span>{icon} {title}</span><b>{main}</b><small>{sub}</small></article> }

createRoot(document.getElementById('root')).render(<App/>);
