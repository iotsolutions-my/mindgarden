# MindGarden Security Baseline v1.0

- No music, sound, remote audio dependencies, tracking or advertising.
- Games operate without remote libraries, AI services or automatic redirects.
- Saves are data-only. Chess games read only bounded, integer move records and rebuild state by validating each move as legal; never evaluate scripts from saves.
- Keep automatic local saves separate per game. Save recovery relies on browser site data; back up your city before replacing versions.
- These two chess pages are self-contained HTML documents; optional PWA registration works on HTTPS.
- Review releases and verify checksums before publishing through the official IOT SOLUTIONS repository.
- Run engine rules and browser interaction regression tests before each release.

## Open-Source Software & Security Notice

MindGarden is provided as free, open-source software under the applicable GNU licence. Official releases are published through the MindGarden repository maintained by IOT SOLUTIONS. Users are responsible for cybersecurity precautions, verification of software sources and assessment of third-party modifications. IOT SOLUTIONS does not control, verify, endorse or assume responsibility for unauthorised modifications or third-party distributions. The software is provided **AS IS**, without warranties, to the extent permitted by applicable law; liability that cannot legally be excluded is not excluded.
