# Parcel Town — Resume Development from v1.4.2 (26 October 2026)

This file is the durable recovery pointer for the owner's next ChatGPT conversation.

## Current authoritative state

- **Latest full editable source:** **v1.4.2**, verified via [source-only CI](https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40284110310). Durable patch: `patches/v141-v142-landmark-shelf-scene-preview.patch.gz.b64`.
- **Latest signed test APK:** **v1.4.1**, Android versionCode **30**, [successful APK build](https://github.com/Dblyth-lab/Parcel-Town/actions/runs/40278226919). v1.4.2 is **NOT yet compiled into an APK**.
- **Next staged test APK:** v1.4.2, versionCode 31, only via the manual Android workflow `.github/workflows/android-preview.yml`. Further source milestones require an increasing code.
- **Complete project handover and visual footage:** [Parcel Town Google Drive handover folder](https://drive.google.com/drive/folders/1ItoQTOZnaVSPw4rag49dRXJwJDJxovJb). Contains `ParcelTown_NEW_CONVERSATION_HANDOVER_v1.4.2_2026-10-26.zip`, `ParcelTown_START_HERE_NEXT_CHAT.md`, `ParcelTown_COPY_INTO_NEXT_CHAT.txt`, original videos 19704/19705/19733/19746, and owner-approved endgame reference screenshots.
- **Project Drive folder:** https://drive.google.com/drive/folders/1lCKMN7LbAHaRhKAibuRGXE1g2-hGh8WM

## Visual and gameplay priorities

- Owner expects genuinely more convincing 3D-quality architecture as landmarks progress through Level 1/2/3—not merely large stars, stickers, color tints or glows.
- Harbour Town's seven landmarks have 2.5D architectural layers plus 21 cinematic-context previews (v1.4.1); v1.4.2 fixes the mismatch in the **Your landmarks** shelf by using those same previews and labelling build/upgrade prices explicitly.
- The other five regions have not yet received equivalently integrated three-level cinematic architecture, and the game is not a true 3D geometry engine. Be candid about that.
- Keep maps scenic and uncluttered: location markers mustn't obscure buildings, roads or water. Keep three-star progress `★☆☆ → ★★☆ → ★★★`, clear costs, construction animation, and earned-coin progression.
- Achievements and collectibles award **one-time coins/hints**, including retroactive Album claims. Preserve no-duplicate-claim semantics.

## Update safety

- Package `com.blythlabs.parceltown.preview`, save key `parcel_town_save_v1`, schema 1, and existing signing fingerprint SHA256 `7bd60d0b87866b385c2f595c134eba5993825da73f251a09d5840c13e31fec4f` must not change. Preserve the owner’s saved game.
- Signing secrets stay in GitHub Actions (`PARCEL_KEYSTORE_B64`, `PARCEL_KEYSTORE_PASSWORD`). **Do not copy keys or passwords into this repository, handover archives or chat.**
- The owner prefers substantive multi-version batches without repeated requests to say "continue", then one signed Android test APK; do not claim a release has been built before compiling and validating it.

## Canonical workflows

- Source-only: `.github/workflows/source-regression.yml` reconstructs from original v0.5.8 Drive baseline and cumulative version patches, checks JavaScript and regression tests, packages editable source.
- Android: `.github/workflows/android-preview.yml` staged for v1.4.2 (31), **manual-only** between deliberate APK releases.
- In new chat: read the Drive handover guide and latest full source ZIP, inspect the approved endgame references and latest v1.4.1 feedback, and continue actual development from v1.4.2.
