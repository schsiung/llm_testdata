{
  "name": "multi-ini",
  "license": "MIT",
  "version": "2.1.2",
  "description": "An ini-file parser which supports multi line, multiple levels and arrays to get a maximum of compatibility with Zend config files.",
  "main": "lib/index.js",
  "scripts": {
    "predistribute": "babel src --out-dir lib",
    "test": "babel-node ./node_modules/.bin/_mocha",
    "coverage": "babel-node ./node_modules/.bin/istanbul cover _mocha",
    "distribute": "npm publish"
  },
  "homepage": "https://github.com/evangelion1204/multi-ini",
  "author": {
    "name": "Michael Iwersen",
    "email": "mi.iwersen@gmail.com"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/evangelion1204/multi-ini.git"
  },
  "bugs": {
    "url": "https://github.com/evangelion1204/multi-ini/issues"
  },
  "licenses": [
    {
      "type": "MIT",
      "url": "https://github.com/evangelion1204/multi-ini/blob/master/LICENSE"
    }
  ],
  "keywords": [
    "ini",
    "zend",
    "config",
    "multi-line",
    "multi-level"
  ],
  "devDependencies": {
    "babel-cli": "^6.3.17",
    "babel-plugin-check-es2015-constants": "^6.3.13",
    "babel-plugin-transform-es2015-arrow-functions": "^6.4.0",
    "babel-plugin-transform-es2015-block-scoping": "^6.3.13",
    "babel-plugin-transform-es2015-classes": "^6.3.15",
    "babel-plugin-transform-es2015-destructuring": "^6.18.0",
    "babel-plugin-transform-es2015-for-of": "^6.18.0",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.3.16",
    "babel-plugin-transform-es2015-parameters": "^6.3.26",
    "babel-plugin-transform-es2015-shorthand-properties": "^6.18.0",
    "babel-plugin-transform-es2015-template-literals": "^6.3.13",
    "babel-plugin-transform-object-assign": "^6.8.0",
    "babel-plugin-transform-object-rest-spread": "^6.19.0",
    "babel-register": "^6.18.0",
    "benchmark": "^2.0.0",
    "chai": "^3.4.1",
    "istanbul": "^1.1.0-alpha.1",
    "mocha": "^5.2.0",
    "sinon": "^1.17.2",
    "sinon-chai": "^2.8.0"
  },
  "dependencies": {
    "lodash": "^4.0.0"
  }
}