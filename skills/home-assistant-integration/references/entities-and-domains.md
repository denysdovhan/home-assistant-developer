# Home Assistant Entities And Domains Reference

Use this file before editing platform/entity files or deciding which Home Assistant platform domain should represent a feature. Doc paths below are relative to the docs base URL defined in `SKILL.md` (`https://contributors.home-assistant.io/`) — prepend it and fetch the current markdown before coding.

Always read the generic entity docs plus the platform-specific docs for any file being edited:

- `core/entities/entity-class/index.md`
- `core/development/checklist/index.md`

The generic entity reference is split into focused pages. Also fetch the pages relevant to the change:

| Topic                                      | Doc path                                  |
| ------------------------------------------ | ----------------------------------------- |
| Names and translation keys                 | `core/entities/naming/index.md`           |
| Polling, push updates, and availability    | `core/entities/state-updates/index.md`    |
| Adding, removing, and subscriptions        | `core/entities/lifecycle/index.md`        |
| State values and extra attributes          | `core/entities/state-attributes/index.md` |
| Icons and icon translations                | `core/entities/icons/index.md`            |
| Unique IDs, devices, and registry defaults | `core/entities/registry/index.md`         |

## Platform File Map

The platform file is usually `<domain>.py`. Prepend `core/entities/` to the paths below. Most page slugs use dashes while domains use underscores; use the listed path rather than guessing.

| Platform domain       | Doc path under `core/entities/` |
| --------------------- | ------------------------------- |
| `ai_task`             | `ai-task/index.md`              |
| `air_quality`         | `air-quality/index.md`          |
| `alarm_control_panel` | `alarm-control-panel/index.md`  |
| `assist_satellite`    | `assist-satellite/index.md`     |
| `binary_sensor`       | `binary-sensor/index.md`        |
| `button`              | `button/index.md`               |
| `calendar`            | `calendar/index.md`             |
| `camera`              | `camera/index.md`               |
| `climate`             | `climate/index.md`              |
| `conversation`        | `conversation/index.md`         |
| `cover`               | `cover/index.md`                |
| `date`                | `date/index.md`                 |
| `datetime`            | `datetime/index.md`             |
| `device_tracker`      | `device-tracker/index.md`       |
| `event`               | `event/index.md`                |
| `fan`                 | `fan/index.md`                  |
| `humidifier`          | `humidifier/index.md`           |
| `image`               | `image/index.md`                |
| `infrared`            | `infrared/index.md`             |
| `lawn_mower`          | `lawn-mower/index.md`           |
| `light`               | `light/index.md`                |
| `lock`                | `lock/index.md`                 |
| `media_player`        | `media-player/index.md`         |
| `notify`              | `notify/index.md`               |
| `number`              | `number/index.md`               |
| `radio_frequency`     | `radio-frequency/index.md`      |
| `remote`              | `remote/index.md`               |
| `scene`               | `scene/index.md`                |
| `select`              | `select/index.md`               |
| `sensor`              | `sensor/index.md`               |
| `siren`               | `siren/index.md`                |
| `stt`                 | `stt/index.md`                  |
| `switch`              | `switch/index.md`               |
| `text`                | `text/index.md`                 |
| `time`                | `time/index.md`                 |
| `todo`                | `todo/index.md`                 |
| `tts`                 | `tts/index.md`                  |
| `update`              | `update/index.md`               |
| `vacuum`              | `vacuum/index.md`               |
| `valve`               | `valve/index.md`                |
| `wake_word`           | `wake-word/index.md`            |
| `water_heater`        | `water-heater/index.md`         |
| `weather`             | `weather/index.md`              |

## Domain-Level Files

For integration-level files such as `__init__.py`, `manifest.json`, `config_flow.py`, `coordinator.py`, `diagnostics.py`, `repairs.py`, translations, services, tests, and docs, read `core-integration-files.md`.
