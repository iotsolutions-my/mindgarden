# MindGarden v3.2.30 — City health and indicator correction

MindGarden is a **free, ad-free, browser-playable collection of ten recreational games**. Installation is optional. Languages: English, Bahasa Melayu, 简体中文 and 繁體中文.

## New in v3.2.30

- **Green-city gameplay:** parks, urban forests and wetlands reduce local environmental pressure; the pollution breakdown shows the calculated reduction.
- **Energy choices:** nuclear adds a separately labeled environmental-risk game penalty while remaining a low operational air-emission source. Renewable solar, wind and hydro can reduce the modeled risk.
- Scores represent gameplay only, not physical air-quality measurements or a claim that nuclear is a high-carbon generator.


- Removed the absolute healthcare ceiling that kept health at exactly 76% whenever pollution reached 100%.
- Displayed medical adequacy, road reach, clean-water contribution, green benefit and pollution penalty in an expandable health report.
- Identified when healthcare or safety supply already exceeds demand, instead of recommending infinite new buildings.
- Normalised pollution against urban activity and green mitigation so it no longer automatically saturates in larger cities.
- Preserved the WebGL visuals, aircraft shapes, saves, mission logic and standalone offline support.

## Existing puzzle improvements

- Word Trails now rotates through 60+ unique answers in **each language and difficulty mode** before any repeat. The question bank covers environments, society, reasoning, technology, local community and professional topics.
- A three-step hint ladder replaces recycled clues: (1) final letter plus vowel count (or final character in Chinese); (2) starting letter and row/column; (3) full connected-tile path.
- Each generated board contains the answer as a contiguous route of non-repeating neighbouring tiles, including diagonals.
- Number Steps now offers an additional plausible option.
- Existing Sentence Detective passages, idioms, games, saved progress, PWA and Smart City aircraft/renderer remain unchanged.

## Previously introduced city features (unchanged)

- Municipal supply warnings distinguish **built source**, **road connectivity**, **residential coverage**, and **supply shortage**. A connected plant is no longer falsely reported as disconnected because some residents are not covered.
- All residential coverage calculations weight high-density buildings by the number of residents: homes (12), apartments (48), and condos (84).
- Inspecting a building shows whether it touches a connected road; the utility panel also shows resident reach and production capacity.
- Homes can be upgraded in place to apartments or condominiums, and apartments to condominiums, paying only the construction-price difference. This avoids demolishing existing homes.
- Mayor policies affect daily activity income differently. Tourist promotion benefits from actual visitors, industry from road-accessible employment, housing from utility-served residents, and transport from commuters. Effects are recalculated per day; Mayor decisions cannot create income from zero relevant activity.
- Finance preview shows estimated policy activity return in addition to the policy cost and municipal tax.
- Extreme pollution now limits achievable happiness and healthcare levels; tourism also responds to pollution, keeping environmental management meaningful.
- More realistic warnings do not require changing the long-running city save key.
- Existing helicopter, drone, sea, bridges, ship, map, missions, and WebGL rendering sections were not modified in this release.

**Limitations:** Statistics remain simplified estimates, not a real-world engineering or municipal economic model. New high-rise upgrades are player-directed rather than automatically replacing old houses.


- Restored **the green map edge and consistent green land plot grid**, including when zoomed out on large maps. The blue background is again the environment, while editable sea tiles remain the navigable water in the map.
- Redrew **Road Bridge** as a low road-height supported causeway with shoreline access and guardrails, rather than a raised floating block. A bridge is constructed by selecting Road on sea; cost RM480. Removing a bridge restores sea.
- Fixed unclear **IoT sensor and traffic-light construction missions**. IoT sensors must be installed on an existing building or road; traffic lights on existing roads. Additional safeguards recover interrupted mission state and prevent missing translations from breaking mission rendering.
- **Kept the exact helicopter and drone rendering section from v3.2.16.** No aircraft redesign or flight behaviour change.
- Kept your saved city, manual Next Day, sea editing, connected ship routing, port placement and island/coast expansion logic.

## Games (from the original v0.9 concept onward)

1. **Word Trails** — build connected words from neighbouring tiles.
2. **Memory Garden** — match picture pairs.
3. **Number Steps** — find the missing numbers.
4. **Sharp Eyes** — observation and missing-item puzzles.
5. **Sentence Detective / Chinese Character Hunt** — language-specific context and character puzzles.
6. **Idiom Lab** — idioms, proverbs and 成语.
7. **Logic Grid** — number and logic challenges.
8. **Gem Garden** — matching shapes and colours.
9. **Air Traffic Coordinator** — flight coordination exercises.
10. **Smart City 3D** — build and manage one persistent Malaysian city with missions, roads, housing, jobs, utilities, Mayor's Office, tourism, ports and sea.

MindGarden is recreational software, not a treatment for dementia or Alzheimer's disease.

## Smart City gameplay

- One city, saved automatically on the device; up to 144×144 tiles.
- Ten missions per manual day, a 15-second pause between missions, no real-time response deadline.
- An optional PWA, and standalone HTML can be opened offline where supported.
- Place **Sea** on empty land for RM0; bulldoze sea for RM0. Seaports and marinas require sea connected to the map edge.
- Place **Road** on an existing sea tile to build a road bridge (RM480). Roads and bridges carry cars, while sea/bridge tiles remain traversable to ships. Water geometry and ship clearance are simplified low-poly graphics.
- Aircraft activity is controlled by the preserved earlier helicopter/drone model code.
- Save backups are JSON data only. Export before updating and verify official releases before installing third-party files.

## Publishing

Upload the complete contents of this release folder into the root of your existing GitHub Pages repository. Include `city.html`, `index.html`, `manifest.webmanifest`, `service-worker.js`, `version.json`, and `icons/`. Do not delete browser site data during an update, as that can remove local saves. Export your current city before upgrading.

## Security and licensing

See `SECURITY.md` and the official repository licence for the full legal terms and Security Baseline v1.0. No audio, ads, remote asset dependencies, accounts, automatic redirects or telemetry are required for the game. The application and its save data are provided "AS IS" without warranties to the extent allowed by law; mandatory rights remain unaffected.

## Checks

- `node tests/sea-bridge-regression.test.js`
- `node --check` on extracted inline game JavaScript
- In-memory Chromium test of IoT mission progression and all four language switches
- SHA-256 file checksums in `SHA256SUMS.txt`

Browser tests do **not** establish complete compatibility with every Android WebGL device. Players should test their city backup and live map before replacing a public deployment.


## v3.2.30 Planning diagnostics
The Mayor's Office shows measured electricity supply/demand, ESG and pollution. The congestion milestone help displays demand/capacity and approximate what-if scenarios. These estimates are not guarantees; road connectivity and later construction can change the result.

## v3.2.30 — Event rewards and demand
Community-event rewards now depend on suitable venue capacity, realistic attendance estimates, road access, congestion and safety. Unrelated buildings no longer multiply camping or sports events. Rewards have diminishing returns as attendance approaches demand.

### v3.2.30: pollution and clean industry
Pollution details list the emitting facilities and the NW/NE/SW/SE map quadrants, read using the on-map north compass. An existing factory can be upgraded in place to a Clean-tech / robotics factory for the incremental construction cost. Low-carbon energy is modelled as low operating air emissions, not as an automatic pollution sink. All figures are illustrative simulation scores rather than real-world measurements.


## v3.2.30 Milestone hotfix
Already-achieved numeric milestone targets (including congestion targets) now complete automatically during normal UI refresh and save reload. Rewards are awarded only once.


## v3.2.30: Malaysia-inspired city life

Build event halls and a World Trade Centre. Celebrate Hari Raya, Chinese New Year, Thaipusam and Deepavali through city events. Choose an appropriate street celebration; if a safe bypass exists, the city temporarily closes the road and reroutes traffic until the next city day. Mayor City Operations lets you fund short-term improvements without changing your Mayor policy.

## v3.2.30 — Malaysian city venues and mature-city planning
Event & Convention Hall and World Trade Centre now render as distinct buildings and participate in randomly selected construction missions and event-related incidents. Venue event outcomes depend on building availability and player choices. Mayor guidance now takes apartments, condominiums, population and tourism venues into account.


### v3.2.30 public Malaysian cultural celebrations
Public festivals use city residents, visiting participants, public outdoor space, roads, safety and transport—not convention-hall seats. Temporary street events have a safe crowd capacity and do not require an event hall. Exhibition missions retain their indoor venue model. Existing saves remain compatible.
