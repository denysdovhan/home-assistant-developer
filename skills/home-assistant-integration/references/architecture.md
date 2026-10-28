# Home Assistant Architecture Reference

Use this file before editing generic integration architecture. Doc paths below are relative to the docs base URL defined in `SKILL.md` (`https://contributors.home-assistant.io/`) — prepend it and fetch the current markdown before coding.

## Core Architecture

| Topic                | Doc path                              |
| -------------------- | ------------------------------------- |
| Core architecture    | `architecture/core/index.md`          |
| Integration concepts | `core/integrations/concepts/index.md` |
| The `hass` object    | `core/internals/hass/index.md`        |
| Events basics        | `core/internals/events/index.md`      |
| Services basics      | `core/integrations/actions/index.md`  |
| States basics        | `core/internals/states/index.md`      |

## Integration Structure

| Topic                | Doc path                                    |
| -------------------- | ------------------------------------------- |
| File structure       | `core/integrations/file-structure/index.md` |
| Manifest             | `core/integrations/manifest/index.md`       |
| Brand assets         | `core/integrations/brands/index.md`         |
| Config entries index | `core/integrations/config-entries/index.md` |
| Config flow          | `core/integrations/config-flow/index.md`    |
| Options flow         | `core/integrations/options-flow/index.md`   |
| YAML configuration   | `core/integrations/yaml/index.md`           |

For local file-level routing, read `core-integration-files.md` before editing integration files such as `__init__.py`, `manifest.json`, `config_flow.py`, `coordinator.py`, `diagnostics.py`, or `repairs.py`.

## Runtime Behavior

| Topic                           | Doc path                                             |
| ------------------------------- | ---------------------------------------------------- |
| Fetching data                   | `core/integrations/fetching-data/index.md`           |
| Setup failures                  | `core/integrations/setup-failures/index.md`          |
| Firing and listening for events | `core/integrations/events/index.md`                  |
| Automation trigger classes      | `core/integrations/triggers-and-conditions/index.md` |
| Networking and discovery        | `core/integrations/network-discovery/index.md`       |
| Diagnostics                     | `core/integrations/diagnostics/index.md`             |
| System health                   | `core/integrations/system-health/index.md`           |
| Authentication                  | `core/internals/auth/index.md`                       |

## Project Hygiene

| Topic                                         | Doc path                                   |
| --------------------------------------------- | ------------------------------------------ |
| Component and platform review                 | `core/development/checklist/index.md`      |
| Test file structure                           | `core/development/tests/index.md`          |
| Development testing                           | `core/development/testing/index.md`        |
| Typing                                        | `core/development/typing/index.md`         |
| Translations                                  | `core/integrations/translations/index.md`  |
| Internationalization                          | `translate/guides/developers/index.md`     |
| Documentation                                 | `writing/guides/integration/index.md`      |
| Custom integration packaging and distribution | `marketplace/guides/integrations/index.md` |

## Editing Rule

When editing architecture-level files, read this reference, fetch the relevant markdown sources, then inspect the local repo implementation before changing code. Do not infer current Home Assistant requirements from memory.
