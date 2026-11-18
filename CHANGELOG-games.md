# Chess & Chinese Chess — v3.13.0

## New
- New computer opponent for both games: iterative-deepening alpha-beta search with quiescence search,
  transposition table, check extensions and proper evaluation (piece-square tables, king safety, endgame play).
- Runs in a background Web Worker, so the page never freezes while the computer thinks (falls back to the main thread if Workers are unavailable).
- Three levels: Relaxed (makes mistakes, varies its play), Steady, Strong (up to ~2.4 s per move).
- Finishes won games instead of shuffling: avoids repetition when ahead, drives towards checkmate.
- Chinese Chess board redrawn: pieces on line crossings, river (楚河 漢界), palace diagonals, position marks.
- Tap a piece to see its name and how it moves; illustrated piece guide in "How to play".
- Hints highlight the suggested move on the board. Undo works even while the computer is thinking.
- Captured pieces shown above and below the board; check is highlighted on the King/General.
- Move history in standard notation (SAN for chess; 炮二平五 style in Chinese, WXF letters in English/BM).
- Chinese pieces use simplified characters (帅 马 车) in 简体中文 and traditional (帥 傌 俥) otherwise.

## Fixed
- Chinese Chess froze on "Computer thinking…" whenever a checkmate appeared in the search (missing `checked()`).
- Chinese Chess never showed "Check!".
- Game-over messages were English-only; Traditional Chinese "New game" confirmation was blank.
- Language was not shared with the home page (now reads/writes `mindgarden-settings`).
- Repetition and move-limit rules: chess threefold repetition and 50-move rule end the game;
  Chinese Chess threefold repetition is a draw, perpetual check loses, 60 moves without capture is a draw.
- Native `confirm()` dialogs replaced with in-page confirmation.

## Compatibility
- Saved games from the previous version (`mindgarden_chess_v1` / `mindgarden_xiangqi_v1`) are migrated automatically.
- Each page is now dedicated to one game and links to the other.

# Mahjong Garden — v3.13.0

## New
- Real mahjong tiles drawn as crisp SVG: Characters (萬) 1–9, Dots 1–9, Bamboo 1–9, four Winds, three Dragons, Flowers and Seasons.
- Four board sizes you choose yourself: Small 40 · Medium 56 · Large 68 · Expert 84 tiles (new players start on Small).
- Free tiles are bright, blocked tiles are greyed; a small number shows how many tiles are stacked in a spot.
- Smart hint: always suggests a pair that still lets you clear the whole board.
- Early dead-end warning: as soon as the board can no longer be cleared, it tells you exactly how many Undos get you back on track.
- Rearrange always produces a layout that can be cleared. Undo, Restart and New board; matched tiles fade out; wrong taps shake gently.
- "My garden" records boards cleared per size and clears without help (counts from the previous version are kept).
- Cleaner screen: the board starts near the top; long explanations moved into "How to play".

## Fixed
- Hints could lead straight into a dead end; "stuck" was only detected when no matches were left at all.
- Traditional Chinese explanation text did not match the other languages.
- Language is now shared with the home page in both directions.


# Mahjong Garden — v3.14.0

## New
- 100 levels in 10 flower chapters (Jasmine Path → Lily Lake). Each level is always the same board and always solvable.
- One board that fills the screen: every level is scaled to the biggest size that fits (extra-large tiles on early levels).
- Vita-style stacking: 3D tile stacks with half-offset upper layers, on 27 shapes (heart, butterfly, pagoda, turtle, lotus, castle and more).
- Gentle difficulty curve: level 1 has 18 tiles on one layer; by level 100 about 100 tiles on up to 5 layers, with trickier pairings.
- Stars: 3 stars without Hint/Undo/Shuffle/Restart, 2 stars with up to 3 helps, 1 star otherwise.
- Daily puzzle (same for everyone that day) with a day streak 🔥.
- My garden grows with every star — seven garden stages from Seedling to Master gardener.
- Big "Continue" button resumes exactly where you left off. Petal celebration when a board is cleared.
- Dead-end warning with a one-tap "Undo n" button; "No more matches" offers Shuffle or Undo.
- Players of earlier versions start further ahead (levels unlocked from their earlier clears).


# Mahjong Garden — v3.15.0

## Harder
- Bigger boards from level 1 (32 tiles, 2 layers) up to about 118 tiles on up to 5 layers by level 100.
- More identical tiles (as in real mahjong), so picking the wrong pair can block you later.
- For every level the trickiest of 14 solvable candidate boards is chosen. Careless play now gets stuck
  about 24% of the time in levels 1–5, 61% in 6–15, 75% in 16–30, 90% in 31–60 and 97% in 61–100 (previously 0–51%).
- 2 stars now allow at most 2 helps (was 3).

## Changed
- Home screen shows progress instead of a grid of 100 level buttons: levels cleared, the current chapter and the next level.
- Hints are instant and always correct: the game keeps a known winning path and updates it after every move.
- The dead-end check runs in the background, so the screen never freezes, and it now catches dead ends the quick check missed.
