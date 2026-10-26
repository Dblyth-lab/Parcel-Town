# Parcel Town — Graphics & Gameplay Development Batch

**Baseline on device:** v0.6.2, versionCode 22, signed with the established Parcel Town Preview certificate.

**Build policy:** Complete approximately ten source-only milestones, with regression checks at each milestone. The APK workflow is manual-only (`workflow_dispatch`). Do not change the Android package ID, the permanent signing certificate, or the save-data key/schema. The next device APK should be built after the batch is reviewed and passes tests.

| Source milestone | Intended change | Acceptance check |
|---|---|---|
| v0.6.3 | Tap town landmarks; show building name, owned/locked status, cost and contextual action | Selecting an affordable landmark leads to existing purchase confirmation; owned ones open Explorer |
| v0.6.4 | Place and scale landmark interaction zones against scenic district artwork | Markers are accessible on narrow phones and do not obstruct controls |
| v0.6.5 | Map evolution: distinguish unbuilt lot, active landmark and completed district | Build result visibly updates Town, Map and Explorer |
| v0.6.6 | Clover Valley cinematic-quality artwork integration | Offline scene loads, labels remain legible |
| v0.6.7 | Sunset Canyon cinematic-quality artwork integration | Same |
| v0.6.8 | Alpine Ridge cinematic-quality artwork integration | Same |
| v0.6.9 | Blossom Bay cinematic-quality artwork integration | Same |
| v0.7.0 | Parcel sorting screen polish, route clarity, interaction and success feedback | Existing solver and progression tests pass |
| v0.7.1 | Level-complete presentation, achievements and collection feedback | Rewards awarded once, save compatibility |
| v0.7.2 | End-to-end mobile QA, accessibility and graphics benchmark | Full regression; build signed APK with next monotonically increasing versionCode |

Approved design: vibrant cinematic 3D-looking isometric town, six scenic districts, no unearned logos or UI text in art, gentle free-to-play puzzle progression, no energy limits, no forced waiting.

Do not claim artwork is finished merely because old SVGs or placeholders are used. Each release should state actual implementation status.

### Development discipline
- Keep every milestone as a separate named source patch and test.
- No signing keys or passwords in GitHub, ZIPs, or project files.
- Archive editable source and verified APKs in owner-controlled secure storage.
- APK builds are intentionally manual; test only after approximately ten source milestones.
- Maintain exact Android package `com.blythlabs.parceltown.preview` and saved data key `parcel_town_save_v1`.
