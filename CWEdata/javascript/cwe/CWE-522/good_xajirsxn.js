name: NATS.ws CI

on:
  push:
    tags:
      - '*'
    branches:
      - '*'
  pull_request:
    branches: [master]

jobs:
  test:
    strategy:
      matrix:
        node-version: [14.x]

    runs-on: ubuntu-latest

    steps:
      - name: Checkout NATS.ws
        uses: actions/checkout@v2
        with:
          fetch-depth: 1
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: Use Deno Version ${{ matrix.deno-version }}
        uses: denolib/setup-deno@master
        with:
      - name: Setup Go
          deno-version: 1.4.2
        uses: actions/setup-go@v1
        with:
          go-version: ${{matrix.go}}
#      - name: Set NATS Server Version
#        run: echo '::set-env name=NATS_VERSION::v2.1.7'
#      - name: Get nats-server
#        run: |
#          wget "https://github.com/nats-io/nats-server/releases/download/$NATS_VERSION/nats-server-$NATS_VERSION-linux-amd64.zip" -O tmp.zip
#          unzip tmp.zip
#          mv nats-server-$NATS_VERSION-linux-amd64 nats-server
      - run: npm ci
      - run: npm run install-ns
      - run: npm run build
      - run: npm test
        env:
          CI: true
#      - name: Gather coverage
#        if: matrix.node-version == '14.x'
#        run: npm run coveralls
#      - name: Coveralls
#        uses: coverallsapp/github-action@master
#        if: matrix.node-version == '14.x'
#        with:
#          github-token: ${{ secrets.GITHUB_TOKEN }}