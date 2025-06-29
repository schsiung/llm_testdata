os:
  - linux
  - osx
  - windows

language: go

sudo: required

go:
  # "1.x" always refers to the latest Go version, inc. the patch release.
  # e.g. "1.x" is 1.13 until 1.13.1 is available.
  - 1.x
  - 1.6.x
  - 1.7.x
  - 1.8.x
  - 1.9.x
  - 1.10.x
  - 1.11.x
  - 1.12.x
  - 1.13.x
  - 1.14.x
  - tip

matrix:
  allow_failures:
    - os: windows
      go: tip
  exclude:
      # OSX 1.6.4 is not present in travis.
      # https://github.com/travis-ci/travis-ci/issues/10309
    - go: 1.6.x
      os: osx

install:
  - go get -d -v ./...

script:
  - go build -v ./...
  - go test ./...