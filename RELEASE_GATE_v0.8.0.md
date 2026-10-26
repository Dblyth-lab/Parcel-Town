# Parcel Town v0.8.0 — Source candidate, APK test gate

Date: 26 October 2026 (New Zealand).

## Decision
**GO for preparing the next controlled Android Preview test APK on request.**
**NO-GO for treating these visuals as the final approved cinematic artwork or releasing publicly.**

The next APK is intentionally NOT built during this development batch. Android Actions is manual-only.

## Verified in source-only development
- 18 sequential source milestones since v0.6.2: v0.6.3 through v0.8.0.
- Last device-tested version is v0.6.2 / versionCode 22.
- Android application ID is unchanged: `com.blythlabs.parceltown.preview`.
- Signing identity must match existing permanent Preview certificate, SHA256 `7bd60d0b87866b385c2f595c134eba5993825da73f251a09d5840c13e31fec4f`.
- Next planned Android version: v0.8.0 / versionCode 23.
- Save key `parcel_town_save_v1` and schema 1 preserved. Optional building upgrade levels remain compatible with previous saves.
- Tap-to-inspect buildings, locked/owned/upgraded marker states, compact landmark purchase shortcut, earned-coin building upgrades, optional map-name display.
- Added modest capped delivery coin bonus for built landmark upgrades in the relevant district (+2 per additional level, capped at +24 per chapter district).
- Four distinct original **illustrated** SVG backgrounds created for Clover Valley, Sunset Canyon, Alpine Ridge and Blossom Bay; used in Town, World Atlas and Explorer and included in offline cache.
- Route preview remains free, and puzzle progression does not use energy limits or forced waiting.

## Automated QA completed
1. GitHub source-only workflow success: https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40258421638
2. Source artifact: `ParcelTown-v0.8.0-Source-Only`, produced by the successful run. Artifacts expire according to GitHub retention; reproducible code patches remain in repository permanently.
3. `node tests/verify_v080.cjs` — game schema, purchases, upgrade persistence, art paths, Maps navigation and route-preview regression all passed.
4. `node tests/verify_delivery_bonus.cjs` — simulated real parcel delivery after purchasing and upgrading Coffee Corner; correct +2 earned coin bonus, Level increase and saved state all passed.
5. Headless mobile-browser check: no JavaScript errors or horizontal page overflow at widths 320/360/390/430/768. Maps showed six cards and all four SVG scenes loaded; Town Explorer scenery loaded for all six districts.

## Outstanding before final launch
- The four new backgrounds are detailed vector illustrations, **not** photorealistic/fully cinematic assets matching the approved concept screenshots. Final high-quality cinematic art production and visual review remain separate, deliberate work.
- A real Android device test of v0.8.0 has **not** been performed.
- Google/Facebook sign-in, backend sync, and real paid billing remain intentionally disabled.
- Signing-key backup and password need restricted storage; rotate the key before broader/public distribution if exposure occurred.

## Ready-to-build manual workflow
[Parcel Town Preview APK](https://github.com/Dblyth-lab/Parcel-Town/actions/workflows/android-preview.yml)

Do not automatically trigger. The workflow is now staged to reconstruct v0.8.0 from the same approved Drive baseline and patches, verify game and delivery bonus tests, then sign with the existing permanent key. The proposed versionCode is 23. The runner build itself still requires validation for this updated source; successful source-only QA does not equal a verified new APK.

## Source backups
- Previous ten milestones: `patches/v063-v072-development-batch.patch.gz.b64`
- v0.7.3 to v0.8.0: `patches/v073-v080-apk-gate.patch.gz.b64`
- Main reconstruction and QA: `.github/workflows/source-regression.yml`
- Local permanent signing credentials are **not** included in either patch or workflow source artifact.
