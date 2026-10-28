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

## Development

Requires Make, Node.js 24+, uv, and Claude Code.

```sh
make install
make check
```

The root `plugin.json` uses [Agent Plugins 1.0](https://agent-plugins.org/) as recommended by [OpenAI](https://developers.openai.com/plugins/build/plugins). `.agents/plugins/marketplace.json` exposes it to Codex.

`.claude-plugin/` supplies the [Claude plugin and marketplace manifests](https://code.claude.com/docs/en/plugin-marketplaces). All manifests share the same root `skills/` directory.

These skills were extracted from [denysdovhan/agents](https://github.com/denysdovhan/agents).

See the [contributing guideline](CONTRIBUTING.md) for release instructions.

## Sponsorship

Your generosity will help me maintain and develop more projects like this one.

- 💖 [Sponsor on GitHub](https://github.com/sponsors/denysdovhan)
- ☕️ [Buy Me A Coffee](https://buymeacoffee.com/denysdovhan)
- Bitcoin: `bc1q7lfx6de8jrqt8mcds974l6nrsguhd6u30c6sg8`
- Ethereum: `0x6aF39C917359897ae6969Ad682C14110afe1a0a1`

## License

[MIT](LICENSE) © [Denys Dovhan](https://github.com/denysdovhan)

The [Home Assistant logo](https://github.com/home-assistant/assets/tree/master/logo) belongs to the Open Home Foundation and is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
