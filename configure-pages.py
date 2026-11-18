#!/usr/bin/env python3
"""Set absolute social-preview URLs for the actual hosted GitHub Pages site."""
from pathlib import Path
import sys,re
if len(sys.argv)!=2 or not sys.argv[1].startswith('https://'):
    raise SystemExit('Usage: python configure-pages.py https://ACCOUNT.github.io/REPO/')
site=sys.argv[1].rstrip('/')+'/'
if not re.match(r'^https://[^/]+/.*',site):
    raise SystemExit('Invalid HTTPS site URL')
base=Path(__file__).resolve().parent
for fn in ['index.html','city.html','mahjong.html','tower.html','chess.html','xiangqi.html']:
    p=base/fn
    s=p.read_text()
    s=re.sub(r'(content=")[^"]*social-preview\.png("[^>]*>)',lambda m:m[1]+site+'social-preview.png'+m[2],s)
    p.write_text(s)
p=base/'README.md'
s=p.read_text().replace('**Play link:** Add the actual verified GitHub Pages link before launch using `python configure-pages.py https://ACCOUNT.github.io/REPO/`.', '**[Play MindGarden]('+site+')]('+site+')**')
p.write_text(s)
# Update local integrity manifest after changing HTML and README.
import hashlib
manifest=base/'SHA256SUMS.txt'
if manifest.exists():
    names=[line.split('  ',1)[1].strip() for line in manifest.read_text().splitlines() if '  ' in line]
    manifest.write_text(''.join(hashlib.sha256((base/name).read_bytes()).hexdigest()+'  '+name+'\n' for name in names))
print('Configured social preview and play URL:',site)
