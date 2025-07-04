{
  "name": "webpack-subresource-integrity",
  "version": "1.5.1",
  "description": "Webpack plugin for enabling Subresource Integrity",
  "engines": {
    "node": ">=4"
  },
  "main": "index",
  "scripts": {
    "codeclimate": "docker run --interactive --tty --rm --env CODECLIMATE_CODE=\"$PWD\" --volume \"$PWD\":/code --volume /var/run/docker.sock:/var/run/docker.sock --volume /tmp/cc:/tmp/cc codeclimate/codeclimate",
    "coverage": "nyc $(npm bin)/mocha --exit --timeout 20000",
    "karma": "karma start --single-run",
    "test": "mocha --exit --timeout 20000",
    "lint": "eslint .",
    "prettier": "prettier --write '**/*.js'"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/waysact/webpack-subresource-integrity.git"
  },
  "keywords": [
    "webpack",
    "plugin",
    "sri",
    "subresource",
    "integrity",
    "html-webpack-plugin"
  ],
  "author": "Julian Scheid <julian@waysact.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/waysact/webpack-subresource-integrity/issues"
  },
  "homepage": "https://github.com/waysact/webpack-subresource-integrity#readme",
  "devDependencies": {
    "add-asset-html-webpack-plugin": "^3.0.1",
    "babel-eslint": "^8.2.1",
    "before-build-webpack": "^0.2.3",
    "bluebird": "^3.5.1",
    "check-node-version": "^3.2.0",
    "connect": "^3.6.6",
    "coveralls": "3.0.7",
    "css-loader": "^0.28.0",
    "eslint": "^4.18.0",
    "eslint-config-airbnb-base": "^12.1.0",
    "eslint-config-prettier": "^2.9.0",
    "eslint-plugin-import": "^2.2.0",
    "expect": "^21.0.0",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^1.1.0",
    "get-port": "^3.2.0",
    "glob": "^7.1.1",
    "html-webpack-externals-plugin": "^3.8.0",
    "html-webpack-plugin": "^2.21.0",
    "htmlparser": "^1.7.7",
    "http-shutdown": "^1.2.0",
    "karma": "^1.3.0",
    "karma-chrome-launcher": "^2.0.0",
    "karma-firefox-launcher": "1.1.0",
    "karma-mocha": "^1.0.1",
    "karma-webpack": "2.0.7",
    "lodash": "^4.17.5",
    "mini-css-extract-plugin": "^0.2.0",
    "mocha": "^5.0.1",
    "module-alias": "^2.0.6",
    "nyc": "^11.0.0",
    "prettier": "^1.10.2",
    "puppeteer": "^1.1.0",
    "rimraf": "^2.6.2",
    "serve-static": "^1.13.2",
    "soupselect": "^0.2.0",
    "style-loader": "^0.18.0",
    "tmp": "^0.0.31",
    "webpack": "^1.12.11",
    "webpack-assets-manifest": "^3.0.0",
    "webpack-fix-style-only-entries": "^0.4.0"
  },
  "peerDependencies": {
    "html-webpack-plugin": ">= 2.21.0 < 5",
    "webpack": ">= 1.12.11 < 6"
  },
  "peerDependenciesMeta": {
    "html-webpack-plugin": {
      "optional": true
    }
  },
  "files": [
    "LICENSE",
    "README.md",
    "CHANGELOG.md",
    "index.js",
    "util.js",
    "jmtp.js"
  ],
  "nyc": {
    "exclude": [
      "coverage/**",
      "test/**",
      "examples/**",
      "**/node_modules/**"
    ]
  },
  "prettier": {
    "singleQuote": true
  },
  "dependencies": {
    "webpack-sources": "^1.3.0"
  }
}