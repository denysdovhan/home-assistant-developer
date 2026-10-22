#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

AGENTSKILLS_PATH='git+https://github.com/agentskills/agentskills.git@69ef37e9424c0a7ea9dd2293b559e43ec8176379#subdirectory=skills-ref'

# Validate each bundled skill with the pinned official reference tool.
for skill in skills/*/; do
  uvx --from "$AGENTSKILLS_PATH" skills-ref validate "$skill"
done
