# Parcel Town v1.2.4 — Ten-version Android testing update

**Build status:** Signed Android APK built successfully and checksum verified on 26 October 2026. Real-device testing remains to be performed by the playtester.

## Changes since v1.1.4

1. v1.1.5 — Explorer inspector opens landmark building and upgrade details directly.
2. v1.1.6 — Tap to centre an Explorer landmark with a bounded camera.
3. v1.1.7 — Two-finger pinch and pan controls for touch devices.
4. v1.1.8 — Position maps' landmark hotspots to scenic lots in four illustrated regions.
5. v1.1.9 — Embed two- and three-star architectural upgrades into illustrated district scenery.
6. v1.2.0 — Animate upgrades at the actual Town/Explorer site, preserving the star celebration.
7. v1.2.1 — Remove the duplicate floating delivery van from Town.
8. v1.2.2 — Clear upgrade costs, coin balances, missing coins and MAX status in Explorer.
9. v1.2.3 — Keyboard accessibility and camera resizing improvements.
10. v1.2.4 — Integrated quality checks, scene-aligned Harbour upgrade props and signed testing candidate.

The scenery is still a rendered panorama enhanced with 2D environmental layers; it is not a physically simulated 3D city. The update should be reviewed on a real phone for correct landmark positions, smooth pinch gestures and visible upgrade effects.

## APK and save compatibility

- Android version: **1.2.4**, versionCode **28**
- Package: `com.blythlabs.parceltown.preview`
- Permanent signing certificate SHA256: `7bd60d0b87866b385c2f595c134eba5993825da73f251a09d5840c13e31fec4f` — matches the existing Preview signer
- Save key: `parcel_town_save_v1`; save schema remains 1.
- Install over v1.1.3 (versionCode 26) without uninstalling; the upgrade should preserve progress, but device-side verification is required.
- No energy limits, real-money currency, or background sign-in added.

## Verified checks

- GitHub source-only replay and regression: https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40269225956
- GitHub signed Android build: https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40269303644
- Artifact `ParcelTown-Signed-Preview-APK` contains `ParcelTown-Preview.apk`, `SHA256SUMS.txt`, and `signing-verification.txt`.
- Extracted APK SHA256: `0a27d716c2c2e061ee01fa1114c8986fe2dcd522fcc369b5a6d2d7c90e090c0a`.
- `node tests/verify_v124.cjs` and `node tests/verify_delivery_bonus.cjs` passed on the replayed source and in CI.
- The APK build workflow has been returned to manual-only after successful verification.

## Source recovery

- Source patch: `patches/v114-v124-scenic-explorer-batch.patch.gz.b64`.
- Main source-only CI: `.github/workflows/source-regression.yml`, which reconstructs the project from the established Google Drive baseline and cumulative patches.
- A separate tested exploratory patch, `patches/v114-v124-explorer-and-landmark-batch-gpt6.patch.gz.b64`, is preserved for comparison but is **not** part of the signed v1.2.4 APK.
- Do not merge both v1.2.4 patches; they are alternate development branches targeting the same base.
