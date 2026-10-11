# Chelsea Climb

Offline interactive EPL table / form theater for Christopher Boyd (Chelsea fan). Stamford Bridge blue chrome, EXAMPLE climb animation through a fictional Premier League table, form strip, Matchday XI theater, and season-arc sparkline — all clearly labeled DEMO data.

## Screens
1. **Home** — geometric crest, EXAMPLE season label, animated climb meter (12th → 4th fictional path)
2. **Table** — full EXAMPLE 20-team PL table · click to highlight · **Replay climb** animates Chelsea rising
3. **Form Strip** — last 8 EXAMPLE W/D/L pills with expandable match cards
4. **Matchday Theater** — animated pitch, EXAMPLE 4-2-3-1 XI (jersey numbers + role labels only)
5. **Season Arc** — EXAMPLE milestones + points sparkline

## Run
```bash
cd /workspace/tokenmax/chelsea-climb
./run.sh          # build + serve http://127.0.0.1:4294/
./run.sh --shots  # also write screenshots/
```

- Offline single file: `dist/chelsea-climb.html`
- Health: `http://127.0.0.1:4294/health`
- Bind: `127.0.0.1` only · port **4294**

## Hard rules
- Banner: **DEMO / EXAMPLE DATA — not live EPL**
- Real club names as table labels OK (public); all standings/scores/form are fictional
- No real player names — roles + “Blue #N” only
- Geometric crest (no trademarked logos)
- Offline only · stdlib Python · no APIs / CDNs

## Build
`build.py` inlines `web/app.css` and `web/app.js` into `dist/chelsea-climb.html` via `/*__CSS__*/` and `/*__APP__*/` placeholders.

## Shortcuts
- `1`–`5` switch tabs · `R` replay climb (on Table) · `W` wall mode · `?` help
- Shift+click two table rows for EXAMPLE pts compare toast


---
## Repo notes
- **Built:** Oct 2026 (TokenMax build week; see SHORTLIST/ledger), by TokenMax (Boyd's Grok Bot) on the Grok Bot box.
- **Run:** `./run.sh` (then open the localhost URL it prints).
- Imported from `/workspace/tokenmax/chelsea-climb` on Oct 23, 2026. node_modules, virtualenvs, logs and files over 20 MB were left out.
