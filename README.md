# MindGarden v2.8 — Malaysia Smart City

Browser-first, no login, no ads. Installation remains optional.

## What is new
- **Eight missions each city day**: 3 construction, 3 incidents and 2 events; 15-second rest between missions; Next Day remains manual.
- **New city buildings**: mosque/surau, temple, church, community hall, food court, pasar malam, playground, sports centre and scenic lookout. No advantage is assigned to any religion over another.
- **Malaysian community events**: Hari Raya, CNY, Deepavali, Merdeka, Christmas, Thaipusam, open house, school holidays, plus existing expo, comic convention and night market. Events are randomized; they do not automatically follow a real calendar.
- **Extra incidents**: flash floods, slope movement, dengue, haze, accidents, illegal dumping, vandalism and bus delays.
- **Lightweight hills and slopes** near outer edges. Steep mountain tiles are limited to scenic lookout construction; existing saved buildings remain untouched. Terrain is stylized and deterministic.
- **Four languages**: English, Malay, simplified and traditional Chinese, including new mission/event texts.

## Save compatibility
Existing v2.x unified city saves use the same localStorage key. An active five-mission day is extended with three additional missions, preserving current completed slots. Before publishing, back up your prior package.

## Deployment
Upload *all* contents of this folder to the root of the GitHub Pages deployment, including icons, version.json and service-worker.js. HTTPS is required for PWA installation but browser play works without installing.

## Limits
The terrain is stylized 3D geometry, not a terrain physics system. Events and incidents are fictional game scenarios; no real emergency data is used. Device-specific WebGL performance must be tested on phones before public release.
