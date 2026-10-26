# Parcel Town v1.3.4 — Scenic landscape and earned rewards

**Date:** 26 October 2026 (New Zealand)
**Status:** Signed Android test APK successfully compiled, signed and checksum verified. Real-device visual review pending.

## Verified Android update

- **Version name:** `1.3.4`
- **versionCode:** `29`
- **Package ID:** `com.blythlabs.parceltown.preview` (same as the installed v1.2.4)
- **Signing certificate SHA256:** `7bd60d0b87866b385c2f595c134eba5993825da73f251a09d5840c13e31fec4f` (same signer)
- **APK SHA256:** `2ef325efadb35c8444d67303a4289740cf090bd5f5d953ebdab1971ce5aa477a`
- **Save key and schema:** `parcel_town_save_v1`, schema 1. Optional backward-compatible `rewardClaims` array records one-time payouts.
- **Install:** directly over v1.2.4; do not uninstall or clear storage.

**Successful source replay:** https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40272061849

**Successful signed APK build:** https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40272249979

**GitHub source patch:** `patches/v124-v134-scenic-rewards-batch.patch.gz.b64`

**GitHub APK artifact:** `ParcelTown-Signed-Preview-APK`, containing `ParcelTown-Preview.apk`, `SHA256SUMS.txt` and `signing-verification.txt`.

APK workflow was returned to **manual-only** after the build.

## Ten meaningful source milestones

1. v1.2.5 — More readable landscape, toned-down always-on motion and visual noise.
2. v1.2.6 — Reduce competition between unselected landmarks and selected landmarks.
3. v1.2.7 — Scenic mode by default and Build Sites mode on demand; preference saved separately.
4. v1.2.8 — Crop-aware site hotspots and labels.
5. v1.2.9 — Calmer, still-visible scenery changes for Level 2/3 landmarks.
6. v1.3.0 — Guaranteed one-time coin/hint achievements, integrated with real delivery and building progress.
7. v1.3.1 — Collectable discovery coins and hints, regional and classic set completion chests.
8. v1.3.2 — Bounded deterministic reward values, duplicate-claim prevention and backward-compatible save ledger.
9. v1.3.3 — Album reward previews, claim button for previously earned items, compact Town shortcut below the landscape.
10. v1.3.4 — QA, narrow-screen accessibility and signed testing APK.

## Real reward mechanics

Achievements automatically reward newly completed delivery and construction milestones. Each collectible pays coins once; rare and epic treasures have stronger rewards, including a hint for an epic treasure. Completing sets pays a one-time coin and hint bonus. Previously earned achievements and collectibles can be claimed retroactively in the **Album** without resetting the account. Save/restore and repeat-claim tests confirm no duplicate payout after the claim ledger has been saved.

There are no random reward boxes, real-money currency mechanics, energy limits or mandatory waiting timers.

## Validation

- `node tests/verify_v134.cjs` — passed.
- `node tests/verify_delivery_bonus.cjs` — passed.
- `node tests/verify_reward_delivery.cjs` — passed. This test solves an actual parcel route, verifies achievement and collectible rewards, and tests one-time retrospective claims.
- All ten source milestones passed JavaScript syntax checking.
- Reproducible patch applied cleanly against v1.2.4 in local QA and GitHub Actions.
- GitHub signed Android Gradle build completed successfully.
- APK SHA256 verified against the artifact's SHA256SUMS.
- **Not yet verified:** how visual decluttering, pinch gestures and animations feel on the user's physical Android phone. The game still uses scenic panoramas with layered 2D architectural additions rather than fully dynamic 3D architecture.

## Source backup

The full editable source for this version is `Parcel_Town_v1.3.4_SOURCE_ONLY.zip` in the conversation, and the durable source patch is committed to GitHub. A separate upload to the owner's Google Drive folder has not been verified.
