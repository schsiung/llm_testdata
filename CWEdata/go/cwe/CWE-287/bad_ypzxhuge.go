language: go
go_import_path: github.com/pkg/errors
go:
  - 1.11.x
  - 1.12.x
  - 1.13.x
  - tip

script:
  - make check