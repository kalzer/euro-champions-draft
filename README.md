# European Champions Draft v3

Fan-made strategy/draft web game inspired by football season simulators.

## Run
```bash
npm install
npm run dev
```

## v3 changes
- Post-campaign season review layout: finished vs projected, verdict, season numbers.
- Season awards: Golden Boot, Playmaker, Golden Glove, Player of the Season.
- Full player stat table: goals, assists, clean sheets.
- Re-spin limits per mode:
  - Classic: 2
  - Expert: 1
  - Scout: 1
  - Hardcore: 0
  - Chaos: 0
- club-seasons: 62; player cards: 992.

## Note
Player ratings are game-balance values, not official ratings. Club-season/player membership is kept conservative for MVP data quality.


## v4 Data Update

- Added `DATA_AUDIT.md` for club-season/player verification tracking.
- Expanded from 28 to 42 club-season pools.
- Expanded from 347 to 653 player cards.
- Era slider now reaches 2025/26 because current-squad data has been added.
- Added selected current 2025/26 squad pools: Paris Saint-Germain, Real Madrid, Barcelona, Bayern Munich, Manchester City, Liverpool, Chelsea, and Bayer Leverkusen.

Run checks:

```bash
npm install
npm run build
```


## v6 - Modern European League Phase Format

This build changes the campaign engine from a loose group-style simulator into the modern 36-team league phase flow:

- 36-team league table generated per campaign
- 8 league phase matches for the user
- 2 opponents from each pot
- 4 home and 4 away fixtures
- Ranking zones: 1-8 direct R16 seed, 9-24 knockout play-off, 25-36 eliminated
- Conditional knockout play-off before R16
- Final 36-team table shown on the result screen

Data remains intentionally core-squad only. No List B/youth spam.

## v8 UI / Draft Experience Update

- Dark stadium visual system + glass panels.
- Setup cards for Game Mode and Draft Mode.
- Visual formation picker with mini pitch dots.
- Era range slider with live club-season/player counts.
- Reworked pitch with spotlight, line markings, selected-slot glow, and placement pop animation.
- Animated club-season spin roulette.
- New player cards with rarity styling and stagger reveal.
- Draft progress panel with role chips and live tactical notes.
- Pre-season projection screen with XI preview and animated league phase draw rows.
- Match Centre minute progress animation.

Data and UCL-new-format engine are still from v6/v5 scope; this release focuses on UI foundation + draft experience polish.

## v9 + v10 Update

Campaign UI polish added:

- Cinematic league phase draw presentation.
- Pot-by-pot opponent reveal.
- Match Centre scoreboard with 0' → 90' progress.
- Live event ticker per match.
- Compact live 36-team table after league phase.
- Knockout path/bracket rail.
- Special final match treatment.
- Campaign-complete hero panel.
- Share-card style result summary.
- Result page now opens final 36-team table by default.

This update focuses on UI/animation polish only. Data and engine rules remain from v6/v8.

## v11 update

- Mobile responsive polish for setup, draft board, pitch, match centre, tables, bracket, and result page.
- Sticky mobile spin button for easier one-hand drafting.
- Smaller pitch slots and horizontal-safe league table on narrow screens.
- Added result share actions:
  - Download share card as PNG
  - Copy share text
- Share PNG is generated client-side with Canvas, so it does not need a backend.

"# euro-champions-spin" 
