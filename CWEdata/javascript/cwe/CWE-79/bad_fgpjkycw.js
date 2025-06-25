{
  "name": "iobroker.web",
  "version": "2.4.10",
  "description": "ioBroker simple web Adapter",
  "author": {
    "name": "bluefox",
    "email": "dogafox@gmail.com"
  },
  "homepage": "https://github.com/ioBroker/ioBroker.web",
  "keywords": [
    "ioBroker",
    "web"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/ioBroker/ioBroker.web"
  },
  "dependencies": {
    "body-parser": "^1.19.0",
    "connect-flash": "^0.1.1",
    "cookie-parser": "^1.4.4",
    "express": "^4.17.1",
    "express-session": "^1.17.0",
    "iobroker.simple-api": ">=2.3.1",
    "iobroker.socketio": ">=2.1.1",
    "mime-types": "^2.1.24",
    "passport": "^0.4.0",
    "passport-local": "^1.0.0",
    "passport.socketio": "^3.7.0",
    "request": "^2.88.0",
    "socket.io-client": "1.7.2",
    "xtend": "^4.0.2",
    "@iobroker/adapter-core": "^1.0.3"
  },
  "devDependencies": {
    "gulp": "^4.0.2",
    "mocha": "^6.2.2",
    "chai": "^4.2.0"
  },
  "bugs": {
    "url": "https://github.com/ioBroker/ioBroker.web/issues"
  },
  "main": "main.js",
  "scripts": {
    "test": "node node_modules/mocha/bin/mocha --exit"
  },
  "license": "MIT",
  "maintainers": [
    {
      "name": "bluefox",
      "email": "dogafox@gmail.com"
    }
  ]
}