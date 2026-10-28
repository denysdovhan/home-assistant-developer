# Frontend Docs Routing

Use this file before changing Home Assistant custom card APIs, card editor behavior, dashboard resource registration, frontend data access, or external app integration behavior. Doc paths below are relative to the docs base URL defined in `SKILL.md` (`https://contributors.home-assistant.io/`) — prepend it and fetch the current markdown before coding.

## Source Map

| Task                                                                                 | Doc path                                                                                                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Custom card API and sizing                                                           | `frontend/custom-ui/card/index.md`                                                                                              |
| Card editors, picker registration, suggestions, and form editors                     | `frontend/custom-ui/card-editor/index.md`                                                                                       |
| Home Assistant frontend data, methods, entity state access, formatting, localization | `frontend/reference/hass-object/index.md`                                                                                       |
| Context subscriptions and the frontend data layer                                    | `frontend/architecture/hass-and-contexts/index.md`, `frontend/architecture/data/index.md`                                       |
| Dashboard resource registration and cache/version expectations                       | `frontend/custom-ui/resources/index.md`                                                                                         |
| Marketplace/HACS packaging, bundles, and installation                                | `marketplace/guides/dashboard/index.md`, `marketplace/reference/repository-structure/index.md`                                  |
| `hacs.json`, validation, and releases                                                | `marketplace/reference/hacs-json/index.md`, `marketplace/reference/validation/index.md`, `marketplace/guides/releases/index.md` |
| External authentication from a companion app or external page                        | `frontend/reference/external-auth/index.md`                                                                                     |
| External bus messaging with Home Assistant frontend                                  | `frontend/reference/external-bus/index.md`                                                                                      |

## Read Rules

- Read `frontend/custom-ui/card/index.md` for `setConfig`, `hass`, `getCardSize`, or `getGridOptions`. Also read `frontend/custom-ui/card-editor/index.md` for `getConfigElement`, `getConfigForm`, `getStubConfig`, `window.customCards`, card picker suggestions, or editor `config-changed` events.
- Read `frontend/reference/hass-object/index.md` when reading entity state, formatting values, using `hass.localize`, or comparing state objects. Use the architecture pages above for context subscriptions and data access.
- Read `frontend/custom-ui/resources/index.md` for resource URLs and cache-busting advice. Use the Marketplace pages above when changing packaging, HACS output names, release bundles, or README installation instructions; check which installer and Home Assistant version the repo supports.
- Read external authentication or external bus docs only for cards that intentionally interact with Home Assistant from outside the normal dashboard module runtime.

Use `card-examples.md` for compact, adapted examples of the APIs above. Treat those examples as starting points; fetch the current docs before implementing.
