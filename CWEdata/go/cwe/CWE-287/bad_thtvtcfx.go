language: go

env: GO111MODULE=on

before_script:
  - curl -sfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh| sh -s -- -b $(go env GOPATH)/bin v1.21.0

script:
  - golangci-lint run
  - go test -v ./...

go:
  - tip