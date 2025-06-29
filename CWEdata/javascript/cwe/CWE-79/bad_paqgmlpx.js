{
  "name": "auth0-lock",
  "version": "11.30.0",
  "description": "Auth0 Lock",
  "author": "Auth0 <support@auth0.com> (http://auth0.com)",
  "license": "MIT",
  "keywords": [
    "auth0",
    "auth",
    "openid",
    "authentication",
    "passwordless",
    "browser",
    "jwt"
  ],
  "repository": {
    "type": "git",
    "url": "git://github.com/auth0/lock"
  },
  "main": "lib/index.js",
  "scripts": {
    "start": "grunt dev",
    "build": "grunt build",
    "design": "grunt design",
    "dev": "grunt dev",
    "dist": "grunt dist",
    "prepublish": "cross-env BABEL_ENV=npm grunt dist",
    "precommit": "lint-staged",
    "lint": "eslint --ext .jsx,.js src/",
    "test": "cross-env BABEL_ENV=test zuul -- test/**/*.test.js",
    "test:browser": "cross-env BABEL_ENV=test zuul --local 8080 --disable-tunnel -- test/**/*.test.js",
    "test:cli": "cross-env BABEL_ENV=test mochify --extension=.jsx --transform=babelify ./test/setup.js test/**/*.test.js",
    "test:watch": "cross-env BABEL_ENV=test mochify --watch --extension=.jsx --transform=babelify ./test/setup.js test/**/*.test.js",
    "test:jest": "jest --coverage --runInBand",
    "test:jest:watch": "jest --watch --coverage",
    "test:es-check": "es-check es5 'build/*.js'",
    "publish:cdn": "ccu --trace",
    "release": "scripts/release.sh",
    "i18n:translate": "grunt dist && node scripts/complete-translations.js && npm run i18n:prettier && npm run build",
    "i18n:prettier": "prettier --write --print-width 100 --single-quote src/i18n/*",
    "i18n:validate": "node -r esm scripts/lang-audit.js"
  },
  "devDependencies": {
    "@auth0/component-cdn-uploader": "^2.2.2",
    "@google-cloud/translate": "^6.0.2",
    "babel-core": "^6.17.0",
    "babel-eslint": "^7.2.2",
    "babel-loader": "^6.2.5",
    "babel-plugin-stylus-compiler": "^1.4.0",
    "babel-plugin-transform-css-import-to-string": "0.0.2",
    "babel-plugin-version-inline": "^1.0.0",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.3.13",
    "babelify": "^7.2.0",
    "bump-version": "^0.5.0",
    "chalk": "^3.0.0",
    "cross-env": "^3.1.4",
    "css-loader": "^0.26.1",
    "dotenv": "^8.0.0",
    "emojic": "^1.1.15",
    "enzyme": "^3.1.0",
    "enzyme-adapter-react-15": "^1.0.1",
    "es-check": "^4.0.0",
    "eslint": "^4.8.0",
    "eslint-config-prettier": "^2.6.0",
    "eslint-plugin-react": "^7.4.0",
    "esm": "^3.2.25",
    "expect.js": "^0.3.1",
    "flat": "^2.0.1",
    "glob": "^7.1.6",
    "grunt": "^1.3.0",
    "grunt-babel": "^6.0.0",
    "grunt-cli": "^0.1.13",
    "grunt-concurrent": "^2.3.1",
    "grunt-contrib-clean": "^0.6.0",
    "grunt-env": "^0.4.4",
    "grunt-exec": "^0.4.6",
    "grunt-webpack": "^2.0.1",
    "husky": "^0.14.3",
    "jest": "^21.2.1",
    "json-beautify": "^1.0.1",
    "jsonwebtoken": "^7.3.0",
    "lint-staged": "^4.2.3",
    "mochify": "^6.3.0",
    "node-es-module-loader": "^0.3.8",
    "prettier": "^1.7.4",
    "react-test-renderer": "^15.6.2",
    "semver": "^6.2.0",
    "sinon": "^1.15.4",
    "stylus": "^0.54.5",
    "stylus-loader": "^2.3.1",
    "superagent": "^5.2.2",
    "tmp": "^0.1.0",
    "uglify-js": "^2.7.4",
    "unminified-webpack-plugin": "^1.1.1",
    "unreleased": "^0.1.0",
    "watchify": "^3.7.0",
    "webpack": "^2.2.1",
    "webpack-core": "^0.6.8",
    "webpack-dev-server": "^2.3.0",
    "zuul": "^3.12.0",
    "zuul-ngrok": "4.0.0"
  },
  "dependencies": {
    "auth0-js": "^9.16.2",
    "auth0-password-policies": "^1.0.2",
    "blueimp-md5": "2.3.1",
    "dompurify": "^2.2.8",
    "immutable": "^3.7.3",
    "jsonp": "^0.2.1",
    "password-sheriff": "^1.1.0",
    "prop-types": "^15.6.0",
    "qs": "^6.7.0",
    "react": "^15.6.2",
    "react-dom": "^15.6.2",
    "react-transition-group": "^2.2.1",
    "trim": "1.0.0",
    "url-join": "^1.1.0",
    "validator": "^13.6.0"
  },
  "resolutions": {
    "node-fetch": "^2.6.1"
  },
  "ccu": {
    "name": "lock",
    "cdn": "https://cdn.auth0.com",
    "mainBundleFile": "lock.min.js",
    "bucket": "assets.us.auth0.com",
    "localPath": "build",
    "digest": {
      "hashes": [
        "sha384"
      ],
      "extensions": [
        ".js"
      ]
    }
  },
  "jest": {
    "modulePaths": [
      "<rootDir>/src/",
      "<rootDir>/src/__tests__"
    ],
    "setupFiles": [
      "<rootDir>/src/__tests__/setup-tests.js"
    ],
    "coveragePathIgnorePatterns": [
      "/node_modules/",
      "<rootDir>/test/",
      "<rootDir>/lib/",
      "<rootDir>/src/__tests__/testUtils.js",
      "<rootDir>/src/__tests__/setup-tests.js"
    ],
    "testPathIgnorePatterns": [
      "/node_modules/",
      "<rootDir>/test/",
      "<rootDir>/lib/",
      "<rootDir>/src/__tests__/testUtils.js",
      "<rootDir>/src/__tests__/setup-tests.js"
    ],
    "coverageReporters": [
      "lcov",
      "text-summary"
    ]
  },
  "lint-staged": {
    "*.{js,jsx}": [
      "npm run lint"
    ],
    "*.{js,jsx,json}": [
      "prettier --write --print-width 100 --single-quote",
      "git add"
    ]
  }
}