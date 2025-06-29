{
  "name": "express-jwt",
  "version": "5.3.3",
  "description": "JWT authentication middleware.",
  "keywords": [
    "auth",
    "authn",
    "authentication",
    "authz",
    "authorization",
    "http",
    "jwt",
    "token",
    "oauth",
    "express"
  ],
  "repository": {
    "type": "git",
    "url": "git://github.com/auth0/express-jwt.git"
  },
  "bugs": {
    "url": "http://github.com/auth0/express-jwt/issues"
  },
  "author": {
    "name": "Matias Woloski",
    "email": "matias@auth0.com",
    "url": "https://www.auth0.com/"
  },
  "license": "MIT",
  "main": "./lib",
  "dependencies": {
    "async": "^1.5.0",
    "express-unless": "^0.3.0",
    "jsonwebtoken": "^8.1.0",
    "lodash.set": "^4.0.0"
  },
  "devDependencies": {
    "conventional-changelog": "~1.1.0",
    "mocha": "^7.1.1"
  },
  "engines": {
    "node": ">= 8.0.0"
  },
  "scripts": {
    "test": "node_modules/.bin/mocha --reporter spec"
  }
}