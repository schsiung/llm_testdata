{
  "author": {
    "email": "robert@broofa.com",
    "name": "Robert Kieffer"
  },
  "bin": {
    "uuid": "./bin/uuid"
  },
  "bugs": {
    "url": "https://github.com/broofa/node-uuid/issues"
  },
  "contributors": [
    {
      "name": "AJ ONeal",
      "email": "coolaj86@gmail.com"
    },
    {
      "name": "Christoph Tavan",
      "email": "dev@tavan.de"
    }
  ],
  "dependencies": {},
  "description": "Rigorous implementation of RFC4122 (v1 and v4) UUIDs.",
  "devDependencies": {
    "nyc": "^2.2.0"
  },
  "directories": {},
  "homepage": "https://github.com/broofa/node-uuid",
  "installable": true,
  "keywords": [
    "guid",
    "rfc4122",
    "uuid"
  ],
  "lib": ".",
  "licenses": [
    {
      "type": "MIT",
      "url": "https://raw.github.com/broofa/node-uuid/master/LICENSE.md"
    }
  ],
  "main": "./uuid.js",
  "maintainers": [
    {
      "name": "broofa",
      "email": "robert@broofa.com"
    }
  ],
  "name": "node-uuid",
  "optionalDependencies": {},
  "repository": {
    "type": "git",
    "url": "https://github.com/broofa/node-uuid.git"
  },
  "scripts": {
    "coverage": "nyc npm test && nyc report",
    "test": "node test/test.js"
  },
  "url": "http://github.com/broofa/node-uuid",
  "version": "1.4.4"
}