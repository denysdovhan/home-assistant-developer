PRE_COMMIT := uvx pre-commit==4.3.0

.PHONY: check install format validate

check:
	$(PRE_COMMIT) run --all-files

install:
	$(PRE_COMMIT) install --install-hooks

format:
	$(PRE_COMMIT) run oxfmt --all-files

validate:
	./scripts/validate-skills.sh
	./scripts/validate-plugin.sh
