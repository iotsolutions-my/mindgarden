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
