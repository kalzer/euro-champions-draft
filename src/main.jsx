import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Trophy, Shuffle, RotateCcw, Sparkles, ShieldCheck, Play, Dice5, Target, Zap, Medal, Goal, Handshake, Shield, Crown, Swords, Gauge, Timer, Star, Layers, Eye, EyeOff, Wand2, Users, CalendarRange, ChevronRight, Download, Copy, Smartphone } from 'lucide-react';
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
  const score = useMemo(()=>calculateSquad(slots),[slots]);
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
    const id = setTimeout(()=>setVisibleMatches(v=>v+1), 850);
    return ()=>clearTimeout(id);
  }, [phase, visibleMatches, matches]);

  function start(){
    const fresh = makeSlots(formation);
    setSlots(fresh); setSelectedSlotId(fresh.find(s=>!s.player)?.id); setStarted(true);
    setSpinMeta(null); setOptions([]); setPhase('draft'); setGroup([]); setMatches([]); setVisibleMatches(0); setVisibleDraw(0); setRespinsUsed(0); setIsSpinning(false); setRecentPickSlotId(null);
  }

  function reset(){
    setStarted(false); setPhase('draft'); setSpinMeta(null); setOptions([]); setGroup([]); setMatches([]); setVisibleMatches(0); setVisibleDraw(0); setRespinsUsed(0); setIsSpinning(false); setRecentPickSlotId(null);
    setSlots(makeSlots(formation)); setSelectedSlotId(null);
  }

  function spin(){
    if(!selectedSlot || full || phase !== 'draft' || isSpinning) return;
    const isRespin = options.length > 0;
    const limit = RESPIN_LIMITS[mode] ?? 1;
    if (isRespin && respinsUsed >= limit) return;
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
    const built = buildMatches(score.total, group.length?group:drawGroup(score.total));
    setMatches(built); setVisibleMatches(0); setVisibleDraw(0); setPhase('draw');
  }

  if(!started) return <Home formation={formation} setFormation={setFormation} mode={mode} setMode={setMode} draftMode={draftMode} setDraftMode={setDraftMode} era={era} setEra={setEra} start={start}/>;

  return <main className="app shellBg">
    <nav className="nav glassNav">
      <div className="brandMark"><span>ECD</span><div><b>European Champions Draft</b><small>36-team league phase · fan-made</small></div></div>
      <div className="navActions"><span>{MODES.find(m=>m.id===mode)?.name} · {DRAFT_MODES.find(d=>d.id===draftMode)?.name}</span><button onClick={reset}><RotateCcw size={16}/> Reset</button></div>
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
        <ScoreCard score={score}/>
        {phase === 'draft' && <DraftPanel mode={mode} selectedSlot={selectedSlot} spin={spin} spinMeta={spinMeta} options={options} slots={slots} assignPlayer={assignPlayer} draftedIds={draftedIds} respinsUsed={respinsUsed} respinLimit={RESPIN_LIMITS[mode] ?? 1} isSpinning={isSpinning}/>}        
        {phase === 'preseason' && <PreSeason score={score} group={group} startCampaign={startCampaign} slots={slots}/>}        
        {phase === 'draw' && <LeagueDrawPresentation matches={matches} visibleDraw={visibleDraw}/>}        
        {phase === 'simulating' && <Simulation matches={matches} visibleMatches={visibleMatches} outcome={outcome}/>}        
        {phase === 'result' && <Result matches={matches} outcome={finalOutcome} score={score} slots={slots}/>}        
      </div>
    </section>
  </main>
}

function Home({formation,setFormation,mode,setMode,draftMode,setDraftMode,era,setEra,start}){
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
      <div className="mobilePromise"><Smartphone size={16}/> Mobile layout polished for one-hand draft flow.</div>
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
    <FormationPicker formation={formation} setFormation={setFormation}/>
    <EraSlider era={era} setEra={setEra} stats={availableStats}/>
    <button className="primary big startBtn" onClick={start}><Trophy/> Start Draft <ChevronRight size={18}/></button>
  </section>

  <section className="squads pageEnter delay2"><div className="sectionIntro"><span className="eyebrow">Data pool</span><h2>Club-season cards</h2></div>{seasons.slice(0,28).map(s=><article key={s.id}><b>{s.club}</b><span>{s.season}</span><small>{s.theme} · {s.result}</small></article>)}</section>
 </main>
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

function ScoreCard({score}){
  return <div className="scoreCard"><Sparkles/><div><span>Squad Power</span><strong>{score.total || '—'}</strong></div><p>AVG {score.avg} · Chem +{score.chemistry} · Balance {score.balance>=0?'+':''}{score.balance} · Big Match +{score.bigMatch}</p><MetricBar label="Chemistry" value={Math.min(100,score.chemistry*8.3)}/><MetricBar label="Tactical" value={score.balance>0?78:score.balance<0?30:48}/></div>
}
function MetricBar({label,value}){ return <div className="metricBar"><span>{label}</span><i><em style={{width:`${Math.max(4,Math.min(100,value))}%`}}/></i></div> }

function DraftPanel({mode,selectedSlot,spin,spinMeta,options,slots,assignPlayer,draftedIds,respinsUsed,respinLimit,isSpinning}){
  const isRespin = options.length > 0 || !!spinMeta;
  const canSpin = !!selectedSlot && (!isRespin || respinsUsed < respinLimit) && !isSpinning;
  return <>
    <div className="slotTarget glassMini"><Target size={18}/><div><span>Selected Slot</span><b>{selectedSlot ? selectedSlot.position : 'No empty slot'}</b><small>Re-spin left: {Math.max(0, respinLimit-respinsUsed)} / {respinLimit}</small></div></div>
    <button className="primary fullBtn spinBtn" onClick={spin} disabled={!canSpin}>{isSpinning ? <Wand2 className="spinIcon"/> : <Shuffle/>} {isSpinning ? 'Drawing club-season...' : isRespin ? 'Re-spin draw' : 'Spin club season'}</button>
    {isSpinning && <SpinRoulette/>}
    {spinMeta && !isSpinning && <div className="spinBanner"><Dice5/><div><span>Club-season draw</span><b>{spinMeta.club} · {spinMeta.season}</b><small>{spinMeta.theme} · {spinMeta.totalLeft} players left in pool</small></div></div>}
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

function PlayerCard({player, mode, selectedSlot, slots, assignPlayer, index=0}){
  const available = eligibleSlotsForPlayer(player, slots, false);
  const priority = selectedSlot && available.some(s=>s.id===selectedSlot.id) ? selectedSlot.id : available[0]?.id;
  const hideRating = mode==='expert' || mode==='scout';
  const rarity = getRarity(player.rating);
  return <article className={`playerCard ${rarity}`} style={{animationDelay:`${index*65}ms`}}>
    <div className="cardTop"><span>{player.club} · {player.season}</span><strong>{hideRating?'??':player.rating}</strong></div>
    <h3>{player.name}</h3>
    <p>{player.positions.join(' / ')}{selectedSlot ? ` · Fit ${Math.round(positionFit(player, selectedSlot.position)*100)}%` : ''}</p>
    <small>{player.traits.join(' · ')}</small>
    <div className="positionChoices">
      {available.length===0 && <button disabled>No compatible empty slot</button>}
      {available.map(s=><button key={s.id} className={s.id===priority?'recommended':''} onClick={()=>assignPlayer(player,s.id)}>Put as {s.position}</button>)}
    </div>
  </article>
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

function ShareCard({summary,outcome,score,statPack}){
  return <section className="shareCard">
    <div><span>EUROPEAN CHAMPIONS DRAFT</span><b>{outcome.exit}</b><small>Projected {ordinal(summary.projectedRank)} · Finished {ordinal(summary.finishedRank)}</small></div>
    <div className="shareStats"><span>{summary.wins}W</span><span>{summary.draws}D</span><span>{summary.losses}L</span><span>{summary.gf}:{summary.ga}</span><span>{score.total}</span></div>
    <p>Top scorer: <b>{statPack.awards.goldenBoot.name}</b> · POTS: <b>{statPack.awards.playerOfSeason.name}</b></p>
  </section>
}

function PreSeason({score,group,startCampaign,slots}){
  const odds = score.odds;
  return <div className="preseason pageEnter">
    <div className="trophy">🏆</div><h2>Squad Complete</h2><p className="muted">Ini proyeksi sebelum match generate. Abis ini baru league phase jalan satu-satu.</p>
    <section className="oddsBox">
      <div className="oddsHead"><span>PRE-SEASON ODDS</span><small>Based on squad avg, chemistry, balance</small></div>
      <div className="project"><div><span>PROJECTED FINISH</span><b>{score.projected.finish}</b></div><div><span>EXPECTED POINTS</span><b>{score.projected.expectedPoints}</b></div></div>
      <OddsBar label="Win Europe" value={odds.win}/><OddsBar label="Reach Final" value={odds.final}/><OddsBar label="Reach Semi" value={odds.semi}/><OddsBar label="Qualify Knockout" value={odds.knockout}/><OddsBar label="Disaster Chance" value={odds.disaster}/>
    </section>
    <section className="miniXIbox"><span className="sectionLabel">Your XI Preview</span>{slots.map(s=><span key={s.id}><b>{s.position}</b>{s.player?.name}</span>)}</section>
    <section className="groupBox"><h3>League Phase Draw</h3><p className="muted">8 lawan: 2 dari tiap pot, 4 home + 4 away.</p><div className="groupTeam you"><b>You</b><span>Your Draft XI</span><em>Custom Squad</em></div>{group.map((g,i)=><div key={`${g.name}-${g.label}`} className="groupTeam" style={{animationDelay:`${i*70}ms`}}><b>{g.label} · Pot {g.pot}</b><span>{g.name}</span><em>{g.venue} · {g.danger}</em></div>)}</section>
    <button className="primary fullBtn" onClick={startCampaign}><Play/> Start Campaign</button>
  </div>
}

function OddsBar({label,value}){ return <div className="oddsRow"><div><span>{label}</span><b>{value}%</b></div><i><em style={{width:`${Math.min(100,value)}%`}}></em></i></div> }

function Simulation({matches,visibleMatches,outcome}){
  const current = matches[visibleMatches];
  const last = matches[Math.max(0, visibleMatches-1)];
  const leagueDone = visibleMatches >= matches.filter(m=>m.round === 'League Phase').length;
  const finalActive = current?.label === 'Final';
  return <div className={`simulation ${finalActive?'finalNight':''}`}><h2><Zap/> Match Centre</h2>
    <div className="progress"><em style={{width:`${(visibleMatches/matches.length)*100}%`}}></em></div>
    {current && <div className={`liveCard matchCentre ${finalActive?'grandFinal':''}`}>
      <span>{current.label === 'Final' ? 'European Final' : current.label}</span>
      <b>Your XI vs {current.opponent}</b>
      <small>{current.venue} · simulating 0’ → 90’</small>
      <div className="scoreboard"><strong>Your XI</strong><em>{current.gf ?? 0} - {current.ga ?? 0}</em><strong>{current.opponent}</strong></div>
      <div className="minuteBar"><i/></div>
      <LiveEvents match={current}/>
    </div>}
    {!current && last && <div className="liveCard championPulse"><span>Campaign complete</span><b>Final whistle</b><small>Preparing season review...</small></div>}
    <KnockoutBracket matches={matches} visibleMatches={visibleMatches}/>
    {leagueDone && outcome?.leagueTable && <CompactLeagueTable table={outcome.leagueTable}/>}    
    <div className="matchList">{matches.slice(0,visibleMatches).map((m,i)=><div key={`${m.label}-${i}`} className={`match ${m.status.toLowerCase()}`}><b>{m.label}</b><span>{m.opponent}</span><em>{m.status} {m.scoreline}</em><small>{m.venue} · {m.note}</small></div>)}</div>
    {outcome && <p className="muted">Current: {outcome.leaguePoints ?? outcome.points} league-phase pts · rank {outcome.leagueRank || '-'} · {outcome.qualification || 'running'}</p>}
  </div>
}

function Result({matches,outcome,score,slots}){
 const summary = summarizeSeason(matches, outcome, score);
 const statPack = generatePlayerStats(slots, matches);
 const xi = slots.map(s=>({position:s.position, ...s.player}));
 const share = `European Champions Draft — ${outcome.exit} | League Rank ${outcome.leagueRank} | ${summary.wins}W ${summary.draws}D ${summary.losses}L | ${summary.gf} GF ${summary.ga} GA | Score ${score.total}`;
 return <div className={`result seasonReview pageEnter ${outcome.exit==='Champion'?'championResult':''}`}>
  <section className="campaignHero"><div><span>{outcome.exit==='Champion'?'CHAMPIONS':'CAMPAIGN COMPLETE'}</span><h2>{outcome.exit}</h2><p>{summary.line}</p></div><Crown size={54}/></section>
  <div className="resultTop">
    <div className="resultBox"><span>FINISHED</span><b>{ordinal(summary.finishedRank)}</b><small>{outcome.exit} · LP {outcome.leagueRank || '-'}</small></div>
    <div className="resultBox"><span>PROJECTED</span><b>{ordinal(summary.projectedRank)}</b><small>{score.projected.finish}</small></div>
    <div className={`resultBox verdict ${summary.verdict.toLowerCase().replace(' ','')}`}><b>{summary.verdict}</b><small>Tier {outcome.tier}</small></div>
  </div>
  <section className="numbersBox"><h2>Making up the numbers</h2><p>{summary.line}</p><small>{summary.note}</small></section>
  <ShareCard summary={summary} outcome={outcome} score={score} statPack={statPack}/>
  <div className="shareActions">
    <button className="primary fullBtn" onClick={()=>downloadSharePng({summary,outcome,score,statPack,xi})}><Download size={18}/> Download share PNG</button>
    <button className="secondary fullBtn" onClick={()=>navigator.clipboard?.writeText(share)}><Copy size={18}/> Copy share text</button>
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
