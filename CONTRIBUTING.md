# Contributing

## Releases

1. Merge pull requests into `main`. **Release Drafter** updates the draft notes and suggests the next version.
2. Review the draft in GitHub Releases. Add notes for direct commits and choose a stable tag such as `v1.2.3`.
3. Click **Publish release**. **Update release version** commits the published version to `plugin.json` and `.claude-plugin/plugin.json` on `main`.

Use `feat:` PR titles for minor bumps and breaking changes for major bumps. Other changes default to a patch. Labels can also control versioning; see the [Release Drafter config](.github/release-drafter.yml).

Use `skip-changelog` to exclude a PR from the notes.

`main` must allow bot pushes. Version updates happen after publication, so release archives retain the previous manifest versions. If synchronization fails, fix the cause and rerun **Update release version** from Actions.
