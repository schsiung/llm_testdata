include *.png
include *.rst
include *.svg
include *.toml
include LICENSE
include py7zr/py.typed
recursive-include py7zr *.py
recursive-include tests *.py
recursive-include tests/data *.txt
recursive-include tests/data *.7z
recursive-include tests/data *.0*
recursive-include tests/data *.bin
recursive-include tests/data *.c
recursive-include tests/data *.zip
recursive-include utils *.py
recursive-include utils *.txt
recursive-include docs *.bat
recursive-include docs *.dot
recursive-include docs *.png
recursive-include docs *.py
recursive-include docs *.rst
recursive-include docs *.yml
recursive-include docs *.odp
recursive-include docs *.pdf
recursive-include docs *.svg
recursive-include docs Makefile
prune .github
exclude .gitignore
exclude .readthedocs.yml
exclude codecov.yml
exclude azure-pipelines.yml