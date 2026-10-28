# Home Assistant Core Integration Files Reference

Use this file before editing integration-level files. Doc paths below are relative to the docs base URL defined in `SKILL.md` (`https://contributors.home-assistant.io/`) — prepend it and fetch the current markdown before coding, then inspect the local repo patterns. Quality-rule docs live at `core/quality-scale/<rule>/index.md`.

## File Map

| Local file or area                                     | Read before editing                                                                                                                                                                                            |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__init__.py`                                          | `architecture/core/index.md`, `core/integrations/config-entries/index.md`, `core/integrations/setup-failures/index.md`, `core/integrations/fetching-data/index.md`                                             |
| `manifest.json`                                        | `core/integrations/manifest/index.md`, `core/integrations/file-structure/index.md`, `core/integrations/brands/index.md`                                                                                        |
| `config_flow.py`                                       | `core/integrations/config-flow/index.md`, `core/integrations/flow-steps/index.md`, `core/integrations/config-entries/index.md`, `core/internals/auth/index.md`, `core/integrations/network-discovery/index.md` |
| `options_flow.py`                                      | `core/integrations/options-flow/index.md`, `core/integrations/config-entries/index.md`                                                                                                                         |
| `coordinator.py`                                       | `core/integrations/fetching-data/index.md`, `core/integrations/setup-failures/index.md`, `core/internals/asyncio/index.md`, `core/internals/blocking-operations/index.md`                                      |
| `entity.py`                                            | `core/entities/entity-class/index.md`, `core/development/checklist/index.md`, `entities-and-domains.md`                                                                                                        |
| Platform modules                                       | `entities-and-domains.md`, `core/entities/entity-class/index.md`, `core/development/checklist/index.md`                                                                                                        |
| `diagnostics.py`                                       | `core/integrations/diagnostics/index.md`, rule `diagnostics`                                                                                                                                                   |
| `repairs.py`                                           | `core/integrations/repairs/index.md`, rule `repair-issues`, `core/integrations/translations/index.md`                                                                                                          |
| `trigger.py`, `triggers.yaml`                          | `automation-triggers.md`, `core/integrations/triggers-and-conditions/index.md`, `core/integrations/events/index.md`                                                                                            |
| `services.yaml` and service/action handlers            | `core/integrations/actions/index.md`, rules `action-setup`, `action-exceptions`, `docs-actions`                                                                                                                |
| `strings.json`, `translations/*.json`                  | `core/integrations/translations/index.md`, `translate/guides/developers/index.md`, rules `entity-translations`, `exception-translations`, `icon-translations`                                                  |
| API/client modules                                     | `core/integrations/fetching-data/index.md`, `core/internals/asyncio/index.md`, `core/internals/blocking-operations/index.md`, `core/internals/auth/index.md`                                                   |
| `tests/`                                               | `core/development/tests/index.md`, `core/development/testing/index.md`, rules `config-flow-test-coverage`, `test-coverage`                                                                                     |
| User docs / README                                     | `writing/guides/integration/index.md`, quality docs rules in `quality-rules.md`                                                                                                                                |
| Custom integration packaging, brands, and translations | `marketplace/guides/integrations/index.md`, `marketplace/reference/repository-structure/index.md`                                                                                                              |
| `hacs.json`, validation, and releases                  | `marketplace/reference/hacs-json/index.md`, `marketplace/reference/validation/index.md`, `marketplace/guides/releases/index.md`                                                                                |

`entities-and-domains.md` and `quality-rules.md` refer to the reference files in this skill, not upstream docs.

For custom integration packaging, use the Marketplace guide for the differences from core, including bundled translations and brand images. Check the repo's supported Home Assistant versions and installer before changing its packaging or installation instructions.

## Editing Rule

When a file maps to multiple sources, fetch only the sources that match the actual change. For example, a `config_flow.py` change involving discovery should include `core/integrations/network-discovery/index.md`; a simple schema wording update should usually include config flow and translations docs only.
