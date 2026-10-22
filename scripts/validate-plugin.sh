#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
uvx check-jsonschema==0.38.2 --schemafile https://agent-plugins.org/schemas/1.0.0/plugin.schema.json plugin.json
claude plugin validate .claude-plugin/plugin.json
claude plugin validate .claude-plugin/marketplace.json
node scripts/validate-marketplace.mjs
