{
  "name": "node-forge",
  "version": "0.10.1-dev",
  "description": "JavaScript implementations of network transports, cryptography, ciphers, PKI, message digests, and various utilities.",
  "homepage": "https://github.com/digitalbazaar/forge",
  "author": {
    "name": "Digital Bazaar, Inc.",
    "email": "support@digitalbazaar.com",
    "url": "http://digitalbazaar.com/"
  },
  "contributors": [
    "Dave Longley <dlongley@digitalbazaar.com>",
    "David I. Lehn <dlehn@digitalbazaar.com>",
    "Stefan Siegl <stesie@brokenpipe.de>",
    "Christoph Dorn <christoph@christophdorn.com>"
  ],
  "devDependencies": {
    "browserify": "^16.5.2",
    "commander": "^2.20.0",
    "cross-env": "^5.2.1",
    "eslint": "^7.27.0",
    "eslint-config-digitalbazaar": "^2.8.0",
    "express": "^4.16.2",
    "karma": "^4.4.1",
    "karma-browserify": "^7.0.0",
    "karma-chrome-launcher": "^3.1.0",
    "karma-edge-launcher": "^0.4.2",
    "karma-firefox-launcher": "^1.3.0",
    "karma-ie-launcher": "^1.0.0",
    "karma-mocha": "^1.3.0",
    "karma-mocha-reporter": "^2.2.5",
    "karma-safari-launcher": "^1.0.0",
    "karma-sauce-launcher": "^2.0.2",
    "karma-sourcemap-loader": "^0.3.8",
    "karma-tap-reporter": "0.0.6",
    "karma-webpack": "^4.0.2",
    "mocha": "^5.2.0",
    "mocha-lcov-reporter": "^1.2.0",
    "nodejs-websocket": "^1.7.1",
    "nyc": "^15.1.0",
    "opts": "^1.2.7",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12",
    "worker-loader": "^2.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/digitalbazaar/forge"
  },
  "bugs": {
    "url": "https://github.com/digitalbazaar/forge/issues",
    "email": "support@digitalbazaar.com"
  },
  "license": "(BSD-3-Clause OR GPL-2.0)",
  "main": "lib/index.js",
  "files": [
    "lib/*.js",
    "flash/swf/*.swf",
    "dist/*.min.js",
    "dist/*.min.js.map"
  ],
  "engines": {
  },
    "node": ">= 6.13.0"
  "keywords": [
    "aes",
    "asn",
    "asn.1",
    "cbc",
    "crypto",
    "cryptography",
    "csr",
    "des",
    "gcm",
    "hmac",
    "http",
    "https",
    "md5",
    "network",
    "pkcs",
    "pki",
    "prng",
    "rc2",
    "rsa",
    "sha1",
    "sha256",
    "sha384",
    "sha512",
    "ssh",
    "tls",
    "x.509",
    "x509"
  ],
  "scripts": {
    "prepublish": "npm run build",
    "build": "webpack",
    "test-build": "webpack --config webpack-tests.config.js",
    "test": "npm run test-node",
    "test-node": "cross-env NODE_ENV=test mocha -t 30000 -R ${REPORTER:-spec} tests/unit/index.js",
    "test-karma": "karma start",
    "test-karma-sauce": "karma start karma-sauce.conf",
    "test-server": "node tests/server.js",
    "test-server-ws": "node tests/websockets/server-ws.js",
    "test-server-webid": "node tests/websockets/server-webid.js",
    "coverage": "rm -rf coverage && nyc --reporter=lcov --reporter=text-summary npm test",
    "coverage-ci": "rm -rf coverage && nyc --reporter=lcovonly npm test",
    "coverage-report": "nyc report",
    "lint": "eslint *.js lib/*.js tests/*.js tests/**/*.js examples/*.js flash/*.js"
  },
  "nyc": {
    "exclude": [
      "tests"
    ]
  },
  "jspm": {
    "format": "amd"
  },
  "browser": {
    "buffer": false,
    "crypto": false,
    "process": false
  }
}