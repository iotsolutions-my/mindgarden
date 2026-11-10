# MindGarden Security Baseline v1.0

This baseline is part of the **v3.2.12** release review. It applies to the MindGarden web collection and Smart City game.

1. **No audio dependencies.** No music, sound effects or remote audio playback.
2. **Data-only JSON.** Backups contain structured game data. Imports require `format: mindgarden-city-backup`, known tile identifiers, a valid map, bounded numbers and safe nested data. Maximum file size: 3 MB. No scripts or commands are executed from backups.
3. **No unnecessary network connections.** The game has no external JavaScript libraries, analytics, advertising services or automatic redirects. The PWA checks its own origin for updates; the offline standalone HTML can run without a network.
4. **Release integrity.** Review diffs, run syntax and security checks, generate SHA-256 checksums, tag the GitHub release, and publish only from the official repository. Verify uploaded checksums against release artifacts.
5. **Automatic local saves.** City progress uses browser local storage. Reset, import and expansion create local recovery copies when storage permits. Export is user-initiated; import must be explicitly confirmed.
6. **Offline standalone compatibility.** `index.html` and `city.html` have no required remote dependencies. Optional PWA caching is supported on HTTPS.
7. **Regression checks.** Test mission progression, four-language switching, long-running saves, city resizing, traffic routes, multiple airport animations, backup import/rejection and the Mayor policy features before each release.

## Open-Source Software & Security Notice

MindGarden is provided as free, open-source software under the applicable GNU licence.

Official releases are published through the MindGarden repository maintained by IOT SOLUTIONS.

Users are responsible for exercising appropriate cybersecurity precautions, verifying software sources and assessing the risks of downloading, modifying or running third-party versions.

IOT SOLUTIONS does not control, verify, endorse or assume responsibility for unauthorised modifications or third-party distributions of MindGarden.

The software is provided **"AS IS"**, without warranties, to the extent permitted by applicable law. Nothing in this notice excludes liability that cannot legally be excluded.

**Licensing note:** This notice does not replace a full `LICENSE` file or override the repository's actual GNU licence terms. Confirm the exact GNU licence version in the official repository before distributing.
