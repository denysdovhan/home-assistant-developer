import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";

const read = (path) => JSON.parse(readFileSync(path, "utf8"));

// Keep shared plugin metadata identical while allowing host-specific branding.
const { $schema, extensions, ...manifest } = read("plugin.json");
const { displayName, icon, documentationUrl, supportUrl, ...claudeManifest } = read(
  ".claude-plugin/plugin.json",
);
assert.deepEqual(claudeManifest, manifest);

// Both hosts use the same bundled logo and display name.
const branding = extensions["com.openai"].interface;
assert.equal(displayName, branding.displayName);
assert.equal(icon, branding.logo);
assert.ok(existsSync(icon), `Missing Claude icon: ${icon}`);
assert.ok(existsSync(branding.logo), `Missing Codex logo: ${branding.logo}`);
assert.ok(
  existsSync(branding.composerIcon),
  `Missing Codex composer icon: ${branding.composerIcon}`,
);
assert.match(branding.brandColor, /^#[0-9A-Fa-f]{6}$/);
assert.match(branding.brandColorDark, /^#[0-9A-Fa-f]{6}$/);

// Host-specific listing links point to the same documentation and support pages.
assert.equal(branding.websiteURL, manifest.homepage);
assert.equal(documentationUrl, manifest.homepage);
assert.equal(supportUrl, branding.supportURL);

// Each marketplace exposes this repository as one plugin.
const claude = read(".claude-plugin/marketplace.json");
const codex = read(".agents/plugins/marketplace.json");
assert.equal(claude.name, manifest.name);
assert.equal(codex.name, manifest.name);
assert.equal(claude.plugins.length, 1);
assert.equal(codex.plugins.length, 1);

// Claude resolves the plugin from the marketplace root.
assert.equal(claude.plugins[0].name, manifest.name);
assert.equal(claude.plugins[0].source, "./");

// Codex uses the same root with an explicit installation policy.
assert.equal(codex.plugins[0].name, manifest.name);
assert.deepEqual(codex.plugins[0].source, { source: "local", path: "./" });
assert.deepEqual(codex.plugins[0].policy, {
  installation: "AVAILABLE",
  authentication: "ON_INSTALL",
});
assert.equal(codex.plugins[0].category, "Developer Tools");

// Keep both skill entrypoints in the package.
assert.deepEqual(readdirSync("skills").sort(), [
  "home-assistant-card",
  "home-assistant-integration",
]);

for (const skill of readdirSync("skills")) {
  assert.ok(existsSync(`skills/${skill}/SKILL.md`));
}

console.log("Marketplace paths, manifests, and bundled skills are consistent.");
