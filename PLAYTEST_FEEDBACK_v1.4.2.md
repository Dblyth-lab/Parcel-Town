# Parcel Town v1.4.2 — Video review and landmark art consistency

Date: 26 October 2026.

**Build status: Source-only correction completed and verified. NO v1.4.2 APK built.**
**Last signed Android APK: v1.4.1, versionCode 30.**
**Next staged Android version: v1.4.2, versionCode 31; GitHub APK workflow is manual-only.**

## Source evidence: Android footage 19746.mp4 and screenshot 19747.jpg

- Harbour Level 14, 13 delivered, 587 earned coins, 4/7 built landmarks.
- Existing Level 2 Coffee Corner and Flower Shop cards still displayed legacy flat SVG building icons, even though v1.4.1 had cinematic-context render previews in the modal and Explorer.
- Courier Garage is Level 1, with a next-level upgrade cost 450 coins.
- Central Park has not been built and needs 370 coins.
- Harbour Ferry has not been built; at 587 coins, it is 263 short of 850 coins.
- Existing shelf displayed icon prices without stating whether the charge builds a new landmark or upgrades an existing one.
- Existing v1.4.1 brand header erroneously displayed v1.3.4.
- Explorer selected landmark stars/badges were visually large against the scene, especially when zoomed.

## Fixed in v1.4.2 source

1. Harbour's landmark cards now use `landmarkScenePreview` and `assets/scene-previews/harbour/<site>-l<level>.webp` for actual scene-based artwork across all 3 levels. Other districts retain their illustrated level-specific SVGs until cinematic equivalents exist.
2. Cards explicitly present `Build Level 1` or `Upgrade to L2/L3`, with coin amounts labelled `coins`, three-star progression and accessible viewing of details for affordable/unaffordable/maxed sites.
3. Minor selected/nonselected star-badge scale reductions in Explorer to keep more of the scenery visible.
4. Brand header now accurately reflects v1.4.2.
5. Preserved app package `com.blythlabs.parceltown.preview`, save key `parcel_town_save_v1`, save schema 1 and prior economy/rewards. No signing credentials in patch.

## Verification

- Local `node tests/verify_v142.cjs`: PASS, including full scenario from screenshot and a purchased Coffee Corner Level 3 upgrade changing the card's preview.
- Local `tests/verify_delivery_bonus.cjs`: PASS.
- Local `tests/verify_reward_delivery.cjs`: PASS.
- GitHub source-only reconstruction passed: https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40284110310
- Durable source patch: `patches/v141-v142-landmark-shelf-scene-preview.patch.gz.b64`.
- Source artifact: `ParcelTown-v1.4.2-Source-Only`.
- The planned APK is staged manual-only with versionCode 31, but **was not compiled or signed**.
- Real-device v1.4.2 visual acceptance not yet possible: no v1.4.2 APK.

## Still not fully 3D

The town contains perspective-matched original 2.5D scene overlays for Harbour's seven landmarks, but buildings are not fully independent real-time 3D models. This update makes the existing scene art consistent between the map and the purchasing shelf; it is not a final six-district photorealistic architecture upgrade.

## Saved game and next build

When user asks to build, trigger the staged Android workflow, verify signing certificate SHA256 `7bd60d0b87866b385c2f595c134eba5993825da73f251a09d5840c13e31fec4f`, versionCode >30, and install directly over existing v1.4.1 without uninstalling.
