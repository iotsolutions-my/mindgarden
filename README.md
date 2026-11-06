# MindGarden v3.2.5 — Free, ad-free multilingual brain games and Smart City

MindGarden began as a small relaxing web puzzle playground (v0.9). **Smart City is one game mode, not the entire product.** Open `index.html` and choose a game. There is no registration, advertising, fee, or installation requirement. The optional PWA supports offline play after caching.

## MindGarden games (from the original v0.9 and subsequent editions)

- **Word Trails / 詞語小徑** — connect neighbouring letters or characters to solve a clue; no jumping.
- **Memory Garden / 記憶花園** — find matching pairs and train attention.
- **Number Steps / 數字階梯** — complete missing number patterns.
- **Sharp Eyes / 眼力挑戰** — notice differences and missing items.
- **Chinese Character Hunt / 漢字尋寶** — discover components within larger Chinese characters, with replayable levels.
- **Idiom Workshop / 成語研習室** — interpret idioms and their context, with translated language-specific equivalents.
- **Logic Squares / 邏輯方格** — reasoning and number placement puzzles.
- **Gem Garden / 寶石花園** — shape-and-colour match-three puzzle.
- **Air Traffic Controller / 空中協調員** — plan safe aircraft movements.
- **Smart City 3D / 智慧城市挑戰** — a longer-running Malaysian city-building simulation with ten daily missions.

Some games were added after v0.9; the list describes the current MindGarden collection, with the v0.9 foundation explicitly acknowledged. Puzzle availability and exact display names may vary by selected language.

## v3.2.5 Smart City fixes

- **Congestion responds to development.** Fixed a near-permanent 96% cap; capacity now matters throughout the range.
- **Daily congestion milestones:** pass by meeting the target percentage **or** adding a material amount of transport capacity (roads, bus terminal, subway station or traffic lights). Existing unfinished traffic goals receive a new baseline when loaded.
- **Longer journeys:** commuter and freight destinations favour broader connected trips rather than always short nearby trips. Travel remains on the road network.
- **Emergency activity:** ambulances, fire engines and police cars travel along connected road routes from their corresponding facilities; small police/medical helicopters orbit relevant facilities. Decorative movements are not yet dispatched to specific mission incident coordinates.
- **Preserved:** ten daily missions, 15-second intermission, no time pressure, manual Next Day, four languages, saved city format, offline PWA.

## Publishing

Upload the **contents** of this package folder to the root of the GitHub Pages repository. Include `service-worker.js`, `manifest.webmanifest`, `version.json` and the icons. Keep a copy of your existing files before replacing them.

## Privacy and accessibility

Game progress is stored locally in the current browser. Export a city backup from City Administration before clearing browser data. Suitable as casual entertainment; not a diagnostic, prevention or treatment for dementia or Alzheimer's disease.
