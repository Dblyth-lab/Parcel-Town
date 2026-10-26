# Parcel Town — v1.0.1 playtest video findings and source-only fix

**Status:** Source-only patch completed and verified. **No v1.0.1 APK built or installed.** Android release workflow remains manual-only.

## Evidence from the 13-second v1.0.0 recording
- Level 5, 4 delivered, Harbour Town, 3/7 landmarks built and 100 earned coins visible.
- The Sorting Depot's next upgrade costs 120 coins, leaving a 20-coin shortfall.
- Existing modal displays long paragraphs and an active-looking Upgrade CTA even when unaffordable.
- Landmark vector sprites contrast sharply with the detailed cinematic Harbour Town backdrop and still appear like stickers. This is a real visual quality issue, **not resolved merely by CSS**.
- No successful upgrade is shown in the video, so this recording cannot establish whether the animation works or is satisfying.

## Implemented, source only
- New landmark inspector shows actual landmark artwork plus **large 3-star progress**: ★☆☆, ★★☆, ★★★.
- Upgrade/build cost, current balance and missing amount each have separate visual presentations; the cost appears on the primary button.
- Impossible upgrade/build buttons are truly disabled and have a clear alternative: Play to earn more coins. No currency is spent on that route.
- Building shelf prices indicate unmet balance rather than offering a misleading actionable upgrade.
- Slightly reduced pale sprite footing and balanced building saturation/contrast to blend with the Harbour scene **as an intermediate adjustment only**.
- No changes to game economics, building progress, package ID, saved-data key, schema or signing certificate.

## Regression QA
- Source patch reconstructs cleanly from verified v1.0.0 using `git apply --check` and `git apply`.
- `tests/verify_v101.cjs` reproduces **100 coins vs 120 required**, checks 20-short, disabled CTA and free Play navigation; also verifies allowed Level 2 and Level 3 purchases and save persistence.
- `tests/verify_delivery_bonus.cjs` passes unchanged.
- Latest source-only GitHub workflow run succeeded: https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40262843501
- `patches/v100-v101-playtest-feedback.patch.gz.b64` is the durable source patch.
- Manual Android workflow staged for **v1.0.1 / versionCode 25** but deliberately not run.
- Full on-device look and animation remain unverified; browser navigation was restricted in this runtime.

## Next art direction
The stickers cannot be completely solved with shadows or CSS. Future production should replace the flat SVG sprites with original, consistent isometric/cinematic building renders at proper scale and camera angle, place them on defined lots with realistic occlusion, baked shadows and surrounding terrain, and produce visually distinct renders at all three upgrade stages. Assess Town and Explorer in landscape context, not just isolated icons.
