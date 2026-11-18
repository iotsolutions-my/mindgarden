# MindGarden v3.10.2 — Tower Escape Expanded

## What's new in Tower Escape
- 36 deterministic levels, with 4–7 floors and wider maps (24–40 columns).
- Procedural variations with multiple ladder routes and distinct scenery themes.
- Later levels add spike zones, conveyor floors and tiles that crumble then rebuild.
- Rolling stones and guard pursuit continue; temporary digging traps remain.
- Automatic next-level progression; select any unlocked level. No hard time limit.
- Scrollable follow camera on mobile and an optional full-map zoom.
- Progress save uses the existing Tower Escape storage key; unrelated city/Mahjong saves are untouched.
- English, Bahasa Melayu, Simplified Chinese and Traditional Chinese.
- Offline PWA support and a standalone HTML game page; no external scripts, ads or sound.

## MindGarden game collection
Word Trails; Memory Garden; Number Steps; Sharp Eyes; Sentence Detective / Chinese Character Hunt; Idiom Lab; Logic Grid; Gem Garden; Air Traffic Coordinator; Smart City 3D; Mahjong Garden; Tower Escape.

## Security baseline
Only store validated local game state. No remote audio, code execution from JSON, ads, unnecessary outbound connections or automatic redirects. Exported JSON is data only. Publish releases from the official IOT SOLUTIONS repository. Provided AS IS to the extent permitted by applicable law.
## New in v3.10.2 — Tower Escape gameplay hotfix

- Cleared towers automatically advance after a brief celebration (except the final tower).
- Digging a floor tile drops guards standing over the hole; trapped guards remain until it refills, then resume pursuing the player.
- Guards pursue nearby players on the same platform and patrol otherwise.
- Retains original ten towers, separate saves, free browser play and four languages.

## Previous v3.10.2 introduction — Tower Escape
- Original retro puzzle-platformer blending classic digging-and-ladder mechanics with rolling obstacles, without copying protected characters or graphics.
- 10 handcrafted level configurations, Puzzle and Arcade modes (arcade has faster patrols and more rolling stones), optional zoom for smaller screens, collectible seeds, ladders, diggable temporary platforms, rolling stones, patrolling sentries and an exit at the upper-right.
- Responsive canvas, keyboard arrows/WASD, Z/X to dig, large touch controls, pause, hint, retry and skip. No countdown or music.
- Standalone `tower.html`, local automatic saves isolated from Mahjong and Smart City.
- Four languages: English, Bahasa Melayu, Simplified Chinese and Traditional Chinese.
- Original geometry; no third-party textures, game engines, libraries, remote dependencies or ads.
- Security baseline: strictly limited local save fields and ranges; never execute save data.

# MindGarden v3.10.2 — Tower Escape Arcade & Puzzle

## New in v3.8.0 — Strategy Challenge
- One Mahjong challenge mode with progressive **3-, 4- and 5-layer** boards (unchanged board dimensions).
- Fourteen extra distinctive tile faces (29 in total) reduce the number of obvious opening matches and demand closer attention. The layout remains readable with large tiles.
- Tiles are arranged using a *known legal solution*, but alternative matches may create a dead end. Losses are never forced.
- When no moves remain, the game shows a clear, friendly message and players may **Try same board**, **Undo last pair**, **Rearrange**, or **Skip** without cost.
- Retry count is shown as an optional feedback indicator, without rankings, timers or penalties. Finishing a board unlocks the next puzzle.
- Autosaves now include the retry starting board and undo history. Older Mahjong schema 4 saves migrate using the current state as their retry starting point; Smart City saves stay untouched.
- Language support for English, Bahasa Melayu, 简体中文 and 繁體中文, including new challenge and retry messages.
- Browser-playable standalone HTML and optional offline PWA; no external scripts, audio, advertisements or accounts.

### QA notes
- Generated boards are checked against their legal solution sequence, and all starting layouts must contain at least one matching free pair.
- Validate Android touch controls, visually inspect tile overlaps and back up existing saves before deployment. Local Chromium automation was tested using in-memory HTML because direct `file://` navigation is restricted.

# MindGarden v3.10.2 — Tower Escape and Mahjong Garden

A lightweight browser-playable city game with optional PWA installation.

## MindGarden games (from the early v0.9 concept onward)
MindGarden is a free, ad-free browser collection, not only a city simulator. The main page offers:

1. **Word Trails** — connect or select letters to build words.
2. **Memory Garden** — uncover and match picture pairs.
3. **Number Steps** — find missing numbers in sequences.
4. **Sharp Eyes** — remember scenes and spot a missing item.
5. **Sentence Detective** / **Chinese Character Hunt** — context and character puzzles by language.
6. **Idiom Lab** — interpret proverbs, idioms and 成语.
7. **Logic Grid** — solve short logic and number puzzles.
8. **Gem Garden** — shape- and colour-supported matching game.
9. **Air Traffic Coordinator** — guide aircraft and exercise coordination.
10. **Smart City 3D** — one persistent Malaysian city with missions, transport and infrastructure.
11. **Mahjong Garden** — an original, accessible Mahjong Solitaire-style pair-matching game, with large tiles, hints, rearrange, skip and autosave.

12. **Tower Escape** — collect seeds, climb ladders, dig temporary traps and avoid rolling hazards.

Available languages: English, Bahasa Melayu, 简体中文 and 繁體中文. Games have friendly hints and options to skip where supported. MindGarden is for enjoyable recreation, not medical diagnosis or treatment.

## v3.3.0 — New Mahjong Garden
- Standalone `mahjong.html` linked directly from the MindGarden homepage, playable online and offline after PWA caching.
- Original Mahjong-style tile faces with no third-party game images, audio, libraries, advertisements or tracking.
- Four language options, one balanced challenge mode, senior-friendly controls, hint, shuffle, skip, and automatic local progress saves.
- No timing pressure or losing penalties; game is recreation and cannot claim to prevent or treat cognitive disorders.

## v3.2.5 expansion and city-life fixes
- Map can expand by 12 tiles per side up to **144×144** instead of silently stopping at 96×96. A precise message distinguishes maximum map size, insufficient developed plots and insufficient funds.
- Each expansion writes a pre-expansion browser backup; existing buildings, terrain clearing, signals and sensors remain mapped to their new locations.
- More ambient drones and lightweight helicopters around airports, tourist sites, arenas, hotels and other attractions.
- Emergency vehicles (ambulance, fire engine and police patrol) travel along connected roads where routes exist.
- Commuter/freight routing considers farther destinations, and congestion uses a demand/capacity ratio that responds better in larger cities.
- No downloadable models, textures or new external dependencies.

## v3.8.0 — Mahjong Garden single-mode challenge
- Replaced mirrored rows with five varied, irregular board designs, each with 56 tiles (28 matching pairs).
- Removed the difficulty dropdown: one balanced challenge appropriate for adults and seniors.
- Each new arrangement is constructed with a valid full removal sequence; stuck players may use unlimited hints and rearranging.
- Saves puzzle progress using schema 2; old schema 1 automatically keeps the puzzle number and starts a fresh challenge board, without touching other games.
- No timers, pressure, sound, third-party resources or installation requirements.

## Features
- Ten missions per manual day (3 construction, 4 incidents, 3 events) with 15-second breaks, no response deadline.
- Sports arena, swimming pool, business centre, zoo, aquarium, cinema, river and camping site.
- Small ambient drones above logistics hubs, airports and business centres; decorative, not controllable.
- Sticky quick controls for Road, Inspect, Bulldozer; search and filter building catalogue.
- Language selector: English, Bahasa Melayu, 简体中文, 繁體中文.
- Existing unified city save preserved; eight-mission days migrate by adding two missions.
- Traffic samples homes across neighbourhoods, favours different destinations, and uses congestion-weighted road routing. A single connecting road can still be busy; this is not a full intersection-level simulation.
- No external graphics downloads, libraries, accounts or advertisements.

## v3.2.4 stability audit & fixes
- Correctly separate the *current mission* from a viewed past mission. History shows a review label and a return button; a completed day shows **10/10** instead of stale earlier mission details.
- Correct stale **All 5 missions** messages in all four languages; the game now consistently uses ten missions per day.
- Harden saved mission records: deduplicate journals, repair invalid pending/finished state, and avoid counting down after the tenth mission.
- Rebalance healthcare using hospital and clinic capacity relative to city population and water service conditions, so adding healthcare visibly improves the score in a large city.
- Rebalance public safety using police, fire and sensor capacity relative to population and congestion.
- Recalculate tourism using the **current day's** public safety and congestion, avoiding stale-one-turn visitor results.
- Speed up water/electricity road-network coverage calculations for large cities.
- Show basic healthcare and safety capacity/demand diagnostics in the population section.
- Keep a one-time pre-update backup in browser storage and provide **Export city backup** under City administration. City saves are not intentionally reset.
- No changes to missions count (10), manual Next Day or the existing city save key.

## Deploy
Upload all files in this folder to GitHub Pages root. Do not omit `service-worker.js`, manifest, `version.json`, or icons. Use HTTPS for optional offline PWA.

## Notes
- Always back up existing releases before replacing.
- Game is recreational and does not prevent, diagnose, or treat dementia or other medical conditions.

## v3.8.0 — Two-layer Mahjong Garden (layer-ready engine)
- Earlier version used 56 tiles: 48 lower-layer plus 8 upper-layer tiles. Upper tiles physically overlap and block lower tiles.
- Only tiles with no tile above AND a free left/right side on the same layer can be matched.
- Five placement layouts with one balanced senior-friendly challenge mode. No timers or penalties.
- Generator assigns pairs in a legal removal order, ensuring at least one complete solution. Unlimited hints, rearranging and skip remain available.
- New save schema 3 stores layered tiles; existing puzzle number is retained while schema 2 unfinished board is refreshed (other games untouched).
- General layer coordinates and tile-availability rules already accept up to five layers (z=0..4); this release exposes two layers only. Three-, four- and five-layer layouts are future additions and are not advertised as playable yet.
- No third-party artwork, audio or remote dependencies.

## Mahjong Garden v3.8.0

Puzzle 1–2 use four-layer layouts and Puzzle 3 onward uses five-layer layouts. Covered tile faces remain concealed until revealed, encouraging planning; the board generator preserves a legal solution. No timer or penalties; unlimited undo, retry, hint, rearrange and skip. The current puzzle number carries forward. Existing unfinished older-layout puzzles are regenerated rather than silently altered.

## v3.8.0 Mahjong Garden
- Board-generation scoring now considers accessible matches during early and middle phases of a precomputed legal solution.
- Personal Garden tracks completed puzzles and independent clears, without timers or penalizing help.
- Undo, hint, retry, skip and rearrange remain available. Existing Mahjong saves migrate from schema 4/5 to 6.
- One challenge mode, 4–5 layers, browser play without installation or external runtime services.

## v3.10.2 regression fix

- Restores the compact 24×14 tile viewing window for Tower Escape on phones.
- Larger levels scroll via the follow camera without enlarging the visible game area.
- Moves level selection to a collapsed control below the gameplay controls.
- Keeps 36 levels, existing saved progress, and touch buttons.
- Zoom displays a full tower overview without changing layout dimensions.


## Tower Escape v3.10.2

- Arcade Adventure is the only game mode; no mode switch or puzzle mode.
- Uses the classic compact 22 × 14 camera viewport across all 36 tower levels.
- Previous saves load in Arcade mode without resetting unlocked level progress.
- Touch and keyboard controls, auto-advance and all other MindGarden games remain.
