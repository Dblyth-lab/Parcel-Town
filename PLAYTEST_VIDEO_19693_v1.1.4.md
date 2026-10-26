# Parcel Town v1.1.3 video review — 26 October 2026

User supplied `19693.mp4`, a 36-second Android recording at 1080×2340, showing Town, landmark shelf, and Harbour Town Explorer zoom/pan.

## Confirmed working on device
- App header reports **v1.1.3**.
- User progress visible: **Level 9, 8 deliveries, 142 coins, 4 hints, 3/7 landmarks and 5/21 stars**.
- Sorting Depot shown at Level 3 / ★★★, Coffee Corner and Flower Shop at Level 1.
- Town/Explorer navigation, label toggle, drag and +/− zoom respond in the recording.

## Observed problems
1. The prominent **animated dotted line** in Explorer crosses a road, waterfront, buildings and harbour. It is a decorative SVG, not a computed route tied to roads or parcel puzzles; it misleads players.
2. An extra orange vehicle graphic floats above the water because it uses absolute screen coordinates and is not attached to road geometry.
3. The Level 3 Sorting Depot marker sits next to the ferry/water rather than a plausible depot/delivery area.
4. Baked panoramic art remains static and interactive site markers are overlays; true architectural upgrades are still represented by separate assets and site decorations, not a physically rebuilt town scene.
5. The inspector called Level 3 “all three upgrades completed”; the game has an initial build plus **two** upgrades.

## v1.1.4 source-only correction implemented
- Removed the false route overlay and floating vehicle from Explorer markup.
- Changed Harbour marker anchors: Sorting Depot is anchored near the **yellow parcel truck on the roadway**, ferry near the **harbour vessel**, and the other sites were adjusted to avoid the original overlap.
- Corrected zoom/resize marker projection to use untransformed scene dimensions.
- Corrected Level 3 completion wording to **both upgrades completed**.
- Retained saved game key `parcel_town_save_v1`, save schema 1, existing package `com.blythlabs.parceltown.preview`, upgrade cost rules, delivery bonuses, and three-star progression.

## Verification and release status
- `node tests/verify_v114.cjs` passed locally and in GitHub CI.
- `node tests/verify_delivery_bonus.cjs` passed locally and in GitHub CI.
- GitHub source reconstruction and source-only artifact workflow: https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40267105009 — **success**.
- Durable patch: `patches/v113-v114-explorer-video-fixes.patch.gz.b64`.
- Android workflow staged **manual-only** at v1.1.4 / versionCode 27; no APK generated. Current device installation v1.1.3 remains unchanged.
- **Not resolved:** truly integrated, dynamic 3D or layered cinematic building transformations in the panoramic world. That needs dedicated art/scene rebuilding and real-device review, not a CSS-only fix.
