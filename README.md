# MindGarden v3.2.3 — Sports, Tourism & City Life

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

## v3.2.3 usability updates
- Expand City moved into a collapsed **City administration** section above the city missions.
- Expansion requires explicit confirmation before charging RM 6,000.
- Road traffic spreads over distinct connected residences, employment sites, and less-used routes.
- Existing saved progress, missions, language selection, and PWA update behaviour preserved.

## v3.2.3 fixes
- Commuter vehicles have varied slow, medium and faster movement; buses and freight trucks have distinct speeds.
- Speed is adjusted by road route length, so long journeys no longer move like snails.
- Road, Inspect and Bulldozer remain in the pinned quick buttons and are not repeated in the scrollable building catalogue.
- Visual vehicle movement remains separate from manual Next Day.
- Existing city saves and four language choices remain compatible.

## Deploy
Upload all files in this folder to GitHub Pages root. Do not omit `service-worker.js`, manifest, `version.json`, or icons. Use HTTPS for optional offline PWA.

## Notes
- Always back up existing releases before replacing.
- Game is recreational and does not prevent, diagnose, or treat dementia or other medical conditions.
