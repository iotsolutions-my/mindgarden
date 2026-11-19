#!/usr/bin/env python3
"""Offline, dependency-free launch metadata and packaging checks (updated for v3.22.0)."""
from pathlib import Path
import json,re
root=Path(__file__).resolve().parent.parent
ver=json.loads((root/'version.json').read_text())
build=ver['build']
manifest=json.loads((root/'manifest.webmanifest').read_text())
assert manifest['name']=='MindGarden' and manifest['short_name']=='MindGarden'
sw=(root/'service-worker.js').read_text()
assert f'mindgarden-v{build}-pwa' in sw, 'service worker cache name must match version.json build'
idx=(root/'index.html').read_text()
assert f'name="mindgarden-build" content="{build}"' in idx, 'index.html build must match version.json (otherwise the update banner never goes away)'
pages=['index','city','mahjong','tower','chess','xiangqi','seedrush']
for name in pages:
 s=(root/f'{name}.html').read_text()
 assert '<title>MindGarden' in s, name
 assert 'og:title' in s and 'og:image' in s, name
 assert not re.search(r'<script[^>]+src="https?://', s), name
 assert f'./{name}.html' in sw or name=='index', name+' missing from service-worker.js'
for a in ['favicon.ico','social-preview.png','icons/icon-192.png','icons/icon-512.png']:
 assert (root/a).is_file(),a
assert 'LAUNCH_INTRO' in idx
print('PASS',build,'launch metadata, versions, service worker, essential assets')
