# MindGarden changelog

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
