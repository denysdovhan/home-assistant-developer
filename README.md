<p align="center">
  <a href="https://www.home-assistant.io/">
    <img src="assets/home-assistant.svg" alt="Home Assistant logo" width="128" height="128">
  </a>
</p>

<h1 align="center">Home Assistant Developer</h1>

<p align="center">
  Agent skills for building Home Assistant custom integrations and Lovelace cards.<br>
  Available as standalone skills or a plugin for OpenAI Codex and Claude Code.
</p>

<p align="center">
  <a href="https://github.com/denysdovhan/home-assistant-developer/releases/latest">
    <img src="https://img.shields.io/github/v/release/denysdovhan/home-assistant-developer?style=flat-square" alt="GitHub release">
  </a>
  <a href="https://github.com/denysdovhan/home-assistant-developer/actions/workflows/validate.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/denysdovhan/home-assistant-developer/validate.yml?branch=main&amp;style=flat-square&amp;label=checks" alt="Validation status">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/denysdovhan/home-assistant-developer?style=flat-square" alt="MIT license">
  </a>
  <a href="https://github.com/sponsors/denysdovhan">
    <img src="https://img.shields.io/github/sponsors/denysdovhan?style=flat-square" alt="GitHub Sponsors">
  </a>
  <a href="https://buymeacoffee.com/denysdovhan">
    <img src="https://img.shields.io/badge/support-buymeacoffee-222222.svg?style=flat-square" alt="Buy Me a Coffee">
  </a>
</p>

<p align="center">
  <a href="#installation">Installation</a> ·
  <a href="#usage">Usage</a> ·
  <a href="#development">Development</a> ·
  <a href="#sponsorship">Sponsorship</a>
</p>

## Included skills

Build, review, and debug your projects with guidance based on current [Home Assistant developer documentation](https://developers.home-assistant.io/).

| Skill                                                                    | Purpose                                                                                   |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| [home-assistant-integration](skills/home-assistant-integration/SKILL.md) | Build and review Python integrations using current Home Assistant docs and quality rules. |
| [home-assistant-card](skills/home-assistant-card/SKILL.md)               | Build and review custom Lovelace cards and editors.                                       |

These skills provide development instructions. They do not connect to or control a Home Assistant instance.

## Installation

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

## Usage

Open your integration or card repository in your agent and describe the task. The agent selects the matching skill, reads its references, and checks the relevant Home Assistant documentation before coding.

For integrations:

```text
Use home-assistant-integration to scaffold a custom integration with a
config flow and a sensor backed by DataUpdateCoordinator.
```

For Lovelace cards:

```text
Use home-assistant-card to build a custom card and its editor using
this repository's existing frontend stack.
```

To review an existing project:

```text
Use home-assistant-integration to review this integration against the
Bronze quality rules. Report findings before changing any files.
```

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

Requires Make, Node.js 24+, uv, and Claude Code.

```sh
make install
make check
```

`make install` installs the Git hook and lets pre-commit download the pinned oxfmt version into its own environment. No project npm installation is needed. Each commit runs formatting and both validation scripts. Use `make format` to format all tracked text files and `make validate` to run the skill and plugin validators directly. `make check` runs all pre-commit hooks and fails if formatting changes are needed.

CI runs `make check`: it checks formatting, validates both skills with the official skills-ref tool, validates the portable plugin against its published schema and the Claude manifests with Claude Code, and checks marketplace paths and shared metadata. Installation and validation need network access to fetch tooling and the portable schema.

The root `plugin.json` uses [Agent Plugins 1.0](https://agent-plugins.org/) as recommended by [OpenAI](https://developers.openai.com/plugins/build/plugins). `.agents/plugins/marketplace.json` exposes it to Codex. `.claude-plugin/` supplies the [Claude plugin and marketplace manifests](https://code.claude.com/docs/en/plugin-marketplaces). All manifests share the same root `skills/` directory.

These skills were extracted from [denysdovhan/agents](https://github.com/denysdovhan/agents). Keep instructions, references, icons, and OpenAI skill metadata together when moving a skill.

## Releases

1. Merge pull requests into `main`. **Release Drafter** groups notes into skill improvements, fixes, documentation, and maintenance using PR titles and labels. `feat:` or `feature`/`enhancement`/`minor` means a minor bump; a breaking conventional title or `major`/`breaking` means a major bump. Documentation and other changes default to a patch; `skip-changelog` excludes a PR.
2. Review the draft in GitHub Releases and choose a stable tag such as `v1.0.2`. For the first release, use a version at least as high as `plugin.json`. Add notes manually for direct commits, which Release Drafter does not include.
3. Click **Publish release**. **Update release version** uses `git-auto-commit-action` to commit that tag's version to both plugin manifests on `main`.

The version update covers `plugin.json` and `.claude-plugin/plugin.json`. It rejects malformed versions and downgrades, and makes no commit if the files already match. Only stable versions (`X.Y.Z`, optionally prefixed with `v`) are supported.

The metadata commit comes after publication. The release tag and source archives remain unchanged and therefore contain the previous metadata version. The workflow uses `GITHUB_TOKEN`, so `main` must allow bot pushes; its metadata consistency checks run before committing because that push does not trigger other workflows. If the update fails, fix the cause and rerun **Update release version** from Actions.

## Sponsorship

Your support helps me maintain these skills and my [Home Assistant integrations](https://github.com/denysdovhan/home-assistant-integrations).

- [Sponsor on GitHub](https://github.com/sponsors/denysdovhan)
- [Buy Me a Coffee](https://buymeacoffee.com/denysdovhan)

## License

[MIT](LICENSE) © [Denys Dovhan](https://github.com/denysdovhan)

The [Home Assistant logo](https://github.com/home-assistant/assets/tree/master/logo) belongs to the Open Home Foundation and is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
