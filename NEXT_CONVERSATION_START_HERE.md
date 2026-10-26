# Parcel Town — New Conversation Handover (26 October 2026)

**This file is authoritative for resuming after the conversation limit.**

## Versions — DO NOT CONFUSE
- **Latest completed/source-verified:** **v1.4.2 (source only)**, GitHub source CI success: https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40284110310
- **Last compiled/signed test APK:** **v1.4.1**, **versionCode 30**, GitHub signed run: https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40278226919
- **Next APK:** **v1.4.2 or later, Android versionCode >= 31**, preserving installer update and saved progress. No v1.4.2 APK has yet been built.
- **v1.4.2 source patch:** `patches/v141-v142-landmark-shelf-scene-preview.patch.gz.b64`; source-only CI can rebuild from prior Google Drive baseline and all cumulative patches.
- **Editable v1.4.2 source** was packaged in `Parcel_Town_v1.4.2_SOURCE_ONLY.zip` in the conversation.
- **Android package ID:** `com.blythlabs.parceltown.preview`.
- **Save key:** `parcel_town_save_v1`, schema 1; includes optional saved landmark levels and one-time rewards ledger.
- **Signer SHA256:** `7bd60d0b87866b385c2f595c134eba5993825da73f251a09d5840c13e31fec4f`. Permanent signer protected in GitHub Actions secrets.
- **Android workflow:** `.github/workflows/android-preview.yml`, **manual-only**; verify version inputs before dispatch.
- **Owner Drive project folder:** https://drive.google.com/drive/folders/1lCKMN7LbAHaRhKAibuRGXE1g2-hGh8WM. Project baseline `17s4zcIj0t0Si54phRUAqS-oz_mxYUgSj` stored there.
- **Source repo:** https://github.com/Dblyth-lab/Parcel-Town

## Latest feedback
Latest 19746.mp4 and 19747.jpg show Harbour Town's Your Landmarks cards still using old flat SVG illustrations despite v1.4.1's scene-based art previews. Cards also didn't clearly label upgrade vs build prices, and Explorer markers/stars were too big. v1.4.2 **source** fixed these and the outdated v1.3.4 header label. Local and CI JS/upgrade/reward tests passed. Release notes: `PLAYTEST_FEEDBACK_v1.4.2.md`.

## Core game vision
- Parcel Town: calm, offline-capable, colourful cinematic 3D-style isometric parcel puzzle / town-builder.
- 6 districts, parcel sorting route puzzles, Town / Album / Shop / Account and Atlas/Explorer.
- Earn coins from deliveries; build seven landmarks per district; Level 1→2→3 upgrades and three filled/hollow stars with clear costs and visible construction animations.
- One-time achievements and collectables reward coins and hints (plus retroactive claim from Album); avoid repeated claims after restore.
- Scenic mode shows landscape with few controls; Build Sites mode reveals the interactive markers. Pinch/drag/zoom in Explorer.
- Harbour Town has original perspective-aligned **2.5D** scenic upgrade assets and 21 cinematic-context previews for 7 landmarks. These are **not** real-time 3D buildings and other five districts need matching quality. Avoid claiming they are already fully 3D.

## Next actions
1. Continue from verified **v1.4.2 source** or its patch chain.
2. Improve 3D-quality architectural integration, visuals and clutter without breaking existing building identity.
3. Continue in meaningful tested version batches, with a single signed APK when requested.
4. Preserve Android signer/package/version monotonicity and saved data; never uninstall/reset the app.
5. Confirm actual source QA, scene rendering, reward regression and signed APK verification. No claim of on-phone testing until owner checks.
6. Put new stable source and verified APKs in GitHub + owner-controlled Drive, if connector permits.

## Security
**Never commit or include the signing keystore, password, GitHub secrets or any private credentials in public repo/handovers.** The historic Drive folder has signing files; secure or rotate before public release.

## Source / build links
- v1.4.2 successful CI: https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40284110310
- v1.4.2 patch: https://github.com/Dblyth-lab/Parcel-Town/blob/main/patches/v141-v142-landmark-shelf-scene-preview.patch.gz.b64
- v1.4.1 verified APK: https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40278226919
- v1.4.1 release notes: https://github.com/Dblyth-lab/Parcel-Town/blob/main/RELEASE_GATE_v1.4.1.md
