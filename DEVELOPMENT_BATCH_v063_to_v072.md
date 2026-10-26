# Parcel Town — Ten Source Milestones v0.6.3 to v0.7.2

**Source status:** Integrated, committed as reproducible patch, regression-tested in GitHub Actions on 26 October 2026.

**Mobile release status:** No APK built for this batch. The last device-tested version remains v0.6.2 (versionCode 22). The Android signing key remains unchanged and protected in GitHub Actions secrets. APK workflow is manual-only.

## Delivered source changes

| Version | Actual implementation |
|---|---|
| v0.6.3 | Tap landmark icons on the town scenery to open details; use existing coin purchase confirmation or inspect built landmarks |
| v0.6.4 | Toggle landmark name labels on the scenic map without hiding tappable icons; improved focus and touch targets |
| v0.6.5 | Optional Level 1–3 landmark upgrades, saved in optional `buildingLevels` under existing schema-1 saves; earned-coin prices and confirmation |
| v0.6.6 | Clover Valley original scenic atmosphere overlay added to Town, Atlas and Explorer; offline cached |
| v0.6.7 | Sunset Canyon scenic atmosphere overlay and offline caching |
| v0.6.8 | Alpine Ridge scenic atmosphere overlay and offline caching |
| v0.6.9 | Blossom Bay scenic atmosphere overlay and offline caching |
| v0.7.0 | Free route-check control and readable route feedback; no hints or coins spent |
| v0.7.1 | Level-complete celebration and clearer reward/chapter wording |
| v0.7.2 | Screen-size and reduced-motion accessibility adjustments, lazy loading for atlas backgrounds, combined regression test |

**Art-quality qualification:** v0.6.6–v0.6.9 add original decorative vector atmosphere overlays to the existing illustrated backgrounds. They are **not** replacements for the four full cinematic-quality district artworks in the approved visual benchmark. Those full artwork replacements remain a separate visual-production milestone. Do not describe the current graphics as approved final cinematic quality.

## Recovery and verification

- Durable combined patch: `patches/v063-v072-development-batch.patch.gz.b64`
- Source verification: `.github/workflows/source-regression.yml`
- GitHub Actions regenerates the source from the approved Drive baseline, v0.6.1 patch, v0.6.2 fix and this ten-version batch patch, then executes `tests/verify_v072.cjs`.
- The source-only verification succeeded: https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40256751057
- That run packages an **editable source-only** artifact. It creates no Android APK and does not access the signing secrets.

## Safety and next release gates

- Keep Android ID `com.blythlabs.parceltown.preview`, save key `parcel_town_save_v1` and save schema 1.
- The next Android APK must increase versionCode beyond 22 and keep the existing signing certificate.
- Before generating that APK: conduct visual QA on real small-screen devices, validate upgrade/restore edge cases and complete approved cinematic artwork.
- No energy limits, waiting timers, compulsory purchases or monetisation shortcuts added.
