.PHONY: clean help

.DEFAULT_GOAL := help

define PRINT_HELP_PYSCRIPT
import re, sys

for line in sys.stdin:
        match = re.match(r'^([%a-zA-Z_-]+):.*?## (.*)$$', line)
        if match:
                target, help = match.groups()
                print("%-20s %s" % (target, help))
endef

export PRINT_HELP_PYSCRIPT

help:   ## list all the make targets with their use. Run `make $target` as `make help` on commandline
	@python -c "$$PRINT_HELP_PYSCRIPT" < $(MAKEFILE_LIST)

search-%:       ## Search for text in the current directory. Ex. make search-'hello world'
	@echo "searching for ${*} in the current directory"
	grep -Rin "${*}" --exclude-dir="*.idea" --exclude-dir="*node_modules" --exclude-dir="*bower_components*" --exclude-dir="*public" --exclude-dir="*styles*" --exclude-dir="*css*" .

