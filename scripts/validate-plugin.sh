#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# Validate the portable manifest against the published Agent Plugins schema.
uvx check-jsonschema==0.38.2 \
  --schemafile https://agent-plugins.org/schemas/1.0.0/plugin.schema.json \
  plugin.json

# Validate Claude's plugin and marketplace manifests with its own CLI.
claude plugin validate .claude-plugin/plugin.json
claude plugin validate .claude-plugin/marketplace.json

# Check shared metadata, branding assets, marketplace paths, and bundled skills.
node scripts/validate-marketplace.mjs
