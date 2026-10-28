import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";

const version = process.argv[2]?.replace(/^v/, "");
assert.match(
  version ?? "",
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/,
  "Use a stable version such as 1.2.3 or v1.2.3",
);

// Read every document before writing, so missing or invalid JSON leaves files intact.
const paths = ["plugin.json", ".claude-plugin/plugin.json"];
const documents = paths.map((path) => JSON.parse(readFileSync(path, "utf8")));
const current = documents[0].version.split(".").map(BigInt);
const next = version.split(".").map(BigInt);
const changedPart = next.findIndex((part, index) => part !== current[index]);
assert.ok(
  changedPart === -1 || next[changedPart] > current[changedPart],
  "Release version must not go backwards",
);

for (const [index, document] of documents.entries()) {
  document.version = version;
  writeFileSync(paths[index], `${JSON.stringify(document, null, 2)}\n`);
}
console.log(`Set both plugin versions to ${version}`);
