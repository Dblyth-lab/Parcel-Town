# Parcel Town v1.0.0 — 20 milestone source candidate

**State:** All 20 approved source milestones v0.8.1 through v1.0.0 integrated and verified by source-only CI. No v1.0.0 Android APK has been built.

**Approved scope and actual code:**
- v0.8.1 Grounded landmark positions and contact shadows.
- v0.8.2 Environmental foundations, paths and landscaping around landmarks.
- v0.8.3 Accessible landmark detail UI, minimum 44px touch targets.
- v0.8.4 Filled and empty three-star indicator (★☆☆, ★★☆, ★★★).
- v0.8.5 Level 1 grounded artwork (37 variants).
- v0.8.6 Level 2 structural extension artwork (37 variants).
- v0.8.7 Level 3 premium extension artwork (37 variants).
- v0.8.8 Live building-art and star transformation in Town, Explorer and inspector.
- v0.8.9 Prominent coin cost, balance, affordability, earned-coin delivery bonus.
- v0.9.0 Construction curtain/marker shimmer after committed upgrade.
- v0.9.1 Star-pop animation and sparkle celebration.
- v0.9.2 Dismissible completion overlay, polite accessibility and reduced-motion support.
- v0.9.3 MAX LEVEL treatment and disabled further upgrade progression.
- v0.9.4 Evolving environmental lighting/greenery at three or five built landmarks.
- v0.9.5 Consistent artwork-level paths across six districts and all mapped buildings.
- v0.9.6 More accessible Explorer zoom/map focus controls.
- v0.9.7 Derived district star summaries and preserved capped upgrade delivery bonus.
- v0.9.8 Responsive star sizing, motion and paint performance safeguards.
- v0.9.9 Source regression script validates project metadata, render script, levels, assets and cache.
- v1.0.0 Source candidate checkpoint without compiling an APK.

**Proof / recovery**
- Source-only CI success: https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40260535821
- Commit patch: `patches/v081-v100-landmark-upgrades.patch.gz.b64`
- Full editable source artifact: `ParcelTown-v1.0.0-Source-Only` on CI run above.
- 111 SVG variants in `assets/landmark-levels/`, generated from 37 unique source building SVGs.
- Tests: `node tests/verify_v100.cjs` and `node tests/verify_delivery_bonus.cjs` passed in local code environment and GitHub CI. Source CI also ran the earlier v0.6.2 through v0.8.0 regression stages before applying v1.0.0.
- JavaScript syntax check passed on each of 20 local stages.
- XML parse check passed on all 111 SVG variants.
- The Android APK GitHub Actions workflow is **manual-only**, staged for v1.0.0 versionCode 24 with permanent signer; it must not be started without user request.

**Caveats and release gate**
1. Building graphics are original, editable **stylized SVG structural variants** (three visible appearances). They do **not** yet match the fully cinematic 3D-quality benchmark. The town buildings still render as overlays with better environmental grounding; fully baked-in scenes require dedicated compositing or new source artwork and visual review.
2. Source tests passed, but v1.0.0 has **not** been installed on a real device or compiled as an APK. Do not describe it as a verified Android update yet.
3. Headless browser visual playback was blocked by this runtime's policy. Image asset inspection was performed, but a complete Android visual QA pass remains outstanding.
4. Preserve `com.blythlabs.parceltown.preview`, `parcel_town_save_v1`, schema 1, and the existing permanent signing key. No signing credentials are included in source patches or artifacts.
5. No Google/Facebook sign-in or billing added. No energy limits or forced waiting.
