# MindGarden v3.2.4 — Sports, Tourism & City Life

A lightweight browser-playable city game with optional PWA installation.

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

## v1.1 — Sky Coordinator
- Ninth game: original real-time air traffic coordination with three runways and traffic separation.
- Tap aircraft then matching destination runway; pause, resume, step or restart anytime.
- Difficulty changes goal and aircraft movement speed.
- Included in all four UI languages. No adverts and no lives.

## v1.0.1 hotfix
Restored the missing Word Trails Check button label in all four languages.
v1.0.2 hotfix
Restored Idiom Lab data and shuffle function inadvertently removed in v1.0, causing blank game rendering when loading a saved Idiom Lab session. Startup rendering smoke-tested for all eight games in all four languages. Existing local progress key unchanged.

## v1.0
- Word Trails now shows a prominent clue and target length before the board.
- Character Hunt upgraded to 100 harder curated Chinese character puzzles without using the whole big character as an answer.
- Gem Garden now uses high-contrast shapes as well as colours for easier recognition.

## MindGarden v0.9
- Free, static, ad-free multilingual browser puzzle playground. Open `index.html` in a browser or host at GitHub Pages.
## What's new
- Word Trails: clue shown above the neighbour-connected letter board before any hint is requested.
- Chinese Character Hunt: expanded from 50 to 100 curated component puzzles, including 50 more complex characters, with saved progress and replayable shuffled journeys.
- Gem Garden: new match-three game. Tap one gem, then a neighbouring gem to swap. 
- Matches of three or more score points and refill the board. No countdown or lives.
- All previous games, languages, optional hints, and penalty-free skip remain.

## Notes
- Existing progress uses browser localStorage and remains tied to the browser/device.
- This is original gameplay, not a reproduction of Candy Crush assets or branding.
- This prototype still needs hands-on browser accessibility and gameplay QA before a public launch.

