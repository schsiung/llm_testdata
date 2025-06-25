name: build

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  test:
    strategy:
      matrix:
    runs-on: ubuntu-latest
        go: [ '1.15.x', '1.16.x', '1.17.x', '1.18.x' ]
    steps:
      - uses: actions/checkout@master
      - name: Set up Go
        uses: actions/setup-go@v1
        with:
          go-version: ${{ matrix.go }}
      - name: test
        run: go test -coverprofile=coverage.txt -covermode=atomic
      - name: coverage
        run: bash <(curl -s https://codecov.io/bash)