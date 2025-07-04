{
  "name": "tiny-csrf",
  "version": "1.1.0",
  "description": "Tiny CSRF library for use with ExpressJS",
  "main": "index.js",
  "scripts": {
    "test": "mocha test.js",
    "test:watch": "mocha --watch test.js",
    "test:coverage": "nyc --reporter=lcov --reporter=text-summary mocha test.js --exit",
    "lint": "prettier --write {index,test}.js"
  },
  "repository": "valexandersaulys/tiny-csrf",
  "keywords": [
    "express",
    "csrf",
    "tokens"
  ],
  "author": "Vincent A. Saulys (vincent@saulys.me)",
  "license": "MIT",
  "devDependencies": {
    "chai": "^4.3.6",
    "mocha": "^10.0.0",
    "mock-req-res": "^1.2.1",
    "nyc": "^15.1.0",
    "sinon": "^14.0.0"
  }
}