# Home Assistant Developer

Two agent skills for developing Home Assistant custom integrations and Lovelace cards, packaged as one plugin for OpenAI Codex and Claude Code.

| Skill                                                                    | Purpose                                                                                   |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| [home-assistant-integration](skills/home-assistant-integration/SKILL.md) | Build and review Python integrations using current Home Assistant docs and quality rules. |
| [home-assistant-card](skills/home-assistant-card/SKILL.md)               | Build and review custom Lovelace cards and editors.                                       |

## Install

### Standalone skills

```sh
npx skills add denysdovhan/home-assistant-developer
```

### Codex

```sh
codex plugin marketplace add denysdovhan/home-assistant-developer
```

Open the Plugins Directory, select the Home Assistant Developer marketplace, and install the plugin. Restart the desktop app if the new source is not visible.

### Claude Code

```sh
claude plugin marketplace add denysdovhan/home-assistant-developer
claude plugin install home-assistant-developer@home-assistant-developer
```

For local testing, replace the GitHub shorthand in either marketplace command with this repository's absolute path.

## Plugin appearance

Edit `extensions.com.openai.interface` in `plugin.json` to customize Codex's
`displayName`, `logo`, `composerIcon`, `brandColor`, and `brandColorDark`.
Image paths are relative to the plugin root; the bundled logo is
`assets/home-assistant.svg`. Both colors currently use Home Assistant blue (`#18BCF2`).
See [OpenAI listing metadata](https://developers.openai.com/plugins/deploy/submission#listing-metadata).

Claude's `.claude-plugin/plugin.json` declares `displayName` and `icon`.
The icon is used for Anthropic directory listings; Claude Code ignores it at
runtime and has no documented plugin brand-color field. Merely installing from
this repository does not guarantee a graphical icon in Claude's install UI.
See [Claude directory listing fields](https://code.claude.com/docs/en/plugins-reference#directory-listing-fields).

## Development

Requires Node.js 24+, uv, pre-commit, and Claude Code.

```sh
npm ci
pre-commit install
npm run format
npm run validate
npm run format:check
```

Pre-commit formats staged text files with the locked oxfmt version. CI checks formatting, validates both skills with the official skills-ref tool, validates the portable plugin against its published schema and the Claude manifests with Claude Code, and checks marketplace paths and shared metadata. Validation needs network access to fetch Python tooling and the portable schema.

The root `plugin.json` uses [Agent Plugins 1.0](https://agent-plugins.org/) as recommended by [OpenAI](https://developers.openai.com/plugins/build/plugins). `.agents/plugins/marketplace.json` exposes it to Codex. `.claude-plugin/` supplies the [Claude plugin and marketplace manifests](https://code.claude.com/docs/en/plugin-marketplaces). All manifests share the same root `skills/` directory.

These skills were extracted from [denysdovhan/agents](https://github.com/denysdovhan/agents). Keep instructions, references, icons, and OpenAI skill metadata together when moving a skill.

## Releases

1. Merge pull requests into `main`. **Release Drafter** groups notes into skill improvements, fixes, documentation, and maintenance using PR titles and labels. `feat:` or `feature`/`enhancement`/`minor` means a minor bump; a breaking conventional title or `major`/`breaking` means a major bump. Documentation and other changes default to a patch; `skip-changelog` excludes a PR.
2. Review the draft in GitHub Releases and choose a stable tag such as `v1.0.2`. For the first release, use a version at least as high as `plugin.json`. Add notes manually for direct commits, which Release Drafter does not include.
3. Click **Publish release**. **Update release version** uses `git-auto-commit-action` to commit that tag's version to the four JSON metadata files on `main`.

The version update covers `plugin.json`, `.claude-plugin/plugin.json`, `package.json`, and both root version fields in `package-lock.json`. It rejects malformed versions and downgrades, and makes no commit if the files already match. Only stable versions (`X.Y.Z`, optionally prefixed with `v`) are supported.

The metadata commit comes after publication. The release tag and source archives remain unchanged and therefore contain the previous metadata version. The workflow uses `GITHUB_TOKEN`, so `main` must allow bot pushes; its metadata consistency checks run before committing because that push does not trigger other workflows. If the update fails, fix the cause and rerun **Update release version** from Actions.

## License

[MIT](LICENSE) © Denys Dovhan

The [Home Assistant logo](https://github.com/home-assistant/assets/tree/master/logo) belongs to the Open Home Foundation and is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
