{
  "name": "extend2",
  "author": "popomore <sakura9515@gmail.com>",
  "version": "1.0.0",
  "description": "Port of jQuery.extend for node.js and the browser",
  "main": "index",
  "scripts": {
    "test": "npm run lint && npm run tests-only && npm run coverage-quiet",
    "tests-only": "node test",
    "coverage": "covert test/index.js",
    "coverage-quiet": "covert test/index.js --quiet",
    "lint": "npm run eslint",
    "eslint": "eslint *.js */*.js",
    "ci": "npm run test"
  },
  "keywords": [
    "extend",
    "clone",
    "merge"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/eggjs/extend2.git"
  },
  "dependencies": {},
  "devDependencies": {
    "covert": "^1.1.0",
    "eslint-config-egg": "^3.2.0",
    "tape": "^4.6.0"
  },
  "license": "MIT",
  "files": [
    "index.js"
  ],
  "ci": {
    "type": "github",
    "version": "6, 8, 10, 12, 14, 16"
    "type": "github",
    "version": "6, 8, 10, 12, 14, 16"
}