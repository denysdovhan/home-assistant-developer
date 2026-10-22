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
`assets/home-assistant.png`. Both colors currently use Home Assistant blue (`#18BCF2`).
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

## License

[MIT](LICENSE) © Denys Dovhan
