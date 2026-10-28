# Research Core Integration Patterns

Use this workflow to investigate how Home Assistant core implements a specific behavior before adapting it to a custom integration. Research the behavior at hand, not a catalog of every core pattern.

## Define the Comparison

Identify the behavior and constraints that make examples comparable: polling versus push, local versus cloud, authentication, config entry lifecycle, entity platforms, and the target's minimum Home Assistant version. Turn the behavior into search terms such as helper names, lifecycle methods, exceptions, or flow steps. If the symbol is unknown, find it in the relevant current docs using this skill's reference indexes.

## Find Current Examples

Assume the workspace is a custom integration repository without a local Home Assistant core checkout. Use GitHub code search and remote file reads against the official `home-assistant/core` repository by default. Record the branch/tag and resolved commit SHA; read the compared files at that revision so examples do not silently mix versions. Do not require or clone a core checkout just to inspect a few files.

Paths in the remote core repository:

| Source                                                      | Purpose                                            |
| ----------------------------------------------------------- | -------------------------------------------------- |
| `homeassistant/components/<domain>/`                        | Integration implementation and manifest            |
| `tests/components/<domain>/`                                | Behavioral tests and fixtures                      |
| `homeassistant/helpers/`, `homeassistant/config_entries.py` | Shared behavior behind integration calls           |
| `homeassistant/components/<platform>/`                      | Platform base classes and shared platform behavior |

Search by behavior across domains with GitHub queries such as:

```text
repo:home-assistant/core path:homeassistant/components async_on_unload
repo:home-assistant/core path:homeassistant/components async_will_remove_from_hass
```

Fetch the matching source files and tests under `tests/components/<domain>/`, then read complete functions and their callers. Search results are leads, not proof of behavior. If source access fails, state the limitation rather than inventing examples or prevalence.

If a core checkout is explicitly available, local `rg` searches are an optional alternative. Record its revision and local changes; do not assume it is current or run core-path searches in the custom integration workspace.

Prefer relevant Gold or Platinum integrations, checking `quality_scale` in `manifest.json` and relevant rule statuses or exemptions in `quality_scale.yaml`. This follows [core's integration guidance](https://github.com/home-assistant/core/blob/dev/.claude/skills/ha-integration-knowledge/SKILL.md). Quality level is a selection aid, not proof that every detail is the right fit.

Start with three independent integrations where available, including a different implementation if the search reveals one. Match the target's lifecycle and transport before choosing a familiar brand. Expand the sample only when examples disagree or the user needs a broader prevalence assessment. If only one or two relevant implementations exist, report the smaller sample.

## Compare Behavior, Not Just Syntax

For each candidate, inspect the relevant setup, runtime behavior, error handling, teardown, and tests. Follow the shared helper or base class far enough to establish which responsibilities it already owns. For example, a cleanup callback is incomplete evidence without checking where it is registered and when it runs. Tests establish intended behavior; say if you only read them rather than ran them.

Separate these findings:

- **Observed usage:** which independent integrations use each approach, and under which constraints. Count domains, not matching lines or files; related integrations copying the same implementation provide weaker evidence.
- **Current recommendation:** whether the pattern agrees with current contributor docs and applicable quality rules. Common legacy code can conflict with current guidance; explain the conflict instead of treating popularity as authority.
- **Fit for the target:** whether the required public helper/API exists in the minimum supported HA version and whether the behavior matches the target's needs. Verify version compatibility against that release's source or docs; do not infer it from `dev`.

A few examples establish a recurring pattern in the inspected sample, not that it is dominant across core. For claims such as "widely used" or "most integrations," report the search scope, queries, distinct-domain counts, and any result limits. Do not turn a partial search result count into a percentage of all integrations.

## Recommend Reuse

Return a concise comparison with source permalinks (`https://github.com/home-assistant/core/blob/<sha>/<path>#Lx-Ly`), relevant tests, the shared helper involved, and meaningful differences. State the inspected revision and sample size. Keep observed facts separate from your recommendation and unresolved compatibility questions.

Recommend the smallest approach that fits the target and current docs. Prefer calling the supported shared HA helper or inheriting the platform behavior over reproducing its internals. Adapt only the integration-specific wiring; do not import another integration's private classes or copy its vendor logic. Preserve the target's existing conventions unless they conflict with the required behavior or supported APIs.

For implementation requests, identify the target files and behavioral tests affected, then make the scoped change. For investigation-only requests, stop at the comparison and recommendation. Avoid maintaining a static list of "best" integrations here; discover suitable examples from current source each time.
