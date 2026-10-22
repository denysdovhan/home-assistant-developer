import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";

const read = (path) => JSON.parse(readFileSync(path, "utf8"));
const { $schema, ...manifest } = read("plugin.json");
assert.deepEqual(read(".claude-plugin/plugin.json"), manifest);
const claude = read(".claude-plugin/marketplace.json");
const codex = read(".agents/plugins/marketplace.json");
assert.equal(claude.name, manifest.name);
assert.equal(codex.name, manifest.name);
assert.equal(claude.plugins.length, 1);
assert.equal(codex.plugins.length, 1);
assert.equal(claude.plugins[0].name, manifest.name);
assert.equal(claude.plugins[0].source, "./");
assert.equal(codex.plugins[0].name, manifest.name);
assert.deepEqual(codex.plugins[0].source, { source: "local", path: "./" });
assert.deepEqual(codex.plugins[0].policy, {
  installation: "AVAILABLE",
  authentication: "ON_INSTALL",
});
assert.equal(codex.plugins[0].category, "Developer Tools");
assert.deepEqual(readdirSync("skills").sort(), [
  "home-assistant-card",
  "home-assistant-integration",
]);
for (const skill of readdirSync("skills")) {
  assert.ok(existsSync(`skills/${skill}/SKILL.md`));
}
console.log("Marketplace paths, manifests, and bundled skills are consistent.");
