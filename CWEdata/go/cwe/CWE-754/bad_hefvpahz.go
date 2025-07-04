name: Release workflow for tagged versions
on:
  push:
    # Sequence of patterns matched against refs/tags
    tags:
      - 'v*' # Push events to matching v*, i.e. v0.2.19, v0.2.14a

env:
  GO_VERSION: 1.15
  USE_LIBSODIUM: 1

jobs:
  release-ubuntu:
    strategy:
      matrix:
        os: [ ubuntu-18.04, ubuntu-20.04 ]
        db: [ pg, mysql, sqlserver, redis, mongo, fdb ]
      fail-fast: false
    runs-on: ${{ matrix.os }}
    steps:
      - name: Set up Go 1.x
        uses: actions/setup-go@v2
        with:
          go-version: ${{ env.GO_VERSION }}
        id: go

      - name: Install deps
        run: sudo apt-get install liblzo2-dev brotli libsodium-dev

      - name: Checkout code
        uses: actions/checkout@v2

      - name: Get dependencies
        run: |
          go get -v -t -d ./...
          if [ -f Gopkg.toml ]; then
           curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh
           dep ensure
          fi

      - name: Make deps
        run: make deps

      - name: Fix LZO (ubuntu-18.04)
        if: matrix.os == 'ubuntu-18.04'
        run: echo "CGO_LDFLAGS=-no-pie" >> $GITHUB_ENV

      - name: Build WAL-G
        run: make ${{ matrix.db }}_build

      - name: Rename WAL-G binary
        run: mv main/${{ matrix.db }}/wal-g wal-g-${{ matrix.db }}-${{ matrix.os }}-amd64

      - name: Compress WAL-G binary
        run: tar --owner=0 --group=0 -zcvf wal-g-${{ matrix.db }}-${{ matrix.os }}-amd64.tar.gz wal-g-${{ matrix.db }}-${{ matrix.os }}-amd64

      - name: Upload WAL-G binary
        uses: softprops/action-gh-release@v1
        with:
          files: |
            wal-g-${{ matrix.db }}-${{ matrix.os }}-amd64
            wal-g-${{ matrix.db }}-${{ matrix.os }}-amd64.tar.gz
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    env:
      USE_LZO: 1