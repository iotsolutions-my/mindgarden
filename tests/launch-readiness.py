#!/usr/bin/env python3
"""Offline, dependency-free launch metadata and packaging regression checks."""
from pathlib import Path
import json,re
root=Path(__file__).resolve().parent.parent
assert json.loads((root/'version.json').read_text())['version']=='3.12.0'
manifest=json.loads((root/'manifest.webmanifest').read_text())
assert manifest['name']=='MindGarden' and manifest['short_name']=='MindGarden'
assert 'mindgarden-v3.12.0-pwa' in (root/'service-worker.js').read_text()
for name in ['index','city','mahjong','tower','chess','xiangqi']:
 s=(root/f'{name}.html').read_text()
 assert '<title>MindGarden' in s, name
 assert 'og:title' in s and 'og:image' in s and 'twitter:card' in s, name
 assert 'v3.11.4' not in s[:2500],name
assert 'LAUNCH_INTRO' in (root/'index.html').read_text()
assert 'RELAX_PASSAGES' in (root/'index.html').read_text()
for a in ['favicon.ico','social-preview.png','icons/icon-192.png','icons/icon-512.png','screenshots/city.png','screenshots/mahjong.png','screenshots/chess.png']:
 assert (root/a).is_file(),a
assert not re.search(r'<script[^>]+src="https?://', (root/'index.html').read_text())
print('PASS v3.12.0 launch metadata, essential assets, localisation, version and offline baseline')
