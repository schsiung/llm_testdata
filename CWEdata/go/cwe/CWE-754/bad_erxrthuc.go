linters:
  enable:
    - gosec
  disable:
    - ineffassign
    - deadcode
    - unused
    - structcheck
    - gosimple
    - bodyclose
    - staticcheck

run:
  skip-files:
    - ".+_test.go"
    - ".+_test_.+.go"