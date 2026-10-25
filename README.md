# Parcel Town — Android Preview CI

GitHub Actions workflow: [Parcel Town Preview APK](https://github.com/Dblyth-lab/Parcel-Town/actions/workflows/android-preview.yml)

The project is built from a source ZIP in the Parcel Town Google Drive folder. The default is **v0.5.8** (Drive file ID `17s4zcIj0t0Si54phRUAqS-oz_mxYUgSj`). To build **v0.6.1**, first upload `Parcel_Town_v0.6.1_GitHub_Actions_Ready_Source.zip` from the previous ChatGPT reply to the same Drive folder, then supply its newly assigned file ID when running the workflow.

## First-time signing setup

1. Set repository to **Private** in GitHub Settings.
2. **Rotate the private signing key before distribution** if its existing Google Drive backup/password were link-accessible. Keep the key and password outside this repo.
3. In GitHub Settings > Secrets and variables > Actions, create:
   - `PARCEL_KEYSTORE_B64`: base64 of the complete *permanent* .p12 file (single line).
   - `PARCEL_KEYSTORE_PASSWORD`: its password.
4. If key was rotated, update the expected SHA-256 certificate fingerprint in the workflow before running.
5. Go to **Actions > Parcel Town Preview APK > Run workflow**. Provide the source ZIP's Drive file ID, version name and monotonically increasing versionCode (example: `0.6.1`, `20`).
6. Download `ParcelTown-Signed-Preview-APK` from the successful workflow run's artifacts.

**Security**: Never commit signing keys, keystore passwords or CI secrets. An APK signed with the new key cannot update an old differently signed APK. Uninstall the old Preview after backing up data if necessary. User has approved losing old Preview progress.

The workflow has not yet run successfully; Drive sharing and Capacitor build requirements still need to be validated by GitHub Actions.
