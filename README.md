# MindGarden 🌿

**A little exercise for your brain, every day.**

MindGarden is a free, open-source collection of **15 ad-free browser games** designed for curious minds of all ages, especially older adults. Play in English, Bahasa Melayu, Simplified Chinese or Traditional Chinese. **No account, no installation, no audio and no advertising.**

## ▶ Play

**Play link:** Add the actual verified GitHub Pages link before launch using `python configure-pages.py https://ACCOUNT.github.io/REPO/`.

You can also open `index.html` in a supported browser. Standalone pages include `city.html`, `mahjong.html`, `tower.html`, `seedrush.html`, `chess.html`, and `xiangqi.html`. When served over HTTPS, the optional PWA can cache the games for offline use.

## Explore the games

| Puzzles & memory | Strategy & adventure |
| --- | --- |
| Word Trails | Mahjong Garden |
| Memory Garden | Western Chess |
| Number Steps | Chinese Chess (象棋) |
| Sharp Eyes | Smart City 3D |
| Sentence Detective / Chinese Character Hunt | Tower Escape |
| Idiom Lab | Sky Coordinator |
| Logic Squares | Gem Garden |
| | Seed Rush |

## Accessibility and privacy

Senior-friendly readable buttons, optional hints and relaxed gameplay. Game progress is saved locally in your browser. No unnecessary remote services, no advertisements, no background audio, no analytics and no accounts.

**Wellness notice:** MindGarden is intended for recreation and enjoyment only. It is **not a medical device** and has not been shown to diagnose, prevent, treat or slow dementia, Alzheimer's disease or other medical conditions.

## Open-source security notice

MindGarden is provided free under the applicable GNU licence. Official releases are maintained by **IOT SOLUTIONS**. Users should verify software sources and exercise cybersecurity precautions when downloading or running third-party modified copies. IOT SOLUTIONS does not control, endorse or assume responsibility for unauthorised distributions. Software is provided **AS IS**, to the extent permitted by applicable law; statutory rights remain unaffected. See [SECURITY.md](SECURITY.md).

## For contributors

Development changes and historic releases are documented in [CHANGELOG.md](CHANGELOG.md). The playable games are lightweight local HTML, CSS and JavaScript; see the included regression tests. Please verify the published GitHub Pages URL and complete smartphone testing before announcing the public launch.

## Publishing checklist

1. Run `python configure-pages.py https://ACCOUNT.github.io/REPO/` to set a working absolute `og:image` URL and the public play link. Social link previews may not work reliably until this is done.
2. Upload the entire directory contents to GitHub Pages and check it over HTTPS.
3. Test all four languages and at least one game on a real Android phone; confirm old saves still load.
4. Paste the published URL into WhatsApp and Facebook and check the preview before announcing the release.
