# Parcel Town v1.1.3 — Scenic landmarks testing release

**Build date:** 26 October 2026.
**Status:** Android APK compiled, signed, and integrity-verified by GitHub Actions. **Real-device testing pending.**

## Version and update safety

- Version name: **1.1.3**
- Android versionCode: **26** (previous installed preview v1.0.0 versionCode 24).
- Android package: **com.blythlabs.parceltown.preview** (unchanged).
- APK certificate SHA256: **7bd60d0b87866b385c2f595c134eba5993825da73f251a09d5840c13e31fec4f** (unchanged).
- Local save key: **parcel_town_save_v1** (unchanged), schema 1.
- Install over the existing Preview, **do not uninstall first**.
- Do not promise real-device compatibility until tested by owner.

## Twelve incremental source milestones

| Version | Outcome |
| --- | --- |
| v1.0.2 | Replace large floating building stickers on Town and Explorer with scenery-anchored interactive site markers |
| v1.0.3 | Object-fit-aware responsive placement and scene coordinates |
| v1.0.4 | Contact shadows and perspective lot grounding |
| v1.0.5 | Level 2/3 scene-specific miniature architectural and environmental improvements |
| v1.0.6 | Current versus next building-art comparison inside upgrade details |
| v1.0.7 | Local site construction shimmer and particle feedback |
| v1.0.8 | Actual before/after building-art transition and star celebration |
| v1.0.9 | Edge-safe markers and Atlas district earned-star totals |
| v1.1.0 | Six-district material palettes and tier-specific site highlights |
| v1.1.1 | Built / Upgrade / Max progress row, accurate cost and funds |
| v1.1.2 | Reduced motion, narrow-screen accessibility refinements |
| v1.1.3 | Combined mobile QA and signed Android testing APK |

## Verification evidence

- **Source reconstruction/regression:** [Passed](https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40265051999).
- **Android signed build:** [Passed](https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40265126738).
- **Android artifact:** `ParcelTown-Signed-Preview-APK` in the above build, containing `ParcelTown-Preview.apk`, `SHA256SUMS.txt`, `signing-verification.txt`.
- **Source archive:** `ParcelTown-v1.1.3-Source-Only` from successful source-only workflow (30-day retention; the reproducible patch remains in GitHub).
- **Durable source patch:** `patches/v101-v113-scenic-landmark-batch.patch.gz.b64`.
- **Automated functional tests:** `node tests/verify_v113.cjs` and `node tests/verify_delivery_bonus.cjs` passed.
- **Browser visual tests:** 320, 360, 390, 430 and 768 px widths; all six districts; zero JS errors and no horizontal overflow. Verified full Level 1→2→3 upgrades and the 100-coin / 120-coin affordability case.
- **APK digest:** SHA256SUMS.txt verified against extracted signed APK after download.
- **APK workflow:** Returned to manual-only immediately after success.

## Visual direction and caveat

This build removes prominent duplicate flat SVG building **stickers from scenic maps** and instead makes landmark locations interactive over the native panorama. Level 2 and 3 bring miniature architectural props at the site and the detail/upgrade presentation uses 111 existing level-specific building SVG assets.

This **does not yet replace** the six existing scenic backdrops with fully dynamic photographic/3D architecture. The concept infographic is an art-direction preview, not a screenshot of the app. Further visual refinement may be required after mobile video feedback.

No compulsory daily sign-ins, energy bars, advertisements, paid currency, or reset of saves were introduced.
