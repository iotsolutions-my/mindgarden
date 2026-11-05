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
