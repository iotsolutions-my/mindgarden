# MindGarden changelog

## v3.25.0 — Smart City Phase 4: airports, bridges, coverage and money you can see
**Airports with real runways**
- A new airport now comes with a terminal, control tower and a 4-tile runway, laid out automatically in a straight line beside the terminal (it needs 4 empty tiles in a row).
- Planes land on the runway, roll to the terminal, turn around, take off and climb away, instead of flying into the building. A small plane is parked at the gate. Runway edge lights glow at night.
- Existing airports get a runway automatically when there is room; otherwise they keep the old flight path.
- Bulldozing any part of the runway removes the airport (with the usual partial refund).

**Bridges and rivers that bend**
- Bridges are drawn like roads: straight sections, corners, T-junctions and crossings, with railings only on the open sides.
- Rivers join their neighbouring river, pond, sea and wetland tiles, so curves and bends look continuous, with sandy banks.
- Roads can now cross rivers: building a road on a river tile makes a road bridge (RM 480). Bulldozing it gives the river back.

**Smoke and steam**
- Fixed: some nuclear plants and factories had no smoke when the city had many of them. Smoke now follows what's on screen, and both nuclear cooling towers release steam.

**Coverage maps for more services**
- Coverage now shows for the Police station, Fire station, Hospital, Clinic, Bus terminal, Subway station, Taxi stop, and community buildings (Community hall, Mosque/Surau, Temple, Church, Event hall).
- It also shows when you use 🔎 Inspect on one of these buildings.
- A legend on the map explains the colours: quick to reach, slow to reach, too far.

**Money always visible**
- A 💰 cash card on the map shows your cash, the expected daily balance (▲ profit or ▼ loss per day) and the price of the building you've selected. It turns orange when cash is low or the city is losing money.
- The daily balance uses exactly the same calculation as Next Day.
- Every build, bulldoze and refund shows a short "−RM" or "+RM" label above the plot.
- Cash is now the first number in the stats row.

All 7 Smart City regression tests and the earlier browser checks still pass.

## v3.24.0 — Smart City Phase 3: reasons to come back
**Simpler screen, map first**
- The map now comes first on phones, with Undo and Next Day right below it.
- Everything else sits in four tabs: 🛠️ Build · 🎯 Missions · 📊 Reports · 🏛️ Mayor. A dot on Missions shows when something needs you.
- On wide screens the map stays on the left while you use the tabs on the right. The stats row scrolls sideways on phones, and the compass moved to the bottom corner.

**City levels and landmarks**
- Four levels by population: Village → Growing town (120) → Regional city (360) → Metropolitan city (900). Each level unlocks new buildings, with a celebration that lists what's new.
- The Missions tab shows your level, a progress bar and the next unlocks. Locked buildings appear greyed out with the level they need.
- Three new one-of-a-kind landmarks, each with its own 3D model, extra visitors, happiness and daily income: 🕰️ Clock Tower (Growing town), 🗼 Sky Tower (Regional city) and 🌆 Twin Towers (Metropolitan city).
- **Existing cities keep every building unlocked.** Levels lock buildings only in new cities (after "Reset city"). Daily missions never ask for a locked building.

**Daily Mayor's report card**
- Each Next Day gives a grade from A to F based on happiness, safety, health, water, power, traffic and missions handled, with an encouraging note, your best area and the area that needs work.
- A "Help me fix it" button picks a building that helps. A good-mayor streak counts days in a row graded A or B.
- The Reports tab keeps your last 7 report cards; tap one to see it again.

**Scenario maps** (Missions tab)
- 🏝️ Island Town (20 days): grow to 480 residents, open a seaport, keep happiness at 65%.
- 🌊 River City (25 days, floods are common): 650 residents, safety and health at 70%, 2 wetland reserves.
- ⛈️ After the Storm (15 days): restore water and power to 80% and happiness to 65%.
- Earn 1–3 stars depending on how quickly you finish. Scenarios have their own saves, and "Return to my city" takes you back to your own city exactly as you left it.

**Postcards and city name**
- 📷 on the map saves a framed postcard with your city's name, day, population, level and latest grade, or opens the share sheet on phones.
- Name your city in the Mayor tab.

All 7 Smart City regression tests and the Phase 2 browser checks still pass.

## v3.23.0 — Smart City Phase 2: gameplay that matters
**Emergencies on the map**
- Fires, crime, vandalism, road accidents and dengue calls now appear on the map: flames and smoke for fires, flashing beacons for police calls, a red marker for medical calls.
- Tap the flashing spot (or the first mission button) to send a real crew: a 🚒 fire truck, 🚓 police car or 🚑 ambulance leaves the nearest connected station and drives there along your roads.
- Response time depends on where you built your stations. Arriving within 10 seconds earns +RM 150, and within 20 seconds +RM 70. Slow responses suggest building closer.
- The mission button shows the expected arrival time. With no station connected by road, it says so, and you can still hire outside help.
- Coverage view: choose the Police, Fire station, Hospital or Clinic tool to see which roads are reached quickly (green), slowly (yellow), and which homes are too far (red).

**A friendlier daily rhythm**
- 4 missions a day instead of 10 (2 incidents, 1 building goal, 1 community event), with a short 4-second pause instead of 15 seconds.
- **Next Day is never locked.** Unfinished missions add a little disruption and reset the streak, but the game never stops you.
- Older saves keep the first four missions of the current day.

**Residents have a voice**
- Speech bubbles above homes say what residents need: a clinic, a park, shops, a bus stop, police, a fire station, a road, water, power, jobs, or less traffic. Happy neighbourhoods say so too.
- Tap a bubble to pick the building that helps. The 💬 button turns bubbles on or off.

**Demand bars and a growing city**
- A "What residents want" bar shows demand for Homes, Shops and Jobs. Tap a bar to choose a matching building.
- Residents now upgrade their own homes for free: in happy, connected neighbourhoods with water, power, shops and jobs, houses become apartments and apartments become condominiums, behind the construction crane. Turn this on or off under City administration.

**Smaller changes**
- New, smaller traffic lights with red, amber and green lamps, and a slimmer IoT sensor.
- All 7 existing Smart City regression tests still pass. Your city save is unchanged.

## v3.22.0 — Smart City Phase 1: a city that looks alive
**Graphics**
- Sunlight and soft shadows: every building casts a shadow, and walls get gentle shading so the city looks solid.
- Day and night: an automatic cycle (about 6 minutes) with sunset colours. At night, windows, street lamps, headlights, shop fronts and aircraft lights glow. A new 🌓 button switches between automatic, always day and night (saved on the device).
- Weather: rain falls during flood and landslide missions; a haze tint appears during haze alerts or when pollution is high.
- New building models, each with variations so neighbours don't look identical:
  - Houses in three styles (gable roof, hip roof, double-storey terrace), with different wall and roof colours, gardens and parked cars.
  - Apartments: brick blocks with balconies, in three heights. Condominiums: glass towers on a podium with a rooftop pool, or twin towers.
  - Offices: glass towers with fins, a rooftop helipad, antenna or crown. Shops: shophouses with a five-foot way, awnings and signboards.
  - City Hall with columns, pediment, copper dome and flag. Community hall with porch. Factory with sawtooth roof and striped chimney.
  - Hotel with balconies, glowing sign and pool. Mall with glass atrium and rooftop car park. Hospital with red cross and rooftop helipad.
  - Police station with a parked patrol car. Fire station with garage doors, fire truck and hose tower. Warehouse with roller doors. Logistics hub with loading docks and trucks.
- Vehicles now face the way they drive, keep to the left lane, and each type has its own shape: cars, taxis with roof signs, police cars with light bars, ambulances with crosses, fire trucks with ladders, long buses, and lorries with coloured containers. Emergency lights flash.
- Aircraft: helicopters with spinning main and tail rotors, quad-rotor drones, and passenger planes that take off from and land at your airport.
- Ships: container ships stacked with containers, barges, and yachts with sails, all turning to follow their route, with a wake.
- Construction: a new building rises behind scaffolding with a turning tower crane (about 18 seconds).
- Chimney smoke now rises from the factory chimney and drifts with the wind.

**Performance**
- The city is now drawn in cached 16×16-tile blocks and only rebuilt where something changed, instead of rebuilding the whole scene 60 times a second. Much more detail now draws at about the same speed as the old, simpler scene in testing.

**Tidy-up**
- Smart City now follows the language chosen on the main menu, and changing it in Smart City updates the menu too.
- "← MindGarden" returns to the Big games list in the right language.
- Removed the old "v3.2.31" from the title; added the build number and social-sharing tags.
- Translated the remaining English-only labels on the dashboard (Pollution, Environment (ESG), Ports, routes).
- Your existing city save (`mindgarden_city3d_v2_single`) is unchanged and loads as before. All existing Smart City regression tests pass.

## v3.21.0 — Logic Squares diagonal rule
- **Challenge** and **Expert** now use the diagonal rule: both long diagonals (shaded purple) must also contain each number once, as well as every row, column and box.
- Challenge: 4×4 grid with diagonals and fewer starting numbers. Expert: 6×6 grid with diagonals (about 23 empty squares).
- Every puzzle still has exactly one solution, checked with the diagonal rule included. A diagonal repeat shows in red and does not count as a win.
- Relax and Gentle are unchanged.

## v3.20.1 — Seed Rush label and tidy-up
- Seed Rush: the 🌱 counter in the top bar now reads **Seeds left: 204** (Benih tinggal / 剩余种子 / 剩餘種子), so players know what it counts.
- Seed Rush is now cached by the offline service worker (`service-worker.js`, cache `mindgarden-v3.20.1-pwa`).
- README: removed the three outdated development screenshots; updated the game list to 15 games including Seed Rush and Sky Coordinator.
- `version.json` and the main page build set to 3.20.1 so the update banner only appears for real updates.

## v3.20.0 — Category menu, new Sentence Detective, Logic Squares fix
**Main menu**
- The home screen now shows four large category buttons: Words & Language, Memory & Attention, Numbers & Logic, and Big games. Tapping one opens that category's own game list. No sideways scrolling and no long page to scroll through.
- **Back** returns to the screen you came from (game → category → home). If a game was opened from a bookmark, Back goes to its category. A 🏠 button jumps straight home from anywhere.
- Today's three and the daily streak stay on the home screen, under the category buttons.
- On phones, Settings is shown as an icon so the top bar has room for the screen title.

**Sentence Detective (English and Malay), new content**
- Replaced the old 10 paragraphs (reused five times each) with **100 different passages per language**: 25 for each comfort level, from simple daily-life sentences (Relax) to linking words and cause and effect (Challenge) and precise vocabulary (Expert).
- Every passage has one blank and three hand-written wrong choices that fit the grammar but not the meaning. A wrong choice never appears in the passage itself, so the answer can no longer be guessed by spotting the word that isn't there.
- Each comfort level keeps its own ✓ completion marks.

**Logic Squares fix**
- Fixed: a correctly filled grid was sometimes not accepted, because some puzzles had more than one valid answer and only the stored one counted. Puzzles are now generated with exactly one solution, and any complete grid with no clashes counts as a win.

## v3.19.0 — New home menu and upgraded puzzle games
**Main page (`index.html`)**
- New app-style layout: a slim top bar with **Back** and **Settings**, a clean home menu, a separate game screen and a separate Settings screen. The games no longer sit underneath the whole menu.
- Home menu groups the games into four categories: Words & Language, Memory & Attention, Numbers & Logic, and Big games (full-screen pages). Quick-jump chips scroll to each category.
- **Today's three**: three puzzles chosen each day (one per category), with ticks, a progress bar and a daily streak.
- Each game tile shows how many puzzles you have solved.
- Hash links (`#play/0`–`#play/8`, `#settings`) make the phone's Back button work and allow bookmarking a game.
- Settings screen: large buttons for language, comfort level, **text size (Normal / Large / Extra large)**, your stats (puzzles solved, days played, streak), clear progress, install app, and About.
- Seed Rush is now linked from the menu (15 games in total). `?lang=` links are honoured on the main page.
- A gentle petal celebration when a puzzle is solved (turned off when the device asks for reduced motion).
- Install banner text is now translated into all four languages.

**Game upgrades**
- Word Trails: a line traces the path you've built, neighbouring tiles you can tap next are highlighted, answer slots fill as you go, and the answer is checked automatically when the last letter is placed.
- Memory Garden: card-flip animation, a move counter and your best score for each comfort level.
- Number Steps: wrong choices are marked and locked; after solving, the steps between the numbers are shown.
- Sharp Eyes: wrong choices are marked; after solving, the missing object returns, highlighted where it was.
- Sentence Detective / Word Hunt and Idiom Lab: wrong answers are marked red and locked, and the right answer turns green.
- Logic Squares: the selected square's row, column and box are highlighted, matching numbers are highlighted, clashes show in red, a "squares left" counter appears, and a number fades when all of it has been placed.
- Gem Garden: animated pops and falling gems, combo bonuses, a score progress bar, an automatic reshuffle when no moves remain, and a hint that highlights a real swap.
- Sky Coordinator: a new radar-style airfield with a sweeping beam, runway-coloured lanes, destination badges on each aircraft (colour, shape and letter), a warning glow for low unassigned aircraft, and pulsing runway buttons once a plane is selected.

**Compatibility**
- The existing `mindgarden-settings` progress format is unchanged. The new stats are stored separately in `mindgarden-ui`.
- The update checker and the offline/PWA support are kept.

## v3.18.0 — Seed Rush (new game, `seedrush.html`)
An original maze chase: collect every seed while robots patrol their own zones and chase in packs of 2–3 when you come near. There are 100+ handcrafted-by-seed levels with tunnels, mud, one-way gates, teleports, gates and night levels; power-ups (boots, freeze, shield, magnet); a hideout shed that appears, hides you for 8 seconds, then disappears and reappears elsewhere minutes later; 3-star scoring, a daily level and unlockable skins.

## v3.16.0 – v3.17.1 — Tower Escape rebuild
Smaller, clearer graphics; predictable patrol robots (max 2 per floor) that can chase you one floor down; a single speed; tap left or right of the gardener to dig, with buttons for movement; digging allowed on ladders.

## v3.13.0 – v3.15.1 — Mahjong Garden and chess rebuild
- Western Chess and Chinese Chess rebuilt with fully tested move rules and a stronger, steadier computer opponent.
- Mahjong Garden: one large board, 100 stacked levels that are always solvable, harder layouts, reliable hints, a progress bar instead of a level list, and the duplicate on-board Undo button removed.

## v3.12.0 — Public launch readiness
- Player-facing metadata and PWA name simplified to “MindGarden”; development build remains in `version.json`.
- Added local Open Graph / Twitter preview artwork and favicon.
- Added fully translated main-page introduction in four languages.
- Improved mobile language-selector sizing, homepage text contrast and readability.
- Gave Relax mode easier introductory English/Malay Sentence Detective paragraphs; other difficulties unchanged.
- Rewrote README for visitors, added three screenshot references and clear wellness notice.
- Retained all 14 games, standalone HTML pages, existing game progress keys and offline shell.

## v3.11.4 — Chess difficulty
Three amateur computer strengths (Novice / Intermediate / Advanced) for Western Chess and Xiangqi.

## v3.11.3 — Xiangqi rules
Corrected cannon check-detection rule and tested blocked/empty cannon attacks.

## v3.11.2 — Standalone chess switch
In-page switching between Western Chess and Xiangqi.

## v3.10.2 — Tower Escape Arcade-only
Preserved compact viewport and 36 levels; removed Puzzle mode.

## v3.8.0 — Mahjong strategy
Deeper layered Mahjong with harder early and middle-game choices.

## Earlier development
MindGarden developed from an original multilingual, no-ad word-and-memory game collection (v0.9 onward), adding Smart City, Mahjong Garden, Tower Escape and chess games over subsequent releases. Older release notes are archived in Git history.
