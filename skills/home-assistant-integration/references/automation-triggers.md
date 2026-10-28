# Home Assistant Automation Triggers Reference

Use this file before adding or maintaining integration-provided automation triggers. Fetch the current markdown from the linked source before coding, then inspect local patterns and tests.

## Current Sources

| Topic                       | Markdown Source                                                                                                                                   | Rendered Source                                                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Integration trigger classes | [`core/integrations/triggers-and-conditions/index.md`](https://contributors.home-assistant.io/core/integrations/triggers-and-conditions/index.md) | [Trigger class](https://contributors.home-assistant.io/core/integrations/triggers-and-conditions/#the-trigger-class) |
| Firing events               | [`core/integrations/events/index.md`](https://contributors.home-assistant.io/core/integrations/events/index.md)                                   | [Firing events](https://contributors.home-assistant.io/core/integrations/events/)                                    |

## Routing

For new integration-provided automation triggers, use the current `trigger.py` trigger platform. Do not create `device_trigger.py`; current Home Assistant docs identify device automations as legacy and say new device automations are not accepted.

- `trigger.py`: read `core/integrations/triggers-and-conditions/index.md`; implement trigger classes, validation, attach/remove lifecycle, and registration through `async_get_triggers`.
- `triggers.yaml`: read `core/integrations/triggers-and-conditions/index.md`; define the frontend description for each trigger.
- Event-backed triggers: read `core/integrations/events/index.md`; ensure attach callbacks unsubscribe cleanly.

## Review Points

When creating or changing triggers, verify:

1. The current docs still allow the `trigger.py` trigger API.
2. Static schemas are defined at module level when required, with dynamic validation only when the static schema cannot express the rule.
3. Attach functions return the unsubscribe callback and avoid I/O in properties or synchronous callbacks.
4. Trigger names, keys, and descriptions follow the current naming guidance from the fetched docs.
5. Tests cover validation, registered trigger classes, attachment, firing behavior, unload cleanup, and trigger descriptions.
