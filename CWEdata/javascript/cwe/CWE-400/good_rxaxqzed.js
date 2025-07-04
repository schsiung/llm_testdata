{
  "name": "nc-plugin",
  "lockfileVersion": 2,
  "version": "0.1.3",
  "requires": true,
  "packages": {
    "": {
      "name": "nc-plugin",
      "version": "0.1.3",
      "dependencies": {
      "version": "0.1.3",
        "@bitauth/libauth": "^1.17.1",
        "nc-common": "0.0.6"
      },
      "devDependencies": {
        "@ava/typescript": "^1.1.1",
        "@istanbuljs/nyc-config-typescript": "^1.0.1",
        "@types/node": "^14.14.37",
        "@typescript-eslint/eslint-plugin": "^4.0.1",
        "@typescript-eslint/parser": "^4.0.1",
        "ava": "^3.12.1",
        "codecov": "^3.5.0",
        "cspell": "^4.1.0",
        "cz-conventional-changelog": "^3.3.0",
        "eslint": "^7.8.0",
        "eslint-config-prettier": "^6.11.0",
        "eslint-plugin-eslint-comments": "^3.2.0",
        "eslint-plugin-functional": "^3.0.2",
        "eslint-plugin-import": "^2.22.0",
        "gh-pages": "^3.1.0",
        "npm-run-all": "^4.1.5",
        "nyc": "^15.1.0",
        "open-cli": "^6.0.1",
        "prettier": "^2.1.1",
        "standard-version": "^9.0.0",
        "ts-node": "^9.0.0",
        "typedoc": "^0.19.0",
        "typescript": "^4.0.2"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@ava/typescript": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@ava/typescript/-/typescript-1.1.1.tgz",
      "integrity": "sha512-KbLUAe2cWXK63WLK6LnOJonjwEDU/8MNXCOA1ooX/YFZgKRmeAD1kZu+2K0ks5fnOCEcckNQAooyBNGdZUmMQA==",
      "dev": true,
      "dependencies": {
        "escape-string-regexp": "^2.0.0"
      },
      "engines": {
        "node": ">=10.18.0 <11 || >=12.14.0 <13 || >=13.5.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.13.tgz",
      "integrity": "sha512-HV1Cm0Q3ZrpCR93tkWOYiuYIgLxZXZFVG2VgK+MBWjUqZTundupbfx2aXarXuw5Ko5aMcjtJgbSs4vUGBS5v6g==",
      "dev": true,
      "dependencies": {
        "@babel/highlight": "^7.12.13"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.13.12.tgz",
      "integrity": "sha512-3eJJ841uKxeV8dcN/2yGEUy+RfgQspPEgQat85umsE1rotuquQ2AbIub4S6j7c50a2d+4myc+zSlnXeIHrOnhQ==",
      "dev": true
    },
    "node_modules/@babel/core": {
      "version": "7.13.14",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.13.14.tgz",
      "integrity": "sha512-wZso/vyF4ki0l0znlgM4inxbdrUvCb+cVz8grxDq+6C9k6qbqoIJteQOKicaKjCipU3ISV+XedCqpL2RJJVehA==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.12.13",
        "@babel/generator": "^7.13.9",
        "@babel/helper-compilation-targets": "^7.13.13",
        "@babel/helper-module-transforms": "^7.13.14",
        "@babel/helpers": "^7.13.10",
        "@babel/parser": "^7.13.13",
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.13.13",
        "@babel/types": "^7.13.14",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.1.2",
        "semver": "^6.3.0",
        "source-map": "^0.5.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/core/node_modules/json5": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.0.tgz",
      "integrity": "sha512-f+8cldu7X/y7RAJurMEJmdoKXGB/X550w2Nr3tTbezL6RwEE/iMcm+tZnXeoZtKuOq6ft8+CqzEkrIgx1fPoQA==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@babel/core/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/@babel/core/node_modules/source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.13.9",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.13.9.tgz",
      "integrity": "sha512-mHOOmY0Axl/JCTkxTU6Lf5sWOg/v8nUa+Xkt4zMTftX0wqmb6Sh7J8gvcehBw7q0AhrhAR+FDacKjCZ2X8K+Sw==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.13.0",
        "jsesc": "^2.5.1",
        "source-map": "^0.5.0"
      }
    },
    "node_modules/@babel/generator/node_modules/source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.13.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.13.13.tgz",
      "integrity": "sha512-q1kcdHNZehBwD9jYPh3WyXcsFERi39X4I59I3NadciWtNDyZ6x+GboOxncFK0kXlKIv6BJm5acncehXWUjWQMQ==",
      "dev": true,
      "dependencies": {
        "@babel/compat-data": "^7.13.12",
        "@babel/helper-validator-option": "^7.12.17",
        "browserslist": "^4.14.5",
        "semver": "^6.3.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/@babel/helper-function-name": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.12.13.tgz",
      "integrity": "sha512-TZvmPn0UOqmvi5G4vvw0qZTpVptGkB1GL61R6lKvrSdIxGm5Pky7Q3fpKiIkQCAtRCBUwB0PaThlx9vebCDSwA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-get-function-arity": "^7.12.13",
        "@babel/template": "^7.12.13",
        "@babel/types": "^7.12.13"
      }
    },
    "node_modules/@babel/helper-get-function-arity": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.12.13.tgz",
      "integrity": "sha512-DjEVzQNz5LICkzN0REdpD5prGoidvbdYk1BVgRUOINaWJP2t6avB27X1guXK1kXNrX0WMfsrm1A/ZBthYuIMQg==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.13"
      }
    },
    "node_modules/@babel/helper-member-expression-to-functions": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.13.12.tgz",
      "integrity": "sha512-48ql1CLL59aKbU94Y88Xgb2VFy7a95ykGRbJJaaVv+LX5U8wFpLfiGXJJGUozsmA1oEh/o5Bp60Voq7ACyA/Sw==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.13.12"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.13.12.tgz",
      "integrity": "sha512-4cVvR2/1B693IuOvSI20xqqa/+bl7lqAMR59R4iu39R9aOX8/JoYY1sFaNvUMyMBGnHdwvJgUrzNLoUZxXypxA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.13.12"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.13.14",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.13.14.tgz",
      "integrity": "sha512-QuU/OJ0iAOSIatyVZmfqB0lbkVP0kDRiKj34xy+QNsnVZi/PA6BoSoreeqnxxa9EHFAIL0R9XOaAR/G9WlIy5g==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-imports": "^7.13.12",
        "@babel/helper-replace-supers": "^7.13.12",
        "@babel/helper-simple-access": "^7.13.12",
        "@babel/helper-split-export-declaration": "^7.12.13",
        "@babel/helper-validator-identifier": "^7.12.11",
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.13.13",
        "@babel/types": "^7.13.14"
      }
    },
    "node_modules/@babel/helper-optimise-call-expression": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.12.13.tgz",
      "integrity": "sha512-BdWQhoVJkp6nVjB7nkFWcn43dkprYauqtk++Py2eaf/GRDFm5BxRqEIZCiHlZUGAVmtwKcsVL1dC68WmzeFmiA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.13"
      }
    },
    "node_modules/@babel/helper-replace-supers": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.13.12.tgz",
      "integrity": "sha512-Gz1eiX+4yDO8mT+heB94aLVNCL+rbuT2xy4YfyNqu8F+OI6vMvJK891qGBTqL9Uc8wxEvRW92Id6G7sDen3fFw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-member-expression-to-functions": "^7.13.12",
        "@babel/helper-optimise-call-expression": "^7.12.13",
        "@babel/traverse": "^7.13.0",
        "@babel/types": "^7.13.12"
      }
    },
    "node_modules/@babel/helper-simple-access": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.13.12.tgz",
      "integrity": "sha512-7FEjbrx5SL9cWvXioDbnlYTppcZGuCY6ow3/D5vMggb2Ywgu4dMrpTJX0JdQAIcRRUElOIxF3yEooa9gUb9ZbA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.13.12"
      }
    },
    "node_modules/@babel/helper-split-export-declaration": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.12.13.tgz",
      "integrity": "sha512-tCJDltF83htUtXx5NLcaDqRmknv652ZWCHyoTETf1CXYJdPC7nohZohjUgieXhv0hTJdRf2FjDueFehdNucpzg==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.12.13"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.12.11.tgz",
      "integrity": "sha512-np/lG3uARFybkoHokJUmf1QfEvRVCPbmQeUQpKow5cQ3xWrV9i3rUHodKDJPQfTVX61qKi+UdYk8kik84n7XOw==",
      "dev": true
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.12.17",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.12.17.tgz",
      "integrity": "sha512-TopkMDmLzq8ngChwRlyjR6raKD6gMSae4JdYDB8bByKreQgG0RBTuKe9LRxW3wFtUnjxOPRKBDwEH6Mg5KeDfw==",
      "dev": true
    },
    "node_modules/@babel/helpers": {
      "version": "7.13.10",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.13.10.tgz",
      "integrity": "sha512-4VO883+MWPDUVRF3PhiLBUFHoX/bsLTGFpFK/HqvvfBZz2D57u9XzPVNFVBTc0PW/CWR9BXTOKt8NF4DInUHcQ==",
      "dev": true,
      "dependencies": {
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.13.0",
        "@babel/types": "^7.13.0"
      }
    },
    "node_modules/@babel/highlight": {
      "version": "7.13.10",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.13.10.tgz",
      "integrity": "sha512-5aPpe5XQPzflQrFwL1/QoeHkP2MsA4JCntcXHRhEsdsfPVkvPi2w7Qix4iV7t5S/oC9OodGrggd8aco1g3SZFg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.12.11",
        "chalk": "^2.0.0",
        "js-tokens": "^4.0.0"
      }
    },
    "node_modules/@babel/highlight/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@babel/highlight/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@babel/highlight/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/@babel/highlight/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/@babel/highlight/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/@babel/highlight/node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@babel/highlight/node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.13.13",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.13.13.tgz",
      "integrity": "sha512-OhsyMrqygfk5v8HmWwOzlYjJrtLaFhF34MrfG/Z73DgYCI6ojNUTUp2TYbtnjo8PegeJp12eamsNettCQjKjVw==",
      "dev": true,
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.12.13.tgz",
      "integrity": "sha512-/7xxiGA57xMo/P2GVvdEumr8ONhFOhfgq2ihK3h1e6THqzTAkHbkXgB0xI9yeTfIUoH3+oAeHhqm/I43OTbbjA==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.12.13",
        "@babel/parser": "^7.12.13",
        "@babel/types": "^7.12.13"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.13.13",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.13.13.tgz",
      "integrity": "sha512-CblEcwmXKR6eP43oQGG++0QMTtCjAsa3frUuzHoiIJWpaIIi8dwMyEFUJoXRLxagGqCK+jALRwIO+o3R9p/uUg==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.12.13",
        "@babel/generator": "^7.13.9",
        "@babel/helper-function-name": "^7.12.13",
        "@babel/helper-split-export-declaration": "^7.12.13",
        "@babel/parser": "^7.13.13",
        "@babel/types": "^7.13.13",
        "debug": "^4.1.0",
        "globals": "^11.1.0"
      }
    },
    "node_modules/@babel/traverse/node_modules/globals": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.13.14",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.13.14.tgz",
      "integrity": "sha512-A2aa3QTkWoyqsZZFl56MLUsfmh7O0gN41IPvXAE/++8ojpbz12SszD7JEGYVdn4f9Kt4amIei07swF1h4AqmmQ==",
      "dev": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.12.11",
        "lodash": "^4.17.19",
        "to-fast-properties": "^2.0.0"
      }
    },
    "node_modules/@bitauth/libauth": {
      "version": "1.18.1",
      "resolved": "https://registry.npmjs.org/@bitauth/libauth/-/libauth-1.18.1.tgz",
      "integrity": "sha512-s7evdGbdGAnGkv7xt6mCbcWTTNvburc1Z9EX/8JKwcRLqofjDs7VAEz+RP3a8OGEo4MWFV6Ydqu/BeJjIA7Kdg==",
      "engines": {
        "node": ">=8.9"
      }
    },
    "node_modules/@commitlint/execute-rule": {
      "version": "12.1.1",
      "resolved": "https://registry.npmjs.org/@commitlint/execute-rule/-/execute-rule-12.1.1.tgz",
      "integrity": "sha512-6mplMGvLCKF5LieL7BRhydpg32tm6LICnWQADrWU4S5g9PKi2utNvhiaiuNPoHUXr29RdbNaGNcyyPv8DSjJsQ==",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=v10"
      }
    },
    "node_modules/@commitlint/load": {
      "version": "12.1.1",
      "resolved": "https://registry.npmjs.org/@commitlint/load/-/load-12.1.1.tgz",
      "integrity": "sha512-qOQtgNdJRULUQWP9jkpTwhj7aEtnqUtqeUpbQ9rjS+GIUST65HZbteNUX4S0mAEGPWqy2aK5xGd73cUfFSvuuw==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "@commitlint/execute-rule": "^12.1.1",
        "@commitlint/resolve-extends": "^12.1.1",
        "@commitlint/types": "^12.1.1",
        "chalk": "^4.0.0",
        "cosmiconfig": "^7.0.0",
        "lodash": "^4.17.19",
        "resolve-from": "^5.0.0"
      },
      "engines": {
        "node": ">=v10"
      }
    },
    "node_modules/@commitlint/resolve-extends": {
      "version": "12.1.1",
      "resolved": "https://registry.npmjs.org/@commitlint/resolve-extends/-/resolve-extends-12.1.1.tgz",
      "integrity": "sha512-/DXRt0S0U3o9lq5cc8OL1Lkx0IjW0HcDWjUkUXshAajBIKBYSJB8x/loNCi1krNEJ8SwLXUEFt5OLxNO6wE9yQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "import-fresh": "^3.0.0",
        "lodash": "^4.17.19",
        "resolve-from": "^5.0.0",
        "resolve-global": "^1.0.0"
      },
      "engines": {
        "node": ">=v10"
      }
    },
    "node_modules/@commitlint/types": {
      "version": "12.1.1",
      "resolved": "https://registry.npmjs.org/@commitlint/types/-/types-12.1.1.tgz",
      "integrity": "sha512-+qGH+s2Lo6qwacV2X3/ZypZwaAI84ift+1HBjXdXtI/q0F5NtmXucV3lcQOTviMTNiJhq4qWON2fjci2NItASw==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "chalk": "^4.0.0"
      },
      "engines": {
        "node": ">=v10"
      }
    },
    "node_modules/@concordance/react": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/@concordance/react/-/react-2.0.0.tgz",
      "integrity": "sha512-huLSkUuM2/P+U0uy2WwlKuixMsTODD8p4JVQBI4VKeopkiN0C7M3N9XYVawb4M+4spN5RrO/eLhk7KoQX6nsfA==",
      "dev": true,
      "dependencies": {
        "arrify": "^1.0.1"
      },
      "engines": {
        "node": ">=6.12.3 <7 || >=8.9.4 <9 || >=10.0.0"
      }
    },
    "node_modules/@concordance/react/node_modules/arrify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
      "integrity": "sha1-iYUI2iIm84DfkEcoRWhJwVAaSw0=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/@cspell/dict-aws": {
      "version": "1.0.14",
      "resolved": "https://registry.npmjs.org/@cspell/dict-aws/-/dict-aws-1.0.14.tgz",
      "integrity": "sha512-K21CfB4ZpKYwwDQiPfic2zJA/uxkbsd4IQGejEvDAhE3z8wBs6g6BwwqdVO767M9NgZqc021yAVpr79N5pWe3w==",
      "dev": true
    },
    "node_modules/@cspell/dict-bash": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/@cspell/dict-bash/-/dict-bash-1.0.12.tgz",
      "integrity": "sha512-BOMHVW/m281mqUSJkZ3oiJiUUItLd7QdzpMjm428V9yBYFwIdbds1CeatS7C6kgpI2eBE4RXmy1Hjk/lR63Jew==",
      "dev": true
    },
    "node_modules/@cspell/dict-companies": {
      "version": "1.0.36",
      "resolved": "https://registry.npmjs.org/@cspell/dict-companies/-/dict-companies-1.0.36.tgz",
      "integrity": "sha512-Bk9mMJs9spzrtLxZsxBZIK6ukD9REfQYpuTBNJk/IiTViHVQ6ertHAgw1vRVtJAMxViv8dMLNtDyTpEXeaYm7w==",
      "dev": true
    },
    "node_modules/@cspell/dict-cpp": {
      "version": "1.1.38",
      "resolved": "https://registry.npmjs.org/@cspell/dict-cpp/-/dict-cpp-1.1.38.tgz",
      "integrity": "sha512-QqVMxVNYX9XtxzflpJ/888GSyjPU5VeotltsHql1BeEPxhyV27ud9bRKDrBGzCijCK/+MvCxiMZGDpYZqHTjXw==",
      "dev": true
    },
    "node_modules/@cspell/dict-cryptocurrencies": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/@cspell/dict-cryptocurrencies/-/dict-cryptocurrencies-1.0.10.tgz",
      "integrity": "sha512-47ABvDJOkaST/rXipNMfNvneHUzASvmL6K/CbOFpYKfsd0x23Jc9k1yaOC7JAm82XSC/8a7+3Yu+Fk2jVJNnsA==",
      "dev": true
    },
    "node_modules/@cspell/dict-csharp": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@cspell/dict-csharp/-/dict-csharp-1.0.11.tgz",
      "integrity": "sha512-nub+ZCiTgmT87O+swI+FIAzNwaZPWUGckJU4GN402wBq420V+F4ZFqNV7dVALJrGaWH7LvADRtJxi6cZVHJKeA==",
      "dev": true
    },
    "node_modules/@cspell/dict-css": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@cspell/dict-css/-/dict-css-1.0.11.tgz",
      "integrity": "sha512-2Or5oF5ojaXYD8QbO4Z+QdaNXSp+ZyNLJdeyKfejbxLvpL5feSNB0oYtTNrweFPTAvJKQ4DJsdEXy0/s31haRg==",
      "dev": true
    },
    "node_modules/@cspell/dict-django": {
      "version": "1.0.26",
      "resolved": "https://registry.npmjs.org/@cspell/dict-django/-/dict-django-1.0.26.tgz",
      "integrity": "sha512-mn9bd7Et1L2zuibc08GVHTiD2Go3/hdjyX5KLukXDklBkq06r+tb0OtKtf1zKodtFDTIaYekGADhNhA6AnKLkg==",
      "dev": true
    },
    "node_modules/@cspell/dict-dotnet": {
      "version": "1.0.25",
      "resolved": "https://registry.npmjs.org/@cspell/dict-dotnet/-/dict-dotnet-1.0.25.tgz",
      "integrity": "sha512-3BFhdquYqqjeI8Jm1dYepZKGEg+fKFhw7UfPkVdx13C4ETo5VlsS4FAblC0pCY21pDU3QgRZOGL1Bj+KWCGp/w==",
      "dev": true
    },
    "node_modules/@cspell/dict-elixir": {
      "version": "1.0.24",
      "resolved": "https://registry.npmjs.org/@cspell/dict-elixir/-/dict-elixir-1.0.24.tgz",
      "integrity": "sha512-pEX6GYlEx4Teusw/m+XmqoXzcHOqpcn1ZX4H33ONqR81XdPwbaKorBr1IG23Ic76IhwrFlOqs48tcnxrHYpFnA==",
      "dev": true
    },
    "node_modules/@cspell/dict-en_us": {
      "version": "1.2.40",
      "resolved": "https://registry.npmjs.org/@cspell/dict-en_us/-/dict-en_us-1.2.40.tgz",
      "integrity": "sha512-e8leCvGAWPWQIw0SoozgEAiMt2YM12rafOuW4aQwgTJD++vp32a9RrnVL8olBfWaA57rRWWndbMSmPTrsO9mpg==",
      "dev": true
    },
    "node_modules/@cspell/dict-en-gb": {
      "version": "1.1.28",
      "resolved": "https://registry.npmjs.org/@cspell/dict-en-gb/-/dict-en-gb-1.1.28.tgz",
      "integrity": "sha512-noOH+iv4xFpPxu1agiQgp5LhY/KA0Ir28y1xnC2QTtLvlIid7vIvgixBOz4Zi0P7lo/mPmMjQY+x7//2EKFDgQ==",
      "dev": true
    },
    "node_modules/@cspell/dict-filetypes": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@cspell/dict-filetypes/-/dict-filetypes-1.1.5.tgz",
      "integrity": "sha512-yfkB37J+hL6W8qa4AknFp7u6CGECrw2ql2/y0lUKruLQYid0ApK+bH+ll+Sqgl2YS5QAOhclskc72aQHAcRJIQ==",
      "dev": true
    },
    "node_modules/@cspell/dict-fonts": {
      "version": "1.0.14",
      "resolved": "https://registry.npmjs.org/@cspell/dict-fonts/-/dict-fonts-1.0.14.tgz",
      "integrity": "sha512-VhIX+FVYAnqQrOuoFEtya6+H72J82cIicz9QddgknsTqZQ3dvgp6lmVnsQXPM3EnzA8n1peTGpLDwHzT7ociLA==",
      "dev": true
    },
    "node_modules/@cspell/dict-fullstack": {
      "version": "1.0.37",
      "resolved": "https://registry.npmjs.org/@cspell/dict-fullstack/-/dict-fullstack-1.0.37.tgz",
      "integrity": "sha512-ljVzUdIlBENMiyHUV06007hz2FPRt+BQmC9Jgn6iGIEQeAQp37Q6oIDmxv2lD65ScEIbysxXuaUgJ5x0j4a48A==",
      "dev": true
    },
    "node_modules/@cspell/dict-golang": {
      "version": "1.1.24",
      "resolved": "https://registry.npmjs.org/@cspell/dict-golang/-/dict-golang-1.1.24.tgz",
      "integrity": "sha512-qq3Cjnx2U1jpeWAGJL1GL0ylEhUMqyaR36Xij6Y6Aq4bViCRp+HRRqk0x5/IHHbOrti45h3yy7ii1itRFo+Xkg==",
      "dev": true
    },
    "node_modules/@cspell/dict-haskell": {
      "version": "1.0.13",
      "resolved": "https://registry.npmjs.org/@cspell/dict-haskell/-/dict-haskell-1.0.13.tgz",
      "integrity": "sha512-kvl8T84cnYRPpND/P3D86P6WRSqebsbk0FnMfy27zo15L5MLAb3d3MOiT1kW3vEWfQgzUD7uddX/vUiuroQ8TA==",
      "dev": true
    },
    "node_modules/@cspell/dict-html": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/@cspell/dict-html/-/dict-html-1.1.6.tgz",
      "integrity": "sha512-RsZXIrmsnLcUpXfyZdNg7OtO2+e4p7m/qILg03kM6vhSUMY6ryCQNPWKrHqsl8+LBKd54EgFM+O5zcgq6IIsCw==",
      "dev": true
    },
    "node_modules/@cspell/dict-html-symbol-entities": {
      "version": "1.0.23",
      "resolved": "https://registry.npmjs.org/@cspell/dict-html-symbol-entities/-/dict-html-symbol-entities-1.0.23.tgz",
      "integrity": "sha512-PV0UBgcBFbBLf/m1wfkVMM8w96kvfHoiCGLWO6BR3Q9v70IXoE4ae0+T+f0CkxcEkacMqEQk/I7vuE9MzrjaNw==",
      "dev": true
    },
    "node_modules/@cspell/dict-java": {
      "version": "1.0.22",
      "resolved": "https://registry.npmjs.org/@cspell/dict-java/-/dict-java-1.0.22.tgz",
      "integrity": "sha512-CVAJ29dx1XwwutgsMgaj5eCl1Nc7X7qFhWL2KkAdu78A/NUIaS+1I9KS0hHhdZx/wLke9dH8TR7NyPQGpGxeAw==",
      "dev": true
    },
    "node_modules/@cspell/dict-latex": {
      "version": "1.0.25",
      "resolved": "https://registry.npmjs.org/@cspell/dict-latex/-/dict-latex-1.0.25.tgz",
      "integrity": "sha512-cEgg91Migqcp1SdVV7dUeMxbPDhxdNo6Fgq2eygAXQjIOFK520FFvh/qxyBvW90qdZbIRoU2AJpchyHfGuwZFA==",
      "dev": true
    },
    "node_modules/@cspell/dict-lorem-ipsum": {
      "version": "1.0.22",
      "resolved": "https://registry.npmjs.org/@cspell/dict-lorem-ipsum/-/dict-lorem-ipsum-1.0.22.tgz",
      "integrity": "sha512-yqzspR+2ADeAGUxLTfZ4pXvPl7FmkENMRcGDECmddkOiuEwBCWMZdMP5fng9B0Q6j91hQ8w9CLvJKBz10TqNYg==",
      "dev": true
    },
    "node_modules/@cspell/dict-lua": {
      "version": "1.0.16",
      "resolved": "https://registry.npmjs.org/@cspell/dict-lua/-/dict-lua-1.0.16.tgz",
      "integrity": "sha512-YiHDt8kmHJ8nSBy0tHzaxiuitYp+oJ66ffCYuFWTNB3//Y0SI4OGHU3omLsQVeXIfCeVrO4DrVvRDoCls9B5zQ==",
      "dev": true
    },
    "node_modules/@cspell/dict-node": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@cspell/dict-node/-/dict-node-1.0.11.tgz",
      "integrity": "sha512-q66zAqtNmuvZGKt4stRwQPFLsbOjZGGZOZ1HEbqpOkicxvF0BWhR0Di/JBq27PDxeqQP3S5sLeogQTSNQBuTww==",
      "dev": true
    },
    "node_modules/@cspell/dict-npm": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@cspell/dict-npm/-/dict-npm-1.0.11.tgz",
      "integrity": "sha512-mokmv9/Yk1yliDz97drWyuDWv7eKGEcFhdM43YSPK7GuMLh6i2ULOmORPFhUcjxQjPf0uySMDA2JguiQ4m5Lmg==",
      "dev": true
    },
    "node_modules/@cspell/dict-php": {
      "version": "1.0.23",
      "resolved": "https://registry.npmjs.org/@cspell/dict-php/-/dict-php-1.0.23.tgz",
      "integrity": "sha512-rRLf/09rXDrzs0DJuNXNmFVTw2b2zLmZKNF4LIPrFHYHvdfsMvwVqxkr/SAyhF8C6zi5sW0XYC/J0S/3IE927w==",
      "dev": true
    },
    "node_modules/@cspell/dict-powershell": {
      "version": "1.0.14",
      "resolved": "https://registry.npmjs.org/@cspell/dict-powershell/-/dict-powershell-1.0.14.tgz",
      "integrity": "sha512-hisOXXi5PBXB5YKtrJQIis2FIRHgSW1U0/sd4yI36lzb3ZMEvGJwdAdyhXN3IGiqRUNxMzJiXAeXfhnia4xPtQ==",
      "dev": true
    },
    "node_modules/@cspell/dict-python": {
      "version": "1.0.33",
      "resolved": "https://registry.npmjs.org/@cspell/dict-python/-/dict-python-1.0.33.tgz",
      "integrity": "sha512-tRmE4TzHDFPs7sJ1a3XbfyFrvRHwefVz+z1wkm6tkXK9TPrCbIS+rV/T8xhj205q4lpZQ/TkNB3lT40eLB9O8A==",
      "dev": true
    },
    "node_modules/@cspell/dict-ruby": {
      "version": "1.0.13",
      "resolved": "https://registry.npmjs.org/@cspell/dict-ruby/-/dict-ruby-1.0.13.tgz",
      "integrity": "sha512-YeN1acY38dgMYlEJ6iWPH+8qXB6seLKHm9BszXxaKT/IzGA9Y9XUWPGobeJFD5E/tC6HjvcqRKxEs8vnvakoLQ==",
      "dev": true
    },
    "node_modules/@cspell/dict-rust": {
      "version": "1.0.22",
      "resolved": "https://registry.npmjs.org/@cspell/dict-rust/-/dict-rust-1.0.22.tgz",
      "integrity": "sha512-7WOIzv0BPiU+MssZbbMk8K+HR/g9Bcvd0+jXJC3/AKT8L6l0Mx0Tr/oF7cJ4xvCYgA84nBz3PhMZkabGSz/Nkg==",
      "dev": true
    },
    "node_modules/@cspell/dict-scala": {
      "version": "1.0.21",
      "resolved": "https://registry.npmjs.org/@cspell/dict-scala/-/dict-scala-1.0.21.tgz",
      "integrity": "sha512-5V/R7PRbbminTpPS3ywgdAalI9BHzcEjEj9ug4kWYvBIGwSnS7T6QCFCiu+e9LvEGUqQC+NHgLY4zs1NaBj2vA==",
      "dev": true
    },
    "node_modules/@cspell/dict-software-terms": {
      "version": "1.0.27",
      "resolved": "https://registry.npmjs.org/@cspell/dict-software-terms/-/dict-software-terms-1.0.27.tgz",
      "integrity": "sha512-O6wCGuFSnr9G9Sr62zc7/XyruRRPI0/PJ0xZj8/R+hr+vFjDaScQnkqj10gTVoLAshk1TjL5Firnzyz3ibfgdQ==",
      "dev": true
    },
    "node_modules/@cspell/dict-typescript": {
      "version": "1.0.17",
      "resolved": "https://registry.npmjs.org/@cspell/dict-typescript/-/dict-typescript-1.0.17.tgz",
      "integrity": "sha512-CXCuXcrgAc56P3kL9I6gW6bZwTs6t3duyAtHerHg5YAYbPs6/4nXgniQgLgu8kjFHFy07XrqaaBdLU9V2DmMtQ==",
      "dev": true
    },
    "node_modules/@eslint/eslintrc": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-0.4.0.tgz",
      "integrity": "sha512-2ZPCc+uNbjV5ERJr+aKSPRwZgKd2z11x0EgLvb1PURmUrn9QNRXFqje0Ldq454PfAVyaJYyrDvvIKSFP4NnBog==",
      "dev": true,
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.1.1",
        "espree": "^7.3.0",
        "globals": "^12.1.0",
        "ignore": "^4.0.6",
        "import-fresh": "^3.2.1",
        "js-yaml": "^3.13.1",
        "minimatch": "^3.0.4",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/globals": {
      "version": "12.4.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-12.4.0.tgz",
      "integrity": "sha512-BWICuzzDvDoH54NHKCseDanAhE3CeDorgDL5MT6LMXXj2WCnd9UC2szdk4AWLfjdgNBCXLUanXYcpBBKOSWGwg==",
      "dev": true,
      "dependencies": {
        "type-fest": "^0.8.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/ignore": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-4.0.6.tgz",
      "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/type-fest": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",
      "integrity": "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==",
      "dev": true,
      "dependencies": {
        "camelcase": "^5.3.1",
        "find-up": "^4.1.0",
        "get-package-type": "^0.1.0",
        "js-yaml": "^3.13.1",
        "resolve-from": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@istanbuljs/load-nyc-config/node_modules/camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@istanbuljs/nyc-config-typescript": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@istanbuljs/nyc-config-typescript/-/nyc-config-typescript-1.0.1.tgz",
      "integrity": "sha512-/gz6LgVpky205LuoOfwEZmnUtaSmdk0QIMcNFj9OvxhiMhPpKftMgZmGN7jNj7jR+lr8IB1Yks3QSSSNSxfoaQ==",
      "dev": true,
      "dependencies": {
        "@istanbuljs/schema": "^0.1.2"
      },
      "engines": {
        "node": ">=8"
      },
      "peerDependencies": {
        "nyc": ">=15",
        "source-map-support": "*",
        "ts-node": "*"
      }
    },
    "node_modules/@istanbuljs/schema": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz",
      "integrity": "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.4.tgz",
      "integrity": "sha512-33g3pMJk3bg5nXbL/+CY6I2eJDzZAni49PfJnL5fghPTggPvBd/pFNSgJsdAgWptuFu7qq/ERvOYFlhvsLTCKA==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "2.0.4",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.4.tgz",
      "integrity": "sha512-IYlHJA0clt2+Vg7bccq+TzRdJvv19c2INqBSsoOLp1je7xjtr7J26+WXR72MCdvU9q1qTzIWDfhMf+DRvQJK4Q==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.6.tgz",
      "integrity": "sha512-8Broas6vTtW4GIXTAHDoE32hnN2M5ykgCpWGbuXHQ15vEMqr23pB76e/GZcYsZCHALv50ktd24qhEyKr6wBtow==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.4",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@sindresorhus/is": {
      "version": "0.14.0",
      "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.14.0.tgz",
      "integrity": "sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@szmarczak/http-timer": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-1.1.2.tgz",
      "integrity": "sha512-XIB2XbzHTN6ieIjfIMV9hlVcfPU26s2vafYWQcZHWXHOxiaRZYEDKEwdl129Zyg50+foYV2jCgtrqSA6qNuNSA==",
      "dev": true,
      "dependencies": {
        "defer-to-connect": "^1.0.1"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@tokenizer/token": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/@tokenizer/token/-/token-0.1.1.tgz",
      "integrity": "sha512-XO6INPbZCxdprl+9qa/AAbFFOMzzwqYxpjPgLICrMD6C2FCw6qfJOPcBk6JqqPLSaZ/Qx87qn4rpPmPMwaAK6w==",
      "dev": true
    },
    "node_modules/@tootallnate/once": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@tootallnate/once/-/once-1.1.2.tgz",
      "integrity": "sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw==",
      "dev": true,
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/@types/debug": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/@types/debug/-/debug-4.1.5.tgz",
      "integrity": "sha512-Q1y515GcOdTHgagaVFhHnIFQ38ygs/kmxdNpvpou+raI9UO3YZcHDngBSYKQklcKlvA7iuQlmIKbzvmxcOE9CQ==",
      "dev": true
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.7",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.7.tgz",
      "integrity": "sha512-cxWFQVseBm6O9Gbw1IWb8r6OS4OhSt3hPZLkFApLjM8TEXROBuQGLAH2i2gZpcXdLBIrpXuTDhH7Vbm1iXmNGA==",
      "dev": true
    },
    "node_modules/@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha1-7ihweulOEdK4J7y+UnC86n8+ce4=",
      "dev": true
    },
    "node_modules/@types/minimist": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@types/minimist/-/minimist-1.2.1.tgz",
      "integrity": "sha512-fZQQafSREFyuZcdWFAExYjBiCL7AUCdgsk80iO0q4yihYYdcIiH28CcuPTGFgLOCC8RlW49GSQxdHwZP+I7CNg==",
      "dev": true
    },
    "node_modules/@types/node": {
      "version": "14.14.37",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-14.14.37.tgz",
      "integrity": "sha512-XYmBiy+ohOR4Lh5jE379fV2IU+6Jn4g5qASinhitfyO71b/sCo6MKsMLF5tc7Zf2CE8hViVQyYSobJNke8OvUw==",
      "dev": true
    },
    "node_modules/@types/normalize-package-data": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/@types/normalize-package-data/-/normalize-package-data-2.4.0.tgz",
      "integrity": "sha512-f5j5b/Gf71L+dbqxIpQ4Z2WlmI/mPJ0fOkGGmFgtb6sAu97EPczzbS3/tJKxmcYDj55OX6ssqwDAWOHIYDRDGA==",
      "dev": true
    },
    "node_modules/@types/parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA==",
      "dev": true,
      "optional": true
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-4.21.0.tgz",
      "integrity": "sha512-FPUyCPKZbVGexmbCFI3EQHzCZdy2/5f+jv6k2EDljGdXSRc0cKvbndd2nHZkSLqCNOPk0jB6lGzwIkglXcYVsQ==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/experimental-utils": "4.21.0",
        "@typescript-eslint/scope-manager": "4.21.0",
        "debug": "^4.1.1",
        "functional-red-black-tree": "^1.0.1",
        "lodash": "^4.17.15",
        "regexpp": "^3.0.0",
        "semver": "^7.3.2",
        "tsutils": "^3.17.1"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^4.0.0",
        "eslint": "^5.0.0 || ^6.0.0 || ^7.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/experimental-utils": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/experimental-utils/-/experimental-utils-4.21.0.tgz",
      "integrity": "sha512-cEbgosW/tUFvKmkg3cU7LBoZhvUs+ZPVM9alb25XvR0dal4qHL3SiUqHNrzoWSxaXA9gsifrYrS1xdDV6w/gIA==",
      "dev": true,
      "dependencies": {
        "@types/json-schema": "^7.0.3",
        "@typescript-eslint/scope-manager": "4.21.0",
        "@typescript-eslint/types": "4.21.0",
        "@typescript-eslint/typescript-estree": "4.21.0",
        "eslint-scope": "^5.0.0",
        "eslint-utils": "^2.0.0"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "*"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-4.21.0.tgz",
      "integrity": "sha512-eyNf7QmE5O/l1smaQgN0Lj2M/1jOuNg2NrBm1dqqQN0sVngTLyw8tdCbih96ixlhbF1oINoN8fDCyEH9SjLeIA==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/scope-manager": "4.21.0",
        "@typescript-eslint/types": "4.21.0",
        "@typescript-eslint/typescript-estree": "4.21.0",
        "debug": "^4.1.1"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^5.0.0 || ^6.0.0 || ^7.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-4.21.0.tgz",
      "integrity": "sha512-kfOjF0w1Ix7+a5T1knOw00f7uAP9Gx44+OEsNQi0PvvTPLYeXJlsCJ4tYnDj5PQEYfpcgOH5yBlw7K+UEI9Agw==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "4.21.0",
        "@typescript-eslint/visitor-keys": "4.21.0"
      },
      "engines": {
        "node": "^8.10.0 || ^10.13.0 || >=11.10.1"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-4.21.0.tgz",
      "integrity": "sha512-+OQaupjGVVc8iXbt6M1oZMwyKQNehAfLYJJ3SdvnofK2qcjfor9pEM62rVjBknhowTkh+2HF+/KdRAc/wGBN2w==",
      "dev": true,
      "engines": {
        "node": "^8.10.0 || ^10.13.0 || >=11.10.1"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-4.21.0.tgz",
      "integrity": "sha512-ZD3M7yLaVGVYLw4nkkoGKumb7Rog7QID9YOWobFDMQKNl+vPxqVIW/uDk+MDeGc+OHcoG2nJ2HphwiPNajKw3w==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "4.21.0",
        "@typescript-eslint/visitor-keys": "4.21.0",
        "debug": "^4.1.1",
        "globby": "^11.0.1",
        "is-glob": "^4.0.1",
        "semver": "^7.3.2",
        "tsutils": "^3.17.1"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-4.21.0.tgz",
      "integrity": "sha512-dH22dROWGi5Z6p+Igc8bLVLmwy7vEe8r+8c+raPQU0LxgogPUrRAtRGtvBWmlr9waTu3n+QLt/qrS/hWzk1x5w==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "4.21.0",
        "eslint-visitor-keys": "^2.0.0"
      },
      "engines": {
        "node": "^8.10.0 || ^10.13.0 || >=11.10.1"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/acorn": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.1.0.tgz",
      "integrity": "sha512-LWCF/Wn0nfHOmJ9rzQApGnxnvgfROzGilS8936rqN/lfcYkY9MYZzdMqN+2NJ4SlTc+m5HiSa+kNfDtI64dwUA==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.1.tgz",
      "integrity": "sha512-K0Ptm/47OKfQRpNQ2J/oIN/3QYiK6FwW+eJbILhsdxh2WTLdl+30o8aGdTbm5JbffpFFAg/g+zi1E+jvJha5ng==",
      "dev": true,
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.0.2.tgz",
      "integrity": "sha512-+bpA9MJsHdZ4bgfDcpk0ozQyhhVct7rzOmO0s1IIr0AGGgKBljss8n2zp11rRP2wid5VGeh04CgeKzgat5/25A==",
      "dev": true,
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/add-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/add-stream/-/add-stream-1.0.0.tgz",
      "integrity": "sha1-anmQQ3ynNtXhKI25K9MmbV9csqo=",
      "dev": true
    },
    "node_modules/agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "dev": true,
      "dependencies": {
        "debug": "4"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/aggregate-error": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
      "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",
      "dev": true,
      "dependencies": {
        "clean-stack": "^2.0.0",
        "indent-string": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-align": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-3.0.0.tgz",
      "integrity": "sha512-ZpClVKqXN3RGBmKibdfWzqCY4lnjEuoNzU5T0oEFpfd/z5qJHVarukridD4juLO2FXMiwUQxr9WqQtaYa8XRYw==",
      "dev": true,
      "dependencies": {
        "string-width": "^3.0.0"
      }
    },
    "node_modules/ansi-align/node_modules/ansi-regex": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
      "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-align/node_modules/emoji-regex": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
      "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
      "dev": true
    },
    "node_modules/ansi-align/node_modules/is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ansi-align/node_modules/string-width": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
      "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
      "dev": true,
      "dependencies": {
        "emoji-regex": "^7.0.1",
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^5.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-align/node_modules/strip-ansi": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^4.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-colors": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.1.tgz",
      "integrity": "sha512-JoX0apGbHaUJBNl6yF+p6JAFYZ666/hhCGKN5t9QFjbJQKUU/g8MNbFDbvfrgKXvI1QpZplPOnwIo99lX/AAmA==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-escapes": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
      "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
      "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz",
      "integrity": "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
      "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
      "dev": true,
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/append-transform": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/append-transform/-/append-transform-2.0.0.tgz",
      "integrity": "sha512-7yeyCEurROLQJFv5Xj4lEGTy0borxepjFv1g22oAdqFu//SrAlDl1O1Nxx15SH1RoliUml6p8dwJW9jvZughhg==",
      "dev": true,
      "dependencies": {
        "default-require-extensions": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/archy": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/archy/-/archy-1.0.0.tgz",
      "integrity": "sha1-+cjBN1fMHde8N5rHeyxipcKGjEA=",
      "dev": true
    },
    "node_modules/arg": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
      "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
      "dev": true
    },
    "node_modules/argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dev": true,
      "dependencies": {
        "sprintf-js": "~1.0.2"
      }
    },
    "node_modules/argv": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/argv/-/argv-0.0.2.tgz",
      "integrity": "sha1-7L0W+JSbFXGDcRsb2jNPN4QBhas=",
      "dev": true,
      "engines": {
        "node": ">=0.6.10"
      }
    },
    "node_modules/arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/arr-flatten": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/arr-union": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/array-find-index": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-find-index/-/array-find-index-1.0.2.tgz",
      "integrity": "sha1-3wEKoSh+Fku9pvlyOwqWoexBh6E=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/array-ify": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/array-ify/-/array-ify-1.0.0.tgz",
      "integrity": "sha1-nlKHYrSpBmrRY6aWKjZEGOlibs4=",
      "dev": true
    },
    "node_modules/array-includes": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.3.tgz",
      "integrity": "sha512-gcem1KlBU7c9rB+Rq8/3PPKsK2kjqeEBa3bD5kkQo4nYlOHQCJqIJFqBXDEfwaRuYTT4E+FxA9xez7Gf/e3Q7A==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.2",
        "get-intrinsic": "^1.1.1",
        "is-string": "^1.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-timsort": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/array-timsort/-/array-timsort-1.0.3.tgz",
      "integrity": "sha512-/+3GRL7dDAGEfM6TseQk/U+mi18TU2Ms9I3UlLdUMhz2hbvGNTKdj9xniwXfUqgYhHxRx0+8UnKkvlNwVU+cWQ==",
      "dev": true
    },
    "node_modules/array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/array-uniq": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/array-uniq/-/array-uniq-1.0.3.tgz",
      "integrity": "sha1-r2rId6Jcx/dOBYiUdThY39sk/bY=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/array-unique": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.2.4.tgz",
      "integrity": "sha512-4470Xi3GAPAjZqFcljX2xzckv1qeKPizoNkiS0+O4IoPR2ZNpcjE0pkhdihlDouK+x6QOast26B4Q/O9DJnwSg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.2.4.tgz",
      "integrity": "sha512-r9Z0zYoxqHz60vvQbWEdXIEtCwHF0yxaWfno9qzXeNHvfyl3BZqygmGzb84dsubyaXLH4husF+NFgMSdpZhk2Q==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.1",
        "function-bind": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/arrgv": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/arrgv/-/arrgv-1.0.2.tgz",
      "integrity": "sha512-a4eg4yhp7mmruZDQFqVMlxNRFGi/i1r87pt8SDHy0/I8PqSXoUTlWZRdAZo0VXgvEARcujbtTk8kiZRi1uDGRw==",
      "dev": true,
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/arrify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/arrify/-/arrify-2.0.1.tgz",
      "integrity": "sha512-3duEwti880xqi4eAMN8AyR4a0ByT90zoYdLlevfrvU43vb0YZwZVfxOgxWrLXXXpyugL0hNZc9G6BiB5B3nUug==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/assign-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/astral-regex": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-2.0.0.tgz",
      "integrity": "sha512-Z7tMw1ytTXt5jqMcOP+OQteU1VuNK9Y02uuJtKQ1Sv69jXQKKg5cibLwGJow8yzZP+eAc18EmLGPal0bp36rvQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/async": {
      "version": "2.6.4",
      "resolved": "https://registry.npmjs.org/async/-/async-2.6.4.tgz",
      "integrity": "sha512-mzo5dfJYwAn29PeiJ0zvwTo04zj8HDJj0Mn8TD7sno7q12prdbnasKJHhkm2c1LgrhlJ0teaea8860oxi51mGA==",
      "dev": true,
      "dependencies": {
        "lodash": "^4.17.14"
      }
    },
    "node_modules/at-least-node": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/at-least-node/-/at-least-node-1.0.0.tgz",
      "integrity": "sha512-+q/t7Ekv1EDY2l6Gda6LLiX14rU9TV20Wa3ofeQmwPFZbOMo9DXrLbOjFaaclkXKWidIaopwAObQDqwWtGUjqg==",
      "dev": true,
      "engines": {
        "node": ">= 4.0.0"
      }
    },
    "node_modules/atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
      "dev": true,
      "bin": {
        "atob": "bin/atob.js"
      },
      "engines": {
        "node": ">= 4.5.0"
      }
    },
    "node_modules/ava": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/ava/-/ava-3.15.0.tgz",
      "integrity": "sha512-HGAnk1SHPk4Sx6plFAUkzV/XC1j9+iQhOzt4vBly18/yo0AV8Oytx7mtJd/CR8igCJ5p160N/Oo/cNJi2uSeWA==",
      "dev": true,
      "dependencies": {
        "@concordance/react": "^2.0.0",
        "acorn": "^8.0.4",
        "acorn-walk": "^8.0.0",
        "ansi-styles": "^5.0.0",
        "arrgv": "^1.0.2",
        "arrify": "^2.0.1",
        "callsites": "^3.1.0",
        "chalk": "^4.1.0",
        "chokidar": "^3.4.3",
        "chunkd": "^2.0.1",
        "ci-info": "^2.0.0",
        "ci-parallel-vars": "^1.0.1",
        "clean-yaml-object": "^0.1.0",
        "cli-cursor": "^3.1.0",
        "cli-truncate": "^2.1.0",
        "code-excerpt": "^3.0.0",
        "common-path-prefix": "^3.0.0",
        "concordance": "^5.0.1",
        "convert-source-map": "^1.7.0",
        "currently-unhandled": "^0.4.1",
        "debug": "^4.3.1",
        "del": "^6.0.0",
        "emittery": "^0.8.0",
        "equal-length": "^1.0.0",
        "figures": "^3.2.0",
        "globby": "^11.0.1",
        "ignore-by-default": "^2.0.0",
        "import-local": "^3.0.2",
        "indent-string": "^4.0.0",
        "is-error": "^2.2.2",
        "is-plain-object": "^5.0.0",
        "is-promise": "^4.0.0",
        "lodash": "^4.17.20",
        "matcher": "^3.0.0",
        "md5-hex": "^3.0.1",
        "mem": "^8.0.0",
        "ms": "^2.1.3",
        "ora": "^5.2.0",
        "p-event": "^4.2.0",
        "p-map": "^4.0.0",
        "picomatch": "^2.2.2",
        "pkg-conf": "^3.1.0",
        "plur": "^4.0.0",
        "pretty-ms": "^7.0.1",
        "read-pkg": "^5.2.0",
        "resolve-cwd": "^3.0.0",
        "slash": "^3.0.0",
        "source-map-support": "^0.5.19",
        "stack-utils": "^2.0.3",
        "strip-ansi": "^6.0.0",
        "supertap": "^2.0.0",
        "temp-dir": "^2.0.0",
        "trim-off-newlines": "^1.0.1",
        "update-notifier": "^5.0.1",
        "write-file-atomic": "^3.0.3",
        "yargs": "^16.2.0"
      },
      "bin": {
        "ava": "cli.js"
      },
      "engines": {
        "node": ">=10.18.0 <11 || >=12.14.0 <12.17.0 || >=12.17.0 <13 || >=14.0.0 <15 || >=15"
      }
    },
    "node_modules/ava/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true
    },
    "node_modules/base": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "dev": true,
      "dependencies": {
        "cache-base": "^1.0.1",
        "class-utils": "^0.3.5",
        "component-emitter": "^1.2.1",
        "define-property": "^1.0.0",
        "isobject": "^3.0.1",
        "mixin-deep": "^1.2.0",
        "pascalcase": "^0.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/binary-extensions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
      "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/bl": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
      "integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
      "dev": true,
      "dependencies": {
        "buffer": "^5.5.0",
        "inherits": "^2.0.4",
        "readable-stream": "^3.4.0"
      }
    },
    "node_modules/blueimp-md5": {
      "version": "2.18.0",
      "resolved": "https://registry.npmjs.org/blueimp-md5/-/blueimp-md5-2.18.0.tgz",
      "integrity": "sha512-vE52okJvzsVWhcgUHOv+69OG3Mdg151xyn41aVQN/5W5S+S43qZhxECtYLAEHMSFWX6Mv5IZrzj3T5+JqXfj5Q==",
      "dev": true
    },
    "node_modules/boxen": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/boxen/-/boxen-5.0.1.tgz",
      "integrity": "sha512-49VBlw+PrWEF51aCmy7QIteYPIFZxSpvqBdP/2itCPPlJ49kj9zg/XPRFrdkne2W+CfwXUls8exMvu1RysZpKA==",
      "dev": true,
      "dependencies": {
        "ansi-align": "^3.0.0",
        "camelcase": "^6.2.0",
        "chalk": "^4.1.0",
        "cli-boxes": "^2.2.1",
        "string-width": "^4.2.0",
        "type-fest": "^0.20.2",
        "widest-line": "^3.1.0",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/boxen/node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "dev": true,
      "dependencies": {
        "fill-range": "^7.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.16.6",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.16.6.tgz",
      "integrity": "sha512-Wspk/PqO+4W9qp5iUTJsa1B/QrYn1keNCcEP5OvP7WBwT4KaDly0uONYmC6Xa3Z5IqnUgS0KcgLYu1l74x0ZXQ==",
      "dev": true,
      "dependencies": {
        "caniuse-lite": "^1.0.30001219",
        "colorette": "^1.2.2",
        "electron-to-chromium": "^1.3.723",
        "escalade": "^3.1.1",
        "node-releases": "^1.1.71"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/browserslist"
      }
    },
    "node_modules/browserslist/node_modules/caniuse-lite": {
      "version": "1.0.30001230",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001230.tgz",
      "integrity": "sha512-5yBd5nWCBS+jWKTcHOzXwo5xzcj4ePE/yjtkZyUV1BTUmrBaA9MRGC+e7mxnqXSA90CmCA8L3eKLaSUkt099IQ==",
      "dev": true,
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/browserslist"
      }
    },
    "node_modules/browserslist/node_modules/electron-to-chromium": {
      "version": "1.3.740",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.740.tgz",
      "integrity": "sha512-Mi2m55JrX2BFbNZGKYR+2ItcGnR4O5HhrvgoRRyZQlaMGQULqDhoGkLWHzJoshSzi7k1PUofxcDbNhlFrDZNhg==",
      "dev": true
    },
    "node_modules/buffer": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
      "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "dependencies": {
        "base64-js": "^1.3.1",
        "ieee754": "^1.1.13"
      }
    },
    "node_modules/buffer-from": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
      "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
      "dev": true
    },
    "node_modules/cache-base": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "dev": true,
      "dependencies": {
        "collection-visit": "^1.0.0",
        "component-emitter": "^1.2.1",
        "get-value": "^2.0.6",
        "has-value": "^1.0.0",
        "isobject": "^3.0.1",
        "set-value": "^2.0.0",
        "to-object-path": "^0.3.0",
        "union-value": "^1.0.0",
        "unset-value": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/cacheable-request": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-6.1.0.tgz",
      "integrity": "sha512-Oj3cAGPCqOZX7Rz64Uny2GYAZNliQSqfbePrgAQ1wKAihYmCUnraBtJtKcGR4xz7wF+LoJC+ssFZvv5BgF9Igg==",
      "dev": true,
      "dependencies": {
        "clone-response": "^1.0.2",
        "get-stream": "^5.1.0",
        "http-cache-semantics": "^4.0.0",
        "keyv": "^3.0.0",
        "lowercase-keys": "^2.0.0",
        "normalize-url": "^4.1.0",
        "responselike": "^1.0.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cacheable-request/node_modules/get-stream": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
      "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
      "dev": true,
      "dependencies": {
        "pump": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cacheable-request/node_modules/lowercase-keys": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-2.0.0.tgz",
      "integrity": "sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cachedir": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/cachedir/-/cachedir-2.2.0.tgz",
      "integrity": "sha512-VvxA0xhNqIIfg0V9AmJkDg91DaJwryutH5rVEZAhcNi4iJFj9f+QxmAjgK1LT9I8OgToX27fypX6/MeCXVbBjQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caching-transform": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/caching-transform/-/caching-transform-4.0.0.tgz",
      "integrity": "sha512-kpqOvwXnjjN44D89K5ccQC+RUrsy7jB/XLlRrx0D7/2HNcTPqzsb6XgYoErwko6QsV184CA2YgS1fxDiiDZMWA==",
      "dev": true,
      "dependencies": {
        "hasha": "^5.0.0",
        "make-dir": "^3.0.0",
        "package-hash": "^4.0.0",
        "write-file-atomic": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.2.0.tgz",
      "integrity": "sha512-c7wVvbw3f37nuobQNtgsgG9POC9qMbNuMQmTCqZv23b6MIz0fcYpBiOlv9gEN/hdLdnZTDQhg6e9Dq5M1vKvfg==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/camelcase-keys": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-6.2.2.tgz",
      "integrity": "sha512-YrwaA0vEKazPBkn0ipTiMpSajYDSe+KjQfrjhcBMxJt/znbvlHd8Pw/Vamaz5EB4Wfhs3SUR3Z9mwRu/P3s3Yg==",
      "dev": true,
      "dependencies": {
        "camelcase": "^5.3.1",
        "map-obj": "^4.0.0",
        "quick-lru": "^4.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/camelcase-keys/node_modules/camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/chalk": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
      "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chalk/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/chardet": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
      "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",
      "dev": true
    },
    "node_modules/chokidar": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.1.tgz",
      "integrity": "sha512-9+s+Od+W0VJJzawDma/gvBNQqkTiqYTWLuZoyAsivsI4AaWTCzHG06/TMjsf1cYe9Cb97UCEhjz7HvnPk2p/tw==",
      "dev": true,
      "dependencies": {
        "anymatch": "~3.1.1",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.0",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.5.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.1"
      }
    },
    "node_modules/chunkd": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/chunkd/-/chunkd-2.0.1.tgz",
      "integrity": "sha512-7d58XsFmOq0j6el67Ug9mHf9ELUXsQXYJBkyxhH/k+6Ke0qXRnv0kbemx+Twc6fRJ07C49lcbdgm9FL1Ei/6SQ==",
      "dev": true
    },
    "node_modules/ci-info": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
      "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ==",
      "dev": true
    },
    "node_modules/ci-parallel-vars": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ci-parallel-vars/-/ci-parallel-vars-1.0.1.tgz",
      "integrity": "sha512-uvzpYrpmidaoxvIQHM+rKSrigjOe9feHYbw4uOI2gdfe1C3xIlxO+kVXq83WQWNniTf8bAxVpy+cQeFQsMERKg==",
      "dev": true
    },
    "node_modules/class-utils": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "dev": true,
      "dependencies": {
        "arr-union": "^3.1.0",
        "define-property": "^0.2.5",
        "isobject": "^3.0.0",
        "static-extend": "^0.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/class-utils/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/clean-stack": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
      "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/clean-yaml-object": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/clean-yaml-object/-/clean-yaml-object-0.1.0.tgz",
      "integrity": "sha1-Y/sRDcLOGoTcIfbZM0h20BCui2g=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/cli-boxes": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-2.2.1.tgz",
      "integrity": "sha512-y4coMcylgSCdVinjiDBuR8PCC2bLjyGTwEmPb9NHR/QaNU6EUOXcTY/s6VjGMD6ENSEaeQYHCY0GNGS5jfMwPw==",
      "dev": true,
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-cursor": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
      "integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
      "dev": true,
      "dependencies": {
        "restore-cursor": "^3.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cli-spinners": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.6.0.tgz",
      "integrity": "sha512-t+4/y50K/+4xcCRosKkA7W4gTr1MySvLV0q+PxmG7FJ5g+66ChKurYjxBCjHggHH3HA5Hh9cy+lcUGWDqVH+4Q==",
      "dev": true,
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-truncate": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cli-truncate/-/cli-truncate-2.1.0.tgz",
      "integrity": "sha512-n8fOixwDD6b/ObinzTrp1ZKFzbgvKZvuz/TvejnLn1aQfC6r52XEx85FmuC+3HI+JM7coBRXUvNqEU2PHVrHpg==",
      "dev": true,
      "dependencies": {
        "slice-ansi": "^3.0.0",
        "string-width": "^4.2.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-width": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.1.tgz",
      "integrity": "sha512-GRMWDxpOB6Dgk2E5Uo+3eEBvtOOlimMmpbFiKuLFnQzYDavtLFY3K5ona41jgN/WdRZtG7utuVSVTL4HbZHGkw==",
      "dev": true
    },
    "node_modules/cliui": {
      "version": "7.0.4",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
      "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
      "dev": true,
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.0",
        "wrap-ansi": "^7.0.0"
      }
    },
    "node_modules/clone": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
      "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4=",
      "dev": true,
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/clone-response": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
      "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
      "dev": true,
      "dependencies": {
        "mimic-response": "^1.0.0"
      }
    },
    "node_modules/code-excerpt": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/code-excerpt/-/code-excerpt-3.0.0.tgz",
      "integrity": "sha512-VHNTVhd7KsLGOqfX3SyeO8RyYPMp1GJOg194VITk04WMYCv4plV68YWe6TJZxd9MhobjtpMRnVky01gqZsalaw==",
      "dev": true,
      "dependencies": {
        "convert-to-spaces": "^1.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/codecov": {
      "version": "3.8.1",
      "resolved": "https://registry.npmjs.org/codecov/-/codecov-3.8.1.tgz",
      "integrity": "sha512-Qm7ltx1pzLPsliZY81jyaQ80dcNR4/JpcX0IHCIWrHBXgseySqbdbYfkdiXd7o/xmzQpGRVCKGYeTrHUpn6Dcw==",
      "dev": true,
      "dependencies": {
        "argv": "0.0.2",
        "ignore-walk": "3.0.3",
        "js-yaml": "3.14.0",
        "teeny-request": "6.0.1",
        "urlgrey": "0.4.4"
      },
      "bin": {
        "codecov": "bin/codecov"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/codecov/node_modules/js-yaml": {
      "version": "3.14.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.0.tgz",
      "integrity": "sha512-/4IbIeHcD9VMHFqDR/gQ7EdZdLimOvW2DdcxFjdyyZ9NsbS+ccrXqVWDtab/lRl5AlUqmpBx8EhPaWR+OtY17A==",
      "dev": true,
      "dependencies": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/collection-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "dev": true,
      "dependencies": {
        "map-visit": "^1.0.0",
        "object-visit": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true
    },
    "node_modules/colorette": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-1.2.2.tgz",
      "integrity": "sha512-MKGMzyfeuutC/ZJ1cba9NqcNpfeqMUcYmyF1ZFY6/Cn7CNSAKx6a+s48sqLqyAiZuaP2TcqMhoo+dlwFnVxT9w==",
      "dev": true
    },
    "node_modules/commander": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-7.2.0.tgz",
      "integrity": "sha512-QrWXB+ZQSVPmIWIhtEO9H+gwHaMGYiF5ChvoJ+K9ZGHG/sVsa6yiesAD1GC/x46sET00Xlwo1u49RVVVzvcSkw==",
      "dev": true,
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/comment-json": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/comment-json/-/comment-json-4.1.0.tgz",
      "integrity": "sha512-WEghmVYaNq9NlWbrkzQTSsya9ycLyxJxpTQfZEan6a5Jomnjw18zS3Podf8q1Zf9BvonvQd/+Z7Z39L7KKzzdQ==",
      "dev": true,
      "dependencies": {
        "array-timsort": "^1.0.3",
        "core-util-is": "^1.0.2",
        "esprima": "^4.0.1",
        "has-own-prop": "^2.0.0",
        "repeat-string": "^1.6.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/commitizen": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/commitizen/-/commitizen-4.2.3.tgz",
      "integrity": "sha512-pYlYEng7XMV2TW4xtjDKBGqeJ0Teq2zyRSx2S3Ml1XAplHSlJZK8vm1KdGclpMEZuGafbS5TeHXIVnHk8RWIzQ==",
      "dev": true,
      "dependencies": {
        "cachedir": "2.2.0",
        "cz-conventional-changelog": "3.2.0",
        "dedent": "0.7.0",
        "detect-indent": "6.0.0",
        "find-node-modules": "2.0.0",
        "find-root": "1.1.0",
        "fs-extra": "8.1.0",
        "glob": "7.1.4",
        "inquirer": "6.5.2",
        "is-utf8": "^0.2.1",
        "lodash": "^4.17.20",
        "minimist": "1.2.5",
        "strip-bom": "4.0.0",
        "strip-json-comments": "3.0.1"
      },
      "bin": {
        "commitizen": "bin/commitizen",
        "cz": "bin/git-cz",
        "git-cz": "bin/git-cz"
      },
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/commitizen/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/commitizen/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/commitizen/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/commitizen/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/commitizen/node_modules/cz-conventional-changelog": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/cz-conventional-changelog/-/cz-conventional-changelog-3.2.0.tgz",
      "integrity": "sha512-yAYxeGpVi27hqIilG1nh4A9Bnx4J3Ov+eXy4koL3drrR+IO9GaWPsKjik20ht608Asqi8TQPf0mczhEeyAtMzg==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.4.1",
        "commitizen": "^4.0.3",
        "conventional-commit-types": "^3.0.0",
        "lodash.map": "^4.5.1",
        "longest": "^2.0.1",
        "word-wrap": "^1.0.3"
      },
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@commitlint/load": ">6.1.1"
      }
    },
    "node_modules/commitizen/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/commitizen/node_modules/fs-extra": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
      "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^4.0.0",
        "universalify": "^0.1.0"
      },
      "engines": {
        "node": ">=6 <7 || >=8"
      }
    },
    "node_modules/commitizen/node_modules/glob": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
      "integrity": "sha512-hkLPepehmnKk41pUGm3sYxoFs/umurYfYJCerbXEyFIWcAzvpipAgVkBqqT9RBKMGjnq6kMuyYwha6csxbiM1A==",
      "dev": true,
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/commitizen/node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/commitizen/node_modules/jsonfile": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
      "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
      "dev": true,
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/commitizen/node_modules/strip-bom": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
      "integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/commitizen/node_modules/strip-json-comments": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.0.1.tgz",
      "integrity": "sha512-VTyMAUfdm047mwKl+u79WIdrZxtFtn+nBxHeb844XBQ9uMNTuTHdx2hc5RiAJYqwTj3wc/xe5HLSdJSkJ+WfZw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/commitizen/node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/commitizen/node_modules/universalify": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
      "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
      "dev": true,
      "engines": {
        "node": ">= 4.0.0"
      }
    },
    "node_modules/common-path-prefix": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/common-path-prefix/-/common-path-prefix-3.0.0.tgz",
      "integrity": "sha512-QE33hToZseCH3jS0qN96O/bSh3kaw/h+Tq7ngyY9eWDUnTlTNUyqfqvCXioLe5Na5jFsL78ra/wuBU4iuEgd4w==",
      "dev": true
    },
    "node_modules/commondir": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
      "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs=",
      "dev": true
    },
    "node_modules/compare-func": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/compare-func/-/compare-func-2.0.0.tgz",
      "integrity": "sha512-zHig5N+tPWARooBnb0Zx1MFcdfpyJrfTJ3Y5L+IFvUm8rM74hHz66z0gw0x4tijh5CorKkKUCnW82R2vmpeCRA==",
      "dev": true,
      "dependencies": {
        "array-ify": "^1.0.0",
        "dot-prop": "^5.1.0"
      }
    },
    "node_modules/component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",
      "dev": true
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
      "dev": true
    },
    "node_modules/concat-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-2.0.0.tgz",
      "integrity": "sha512-MWufYdFw53ccGjCA+Ol7XJYpAlW6/prSMzuPOTRnJGcGzuhLn4Scrz7qf6o8bROZ514ltazcIFJZevcfbo0x7A==",
      "dev": true,
      "engines": [
        "node >= 6.0"
      ],
      "dependencies": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^3.0.2",
        "typedarray": "^0.0.6"
      }
    },
    "node_modules/concordance": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/concordance/-/concordance-5.0.4.tgz",
      "integrity": "sha512-OAcsnTEYu1ARJqWVGwf4zh4JDfHZEaSNlNccFmt8YjB2l/n19/PF2viLINHc57vO4FKIAFl2FWASIGZZWZ2Kxw==",
      "dev": true,
      "dependencies": {
        "date-time": "^3.1.0",
        "esutils": "^2.0.3",
        "fast-diff": "^1.2.0",
        "js-string-escape": "^1.0.1",
        "lodash": "^4.17.15",
        "md5-hex": "^3.0.1",
        "semver": "^7.3.2",
        "well-known-symbols": "^2.0.0"
      },
      "engines": {
        "node": ">=10.18.0 <11 || >=12.14.0 <13 || >=14"
      }
    },
    "node_modules/configstore": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/configstore/-/configstore-5.0.1.tgz",
      "integrity": "sha512-aMKprgk5YhBNyH25hj8wGt2+D52Sw1DRRIzqBwLp2Ya9mFmY8KPvvtvmna8SxVR9JMZ4kzMD68N22vlaRpkeFA==",
      "dev": true,
      "dependencies": {
        "dot-prop": "^5.2.0",
        "graceful-fs": "^4.1.2",
        "make-dir": "^3.0.0",
        "unique-string": "^2.0.0",
        "write-file-atomic": "^3.0.0",
        "xdg-basedir": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/contains-path": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/contains-path/-/contains-path-0.1.0.tgz",
      "integrity": "sha1-/ozxhP9mcLa67wGp1IYaXL7EEgo=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/conventional-changelog": {
      "version": "3.1.24",
      "resolved": "https://registry.npmjs.org/conventional-changelog/-/conventional-changelog-3.1.24.tgz",
      "integrity": "sha512-ed6k8PO00UVvhExYohroVPXcOJ/K1N0/drJHx/faTH37OIZthlecuLIRX/T6uOp682CAoVoFpu+sSEaeuH6Asg==",
      "dev": true,
      "dependencies": {
        "conventional-changelog-angular": "^5.0.12",
        "conventional-changelog-atom": "^2.0.8",
        "conventional-changelog-codemirror": "^2.0.8",
        "conventional-changelog-conventionalcommits": "^4.5.0",
        "conventional-changelog-core": "^4.2.1",
        "conventional-changelog-ember": "^2.0.9",
        "conventional-changelog-eslint": "^3.0.9",
        "conventional-changelog-express": "^2.0.6",
        "conventional-changelog-jquery": "^3.0.11",
        "conventional-changelog-jshint": "^2.0.9",
        "conventional-changelog-preset-loader": "^2.3.4"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-angular": {
      "version": "5.0.12",
      "resolved": "https://registry.npmjs.org/conventional-changelog-angular/-/conventional-changelog-angular-5.0.12.tgz",
      "integrity": "sha512-5GLsbnkR/7A89RyHLvvoExbiGbd9xKdKqDTrArnPbOqBqG/2wIosu0fHwpeIRI8Tl94MhVNBXcLJZl92ZQ5USw==",
      "dev": true,
      "dependencies": {
        "compare-func": "^2.0.0",
        "q": "^1.5.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-atom": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/conventional-changelog-atom/-/conventional-changelog-atom-2.0.8.tgz",
      "integrity": "sha512-xo6v46icsFTK3bb7dY/8m2qvc8sZemRgdqLb/bjpBsH2UyOS8rKNTgcb5025Hri6IpANPApbXMg15QLb1LJpBw==",
      "dev": true,
      "dependencies": {
        "q": "^1.5.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-codemirror": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/conventional-changelog-codemirror/-/conventional-changelog-codemirror-2.0.8.tgz",
      "integrity": "sha512-z5DAsn3uj1Vfp7po3gpt2Boc+Bdwmw2++ZHa5Ak9k0UKsYAO5mH1UBTN0qSCuJZREIhX6WU4E1p3IW2oRCNzQw==",
      "dev": true,
      "dependencies": {
        "q": "^1.5.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-config-spec": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/conventional-changelog-config-spec/-/conventional-changelog-config-spec-2.1.0.tgz",
      "integrity": "sha512-IpVePh16EbbB02V+UA+HQnnPIohgXvJRxHcS5+Uwk4AT5LjzCZJm5sp/yqs5C6KZJ1jMsV4paEV13BN1pvDuxQ==",
      "dev": true
    },
    "node_modules/conventional-changelog-conventionalcommits": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/conventional-changelog-conventionalcommits/-/conventional-changelog-conventionalcommits-4.5.0.tgz",
      "integrity": "sha512-buge9xDvjjOxJlyxUnar/+6i/aVEVGA7EEh4OafBCXPlLUQPGbRUBhBUveWRxzvR8TEjhKEP4BdepnpG2FSZXw==",
      "dev": true,
      "dependencies": {
        "compare-func": "^2.0.0",
        "lodash": "^4.17.15",
        "q": "^1.5.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-core": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/conventional-changelog-core/-/conventional-changelog-core-4.2.2.tgz",
      "integrity": "sha512-7pDpRUiobQDNkwHyJG7k9f6maPo9tfPzkSWbRq97GGiZqisElhnvUZSvyQH20ogfOjntB5aadvv6NNcKL1sReg==",
      "dev": true,
      "dependencies": {
        "add-stream": "^1.0.0",
        "conventional-changelog-writer": "^4.0.18",
        "conventional-commits-parser": "^3.2.0",
        "dateformat": "^3.0.0",
        "get-pkg-repo": "^1.0.0",
        "git-raw-commits": "^2.0.8",
        "git-remote-origin-url": "^2.0.0",
        "git-semver-tags": "^4.1.1",
        "lodash": "^4.17.15",
        "normalize-package-data": "^3.0.0",
        "q": "^1.5.1",
        "read-pkg": "^3.0.0",
        "read-pkg-up": "^3.0.0",
        "shelljs": "^0.8.3",
        "through2": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/find-up": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
      "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
      "dev": true,
      "dependencies": {
        "locate-path": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/hosted-git-info": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.0.2.tgz",
      "integrity": "sha512-c9OGXbZ3guC/xOlCg1Ci/VgWlwsqDv1yMQL1CWqXDL0hDjXuNcq0zuR4xqPSuasI3kqFDhqSyTjREz5gzq0fXg==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/load-json-file": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
      "integrity": "sha1-L19Fq5HjMhYjT9U62rZo607AmTs=",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.2",
        "parse-json": "^4.0.0",
        "pify": "^3.0.0",
        "strip-bom": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/locate-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
      "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
      "dev": true,
      "dependencies": {
        "p-locate": "^2.0.0",
        "path-exists": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/normalize-package-data": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.2.tgz",
      "integrity": "sha512-6CdZocmfGaKnIHPVFhJJZ3GuR8SsLKvDANFp47Jmy51aKIr8akjAWTSxtpI+MBgBFdSMRyo4hMpDlT6dTffgZg==",
      "dev": true,
      "dependencies": {
        "hosted-git-info": "^4.0.1",
        "resolve": "^1.20.0",
        "semver": "^7.3.4",
        "validate-npm-package-license": "^3.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/p-limit": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
      "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
      "dev": true,
      "dependencies": {
        "p-try": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/p-locate": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
      "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
      "dev": true,
      "dependencies": {
        "p-limit": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/p-try": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
      "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/path-type": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
      "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
      "dev": true,
      "dependencies": {
        "pify": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/pify": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
      "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/read-pkg": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
      "integrity": "sha1-nLxoaXj+5l0WwA4rGcI3/Pbjg4k=",
      "dev": true,
      "dependencies": {
        "load-json-file": "^4.0.0",
        "normalize-package-data": "^2.3.2",
        "path-type": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/read-pkg-up": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-3.0.0.tgz",
      "integrity": "sha1-PtSWaF26D4/hGNBpHcUfSh/5bwc=",
      "dev": true,
      "dependencies": {
        "find-up": "^2.0.0",
        "read-pkg": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/read-pkg/node_modules/hosted-git-info": {
      "version": "2.8.9",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
      "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
      "dev": true
    },
    "node_modules/conventional-changelog-core/node_modules/read-pkg/node_modules/normalize-package-data": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
      "dev": true,
      "dependencies": {
        "hosted-git-info": "^2.1.4",
        "resolve": "^1.10.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      }
    },
    "node_modules/conventional-changelog-core/node_modules/read-pkg/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true,
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/conventional-changelog-ember": {
      "version": "2.0.9",
      "resolved": "https://registry.npmjs.org/conventional-changelog-ember/-/conventional-changelog-ember-2.0.9.tgz",
      "integrity": "sha512-ulzIReoZEvZCBDhcNYfDIsLTHzYHc7awh+eI44ZtV5cx6LVxLlVtEmcO+2/kGIHGtw+qVabJYjdI5cJOQgXh1A==",
      "dev": true,
      "dependencies": {
        "q": "^1.5.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-eslint": {
      "version": "3.0.9",
      "resolved": "https://registry.npmjs.org/conventional-changelog-eslint/-/conventional-changelog-eslint-3.0.9.tgz",
      "integrity": "sha512-6NpUCMgU8qmWmyAMSZO5NrRd7rTgErjrm4VASam2u5jrZS0n38V7Y9CzTtLT2qwz5xEChDR4BduoWIr8TfwvXA==",
      "dev": true,
      "dependencies": {
        "q": "^1.5.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-express": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/conventional-changelog-express/-/conventional-changelog-express-2.0.6.tgz",
      "integrity": "sha512-SDez2f3iVJw6V563O3pRtNwXtQaSmEfTCaTBPCqn0oG0mfkq0rX4hHBq5P7De2MncoRixrALj3u3oQsNK+Q0pQ==",
      "dev": true,
      "dependencies": {
        "q": "^1.5.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-jquery": {
      "version": "3.0.11",
      "resolved": "https://registry.npmjs.org/conventional-changelog-jquery/-/conventional-changelog-jquery-3.0.11.tgz",
      "integrity": "sha512-x8AWz5/Td55F7+o/9LQ6cQIPwrCjfJQ5Zmfqi8thwUEKHstEn4kTIofXub7plf1xvFA2TqhZlq7fy5OmV6BOMw==",
      "dev": true,
      "dependencies": {
        "q": "^1.5.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-jshint": {
      "version": "2.0.9",
      "resolved": "https://registry.npmjs.org/conventional-changelog-jshint/-/conventional-changelog-jshint-2.0.9.tgz",
      "integrity": "sha512-wMLdaIzq6TNnMHMy31hql02OEQ8nCQfExw1SE0hYL5KvU+JCTuPaDO+7JiogGT2gJAxiUGATdtYYfh+nT+6riA==",
      "dev": true,
      "dependencies": {
        "compare-func": "^2.0.0",
        "q": "^1.5.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-preset-loader": {
      "version": "2.3.4",
      "resolved": "https://registry.npmjs.org/conventional-changelog-preset-loader/-/conventional-changelog-preset-loader-2.3.4.tgz",
      "integrity": "sha512-GEKRWkrSAZeTq5+YjUZOYxdHq+ci4dNwHvpaBC3+ENalzFWuCWa9EZXSuZBpkr72sMdKB+1fyDV4takK1Lf58g==",
      "dev": true,
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-writer": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/conventional-changelog-writer/-/conventional-changelog-writer-4.1.0.tgz",
      "integrity": "sha512-WwKcUp7WyXYGQmkLsX4QmU42AZ1lqlvRW9mqoyiQzdD+rJWbTepdWoKJuwXTS+yq79XKnQNa93/roViPQrAQgw==",
      "dev": true,
      "dependencies": {
        "compare-func": "^2.0.0",
        "conventional-commits-filter": "^2.0.7",
        "dateformat": "^3.0.0",
        "handlebars": "^4.7.6",
        "json-stringify-safe": "^5.0.1",
        "lodash": "^4.17.15",
        "meow": "^8.0.0",
        "semver": "^6.0.0",
        "split": "^1.0.0",
        "through2": "^4.0.0"
      },
      "bin": {
        "conventional-changelog-writer": "cli.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-writer/node_modules/hosted-git-info": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.0.2.tgz",
      "integrity": "sha512-c9OGXbZ3guC/xOlCg1Ci/VgWlwsqDv1yMQL1CWqXDL0hDjXuNcq0zuR4xqPSuasI3kqFDhqSyTjREz5gzq0fXg==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-writer/node_modules/meow": {
      "version": "8.1.2",
      "resolved": "https://registry.npmjs.org/meow/-/meow-8.1.2.tgz",
      "integrity": "sha512-r85E3NdZ+mpYk1C6RjPFEMSE+s1iZMuHtsHAqY0DT3jZczl0diWUZ8g6oU7h0M9cD2EL+PzaYghhCLzR0ZNn5Q==",
      "dev": true,
      "dependencies": {
        "@types/minimist": "^1.2.0",
        "camelcase-keys": "^6.2.2",
        "decamelize-keys": "^1.1.0",
        "hard-rejection": "^2.1.0",
        "minimist-options": "4.1.0",
        "normalize-package-data": "^3.0.0",
        "read-pkg-up": "^7.0.1",
        "redent": "^3.0.0",
        "trim-newlines": "^3.0.0",
        "type-fest": "^0.18.0",
        "yargs-parser": "^20.2.3"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/conventional-changelog-writer/node_modules/normalize-package-data": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.2.tgz",
      "integrity": "sha512-6CdZocmfGaKnIHPVFhJJZ3GuR8SsLKvDANFp47Jmy51aKIr8akjAWTSxtpI+MBgBFdSMRyo4hMpDlT6dTffgZg==",
      "dev": true,
      "dependencies": {
        "hosted-git-info": "^4.0.1",
        "resolve": "^1.20.0",
        "semver": "^7.3.4",
        "validate-npm-package-license": "^3.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-writer/node_modules/normalize-package-data/node_modules/semver": {
      "version": "7.3.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
      "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-changelog-writer/node_modules/read-pkg-up": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
      "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
      "dev": true,
      "dependencies": {
        "find-up": "^4.1.0",
        "read-pkg": "^5.2.0",
        "type-fest": "^0.8.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/conventional-changelog-writer/node_modules/read-pkg-up/node_modules/type-fest": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/conventional-changelog-writer/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/conventional-changelog-writer/node_modules/type-fest": {
      "version": "0.18.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.18.1.tgz",
      "integrity": "sha512-OIAYXk8+ISY+qTOwkHtKqzAuxchoMiD9Udx+FSGQDuiRR+PJKJHc2NJAXlbhkGwTt/4/nKZxELY1w3ReWOL8mw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/conventional-commit-types": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/conventional-commit-types/-/conventional-commit-types-3.0.0.tgz",
      "integrity": "sha512-SmmCYnOniSsAa9GqWOeLqc179lfr5TRu5b4QFDkbsrJ5TZjPJx85wtOr3zn+1dbeNiXDKGPbZ72IKbPhLXh/Lg==",
      "dev": true
    },
    "node_modules/conventional-commits-filter": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/conventional-commits-filter/-/conventional-commits-filter-2.0.7.tgz",
      "integrity": "sha512-ASS9SamOP4TbCClsRHxIHXRfcGCnIoQqkvAzCSbZzTFLfcTqJVugB0agRgsEELsqaeWgsXv513eS116wnlSSPA==",
      "dev": true,
      "dependencies": {
        "lodash.ismatch": "^4.4.0",
        "modify-values": "^1.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-commits-parser": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/conventional-commits-parser/-/conventional-commits-parser-3.2.1.tgz",
      "integrity": "sha512-OG9kQtmMZBJD/32NEw5IhN5+HnBqVjy03eC+I71I0oQRFA5rOgA4OtPOYG7mz1GkCfCNxn3gKIX8EiHJYuf1cA==",
      "dev": true,
      "dependencies": {
        "is-text-path": "^1.0.1",
        "JSONStream": "^1.0.4",
        "lodash": "^4.17.15",
        "meow": "^8.0.0",
        "split2": "^3.0.0",
        "through2": "^4.0.0",
        "trim-off-newlines": "^1.0.0"
      },
      "bin": {
        "conventional-commits-parser": "cli.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-commits-parser/node_modules/hosted-git-info": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.0.2.tgz",
      "integrity": "sha512-c9OGXbZ3guC/xOlCg1Ci/VgWlwsqDv1yMQL1CWqXDL0hDjXuNcq0zuR4xqPSuasI3kqFDhqSyTjREz5gzq0fXg==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-commits-parser/node_modules/meow": {
      "version": "8.1.2",
      "resolved": "https://registry.npmjs.org/meow/-/meow-8.1.2.tgz",
      "integrity": "sha512-r85E3NdZ+mpYk1C6RjPFEMSE+s1iZMuHtsHAqY0DT3jZczl0diWUZ8g6oU7h0M9cD2EL+PzaYghhCLzR0ZNn5Q==",
      "dev": true,
      "dependencies": {
        "@types/minimist": "^1.2.0",
        "camelcase-keys": "^6.2.2",
        "decamelize-keys": "^1.1.0",
        "hard-rejection": "^2.1.0",
        "minimist-options": "4.1.0",
        "normalize-package-data": "^3.0.0",
        "read-pkg-up": "^7.0.1",
        "redent": "^3.0.0",
        "trim-newlines": "^3.0.0",
        "type-fest": "^0.18.0",
        "yargs-parser": "^20.2.3"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/conventional-commits-parser/node_modules/normalize-package-data": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.2.tgz",
      "integrity": "sha512-6CdZocmfGaKnIHPVFhJJZ3GuR8SsLKvDANFp47Jmy51aKIr8akjAWTSxtpI+MBgBFdSMRyo4hMpDlT6dTffgZg==",
      "dev": true,
      "dependencies": {
        "hosted-git-info": "^4.0.1",
        "resolve": "^1.20.0",
        "semver": "^7.3.4",
        "validate-npm-package-license": "^3.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-commits-parser/node_modules/read-pkg-up": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
      "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
      "dev": true,
      "dependencies": {
        "find-up": "^4.1.0",
        "read-pkg": "^5.2.0",
        "type-fest": "^0.8.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/conventional-commits-parser/node_modules/read-pkg-up/node_modules/type-fest": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/conventional-commits-parser/node_modules/type-fest": {
      "version": "0.18.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.18.1.tgz",
      "integrity": "sha512-OIAYXk8+ISY+qTOwkHtKqzAuxchoMiD9Udx+FSGQDuiRR+PJKJHc2NJAXlbhkGwTt/4/nKZxELY1w3ReWOL8mw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/conventional-recommended-bump": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/conventional-recommended-bump/-/conventional-recommended-bump-6.1.0.tgz",
      "integrity": "sha512-uiApbSiNGM/kkdL9GTOLAqC4hbptObFo4wW2QRyHsKciGAfQuLU1ShZ1BIVI/+K2BE/W1AWYQMCXAsv4dyKPaw==",
      "dev": true,
      "dependencies": {
        "concat-stream": "^2.0.0",
        "conventional-changelog-preset-loader": "^2.3.4",
        "conventional-commits-filter": "^2.0.7",
        "conventional-commits-parser": "^3.2.0",
        "git-raw-commits": "^2.0.8",
        "git-semver-tags": "^4.1.1",
        "meow": "^8.0.0",
        "q": "^1.5.1"
      },
      "bin": {
        "conventional-recommended-bump": "cli.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-recommended-bump/node_modules/hosted-git-info": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.0.2.tgz",
      "integrity": "sha512-c9OGXbZ3guC/xOlCg1Ci/VgWlwsqDv1yMQL1CWqXDL0hDjXuNcq0zuR4xqPSuasI3kqFDhqSyTjREz5gzq0fXg==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-recommended-bump/node_modules/meow": {
      "version": "8.1.2",
      "resolved": "https://registry.npmjs.org/meow/-/meow-8.1.2.tgz",
      "integrity": "sha512-r85E3NdZ+mpYk1C6RjPFEMSE+s1iZMuHtsHAqY0DT3jZczl0diWUZ8g6oU7h0M9cD2EL+PzaYghhCLzR0ZNn5Q==",
      "dev": true,
      "dependencies": {
        "@types/minimist": "^1.2.0",
        "camelcase-keys": "^6.2.2",
        "decamelize-keys": "^1.1.0",
        "hard-rejection": "^2.1.0",
        "minimist-options": "4.1.0",
        "normalize-package-data": "^3.0.0",
        "read-pkg-up": "^7.0.1",
        "redent": "^3.0.0",
        "trim-newlines": "^3.0.0",
        "type-fest": "^0.18.0",
        "yargs-parser": "^20.2.3"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/conventional-recommended-bump/node_modules/normalize-package-data": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.2.tgz",
      "integrity": "sha512-6CdZocmfGaKnIHPVFhJJZ3GuR8SsLKvDANFp47Jmy51aKIr8akjAWTSxtpI+MBgBFdSMRyo4hMpDlT6dTffgZg==",
      "dev": true,
      "dependencies": {
        "hosted-git-info": "^4.0.1",
        "resolve": "^1.20.0",
        "semver": "^7.3.4",
        "validate-npm-package-license": "^3.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/conventional-recommended-bump/node_modules/read-pkg-up": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
      "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
      "dev": true,
      "dependencies": {
        "find-up": "^4.1.0",
        "read-pkg": "^5.2.0",
        "type-fest": "^0.8.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/conventional-recommended-bump/node_modules/read-pkg-up/node_modules/type-fest": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/conventional-recommended-bump/node_modules/type-fest": {
      "version": "0.18.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.18.1.tgz",
      "integrity": "sha512-OIAYXk8+ISY+qTOwkHtKqzAuxchoMiD9Udx+FSGQDuiRR+PJKJHc2NJAXlbhkGwTt/4/nKZxELY1w3ReWOL8mw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/convert-source-map": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
      "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
      "dev": true,
      "dependencies": {
        "safe-buffer": "~5.1.1"
      }
    },
    "node_modules/convert-to-spaces": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/convert-to-spaces/-/convert-to-spaces-1.0.2.tgz",
      "integrity": "sha1-fj5Iu+bZl7FBfdyihoIEtNPYVxU=",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/copy-descriptor": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
      "dev": true
    },
    "node_modules/cosmiconfig": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.0.tgz",
      "integrity": "sha512-pondGvTuVYDk++upghXJabWzL6Kxu6f26ljFw64Swq9v6sQPUL3EUlVDV56diOjpCayKihL6hVe8exIACU4XcA==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "@types/parse-json": "^4.0.0",
        "import-fresh": "^3.2.1",
        "parse-json": "^5.0.0",
        "path-type": "^4.0.0",
        "yaml": "^1.10.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/cosmiconfig/node_modules/parse-json": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
      "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "@babel/code-frame": "^7.0.0",
        "error-ex": "^1.3.1",
        "json-parse-even-better-errors": "^2.3.0",
        "lines-and-columns": "^1.1.6"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/create-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
      "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",
      "dev": true
    },
    "node_modules/cross-spawn": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
      "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
      "dev": true,
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/cross-spawn/node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/crypto-random-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-2.0.0.tgz",
      "integrity": "sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cspell": {
      "version": "4.2.8",
      "resolved": "https://registry.npmjs.org/cspell/-/cspell-4.2.8.tgz",
      "integrity": "sha512-eqan8+lCU9bSp8Tl4+SR/ccBnuPyMmp7evck/RlMdFTjLh/s+3vQ5hQyBzbzK8w2MMqL84CymW7BwIOKjpylSg==",
      "dev": true,
      "dependencies": {
        "chalk": "^4.1.0",
        "commander": "^7.0.0",
        "comment-json": "^4.0.6",
        "cspell-glob": "^0.1.25",
        "cspell-lib": "^4.3.12",
        "fs-extra": "^9.1.0",
        "gensequence": "^3.1.1",
        "get-stdin": "^8.0.0",
        "glob": "^7.1.6",
        "minimatch": "^3.0.4"
      },
      "bin": {
        "cspell": "bin.js"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/cspell-glob": {
      "version": "0.1.25",
      "resolved": "https://registry.npmjs.org/cspell-glob/-/cspell-glob-0.1.25.tgz",
      "integrity": "sha512-/XaSHrGBpMJa+duFz3GKOWfrijrfdHT7a/XGgIcq3cymCSpOH+DPho42sl0jLI/hjM+8yv2m8aEoxRT8yVSnlg==",
      "dev": true,
      "dependencies": {
        "micromatch": "^4.0.2"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/cspell-io": {
      "version": "4.1.7",
      "resolved": "https://registry.npmjs.org/cspell-io/-/cspell-io-4.1.7.tgz",
      "integrity": "sha512-V0/tUu9FnIS3v+vAvDT6NNa14Nc/zUNX8+YUUOfFAiDJJTdqefmvcWjOJBIMYBf3wIk9iWLmLbMM+bNHqr7DSQ==",
      "dev": true,
      "dependencies": {
        "iconv-lite": "^0.6.2",
        "iterable-to-stream": "^1.0.1"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/cspell-lib": {
      "version": "4.3.12",
      "resolved": "https://registry.npmjs.org/cspell-lib/-/cspell-lib-4.3.12.tgz",
      "integrity": "sha512-yCCb6MoW1K8Tsr/WVEQoO4dfYhH9bCsjQayccb8MlyDaNNuWJHuX+gUGHsZSXSuChSh8PrTWKXJzs13/uM977g==",
      "dev": true,
      "dependencies": {
        "@cspell/dict-aws": "^1.0.13",
        "@cspell/dict-bash": "^1.0.11",
        "@cspell/dict-companies": "^1.0.35",
        "@cspell/dict-cpp": "^1.1.37",
        "@cspell/dict-cryptocurrencies": "^1.0.10",
        "@cspell/dict-csharp": "^1.0.10",
        "@cspell/dict-css": "^1.0.10",
        "@cspell/dict-django": "^1.0.25",
        "@cspell/dict-dotnet": "^1.0.24",
        "@cspell/dict-elixir": "^1.0.23",
        "@cspell/dict-en_us": "^1.2.39",
        "@cspell/dict-en-gb": "^1.1.27",
        "@cspell/dict-filetypes": "^1.1.5",
        "@cspell/dict-fonts": "^1.0.13",
        "@cspell/dict-fullstack": "^1.0.36",
        "@cspell/dict-golang": "^1.1.24",
        "@cspell/dict-haskell": "^1.0.12",
        "@cspell/dict-html": "^1.1.5",
        "@cspell/dict-html-symbol-entities": "^1.0.23",
        "@cspell/dict-java": "^1.0.22",
        "@cspell/dict-latex": "^1.0.23",
        "@cspell/dict-lorem-ipsum": "^1.0.22",
        "@cspell/dict-lua": "^1.0.16",
        "@cspell/dict-node": "^1.0.10",
        "@cspell/dict-npm": "^1.0.10",
        "@cspell/dict-php": "^1.0.23",
        "@cspell/dict-powershell": "^1.0.14",
        "@cspell/dict-python": "^1.0.32",
        "@cspell/dict-ruby": "^1.0.12",
        "@cspell/dict-rust": "^1.0.22",
        "@cspell/dict-scala": "^1.0.21",
        "@cspell/dict-software-terms": "^1.0.24",
        "@cspell/dict-typescript": "^1.0.16",
        "comment-json": "^4.1.0",
        "configstore": "^5.0.1",
        "cspell-io": "^4.1.7",
        "cspell-trie-lib": "^4.2.8",
        "cspell-util-bundle": "^4.1.11",
        "fs-extra": "^9.1.0",
        "gensequence": "^3.1.1",
        "minimatch": "^3.0.4",
        "resolve-from": "^5.0.0",
        "resolve-global": "^1.0.0",
        "vscode-uri": "^3.0.2"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/cspell-trie-lib": {
      "version": "4.2.8",
      "resolved": "https://registry.npmjs.org/cspell-trie-lib/-/cspell-trie-lib-4.2.8.tgz",
      "integrity": "sha512-Nt3c0gxOYXIc3/yhALDukpje1BgR6guvlUKWQO2zb0r7qRWpwUw2j2YM4dWbHQeH/3Hx5ei4Braa6cMaiJ5YBw==",
      "dev": true,
      "dependencies": {
        "gensequence": "^3.1.1"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/cspell-util-bundle": {
      "version": "4.1.11",
      "resolved": "https://registry.npmjs.org/cspell-util-bundle/-/cspell-util-bundle-4.1.11.tgz",
      "integrity": "sha512-or3OGKydZs1NwweMIgnA48k8H3F5zK4e5lonjUhpEzLYQZ2nB23decdoqZ8ogFC8pFTA40tZKDsMJ0b+65gX4Q==",
      "dev": true,
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/currently-unhandled": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/currently-unhandled/-/currently-unhandled-0.4.1.tgz",
      "integrity": "sha1-mI3zP+qxke95mmE2nddsF635V+o=",
      "dev": true,
      "dependencies": {
        "array-find-index": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/cz-conventional-changelog": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/cz-conventional-changelog/-/cz-conventional-changelog-3.3.0.tgz",
      "integrity": "sha512-U466fIzU5U22eES5lTNiNbZ+d8dfcHcssH4o7QsdWaCcRs/feIPCxKYSWkYBNs5mny7MvEfwpTLWjvbm94hecw==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.4.1",
        "commitizen": "^4.0.3",
        "conventional-commit-types": "^3.0.0",
        "lodash.map": "^4.5.1",
        "longest": "^2.0.1",
        "word-wrap": "^1.0.3"
      },
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@commitlint/load": ">6.1.1"
      }
    },
    "node_modules/cz-conventional-changelog/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cz-conventional-changelog/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cz-conventional-changelog/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/cz-conventional-changelog/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/cz-conventional-changelog/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/cz-conventional-changelog/node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cz-conventional-changelog/node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/dargs": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/dargs/-/dargs-7.0.0.tgz",
      "integrity": "sha512-2iy1EkLdlBzQGvbweYRFxmFath8+K7+AKB0TlhHWkNuH+TmovaMH/Wp7V7R4u7f4SnX3OgLsU9t1NI9ioDnUpg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/date-time": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/date-time/-/date-time-3.1.0.tgz",
      "integrity": "sha512-uqCUKXE5q1PNBXjPqvwhwJf9SwMoAHBgWJ6DcrnS5o+W2JOiIILl0JEdVD8SGujrNS02GGxgwAg2PN2zONgtjg==",
      "dev": true,
      "dependencies": {
        "time-zone": "^1.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/dateformat": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/dateformat/-/dateformat-3.0.3.tgz",
      "integrity": "sha512-jyCETtSl3VMZMWeRo7iY1FL19ges1t55hMo5yaam4Jrsm5EPL89UQkoQRyiI+Yf4k8r2ZpdngkV8hr1lIdjb3Q==",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/debug": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
      "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
      "dev": true,
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/decamelize-keys": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/decamelize-keys/-/decamelize-keys-1.1.0.tgz",
      "integrity": "sha1-0XGoeTMlKAfrPLYdwcFEXQeN8tk=",
      "dev": true,
      "dependencies": {
        "decamelize": "^1.1.0",
        "map-obj": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/decamelize-keys/node_modules/map-obj": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz",
      "integrity": "sha1-2TPOuSBdgr3PSIb2dCvcK03qFG0=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
      "dev": true,
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/decompress-response": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
      "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
      "dev": true,
      "dependencies": {
        "mimic-response": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/dedent": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/dedent/-/dedent-0.7.0.tgz",
      "integrity": "sha1-JJXduvbrh0q7Dhvp3yLS5aVEMmw=",
      "dev": true
    },
    "node_modules/deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
      "dev": true,
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
      "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
      "dev": true
    },
    "node_modules/deepmerge": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.2.2.tgz",
      "integrity": "sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/default-require-extensions": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/default-require-extensions/-/default-require-extensions-3.0.0.tgz",
      "integrity": "sha512-ek6DpXq/SCpvjhpFsLFRVtIxJCRw6fUR42lYMVZuUMK7n8eMz4Uh5clckdBjEpLhn/gEBZo7hDJnJcwdKLKQjg==",
      "dev": true,
      "dependencies": {
        "strip-bom": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/default-require-extensions/node_modules/strip-bom": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
      "integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/defaults": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
      "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
      "dev": true,
      "dependencies": {
        "clone": "^1.0.2"
      }
    },
    "node_modules/defer-to-connect": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/defer-to-connect/-/defer-to-connect-1.1.3.tgz",
      "integrity": "sha512-0ISdNousHvZT2EiFlZeZAHBUvSxmKswVCEf8hW7KWgG4a8MVEu/3Vb6uWYozkjylyCxe0JBIiRB1jV45S70WVQ==",
      "dev": true
    },
    "node_modules/define-properties": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "dev": true,
      "dependencies": {
        "object-keys": "^1.0.12"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/define-property": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^1.0.2",
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/del": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/del/-/del-6.0.0.tgz",
      "integrity": "sha512-1shh9DQ23L16oXSZKB2JxpL7iMy2E0S9d517ptA1P8iw0alkPtQcrKH7ru31rYtKwF499HkTu+DRzq3TCKDFRQ==",
      "dev": true,
      "dependencies": {
        "globby": "^11.0.1",
        "graceful-fs": "^4.2.4",
        "is-glob": "^4.0.1",
        "is-path-cwd": "^2.2.0",
        "is-path-inside": "^3.0.2",
        "p-map": "^4.0.0",
        "rimraf": "^3.0.2",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/detect-file": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/detect-file/-/detect-file-1.0.0.tgz",
      "integrity": "sha1-8NZtA2cqglyxtzvbP+YjEMjlUrc=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/detect-indent": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/detect-indent/-/detect-indent-6.0.0.tgz",
      "integrity": "sha512-oSyFlqaTHCItVRGK5RmrmjB+CmaMOW7IaNA/kdxqhoa6d17j/5ce9O9eWXmV/KEdRwqpQA+Vqe8a8Bsybu4YnA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/detect-newline": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/detect-newline/-/detect-newline-3.1.0.tgz",
      "integrity": "sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/diff": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",
      "integrity": "sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==",
      "dev": true,
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "dev": true,
      "dependencies": {
        "path-type": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/dot-prop": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.3.0.tgz",
      "integrity": "sha512-QM8q3zDe58hqUqjraQOmzZ1LIH9SWQJTlEKCH4kJ2oQvLZk7RbQXvtDM2XEq3fwkV9CCvvH4LA0AV+ogFsBM2Q==",
      "dev": true,
      "dependencies": {
        "is-obj": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dotgitignore": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/dotgitignore/-/dotgitignore-2.1.0.tgz",
      "integrity": "sha512-sCm11ak2oY6DglEPpCB8TixLjWAxd3kJTs6UIcSasNYxXdFPV+YKlye92c8H4kKFqV5qYMIh7d+cYecEg0dIkA==",
      "dev": true,
      "dependencies": {
        "find-up": "^3.0.0",
        "minimatch": "^3.0.4"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/dotgitignore/node_modules/find-up": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
      "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
      "dev": true,
      "dependencies": {
        "locate-path": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/dotgitignore/node_modules/locate-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
      "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
      "dev": true,
      "dependencies": {
        "p-locate": "^3.0.0",
        "path-exists": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/dotgitignore/node_modules/p-locate": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
      "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
      "dev": true,
      "dependencies": {
        "p-limit": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/dotgitignore/node_modules/path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/duplexer3": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
      "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI=",
      "dev": true
    },
    "node_modules/email-addresses": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/email-addresses/-/email-addresses-3.1.0.tgz",
      "integrity": "sha512-k0/r7GrWVL32kZlGwfPNgB2Y/mMXVTq/decgLczm/j34whdaspNrZO8CnXPf1laaHxI6ptUlsnAxN+UAPw+fzg==",
      "dev": true
    },
    "node_modules/emittery": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/emittery/-/emittery-0.8.1.tgz",
      "integrity": "sha512-uDfvUjVrfGJJhymx/kz6prltenw1u7WrCg1oa94zYY8xxVpLLUu045LAT0dhDZdXG58/EpPL/5kA180fQ/qudg==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/emittery?sponsor=1"
      }
    },
    "node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true
    },
    "node_modules/end-of-stream": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
      "dev": true,
      "dependencies": {
        "once": "^1.4.0"
      }
    },
    "node_modules/enquirer": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/enquirer/-/enquirer-2.3.6.tgz",
      "integrity": "sha512-yjNnPr315/FjS4zIsUxYguYUPP2e1NK4d7E7ZOLiyYCcbFBiTMyID+2wvm2w6+pZ/odMA7cRkjhsPbltwBOrLg==",
      "dev": true,
      "dependencies": {
        "ansi-colors": "^4.1.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/equal-length": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/equal-length/-/equal-length-1.0.1.tgz",
      "integrity": "sha1-IcoRLUirJLTh5//A5TOdMf38J0w=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "dev": true,
      "dependencies": {
        "is-arrayish": "^0.2.1"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.18.0",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.18.0.tgz",
      "integrity": "sha512-LJzK7MrQa8TS0ja2w3YNLzUgJCGPdPOV1yVvezjNnS89D+VR08+Szt2mz3YB2Dck/+w5tfIq/RoUAFqJJGM2yw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "es-to-primitive": "^1.2.1",
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.2",
        "is-callable": "^1.2.3",
        "is-negative-zero": "^2.0.1",
        "is-regex": "^1.1.2",
        "is-string": "^1.0.5",
        "object-inspect": "^1.9.0",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.2",
        "string.prototype.trimend": "^1.0.4",
        "string.prototype.trimstart": "^1.0.4",
        "unbox-primitive": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
      "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
      "dev": true,
      "dependencies": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es6-error": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/es6-error/-/es6-error-4.1.1.tgz",
      "integrity": "sha512-Um/+FxMr9CISWh0bi5Zv0iOD+4cFh5qLeks1qhAopKVAJw3drgKbKySikp7wGhDL0HPeaja0P5ULZrxLkniUVg==",
      "dev": true
    },
    "node_modules/escalade": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
      "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-goat": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/escape-goat/-/escape-goat-2.1.1.tgz",
      "integrity": "sha512-8/uIhbG12Csjy2JEW7D9pHbreaVaS/OpN3ycnyvElTdwM5n6GY6W6e2IPemfvGZeUMqZ9A/3GqIZMgKnBhAw/Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
      "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/eslint": {
      "version": "7.23.0",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-7.23.0.tgz",
      "integrity": "sha512-kqvNVbdkjzpFy0XOszNwjkKzZ+6TcwCQ/h+ozlcIWwaimBBuhlQ4nN6kbiM2L+OjDcznkTJxzYfRFH92sx4a0Q==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "7.12.11",
        "@eslint/eslintrc": "^0.4.0",
        "ajv": "^6.10.0",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.0.1",
        "doctrine": "^3.0.0",
        "enquirer": "^2.3.5",
        "eslint-scope": "^5.1.1",
        "eslint-utils": "^2.1.0",
        "eslint-visitor-keys": "^2.0.0",
        "espree": "^7.3.1",
        "esquery": "^1.4.0",
        "esutils": "^2.0.2",
        "file-entry-cache": "^6.0.1",
        "functional-red-black-tree": "^1.0.1",
        "glob-parent": "^5.0.0",
        "globals": "^13.6.0",
        "ignore": "^4.0.6",
        "import-fresh": "^3.0.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "js-yaml": "^3.13.1",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash": "^4.17.21",
        "minimatch": "^3.0.4",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.1",
        "progress": "^2.0.0",
        "regexpp": "^3.1.0",
        "semver": "^7.2.1",
        "strip-ansi": "^6.0.0",
        "strip-json-comments": "^3.1.0",
        "table": "^6.0.4",
        "text-table": "^0.2.0",
        "v8-compile-cache": "^2.0.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-config-prettier": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/eslint-config-prettier/-/eslint-config-prettier-6.15.0.tgz",
      "integrity": "sha512-a1+kOYLR8wMGustcgAjdydMsQ2A/2ipRPwRKUmfYaSxc9ZPcrku080Ctl6zrZzZNs/U82MjSv+qKREkoq3bJaw==",
      "dev": true,
      "dependencies": {
        "get-stdin": "^6.0.0"
      },
      "bin": {
        "eslint-config-prettier-check": "bin/cli.js"
      },
      "peerDependencies": {
        "eslint": ">=3.14.1"
      }
    },
    "node_modules/eslint-config-prettier/node_modules/get-stdin": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-6.0.0.tgz",
      "integrity": "sha512-jp4tHawyV7+fkkSKyvjuLZswblUtz+SQKzSWnBbii16BuZksJlU1wuBYXY75r+duh/llF1ur6oNwi+2ZzjKZ7g==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/eslint-import-resolver-node": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.4.tgz",
      "integrity": "sha512-ogtf+5AB/O+nM6DIeBUNr2fuT7ot9Qg/1harBfBtaP13ekEWFQEEMP94BCB7zaNW3gyY+8SHYF00rnqYwXKWOA==",
      "dev": true,
      "dependencies": {
        "debug": "^2.6.9",
        "resolve": "^1.13.1"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
      "dev": true
    },
    "node_modules/eslint-module-utils": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.6.0.tgz",
      "integrity": "sha512-6j9xxegbqe8/kZY8cYpcp0xhbK0EgJlg3g9mib3/miLaExuuwc3n5UEfSnU6hWMbT0FAYVvDbL9RrRgpUeQIvA==",
      "dev": true,
      "dependencies": {
        "debug": "^2.6.9",
        "pkg-dir": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/eslint-module-utils/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/eslint-module-utils/node_modules/find-up": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
      "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
      "dev": true,
      "dependencies": {
        "locate-path": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/eslint-module-utils/node_modules/locate-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
      "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
      "dev": true,
      "dependencies": {
        "p-locate": "^2.0.0",
        "path-exists": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/eslint-module-utils/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
      "dev": true
    },
    "node_modules/eslint-module-utils/node_modules/p-limit": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
      "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
      "dev": true,
      "dependencies": {
        "p-try": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/eslint-module-utils/node_modules/p-locate": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
      "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
      "dev": true,
      "dependencies": {
        "p-limit": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/eslint-module-utils/node_modules/p-try": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
      "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/eslint-module-utils/node_modules/path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/eslint-module-utils/node_modules/pkg-dir": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-2.0.0.tgz",
      "integrity": "sha1-9tXREJ4Z1j7fQo4L1X4Sd3YVM0s=",
      "dev": true,
      "dependencies": {
        "find-up": "^2.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/eslint-plugin-eslint-comments": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-eslint-comments/-/eslint-plugin-eslint-comments-3.2.0.tgz",
      "integrity": "sha512-0jkOl0hfojIHHmEHgmNdqv4fmh7300NdpA9FFpF7zaoLvB/QeXOGNLIo86oAveJFrfB1p05kC8hpEMHM8DwWVQ==",
      "dev": true,
      "dependencies": {
        "escape-string-regexp": "^1.0.5",
        "ignore": "^5.0.5"
      },
      "engines": {
        "node": ">=6.5.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/mysticatea"
      },
      "peerDependencies": {
        "eslint": ">=4.19.1"
      }
    },
    "node_modules/eslint-plugin-eslint-comments/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/eslint-plugin-functional": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-functional/-/eslint-plugin-functional-3.2.1.tgz",
      "integrity": "sha512-uJ8W0FznWsKp4exxO79b0xSc1WNROzDiVNGgSFOwdZCBeUHQf89BqwqlshNW9aSz/kg2gVGs+Ue6AeTpNSFM/g==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/experimental-utils": "^4.9.1",
        "array.prototype.flatmap": "^1.2.4",
        "deepmerge": "^4.2.2",
        "escape-string-regexp": "^4.0.0",
        "object.fromentries": "^2.0.3"
      },
      "engines": {
        "node": ">=10.18.0"
      },
      "peerDependencies": {
        "eslint": "^5.0.0 || ^6.0.0 || ^7.0.0",
        "typescript": "^3.4.1 || ^4.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-functional/node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint-plugin-import": {
      "version": "2.22.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.22.1.tgz",
      "integrity": "sha512-8K7JjINHOpH64ozkAhpT3sd+FswIZTfMZTjdx052pnWrgRCVfp8op9tbjpAk3DdUeI/Ba4C8OjdC0r90erHEOw==",
      "dev": true,
      "dependencies": {
        "array-includes": "^3.1.1",
        "array.prototype.flat": "^1.2.3",
        "contains-path": "^0.1.0",
        "debug": "^2.6.9",
        "doctrine": "1.5.0",
        "eslint-import-resolver-node": "^0.3.4",
        "eslint-module-utils": "^2.6.0",
        "has": "^1.0.3",
        "minimatch": "^3.0.4",
        "object.values": "^1.1.1",
        "read-pkg-up": "^2.0.0",
        "resolve": "^1.17.0",
        "tsconfig-paths": "^3.9.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/doctrine": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-1.5.0.tgz",
      "integrity": "sha1-N53Ocw9hZvds76TmcHoVmwLFpvo=",
      "dev": true,
      "dependencies": {
        "esutils": "^2.0.2",
        "isarray": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
      "dev": true
    },
    "node_modules/eslint-scope": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
      "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
      "dev": true,
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^4.1.1"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/eslint-utils": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-2.1.0.tgz",
      "integrity": "sha512-w94dQYoauyvlDc43XnGB8lU3Zt713vNChgt4EWwhXAP2XkBvndfxF0AgIqKOOasjPIPzj9JqgwkwbCYD0/V3Zg==",
      "dev": true,
      "dependencies": {
        "eslint-visitor-keys": "^1.1.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/mysticatea"
      }
    },
    "node_modules/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz",
      "integrity": "sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-2.0.0.tgz",
      "integrity": "sha512-QudtT6av5WXels9WjIM7qz1XD1cWGvX4gGXvp/zBn9nXG02D0utdU3Em2m/QjTnrsk6bBjmCygl3rmj118msQQ==",
      "dev": true,
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/eslint/node_modules/@babel/code-frame": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.11.tgz",
      "integrity": "sha512-Zt1yodBx1UcyiePMSkWnU4hPqhwq7hGi2nFL1LeA3EUl+q2LQx16MISgJ0+z7dnmgvP9QtIleuETGOiOH1RcIw==",
      "dev": true,
      "dependencies": {
        "@babel/highlight": "^7.10.4"
      }
    },
    "node_modules/eslint/node_modules/ignore": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-4.0.6.tgz",
      "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/eslint/node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/espree": {
      "version": "7.3.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-7.3.1.tgz",
      "integrity": "sha512-v3JCNCE64umkFpmkFGqzVKsOT0tN1Zr+ueqLZfpV1Ob8e+CEgPWa+OxCoGH3tnhimMKIaBm4m/vaRpJ/krRz2g==",
      "dev": true,
      "dependencies": {
        "acorn": "^7.4.0",
        "acorn-jsx": "^5.3.1",
        "eslint-visitor-keys": "^1.3.0"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/espree/node_modules/acorn": {
      "version": "7.4.1",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
      "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/espree/node_modules/eslint-visitor-keys": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz",
      "integrity": "sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "dev": true,
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/esquery": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.4.0.tgz",
      "integrity": "sha512-cCDispWt5vHHtwMY2YrAQ4ibFkAL8RbH5YGBnZBc90MolvvfkkQcJro/aZiAQUlQ3qgrYS6D6v8Gc5G5CQsc9w==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esquery/node_modules/estraverse": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
      "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esrecurse/node_modules/estraverse": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
      "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
      "dev": true,
      "dependencies": {
        "debug": "^2.3.3",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "posix-character-classes": "^0.1.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/expand-brackets/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
      "dev": true
    },
    "node_modules/expand-tilde": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/expand-tilde/-/expand-tilde-2.0.2.tgz",
      "integrity": "sha1-l+gBqgUt8CRU3kawK/YhZCzchQI=",
      "dev": true,
      "dependencies": {
        "homedir-polyfill": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dev": true,
      "dependencies": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extend-shallow/node_modules/is-extendable": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
      "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
      "dev": true,
      "dependencies": {
        "is-plain-object": "^2.0.4"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extend-shallow/node_modules/is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "dev": true,
      "dependencies": {
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/external-editor": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
      "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
      "dev": true,
      "dependencies": {
        "chardet": "^0.7.0",
        "iconv-lite": "^0.4.24",
        "tmp": "^0.0.33"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/external-editor/node_modules/iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "dev": true,
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
      "dev": true,
      "dependencies": {
        "array-unique": "^0.3.2",
        "define-property": "^1.0.0",
        "expand-brackets": "^2.1.4",
        "extend-shallow": "^2.0.1",
        "fragment-cache": "^0.2.1",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true
    },
    "node_modules/fast-diff": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/fast-diff/-/fast-diff-1.2.0.tgz",
      "integrity": "sha512-xJuoT5+L99XlZ8twedaRf6Ax2TgQVxvgZOYoPKqZufmJib0tL2tegPBOZb1pVNgIhlqDlA0eO0c3wBvQcmzx4w==",
      "dev": true
    },
    "node_modules/fast-glob": {
      "version": "3.2.5",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.5.tgz",
      "integrity": "sha512-2DtFcgT68wiTTiwZ2hNdJfcHNke9XOfnwmBRWXhmeKM8rF0TGwmC/Qto3S7RoZKp5cilZbxzO5iTNTQsJ+EeDg==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.0",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.2",
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
      "dev": true
    },
    "node_modules/fastq": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.11.0.tgz",
      "integrity": "sha512-7Eczs8gIPDrVzT+EksYBcupqMyxSHXXrHOLRRxU2/DicV8789MRBRR8+Hc2uWzUupOs4YS4JzBmBxjjCVBxD/g==",
      "dev": true,
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/figures": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/figures/-/figures-3.2.0.tgz",
      "integrity": "sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==",
      "dev": true,
      "dependencies": {
        "escape-string-regexp": "^1.0.5"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/figures/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/file-type": {
      "version": "14.7.1",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-14.7.1.tgz",
      "integrity": "sha512-sXAMgFk67fQLcetXustxfKX+PZgHIUFn96Xld9uH8aXPdX3xOp0/jg9OdouVTvQrf7mrn+wAa4jN/y9fUOOiRA==",
      "dev": true,
      "dependencies": {
        "readable-web-to-node-stream": "^2.0.0",
        "strtok3": "^6.0.3",
        "token-types": "^2.0.0",
        "typedarray-to-buffer": "^3.1.5"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/file-type?sponsor=1"
      }
    },
    "node_modules/filename-reserved-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/filename-reserved-regex/-/filename-reserved-regex-1.0.0.tgz",
      "integrity": "sha1-5hz4BfDeHJhFZ9A4bcXfUO5a9+Q=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/filenamify": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/filenamify/-/filenamify-1.2.1.tgz",
      "integrity": "sha1-qfL/0RxQO+0wABUCknI3jx8TZaU=",
      "dev": true,
      "dependencies": {
        "filename-reserved-regex": "^1.0.0",
        "strip-outer": "^1.0.0",
        "trim-repeated": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/filenamify-url": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/filenamify-url/-/filenamify-url-1.0.0.tgz",
      "integrity": "sha1-syvYExnvWGO3MHi+1Q9GpPeXX1A=",
      "dev": true,
      "dependencies": {
        "filenamify": "^1.0.0",
        "humanize-url": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "dev": true,
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-cache-dir": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-3.3.1.tgz",
      "integrity": "sha512-t2GDMt3oGC/v+BMwzmllWDuJF/xcDtE5j/fCGbqDD7OLuJkj0cfh1YSA5VKPvwMeLFLNDBkwOKZ2X85jGLVftQ==",
      "dev": true,
      "dependencies": {
        "commondir": "^1.0.1",
        "make-dir": "^3.0.2",
        "pkg-dir": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/avajs/find-cache-dir?sponsor=1"
      }
    },
    "node_modules/find-node-modules": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/find-node-modules/-/find-node-modules-2.0.0.tgz",
      "integrity": "sha512-8MWIBRgJi/WpjjfVXumjPKCtmQ10B+fjx6zmSA+770GMJirLhWIzg8l763rhjl9xaeaHbnxPNRQKq2mgMhr+aw==",
      "dev": true,
      "dependencies": {
        "findup-sync": "^3.0.0",
        "merge": "^1.2.1"
      }
    },
    "node_modules/find-root": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/find-root/-/find-root-1.1.0.tgz",
      "integrity": "sha512-NKfW6bec6GfKc0SGx1e07QZY9PE99u0Bft/0rzSD5k3sO/vwkVUpDUKVm5Gpp5Ue3YfShPFTX2070tDs5kB9Ng==",
      "dev": true
    },
    "node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dev": true,
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/findup-sync": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/findup-sync/-/findup-sync-3.0.0.tgz",
      "integrity": "sha512-YbffarhcicEhOrm4CtrwdKBdCuz576RLdhJDsIfvNtxUuhdRet1qZcsMjqbePtAseKdAnDyM/IyXbu7PRPRLYg==",
      "dev": true,
      "dependencies": {
        "detect-file": "^1.0.0",
        "is-glob": "^4.0.0",
        "micromatch": "^3.0.4",
        "resolve-dir": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/findup-sync/node_modules/braces": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
      "dev": true,
      "dependencies": {
        "arr-flatten": "^1.1.0",
        "array-unique": "^0.3.2",
        "extend-shallow": "^2.0.1",
        "fill-range": "^4.0.0",
        "isobject": "^3.0.1",
        "repeat-element": "^1.1.2",
        "snapdragon": "^0.8.1",
        "snapdragon-node": "^2.0.1",
        "split-string": "^3.0.2",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/findup-sync/node_modules/braces/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/findup-sync/node_modules/fill-range": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
      "dev": true,
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1",
        "to-regex-range": "^2.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/findup-sync/node_modules/fill-range/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/findup-sync/node_modules/is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/findup-sync/node_modules/is-number/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/findup-sync/node_modules/micromatch": {
      "version": "3.1.10",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
      "dev": true,
      "dependencies": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "braces": "^2.3.1",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "extglob": "^2.0.4",
        "fragment-cache": "^0.2.1",
        "kind-of": "^6.0.2",
        "nanomatch": "^1.2.9",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/findup-sync/node_modules/to-regex-range": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "dev": true,
      "dependencies": {
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.0.4.tgz",
      "integrity": "sha512-dm9s5Pw7Jc0GvMYbshN6zchCA9RgQlzzEZX3vylR9IqFfS8XciblUXOKfW6SiuJ0e13eDYZoZV5wdrev7P3Nwg==",
      "dev": true,
      "dependencies": {
        "flatted": "^3.1.0",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.1.1.tgz",
      "integrity": "sha512-zAoAQiudy+r5SvnSw3KJy5os/oRJYHzrzja/tBDqrZtNhUw8bt6y8OBzMWcjWr+8liV8Eb6yOhw8WZ7VFZ5ZzA==",
      "dev": true
    },
    "node_modules/for-in": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/foreground-child": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-2.0.0.tgz",
      "integrity": "sha512-dCIq9FpEcyQyXKCkyzmlPTFNgrCzPudOe+mhvJU5zAtlBnGVy2yKxtfsxK2tQBThwq225jcvBjpw1Gr40uzZCA==",
      "dev": true,
      "dependencies": {
        "cross-spawn": "^7.0.0",
        "signal-exit": "^3.0.2"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/fragment-cache": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "dev": true,
      "dependencies": {
        "map-cache": "^0.2.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fromentries": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/fromentries/-/fromentries-1.3.2.tgz",
      "integrity": "sha512-cHEpEQHUg0f8XdtZCc2ZAhrHzKzT0MrFUTcvx+hfxYu7rGMDc5SKoXFh+n4YigxsHXRzc6OrCshdR1bWH6HHyg==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/fs-access": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/fs-access/-/fs-access-1.0.1.tgz",
      "integrity": "sha1-1qh/JiJxzv6+wwxVNAf7mV2od3o=",
      "dev": true,
      "dependencies": {
        "null-check": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fs-extra": {
      "version": "9.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-9.1.0.tgz",
      "integrity": "sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==",
      "dev": true,
      "dependencies": {
        "at-least-node": "^1.0.0",
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
      "dev": true
    },
    "node_modules/fsevents": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
      "dev": true,
      "hasInstallScript": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
      "dev": true
    },
    "node_modules/functional-red-black-tree": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/functional-red-black-tree/-/functional-red-black-tree-1.0.1.tgz",
      "integrity": "sha1-GwqzvVU7Kg1jmdKcDj6gslIHgyc=",
      "dev": true
    },
    "node_modules/gensequence": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/gensequence/-/gensequence-3.1.1.tgz",
      "integrity": "sha512-ys3h0hiteRwmY6BsvSttPmkhC0vEQHPJduANBRtH/dlDPZ0UBIb/dXy80IcckXyuQ6LKg+PloRqvGER9IS7F7g==",
      "dev": true,
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "dev": true,
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",
      "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-package-type": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz",
      "integrity": "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==",
      "dev": true,
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/get-pkg-repo": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/get-pkg-repo/-/get-pkg-repo-1.4.0.tgz",
      "integrity": "sha1-xztInAbYDMVTbCyFP54FIyBWly0=",
      "dev": true,
      "dependencies": {
        "hosted-git-info": "^2.1.4",
        "meow": "^3.3.0",
        "normalize-package-data": "^2.3.0",
        "parse-github-repo-url": "^1.3.0",
        "through2": "^2.0.0"
      },
      "bin": {
        "get-pkg-repo": "cli.js"
      }
    },
    "node_modules/get-pkg-repo/node_modules/camelcase": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-2.1.1.tgz",
      "integrity": "sha1-fB0W1nmhu+WcoCys7PsBHiAfWh8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/camelcase-keys": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-2.1.0.tgz",
      "integrity": "sha1-MIvur/3ygRkFHvodkyITyRuPkuc=",
      "dev": true,
      "dependencies": {
        "camelcase": "^2.0.0",
        "map-obj": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/find-up": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",
      "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
      "dev": true,
      "dependencies": {
        "path-exists": "^2.0.0",
        "pinkie-promise": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/get-stdin": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz",
      "integrity": "sha1-uWjGsKBDhDJJAui/Gl3zJXmkUP4=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/indent-string": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-2.1.0.tgz",
      "integrity": "sha1-ji1INIdCEhtKghi3oTfppSBJ3IA=",
      "dev": true,
      "dependencies": {
        "repeating": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/load-json-file": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",
      "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.2",
        "parse-json": "^2.2.0",
        "pify": "^2.0.0",
        "pinkie-promise": "^2.0.0",
        "strip-bom": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/map-obj": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz",
      "integrity": "sha1-2TPOuSBdgr3PSIb2dCvcK03qFG0=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/meow": {
      "version": "3.7.0",
      "resolved": "https://registry.npmjs.org/meow/-/meow-3.7.0.tgz",
      "integrity": "sha1-cstmi0JSKCkKu/qFaJJYcwioAfs=",
      "dev": true,
      "dependencies": {
        "camelcase-keys": "^2.0.0",
        "decamelize": "^1.1.2",
        "loud-rejection": "^1.0.0",
        "map-obj": "^1.0.1",
        "minimist": "^1.1.3",
        "normalize-package-data": "^2.3.4",
        "object-assign": "^4.0.1",
        "read-pkg-up": "^1.0.1",
        "redent": "^1.0.0",
        "trim-newlines": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/parse-json": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
      "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
      "dev": true,
      "dependencies": {
        "error-ex": "^1.2.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/path-exists": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",
      "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
      "dev": true,
      "dependencies": {
        "pinkie-promise": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/path-type": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",
      "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.2",
        "pify": "^2.0.0",
        "pinkie-promise": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/read-pkg": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz",
      "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",
      "dev": true,
      "dependencies": {
        "load-json-file": "^1.0.0",
        "normalize-package-data": "^2.3.2",
        "path-type": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/read-pkg-up": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz",
      "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",
      "dev": true,
      "dependencies": {
        "find-up": "^1.0.0",
        "read-pkg": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/readable-stream": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
      "dev": true,
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/get-pkg-repo/node_modules/redent": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/redent/-/redent-1.0.0.tgz",
      "integrity": "sha1-z5Fqsf1fHxbfsggi3W7H9zDCr94=",
      "dev": true,
      "dependencies": {
        "indent-string": "^2.1.0",
        "strip-indent": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "dev": true,
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/strip-bom": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz",
      "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",
      "dev": true,
      "dependencies": {
        "is-utf8": "^0.2.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/strip-indent": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-1.0.1.tgz",
      "integrity": "sha1-DHlipq3vp7vUrDZkYKY4VSrhoKI=",
      "dev": true,
      "dependencies": {
        "get-stdin": "^4.0.1"
      },
      "bin": {
        "strip-indent": "cli.js"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-pkg-repo/node_modules/through2": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
      "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
      "dev": true,
      "dependencies": {
        "readable-stream": "~2.3.6",
        "xtend": "~4.0.1"
      }
    },
    "node_modules/get-pkg-repo/node_modules/trim-newlines": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-1.0.0.tgz",
      "integrity": "sha1-WIeWa7WCpFA6QetST301ARgVphM=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-stdin": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-8.0.0.tgz",
      "integrity": "sha512-sY22aA6xchAzprjyqmSEQv4UbAAzRN0L2dQB0NlN5acTTK9Don6nhoc3eAbUnpZiCANAMfd/+40kVdKfFygohg==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/get-stream": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
      "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
      "dev": true,
      "dependencies": {
        "pump": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/get-value": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/gh-pages": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/gh-pages/-/gh-pages-3.1.0.tgz",
      "integrity": "sha512-3b1rly9kuf3/dXsT8+ZxP0UhNLOo1CItj+3e31yUVcaph/yDsJ9RzD7JOw5o5zpBTJVQLlJAASNkUfepi9fe2w==",
      "dev": true,
      "dependencies": {
        "async": "^2.6.1",
        "commander": "^2.18.0",
        "email-addresses": "^3.0.1",
        "filenamify-url": "^1.0.0",
        "find-cache-dir": "^3.3.1",
        "fs-extra": "^8.1.0",
        "globby": "^6.1.0"
      },
      "bin": {
        "gh-pages": "bin/gh-pages.js",
        "gh-pages-clean": "bin/gh-pages-clean.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/gh-pages/node_modules/array-union": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-1.0.2.tgz",
      "integrity": "sha1-mjRBDk9OPaI96jdb5b5w8kd47Dk=",
      "dev": true,
      "dependencies": {
        "array-uniq": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/gh-pages/node_modules/commander": {
      "version": "2.20.3",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
      "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
      "dev": true
    },
    "node_modules/gh-pages/node_modules/fs-extra": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
      "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^4.0.0",
        "universalify": "^0.1.0"
      },
      "engines": {
        "node": ">=6 <7 || >=8"
      }
    },
    "node_modules/gh-pages/node_modules/globby": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/globby/-/globby-6.1.0.tgz",
      "integrity": "sha1-9abXDoOV4hyFj7BInWTfAkJNUGw=",
      "dev": true,
      "dependencies": {
        "array-union": "^1.0.1",
        "glob": "^7.0.3",
        "object-assign": "^4.0.1",
        "pify": "^2.0.0",
        "pinkie-promise": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/gh-pages/node_modules/jsonfile": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
      "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
      "dev": true,
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/gh-pages/node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/gh-pages/node_modules/universalify": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
      "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
      "dev": true,
      "engines": {
        "node": ">= 4.0.0"
      }
    },
    "node_modules/git-raw-commits": {
      "version": "2.0.10",
      "resolved": "https://registry.npmjs.org/git-raw-commits/-/git-raw-commits-2.0.10.tgz",
      "integrity": "sha512-sHhX5lsbG9SOO6yXdlwgEMQ/ljIn7qMpAbJZCGfXX2fq5T8M5SrDnpYk9/4HswTildcIqatsWa91vty6VhWSaQ==",
      "dev": true,
      "dependencies": {
        "dargs": "^7.0.0",
        "lodash": "^4.17.15",
        "meow": "^8.0.0",
        "split2": "^3.0.0",
        "through2": "^4.0.0"
      },
      "bin": {
        "git-raw-commits": "cli.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/git-raw-commits/node_modules/hosted-git-info": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.0.2.tgz",
      "integrity": "sha512-c9OGXbZ3guC/xOlCg1Ci/VgWlwsqDv1yMQL1CWqXDL0hDjXuNcq0zuR4xqPSuasI3kqFDhqSyTjREz5gzq0fXg==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/git-raw-commits/node_modules/meow": {
      "version": "8.1.2",
      "resolved": "https://registry.npmjs.org/meow/-/meow-8.1.2.tgz",
      "integrity": "sha512-r85E3NdZ+mpYk1C6RjPFEMSE+s1iZMuHtsHAqY0DT3jZczl0diWUZ8g6oU7h0M9cD2EL+PzaYghhCLzR0ZNn5Q==",
      "dev": true,
      "dependencies": {
        "@types/minimist": "^1.2.0",
        "camelcase-keys": "^6.2.2",
        "decamelize-keys": "^1.1.0",
        "hard-rejection": "^2.1.0",
        "minimist-options": "4.1.0",
        "normalize-package-data": "^3.0.0",
        "read-pkg-up": "^7.0.1",
        "redent": "^3.0.0",
        "trim-newlines": "^3.0.0",
        "type-fest": "^0.18.0",
        "yargs-parser": "^20.2.3"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/git-raw-commits/node_modules/normalize-package-data": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.2.tgz",
      "integrity": "sha512-6CdZocmfGaKnIHPVFhJJZ3GuR8SsLKvDANFp47Jmy51aKIr8akjAWTSxtpI+MBgBFdSMRyo4hMpDlT6dTffgZg==",
      "dev": true,
      "dependencies": {
        "hosted-git-info": "^4.0.1",
        "resolve": "^1.20.0",
        "semver": "^7.3.4",
        "validate-npm-package-license": "^3.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/git-raw-commits/node_modules/read-pkg-up": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
      "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
      "dev": true,
      "dependencies": {
        "find-up": "^4.1.0",
        "read-pkg": "^5.2.0",
        "type-fest": "^0.8.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/git-raw-commits/node_modules/read-pkg-up/node_modules/type-fest": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/git-raw-commits/node_modules/type-fest": {
      "version": "0.18.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.18.1.tgz",
      "integrity": "sha512-OIAYXk8+ISY+qTOwkHtKqzAuxchoMiD9Udx+FSGQDuiRR+PJKJHc2NJAXlbhkGwTt/4/nKZxELY1w3ReWOL8mw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/git-remote-origin-url": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/git-remote-origin-url/-/git-remote-origin-url-2.0.0.tgz",
      "integrity": "sha1-UoJlna4hBxRaERJhEq0yFuxfpl8=",
      "dev": true,
      "dependencies": {
        "gitconfiglocal": "^1.0.0",
        "pify": "^2.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/git-remote-origin-url/node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/git-semver-tags": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/git-semver-tags/-/git-semver-tags-4.1.1.tgz",
      "integrity": "sha512-OWyMt5zBe7xFs8vglMmhM9lRQzCWL3WjHtxNNfJTMngGym7pC1kh8sP6jevfydJ6LP3ZvGxfb6ABYgPUM0mtsA==",
      "dev": true,
      "dependencies": {
        "meow": "^8.0.0",
        "semver": "^6.0.0"
      },
      "bin": {
        "git-semver-tags": "cli.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/git-semver-tags/node_modules/hosted-git-info": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.0.2.tgz",
      "integrity": "sha512-c9OGXbZ3guC/xOlCg1Ci/VgWlwsqDv1yMQL1CWqXDL0hDjXuNcq0zuR4xqPSuasI3kqFDhqSyTjREz5gzq0fXg==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/git-semver-tags/node_modules/meow": {
      "version": "8.1.2",
      "resolved": "https://registry.npmjs.org/meow/-/meow-8.1.2.tgz",
      "integrity": "sha512-r85E3NdZ+mpYk1C6RjPFEMSE+s1iZMuHtsHAqY0DT3jZczl0diWUZ8g6oU7h0M9cD2EL+PzaYghhCLzR0ZNn5Q==",
      "dev": true,
      "dependencies": {
        "@types/minimist": "^1.2.0",
        "camelcase-keys": "^6.2.2",
        "decamelize-keys": "^1.1.0",
        "hard-rejection": "^2.1.0",
        "minimist-options": "4.1.0",
        "normalize-package-data": "^3.0.0",
        "read-pkg-up": "^7.0.1",
        "redent": "^3.0.0",
        "trim-newlines": "^3.0.0",
        "type-fest": "^0.18.0",
        "yargs-parser": "^20.2.3"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/git-semver-tags/node_modules/normalize-package-data": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.2.tgz",
      "integrity": "sha512-6CdZocmfGaKnIHPVFhJJZ3GuR8SsLKvDANFp47Jmy51aKIr8akjAWTSxtpI+MBgBFdSMRyo4hMpDlT6dTffgZg==",
      "dev": true,
      "dependencies": {
        "hosted-git-info": "^4.0.1",
        "resolve": "^1.20.0",
        "semver": "^7.3.4",
        "validate-npm-package-license": "^3.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/git-semver-tags/node_modules/normalize-package-data/node_modules/semver": {
      "version": "7.3.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
      "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/git-semver-tags/node_modules/read-pkg-up": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
      "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
      "dev": true,
      "dependencies": {
        "find-up": "^4.1.0",
        "read-pkg": "^5.2.0",
        "type-fest": "^0.8.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/git-semver-tags/node_modules/read-pkg-up/node_modules/type-fest": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/git-semver-tags/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/git-semver-tags/node_modules/type-fest": {
      "version": "0.18.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.18.1.tgz",
      "integrity": "sha512-OIAYXk8+ISY+qTOwkHtKqzAuxchoMiD9Udx+FSGQDuiRR+PJKJHc2NJAXlbhkGwTt/4/nKZxELY1w3ReWOL8mw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/gitconfiglocal": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/gitconfiglocal/-/gitconfiglocal-1.0.0.tgz",
      "integrity": "sha1-QdBF84UaXqiPA/JMocYXgRRGS5s=",
      "dev": true,
      "dependencies": {
        "ini": "^1.3.2"
      }
    },
    "node_modules/gitconfiglocal/node_modules/ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
      "dev": true
    },
    "node_modules/glob": {
      "version": "7.1.6",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
      "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
      "dev": true,
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/global-dirs": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-3.0.0.tgz",
      "integrity": "sha512-v8ho2DS5RiCjftj1nD9NmnfaOzTdud7RRnVd9kFNOjqZbISlx5DQ+OrTkywgd0dIt7oFCvKetZSHoHcP3sDdiA==",
      "dev": true,
      "dependencies": {
        "ini": "2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/global-modules": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/global-modules/-/global-modules-1.0.0.tgz",
      "integrity": "sha512-sKzpEkf11GpOFuw0Zzjzmt4B4UZwjOcG757PPvrfhxcLFbq0wpsgpOqxpxtxFiCG4DtG93M6XRVbF2oGdev7bg==",
      "dev": true,
      "dependencies": {
        "global-prefix": "^1.0.1",
        "is-windows": "^1.0.1",
        "resolve-dir": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/global-prefix": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/global-prefix/-/global-prefix-1.0.2.tgz",
      "integrity": "sha1-2/dDxsFJklk8ZVVoy2btMsASLr4=",
      "dev": true,
      "dependencies": {
        "expand-tilde": "^2.0.2",
        "homedir-polyfill": "^1.0.1",
        "ini": "^1.3.4",
        "is-windows": "^1.0.1",
        "which": "^1.2.14"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/global-prefix/node_modules/ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
      "dev": true
    },
    "node_modules/globals": {
      "version": "13.7.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.7.0.tgz",
      "integrity": "sha512-Aipsz6ZKRxa/xQkZhNg0qIWXT6x6rD46f6x/PCnBomlttdIyAPak4YD9jTmKpZ72uROSMU87qJtcgpgHaVchiA==",
      "dev": true,
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globals/node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globby": {
      "version": "11.0.3",
      "resolved": "https://registry.npmjs.org/globby/-/globby-11.0.3.tgz",
      "integrity": "sha512-ffdmosjA807y7+lA1NM0jELARVmYul/715xiILEjo3hBLPTcirgQNnXECn5g3mtR8TOLCVbkfua1Hpen25/Xcg==",
      "dev": true,
      "dependencies": {
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.1.1",
        "ignore": "^5.1.4",
        "merge2": "^1.3.0",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/got": {
      "version": "9.6.0",
      "resolved": "https://registry.npmjs.org/got/-/got-9.6.0.tgz",
      "integrity": "sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==",
      "dev": true,
      "dependencies": {
        "@sindresorhus/is": "^0.14.0",
        "@szmarczak/http-timer": "^1.1.2",
        "cacheable-request": "^6.0.0",
        "decompress-response": "^3.3.0",
        "duplexer3": "^0.1.4",
        "get-stream": "^4.1.0",
        "lowercase-keys": "^1.0.1",
        "mimic-response": "^1.0.1",
        "p-cancelable": "^1.0.0",
        "to-readable-stream": "^1.0.0",
        "url-parse-lax": "^3.0.0"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.6",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.6.tgz",
      "integrity": "sha512-nTnJ528pbqxYanhpDYsi4Rd8MAeaBA67+RZ10CM1m3bTAVFEDcd5AuA4a6W5YkGZ1iNXHzZz8T6TBKLeBuNriQ==",
      "dev": true
    },
    "node_modules/handlebars": {
      "version": "4.7.7",
      "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.7.7.tgz",
      "integrity": "sha512-aAcXm5OAfE/8IXkcZvCepKU3VzW1/39Fb5ZuqMtgI/hT8X2YgoMvBY5dLhq/cpOvw7Lk1nK/UF71aLG/ZnVYRA==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.5",
        "neo-async": "^2.6.0",
        "source-map": "^0.6.1",
        "wordwrap": "^1.0.0"
      },
      "bin": {
        "handlebars": "bin/handlebars"
      },
      "engines": {
        "node": ">=0.4.7"
      },
      "optionalDependencies": {
        "uglify-js": "^3.1.4"
      }
    },
    "node_modules/hard-rejection": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/hard-rejection/-/hard-rejection-2.1.0.tgz",
      "integrity": "sha512-VIZB+ibDhx7ObhAe7OVtoEbuP4h/MuOTHJ+J8h/eBXotJYl0fBgR72xDFCKgIh22OJZIOVNxBMWuhAr10r8HdA==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/has-bigints": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.0.1.tgz",
      "integrity": "sha512-LSBS2LjbNBTf6287JEbEzvJgftkF5qFkmCo9hDRpAzKhUOlJ+hx8dd4USs00SgsUNwc4617J9ki5YtEClM2ffA==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-own-prop": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/has-own-prop/-/has-own-prop-2.0.0.tgz",
      "integrity": "sha512-Pq0h+hvsVm6dDEa8x82GnLSYHOzNDt7f0ddFa3FqcQlgzEiptPqL+XrOJNavjOzSYiYWIrgeVYYgGlLmnxwilQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.2.tgz",
      "integrity": "sha512-chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "dev": true,
      "dependencies": {
        "get-value": "^2.0.6",
        "has-values": "^1.0.0",
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "dev": true,
      "dependencies": {
        "is-number": "^3.0.0",
        "kind-of": "^4.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values/node_modules/is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values/node_modules/is-number/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values/node_modules/kind-of": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
      "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-yarn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/has-yarn/-/has-yarn-2.1.0.tgz",
      "integrity": "sha512-UqBRqi4ju7T+TqGNdqAO0PaSVGsDGJUBQvk9eUWNGRY1CFGDzYhLWoM7JQEemnlvVcv/YEmc2wNW8BC24EnUsw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/hasha": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/hasha/-/hasha-5.2.2.tgz",
      "integrity": "sha512-Hrp5vIK/xr5SkeN2onO32H0MgNZ0f17HRNH39WfL0SYUNOTZ5Lz1TJ8Pajo/87dYGEFlLMm7mIc/k/s6Bvz9HQ==",
      "dev": true,
      "dependencies": {
        "is-stream": "^2.0.0",
        "type-fest": "^0.8.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/hasha/node_modules/type-fest": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/highlight.js": {
      "version": "10.7.2",
      "resolved": "https://registry.npmjs.org/highlight.js/-/highlight.js-10.7.2.tgz",
      "integrity": "sha512-oFLl873u4usRM9K63j4ME9u3etNF0PLiJhSQ8rdfuL51Wn3zkD6drf9ZW0dOzjnZI22YYG24z30JcmfCZjMgYg==",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/homedir-polyfill": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/homedir-polyfill/-/homedir-polyfill-1.0.3.tgz",
      "integrity": "sha512-eSmmWE5bZTK2Nou4g0AI3zZ9rswp7GRKoKXS1BLUkvPviOqs4YTN1djQIqrXy9k5gEtdLPy86JjRwsNM9tnDcA==",
      "dev": true,
      "dependencies": {
        "parse-passwd": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/hosted-git-info": {
      "version": "2.8.9",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
      "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
      "dev": true
    },
    "node_modules/html-escaper": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
      "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==",
      "dev": true
    },
    "node_modules/http-cache-semantics": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",
      "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ==",
      "dev": true
    },
    "node_modules/http-proxy-agent": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-4.0.1.tgz",
      "integrity": "sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg==",
      "dev": true,
      "dependencies": {
        "@tootallnate/once": "1",
        "agent-base": "6",
        "debug": "4"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-4.0.0.tgz",
      "integrity": "sha512-zoDhWrkR3of1l9QAL8/scJZyLu8j/gBkcwcaQOZh7Gyh/+uJQzGVETdgT30akuwkpL8HTRfssqI3BZuV18teDg==",
      "dev": true,
      "dependencies": {
        "agent-base": "5",
        "debug": "4"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/https-proxy-agent/node_modules/agent-base": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-5.1.1.tgz",
      "integrity": "sha512-TMeqbNl2fMW0nMjTEPOwe3J/PRFP4vqeoNuQMG0HlMrtm5QxKqdvAkZ1pRBQ/ulIyDD5Yq0nJ7YbdD8ey0TO3g==",
      "dev": true,
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/humanize-url": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/humanize-url/-/humanize-url-1.0.1.tgz",
      "integrity": "sha1-9KuZ4NKIF0yk4eUEB8VfuuRk7/8=",
      "dev": true,
      "dependencies": {
        "normalize-url": "^1.0.0",
        "strip-url-auth": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/humanize-url/node_modules/normalize-url": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-1.9.1.tgz",
      "integrity": "sha1-LMDWazHqIwNkWENuNiDYWVTGbDw=",
      "dev": true,
      "dependencies": {
        "object-assign": "^4.0.1",
        "prepend-http": "^1.0.0",
        "query-string": "^4.1.0",
        "sort-keys": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/humanize-url/node_modules/prepend-http": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-1.0.4.tgz",
      "integrity": "sha1-1PRWKwzjaW5BrFLQ4ALlemNdxtw=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.2.tgz",
      "integrity": "sha512-2y91h5OpQlolefMPmUlivelittSWy0rP+oYVpn6A7GwVHNE8AWzoYOBNmlwks3LobaJxgHCYZAnyNo2GgpNRNQ==",
      "dev": true,
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ieee754": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/ignore": {
      "version": "5.1.8",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.1.8.tgz",
      "integrity": "sha512-BMpfD7PpiETpBl/A6S498BaIJ6Y/ABT93ETbby2fP00v4EbvPBXWEoaR1UBPKs3iR53pJY7EtZk5KACI57i1Uw==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/ignore-by-default": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-2.0.0.tgz",
      "integrity": "sha512-+mQSgMRiFD3L3AOxLYOCxjIq4OnAmo5CIuC+lj5ehCJcPtV++QacEV7FdpzvYxH6DaOySWzQU6RR0lPLy37ckA==",
      "dev": true,
      "engines": {
        "node": ">=10 <11 || >=12 <13 || >=14"
      }
    },
    "node_modules/ignore-walk": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-3.0.3.tgz",
      "integrity": "sha512-m7o6xuOaT1aqheYHKf8W6J5pYH85ZI9w077erOzLje3JsB1gkafkAhHHY19dqjulgIZHFm32Cp5uNZgcQqdJKw==",
      "dev": true,
      "dependencies": {
        "minimatch": "^3.0.4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
      "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
      "dev": true,
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/import-fresh/node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/import-lazy": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/import-lazy/-/import-lazy-2.1.0.tgz",
      "integrity": "sha1-BWmOPUXIjo1+nZLLBYTnfwlvPkM=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/import-local": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/import-local/-/import-local-3.0.2.tgz",
      "integrity": "sha512-vjL3+w0oulAVZ0hBHnxa/Nm5TAurf9YLQJDhqRZyqb+VKGOB6LU8t9H1Nr5CIo16vh9XfJTOoHwU0B71S557gA==",
      "dev": true,
      "dependencies": {
        "pkg-dir": "^4.2.0",
        "resolve-cwd": "^3.0.0"
      },
      "bin": {
        "import-local-fixture": "fixtures/cli.js"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
      "dev": true,
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/indent-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
      "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "dev": true,
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true
    },
    "node_modules/ini": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ini/-/ini-2.0.0.tgz",
      "integrity": "sha512-7PnF4oN3CvZF23ADhA5wRaYEQpJ8qygSkbtTXWBeXWXmEVRXK+1ITciHWwHhsjv1TmW0MgacIv6hEi5pX5NQdA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/inquirer": {
      "version": "6.5.2",
      "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-6.5.2.tgz",
      "integrity": "sha512-cntlB5ghuB0iuO65Ovoi8ogLHiWGs/5yNrtUcKjFhSSiVeAIVpD7koaSU9RM8mpXw5YDi9RdYXGQMaOURB7ycQ==",
      "dev": true,
      "dependencies": {
        "ansi-escapes": "^3.2.0",
        "chalk": "^2.4.2",
        "cli-cursor": "^2.1.0",
        "cli-width": "^2.0.0",
        "external-editor": "^3.0.3",
        "figures": "^2.0.0",
        "lodash": "^4.17.12",
        "mute-stream": "0.0.7",
        "run-async": "^2.2.0",
        "rxjs": "^6.4.0",
        "string-width": "^2.1.0",
        "strip-ansi": "^5.1.0",
        "through": "^2.3.6"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/inquirer/node_modules/ansi-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/cli-cursor": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
      "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
      "dev": true,
      "dependencies": {
        "restore-cursor": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/inquirer/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/inquirer/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/inquirer/node_modules/figures": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
      "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
      "dev": true,
      "dependencies": {
        "escape-string-regexp": "^1.0.5"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/mimic-fn": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
      "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/onetime": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
      "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
      "dev": true,
      "dependencies": {
        "mimic-fn": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/restore-cursor": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
      "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
      "dev": true,
      "dependencies": {
        "onetime": "^2.0.0",
        "signal-exit": "^3.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/string-width": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "dev": true,
      "dependencies": {
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^4.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/string-width/node_modules/strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/strip-ansi": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^4.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/inquirer/node_modules/strip-ansi/node_modules/ansi-regex": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
      "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/inquirer/node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/interpret": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/interpret/-/interpret-1.4.0.tgz",
      "integrity": "sha512-agE4QfB2Lkp9uICn7BAqoscw4SZP9kTE2hxiFI3jBPmXJfdqiahTbUuKGsMoN2GtqL9AxhYioAcVvgsb1HvRbA==",
      "dev": true,
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/irregular-plurals": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/irregular-plurals/-/irregular-plurals-3.2.0.tgz",
      "integrity": "sha512-YqTdPLfwP7YFN0SsD3QUVCkm9ZG2VzOXv3DOrw5G5mkMbVwptTwVcFv7/C0vOpBmgTxAeTG19XpUs1E522LW9Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-accessor-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
      "dev": true
    },
    "node_modules/is-bigint": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.0.1.tgz",
      "integrity": "sha512-J0ELF4yHFxHy0cmSxZuheDOz2luOdVvqjwmEcj8H/L1JHeuEDSDbeRP+Dk9kFVk5RTFzbucJ2Kb9F7ixY2QaCg==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.1.0.tgz",
      "integrity": "sha512-a7Uprx8UtD+HWdyYwnD1+ExtTgqQtD2k/1yJgtXP6wnMm8byhkoTZRl+95LLThpzNZJ5aEvi46cdH+ayMFRwmA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
      "dev": true
    },
    "node_modules/is-callable": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.3.tgz",
      "integrity": "sha512-J1DcMe8UYTBSrKezuIUTUwjXsho29693unXM2YhJUTR2txK/eG47bvNa/wipPFmZFgr/N6f1GA66dv0mEyTIyQ==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-ci": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
      "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
      "dev": true,
      "dependencies": {
        "ci-info": "^2.0.0"
      },
      "bin": {
        "is-ci": "bin.js"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.2.0.tgz",
      "integrity": "sha512-XRAfAdyyY5F5cOXn7hYQDqh2Xmii+DEfIcQGxK/uNwMHhIkPWO0g8msXcbzLe+MpGoR951MlqM/2iIlU4vKDdQ==",
      "dev": true,
      "dependencies": {
        "has": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-data-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.2.tgz",
      "integrity": "sha512-USlDT524woQ08aoZFzh3/Z6ch9Y/EWXEHQ/AaRN0SkKq4t2Jw2R2339tSXmwuVoY7LLlBCbOIlx2myP/L5zk0g==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-descriptor/node_modules/kind-of": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
      "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-docker": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.2.0.tgz",
      "integrity": "sha512-K4GwB4i/HzhAzwP/XSlspzRdFTI9N8OxJOyOU7Y5Rz+p+WBokXWVWblaJeBkggthmoSV0OoGTH5thJNvplpkvQ==",
      "dev": true,
      "bin": {
        "is-docker": "cli.js"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-error": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/is-error/-/is-error-2.2.2.tgz",
      "integrity": "sha512-IOQqts/aHWbiisY5DuPJQ0gcbvaLFCa7fBa9xoLfxBZvQ+ZI/Zh9xoI7Gk+G64N0FdK4AbibytHht2tWgpJWLg==",
      "dev": true
    },
    "node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finite": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-finite/-/is-finite-1.1.0.tgz",
      "integrity": "sha512-cdyMtqX/BOqqNBBiKlIVkytNHm49MtMlYyn1zxzvJKWmFMlGzm+ry5BBfYyeY9YmNKbRSo/o7OX9w9ale0wg3w==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
      "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
      "dev": true,
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-installed-globally": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.4.0.tgz",
      "integrity": "sha512-iwGqO3J21aaSkC7jWnHP/difazwS7SFeIqxv6wEtLU8Y5KlzFTjyqcSIT0d8s4+dDhKytsk9PJZ2BkS5eZwQRQ==",
      "dev": true,
      "dependencies": {
        "global-dirs": "^3.0.0",
        "is-path-inside": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-interactive": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-1.0.0.tgz",
      "integrity": "sha512-2HvIEKRoqS62guEC+qBjpvRubdX910WCMuJTZ+I9yvqKU2/12eSL549HMwtabb4oupdj2sMP50k+XJfB/8JE6w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.1.tgz",
      "integrity": "sha512-2z6JzQvZRa9A2Y7xC6dQQm4FSTSTNWjKIYYTt4246eMTJmIo0Q+ZyOsU66X8lxK1AbB92dFeglPLrhwpeRKO6w==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-npm": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/is-npm/-/is-npm-5.0.0.tgz",
      "integrity": "sha512-WW/rQLOazUq+ST/bCAVBp/2oMERWLsR7OrKyt052dNDk4DHcDE0/7QSXITlmi+VBcV13DfIbysG3tZJm5RfdBA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.0.4.tgz",
      "integrity": "sha512-zohwelOAur+5uXtk8O3GPQ1eAcu4ZX3UwxQhUlfFFMNpUd83gXgjbhJh6HmB6LUNV/ieOLQuDwJO3dWJosUeMw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-obj": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
      "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-path-cwd": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-path-cwd/-/is-path-cwd-2.2.0.tgz",
      "integrity": "sha512-w942bTcih8fdJPJmQHFzkS76NEP8Kzzvmw92cXsazb8intwLqPibPPdXf4ANdKV3rYMuuQYGIWtvz9JilB3NFQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-plain-obj": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
      "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-plain-object": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-5.0.0.tgz",
      "integrity": "sha512-VRSzKkbMm5jMDoKLbltAkFQ5Qr7VDiTFGXxYFXXowVj387GeGNOCsOH6Msy00SGZ3Fp84b1Naa1psqgcCIEP5Q==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "dev": true
    },
    "node_modules/is-regex": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.2.tgz",
      "integrity": "sha512-axvdhb5pdhEVThqJzYXwMlVuZwC+FF2DpcOhTS+y/8jVq4trxyPgfcwIxIKiyeuLlSQYKkmUaPQJ8ZE4yNKXDg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "has-symbols": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
      "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-string": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.5.tgz",
      "integrity": "sha512-buY6VNRjhQMiF1qWDouloZlQbRhDPCebwxSjxMjxgemYT46YMd2NR0/H+fBhEfWX4A/w9TBJ+ol+okqJKFE6vQ==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.3.tgz",
      "integrity": "sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==",
      "dev": true,
      "dependencies": {
        "has-symbols": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-text-path": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-text-path/-/is-text-path-1.0.1.tgz",
      "integrity": "sha1-Thqg+1G/vLPpJogAE5cgLBd1tm4=",
      "dev": true,
      "dependencies": {
        "text-extensions": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
      "dev": true
    },
    "node_modules/is-unicode-supported": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-0.1.0.tgz",
      "integrity": "sha512-knxG2q4UC3u8stRGyAVJCOdxFmv5DZiRcdlIaAQXAbSfJya+OhopNotLQrstBhququ4ZpuKbDc/8S6mgXgPFPw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-utf8": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
      "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",
      "dev": true
    },
    "node_modules/is-windows": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-wsl": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
      "integrity": "sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==",
      "dev": true,
      "dependencies": {
        "is-docker": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-yarn-global": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/is-yarn-global/-/is-yarn-global-0.3.0.tgz",
      "integrity": "sha512-VjSeb/lHmkoyd8ryPVIKvOCn4D1koMqY+vqyjjUfc3xyKtP4dYOxM44sZrnqQSzSds3xyOrUTLTC9LVCVgLngw==",
      "dev": true
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
      "dev": true
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
      "dev": true
    },
    "node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/istanbul-lib-coverage": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.0.0.tgz",
      "integrity": "sha512-UiUIqxMgRDET6eR+o5HbfRYP1l0hqkWOs7vNxC/mggutCMUIhWMm8gAHb8tHlyfD3/l6rlgNA5cKdDzEAf6hEg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-hook": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-hook/-/istanbul-lib-hook-3.0.0.tgz",
      "integrity": "sha512-Pt/uge1Q9s+5VAZ+pCo16TYMWPBIl+oaNIjgLQxcX0itS6ueeaA+pEfThZpH8WxhFgCiEb8sAJY6MdUKgiIWaQ==",
      "dev": true,
      "dependencies": {
        "append-transform": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-instrument": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-4.0.3.tgz",
      "integrity": "sha512-BXgQl9kf4WTCPCCpmFGoJkz/+uhvm7h7PFKUYxh7qarQd3ER33vHG//qaE8eN25l07YqZPpHXU9I09l/RD5aGQ==",
      "dev": true,
      "dependencies": {
        "@babel/core": "^7.7.5",
        "@istanbuljs/schema": "^0.1.2",
        "istanbul-lib-coverage": "^3.0.0",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-instrument/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/istanbul-lib-processinfo": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/istanbul-lib-processinfo/-/istanbul-lib-processinfo-2.0.2.tgz",
      "integrity": "sha512-kOwpa7z9hme+IBPZMzQ5vdQj8srYgAtaRqeI48NGmAQ+/5yKiHLV0QbYqQpxsdEF0+w14SoB8YbnHKcXE2KnYw==",
      "dev": true,
      "dependencies": {
        "archy": "^1.0.0",
        "cross-spawn": "^7.0.0",
        "istanbul-lib-coverage": "^3.0.0-alpha.1",
        "make-dir": "^3.0.0",
        "p-map": "^3.0.0",
        "rimraf": "^3.0.0",
        "uuid": "^3.3.3"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-processinfo/node_modules/p-map": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-3.0.0.tgz",
      "integrity": "sha512-d3qXVTF/s+W+CdJ5A29wywV2n8CQQYahlgz2bFiA+4eVNJbHJodPZ+/gXwPGh0bOqA+j8S+6+ckmvLGPk1QpxQ==",
      "dev": true,
      "dependencies": {
        "aggregate-error": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-report": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
      "integrity": "sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw==",
      "dev": true,
      "dependencies": {
        "istanbul-lib-coverage": "^3.0.0",
        "make-dir": "^3.0.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-lib-source-maps": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-4.0.0.tgz",
      "integrity": "sha512-c16LpFRkR8vQXyHZ5nLpY35JZtzj1PQY1iZmesUbf1FZHbIupcWfjgOXBY9YHkLEQ6puz1u4Dgj6qmU/DisrZg==",
      "dev": true,
      "dependencies": {
        "debug": "^4.1.1",
        "istanbul-lib-coverage": "^3.0.0",
        "source-map": "^0.6.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/istanbul-reports": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.0.2.tgz",
      "integrity": "sha512-9tZvz7AiR3PEDNGiV9vIouQ/EAcqMXFmkcA1CDFTwOB98OZVDL0PH9glHotf5Ugp6GCOTypfzGWI/OqjWNCRUw==",
      "dev": true,
      "dependencies": {
        "html-escaper": "^2.0.0",
        "istanbul-lib-report": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/iterable-to-stream": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/iterable-to-stream/-/iterable-to-stream-1.0.1.tgz",
      "integrity": "sha512-O62gD5ADMUGtJoOoM9U6LQ7i4byPXUNoHJ6mqsmkQJcom331ZJGDApWgDESWyBMEHEJRjtHozgIiTzYo9RU4UA==",
      "dev": true,
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/js-string-escape": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/js-string-escape/-/js-string-escape-1.0.1.tgz",
      "integrity": "sha1-4mJbrbwNZ8dTPp7cEGjFh65BN+8=",
      "dev": true,
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true
    },
    "node_modules/js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "dev": true,
      "dependencies": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
      "dev": true,
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
      "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg=",
      "dev": true
    },
    "node_modules/json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
      "dev": true
    },
    "node_modules/json-parse-even-better-errors": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
      "dev": true
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE=",
      "dev": true
    },
    "node_modules/json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
      "dev": true
    },
    "node_modules/json5": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
      "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "dev": true,
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/jsonparse": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/jsonparse/-/jsonparse-1.3.1.tgz",
      "integrity": "sha1-P02uSpH6wxX3EGL4UhzCOfE2YoA=",
      "dev": true,
      "engines": [
        "node >= 0.2.0"
      ]
    },
    "node_modules/JSONStream": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/JSONStream/-/JSONStream-1.3.5.tgz",
      "integrity": "sha512-E+iruNOY8VV9s4JEbe1aNEm6MiszPRr/UfcHMz0TQh1BXSxHK+ASV1R6W4HpjBhSeS+54PIsAMCBmwD06LLsqQ==",
      "dev": true,
      "dependencies": {
        "jsonparse": "^1.2.0",
        "through": ">=2.2.7 <3"
      },
      "bin": {
        "JSONStream": "bin.js"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/keyv": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.1.0.tgz",
      "integrity": "sha512-9ykJ/46SN/9KPM/sichzQ7OvXyGDYKGTaDlKMGCAlg2UK8KRy4jb0d8sFc+0Tt0YYnThq8X2RZgCg74RPxgcVA==",
      "dev": true,
      "dependencies": {
        "json-buffer": "3.0.0"
      }
    },
    "node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/latest-version": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/latest-version/-/latest-version-5.1.0.tgz",
      "integrity": "sha512-weT+r0kTkRQdCdYCNtkMwWXQTMEswKrFBkm4ckQOMVhhqhIMI1UT2hMj+1iigIhgSZm5gTmrRXBNoGUgaTY1xA==",
      "dev": true,
      "dependencies": {
        "package-json": "^6.3.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.1.6.tgz",
      "integrity": "sha1-HADHQ7QzzQpOgHWPe2SldEDZ/wA=",
      "dev": true
    },
    "node_modules/load-json-file": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-5.3.0.tgz",
      "integrity": "sha512-cJGP40Jc/VXUsp8/OrnyKyTZ1y6v/dphm3bioS+RrKXjK2BB6wHUd6JptZEFDGgGahMT+InnZO5i1Ei9mpC8Bw==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.15",
        "parse-json": "^4.0.0",
        "pify": "^4.0.1",
        "strip-bom": "^3.0.0",
        "type-fest": "^0.3.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dev": true,
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
      "dev": true
    },
    "node_modules/lodash.clonedeep": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.clonedeep/-/lodash.clonedeep-4.5.0.tgz",
      "integrity": "sha1-4j8/nE+Pvd6HJSnBBxhXoIblzO8=",
      "dev": true
    },
    "node_modules/lodash.flatten": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/lodash.flatten/-/lodash.flatten-4.4.0.tgz",
      "integrity": "sha1-8xwiIlqWMtK7+OSt2+8kCqdlph8=",
      "dev": true
    },
    "node_modules/lodash.flattendeep": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/lodash.flattendeep/-/lodash.flattendeep-4.4.0.tgz",
      "integrity": "sha1-+wMJF/hqMTTlvJvsDWngAT3f7bI=",
      "dev": true
    },
    "node_modules/lodash.ismatch": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/lodash.ismatch/-/lodash.ismatch-4.4.0.tgz",
      "integrity": "sha1-dWy1FQyjum8RCFp4hJZF8Yj4Xzc=",
      "dev": true
    },
    "node_modules/lodash.map": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/lodash.map/-/lodash.map-4.6.0.tgz",
      "integrity": "sha1-dx7Hg540c9nEzeKLGTlMNWL09tM=",
      "dev": true
    },
    "node_modules/lodash.truncate": {
      "version": "4.4.2",
      "resolved": "https://registry.npmjs.org/lodash.truncate/-/lodash.truncate-4.4.2.tgz",
      "integrity": "sha1-WjUNoLERO4N+z//VgSy+WNbq4ZM=",
      "dev": true
    },
    "node_modules/log-symbols": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.1.0.tgz",
      "integrity": "sha512-8XPvpAA8uyhfteu8pIvQxpJZ7SYYdpUivZpGy6sFsBuKRY/7rQGavedeB8aK+Zkyq6upMFVL/9AW6vOYzfRyLg==",
      "dev": true,
      "dependencies": {
        "chalk": "^4.1.0",
        "is-unicode-supported": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/longest": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/longest/-/longest-2.0.1.tgz",
      "integrity": "sha1-eB4YMpaqlPbU2RbcM10NF676I/g=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/loud-rejection": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/loud-rejection/-/loud-rejection-1.6.0.tgz",
      "integrity": "sha1-W0b4AUft7leIcPCG0Eghz5mOVR8=",
      "dev": true,
      "dependencies": {
        "currently-unhandled": "^0.4.1",
        "signal-exit": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/lowercase-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
      "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "dev": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/lunr": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/lunr/-/lunr-2.3.9.tgz",
      "integrity": "sha512-zTU3DaZaF3Rt9rhN3uBMGQD3dD2/vFQqnvZCDv4dl5iOzq2IZQqTxu90r4E5J+nP70J3ilqVCrbho2eWaeW8Ow==",
      "dev": true
    },
    "node_modules/make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "dev": true,
      "dependencies": {
        "semver": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/make-dir/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/make-error": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
      "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
      "dev": true
    },
    "node_modules/map-age-cleaner": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/map-age-cleaner/-/map-age-cleaner-0.1.3.tgz",
      "integrity": "sha512-bJzx6nMoP6PDLPBFmg7+xRKeFZvFboMrGlxmNj9ClvX53KrmvM5bXFXEWjbz4cz1AFn+jWJ9z/DJSz7hrs0w3w==",
      "dev": true,
      "dependencies": {
        "p-defer": "^1.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/map-cache": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/map-obj": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-4.2.1.tgz",
      "integrity": "sha512-+WA2/1sPmDj1dlvvJmB5G6JKfY9dpn7EVBUL06+y6PoljPkh+6V1QihwxNkbcGxCRjt2b0F9K0taiCuo7MbdFQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/map-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "dev": true,
      "dependencies": {
        "object-visit": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/marked": {
      "version": "1.2.9",
      "resolved": "https://registry.npmjs.org/marked/-/marked-1.2.9.tgz",
      "integrity": "sha512-H8lIX2SvyitGX+TRdtS06m1jHMijKN/XjfH6Ooii9fvxMlh8QdqBfBDkGUpMWH2kQNrtixjzYUa3SH8ROTgRRw==",
      "dev": true,
      "bin": {
        "marked": "bin/marked"
      },
      "engines": {
        "node": ">= 8.16.2"
      }
    },
    "node_modules/matcher": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/matcher/-/matcher-3.0.0.tgz",
      "integrity": "sha512-OkeDaAZ/bQCxeFAozM55PKcKU0yJMPGifLwV4Qgjitu+5MoAfSQN4lsLJeXZ1b8w0x+/Emda6MZgXS1jvsapng==",
      "dev": true,
      "dependencies": {
        "escape-string-regexp": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/matcher/node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/md5-hex": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/md5-hex/-/md5-hex-3.0.1.tgz",
      "integrity": "sha512-BUiRtTtV39LIJwinWBjqVsU9xhdnz7/i889V859IBFpuqGAj6LuOvHv5XLbgZ2R7ptJoJaEcxkv88/h25T7Ciw==",
      "dev": true,
      "dependencies": {
        "blueimp-md5": "^2.10.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/mem": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/mem/-/mem-8.1.0.tgz",
      "integrity": "sha512-FIkgXo0kTi3XpvaznV5Muk6Y6w8SkdmRXcY7ZLonQesuYezp59UooLxAVBcGuN6PH2tXN84mR3vyzSc6oSMUfA==",
      "dev": true,
      "dependencies": {
        "map-age-cleaner": "^0.1.3",
        "mimic-fn": "^3.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/mem?sponsor=1"
      }
    },
    "node_modules/mem/node_modules/mimic-fn": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-3.1.0.tgz",
      "integrity": "sha512-Ysbi9uYW9hFyfrThdDEQuykN4Ey6BuwPD2kpI5ES/nFTDn/98yxYNLZJcgUAKPT/mcrLLKaGzJR9YVxJrIdASQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/memorystream": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/memorystream/-/memorystream-0.3.1.tgz",
      "integrity": "sha1-htcJCzDORV1j+64S3aUaR93K+bI=",
      "dev": true,
      "engines": {
        "node": ">= 0.10.0"
      }
    },
    "node_modules/meow": {
      "version": "6.1.1",
      "resolved": "https://registry.npmjs.org/meow/-/meow-6.1.1.tgz",
      "integrity": "sha512-3YffViIt2QWgTy6Pale5QpopX/IvU3LPL03jOTqp6pGj3VjesdO/U8CuHMKpnQr4shCNCM5fd5XFFvIIl6JBHg==",
      "dev": true,
      "dependencies": {
        "@types/minimist": "^1.2.0",
        "camelcase-keys": "^6.2.2",
        "decamelize-keys": "^1.1.0",
        "hard-rejection": "^2.1.0",
        "minimist-options": "^4.0.2",
        "normalize-package-data": "^2.5.0",
        "read-pkg-up": "^7.0.1",
        "redent": "^3.0.0",
        "trim-newlines": "^3.0.0",
        "type-fest": "^0.13.1",
        "yargs-parser": "^18.1.3"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/meow/node_modules/camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/meow/node_modules/read-pkg-up": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
      "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
      "dev": true,
      "dependencies": {
        "find-up": "^4.1.0",
        "read-pkg": "^5.2.0",
        "type-fest": "^0.8.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/meow/node_modules/read-pkg-up/node_modules/type-fest": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/meow/node_modules/type-fest": {
      "version": "0.13.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.13.1.tgz",
      "integrity": "sha512-34R7HTnG0XIJcBSn5XhDd7nNFPRcXYRZrBB2O2jdKqYODldSzBAqzsWoZYYvduky73toYS/ESqxPvkDf/F0XMg==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/meow/node_modules/yargs-parser": {
      "version": "18.1.3",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
      "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
      "dev": true,
      "dependencies": {
        "camelcase": "^5.0.0",
        "decamelize": "^1.2.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/merge": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/merge/-/merge-1.2.1.tgz",
      "integrity": "sha512-VjFo4P5Whtj4vsLzsYBu5ayHhoHJ0UqNm7ibvShmbmoz7tGi0vXaoJbGdB+GmDMLUdg8DpQXEIeVDAe8MaABvQ==",
      "dev": true
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.2.tgz",
      "integrity": "sha512-y7FpHSbMUMoyPbYUSzO6PaZ6FyRnQOpHuKwbo1G+Knck95XVU4QAiKdGEnj5wwoS7PlOgthX/09u5iFJ+aYf5Q==",
      "dev": true,
      "dependencies": {
        "braces": "^3.0.1",
        "picomatch": "^2.0.5"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/mimic-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
      "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/mimic-response": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
      "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/min-indent": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/min-indent/-/min-indent-1.0.1.tgz",
      "integrity": "sha512-I9jwMn07Sy/IwOj3zVkVik2JTvgpaykDZEigL6Rx6N9LbMywwUSMtxET+7lVoDLLd3O3IXwJwvuuns8UB/HeAg==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
      "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw==",
      "dev": true
    },
    "node_modules/minimist-options": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/minimist-options/-/minimist-options-4.1.0.tgz",
      "integrity": "sha512-Q4r8ghd80yhO/0j1O3B2BjweX3fiHg9cdOwjJd2J76Q135c+NDxGCqdYKQ1SKBuFfgWbAUzBfvYjPUEeNgqN1A==",
      "dev": true,
      "dependencies": {
        "arrify": "^1.0.1",
        "is-plain-obj": "^1.1.0",
        "kind-of": "^6.0.3"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/minimist-options/node_modules/arrify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
      "integrity": "sha1-iYUI2iIm84DfkEcoRWhJwVAaSw0=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/mixin-deep": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
      "dev": true,
      "dependencies": {
        "for-in": "^1.0.2",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/mixin-deep/node_modules/is-extendable": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
      "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
      "dev": true,
      "dependencies": {
        "is-plain-object": "^2.0.4"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/mixin-deep/node_modules/is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "dev": true,
      "dependencies": {
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/modify-values": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/modify-values/-/modify-values-1.0.1.tgz",
      "integrity": "sha512-xV2bxeN6F7oYjZWTe/YPAy6MN2M+sL4u/Rlm2AHCIVGfo2p1yGmBHQ6vHehl4bRTZBdHu3TSkWdYgkwpYzAGSw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
      "dev": true
    },
    "node_modules/mute-stream": {
      "version": "0.0.7",
      "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.7.tgz",
      "integrity": "sha1-MHXOk7whuPq0PhvE2n6BFe0ee6s=",
      "dev": true
    },
    "node_modules/nanomatch": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
      "dev": true,
      "dependencies": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "fragment-cache": "^0.2.1",
        "is-windows": "^1.0.2",
        "kind-of": "^6.0.2",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
      "dev": true
    },
    "node_modules/nc-common": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/nc-common/-/nc-common-0.0.6.tgz",
      "integrity": "sha512-3AryS9uwa5NfISLxMciUonrH7YfXp+nlahB9T7girXIsLQrmwX4MdnuKs32akduCOGpKmjTJSWmATULbuMkbfw==",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/neo-async": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
      "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
      "dev": true
    },
    "node_modules/nice-try": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
      "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==",
      "dev": true
    },
    "node_modules/node-fetch": {
      "version": "2.6.7",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.7.tgz",
      "integrity": "sha512-ZjMPFEfVx5j+y2yF35Kzx5sF7kDzxuDj6ziH4FFbOp87zKDZNx8yExJIb05OGF4Nlt9IHFIMBkRl41VdvcNdbQ==",
      "dev": true,
      "dependencies": {
        "whatwg-url": "^5.0.0"
      },
      "engines": {
        "node": "4.x || >=6.0.0"
      },
      "peerDependencies": {
        "encoding": "^0.1.0"
      },
      "peerDependenciesMeta": {
        "encoding": {
          "optional": true
        }
      }
    },
    "node_modules/node-preload": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/node-preload/-/node-preload-0.2.1.tgz",
      "integrity": "sha512-RM5oyBy45cLEoHqCeh+MNuFAxO0vTFBLskvQbOKnEE7YTTSN4tbN8QWDIPQ6L+WvKsB/qLEGpYe2ZZ9d4W9OIQ==",
      "dev": true,
      "dependencies": {
        "process-on-spawn": "^1.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/node-releases": {
      "version": "1.1.71",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.71.tgz",
      "integrity": "sha512-zR6HoT6LrLCRBwukmrVbHv0EpEQjksO6GmFcZQQuCAy139BEsoVKPYnf3jongYW83fAa1torLGYwxxky/p28sg==",
      "dev": true
    },
    "node_modules/normalize-package-data": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
      "dev": true,
      "dependencies": {
        "hosted-git-info": "^2.1.4",
        "resolve": "^1.10.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      }
    },
    "node_modules/normalize-package-data/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true,
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-url": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-4.5.0.tgz",
      "integrity": "sha512-2s47yzUxdexf1OhyRi4Em83iQk0aPvwTddtFz4hnSSw9dCEsLEGf6SwIO8ss/19S9iBb5sJaOuTvTGDeZI00BQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/npm-run-all": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/npm-run-all/-/npm-run-all-4.1.5.tgz",
      "integrity": "sha512-Oo82gJDAVcaMdi3nuoKFavkIHBRVqQ1qvMb+9LHk/cF4P6B2m8aP04hGf7oL6wZ9BuGwX1onlLhpuoofSyoQDQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "chalk": "^2.4.1",
        "cross-spawn": "^6.0.5",
        "memorystream": "^0.3.1",
        "minimatch": "^3.0.4",
        "pidtree": "^0.3.0",
        "read-pkg": "^3.0.0",
        "shell-quote": "^1.6.1",
        "string.prototype.padend": "^3.0.0"
      },
      "bin": {
        "npm-run-all": "bin/npm-run-all/index.js",
        "run-p": "bin/run-p/index.js",
        "run-s": "bin/run-s/index.js"
      },
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/npm-run-all/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/npm-run-all/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/npm-run-all/node_modules/cross-spawn": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
      "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
      "dev": true,
      "dependencies": {
        "nice-try": "^1.0.4",
        "path-key": "^2.0.1",
        "semver": "^5.5.0",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      },
      "engines": {
        "node": ">=4.8"
      }
    },
    "node_modules/npm-run-all/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/npm-run-all/node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/load-json-file": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
      "integrity": "sha1-L19Fq5HjMhYjT9U62rZo607AmTs=",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.2",
        "parse-json": "^4.0.0",
        "pify": "^3.0.0",
        "strip-bom": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/path-key": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/path-type": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
      "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
      "dev": true,
      "dependencies": {
        "pify": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/pify": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
      "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/read-pkg": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
      "integrity": "sha1-nLxoaXj+5l0WwA4rGcI3/Pbjg4k=",
      "dev": true,
      "dependencies": {
        "load-json-file": "^4.0.0",
        "normalize-package-data": "^2.3.2",
        "path-type": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true,
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/npm-run-all/node_modules/shebang-command": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
      "dev": true,
      "dependencies": {
        "shebang-regex": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/npm-run-all/node_modules/shebang-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/npm-run-all/node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/null-check": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/null-check/-/null-check-1.0.0.tgz",
      "integrity": "sha1-l33/1xdgErnsMNKjnbXPcqBDnt0=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/nyc": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/nyc/-/nyc-15.1.0.tgz",
      "integrity": "sha512-jMW04n9SxKdKi1ZMGhvUTHBN0EICCRkHemEoE5jm6mTYcqcdas0ATzgUgejlQUHMvpnOZqGB5Xxsv9KxJW1j8A==",
      "dev": true,
      "dependencies": {
        "@istanbuljs/load-nyc-config": "^1.0.0",
        "@istanbuljs/schema": "^0.1.2",
        "caching-transform": "^4.0.0",
        "convert-source-map": "^1.7.0",
        "decamelize": "^1.2.0",
        "find-cache-dir": "^3.2.0",
        "find-up": "^4.1.0",
        "foreground-child": "^2.0.0",
        "get-package-type": "^0.1.0",
        "glob": "^7.1.6",
        "istanbul-lib-coverage": "^3.0.0",
        "istanbul-lib-hook": "^3.0.0",
        "istanbul-lib-instrument": "^4.0.0",
        "istanbul-lib-processinfo": "^2.0.2",
        "istanbul-lib-report": "^3.0.0",
        "istanbul-lib-source-maps": "^4.0.0",
        "istanbul-reports": "^3.0.2",
        "make-dir": "^3.0.0",
        "node-preload": "^0.2.1",
        "p-map": "^3.0.0",
        "process-on-spawn": "^1.0.0",
        "resolve-from": "^5.0.0",
        "rimraf": "^3.0.0",
        "signal-exit": "^3.0.2",
        "spawn-wrap": "^2.0.0",
        "test-exclude": "^6.0.0",
        "yargs": "^15.0.2"
      },
      "bin": {
        "nyc": "bin/nyc.js"
      },
      "engines": {
        "node": ">=8.9"
      }
    },
    "node_modules/nyc/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/nyc/node_modules/camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/nyc/node_modules/cliui": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz",
      "integrity": "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==",
      "dev": true,
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.0",
        "wrap-ansi": "^6.2.0"
      }
    },
    "node_modules/nyc/node_modules/p-map": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-3.0.0.tgz",
      "integrity": "sha512-d3qXVTF/s+W+CdJ5A29wywV2n8CQQYahlgz2bFiA+4eVNJbHJodPZ+/gXwPGh0bOqA+j8S+6+ckmvLGPk1QpxQ==",
      "dev": true,
      "dependencies": {
        "aggregate-error": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/wrap-ansi": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
      "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/y18n": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.3.tgz",
      "integrity": "sha512-JKhqTOwSrqNA1NY5lSztJ1GrBiUodLMmIZuLiDaMRJ+itFd+ABVE8XBjOvIWL+rSqNDC74LCSFmlb/U4UZ4hJQ==",
      "dev": true
    },
    "node_modules/nyc/node_modules/yargs": {
      "version": "15.4.1",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-15.4.1.tgz",
      "integrity": "sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A==",
      "dev": true,
      "dependencies": {
        "cliui": "^6.0.0",
        "decamelize": "^1.2.0",
        "find-up": "^4.1.0",
        "get-caller-file": "^2.0.1",
        "require-directory": "^2.1.1",
        "require-main-filename": "^2.0.0",
        "set-blocking": "^2.0.0",
        "string-width": "^4.2.0",
        "which-module": "^2.0.0",
        "y18n": "^4.0.0",
        "yargs-parser": "^18.1.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nyc/node_modules/yargs-parser": {
      "version": "18.1.3",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
      "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
      "dev": true,
      "dependencies": {
        "camelcase": "^5.0.0",
        "decamelize": "^1.2.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "dev": true,
      "dependencies": {
        "copy-descriptor": "^0.1.0",
        "define-property": "^0.2.5",
        "kind-of": "^3.0.3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.9.0.tgz",
      "integrity": "sha512-i3Bp9iTqwhaLZBxGkRfo5ZbE07BQRT7MGu8+nNgwW9ItGp1TzCTw2DLEoWwjClxBjOFI/hWljTAmYGCEwmtnOw==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object-visit": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "dev": true,
      "dependencies": {
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "has-symbols": "^1.0.1",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.4.tgz",
      "integrity": "sha512-EsFBshs5RUUpQEY1D4q/m59kMfz4YJvxuNCJcv/jWwOJr34EaVnG11ZrZa0UHB3wnzV1wx8m58T4hQL8IuNXlQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.2",
        "has": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.pick": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "dev": true,
      "dependencies": {
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object.values": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.1.3.tgz",
      "integrity": "sha512-nkF6PfDB9alkOUxpf1HNm/QlkeW3SReqL5WXeBLpEJJnlPSvRaDQpW3gQTksTN3fgJX4hL42RzKyOin6ff3tyw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.2",
        "has": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "dev": true,
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/onetime": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
      "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
      "dev": true,
      "dependencies": {
        "mimic-fn": "^2.1.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/open": {
      "version": "7.4.2",
      "resolved": "https://registry.npmjs.org/open/-/open-7.4.2.tgz",
      "integrity": "sha512-MVHddDVweXZF3awtlAS+6pgKLlm/JgxZ90+/NBurBoQctVOOB/zDdVjcyPzQ+0laDGbsWgrRkflI65sQeOgT9Q==",
      "dev": true,
      "dependencies": {
        "is-docker": "^2.0.0",
        "is-wsl": "^2.1.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/open-cli": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/open-cli/-/open-cli-6.0.1.tgz",
      "integrity": "sha512-A5h8MF3GrT1efn9TiO9LPajDnLtuEiGQT5G8TxWObBlgt1cZJF1YbQo/kNtsD1bJb7HxnT6SaSjzeLq0Rfhygw==",
      "dev": true,
      "dependencies": {
        "file-type": "^14.1.4",
        "get-stdin": "^7.0.0",
        "meow": "^6.1.0",
        "open": "^7.0.3",
        "temp-write": "^4.0.0"
      },
      "bin": {
        "open-cli": "cli.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/open-cli/node_modules/get-stdin": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-7.0.0.tgz",
      "integrity": "sha512-zRKcywvrXlXsA0v0i9Io4KDRaAw7+a1ZpjRwl9Wox8PFlVCCHra7E9c4kqXCoCM9nR5tBkaTTZRBoCm60bFqTQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.1",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.1.tgz",
      "integrity": "sha512-74RlY5FCnhq4jRxVUPKDaRwrVNXMqsGsiW6AJw4XK8hmtm10wC0ypZBLw5IIp85NZMr91+qd1RvvENwg7jjRFw==",
      "dev": true,
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.3"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/ora": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/ora/-/ora-5.4.0.tgz",
      "integrity": "sha512-1StwyXQGoU6gdjYkyVcqOLnVlbKj+6yPNNOxJVgpt9t4eksKjiriiHuxktLYkgllwk+D6MbC4ihH84L1udRXPg==",
      "dev": true,
      "dependencies": {
        "bl": "^4.1.0",
        "chalk": "^4.1.0",
        "cli-cursor": "^3.1.0",
        "cli-spinners": "^2.5.0",
        "is-interactive": "^1.0.0",
        "is-unicode-supported": "^0.1.0",
        "log-symbols": "^4.1.0",
        "strip-ansi": "^6.0.0",
        "wcwidth": "^1.0.1"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/os-tmpdir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/p-cancelable": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-1.1.0.tgz",
      "integrity": "sha512-s73XxOZ4zpt1edZYZzvhqFa6uvQc1vwUa0K0BdtIZgQMAJj9IbebH+JkgKZc9h+B05PKHLOTl4ajG1BmNrVZlw==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/p-defer": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-defer/-/p-defer-1.0.0.tgz",
      "integrity": "sha1-n26xgvbJqozXQwBKfU+WsZaw+ww=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-event": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/p-event/-/p-event-4.2.0.tgz",
      "integrity": "sha512-KXatOjCRXXkSePPb1Nbi0p0m+gQAwdlbhi4wQKJPI1HsMQS9g+Sqp2o+QHziPr7eYJyOZet836KoHEVM1mwOrQ==",
      "dev": true,
      "dependencies": {
        "p-timeout": "^3.1.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-finally": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
      "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dev": true,
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dev": true,
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/p-map": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
      "integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",
      "dev": true,
      "dependencies": {
        "aggregate-error": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-timeout": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/p-timeout/-/p-timeout-3.2.0.tgz",
      "integrity": "sha512-rhIwUycgwwKcP9yTOOFK/AKsAopjjCakVqLHePO3CC6Mir1Z99xT+R63jZxAT5lFZLa2inS5h+ZS2GvR99/FBg==",
      "dev": true,
      "dependencies": {
        "p-finally": "^1.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/package-hash": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/package-hash/-/package-hash-4.0.0.tgz",
      "integrity": "sha512-whdkPIooSu/bASggZ96BWVvZTRMOFxnyUG5PnTSGKoJE2gd5mbVNmR2Nj20QFzxYYgAXpoqC+AiXzl+UMRh7zQ==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.15",
        "hasha": "^5.0.0",
        "lodash.flattendeep": "^4.4.0",
        "release-zalgo": "^1.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/package-json": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/package-json/-/package-json-6.5.0.tgz",
      "integrity": "sha512-k3bdm2n25tkyxcjSKzB5x8kfVxlMdgsbPr0GkZcwHsLpba6cBjqCt1KlcChKEvxHIcTB1FVMuwoijZ26xex5MQ==",
      "dev": true,
      "dependencies": {
        "got": "^9.6.0",
        "registry-auth-token": "^4.0.0",
        "registry-url": "^5.0.0",
        "semver": "^6.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/package-json/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse-github-repo-url": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/parse-github-repo-url/-/parse-github-repo-url-1.4.1.tgz",
      "integrity": "sha1-nn2LslKmy2ukJZUGC3v23z28H1A=",
      "dev": true
    },
    "node_modules/parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
      "dev": true,
      "dependencies": {
        "error-ex": "^1.3.1",
        "json-parse-better-errors": "^1.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/parse-ms": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/parse-ms/-/parse-ms-2.1.0.tgz",
      "integrity": "sha512-kHt7kzLoS9VBZfUsiKjv43mr91ea+U05EyKkEtqp7vNbHxmaVuEqN7XxeEVnGrMtYOAxGrDElSi96K7EgO1zCA==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse-passwd": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/parse-passwd/-/parse-passwd-1.0.0.tgz",
      "integrity": "sha1-bVuTSkVpk7I9N/QKOC1vFmao5cY=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pascalcase": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/peek-readable": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/peek-readable/-/peek-readable-3.1.3.tgz",
      "integrity": "sha512-mpAcysyRJxmICBcBa5IXH7SZPvWkcghm6Fk8RekoS3v+BpbSzlZzuWbMx+GXrlUwESi9qHar4nVEZNMKylIHvg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Borewit"
      }
    },
    "node_modules/picomatch": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.2.tgz",
      "integrity": "sha512-q0M/9eZHzmr0AulXyPwNfZjtwZ/RBZlbN3K3CErVrk50T2ASYI7Bye0EvekFY3IP1Nt2DHu0re+V2ZHIpMkuWg==",
      "dev": true,
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pidtree": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/pidtree/-/pidtree-0.3.1.tgz",
      "integrity": "sha512-qQbW94hLHEqCg7nhby4yRC7G2+jYHY4Rguc2bjw7Uug4GIJuu1tvf2uHaZv5Q8zdt+WKJ6qK1FOI6amaWUo5FA==",
      "dev": true,
      "bin": {
        "pidtree": "bin/pidtree.js"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/pify": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
      "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pinkie": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pinkie-promise": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
      "dev": true,
      "dependencies": {
        "pinkie": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pkg-conf": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/pkg-conf/-/pkg-conf-3.1.0.tgz",
      "integrity": "sha512-m0OTbR/5VPNPqO1ph6Fqbj7Hv6QU7gR/tQW40ZqrL1rjgCU85W6C1bJn0BItuJqnR98PWzw7Z8hHeChD1WrgdQ==",
      "dev": true,
      "dependencies": {
        "find-up": "^3.0.0",
        "load-json-file": "^5.2.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pkg-conf/node_modules/find-up": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
      "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
      "dev": true,
      "dependencies": {
        "locate-path": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pkg-conf/node_modules/locate-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
      "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
      "dev": true,
      "dependencies": {
        "p-locate": "^3.0.0",
        "path-exists": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pkg-conf/node_modules/p-locate": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
      "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
      "dev": true,
      "dependencies": {
        "p-limit": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pkg-conf/node_modules/path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pkg-dir": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
      "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
      "dev": true,
      "dependencies": {
        "find-up": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/plur": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/plur/-/plur-4.0.0.tgz",
      "integrity": "sha512-4UGewrYgqDFw9vV6zNV+ADmPAUAfJPKtGvb/VdpQAx25X5f3xXdGdyOEVFwkl8Hl/tl7+xbeHqSEM+D5/TirUg==",
      "dev": true,
      "dependencies": {
        "irregular-plurals": "^3.2.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/posix-character-classes": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prepend-http": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
      "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/prettier": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-2.2.1.tgz",
      "integrity": "sha512-PqyhM2yCjg/oKkFPtTGUojv7gnZAoG80ttl45O6x2Ug/rMJw4wcc9k6aaf2hibP7BGVCCM33gZoGjyvt9mm16Q==",
      "dev": true,
      "bin": {
        "prettier": "bin-prettier.js"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/pretty-ms": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/pretty-ms/-/pretty-ms-7.0.1.tgz",
      "integrity": "sha512-973driJZvxiGOQ5ONsFhOF/DtzPMOMtgC11kCpUrPGMTgqp2q/1gwzCquocrN33is0VZ5GFHXZYMM9l6h67v2Q==",
      "dev": true,
      "dependencies": {
        "parse-ms": "^2.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
      "dev": true
    },
    "node_modules/process-on-spawn": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/process-on-spawn/-/process-on-spawn-1.0.0.tgz",
      "integrity": "sha512-1WsPDsUSMmZH5LeMLegqkPDrsGgsWwk1Exipy2hvB0o/F0ASzbpIctSCcZIK1ykJvtTJULEH+20WOFjMvGnCTg==",
      "dev": true,
      "dependencies": {
        "fromentries": "^1.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/progress": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/progress/-/progress-2.0.3.tgz",
      "integrity": "sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==",
      "dev": true,
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/pump": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
      "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
      "dev": true,
      "dependencies": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pupa": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/pupa/-/pupa-2.1.1.tgz",
      "integrity": "sha512-l1jNAspIBSFqbT+y+5FosojNpVpF94nlI+wDUpqP9enwOTfHx9f0gh5nB96vl+6yTpsJsypeNrwfzPrKuHB41A==",
      "dev": true,
      "dependencies": {
        "escape-goat": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/q": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/q/-/q-1.5.1.tgz",
      "integrity": "sha1-fjL3W0E4EpHQRhHxvxQQmsAGUdc=",
      "dev": true,
      "engines": {
        "node": ">=0.6.0",
        "teleport": ">=0.2.0"
      }
    },
    "node_modules/query-string": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/query-string/-/query-string-4.3.4.tgz",
      "integrity": "sha1-u7aTucqRXCMlFbIosaArYJBD2+s=",
      "dev": true,
      "dependencies": {
        "object-assign": "^4.1.0",
        "strict-uri-encode": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/quick-lru": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-4.0.1.tgz",
      "integrity": "sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/rc": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
      "dev": true,
      "dependencies": {
        "deep-extend": "^0.6.0",
        "ini": "~1.3.0",
        "minimist": "^1.2.0",
        "strip-json-comments": "~2.0.1"
      },
      "bin": {
        "rc": "cli.js"
      }
    },
    "node_modules/rc/node_modules/ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
      "dev": true
    },
    "node_modules/read-pkg": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-5.2.0.tgz",
      "integrity": "sha512-Ug69mNOpfvKDAc2Q8DRpMjjzdtrnv9HcSMX+4VsZxD1aZ6ZzrIE7rlzXBtWTyhULSMKg076AW6WR5iZpD0JiOg==",
      "dev": true,
      "dependencies": {
        "@types/normalize-package-data": "^2.4.0",
        "normalize-package-data": "^2.5.0",
        "parse-json": "^5.0.0",
        "type-fest": "^0.6.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/read-pkg-up": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-2.0.0.tgz",
      "integrity": "sha1-a3KoBImE4MQeeVEP1en6mbO1Sb4=",
      "dev": true,
      "dependencies": {
        "find-up": "^2.0.0",
        "read-pkg": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/read-pkg-up/node_modules/find-up": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
      "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
      "dev": true,
      "dependencies": {
        "locate-path": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/read-pkg-up/node_modules/load-json-file": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-2.0.0.tgz",
      "integrity": "sha1-eUfkIUmvgNaWy/eXvKq8/h/inKg=",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.2",
        "parse-json": "^2.2.0",
        "pify": "^2.0.0",
        "strip-bom": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/read-pkg-up/node_modules/locate-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
      "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
      "dev": true,
      "dependencies": {
        "p-locate": "^2.0.0",
        "path-exists": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/read-pkg-up/node_modules/p-limit": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
      "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
      "dev": true,
      "dependencies": {
        "p-try": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/read-pkg-up/node_modules/p-locate": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
      "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
      "dev": true,
      "dependencies": {
        "p-limit": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/read-pkg-up/node_modules/p-try": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
      "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/read-pkg-up/node_modules/parse-json": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
      "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
      "dev": true,
      "dependencies": {
        "error-ex": "^1.2.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/read-pkg-up/node_modules/path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/read-pkg-up/node_modules/path-type": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-2.0.0.tgz",
      "integrity": "sha1-8BLMuEFbcJb8LaoQVMPXI4lZTHM=",
      "dev": true,
      "dependencies": {
        "pify": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/read-pkg-up/node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/read-pkg-up/node_modules/read-pkg": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-2.0.0.tgz",
      "integrity": "sha1-jvHAYjxqbbDcZxPEv6xGMysjaPg=",
      "dev": true,
      "dependencies": {
        "load-json-file": "^2.0.0",
        "normalize-package-data": "^2.3.2",
        "path-type": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/read-pkg/node_modules/parse-json": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
      "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.0.0",
        "error-ex": "^1.3.1",
        "json-parse-even-better-errors": "^2.3.0",
        "lines-and-columns": "^1.1.6"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/read-pkg/node_modules/type-fest": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
      "integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/readable-stream": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
      "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
      "dev": true,
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/readable-web-to-node-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/readable-web-to-node-stream/-/readable-web-to-node-stream-2.0.0.tgz",
      "integrity": "sha512-+oZJurc4hXpaaqsN68GoZGQAQIA3qr09Or4fqEsargABnbe5Aau8hFn6ISVleT3cpY/0n/8drn7huyyEvTbghA==",
      "dev": true
    },
    "node_modules/readdirp": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.5.0.tgz",
      "integrity": "sha512-cMhu7c/8rdhkHXWsY+osBhfSy0JikwpHK/5+imo+LpeasTF8ouErHrlYkwT0++njiyuDvc7OFY5T3ukvZ8qmFQ==",
      "dev": true,
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/rechoir": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.6.2.tgz",
      "integrity": "sha1-hSBLVNuoLVdC4oyWdW70OvUOM4Q=",
      "dev": true,
      "dependencies": {
        "resolve": "^1.1.6"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/redent": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/redent/-/redent-3.0.0.tgz",
      "integrity": "sha512-6tDA8g98We0zd0GvVeMT9arEOnTw9qM03L9cJXaCjrip1OO764RDBLBfrB4cwzNGDj5OA5ioymC9GkizgWJDUg==",
      "dev": true,
      "dependencies": {
        "indent-string": "^4.0.0",
        "strip-indent": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/regex-not": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "dev": true,
      "dependencies": {
        "extend-shallow": "^3.0.2",
        "safe-regex": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/regexpp": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/regexpp/-/regexpp-3.1.0.tgz",
      "integrity": "sha512-ZOIzd8yVsQQA7j8GCSlPGXwg5PfmA1mrq0JP4nGhh54LaKN3xdai/vHUDu74pKwV8OxseMS65u2NImosQcSD0Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/mysticatea"
      }
    },
    "node_modules/registry-auth-token": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-4.2.1.tgz",
      "integrity": "sha512-6gkSb4U6aWJB4SF2ZvLb76yCBjcvufXBqvvEx1HbmKPkutswjW1xNVRY0+daljIYRbogN7O0etYSlbiaEQyMyw==",
      "dev": true,
      "dependencies": {
        "rc": "^1.2.8"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/registry-url": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-5.1.0.tgz",
      "integrity": "sha512-8acYXXTI0AkQv6RAOjE3vOaIXZkT9wo4LOFbBKYQEEnnMNBpKqdUrI6S4NT0KPIo/WVvJ5tE/X5LF/TQUf0ekw==",
      "dev": true,
      "dependencies": {
        "rc": "^1.2.8"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/release-zalgo": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/release-zalgo/-/release-zalgo-1.0.0.tgz",
      "integrity": "sha1-CXALflB0Mpc5Mw5TXFqQ+2eFFzA=",
      "dev": true,
      "dependencies": {
        "es6-error": "^4.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/repeat-element": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.4.tgz",
      "integrity": "sha512-LFiNfRcSu7KK3evMyYOuCzv3L10TW7yC1G2/+StMjK8Y6Vqd2MG7r/Qjw4ghtuCOjFvlnms/iMmLqpvW/ES/WQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
      "dev": true,
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/repeating": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/repeating/-/repeating-2.0.1.tgz",
      "integrity": "sha1-UhTFOpJtNVJwdSf7q0FdvAjQbdo=",
      "dev": true,
      "dependencies": {
        "is-finite": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-main-filename": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
      "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==",
      "dev": true
    },
    "node_modules/resolve": {
      "version": "1.20.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.20.0.tgz",
      "integrity": "sha512-wENBPt4ySzg4ybFQW2TT1zMQucPK95HSh/nq2CFTZVOGut2+pQvSsgtda4d26YrYcr067wjbmzOG8byDPBX63A==",
      "dev": true,
      "dependencies": {
        "is-core-module": "^2.2.0",
        "path-parse": "^1.0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-cwd": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
      "integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
      "dev": true,
      "dependencies": {
        "resolve-from": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/resolve-dir": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/resolve-dir/-/resolve-dir-1.0.1.tgz",
      "integrity": "sha1-eaQGRMNivoLybv/nOcm7U4IEb0M=",
      "dev": true,
      "dependencies": {
        "expand-tilde": "^2.0.0",
        "global-modules": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resolve-from": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
      "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/resolve-global": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-global/-/resolve-global-1.0.0.tgz",
      "integrity": "sha512-zFa12V4OLtT5XUX/Q4VLvTfBf+Ok0SPc1FNGM/z9ctUdiU618qwKpWnd0CHs3+RqROfyEg/DhuHbMWYqcgljEw==",
      "dev": true,
      "dependencies": {
        "global-dirs": "^0.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/resolve-global/node_modules/global-dirs": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-0.1.1.tgz",
      "integrity": "sha1-sxnA3UYH81PzvpzKTHL8FIxJ9EU=",
      "dev": true,
      "dependencies": {
        "ini": "^1.3.4"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-global/node_modules/ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
      "dev": true
    },
    "node_modules/resolve-url": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
      "deprecated": "https://github.com/lydell/resolve-url#deprecated",
      "dev": true
    },
    "node_modules/responselike": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/responselike/-/responselike-1.0.2.tgz",
      "integrity": "sha1-kYcg7ztjHFZCvgaPFa3lpG9Loec=",
      "dev": true,
      "dependencies": {
        "lowercase-keys": "^1.0.0"
      }
    },
    "node_modules/restore-cursor": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
      "integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
      "dev": true,
      "dependencies": {
        "onetime": "^5.1.0",
        "signal-exit": "^3.0.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ret": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
      "dev": true,
      "engines": {
        "node": ">=0.12"
      }
    },
    "node_modules/reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "dev": true,
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "dev": true,
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/run-async": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.4.1.tgz",
      "integrity": "sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ==",
      "dev": true,
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/rxjs": {
      "version": "6.6.7",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.7.tgz",
      "integrity": "sha512-hTdwr+7yYNIT5n4AMYp85KA6yw2Va0FLa3Rguvbpa4W3I5xynaBZo41cM3XM+4Q6fRMj3sBYIR1VAmZMXYJvRQ==",
      "dev": true,
      "dependencies": {
        "tslib": "^1.9.0"
      },
      "engines": {
        "npm": ">=2.0.0"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "dev": true
    },
    "node_modules/safe-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "dev": true,
      "dependencies": {
        "ret": "~0.1.10"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "dev": true
    },
    "node_modules/semver": {
      "version": "7.3.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
      "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/semver-diff": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/semver-diff/-/semver-diff-3.1.1.tgz",
      "integrity": "sha512-GX0Ix/CJcHyB8c4ykpHGIAvLyOwOobtM/8d+TQkAd81/bEjgPHrfba41Vpesr7jX/t8Uh+R3EX9eAS5be+jQYg==",
      "dev": true,
      "dependencies": {
        "semver": "^6.3.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/semver-diff/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/serialize-error": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/serialize-error/-/serialize-error-7.0.1.tgz",
      "integrity": "sha512-8I8TjW5KMOKsZQTvoxjuSIa7foAwPWGOts+6o7sgjz41/qMD9VQHEDxi6PBvK2l0MXUmqZyNpUK+T2tQaaElvw==",
      "dev": true,
      "dependencies": {
        "type-fest": "^0.13.1"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/serialize-error/node_modules/type-fest": {
      "version": "0.13.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.13.1.tgz",
      "integrity": "sha512-34R7HTnG0XIJcBSn5XhDd7nNFPRcXYRZrBB2O2jdKqYODldSzBAqzsWoZYYvduky73toYS/ESqxPvkDf/F0XMg==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",
      "dev": true
    },
    "node_modules/set-value": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
      "dev": true,
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "is-extendable": "^0.1.1",
        "is-plain-object": "^2.0.3",
        "split-string": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/set-value/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/set-value/node_modules/is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "dev": true,
      "dependencies": {
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shell-quote": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.7.3.tgz",
      "dev": true
    "node_modules/shelljs": {
      "resolved": "https://registry.npmjs.org/shelljs/-/shelljs-0.8.5.tgz",
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.7.3.tgz",
      "integrity": "sha512-Vpfqwm4EnqGdlsBFNmHhxhElJYrdfcxPThu+ryKS5J8L/fhAwLazFZtq+S+TWZ9ANj2piSQLGj6NQg+lKPmxrw==",
      "integrity": "sha512-TiwcRcrkhHvbrZbnRcFYMLl30Dfov3HKqzp5tO5b4pt6G/SezKcYhmDg15zXVBswHmctSAQKznqNW2LO5tTDow==",
      "dev": true,
      "dependencies": {
        "glob": "^7.0.0",
        "interpret": "^1.0.0",
        "rechoir": "^0.6.2"
      },
      "bin": {
        "shjs": "bin/shjs"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/signal-exit": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
      "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA==",
      "dev": true
    },
    "node_modules/slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/slice-ansi": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-3.0.0.tgz",
      "integrity": "sha512-pSyv7bSTC7ig9Dcgbw9AuRNUb5k5V6oDudjZoMBSr13qpLBG7tB+zgCkARjq7xIUgdz5P1Qe8u+rSGdouOOIyQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "astral-regex": "^2.0.0",
        "is-fullwidth-code-point": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/slice-ansi/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/snapdragon": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "dev": true,
      "dependencies": {
        "base": "^0.11.1",
        "debug": "^2.2.0",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "map-cache": "^0.2.2",
        "source-map": "^0.5.6",
        "source-map-resolve": "^0.5.0",
        "use": "^3.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "dev": true,
      "dependencies": {
        "define-property": "^1.0.0",
        "isobject": "^3.0.0",
        "snapdragon-util": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-util": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.2.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-util/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dev": true,
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/snapdragon/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
      "dev": true
    },
    "node_modules/snapdragon/node_modules/source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sort-keys": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-1.1.2.tgz",
      "integrity": "sha1-RBttTTRnmPG05J6JIK37oOVD+a0=",
      "dev": true,
      "dependencies": {
        "is-plain-obj": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-resolve": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
      "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
      "deprecated": "See https://github.com/lydell/source-map-resolve#deprecated",
      "dev": true,
      "dependencies": {
        "atob": "^2.1.2",
        "decode-uri-component": "^0.2.0",
        "resolve-url": "^0.2.1",
        "source-map-url": "^0.4.0",
        "urix": "^0.1.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.19",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
      "integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
      "dev": true,
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/source-map-url": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.1.tgz",
      "integrity": "sha512-cPiFOTLUKvJFIg4SKVScy4ilPPW6rFgMgfuZJPNoDuMs3nC1HbMUycBoJw77xFIp6z1UJQJOfx6C9GMH80DiTw==",
      "deprecated": "See https://github.com/lydell/source-map-url#deprecated",
      "dev": true
    },
    "node_modules/spawn-wrap": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/spawn-wrap/-/spawn-wrap-2.0.0.tgz",
      "integrity": "sha512-EeajNjfN9zMnULLwhZZQU3GWBoFNkbngTUPfaawT4RkMiviTxcX0qfhVbGey39mfctfDHkWtuecgQ8NJcyQWHg==",
      "dev": true,
      "dependencies": {
        "foreground-child": "^2.0.0",
        "is-windows": "^1.0.2",
        "make-dir": "^3.0.0",
        "rimraf": "^3.0.0",
        "signal-exit": "^3.0.2",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/spawn-wrap/node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/spdx-correct": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz",
      "integrity": "sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==",
      "dev": true,
      "dependencies": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-exceptions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
      "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==",
      "dev": true
    },
    "node_modules/spdx-expression-parse": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
      "dev": true,
      "dependencies": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-license-ids": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.7.tgz",
      "integrity": "sha512-U+MTEOO0AiDzxwFvoa4JVnMV6mZlJKk2sBLt90s7G0Gd0Mlknc7kxEn3nuDPNZRta7O2uy8oLcZLVT+4sqNZHQ==",
      "dev": true
    },
    "node_modules/split": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/split/-/split-1.0.1.tgz",
      "integrity": "sha512-mTyOoPbrivtXnwnIxZRFYRrPNtEFKlpB2fvjSnCQUiAA6qAZzqwna5envK4uk6OIeP17CsdF3rSBGYVBsU0Tkg==",
      "dev": true,
      "dependencies": {
        "through": "2"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/split-string": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "dev": true,
      "dependencies": {
        "extend-shallow": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/split2": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/split2/-/split2-3.2.2.tgz",
      "integrity": "sha512-9NThjpgZnifTkJpzTZ7Eue85S49QwpNhZTq6GRJwObb6jnLFNGB7Qm73V5HewTROPyxD0C29xqmaI68bQtV+hg==",
      "dev": true,
      "dependencies": {
        "readable-stream": "^3.0.0"
      }
    },
    "node_modules/sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
      "dev": true
    },
    "node_modules/stack-utils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-2.0.3.tgz",
      "integrity": "sha512-gL//fkxfWUsIlFL2Tl42Cl6+HFALEaB1FU76I/Fy+oZjRreP7OPMXFlGbxM7NQsI0ZpUfw76sHnv0WNYuTb7Iw==",
      "dev": true,
      "dependencies": {
        "escape-string-regexp": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/standard-version": {
      "version": "9.2.0",
      "resolved": "https://registry.npmjs.org/standard-version/-/standard-version-9.2.0.tgz",
      "integrity": "sha512-utJcqjk/wR4sePSwDoRcc5CzJ6S+kec5Hd0+1TJI+j1TRYuuptweAnEUdkkjGf2vYoGab2ezefyVtW065HZ1Uw==",
      "deprecated": "standard-version is deprecated. If you're a GitHub user, I recommend https://github.com/googleapis/release-please as an alternative.",
      "dev": true,
      "dependencies": {
        "chalk": "^2.4.2",
        "conventional-changelog": "3.1.24",
        "conventional-changelog-config-spec": "2.1.0",
        "conventional-changelog-conventionalcommits": "4.5.0",
        "conventional-recommended-bump": "6.1.0",
        "detect-indent": "^6.0.0",
        "detect-newline": "^3.1.0",
        "dotgitignore": "^2.1.0",
        "figures": "^3.1.0",
        "find-up": "^5.0.0",
        "fs-access": "^1.0.1",
        "git-semver-tags": "^4.0.0",
        "semver": "^7.1.1",
        "stringify-package": "^1.0.1",
        "yargs": "^16.0.0"
      },
      "bin": {
        "standard-version": "bin/cli.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/standard-version/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/standard-version/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/standard-version/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/standard-version/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/standard-version/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/standard-version/node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/standard-version/node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/standard-version/node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/standard-version/node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/standard-version/node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/standard-version/node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/static-extend": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "dev": true,
      "dependencies": {
        "define-property": "^0.2.5",
        "object-copy": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/static-extend/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stream-events": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/stream-events/-/stream-events-1.0.5.tgz",
      "integrity": "sha512-E1GUzBSgvct8Jsb3v2X15pjzN1tYebtbLaMg+eBOUOAxgbLoSbT2NS91ckc5lJD1KfLjId+jXJRgo0qnV5Nerg==",
      "dev": true,
      "dependencies": {
        "stubs": "^3.0.0"
      }
    },
    "node_modules/strict-uri-encode": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-1.1.0.tgz",
      "integrity": "sha1-J5siXfHVgrH1TmWt3UNS4Y+qBxM=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "dev": true,
      "dependencies": {
        "safe-buffer": "~5.2.0"
      }
    },
    "node_modules/string_decoder/node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/string-width": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
      "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
      "dev": true,
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string.prototype.padend": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/string.prototype.padend/-/string.prototype.padend-3.1.2.tgz",
      "integrity": "sha512-/AQFLdYvePENU3W5rgurfWSMU6n+Ww8n/3cUt7E+vPBB/D7YDG8x+qjoFs4M/alR2bW7Qg6xMjVwWUOvuQ0XpQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.4.tgz",
      "integrity": "sha512-y9xCjw1P23Awk8EvTpcyL2NIr1j7wJ39f+k6lvRnSMz+mz9CGz9NYPelDk42kOz6+ql8xjfK8oYzy3jAP5QU5A==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.4.tgz",
      "integrity": "sha512-jh6e984OBfvxS50tdY2nRZnoC5/mLFKOREQfw8t5yytkoUsJRNxvI/E39qu1sD0OtWI3OC0XgKSmcWwziwYuZw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/stringify-package": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/stringify-package/-/stringify-package-1.0.1.tgz",
      "integrity": "sha512-sa4DUQsYciMP1xhKWGuFM04fB0LG/9DlluZoSVywUMRNvzid6XucHK0/90xGxRoHrAaROrcHK1aPKaijCtSrhg==",
      "dev": true
    },
    "node_modules/strip-ansi": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
      "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-indent": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-3.0.0.tgz",
      "integrity": "sha512-laJTa3Jb+VQpaC6DseHhF7dXVqHTfJPCRDaEbid/drOhgitgYku/letMUqOXFoWV0zIIUbjpdH2t+tYj4bQMRQ==",
      "dev": true,
      "dependencies": {
        "min-indent": "^1.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/strip-outer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/strip-outer/-/strip-outer-1.0.1.tgz",
      "integrity": "sha512-k55yxKHwaXnpYGsOzg4Vl8+tDrWylxDEpknGjhTiZB8dFRU5rTo9CAzeycivxV3s+zlTKwrs6WxMxR95n26kwg==",
      "dev": true,
      "dependencies": {
        "escape-string-regexp": "^1.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/strip-outer/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/strip-url-auth": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/strip-url-auth/-/strip-url-auth-1.0.1.tgz",
      "integrity": "sha1-IrD6OkE4WzO+PzMVUbu4N/oM164=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/strtok3": {
      "version": "6.0.8",
      "resolved": "https://registry.npmjs.org/strtok3/-/strtok3-6.0.8.tgz",
      "integrity": "sha512-QLgv+oiXwXgCgp2PdPPa+Jpp4D9imK9e/0BsyfeFMr6QL6wMVqoVn9+OXQ9I7MZbmUzN6lmitTJ09uwS2OmGcw==",
      "dev": true,
      "dependencies": {
        "@tokenizer/token": "^0.1.1",
        "@types/debug": "^4.1.5",
        "peek-readable": "^3.1.3"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Borewit"
      }
    },
    "node_modules/stubs": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/stubs/-/stubs-3.0.0.tgz",
      "integrity": "sha1-6NK6H6nJBXAwPAMLaQD31fiavls=",
      "dev": true
    },
    "node_modules/supertap": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/supertap/-/supertap-2.0.0.tgz",
      "integrity": "sha512-jRzcXlCeDYvKoZGA5oRhYyR3jUIYu0enkSxtmAgHRlD7HwrovTpH4bDSi0py9FtuA8si9cW/fKommJHuaoDHJA==",
      "dev": true,
      "dependencies": {
        "arrify": "^2.0.1",
        "indent-string": "^4.0.0",
        "js-yaml": "^3.14.0",
        "serialize-error": "^7.0.1",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/table": {
      "version": "6.0.9",
      "resolved": "https://registry.npmjs.org/table/-/table-6.0.9.tgz",
      "integrity": "sha512-F3cLs9a3hL1Z7N4+EkSscsel3z55XT950AvB05bwayrNg5T1/gykXtigioTAjbltvbMSJvvhFCbnf6mX+ntnJQ==",
      "dev": true,
      "dependencies": {
        "ajv": "^8.0.1",
        "is-boolean-object": "^1.1.0",
        "is-number-object": "^1.0.4",
        "is-string": "^1.0.5",
        "lodash.clonedeep": "^4.5.0",
        "lodash.flatten": "^4.4.0",
        "lodash.truncate": "^4.4.2",
        "slice-ansi": "^4.0.0",
        "string-width": "^4.2.0"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/table/node_modules/ajv": {
      "version": "8.0.5",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.0.5.tgz",
      "integrity": "sha512-RkiLa/AeJx7+9OvniQ/qeWu0w74A8DiPPBclQ6ji3ZQkv5KamO+QGpqmi7O4JIw3rHGUXZ6CoP9tsAkn3gyazg==",
      "dev": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/table/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/table/node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true
    },
    "node_modules/table/node_modules/slice-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-4.0.0.tgz",
      "integrity": "sha512-qMCMfhY040cVHT43K9BFygqYbUPFZKHOg7K73mtTWJRb8pyP3fzf4Ixd5SzdEJQ6MRUg/WBnOLxghZtKKurENQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "astral-regex": "^2.0.0",
        "is-fullwidth-code-point": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/slice-ansi?sponsor=1"
      }
    },
    "node_modules/teeny-request": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/teeny-request/-/teeny-request-6.0.1.tgz",
      "integrity": "sha512-TAK0c9a00ELOqLrZ49cFxvPVogMUFaWY8dUsQc/0CuQPGF+BOxOQzXfE413BAk2kLomwNplvdtMpeaeGWmoc2g==",
      "dev": true,
      "dependencies": {
        "http-proxy-agent": "^4.0.0",
        "https-proxy-agent": "^4.0.0",
        "node-fetch": "^2.2.0",
        "stream-events": "^1.0.5",
        "uuid": "^3.3.2"
      }
    },
    "node_modules/temp-dir": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/temp-dir/-/temp-dir-2.0.0.tgz",
      "integrity": "sha512-aoBAniQmmwtcKp/7BzsH8Cxzv8OL736p7v1ihGb5e9DJ9kTwGWHrQrVB5+lfVDzfGrdRzXch+ig7LHaY1JTOrg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/temp-write": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/temp-write/-/temp-write-4.0.0.tgz",
      "integrity": "sha512-HIeWmj77uOOHb0QX7siN3OtwV3CTntquin6TNVg6SHOqCP3hYKmox90eeFOGaY1MqJ9WYDDjkyZrW6qS5AWpbw==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.15",
        "is-stream": "^2.0.0",
        "make-dir": "^3.0.0",
        "temp-dir": "^1.0.0",
        "uuid": "^3.3.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/temp-write/node_modules/temp-dir": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/temp-dir/-/temp-dir-1.0.0.tgz",
      "integrity": "sha1-CnwOom06Oa+n4OvqnB/AvE2qAR0=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/test-exclude": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
      "integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
      "dev": true,
      "dependencies": {
        "@istanbuljs/schema": "^0.1.2",
        "glob": "^7.1.4",
        "minimatch": "^3.0.4"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/text-extensions": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/text-extensions/-/text-extensions-1.9.0.tgz",
      "integrity": "sha512-wiBrwC1EhBelW12Zy26JeOUkQ5mRu+5o8rpsJk5+2t+Y5vE7e842qtZDQ2g1NpX/29HdyFeJ4nSIhI47ENSxlQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha1-f17oI66AUgfACvLfSoTsP8+lcLQ=",
      "dev": true
    },
    "node_modules/through": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
      "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU=",
      "dev": true
    },
    "node_modules/through2": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/through2/-/through2-4.0.2.tgz",
      "integrity": "sha512-iOqSav00cVxEEICeD7TjLB1sueEL+81Wpzp2bY17uZjZN0pWZPuo4suZ/61VujxmqSGFfgOcNuTZ85QJwNZQpw==",
      "dev": true,
      "dependencies": {
        "readable-stream": "3"
      }
    },
    "node_modules/time-zone": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/time-zone/-/time-zone-1.0.0.tgz",
      "integrity": "sha1-mcW/VZWJZq9tBtg73zgA3IL67F0=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/tmp": {
      "version": "0.0.33",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
      "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
      "dev": true,
      "dependencies": {
        "os-tmpdir": "~1.0.2"
      },
      "engines": {
        "node": ">=0.6.0"
      }
    },
    "node_modules/to-fast-properties": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/to-object-path": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-object-path/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-readable-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/to-readable-stream/-/to-readable-stream-1.0.0.tgz",
      "integrity": "sha512-Iq25XBt6zD5npPhlLVXGFN3/gyR2/qODcKNNyTMd4vbm39HUaOiAM4PMq0eMVC/Tkxz+Zjdsc55g9yyz+Yq00Q==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/to-regex": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "dev": true,
      "dependencies": {
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "regex-not": "^1.0.2",
        "safe-regex": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/token-types": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/token-types/-/token-types-2.1.1.tgz",
      "integrity": "sha512-wnQcqlreS6VjthyHO3Y/kpK/emflxDBNhlNUPfh7wE39KnuDdOituXomIbyI79vBtF0Ninpkh72mcuRHo+RG3Q==",
      "dev": true,
      "dependencies": {
        "@tokenizer/token": "^0.1.1",
        "ieee754": "^1.2.1"
      },
      "engines": {
        "node": ">=0.1.98"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Borewit"
      }
    },
    "node_modules/tr46": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
      "integrity": "sha1-gYT9NH2snNwYWZLzpmIuFLnZq2o=",
      "dev": true
    },
    "node_modules/trim-newlines": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-3.0.0.tgz",
      "integrity": "sha512-C4+gOpvmxaSMKuEf9Qc134F1ZuOHVXKRbtEflf4NTtuuJDEIJ9p5PXsalL8SkeRw+qit1Mo+yuvMPAKwWg/1hA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/trim-off-newlines": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/trim-off-newlines/-/trim-off-newlines-1.0.3.tgz",
      "integrity": "sha512-kh6Tu6GbeSNMGfrrZh6Bb/4ZEHV1QlB4xNDBeog8Y9/QwFlKTRyWvY3Fs9tRDAMZliVUwieMgEdIeL/FtqjkJg==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/trim-repeated": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/trim-repeated/-/trim-repeated-1.0.0.tgz",
      "integrity": "sha1-42RqLqTokTEr9+rObPsFOAvAHCE=",
      "dev": true,
      "dependencies": {
        "escape-string-regexp": "^1.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/trim-repeated/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/ts-node": {
      "version": "9.1.1",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-9.1.1.tgz",
      "integrity": "sha512-hPlt7ZACERQGf03M253ytLY3dHbGNGrAq9qIHWUY9XHYl1z7wYngSr3OQ5xmui8o2AaxsONxIzjafLUiWBo1Fg==",
      "dev": true,
      "dependencies": {
        "arg": "^4.1.0",
        "create-require": "^1.1.0",
        "diff": "^4.0.1",
        "make-error": "^1.1.1",
        "source-map-support": "^0.5.17",
        "yn": "3.1.1"
      },
      "bin": {
        "ts-node": "dist/bin.js",
        "ts-node-script": "dist/bin-script.js",
        "ts-node-transpile-only": "dist/bin-transpile.js",
        "ts-script": "dist/bin-script-deprecated.js"
      },
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "typescript": ">=2.7"
      }
    },
    "node_modules/tsconfig-paths": {
      "version": "3.9.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.9.0.tgz",
      "integrity": "sha512-dRcuzokWhajtZWkQsDVKbWyY+jgcLC5sqJhg2PSgf4ZkH2aHPvaOY8YWGhmjb68b5qqTfasSsDO9k7RUiEmZAw==",
      "dev": true,
      "dependencies": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.1",
        "minimist": "^1.2.0",
        "strip-bom": "^3.0.0"
      }
    },
    "node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
      "dev": true
    },
    "node_modules/tsutils": {
      "version": "3.21.0",
      "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-3.21.0.tgz",
      "integrity": "sha512-mHKK3iUXL+3UF6xL5k0PEhKRUBKPBCv/+RkEOpjRWxxx27KKRBmmA60A9pgOUvMi8GKhRMPEmjBRPzs2W7O1OA==",
      "dev": true,
      "dependencies": {
        "tslib": "^1.8.1"
      },
      "engines": {
        "node": ">= 6"
      },
      "peerDependencies": {
        "typescript": ">=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta"
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.3.1.tgz",
      "integrity": "sha512-cUGJnCdr4STbePCgqNFbpVNCepa+kAVohJs1sLhxzdH+gnEoOd8VhbYa7pD3zZYGiURWM2xzEII3fQcRizDkYQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",
      "dev": true
    },
    "node_modules/typedarray-to-buffer": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
      "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
      "dev": true,
      "dependencies": {
        "is-typedarray": "^1.0.0"
      }
    },
    "node_modules/typedoc": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/typedoc/-/typedoc-0.19.2.tgz",
      "integrity": "sha512-oDEg1BLEzi1qvgdQXc658EYgJ5qJLVSeZ0hQ57Eq4JXy6Vj2VX4RVo18qYxRWz75ifAaYuYNBUCnbhjd37TfOg==",
      "dev": true,
      "dependencies": {
        "fs-extra": "^9.0.1",
        "handlebars": "^4.7.6",
        "highlight.js": "^10.2.0",
        "lodash": "^4.17.20",
        "lunr": "^2.3.9",
        "marked": "^1.1.1",
        "minimatch": "^3.0.0",
        "progress": "^2.0.3",
        "semver": "^7.3.2",
        "shelljs": "^0.8.4",
        "typedoc-default-themes": "^0.11.4"
      },
      "bin": {
        "typedoc": "bin/typedoc"
      },
      "engines": {
        "node": ">= 10.0.0"
      },
      "peerDependencies": {
        "typescript": "3.9.x || 4.0.x"
      }
    },
    "node_modules/typedoc-default-themes": {
      "version": "0.11.4",
      "resolved": "https://registry.npmjs.org/typedoc-default-themes/-/typedoc-default-themes-0.11.4.tgz",
      "integrity": "sha512-Y4Lf+qIb9NTydrexlazAM46SSLrmrQRqWiD52593g53SsmUFioAsMWt8m834J6qsp+7wHRjxCXSZeiiW5cMUdw==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/typescript": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-4.2.4.tgz",
      "integrity": "sha512-V+evlYHZnQkaz8TRBuxTA92yZBPotr5H+WhQ7bD3hZUndx5tGOa1fuCgeSjxAzM1RiN5IzvadIXTVefuuwZCRg==",
      "dev": true,
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=4.2.0"
      }
    },
    "node_modules/uglify-js": {
      "version": "3.13.3",
      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.13.3.tgz",
      "integrity": "sha512-otIc7O9LyxpUcQoXzj2hL4LPWKklO6LJWoJUzNa8A17Xgi4fOeDC8FBDOLHnC/Slo1CQgsZMcM6as0M76BZaig==",
      "dev": true,
      "optional": true,
      "bin": {
        "uglifyjs": "bin/uglifyjs"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.1.tgz",
      "integrity": "sha512-tZU/3NqK3dA5gpE1KtyiJUrEB0lxnGkMFHptJ7q6ewdZ8s12QrODwNbhIJStmJkd1QDXa1NRA8aF2A1zk/Ypyw==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "has-bigints": "^1.0.1",
        "has-symbols": "^1.0.2",
        "which-boxed-primitive": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/union-value": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
      "dev": true,
      "dependencies": {
        "arr-union": "^3.1.0",
        "get-value": "^2.0.6",
        "is-extendable": "^0.1.1",
        "set-value": "^2.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unique-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-2.0.0.tgz",
      "integrity": "sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==",
      "dev": true,
      "dependencies": {
        "crypto-random-string": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/universalify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.0.tgz",
      "integrity": "sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ==",
      "dev": true,
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/unset-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "dev": true,
      "dependencies": {
        "has-value": "^0.3.1",
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-value": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
      "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
      "dev": true,
      "dependencies": {
        "get-value": "^2.0.3",
        "has-values": "^0.1.4",
        "isobject": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-value/node_modules/isobject": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
      "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
      "dev": true,
      "dependencies": {
        "isarray": "1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-values": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
      "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/update-notifier": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/update-notifier/-/update-notifier-5.1.0.tgz",
      "integrity": "sha512-ItnICHbeMh9GqUy31hFPrD1kcuZ3rpxDZbf4KUDavXwS0bW5m7SLbDQpGX3UYr072cbrF5hFUs3r5tUsPwjfHw==",
      "dev": true,
      "dependencies": {
        "boxen": "^5.0.0",
        "chalk": "^4.1.0",
        "configstore": "^5.0.1",
        "has-yarn": "^2.1.0",
        "import-lazy": "^2.1.0",
        "is-ci": "^2.0.0",
        "is-installed-globally": "^0.4.0",
        "is-npm": "^5.0.0",
        "is-yarn-global": "^0.3.0",
        "latest-version": "^5.1.0",
        "pupa": "^2.1.1",
        "semver": "^7.3.4",
        "semver-diff": "^3.1.1",
        "xdg-basedir": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/yeoman/update-notifier?sponsor=1"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/urix": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
      "deprecated": "Please see https://github.com/lydell/urix#deprecated",
      "dev": true
    },
    "node_modules/url-parse-lax": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-3.0.0.tgz",
      "integrity": "sha1-FrXK/Afb42dsGxmZF3gj1lA6yww=",
      "dev": true,
      "dependencies": {
        "prepend-http": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/urlgrey": {
      "version": "0.4.4",
      "resolved": "https://registry.npmjs.org/urlgrey/-/urlgrey-0.4.4.tgz",
      "integrity": "sha1-iS/pWWCAXoVRnxzUOJ8stMu3ZS8=",
      "dev": true
    },
    "node_modules/use": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
      "dev": true
    },
    "node_modules/uuid": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
      "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
      "deprecated": "Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.",
      "dev": true,
      "bin": {
        "uuid": "bin/uuid"
      }
    },
    "node_modules/v8-compile-cache": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.3.0.tgz",
      "integrity": "sha512-l8lCEmLcLYZh4nbunNZvQCJc5pv7+RCwa8q/LdUx8u7lsWvPDKmpodJAJNwkAhJC//dFY48KuIEmjtd4RViDrA==",
      "dev": true
    },
    "node_modules/validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "dev": true,
      "dependencies": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "node_modules/vscode-uri": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/vscode-uri/-/vscode-uri-3.0.2.tgz",
      "integrity": "sha512-jkjy6pjU1fxUvI51P+gCsxg1u2n8LSt0W6KrCNQceaziKzff74GoWmjVG46KieVzybO1sttPQmYfrwSHey7GUA==",
      "dev": true
    },
    "node_modules/wcwidth": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
      "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
      "dev": true,
      "dependencies": {
        "defaults": "^1.0.3"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
      "integrity": "sha1-JFNCdeKnvGvnvIZhHMFq4KVlSHE=",
      "dev": true
    },
    "node_modules/well-known-symbols": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/well-known-symbols/-/well-known-symbols-2.0.0.tgz",
      "integrity": "sha512-ZMjC3ho+KXo0BfJb7JgtQ5IBuvnShdlACNkKkdsqBmYw3bPAaJfPeYUo6tLUaT5tG/Gkh7xkpBhKRQ9e7pyg9Q==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/whatwg-url": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
      "integrity": "sha1-lmRU6HZUYuN2RNNib2dCzotwll0=",
      "dev": true,
      "dependencies": {
        "tr46": "~0.0.3",
        "webidl-conversions": "^3.0.0"
      }
    },
    "node_modules/which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "which": "bin/which"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
      "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
      "dev": true,
      "dependencies": {
        "is-bigint": "^1.0.1",
        "is-boolean-object": "^1.1.0",
        "is-number-object": "^1.0.4",
        "is-string": "^1.0.5",
        "is-symbol": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
      "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=",
      "dev": true
    },
    "node_modules/widest-line": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-3.1.0.tgz",
      "integrity": "sha512-NsmoXalsWVDMGupxZ5R08ka9flZjjiLvHVAWYOKtiKM8ujtZWr9cRffak+uSE48+Ob8ObalXpwyeUiyDD6QFgg==",
      "dev": true,
      "dependencies": {
        "string-width": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wordwrap": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
      "integrity": "sha1-J1hIEIkUVqQXHI0CJkQa3pDLyus=",
      "dev": true
    },
    "node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
      "dev": true
    },
    "node_modules/write-file-atomic": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
      "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
      "dev": true,
      "dependencies": {
        "imurmurhash": "^0.1.4",
        "is-typedarray": "^1.0.0",
        "signal-exit": "^3.0.2",
        "typedarray-to-buffer": "^3.1.5"
      }
    },
    "node_modules/xdg-basedir": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-4.0.0.tgz",
      "integrity": "sha512-PSNhEJDejZYV7h50BohL09Er9VaIefr2LMAf3OEmpCkjOi34eYyQYAXUTjEQtZJTKcF0E2UKTh+osDLsgNim9Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "dev": true,
      "engines": {
        "node": ">=0.4"
      }
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "dev": true
    },
    "node_modules/yaml": {
      "version": "1.10.2",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz",
      "integrity": "sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/yargs": {
      "version": "16.2.0",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.2.0.tgz",
      "integrity": "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==",
      "dev": true,
      "dependencies": {
        "cliui": "^7.0.2",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.0",
        "y18n": "^5.0.5",
        "yargs-parser": "^20.2.2"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs-parser": {
      "version": "20.2.7",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.7.tgz",
      "integrity": "sha512-FiNkvbeHzB/syOjIUxFDCnhSfzAL8R5vs40MgLFBorXACCOAEaWu0gRZl14vG8MR9AOJIZbmkjhusqBYZ3HTHw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yn": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
      "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  },
  "dependencies": {
    "@ava/typescript": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@ava/typescript/-/typescript-1.1.1.tgz",
      "integrity": "sha512-KbLUAe2cWXK63WLK6LnOJonjwEDU/8MNXCOA1ooX/YFZgKRmeAD1kZu+2K0ks5fnOCEcckNQAooyBNGdZUmMQA==",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^2.0.0"
      }
    },
    "@babel/code-frame": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.13.tgz",
      "integrity": "sha512-HV1Cm0Q3ZrpCR93tkWOYiuYIgLxZXZFVG2VgK+MBWjUqZTundupbfx2aXarXuw5Ko5aMcjtJgbSs4vUGBS5v6g==",
      "dev": true,
      "requires": {
        "@babel/highlight": "^7.12.13"
      }
    },
    "@babel/compat-data": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.13.12.tgz",
      "integrity": "sha512-3eJJ841uKxeV8dcN/2yGEUy+RfgQspPEgQat85umsE1rotuquQ2AbIub4S6j7c50a2d+4myc+zSlnXeIHrOnhQ==",
      "dev": true
    },
    "@babel/core": {
      "version": "7.13.14",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.13.14.tgz",
      "integrity": "sha512-wZso/vyF4ki0l0znlgM4inxbdrUvCb+cVz8grxDq+6C9k6qbqoIJteQOKicaKjCipU3ISV+XedCqpL2RJJVehA==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.12.13",
        "@babel/generator": "^7.13.9",
        "@babel/helper-compilation-targets": "^7.13.13",
        "@babel/helper-module-transforms": "^7.13.14",
        "@babel/helpers": "^7.13.10",
        "@babel/parser": "^7.13.13",
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.13.13",
        "@babel/types": "^7.13.14",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.1.2",
        "semver": "^6.3.0",
        "source-map": "^0.5.0"
      },
      "dependencies": {
        "json5": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.0.tgz",
          "integrity": "sha512-f+8cldu7X/y7RAJurMEJmdoKXGB/X550w2Nr3tTbezL6RwEE/iMcm+tZnXeoZtKuOq6ft8+CqzEkrIgx1fPoQA==",
          "dev": true,
          "requires": {
            "minimist": "^1.2.5"
          }
        },
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        }
      }
    },
    "@babel/generator": {
      "version": "7.13.9",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.13.9.tgz",
      "integrity": "sha512-mHOOmY0Axl/JCTkxTU6Lf5sWOg/v8nUa+Xkt4zMTftX0wqmb6Sh7J8gvcehBw7q0AhrhAR+FDacKjCZ2X8K+Sw==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.13.0",
        "jsesc": "^2.5.1",
        "source-map": "^0.5.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.5.7",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        }
      }
    },
    "@babel/helper-compilation-targets": {
      "version": "7.13.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.13.13.tgz",
      "integrity": "sha512-q1kcdHNZehBwD9jYPh3WyXcsFERi39X4I59I3NadciWtNDyZ6x+GboOxncFK0kXlKIv6BJm5acncehXWUjWQMQ==",
      "dev": true,
      "requires": {
        "@babel/compat-data": "^7.13.12",
        "@babel/helper-validator-option": "^7.12.17",
        "browserslist": "^4.14.5",
        "semver": "^6.3.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        }
      }
    },
    "@babel/helper-function-name": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.12.13.tgz",
      "integrity": "sha512-TZvmPn0UOqmvi5G4vvw0qZTpVptGkB1GL61R6lKvrSdIxGm5Pky7Q3fpKiIkQCAtRCBUwB0PaThlx9vebCDSwA==",
      "dev": true,
      "requires": {
        "@babel/helper-get-function-arity": "^7.12.13",
        "@babel/template": "^7.12.13",
        "@babel/types": "^7.12.13"
      }
    },
    "@babel/helper-get-function-arity": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.12.13.tgz",
      "integrity": "sha512-DjEVzQNz5LICkzN0REdpD5prGoidvbdYk1BVgRUOINaWJP2t6avB27X1guXK1kXNrX0WMfsrm1A/ZBthYuIMQg==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.13"
      }
    },
    "@babel/helper-member-expression-to-functions": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.13.12.tgz",
      "integrity": "sha512-48ql1CLL59aKbU94Y88Xgb2VFy7a95ykGRbJJaaVv+LX5U8wFpLfiGXJJGUozsmA1oEh/o5Bp60Voq7ACyA/Sw==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.13.12"
      }
    },
    "@babel/helper-module-imports": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.13.12.tgz",
      "integrity": "sha512-4cVvR2/1B693IuOvSI20xqqa/+bl7lqAMR59R4iu39R9aOX8/JoYY1sFaNvUMyMBGnHdwvJgUrzNLoUZxXypxA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.13.12"
      }
    },
    "@babel/helper-module-transforms": {
      "version": "7.13.14",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.13.14.tgz",
      "integrity": "sha512-QuU/OJ0iAOSIatyVZmfqB0lbkVP0kDRiKj34xy+QNsnVZi/PA6BoSoreeqnxxa9EHFAIL0R9XOaAR/G9WlIy5g==",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.13.12",
        "@babel/helper-replace-supers": "^7.13.12",
        "@babel/helper-simple-access": "^7.13.12",
        "@babel/helper-split-export-declaration": "^7.12.13",
        "@babel/helper-validator-identifier": "^7.12.11",
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.13.13",
        "@babel/types": "^7.13.14"
      }
    },
    "@babel/helper-optimise-call-expression": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.12.13.tgz",
      "integrity": "sha512-BdWQhoVJkp6nVjB7nkFWcn43dkprYauqtk++Py2eaf/GRDFm5BxRqEIZCiHlZUGAVmtwKcsVL1dC68WmzeFmiA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.13"
      }
    },
    "@babel/helper-replace-supers": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.13.12.tgz",
      "integrity": "sha512-Gz1eiX+4yDO8mT+heB94aLVNCL+rbuT2xy4YfyNqu8F+OI6vMvJK891qGBTqL9Uc8wxEvRW92Id6G7sDen3fFw==",
      "dev": true,
      "requires": {
        "@babel/helper-member-expression-to-functions": "^7.13.12",
        "@babel/helper-optimise-call-expression": "^7.12.13",
        "@babel/traverse": "^7.13.0",
        "@babel/types": "^7.13.12"
      }
    },
    "@babel/helper-simple-access": {
      "version": "7.13.12",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.13.12.tgz",
      "integrity": "sha512-7FEjbrx5SL9cWvXioDbnlYTppcZGuCY6ow3/D5vMggb2Ywgu4dMrpTJX0JdQAIcRRUElOIxF3yEooa9gUb9ZbA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.13.12"
      }
    },
    "@babel/helper-split-export-declaration": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.12.13.tgz",
      "integrity": "sha512-tCJDltF83htUtXx5NLcaDqRmknv652ZWCHyoTETf1CXYJdPC7nohZohjUgieXhv0hTJdRf2FjDueFehdNucpzg==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.12.13"
      }
    },
    "@babel/helper-validator-identifier": {
      "version": "7.12.11",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.12.11.tgz",
      "integrity": "sha512-np/lG3uARFybkoHokJUmf1QfEvRVCPbmQeUQpKow5cQ3xWrV9i3rUHodKDJPQfTVX61qKi+UdYk8kik84n7XOw==",
      "dev": true
    },
    "@babel/helper-validator-option": {
      "version": "7.12.17",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.12.17.tgz",
      "integrity": "sha512-TopkMDmLzq8ngChwRlyjR6raKD6gMSae4JdYDB8bByKreQgG0RBTuKe9LRxW3wFtUnjxOPRKBDwEH6Mg5KeDfw==",
      "dev": true
    },
    "@babel/helpers": {
      "version": "7.13.10",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.13.10.tgz",
      "integrity": "sha512-4VO883+MWPDUVRF3PhiLBUFHoX/bsLTGFpFK/HqvvfBZz2D57u9XzPVNFVBTc0PW/CWR9BXTOKt8NF4DInUHcQ==",
      "dev": true,
      "requires": {
        "@babel/template": "^7.12.13",
        "@babel/traverse": "^7.13.0",
        "@babel/types": "^7.13.0"
      }
    },
    "@babel/highlight": {
      "version": "7.13.10",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.13.10.tgz",
      "integrity": "sha512-5aPpe5XQPzflQrFwL1/QoeHkP2MsA4JCntcXHRhEsdsfPVkvPi2w7Qix4iV7t5S/oC9OodGrggd8aco1g3SZFg==",
      "dev": true,
      "requires": {
        "@babel/helper-validator-identifier": "^7.12.11",
        "chalk": "^2.0.0",
        "js-tokens": "^4.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        },
        "escape-string-regexp": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
          "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
          "dev": true
        },
        "has-flag": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
          "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
          "dev": true
        },
        "supports-color": {
          "version": "5.5.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
          "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        }
      }
    },
    "@babel/parser": {
      "version": "7.13.13",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.13.13.tgz",
      "integrity": "sha512-OhsyMrqygfk5v8HmWwOzlYjJrtLaFhF34MrfG/Z73DgYCI6ojNUTUp2TYbtnjo8PegeJp12eamsNettCQjKjVw==",
      "dev": true
    },
    "@babel/template": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.12.13.tgz",
      "integrity": "sha512-/7xxiGA57xMo/P2GVvdEumr8ONhFOhfgq2ihK3h1e6THqzTAkHbkXgB0xI9yeTfIUoH3+oAeHhqm/I43OTbbjA==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.12.13",
        "@babel/parser": "^7.12.13",
        "@babel/types": "^7.12.13"
      }
    },
    "@babel/traverse": {
      "version": "7.13.13",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.13.13.tgz",
      "integrity": "sha512-CblEcwmXKR6eP43oQGG++0QMTtCjAsa3frUuzHoiIJWpaIIi8dwMyEFUJoXRLxagGqCK+jALRwIO+o3R9p/uUg==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.12.13",
        "@babel/generator": "^7.13.9",
        "@babel/helper-function-name": "^7.12.13",
        "@babel/helper-split-export-declaration": "^7.12.13",
        "@babel/parser": "^7.13.13",
        "@babel/types": "^7.13.13",
        "debug": "^4.1.0",
        "globals": "^11.1.0"
      },
      "dependencies": {
        "globals": {
          "version": "11.12.0",
          "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
          "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
          "dev": true
        }
      }
    },
    "@babel/types": {
      "version": "7.13.14",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.13.14.tgz",
      "integrity": "sha512-A2aa3QTkWoyqsZZFl56MLUsfmh7O0gN41IPvXAE/++8ojpbz12SszD7JEGYVdn4f9Kt4amIei07swF1h4AqmmQ==",
      "dev": true,
      "requires": {
        "@babel/helper-validator-identifier": "^7.12.11",
        "lodash": "^4.17.19",
        "to-fast-properties": "^2.0.0"
      }
    },
    "@bitauth/libauth": {
      "version": "1.18.1",
      "resolved": "https://registry.npmjs.org/@bitauth/libauth/-/libauth-1.18.1.tgz",
      "integrity": "sha512-s7evdGbdGAnGkv7xt6mCbcWTTNvburc1Z9EX/8JKwcRLqofjDs7VAEz+RP3a8OGEo4MWFV6Ydqu/BeJjIA7Kdg=="
    },
    "@commitlint/execute-rule": {
      "version": "12.1.1",
      "resolved": "https://registry.npmjs.org/@commitlint/execute-rule/-/execute-rule-12.1.1.tgz",
      "integrity": "sha512-6mplMGvLCKF5LieL7BRhydpg32tm6LICnWQADrWU4S5g9PKi2utNvhiaiuNPoHUXr29RdbNaGNcyyPv8DSjJsQ==",
      "dev": true,
      "optional": true
    },
    "@commitlint/load": {
      "version": "12.1.1",
      "resolved": "https://registry.npmjs.org/@commitlint/load/-/load-12.1.1.tgz",
      "integrity": "sha512-qOQtgNdJRULUQWP9jkpTwhj7aEtnqUtqeUpbQ9rjS+GIUST65HZbteNUX4S0mAEGPWqy2aK5xGd73cUfFSvuuw==",
      "dev": true,
      "optional": true,
      "requires": {
        "@commitlint/execute-rule": "^12.1.1",
        "@commitlint/resolve-extends": "^12.1.1",
        "@commitlint/types": "^12.1.1",
        "chalk": "^4.0.0",
        "cosmiconfig": "^7.0.0",
        "lodash": "^4.17.19",
        "resolve-from": "^5.0.0"
      }
    },
    "@commitlint/resolve-extends": {
      "version": "12.1.1",
      "resolved": "https://registry.npmjs.org/@commitlint/resolve-extends/-/resolve-extends-12.1.1.tgz",
      "integrity": "sha512-/DXRt0S0U3o9lq5cc8OL1Lkx0IjW0HcDWjUkUXshAajBIKBYSJB8x/loNCi1krNEJ8SwLXUEFt5OLxNO6wE9yQ==",
      "dev": true,
      "optional": true,
      "requires": {
        "import-fresh": "^3.0.0",
        "lodash": "^4.17.19",
        "resolve-from": "^5.0.0",
        "resolve-global": "^1.0.0"
      }
    },
    "@commitlint/types": {
      "version": "12.1.1",
      "resolved": "https://registry.npmjs.org/@commitlint/types/-/types-12.1.1.tgz",
      "integrity": "sha512-+qGH+s2Lo6qwacV2X3/ZypZwaAI84ift+1HBjXdXtI/q0F5NtmXucV3lcQOTviMTNiJhq4qWON2fjci2NItASw==",
      "dev": true,
      "optional": true,
      "requires": {
        "chalk": "^4.0.0"
      }
    },
    "@concordance/react": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/@concordance/react/-/react-2.0.0.tgz",
      "integrity": "sha512-huLSkUuM2/P+U0uy2WwlKuixMsTODD8p4JVQBI4VKeopkiN0C7M3N9XYVawb4M+4spN5RrO/eLhk7KoQX6nsfA==",
      "dev": true,
      "requires": {
        "arrify": "^1.0.1"
      },
      "dependencies": {
        "arrify": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
          "integrity": "sha1-iYUI2iIm84DfkEcoRWhJwVAaSw0=",
          "dev": true
        }
      }
    },
    "@cspell/dict-aws": {
      "version": "1.0.14",
      "resolved": "https://registry.npmjs.org/@cspell/dict-aws/-/dict-aws-1.0.14.tgz",
      "integrity": "sha512-K21CfB4ZpKYwwDQiPfic2zJA/uxkbsd4IQGejEvDAhE3z8wBs6g6BwwqdVO767M9NgZqc021yAVpr79N5pWe3w==",
      "dev": true
    },
    "@cspell/dict-bash": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/@cspell/dict-bash/-/dict-bash-1.0.12.tgz",
      "integrity": "sha512-BOMHVW/m281mqUSJkZ3oiJiUUItLd7QdzpMjm428V9yBYFwIdbds1CeatS7C6kgpI2eBE4RXmy1Hjk/lR63Jew==",
      "dev": true
    },
    "@cspell/dict-companies": {
      "version": "1.0.36",
      "resolved": "https://registry.npmjs.org/@cspell/dict-companies/-/dict-companies-1.0.36.tgz",
      "integrity": "sha512-Bk9mMJs9spzrtLxZsxBZIK6ukD9REfQYpuTBNJk/IiTViHVQ6ertHAgw1vRVtJAMxViv8dMLNtDyTpEXeaYm7w==",
      "dev": true
    },
    "@cspell/dict-cpp": {
      "version": "1.1.38",
      "resolved": "https://registry.npmjs.org/@cspell/dict-cpp/-/dict-cpp-1.1.38.tgz",
      "integrity": "sha512-QqVMxVNYX9XtxzflpJ/888GSyjPU5VeotltsHql1BeEPxhyV27ud9bRKDrBGzCijCK/+MvCxiMZGDpYZqHTjXw==",
      "dev": true
    },
    "@cspell/dict-cryptocurrencies": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/@cspell/dict-cryptocurrencies/-/dict-cryptocurrencies-1.0.10.tgz",
      "integrity": "sha512-47ABvDJOkaST/rXipNMfNvneHUzASvmL6K/CbOFpYKfsd0x23Jc9k1yaOC7JAm82XSC/8a7+3Yu+Fk2jVJNnsA==",
      "dev": true
    },
    "@cspell/dict-csharp": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@cspell/dict-csharp/-/dict-csharp-1.0.11.tgz",
      "integrity": "sha512-nub+ZCiTgmT87O+swI+FIAzNwaZPWUGckJU4GN402wBq420V+F4ZFqNV7dVALJrGaWH7LvADRtJxi6cZVHJKeA==",
      "dev": true
    },
    "@cspell/dict-css": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@cspell/dict-css/-/dict-css-1.0.11.tgz",
      "integrity": "sha512-2Or5oF5ojaXYD8QbO4Z+QdaNXSp+ZyNLJdeyKfejbxLvpL5feSNB0oYtTNrweFPTAvJKQ4DJsdEXy0/s31haRg==",
      "dev": true
    },
    "@cspell/dict-django": {
      "version": "1.0.26",
      "resolved": "https://registry.npmjs.org/@cspell/dict-django/-/dict-django-1.0.26.tgz",
      "integrity": "sha512-mn9bd7Et1L2zuibc08GVHTiD2Go3/hdjyX5KLukXDklBkq06r+tb0OtKtf1zKodtFDTIaYekGADhNhA6AnKLkg==",
      "dev": true
    },
    "@cspell/dict-dotnet": {
      "version": "1.0.25",
      "resolved": "https://registry.npmjs.org/@cspell/dict-dotnet/-/dict-dotnet-1.0.25.tgz",
      "integrity": "sha512-3BFhdquYqqjeI8Jm1dYepZKGEg+fKFhw7UfPkVdx13C4ETo5VlsS4FAblC0pCY21pDU3QgRZOGL1Bj+KWCGp/w==",
      "dev": true
    },
    "@cspell/dict-elixir": {
      "version": "1.0.24",
      "resolved": "https://registry.npmjs.org/@cspell/dict-elixir/-/dict-elixir-1.0.24.tgz",
      "integrity": "sha512-pEX6GYlEx4Teusw/m+XmqoXzcHOqpcn1ZX4H33ONqR81XdPwbaKorBr1IG23Ic76IhwrFlOqs48tcnxrHYpFnA==",
      "dev": true
    },
    "@cspell/dict-en_us": {
      "version": "1.2.40",
      "resolved": "https://registry.npmjs.org/@cspell/dict-en_us/-/dict-en_us-1.2.40.tgz",
      "integrity": "sha512-e8leCvGAWPWQIw0SoozgEAiMt2YM12rafOuW4aQwgTJD++vp32a9RrnVL8olBfWaA57rRWWndbMSmPTrsO9mpg==",
      "dev": true
    },
    "@cspell/dict-en-gb": {
      "version": "1.1.28",
      "resolved": "https://registry.npmjs.org/@cspell/dict-en-gb/-/dict-en-gb-1.1.28.tgz",
      "integrity": "sha512-noOH+iv4xFpPxu1agiQgp5LhY/KA0Ir28y1xnC2QTtLvlIid7vIvgixBOz4Zi0P7lo/mPmMjQY+x7//2EKFDgQ==",
      "dev": true
    },
    "@cspell/dict-filetypes": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@cspell/dict-filetypes/-/dict-filetypes-1.1.5.tgz",
      "integrity": "sha512-yfkB37J+hL6W8qa4AknFp7u6CGECrw2ql2/y0lUKruLQYid0ApK+bH+ll+Sqgl2YS5QAOhclskc72aQHAcRJIQ==",
      "dev": true
    },
    "@cspell/dict-fonts": {
      "version": "1.0.14",
      "resolved": "https://registry.npmjs.org/@cspell/dict-fonts/-/dict-fonts-1.0.14.tgz",
      "integrity": "sha512-VhIX+FVYAnqQrOuoFEtya6+H72J82cIicz9QddgknsTqZQ3dvgp6lmVnsQXPM3EnzA8n1peTGpLDwHzT7ociLA==",
      "dev": true
    },
    "@cspell/dict-fullstack": {
      "version": "1.0.37",
      "resolved": "https://registry.npmjs.org/@cspell/dict-fullstack/-/dict-fullstack-1.0.37.tgz",
      "integrity": "sha512-ljVzUdIlBENMiyHUV06007hz2FPRt+BQmC9Jgn6iGIEQeAQp37Q6oIDmxv2lD65ScEIbysxXuaUgJ5x0j4a48A==",
      "dev": true
    },
    "@cspell/dict-golang": {
      "version": "1.1.24",
      "resolved": "https://registry.npmjs.org/@cspell/dict-golang/-/dict-golang-1.1.24.tgz",
      "integrity": "sha512-qq3Cjnx2U1jpeWAGJL1GL0ylEhUMqyaR36Xij6Y6Aq4bViCRp+HRRqk0x5/IHHbOrti45h3yy7ii1itRFo+Xkg==",
      "dev": true
    },
    "@cspell/dict-haskell": {
      "version": "1.0.13",
      "resolved": "https://registry.npmjs.org/@cspell/dict-haskell/-/dict-haskell-1.0.13.tgz",
      "integrity": "sha512-kvl8T84cnYRPpND/P3D86P6WRSqebsbk0FnMfy27zo15L5MLAb3d3MOiT1kW3vEWfQgzUD7uddX/vUiuroQ8TA==",
      "dev": true
    },
    "@cspell/dict-html": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/@cspell/dict-html/-/dict-html-1.1.6.tgz",
      "integrity": "sha512-RsZXIrmsnLcUpXfyZdNg7OtO2+e4p7m/qILg03kM6vhSUMY6ryCQNPWKrHqsl8+LBKd54EgFM+O5zcgq6IIsCw==",
      "dev": true
    },
    "@cspell/dict-html-symbol-entities": {
      "version": "1.0.23",
      "resolved": "https://registry.npmjs.org/@cspell/dict-html-symbol-entities/-/dict-html-symbol-entities-1.0.23.tgz",
      "integrity": "sha512-PV0UBgcBFbBLf/m1wfkVMM8w96kvfHoiCGLWO6BR3Q9v70IXoE4ae0+T+f0CkxcEkacMqEQk/I7vuE9MzrjaNw==",
      "dev": true
    },
    "@cspell/dict-java": {
      "version": "1.0.22",
      "resolved": "https://registry.npmjs.org/@cspell/dict-java/-/dict-java-1.0.22.tgz",
      "integrity": "sha512-CVAJ29dx1XwwutgsMgaj5eCl1Nc7X7qFhWL2KkAdu78A/NUIaS+1I9KS0hHhdZx/wLke9dH8TR7NyPQGpGxeAw==",
      "dev": true
    },
    "@cspell/dict-latex": {
      "version": "1.0.25",
      "resolved": "https://registry.npmjs.org/@cspell/dict-latex/-/dict-latex-1.0.25.tgz",
      "integrity": "sha512-cEgg91Migqcp1SdVV7dUeMxbPDhxdNo6Fgq2eygAXQjIOFK520FFvh/qxyBvW90qdZbIRoU2AJpchyHfGuwZFA==",
      "dev": true
    },
    "@cspell/dict-lorem-ipsum": {
      "version": "1.0.22",
      "resolved": "https://registry.npmjs.org/@cspell/dict-lorem-ipsum/-/dict-lorem-ipsum-1.0.22.tgz",
      "integrity": "sha512-yqzspR+2ADeAGUxLTfZ4pXvPl7FmkENMRcGDECmddkOiuEwBCWMZdMP5fng9B0Q6j91hQ8w9CLvJKBz10TqNYg==",
      "dev": true
    },
    "@cspell/dict-lua": {
      "version": "1.0.16",
      "resolved": "https://registry.npmjs.org/@cspell/dict-lua/-/dict-lua-1.0.16.tgz",
      "integrity": "sha512-YiHDt8kmHJ8nSBy0tHzaxiuitYp+oJ66ffCYuFWTNB3//Y0SI4OGHU3omLsQVeXIfCeVrO4DrVvRDoCls9B5zQ==",
      "dev": true
    },
    "@cspell/dict-node": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@cspell/dict-node/-/dict-node-1.0.11.tgz",
      "integrity": "sha512-q66zAqtNmuvZGKt4stRwQPFLsbOjZGGZOZ1HEbqpOkicxvF0BWhR0Di/JBq27PDxeqQP3S5sLeogQTSNQBuTww==",
      "dev": true
    },
    "@cspell/dict-npm": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@cspell/dict-npm/-/dict-npm-1.0.11.tgz",
      "integrity": "sha512-mokmv9/Yk1yliDz97drWyuDWv7eKGEcFhdM43YSPK7GuMLh6i2ULOmORPFhUcjxQjPf0uySMDA2JguiQ4m5Lmg==",
      "dev": true
    },
    "@cspell/dict-php": {
      "version": "1.0.23",
      "resolved": "https://registry.npmjs.org/@cspell/dict-php/-/dict-php-1.0.23.tgz",
      "integrity": "sha512-rRLf/09rXDrzs0DJuNXNmFVTw2b2zLmZKNF4LIPrFHYHvdfsMvwVqxkr/SAyhF8C6zi5sW0XYC/J0S/3IE927w==",
      "dev": true
    },
    "@cspell/dict-powershell": {
      "version": "1.0.14",
      "resolved": "https://registry.npmjs.org/@cspell/dict-powershell/-/dict-powershell-1.0.14.tgz",
      "integrity": "sha512-hisOXXi5PBXB5YKtrJQIis2FIRHgSW1U0/sd4yI36lzb3ZMEvGJwdAdyhXN3IGiqRUNxMzJiXAeXfhnia4xPtQ==",
      "dev": true
    },
    "@cspell/dict-python": {
      "version": "1.0.33",
      "resolved": "https://registry.npmjs.org/@cspell/dict-python/-/dict-python-1.0.33.tgz",
      "integrity": "sha512-tRmE4TzHDFPs7sJ1a3XbfyFrvRHwefVz+z1wkm6tkXK9TPrCbIS+rV/T8xhj205q4lpZQ/TkNB3lT40eLB9O8A==",
      "dev": true
    },
    "@cspell/dict-ruby": {
      "version": "1.0.13",
      "resolved": "https://registry.npmjs.org/@cspell/dict-ruby/-/dict-ruby-1.0.13.tgz",
      "integrity": "sha512-YeN1acY38dgMYlEJ6iWPH+8qXB6seLKHm9BszXxaKT/IzGA9Y9XUWPGobeJFD5E/tC6HjvcqRKxEs8vnvakoLQ==",
      "dev": true
    },
    "@cspell/dict-rust": {
      "version": "1.0.22",
      "resolved": "https://registry.npmjs.org/@cspell/dict-rust/-/dict-rust-1.0.22.tgz",
      "integrity": "sha512-7WOIzv0BPiU+MssZbbMk8K+HR/g9Bcvd0+jXJC3/AKT8L6l0Mx0Tr/oF7cJ4xvCYgA84nBz3PhMZkabGSz/Nkg==",
      "dev": true
    },
    "@cspell/dict-scala": {
      "version": "1.0.21",
      "resolved": "https://registry.npmjs.org/@cspell/dict-scala/-/dict-scala-1.0.21.tgz",
      "integrity": "sha512-5V/R7PRbbminTpPS3ywgdAalI9BHzcEjEj9ug4kWYvBIGwSnS7T6QCFCiu+e9LvEGUqQC+NHgLY4zs1NaBj2vA==",
      "dev": true
    },
    "@cspell/dict-software-terms": {
      "version": "1.0.27",
      "resolved": "https://registry.npmjs.org/@cspell/dict-software-terms/-/dict-software-terms-1.0.27.tgz",
      "integrity": "sha512-O6wCGuFSnr9G9Sr62zc7/XyruRRPI0/PJ0xZj8/R+hr+vFjDaScQnkqj10gTVoLAshk1TjL5Firnzyz3ibfgdQ==",
      "dev": true
    },
    "@cspell/dict-typescript": {
      "version": "1.0.17",
      "resolved": "https://registry.npmjs.org/@cspell/dict-typescript/-/dict-typescript-1.0.17.tgz",
      "integrity": "sha512-CXCuXcrgAc56P3kL9I6gW6bZwTs6t3duyAtHerHg5YAYbPs6/4nXgniQgLgu8kjFHFy07XrqaaBdLU9V2DmMtQ==",
      "dev": true
    },
    "@eslint/eslintrc": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-0.4.0.tgz",
      "integrity": "sha512-2ZPCc+uNbjV5ERJr+aKSPRwZgKd2z11x0EgLvb1PURmUrn9QNRXFqje0Ldq454PfAVyaJYyrDvvIKSFP4NnBog==",
      "dev": true,
      "requires": {
        "ajv": "^6.12.4",
        "debug": "^4.1.1",
        "espree": "^7.3.0",
        "globals": "^12.1.0",
        "ignore": "^4.0.6",
        "import-fresh": "^3.2.1",
        "js-yaml": "^3.13.1",
        "minimatch": "^3.0.4",
        "strip-json-comments": "^3.1.1"
      },
      "dependencies": {
        "globals": {
          "version": "12.4.0",
          "resolved": "https://registry.npmjs.org/globals/-/globals-12.4.0.tgz",
          "integrity": "sha512-BWICuzzDvDoH54NHKCseDanAhE3CeDorgDL5MT6LMXXj2WCnd9UC2szdk4AWLfjdgNBCXLUanXYcpBBKOSWGwg==",
          "dev": true,
          "requires": {
            "type-fest": "^0.8.1"
          }
        },
        "ignore": {
          "version": "4.0.6",
          "resolved": "https://registry.npmjs.org/ignore/-/ignore-4.0.6.tgz",
          "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==",
          "dev": true
        },
        "strip-json-comments": {
          "version": "3.1.1",
          "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
          "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
          "dev": true
        },
        "type-fest": {
          "version": "0.8.1",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
          "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
          "dev": true
        }
      }
    },
    "@istanbuljs/load-nyc-config": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",
      "integrity": "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==",
      "dev": true,
      "requires": {
        "camelcase": "^5.3.1",
        "find-up": "^4.1.0",
        "get-package-type": "^0.1.0",
        "js-yaml": "^3.13.1",
        "resolve-from": "^5.0.0"
      },
      "dependencies": {
        "camelcase": {
          "version": "5.3.1",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
          "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
          "dev": true
        }
      }
    },
    "@istanbuljs/nyc-config-typescript": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@istanbuljs/nyc-config-typescript/-/nyc-config-typescript-1.0.1.tgz",
      "integrity": "sha512-/gz6LgVpky205LuoOfwEZmnUtaSmdk0QIMcNFj9OvxhiMhPpKftMgZmGN7jNj7jR+lr8IB1Yks3QSSSNSxfoaQ==",
      "dev": true,
      "requires": {
        "@istanbuljs/schema": "^0.1.2"
      }
    },
    "@istanbuljs/schema": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz",
      "integrity": "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==",
      "dev": true
    },
    "@nodelib/fs.scandir": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.4.tgz",
      "integrity": "sha512-33g3pMJk3bg5nXbL/+CY6I2eJDzZAni49PfJnL5fghPTggPvBd/pFNSgJsdAgWptuFu7qq/ERvOYFlhvsLTCKA==",
      "dev": true,
      "requires": {
        "@nodelib/fs.stat": "2.0.4",
        "run-parallel": "^1.1.9"
      }
    },
    "@nodelib/fs.stat": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.4.tgz",
      "integrity": "sha512-IYlHJA0clt2+Vg7bccq+TzRdJvv19c2INqBSsoOLp1je7xjtr7J26+WXR72MCdvU9q1qTzIWDfhMf+DRvQJK4Q==",
      "dev": true
    },
    "@nodelib/fs.walk": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.6.tgz",
      "integrity": "sha512-8Broas6vTtW4GIXTAHDoE32hnN2M5ykgCpWGbuXHQ15vEMqr23pB76e/GZcYsZCHALv50ktd24qhEyKr6wBtow==",
      "dev": true,
      "requires": {
        "@nodelib/fs.scandir": "2.1.4",
        "fastq": "^1.6.0"
      }
    },
    "@sindresorhus/is": {
      "version": "0.14.0",
      "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.14.0.tgz",
      "integrity": "sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ==",
      "dev": true
    },
    "@szmarczak/http-timer": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-1.1.2.tgz",
      "integrity": "sha512-XIB2XbzHTN6ieIjfIMV9hlVcfPU26s2vafYWQcZHWXHOxiaRZYEDKEwdl129Zyg50+foYV2jCgtrqSA6qNuNSA==",
      "dev": true,
      "requires": {
        "defer-to-connect": "^1.0.1"
      }
    },
    "@tokenizer/token": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/@tokenizer/token/-/token-0.1.1.tgz",
      "integrity": "sha512-XO6INPbZCxdprl+9qa/AAbFFOMzzwqYxpjPgLICrMD6C2FCw6qfJOPcBk6JqqPLSaZ/Qx87qn4rpPmPMwaAK6w==",
      "dev": true
    },
    "@tootallnate/once": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@tootallnate/once/-/once-1.1.2.tgz",
      "integrity": "sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw==",
      "dev": true
    },
    "@types/debug": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/@types/debug/-/debug-4.1.5.tgz",
      "integrity": "sha512-Q1y515GcOdTHgagaVFhHnIFQ38ygs/kmxdNpvpou+raI9UO3YZcHDngBSYKQklcKlvA7iuQlmIKbzvmxcOE9CQ==",
      "dev": true
    },
    "@types/json-schema": {
      "version": "7.0.7",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.7.tgz",
      "integrity": "sha512-cxWFQVseBm6O9Gbw1IWb8r6OS4OhSt3hPZLkFApLjM8TEXROBuQGLAH2i2gZpcXdLBIrpXuTDhH7Vbm1iXmNGA==",
      "dev": true
    },
    "@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha1-7ihweulOEdK4J7y+UnC86n8+ce4=",
      "dev": true
    },
    "@types/minimist": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@types/minimist/-/minimist-1.2.1.tgz",
      "integrity": "sha512-fZQQafSREFyuZcdWFAExYjBiCL7AUCdgsk80iO0q4yihYYdcIiH28CcuPTGFgLOCC8RlW49GSQxdHwZP+I7CNg==",
      "dev": true
    },
    "@types/node": {
      "version": "14.14.37",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-14.14.37.tgz",
      "integrity": "sha512-XYmBiy+ohOR4Lh5jE379fV2IU+6Jn4g5qASinhitfyO71b/sCo6MKsMLF5tc7Zf2CE8hViVQyYSobJNke8OvUw==",
      "dev": true
    },
    "@types/normalize-package-data": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/@types/normalize-package-data/-/normalize-package-data-2.4.0.tgz",
      "integrity": "sha512-f5j5b/Gf71L+dbqxIpQ4Z2WlmI/mPJ0fOkGGmFgtb6sAu97EPczzbS3/tJKxmcYDj55OX6ssqwDAWOHIYDRDGA==",
      "dev": true
    },
    "@types/parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA==",
      "dev": true,
      "optional": true
    },
    "@typescript-eslint/eslint-plugin": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-4.21.0.tgz",
      "integrity": "sha512-FPUyCPKZbVGexmbCFI3EQHzCZdy2/5f+jv6k2EDljGdXSRc0cKvbndd2nHZkSLqCNOPk0jB6lGzwIkglXcYVsQ==",
      "dev": true,
      "requires": {
        "@typescript-eslint/experimental-utils": "4.21.0",
        "@typescript-eslint/scope-manager": "4.21.0",
        "debug": "^4.1.1",
        "functional-red-black-tree": "^1.0.1",
        "lodash": "^4.17.15",
        "regexpp": "^3.0.0",
        "semver": "^7.3.2",
        "tsutils": "^3.17.1"
      }
    },
    "@typescript-eslint/experimental-utils": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/experimental-utils/-/experimental-utils-4.21.0.tgz",
      "integrity": "sha512-cEbgosW/tUFvKmkg3cU7LBoZhvUs+ZPVM9alb25XvR0dal4qHL3SiUqHNrzoWSxaXA9gsifrYrS1xdDV6w/gIA==",
      "dev": true,
      "requires": {
        "@types/json-schema": "^7.0.3",
        "@typescript-eslint/scope-manager": "4.21.0",
        "@typescript-eslint/types": "4.21.0",
        "@typescript-eslint/typescript-estree": "4.21.0",
        "eslint-scope": "^5.0.0",
        "eslint-utils": "^2.0.0"
      }
    },
    "@typescript-eslint/parser": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-4.21.0.tgz",
      "integrity": "sha512-eyNf7QmE5O/l1smaQgN0Lj2M/1jOuNg2NrBm1dqqQN0sVngTLyw8tdCbih96ixlhbF1oINoN8fDCyEH9SjLeIA==",
      "dev": true,
      "requires": {
        "@typescript-eslint/scope-manager": "4.21.0",
        "@typescript-eslint/types": "4.21.0",
        "@typescript-eslint/typescript-estree": "4.21.0",
        "debug": "^4.1.1"
      }
    },
    "@typescript-eslint/scope-manager": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-4.21.0.tgz",
      "integrity": "sha512-kfOjF0w1Ix7+a5T1knOw00f7uAP9Gx44+OEsNQi0PvvTPLYeXJlsCJ4tYnDj5PQEYfpcgOH5yBlw7K+UEI9Agw==",
      "dev": true,
      "requires": {
        "@typescript-eslint/types": "4.21.0",
        "@typescript-eslint/visitor-keys": "4.21.0"
      }
    },
    "@typescript-eslint/types": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-4.21.0.tgz",
      "integrity": "sha512-+OQaupjGVVc8iXbt6M1oZMwyKQNehAfLYJJ3SdvnofK2qcjfor9pEM62rVjBknhowTkh+2HF+/KdRAc/wGBN2w==",
      "dev": true
    },
    "@typescript-eslint/typescript-estree": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-4.21.0.tgz",
      "integrity": "sha512-ZD3M7yLaVGVYLw4nkkoGKumb7Rog7QID9YOWobFDMQKNl+vPxqVIW/uDk+MDeGc+OHcoG2nJ2HphwiPNajKw3w==",
      "dev": true,
      "requires": {
        "@typescript-eslint/types": "4.21.0",
        "@typescript-eslint/visitor-keys": "4.21.0",
        "debug": "^4.1.1",
        "globby": "^11.0.1",
        "is-glob": "^4.0.1",
        "semver": "^7.3.2",
        "tsutils": "^3.17.1"
      }
    },
    "@typescript-eslint/visitor-keys": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-4.21.0.tgz",
      "integrity": "sha512-dH22dROWGi5Z6p+Igc8bLVLmwy7vEe8r+8c+raPQU0LxgogPUrRAtRGtvBWmlr9waTu3n+QLt/qrS/hWzk1x5w==",
      "dev": true,
      "requires": {
        "@typescript-eslint/types": "4.21.0",
        "eslint-visitor-keys": "^2.0.0"
      }
    },
    "acorn": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.1.0.tgz",
      "integrity": "sha512-LWCF/Wn0nfHOmJ9rzQApGnxnvgfROzGilS8936rqN/lfcYkY9MYZzdMqN+2NJ4SlTc+m5HiSa+kNfDtI64dwUA==",
      "dev": true
    },
    "acorn-jsx": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.1.tgz",
      "integrity": "sha512-K0Ptm/47OKfQRpNQ2J/oIN/3QYiK6FwW+eJbILhsdxh2WTLdl+30o8aGdTbm5JbffpFFAg/g+zi1E+jvJha5ng==",
      "dev": true,
      "requires": {}
    },
    "acorn-walk": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.0.2.tgz",
      "integrity": "sha512-+bpA9MJsHdZ4bgfDcpk0ozQyhhVct7rzOmO0s1IIr0AGGgKBljss8n2zp11rRP2wid5VGeh04CgeKzgat5/25A==",
      "dev": true
    },
    "add-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/add-stream/-/add-stream-1.0.0.tgz",
      "integrity": "sha1-anmQQ3ynNtXhKI25K9MmbV9csqo=",
      "dev": true
    },
    "agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "dev": true,
      "requires": {
        "debug": "4"
      }
    },
    "aggregate-error": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
      "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",
      "dev": true,
      "requires": {
        "clean-stack": "^2.0.0",
        "indent-string": "^4.0.0"
      }
    },
    "ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "requires": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      }
    },
    "ansi-align": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-3.0.0.tgz",
      "integrity": "sha512-ZpClVKqXN3RGBmKibdfWzqCY4lnjEuoNzU5T0oEFpfd/z5qJHVarukridD4juLO2FXMiwUQxr9WqQtaYa8XRYw==",
      "dev": true,
      "requires": {
        "string-width": "^3.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
          "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
          "dev": true
        },
        "emoji-regex": {
          "version": "7.0.3",
          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
          "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
          "dev": true
        },
        "is-fullwidth-code-point": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
          "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
          "dev": true
        },
        "string-width": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
          "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
          "dev": true,
          "requires": {
            "emoji-regex": "^7.0.1",
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^5.1.0"
          }
        },
        "strip-ansi": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
          "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
          "dev": true,
          "requires": {
            "ansi-regex": "^4.1.0"
          }
        }
      }
    },
    "ansi-colors": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.1.tgz",
      "integrity": "sha512-JoX0apGbHaUJBNl6yF+p6JAFYZ666/hhCGKN5t9QFjbJQKUU/g8MNbFDbvfrgKXvI1QpZplPOnwIo99lX/AAmA==",
      "dev": true
    },
    "ansi-escapes": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
      "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ==",
      "dev": true
    },
    "ansi-regex": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
      "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
      "dev": true
    },
    "ansi-styles": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz",
      "integrity": "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==",
      "dev": true
    },
    "anymatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
      "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
      "dev": true,
      "requires": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      }
    },
    "append-transform": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/append-transform/-/append-transform-2.0.0.tgz",
      "integrity": "sha512-7yeyCEurROLQJFv5Xj4lEGTy0borxepjFv1g22oAdqFu//SrAlDl1O1Nxx15SH1RoliUml6p8dwJW9jvZughhg==",
      "dev": true,
      "requires": {
        "default-require-extensions": "^3.0.0"
      }
    },
    "archy": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/archy/-/archy-1.0.0.tgz",
      "integrity": "sha1-+cjBN1fMHde8N5rHeyxipcKGjEA=",
      "dev": true
    },
    "arg": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
      "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
      "dev": true
    },
    "argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dev": true,
      "requires": {
        "sprintf-js": "~1.0.2"
      }
    },
    "argv": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/argv/-/argv-0.0.2.tgz",
      "integrity": "sha1-7L0W+JSbFXGDcRsb2jNPN4QBhas=",
      "dev": true
    },
    "arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "dev": true
    },
    "arr-flatten": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
      "dev": true
    },
    "arr-union": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
      "dev": true
    },
    "array-find-index": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-find-index/-/array-find-index-1.0.2.tgz",
      "integrity": "sha1-3wEKoSh+Fku9pvlyOwqWoexBh6E=",
      "dev": true
    },
    "array-ify": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/array-ify/-/array-ify-1.0.0.tgz",
      "integrity": "sha1-nlKHYrSpBmrRY6aWKjZEGOlibs4=",
      "dev": true
    },
    "array-includes": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.3.tgz",
      "integrity": "sha512-gcem1KlBU7c9rB+Rq8/3PPKsK2kjqeEBa3bD5kkQo4nYlOHQCJqIJFqBXDEfwaRuYTT4E+FxA9xez7Gf/e3Q7A==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.2",
        "get-intrinsic": "^1.1.1",
        "is-string": "^1.0.5"
      }
    },
    "array-timsort": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/array-timsort/-/array-timsort-1.0.3.tgz",
      "integrity": "sha512-/+3GRL7dDAGEfM6TseQk/U+mi18TU2Ms9I3UlLdUMhz2hbvGNTKdj9xniwXfUqgYhHxRx0+8UnKkvlNwVU+cWQ==",
      "dev": true
    },
    "array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "dev": true
    },
    "array-uniq": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/array-uniq/-/array-uniq-1.0.3.tgz",
      "integrity": "sha1-r2rId6Jcx/dOBYiUdThY39sk/bY=",
      "dev": true
    },
    "array-unique": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
      "dev": true
    },
    "array.prototype.flat": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.2.4.tgz",
      "integrity": "sha512-4470Xi3GAPAjZqFcljX2xzckv1qeKPizoNkiS0+O4IoPR2ZNpcjE0pkhdihlDouK+x6QOast26B4Q/O9DJnwSg==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.1"
      }
    },
    "array.prototype.flatmap": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.2.4.tgz",
      "integrity": "sha512-r9Z0zYoxqHz60vvQbWEdXIEtCwHF0yxaWfno9qzXeNHvfyl3BZqygmGzb84dsubyaXLH4husF+NFgMSdpZhk2Q==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.1",
        "function-bind": "^1.1.1"
      }
    },
    "arrgv": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/arrgv/-/arrgv-1.0.2.tgz",
      "integrity": "sha512-a4eg4yhp7mmruZDQFqVMlxNRFGi/i1r87pt8SDHy0/I8PqSXoUTlWZRdAZo0VXgvEARcujbtTk8kiZRi1uDGRw==",
      "dev": true
    },
    "arrify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/arrify/-/arrify-2.0.1.tgz",
      "integrity": "sha512-3duEwti880xqi4eAMN8AyR4a0ByT90zoYdLlevfrvU43vb0YZwZVfxOgxWrLXXXpyugL0hNZc9G6BiB5B3nUug==",
      "dev": true
    },
    "assign-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
      "dev": true
    },
    "astral-regex": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-2.0.0.tgz",
      "integrity": "sha512-Z7tMw1ytTXt5jqMcOP+OQteU1VuNK9Y02uuJtKQ1Sv69jXQKKg5cibLwGJow8yzZP+eAc18EmLGPal0bp36rvQ==",
      "dev": true
    },
    "async": {
      "version": "2.6.4",
      "resolved": "https://registry.npmjs.org/async/-/async-2.6.4.tgz",
      "integrity": "sha512-mzo5dfJYwAn29PeiJ0zvwTo04zj8HDJj0Mn8TD7sno7q12prdbnasKJHhkm2c1LgrhlJ0teaea8860oxi51mGA==",
      "dev": true,
      "requires": {
        "lodash": "^4.17.14"
      }
    },
    "at-least-node": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/at-least-node/-/at-least-node-1.0.0.tgz",
      "integrity": "sha512-+q/t7Ekv1EDY2l6Gda6LLiX14rU9TV20Wa3ofeQmwPFZbOMo9DXrLbOjFaaclkXKWidIaopwAObQDqwWtGUjqg==",
      "dev": true
    },
    "atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
      "dev": true
    },
    "ava": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/ava/-/ava-3.15.0.tgz",
      "integrity": "sha512-HGAnk1SHPk4Sx6plFAUkzV/XC1j9+iQhOzt4vBly18/yo0AV8Oytx7mtJd/CR8igCJ5p160N/Oo/cNJi2uSeWA==",
      "dev": true,
      "requires": {
        "@concordance/react": "^2.0.0",
        "acorn": "^8.0.4",
        "acorn-walk": "^8.0.0",
        "ansi-styles": "^5.0.0",
        "arrgv": "^1.0.2",
        "arrify": "^2.0.1",
        "callsites": "^3.1.0",
        "chalk": "^4.1.0",
        "chokidar": "^3.4.3",
        "chunkd": "^2.0.1",
        "ci-info": "^2.0.0",
        "ci-parallel-vars": "^1.0.1",
        "clean-yaml-object": "^0.1.0",
        "cli-cursor": "^3.1.0",
        "cli-truncate": "^2.1.0",
        "code-excerpt": "^3.0.0",
        "common-path-prefix": "^3.0.0",
        "concordance": "^5.0.1",
        "convert-source-map": "^1.7.0",
        "currently-unhandled": "^0.4.1",
        "debug": "^4.3.1",
        "del": "^6.0.0",
        "emittery": "^0.8.0",
        "equal-length": "^1.0.0",
        "figures": "^3.2.0",
        "globby": "^11.0.1",
        "ignore-by-default": "^2.0.0",
        "import-local": "^3.0.2",
        "indent-string": "^4.0.0",
        "is-error": "^2.2.2",
        "is-plain-object": "^5.0.0",
        "is-promise": "^4.0.0",
        "lodash": "^4.17.20",
        "matcher": "^3.0.0",
        "md5-hex": "^3.0.1",
        "mem": "^8.0.0",
        "ms": "^2.1.3",
        "ora": "^5.2.0",
        "p-event": "^4.2.0",
        "p-map": "^4.0.0",
        "picomatch": "^2.2.2",
        "pkg-conf": "^3.1.0",
        "plur": "^4.0.0",
        "pretty-ms": "^7.0.1",
        "read-pkg": "^5.2.0",
        "resolve-cwd": "^3.0.0",
        "slash": "^3.0.0",
        "source-map-support": "^0.5.19",
        "stack-utils": "^2.0.3",
        "strip-ansi": "^6.0.0",
        "supertap": "^2.0.0",
        "temp-dir": "^2.0.0",
        "trim-off-newlines": "^1.0.1",
        "update-notifier": "^5.0.1",
        "write-file-atomic": "^3.0.3",
        "yargs": "^16.2.0"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
          "dev": true
        }
      }
    },
    "balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true
    },
    "base": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "dev": true,
      "requires": {
        "cache-base": "^1.0.1",
        "class-utils": "^0.3.5",
        "component-emitter": "^1.2.1",
        "define-property": "^1.0.0",
        "isobject": "^3.0.1",
        "mixin-deep": "^1.2.0",
        "pascalcase": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "dev": true
    },
    "binary-extensions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
      "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
      "dev": true
    },
    "bl": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
      "integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
      "dev": true,
      "requires": {
        "buffer": "^5.5.0",
        "inherits": "^2.0.4",
        "readable-stream": "^3.4.0"
      }
    },
    "blueimp-md5": {
      "version": "2.18.0",
      "resolved": "https://registry.npmjs.org/blueimp-md5/-/blueimp-md5-2.18.0.tgz",
      "integrity": "sha512-vE52okJvzsVWhcgUHOv+69OG3Mdg151xyn41aVQN/5W5S+S43qZhxECtYLAEHMSFWX6Mv5IZrzj3T5+JqXfj5Q==",
      "dev": true
    },
    "boxen": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/boxen/-/boxen-5.0.1.tgz",
      "integrity": "sha512-49VBlw+PrWEF51aCmy7QIteYPIFZxSpvqBdP/2itCPPlJ49kj9zg/XPRFrdkne2W+CfwXUls8exMvu1RysZpKA==",
      "dev": true,
      "requires": {
        "ansi-align": "^3.0.0",
        "camelcase": "^6.2.0",
        "chalk": "^4.1.0",
        "cli-boxes": "^2.2.1",
        "string-width": "^4.2.0",
        "type-fest": "^0.20.2",
        "widest-line": "^3.1.0",
        "wrap-ansi": "^7.0.0"
      },
      "dependencies": {
        "type-fest": {
          "version": "0.20.2",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
          "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
          "dev": true
        }
      }
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "requires": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "dev": true,
      "requires": {
        "fill-range": "^7.0.1"
      }
    },
    "browserslist": {
      "version": "4.16.6",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.16.6.tgz",
      "integrity": "sha512-Wspk/PqO+4W9qp5iUTJsa1B/QrYn1keNCcEP5OvP7WBwT4KaDly0uONYmC6Xa3Z5IqnUgS0KcgLYu1l74x0ZXQ==",
      "dev": true,
      "requires": {
        "caniuse-lite": "^1.0.30001219",
        "colorette": "^1.2.2",
        "electron-to-chromium": "^1.3.723",
        "escalade": "^3.1.1",
        "node-releases": "^1.1.71"
      },
      "dependencies": {
        "caniuse-lite": {
          "version": "1.0.30001230",
          "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001230.tgz",
          "integrity": "sha512-5yBd5nWCBS+jWKTcHOzXwo5xzcj4ePE/yjtkZyUV1BTUmrBaA9MRGC+e7mxnqXSA90CmCA8L3eKLaSUkt099IQ==",
          "dev": true
        },
        "electron-to-chromium": {
          "version": "1.3.740",
          "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.740.tgz",
          "integrity": "sha512-Mi2m55JrX2BFbNZGKYR+2ItcGnR4O5HhrvgoRRyZQlaMGQULqDhoGkLWHzJoshSzi7k1PUofxcDbNhlFrDZNhg==",
          "dev": true
        }
      }
    },
    "buffer": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
      "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
      "dev": true,
      "requires": {
        "base64-js": "^1.3.1",
        "ieee754": "^1.1.13"
      }
    },
    "buffer-from": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
      "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
      "dev": true
    },
    "cache-base": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "dev": true,
      "requires": {
        "collection-visit": "^1.0.0",
        "component-emitter": "^1.2.1",
        "get-value": "^2.0.6",
        "has-value": "^1.0.0",
        "isobject": "^3.0.1",
        "set-value": "^2.0.0",
        "to-object-path": "^0.3.0",
        "union-value": "^1.0.0",
        "unset-value": "^1.0.0"
      }
    },
    "cacheable-request": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-6.1.0.tgz",
      "integrity": "sha512-Oj3cAGPCqOZX7Rz64Uny2GYAZNliQSqfbePrgAQ1wKAihYmCUnraBtJtKcGR4xz7wF+LoJC+ssFZvv5BgF9Igg==",
      "dev": true,
      "requires": {
        "clone-response": "^1.0.2",
        "get-stream": "^5.1.0",
        "http-cache-semantics": "^4.0.0",
        "keyv": "^3.0.0",
        "lowercase-keys": "^2.0.0",
        "normalize-url": "^4.1.0",
        "responselike": "^1.0.2"
      },
      "dependencies": {
        "get-stream": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
          "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
          "dev": true,
          "requires": {
            "pump": "^3.0.0"
          }
        },
        "lowercase-keys": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-2.0.0.tgz",
          "integrity": "sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA==",
          "dev": true
        }
      }
    },
    "cachedir": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/cachedir/-/cachedir-2.2.0.tgz",
      "integrity": "sha512-VvxA0xhNqIIfg0V9AmJkDg91DaJwryutH5rVEZAhcNi4iJFj9f+QxmAjgK1LT9I8OgToX27fypX6/MeCXVbBjQ==",
      "dev": true
    },
    "caching-transform": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/caching-transform/-/caching-transform-4.0.0.tgz",
      "integrity": "sha512-kpqOvwXnjjN44D89K5ccQC+RUrsy7jB/XLlRrx0D7/2HNcTPqzsb6XgYoErwko6QsV184CA2YgS1fxDiiDZMWA==",
      "dev": true,
      "requires": {
        "hasha": "^5.0.0",
        "make-dir": "^3.0.0",
        "package-hash": "^4.0.0",
        "write-file-atomic": "^3.0.0"
      }
    },
    "call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      }
    },
    "callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true
    },
    "camelcase": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.2.0.tgz",
      "integrity": "sha512-c7wVvbw3f37nuobQNtgsgG9POC9qMbNuMQmTCqZv23b6MIz0fcYpBiOlv9gEN/hdLdnZTDQhg6e9Dq5M1vKvfg==",
      "dev": true
    },
    "camelcase-keys": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-6.2.2.tgz",
      "integrity": "sha512-YrwaA0vEKazPBkn0ipTiMpSajYDSe+KjQfrjhcBMxJt/znbvlHd8Pw/Vamaz5EB4Wfhs3SUR3Z9mwRu/P3s3Yg==",
      "dev": true,
      "requires": {
        "camelcase": "^5.3.1",
        "map-obj": "^4.0.0",
        "quick-lru": "^4.0.1"
      },
      "dependencies": {
        "camelcase": {
          "version": "5.3.1",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
          "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
          "dev": true
        }
      }
    },
    "chalk": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
      "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
      "dev": true,
      "requires": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "dev": true,
          "requires": {
            "color-convert": "^2.0.1"
          }
        }
      }
    },
    "chardet": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
      "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",
      "dev": true
    },
    "chokidar": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.1.tgz",
      "integrity": "sha512-9+s+Od+W0VJJzawDma/gvBNQqkTiqYTWLuZoyAsivsI4AaWTCzHG06/TMjsf1cYe9Cb97UCEhjz7HvnPk2p/tw==",
      "dev": true,
      "requires": {
        "anymatch": "~3.1.1",
        "braces": "~3.0.2",
        "fsevents": "~2.3.1",
        "glob-parent": "~5.1.0",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.5.0"
      }
    },
    "chunkd": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/chunkd/-/chunkd-2.0.1.tgz",
      "integrity": "sha512-7d58XsFmOq0j6el67Ug9mHf9ELUXsQXYJBkyxhH/k+6Ke0qXRnv0kbemx+Twc6fRJ07C49lcbdgm9FL1Ei/6SQ==",
      "dev": true
    },
    "ci-info": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
      "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ==",
      "dev": true
    },
    "ci-parallel-vars": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ci-parallel-vars/-/ci-parallel-vars-1.0.1.tgz",
      "integrity": "sha512-uvzpYrpmidaoxvIQHM+rKSrigjOe9feHYbw4uOI2gdfe1C3xIlxO+kVXq83WQWNniTf8bAxVpy+cQeFQsMERKg==",
      "dev": true
    },
    "class-utils": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "dev": true,
      "requires": {
        "arr-union": "^3.1.0",
        "define-property": "^0.2.5",
        "isobject": "^3.0.0",
        "static-extend": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "clean-stack": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
      "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
      "dev": true
    },
    "clean-yaml-object": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/clean-yaml-object/-/clean-yaml-object-0.1.0.tgz",
      "integrity": "sha1-Y/sRDcLOGoTcIfbZM0h20BCui2g=",
      "dev": true
    },
    "cli-boxes": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-2.2.1.tgz",
      "integrity": "sha512-y4coMcylgSCdVinjiDBuR8PCC2bLjyGTwEmPb9NHR/QaNU6EUOXcTY/s6VjGMD6ENSEaeQYHCY0GNGS5jfMwPw==",
      "dev": true
    },
    "cli-cursor": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
      "integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
      "dev": true,
      "requires": {
        "restore-cursor": "^3.1.0"
      }
    },
    "cli-spinners": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.6.0.tgz",
      "integrity": "sha512-t+4/y50K/+4xcCRosKkA7W4gTr1MySvLV0q+PxmG7FJ5g+66ChKurYjxBCjHggHH3HA5Hh9cy+lcUGWDqVH+4Q==",
      "dev": true
    },
    "cli-truncate": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cli-truncate/-/cli-truncate-2.1.0.tgz",
      "integrity": "sha512-n8fOixwDD6b/ObinzTrp1ZKFzbgvKZvuz/TvejnLn1aQfC6r52XEx85FmuC+3HI+JM7coBRXUvNqEU2PHVrHpg==",
      "dev": true,
      "requires": {
        "slice-ansi": "^3.0.0",
        "string-width": "^4.2.0"
      }
    },
    "cli-width": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.1.tgz",
      "integrity": "sha512-GRMWDxpOB6Dgk2E5Uo+3eEBvtOOlimMmpbFiKuLFnQzYDavtLFY3K5ona41jgN/WdRZtG7utuVSVTL4HbZHGkw==",
      "dev": true
    },
    "cliui": {
      "version": "7.0.4",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
      "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
      "dev": true,
      "requires": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.0",
        "wrap-ansi": "^7.0.0"
      }
    },
    "clone": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
      "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4=",
      "dev": true
    },
    "clone-response": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
      "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
      "dev": true,
      "requires": {
        "mimic-response": "^1.0.0"
      }
    },
    "code-excerpt": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/code-excerpt/-/code-excerpt-3.0.0.tgz",
      "integrity": "sha512-VHNTVhd7KsLGOqfX3SyeO8RyYPMp1GJOg194VITk04WMYCv4plV68YWe6TJZxd9MhobjtpMRnVky01gqZsalaw==",
      "dev": true,
      "requires": {
        "convert-to-spaces": "^1.0.1"
      }
    },
    "codecov": {
      "version": "3.8.1",
      "resolved": "https://registry.npmjs.org/codecov/-/codecov-3.8.1.tgz",
      "integrity": "sha512-Qm7ltx1pzLPsliZY81jyaQ80dcNR4/JpcX0IHCIWrHBXgseySqbdbYfkdiXd7o/xmzQpGRVCKGYeTrHUpn6Dcw==",
      "dev": true,
      "requires": {
        "argv": "0.0.2",
        "ignore-walk": "3.0.3",
        "js-yaml": "3.14.0",
        "teeny-request": "6.0.1",
        "urlgrey": "0.4.4"
      },
      "dependencies": {
        "js-yaml": {
          "version": "3.14.0",
          "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.0.tgz",
          "integrity": "sha512-/4IbIeHcD9VMHFqDR/gQ7EdZdLimOvW2DdcxFjdyyZ9NsbS+ccrXqVWDtab/lRl5AlUqmpBx8EhPaWR+OtY17A==",
          "dev": true,
          "requires": {
            "argparse": "^1.0.7",
            "esprima": "^4.0.0"
          }
        }
      }
    },
    "collection-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "dev": true,
      "requires": {
        "map-visit": "^1.0.0",
        "object-visit": "^1.0.0"
      }
    },
    "color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "requires": {
        "color-name": "~1.1.4"
      }
    },
    "color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true
    },
    "colorette": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-1.2.2.tgz",
      "integrity": "sha512-MKGMzyfeuutC/ZJ1cba9NqcNpfeqMUcYmyF1ZFY6/Cn7CNSAKx6a+s48sqLqyAiZuaP2TcqMhoo+dlwFnVxT9w==",
      "dev": true
    },
    "commander": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-7.2.0.tgz",
      "integrity": "sha512-QrWXB+ZQSVPmIWIhtEO9H+gwHaMGYiF5ChvoJ+K9ZGHG/sVsa6yiesAD1GC/x46sET00Xlwo1u49RVVVzvcSkw==",
      "dev": true
    },
    "comment-json": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/comment-json/-/comment-json-4.1.0.tgz",
      "integrity": "sha512-WEghmVYaNq9NlWbrkzQTSsya9ycLyxJxpTQfZEan6a5Jomnjw18zS3Podf8q1Zf9BvonvQd/+Z7Z39L7KKzzdQ==",
      "dev": true,
      "requires": {
        "array-timsort": "^1.0.3",
        "core-util-is": "^1.0.2",
        "esprima": "^4.0.1",
        "has-own-prop": "^2.0.0",
        "repeat-string": "^1.6.1"
      }
    },
    "commitizen": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/commitizen/-/commitizen-4.2.3.tgz",
      "integrity": "sha512-pYlYEng7XMV2TW4xtjDKBGqeJ0Teq2zyRSx2S3Ml1XAplHSlJZK8vm1KdGclpMEZuGafbS5TeHXIVnHk8RWIzQ==",
      "dev": true,
      "requires": {
        "cachedir": "2.2.0",
        "cz-conventional-changelog": "3.2.0",
        "dedent": "0.7.0",
        "detect-indent": "6.0.0",
        "find-node-modules": "2.0.0",
        "find-root": "1.1.0",
        "fs-extra": "8.1.0",
        "glob": "7.1.4",
        "inquirer": "6.5.2",
        "is-utf8": "^0.2.1",
        "lodash": "^4.17.20",
        "minimist": "1.2.5",
        "strip-bom": "4.0.0",
        "strip-json-comments": "3.0.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        },
        "cz-conventional-changelog": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/cz-conventional-changelog/-/cz-conventional-changelog-3.2.0.tgz",
          "integrity": "sha512-yAYxeGpVi27hqIilG1nh4A9Bnx4J3Ov+eXy4koL3drrR+IO9GaWPsKjik20ht608Asqi8TQPf0mczhEeyAtMzg==",
          "dev": true,
          "requires": {
            "@commitlint/load": ">6.1.1",
            "chalk": "^2.4.1",
            "commitizen": "^4.0.3",
            "conventional-commit-types": "^3.0.0",
            "lodash.map": "^4.5.1",
            "longest": "^2.0.1",
            "word-wrap": "^1.0.3"
          }
        },
        "escape-string-regexp": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
          "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
          "dev": true
        },
        "fs-extra": {
          "version": "8.1.0",
          "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
          "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.2.0",
            "jsonfile": "^4.0.0",
            "universalify": "^0.1.0"
          }
        },
        "glob": {
          "version": "7.1.4",
          "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
          "integrity": "sha512-hkLPepehmnKk41pUGm3sYxoFs/umurYfYJCerbXEyFIWcAzvpipAgVkBqqT9RBKMGjnq6kMuyYwha6csxbiM1A==",
          "dev": true,
          "requires": {
            "fs.realpath": "^1.0.0",
            "inflight": "^1.0.4",
            "inherits": "2",
            "minimatch": "^3.0.4",
            "once": "^1.3.0",
            "path-is-absolute": "^1.0.0"
          }
        },
        "has-flag": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
          "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
          "dev": true
        },
        "jsonfile": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
          "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.6"
          }
        },
        "strip-bom": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
          "integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==",
          "dev": true
        },
        "strip-json-comments": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.0.1.tgz",
          "integrity": "sha512-VTyMAUfdm047mwKl+u79WIdrZxtFtn+nBxHeb844XBQ9uMNTuTHdx2hc5RiAJYqwTj3wc/xe5HLSdJSkJ+WfZw==",
          "dev": true
        },
        "supports-color": {
          "version": "5.5.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
          "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        },
        "universalify": {
          "version": "0.1.2",
          "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
          "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
          "dev": true
        }
      }
    },
    "common-path-prefix": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/common-path-prefix/-/common-path-prefix-3.0.0.tgz",
      "integrity": "sha512-QE33hToZseCH3jS0qN96O/bSh3kaw/h+Tq7ngyY9eWDUnTlTNUyqfqvCXioLe5Na5jFsL78ra/wuBU4iuEgd4w==",
      "dev": true
    },
    "commondir": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
      "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs=",
      "dev": true
    },
    "compare-func": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/compare-func/-/compare-func-2.0.0.tgz",
      "integrity": "sha512-zHig5N+tPWARooBnb0Zx1MFcdfpyJrfTJ3Y5L+IFvUm8rM74hHz66z0gw0x4tijh5CorKkKUCnW82R2vmpeCRA==",
      "dev": true,
      "requires": {
        "array-ify": "^1.0.0",
        "dot-prop": "^5.1.0"
      }
    },
    "component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",
      "dev": true
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
      "dev": true
    },
    "concat-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-2.0.0.tgz",
      "integrity": "sha512-MWufYdFw53ccGjCA+Ol7XJYpAlW6/prSMzuPOTRnJGcGzuhLn4Scrz7qf6o8bROZ514ltazcIFJZevcfbo0x7A==",
      "dev": true,
      "requires": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^3.0.2",
        "typedarray": "^0.0.6"
      }
    },
    "concordance": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/concordance/-/concordance-5.0.4.tgz",
      "integrity": "sha512-OAcsnTEYu1ARJqWVGwf4zh4JDfHZEaSNlNccFmt8YjB2l/n19/PF2viLINHc57vO4FKIAFl2FWASIGZZWZ2Kxw==",
      "dev": true,
      "requires": {
        "date-time": "^3.1.0",
        "esutils": "^2.0.3",
        "fast-diff": "^1.2.0",
        "js-string-escape": "^1.0.1",
        "lodash": "^4.17.15",
        "md5-hex": "^3.0.1",
        "semver": "^7.3.2",
        "well-known-symbols": "^2.0.0"
      }
    },
    "configstore": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/configstore/-/configstore-5.0.1.tgz",
      "integrity": "sha512-aMKprgk5YhBNyH25hj8wGt2+D52Sw1DRRIzqBwLp2Ya9mFmY8KPvvtvmna8SxVR9JMZ4kzMD68N22vlaRpkeFA==",
      "dev": true,
      "requires": {
        "dot-prop": "^5.2.0",
        "graceful-fs": "^4.1.2",
        "make-dir": "^3.0.0",
        "unique-string": "^2.0.0",
        "write-file-atomic": "^3.0.0",
        "xdg-basedir": "^4.0.0"
      }
    },
    "contains-path": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/contains-path/-/contains-path-0.1.0.tgz",
      "integrity": "sha1-/ozxhP9mcLa67wGp1IYaXL7EEgo=",
      "dev": true
    },
    "conventional-changelog": {
      "version": "3.1.24",
      "resolved": "https://registry.npmjs.org/conventional-changelog/-/conventional-changelog-3.1.24.tgz",
      "integrity": "sha512-ed6k8PO00UVvhExYohroVPXcOJ/K1N0/drJHx/faTH37OIZthlecuLIRX/T6uOp682CAoVoFpu+sSEaeuH6Asg==",
      "dev": true,
      "requires": {
        "conventional-changelog-angular": "^5.0.12",
        "conventional-changelog-atom": "^2.0.8",
        "conventional-changelog-codemirror": "^2.0.8",
        "conventional-changelog-conventionalcommits": "^4.5.0",
        "conventional-changelog-core": "^4.2.1",
        "conventional-changelog-ember": "^2.0.9",
        "conventional-changelog-eslint": "^3.0.9",
        "conventional-changelog-express": "^2.0.6",
        "conventional-changelog-jquery": "^3.0.11",
        "conventional-changelog-jshint": "^2.0.9",
        "conventional-changelog-preset-loader": "^2.3.4"
      }
    },
    "conventional-changelog-angular": {
      "version": "5.0.12",
      "resolved": "https://registry.npmjs.org/conventional-changelog-angular/-/conventional-changelog-angular-5.0.12.tgz",
      "integrity": "sha512-5GLsbnkR/7A89RyHLvvoExbiGbd9xKdKqDTrArnPbOqBqG/2wIosu0fHwpeIRI8Tl94MhVNBXcLJZl92ZQ5USw==",
      "dev": true,
      "requires": {
        "compare-func": "^2.0.0",
        "q": "^1.5.1"
      }
    },
    "conventional-changelog-atom": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/conventional-changelog-atom/-/conventional-changelog-atom-2.0.8.tgz",
      "integrity": "sha512-xo6v46icsFTK3bb7dY/8m2qvc8sZemRgdqLb/bjpBsH2UyOS8rKNTgcb5025Hri6IpANPApbXMg15QLb1LJpBw==",
      "dev": true,
      "requires": {
        "q": "^1.5.1"
      }
    },
    "conventional-changelog-codemirror": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/conventional-changelog-codemirror/-/conventional-changelog-codemirror-2.0.8.tgz",
      "integrity": "sha512-z5DAsn3uj1Vfp7po3gpt2Boc+Bdwmw2++ZHa5Ak9k0UKsYAO5mH1UBTN0qSCuJZREIhX6WU4E1p3IW2oRCNzQw==",
      "dev": true,
      "requires": {
        "q": "^1.5.1"
      }
    },
    "conventional-changelog-config-spec": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/conventional-changelog-config-spec/-/conventional-changelog-config-spec-2.1.0.tgz",
      "integrity": "sha512-IpVePh16EbbB02V+UA+HQnnPIohgXvJRxHcS5+Uwk4AT5LjzCZJm5sp/yqs5C6KZJ1jMsV4paEV13BN1pvDuxQ==",
      "dev": true
    },
    "conventional-changelog-conventionalcommits": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/conventional-changelog-conventionalcommits/-/conventional-changelog-conventionalcommits-4.5.0.tgz",
      "integrity": "sha512-buge9xDvjjOxJlyxUnar/+6i/aVEVGA7EEh4OafBCXPlLUQPGbRUBhBUveWRxzvR8TEjhKEP4BdepnpG2FSZXw==",
      "dev": true,
      "requires": {
        "compare-func": "^2.0.0",
        "lodash": "^4.17.15",
        "q": "^1.5.1"
      }
    },
    "conventional-changelog-core": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/conventional-changelog-core/-/conventional-changelog-core-4.2.2.tgz",
      "integrity": "sha512-7pDpRUiobQDNkwHyJG7k9f6maPo9tfPzkSWbRq97GGiZqisElhnvUZSvyQH20ogfOjntB5aadvv6NNcKL1sReg==",
      "dev": true,
      "requires": {
        "add-stream": "^1.0.0",
        "conventional-changelog-writer": "^4.0.18",
        "conventional-commits-parser": "^3.2.0",
        "dateformat": "^3.0.0",
        "get-pkg-repo": "^1.0.0",
        "git-raw-commits": "^2.0.8",
        "git-remote-origin-url": "^2.0.0",
        "git-semver-tags": "^4.1.1",
        "lodash": "^4.17.15",
        "normalize-package-data": "^3.0.0",
        "q": "^1.5.1",
        "read-pkg": "^3.0.0",
        "read-pkg-up": "^3.0.0",
        "shelljs": "^0.8.3",
        "through2": "^4.0.0"
      },
      "dependencies": {
        "find-up": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
          "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
          "dev": true,
          "requires": {
            "locate-path": "^2.0.0"
          }
        },
        "hosted-git-info": {
          "version": "4.0.2",
          "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.0.2.tgz",
          "integrity": "sha512-c9OGXbZ3guC/xOlCg1Ci/VgWlwsqDv1yMQL1CWqXDL0hDjXuNcq0zuR4xqPSuasI3kqFDhqSyTjREz5gzq0fXg==",
          "dev": true,
          "requires": {
            "lru-cache": "^6.0.0"
          }
        },
        "load-json-file": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
          "integrity": "sha1-L19Fq5HjMhYjT9U62rZo607AmTs=",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.2",
            "parse-json": "^4.0.0",
            "pify": "^3.0.0",
            "strip-bom": "^3.0.0"
          }
        },
        "locate-path": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
          "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
          "dev": true,
          "requires": {
            "p-locate": "^2.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "normalize-package-data": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.2.tgz",
          "integrity": "sha512-6CdZocmfGaKnIHPVFhJJZ3GuR8SsLKvDANFp47Jmy51aKIr8akjAWTSxtpI+MBgBFdSMRyo4hMpDlT6dTffgZg==",
          "dev": true,
          "requires": {
            "hosted-git-info": "^4.0.1",
            "resolve": "^1.20.0",
            "semver": "^7.3.4",
            "validate-npm-package-license": "^3.0.1"
          }
        },
        "p-limit": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
          "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
          "dev": true,
          "requires": {
            "p-try": "^1.0.0"
          }
        },
        "p-locate": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
          "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
          "dev": true,
          "requires": {
            "p-limit": "^1.1.0"
          }
        },
        "p-try": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
          "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
          "dev": true
        },
        "path-exists": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
          "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
          "dev": true
        },
        "path-type": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
          "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
          "dev": true,
          "requires": {
            "pify": "^3.0.0"
          }
        },
        "pify": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
          "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
          "dev": true
        },
        "read-pkg": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
          "integrity": "sha1-nLxoaXj+5l0WwA4rGcI3/Pbjg4k=",
          "dev": true,
          "requires": {
            "load-json-file": "^4.0.0",
            "normalize-package-data": "^2.3.2",
            "path-type": "^3.0.0"
          },
          "dependencies": {
            "hosted-git-info": {
              "version": "2.8.9",
              "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
              "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
              "dev": true
            },
            "normalize-package-data": {
              "version": "2.5.0",
              "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
              "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
              "dev": true,
              "requires": {
                "hosted-git-info": "^2.1.4",
                "resolve": "^1.10.0",
                "semver": "2 || 3 || 4 || 5",
                "validate-npm-package-license": "^3.0.1"
              }
            },
            "semver": {
              "version": "5.7.1",
              "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
              "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
              "dev": true
            }
          }
        },
        "read-pkg-up": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-3.0.0.tgz",
          "integrity": "sha1-PtSWaF26D4/hGNBpHcUfSh/5bwc=",
          "dev": true,
          "requires": {
            "find-up": "^2.0.0",
            "read-pkg": "^3.0.0"
          }
        }
      }
    },
    "conventional-changelog-ember": {
      "version": "2.0.9",
      "resolved": "https://registry.npmjs.org/conventional-changelog-ember/-/conventional-changelog-ember-2.0.9.tgz",
      "integrity": "sha512-ulzIReoZEvZCBDhcNYfDIsLTHzYHc7awh+eI44ZtV5cx6LVxLlVtEmcO+2/kGIHGtw+qVabJYjdI5cJOQgXh1A==",
      "dev": true,
      "requires": {
        "q": "^1.5.1"
      }
    },
    "conventional-changelog-eslint": {
      "version": "3.0.9",
      "resolved": "https://registry.npmjs.org/conventional-changelog-eslint/-/conventional-changelog-eslint-3.0.9.tgz",
      "integrity": "sha512-6NpUCMgU8qmWmyAMSZO5NrRd7rTgErjrm4VASam2u5jrZS0n38V7Y9CzTtLT2qwz5xEChDR4BduoWIr8TfwvXA==",
      "dev": true,
      "requires": {
        "q": "^1.5.1"
      }
    },
    "conventional-changelog-express": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/conventional-changelog-express/-/conventional-changelog-express-2.0.6.tgz",
      "integrity": "sha512-SDez2f3iVJw6V563O3pRtNwXtQaSmEfTCaTBPCqn0oG0mfkq0rX4hHBq5P7De2MncoRixrALj3u3oQsNK+Q0pQ==",
      "dev": true,
      "requires": {
        "q": "^1.5.1"
      }
    },
    "conventional-changelog-jquery": {
      "version": "3.0.11",
      "resolved": "https://registry.npmjs.org/conventional-changelog-jquery/-/conventional-changelog-jquery-3.0.11.tgz",
      "integrity": "sha512-x8AWz5/Td55F7+o/9LQ6cQIPwrCjfJQ5Zmfqi8thwUEKHstEn4kTIofXub7plf1xvFA2TqhZlq7fy5OmV6BOMw==",
      "dev": true,
      "requires": {
        "q": "^1.5.1"
      }
    },
    "conventional-changelog-jshint": {
      "version": "2.0.9",
      "resolved": "https://registry.npmjs.org/conventional-changelog-jshint/-/conventional-changelog-jshint-2.0.9.tgz",
      "integrity": "sha512-wMLdaIzq6TNnMHMy31hql02OEQ8nCQfExw1SE0hYL5KvU+JCTuPaDO+7JiogGT2gJAxiUGATdtYYfh+nT+6riA==",
      "dev": true,
      "requires": {
        "compare-func": "^2.0.0",
        "q": "^1.5.1"
      }
    },
    "conventional-changelog-preset-loader": {
      "version": "2.3.4",
      "resolved": "https://registry.npmjs.org/conventional-changelog-preset-loader/-/conventional-changelog-preset-loader-2.3.4.tgz",
      "integrity": "sha512-GEKRWkrSAZeTq5+YjUZOYxdHq+ci4dNwHvpaBC3+ENalzFWuCWa9EZXSuZBpkr72sMdKB+1fyDV4takK1Lf58g==",
      "dev": true
    },
    "conventional-changelog-writer": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/conventional-changelog-writer/-/conventional-changelog-writer-4.1.0.tgz",
      "integrity": "sha512-WwKcUp7WyXYGQmkLsX4QmU42AZ1lqlvRW9mqoyiQzdD+rJWbTepdWoKJuwXTS+yq79XKnQNa93/roViPQrAQgw==",
      "dev": true,
      "requires": {
        "compare-func": "^2.0.0",
        "conventional-commits-filter": "^2.0.7",
        "dateformat": "^3.0.0",
        "handlebars": "^4.7.6",
        "json-stringify-safe": "^5.0.1",
        "lodash": "^4.17.15",
        "meow": "^8.0.0",
        "semver": "^6.0.0",
        "split": "^1.0.0",
        "through2": "^4.0.0"
      },
      "dependencies": {
        "hosted-git-info": {
          "version": "4.0.2",
          "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.0.2.tgz",
          "integrity": "sha512-c9OGXbZ3guC/xOlCg1Ci/VgWlwsqDv1yMQL1CWqXDL0hDjXuNcq0zuR4xqPSuasI3kqFDhqSyTjREz5gzq0fXg==",
          "dev": true,
          "requires": {
            "lru-cache": "^6.0.0"
          }
        },
        "meow": {
          "version": "8.1.2",
          "resolved": "https://registry.npmjs.org/meow/-/meow-8.1.2.tgz",
          "integrity": "sha512-r85E3NdZ+mpYk1C6RjPFEMSE+s1iZMuHtsHAqY0DT3jZczl0diWUZ8g6oU7h0M9cD2EL+PzaYghhCLzR0ZNn5Q==",
          "dev": true,
          "requires": {
            "@types/minimist": "^1.2.0",
            "camelcase-keys": "^6.2.2",
            "decamelize-keys": "^1.1.0",
            "hard-rejection": "^2.1.0",
            "minimist-options": "4.1.0",
            "normalize-package-data": "^3.0.0",
            "read-pkg-up": "^7.0.1",
            "redent": "^3.0.0",
            "trim-newlines": "^3.0.0",
            "type-fest": "^0.18.0",
            "yargs-parser": "^20.2.3"
          }
        },
        "normalize-package-data": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.2.tgz",
          "integrity": "sha512-6CdZocmfGaKnIHPVFhJJZ3GuR8SsLKvDANFp47Jmy51aKIr8akjAWTSxtpI+MBgBFdSMRyo4hMpDlT6dTffgZg==",
          "dev": true,
          "requires": {
            "hosted-git-info": "^4.0.1",
            "resolve": "^1.20.0",
            "semver": "^7.3.4",
            "validate-npm-package-license": "^3.0.1"
          },
          "dependencies": {
            "semver": {
              "version": "7.3.5",
              "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
              "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
              "dev": true,
              "requires": {
                "lru-cache": "^6.0.0"
              }
            }
          }
        },
        "read-pkg-up": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
          "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
          "dev": true,
          "requires": {
            "find-up": "^4.1.0",
            "read-pkg": "^5.2.0",
            "type-fest": "^0.8.1"
          },
          "dependencies": {
            "type-fest": {
              "version": "0.8.1",
              "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
              "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
              "dev": true
            }
          }
        },
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        },
        "type-fest": {
          "version": "0.18.1",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.18.1.tgz",
          "integrity": "sha512-OIAYXk8+ISY+qTOwkHtKqzAuxchoMiD9Udx+FSGQDuiRR+PJKJHc2NJAXlbhkGwTt/4/nKZxELY1w3ReWOL8mw==",
          "dev": true
        }
      }
    },
    "conventional-commit-types": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/conventional-commit-types/-/conventional-commit-types-3.0.0.tgz",
      "integrity": "sha512-SmmCYnOniSsAa9GqWOeLqc179lfr5TRu5b4QFDkbsrJ5TZjPJx85wtOr3zn+1dbeNiXDKGPbZ72IKbPhLXh/Lg==",
      "dev": true
    },
    "conventional-commits-filter": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/conventional-commits-filter/-/conventional-commits-filter-2.0.7.tgz",
      "integrity": "sha512-ASS9SamOP4TbCClsRHxIHXRfcGCnIoQqkvAzCSbZzTFLfcTqJVugB0agRgsEELsqaeWgsXv513eS116wnlSSPA==",
      "dev": true,
      "requires": {
        "lodash.ismatch": "^4.4.0",
        "modify-values": "^1.0.0"
      }
    },
    "conventional-commits-parser": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/conventional-commits-parser/-/conventional-commits-parser-3.2.1.tgz",
      "integrity": "sha512-OG9kQtmMZBJD/32NEw5IhN5+HnBqVjy03eC+I71I0oQRFA5rOgA4OtPOYG7mz1GkCfCNxn3gKIX8EiHJYuf1cA==",
      "dev": true,
      "requires": {
        "is-text-path": "^1.0.1",
        "JSONStream": "^1.0.4",
        "lodash": "^4.17.15",
        "meow": "^8.0.0",
        "split2": "^3.0.0",
        "through2": "^4.0.0",
        "trim-off-newlines": "^1.0.0"
      },
      "dependencies": {
        "hosted-git-info": {
          "version": "4.0.2",
          "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.0.2.tgz",
          "integrity": "sha512-c9OGXbZ3guC/xOlCg1Ci/VgWlwsqDv1yMQL1CWqXDL0hDjXuNcq0zuR4xqPSuasI3kqFDhqSyTjREz5gzq0fXg==",
          "dev": true,
          "requires": {
            "lru-cache": "^6.0.0"
          }
        },
        "meow": {
          "version": "8.1.2",
          "resolved": "https://registry.npmjs.org/meow/-/meow-8.1.2.tgz",
          "integrity": "sha512-r85E3NdZ+mpYk1C6RjPFEMSE+s1iZMuHtsHAqY0DT3jZczl0diWUZ8g6oU7h0M9cD2EL+PzaYghhCLzR0ZNn5Q==",
          "dev": true,
          "requires": {
            "@types/minimist": "^1.2.0",
            "camelcase-keys": "^6.2.2",
            "decamelize-keys": "^1.1.0",
            "hard-rejection": "^2.1.0",
            "minimist-options": "4.1.0",
            "normalize-package-data": "^3.0.0",
            "read-pkg-up": "^7.0.1",
            "redent": "^3.0.0",
            "trim-newlines": "^3.0.0",
            "type-fest": "^0.18.0",
            "yargs-parser": "^20.2.3"
          }
        },
        "normalize-package-data": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.2.tgz",
          "integrity": "sha512-6CdZocmfGaKnIHPVFhJJZ3GuR8SsLKvDANFp47Jmy51aKIr8akjAWTSxtpI+MBgBFdSMRyo4hMpDlT6dTffgZg==",
          "dev": true,
          "requires": {
            "hosted-git-info": "^4.0.1",
            "resolve": "^1.20.0",
            "semver": "^7.3.4",
            "validate-npm-package-license": "^3.0.1"
          }
        },
        "read-pkg-up": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
          "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
          "dev": true,
          "requires": {
            "find-up": "^4.1.0",
            "read-pkg": "^5.2.0",
            "type-fest": "^0.8.1"
          },
          "dependencies": {
            "type-fest": {
              "version": "0.8.1",
              "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
              "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
              "dev": true
            }
          }
        },
        "type-fest": {
          "version": "0.18.1",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.18.1.tgz",
          "integrity": "sha512-OIAYXk8+ISY+qTOwkHtKqzAuxchoMiD9Udx+FSGQDuiRR+PJKJHc2NJAXlbhkGwTt/4/nKZxELY1w3ReWOL8mw==",
          "dev": true
        }
      }
    },
    "conventional-recommended-bump": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/conventional-recommended-bump/-/conventional-recommended-bump-6.1.0.tgz",
      "integrity": "sha512-uiApbSiNGM/kkdL9GTOLAqC4hbptObFo4wW2QRyHsKciGAfQuLU1ShZ1BIVI/+K2BE/W1AWYQMCXAsv4dyKPaw==",
      "dev": true,
      "requires": {
        "concat-stream": "^2.0.0",
        "conventional-changelog-preset-loader": "^2.3.4",
        "conventional-commits-filter": "^2.0.7",
        "conventional-commits-parser": "^3.2.0",
        "git-raw-commits": "^2.0.8",
        "git-semver-tags": "^4.1.1",
        "meow": "^8.0.0",
        "q": "^1.5.1"
      },
      "dependencies": {
        "hosted-git-info": {
          "version": "4.0.2",
          "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.0.2.tgz",
          "integrity": "sha512-c9OGXbZ3guC/xOlCg1Ci/VgWlwsqDv1yMQL1CWqXDL0hDjXuNcq0zuR4xqPSuasI3kqFDhqSyTjREz5gzq0fXg==",
          "dev": true,
          "requires": {
            "lru-cache": "^6.0.0"
          }
        },
        "meow": {
          "version": "8.1.2",
          "resolved": "https://registry.npmjs.org/meow/-/meow-8.1.2.tgz",
          "integrity": "sha512-r85E3NdZ+mpYk1C6RjPFEMSE+s1iZMuHtsHAqY0DT3jZczl0diWUZ8g6oU7h0M9cD2EL+PzaYghhCLzR0ZNn5Q==",
          "dev": true,
          "requires": {
            "@types/minimist": "^1.2.0",
            "camelcase-keys": "^6.2.2",
            "decamelize-keys": "^1.1.0",
            "hard-rejection": "^2.1.0",
            "minimist-options": "4.1.0",
            "normalize-package-data": "^3.0.0",
            "read-pkg-up": "^7.0.1",
            "redent": "^3.0.0",
            "trim-newlines": "^3.0.0",
            "type-fest": "^0.18.0",
            "yargs-parser": "^20.2.3"
          }
        },
        "normalize-package-data": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.2.tgz",
          "integrity": "sha512-6CdZocmfGaKnIHPVFhJJZ3GuR8SsLKvDANFp47Jmy51aKIr8akjAWTSxtpI+MBgBFdSMRyo4hMpDlT6dTffgZg==",
          "dev": true,
          "requires": {
            "hosted-git-info": "^4.0.1",
            "resolve": "^1.20.0",
            "semver": "^7.3.4",
            "validate-npm-package-license": "^3.0.1"
          }
        },
        "read-pkg-up": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
          "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
          "dev": true,
          "requires": {
            "find-up": "^4.1.0",
            "read-pkg": "^5.2.0",
            "type-fest": "^0.8.1"
          },
          "dependencies": {
            "type-fest": {
              "version": "0.8.1",
              "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
              "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
              "dev": true
            }
          }
        },
        "type-fest": {
          "version": "0.18.1",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.18.1.tgz",
          "integrity": "sha512-OIAYXk8+ISY+qTOwkHtKqzAuxchoMiD9Udx+FSGQDuiRR+PJKJHc2NJAXlbhkGwTt/4/nKZxELY1w3ReWOL8mw==",
          "dev": true
        }
      }
    },
    "convert-source-map": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
      "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
      "dev": true,
      "requires": {
        "safe-buffer": "~5.1.1"
      }
    },
    "convert-to-spaces": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/convert-to-spaces/-/convert-to-spaces-1.0.2.tgz",
      "integrity": "sha1-fj5Iu+bZl7FBfdyihoIEtNPYVxU=",
      "dev": true
    },
    "copy-descriptor": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
      "dev": true
    },
    "core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
      "dev": true
    },
    "cosmiconfig": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.0.tgz",
      "integrity": "sha512-pondGvTuVYDk++upghXJabWzL6Kxu6f26ljFw64Swq9v6sQPUL3EUlVDV56diOjpCayKihL6hVe8exIACU4XcA==",
      "dev": true,
      "optional": true,
      "requires": {
        "@types/parse-json": "^4.0.0",
        "import-fresh": "^3.2.1",
        "parse-json": "^5.0.0",
        "path-type": "^4.0.0",
        "yaml": "^1.10.0"
      },
      "dependencies": {
        "parse-json": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
          "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
          "dev": true,
          "optional": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "error-ex": "^1.3.1",
            "json-parse-even-better-errors": "^2.3.0",
            "lines-and-columns": "^1.1.6"
          }
        }
      }
    },
    "create-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
      "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",
      "dev": true
    },
    "cross-spawn": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
      "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
      "dev": true,
      "requires": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "dependencies": {
        "which": {
          "version": "2.0.2",
          "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
          "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
          "dev": true,
          "requires": {
            "isexe": "^2.0.0"
          }
        }
      }
    },
    "crypto-random-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-2.0.0.tgz",
      "integrity": "sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA==",
      "dev": true
    },
    "cspell": {
      "version": "4.2.8",
      "resolved": "https://registry.npmjs.org/cspell/-/cspell-4.2.8.tgz",
      "integrity": "sha512-eqan8+lCU9bSp8Tl4+SR/ccBnuPyMmp7evck/RlMdFTjLh/s+3vQ5hQyBzbzK8w2MMqL84CymW7BwIOKjpylSg==",
      "dev": true,
      "requires": {
        "chalk": "^4.1.0",
        "commander": "^7.0.0",
        "comment-json": "^4.0.6",
        "cspell-glob": "^0.1.25",
        "cspell-lib": "^4.3.12",
        "fs-extra": "^9.1.0",
        "gensequence": "^3.1.1",
        "get-stdin": "^8.0.0",
        "glob": "^7.1.6",
        "minimatch": "^3.0.4"
      }
    },
    "cspell-glob": {
      "version": "0.1.25",
      "resolved": "https://registry.npmjs.org/cspell-glob/-/cspell-glob-0.1.25.tgz",
      "integrity": "sha512-/XaSHrGBpMJa+duFz3GKOWfrijrfdHT7a/XGgIcq3cymCSpOH+DPho42sl0jLI/hjM+8yv2m8aEoxRT8yVSnlg==",
      "dev": true,
      "requires": {
        "micromatch": "^4.0.2"
      }
    },
    "cspell-io": {
      "version": "4.1.7",
      "resolved": "https://registry.npmjs.org/cspell-io/-/cspell-io-4.1.7.tgz",
      "integrity": "sha512-V0/tUu9FnIS3v+vAvDT6NNa14Nc/zUNX8+YUUOfFAiDJJTdqefmvcWjOJBIMYBf3wIk9iWLmLbMM+bNHqr7DSQ==",
      "dev": true,
      "requires": {
        "iconv-lite": "^0.6.2",
        "iterable-to-stream": "^1.0.1"
      }
    },
    "cspell-lib": {
      "version": "4.3.12",
      "resolved": "https://registry.npmjs.org/cspell-lib/-/cspell-lib-4.3.12.tgz",
      "integrity": "sha512-yCCb6MoW1K8Tsr/WVEQoO4dfYhH9bCsjQayccb8MlyDaNNuWJHuX+gUGHsZSXSuChSh8PrTWKXJzs13/uM977g==",
      "dev": true,
      "requires": {
        "@cspell/dict-aws": "^1.0.13",
        "@cspell/dict-bash": "^1.0.11",
        "@cspell/dict-companies": "^1.0.35",
        "@cspell/dict-cpp": "^1.1.37",
        "@cspell/dict-cryptocurrencies": "^1.0.10",
        "@cspell/dict-csharp": "^1.0.10",
        "@cspell/dict-css": "^1.0.10",
        "@cspell/dict-django": "^1.0.25",
        "@cspell/dict-dotnet": "^1.0.24",
        "@cspell/dict-elixir": "^1.0.23",
        "@cspell/dict-en_us": "^1.2.39",
        "@cspell/dict-en-gb": "^1.1.27",
        "@cspell/dict-filetypes": "^1.1.5",
        "@cspell/dict-fonts": "^1.0.13",
        "@cspell/dict-fullstack": "^1.0.36",
        "@cspell/dict-golang": "^1.1.24",
        "@cspell/dict-haskell": "^1.0.12",
        "@cspell/dict-html": "^1.1.5",
        "@cspell/dict-html-symbol-entities": "^1.0.23",
        "@cspell/dict-java": "^1.0.22",
        "@cspell/dict-latex": "^1.0.23",
        "@cspell/dict-lorem-ipsum": "^1.0.22",
        "@cspell/dict-lua": "^1.0.16",
        "@cspell/dict-node": "^1.0.10",
        "@cspell/dict-npm": "^1.0.10",
        "@cspell/dict-php": "^1.0.23",
        "@cspell/dict-powershell": "^1.0.14",
        "@cspell/dict-python": "^1.0.32",
        "@cspell/dict-ruby": "^1.0.12",
        "@cspell/dict-rust": "^1.0.22",
        "@cspell/dict-scala": "^1.0.21",
        "@cspell/dict-software-terms": "^1.0.24",
        "@cspell/dict-typescript": "^1.0.16",
        "comment-json": "^4.1.0",
        "configstore": "^5.0.1",
        "cspell-io": "^4.1.7",
        "cspell-trie-lib": "^4.2.8",
        "cspell-util-bundle": "^4.1.11",
        "fs-extra": "^9.1.0",
        "gensequence": "^3.1.1",
        "minimatch": "^3.0.4",
        "resolve-from": "^5.0.0",
        "resolve-global": "^1.0.0",
        "vscode-uri": "^3.0.2"
      }
    },
    "cspell-trie-lib": {
      "version": "4.2.8",
      "resolved": "https://registry.npmjs.org/cspell-trie-lib/-/cspell-trie-lib-4.2.8.tgz",
      "integrity": "sha512-Nt3c0gxOYXIc3/yhALDukpje1BgR6guvlUKWQO2zb0r7qRWpwUw2j2YM4dWbHQeH/3Hx5ei4Braa6cMaiJ5YBw==",
      "dev": true,
      "requires": {
        "gensequence": "^3.1.1"
      }
    },
    "cspell-util-bundle": {
      "version": "4.1.11",
      "resolved": "https://registry.npmjs.org/cspell-util-bundle/-/cspell-util-bundle-4.1.11.tgz",
      "integrity": "sha512-or3OGKydZs1NwweMIgnA48k8H3F5zK4e5lonjUhpEzLYQZ2nB23decdoqZ8ogFC8pFTA40tZKDsMJ0b+65gX4Q==",
      "dev": true
    },
    "currently-unhandled": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/currently-unhandled/-/currently-unhandled-0.4.1.tgz",
      "integrity": "sha1-mI3zP+qxke95mmE2nddsF635V+o=",
      "dev": true,
      "requires": {
        "array-find-index": "^1.0.1"
      }
    },
    "cz-conventional-changelog": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/cz-conventional-changelog/-/cz-conventional-changelog-3.3.0.tgz",
      "integrity": "sha512-U466fIzU5U22eES5lTNiNbZ+d8dfcHcssH4o7QsdWaCcRs/feIPCxKYSWkYBNs5mny7MvEfwpTLWjvbm94hecw==",
      "dev": true,
      "requires": {
        "@commitlint/load": ">6.1.1",
        "chalk": "^2.4.1",
        "commitizen": "^4.0.3",
        "conventional-commit-types": "^3.0.0",
        "lodash.map": "^4.5.1",
        "longest": "^2.0.1",
        "word-wrap": "^1.0.3"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        },
        "escape-string-regexp": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
          "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
          "dev": true
        },
        "has-flag": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
          "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
          "dev": true
        },
        "supports-color": {
          "version": "5.5.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
          "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        }
      }
    },
    "dargs": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/dargs/-/dargs-7.0.0.tgz",
      "integrity": "sha512-2iy1EkLdlBzQGvbweYRFxmFath8+K7+AKB0TlhHWkNuH+TmovaMH/Wp7V7R4u7f4SnX3OgLsU9t1NI9ioDnUpg==",
      "dev": true
    },
    "date-time": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/date-time/-/date-time-3.1.0.tgz",
      "integrity": "sha512-uqCUKXE5q1PNBXjPqvwhwJf9SwMoAHBgWJ6DcrnS5o+W2JOiIILl0JEdVD8SGujrNS02GGxgwAg2PN2zONgtjg==",
      "dev": true,
      "requires": {
        "time-zone": "^1.0.0"
      }
    },
    "dateformat": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/dateformat/-/dateformat-3.0.3.tgz",
      "integrity": "sha512-jyCETtSl3VMZMWeRo7iY1FL19ges1t55hMo5yaam4Jrsm5EPL89UQkoQRyiI+Yf4k8r2ZpdngkV8hr1lIdjb3Q==",
      "dev": true
    },
    "debug": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
      "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
      "dev": true,
      "requires": {
        "ms": "2.1.2"
      }
    },
    "decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
      "dev": true
    },
    "decamelize-keys": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/decamelize-keys/-/decamelize-keys-1.1.0.tgz",
      "integrity": "sha1-0XGoeTMlKAfrPLYdwcFEXQeN8tk=",
      "dev": true,
      "requires": {
        "decamelize": "^1.1.0",
        "map-obj": "^1.0.0"
      },
      "dependencies": {
        "map-obj": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz",
          "integrity": "sha1-2TPOuSBdgr3PSIb2dCvcK03qFG0=",
          "dev": true
        }
      }
    },
    "decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
      "dev": true
    },
    "decompress-response": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
      "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
      "dev": true,
      "requires": {
        "mimic-response": "^1.0.0"
      }
    },
    "dedent": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/dedent/-/dedent-0.7.0.tgz",
      "integrity": "sha1-JJXduvbrh0q7Dhvp3yLS5aVEMmw=",
      "dev": true
    },
    "deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
      "dev": true
    },
    "deep-is": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
      "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
      "dev": true
    },
    "deepmerge": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.2.2.tgz",
      "integrity": "sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg==",
      "dev": true
    },
    "default-require-extensions": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/default-require-extensions/-/default-require-extensions-3.0.0.tgz",
      "integrity": "sha512-ek6DpXq/SCpvjhpFsLFRVtIxJCRw6fUR42lYMVZuUMK7n8eMz4Uh5clckdBjEpLhn/gEBZo7hDJnJcwdKLKQjg==",
      "dev": true,
      "requires": {
        "strip-bom": "^4.0.0"
      },
      "dependencies": {
        "strip-bom": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
          "integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==",
          "dev": true
        }
      }
    },
    "defaults": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
      "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
      "dev": true,
      "requires": {
        "clone": "^1.0.2"
      }
    },
    "defer-to-connect": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/defer-to-connect/-/defer-to-connect-1.1.3.tgz",
      "integrity": "sha512-0ISdNousHvZT2EiFlZeZAHBUvSxmKswVCEf8hW7KWgG4a8MVEu/3Vb6uWYozkjylyCxe0JBIiRB1jV45S70WVQ==",
      "dev": true
    },
    "define-properties": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "dev": true,
      "requires": {
        "object-keys": "^1.0.12"
      }
    },
    "define-property": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "dev": true,
      "requires": {
        "is-descriptor": "^1.0.2",
        "isobject": "^3.0.1"
      },
      "dependencies": {
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "del": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/del/-/del-6.0.0.tgz",
      "integrity": "sha512-1shh9DQ23L16oXSZKB2JxpL7iMy2E0S9d517ptA1P8iw0alkPtQcrKH7ru31rYtKwF499HkTu+DRzq3TCKDFRQ==",
      "dev": true,
      "requires": {
        "globby": "^11.0.1",
        "graceful-fs": "^4.2.4",
        "is-glob": "^4.0.1",
        "is-path-cwd": "^2.2.0",
        "is-path-inside": "^3.0.2",
        "p-map": "^4.0.0",
        "rimraf": "^3.0.2",
        "slash": "^3.0.0"
      }
    },
    "detect-file": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/detect-file/-/detect-file-1.0.0.tgz",
      "integrity": "sha1-8NZtA2cqglyxtzvbP+YjEMjlUrc=",
      "dev": true
    },
    "detect-indent": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/detect-indent/-/detect-indent-6.0.0.tgz",
      "integrity": "sha512-oSyFlqaTHCItVRGK5RmrmjB+CmaMOW7IaNA/kdxqhoa6d17j/5ce9O9eWXmV/KEdRwqpQA+Vqe8a8Bsybu4YnA==",
      "dev": true
    },
    "detect-newline": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/detect-newline/-/detect-newline-3.1.0.tgz",
      "integrity": "sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA==",
      "dev": true
    },
    "diff": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",
      "integrity": "sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==",
      "dev": true
    },
    "dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "dev": true,
      "requires": {
        "path-type": "^4.0.0"
      }
    },
    "doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "requires": {
        "esutils": "^2.0.2"
      }
    },
    "dot-prop": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.3.0.tgz",
      "integrity": "sha512-QM8q3zDe58hqUqjraQOmzZ1LIH9SWQJTlEKCH4kJ2oQvLZk7RbQXvtDM2XEq3fwkV9CCvvH4LA0AV+ogFsBM2Q==",
      "dev": true,
      "requires": {
        "is-obj": "^2.0.0"
      }
    },
    "dotgitignore": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/dotgitignore/-/dotgitignore-2.1.0.tgz",
      "integrity": "sha512-sCm11ak2oY6DglEPpCB8TixLjWAxd3kJTs6UIcSasNYxXdFPV+YKlye92c8H4kKFqV5qYMIh7d+cYecEg0dIkA==",
      "dev": true,
      "requires": {
        "find-up": "^3.0.0",
        "minimatch": "^3.0.4"
      },
      "dependencies": {
        "find-up": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
          "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
          "dev": true,
          "requires": {
            "locate-path": "^3.0.0"
          }
        },
        "locate-path": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
          "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
          "dev": true,
          "requires": {
            "p-locate": "^3.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "p-locate": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
          "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
          "dev": true,
          "requires": {
            "p-limit": "^2.0.0"
          }
        },
        "path-exists": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
          "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
          "dev": true
        }
      }
    },
    "duplexer3": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
      "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI=",
      "dev": true
    },
    "email-addresses": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/email-addresses/-/email-addresses-3.1.0.tgz",
      "integrity": "sha512-k0/r7GrWVL32kZlGwfPNgB2Y/mMXVTq/decgLczm/j34whdaspNrZO8CnXPf1laaHxI6ptUlsnAxN+UAPw+fzg==",
      "dev": true
    },
    "emittery": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/emittery/-/emittery-0.8.1.tgz",
      "integrity": "sha512-uDfvUjVrfGJJhymx/kz6prltenw1u7WrCg1oa94zYY8xxVpLLUu045LAT0dhDZdXG58/EpPL/5kA180fQ/qudg==",
      "dev": true
    },
    "emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true
    },
    "end-of-stream": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
      "dev": true,
      "requires": {
        "once": "^1.4.0"
      }
    },
    "enquirer": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/enquirer/-/enquirer-2.3.6.tgz",
      "integrity": "sha512-yjNnPr315/FjS4zIsUxYguYUPP2e1NK4d7E7ZOLiyYCcbFBiTMyID+2wvm2w6+pZ/odMA7cRkjhsPbltwBOrLg==",
      "dev": true,
      "requires": {
        "ansi-colors": "^4.1.1"
      }
    },
    "equal-length": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/equal-length/-/equal-length-1.0.1.tgz",
      "integrity": "sha1-IcoRLUirJLTh5//A5TOdMf38J0w=",
      "dev": true
    },
    "error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "dev": true,
      "requires": {
        "is-arrayish": "^0.2.1"
      }
    },
    "es-abstract": {
      "version": "1.18.0",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.18.0.tgz",
      "integrity": "sha512-LJzK7MrQa8TS0ja2w3YNLzUgJCGPdPOV1yVvezjNnS89D+VR08+Szt2mz3YB2Dck/+w5tfIq/RoUAFqJJGM2yw==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "es-to-primitive": "^1.2.1",
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.2",
        "is-callable": "^1.2.3",
        "is-negative-zero": "^2.0.1",
        "is-regex": "^1.1.2",
        "is-string": "^1.0.5",
        "object-inspect": "^1.9.0",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.2",
        "string.prototype.trimend": "^1.0.4",
        "string.prototype.trimstart": "^1.0.4",
        "unbox-primitive": "^1.0.0"
      }
    },
    "es-to-primitive": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
      "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
      "dev": true,
      "requires": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      }
    },
    "es6-error": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/es6-error/-/es6-error-4.1.1.tgz",
      "integrity": "sha512-Um/+FxMr9CISWh0bi5Zv0iOD+4cFh5qLeks1qhAopKVAJw3drgKbKySikp7wGhDL0HPeaja0P5ULZrxLkniUVg==",
      "dev": true
    },
    "escalade": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
      "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",
      "dev": true
    },
    "escape-goat": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/escape-goat/-/escape-goat-2.1.1.tgz",
      "integrity": "sha512-8/uIhbG12Csjy2JEW7D9pHbreaVaS/OpN3ycnyvElTdwM5n6GY6W6e2IPemfvGZeUMqZ9A/3GqIZMgKnBhAw/Q==",
      "dev": true
    },
    "escape-string-regexp": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
      "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==",
      "dev": true
    },
    "eslint": {
      "version": "7.23.0",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-7.23.0.tgz",
      "integrity": "sha512-kqvNVbdkjzpFy0XOszNwjkKzZ+6TcwCQ/h+ozlcIWwaimBBuhlQ4nN6kbiM2L+OjDcznkTJxzYfRFH92sx4a0Q==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "7.12.11",
        "@eslint/eslintrc": "^0.4.0",
        "ajv": "^6.10.0",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.0.1",
        "doctrine": "^3.0.0",
        "enquirer": "^2.3.5",
        "eslint-scope": "^5.1.1",
        "eslint-utils": "^2.1.0",
        "eslint-visitor-keys": "^2.0.0",
        "espree": "^7.3.1",
        "esquery": "^1.4.0",
        "esutils": "^2.0.2",
        "file-entry-cache": "^6.0.1",
        "functional-red-black-tree": "^1.0.1",
        "glob-parent": "^5.0.0",
        "globals": "^13.6.0",
        "ignore": "^4.0.6",
        "import-fresh": "^3.0.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "js-yaml": "^3.13.1",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash": "^4.17.21",
        "minimatch": "^3.0.4",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.1",
        "progress": "^2.0.0",
        "regexpp": "^3.1.0",
        "semver": "^7.2.1",
        "strip-ansi": "^6.0.0",
        "strip-json-comments": "^3.1.0",
        "table": "^6.0.4",
        "text-table": "^0.2.0",
        "v8-compile-cache": "^2.0.3"
      },
      "dependencies": {
        "@babel/code-frame": {
          "version": "7.12.11",
          "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.11.tgz",
          "integrity": "sha512-Zt1yodBx1UcyiePMSkWnU4hPqhwq7hGi2nFL1LeA3EUl+q2LQx16MISgJ0+z7dnmgvP9QtIleuETGOiOH1RcIw==",
          "dev": true,
          "requires": {
            "@babel/highlight": "^7.10.4"
          }
        },
        "ignore": {
          "version": "4.0.6",
          "resolved": "https://registry.npmjs.org/ignore/-/ignore-4.0.6.tgz",
          "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==",
          "dev": true
        },
        "strip-json-comments": {
          "version": "3.1.1",
          "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
          "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
          "dev": true
        }
      }
    },
    "eslint-config-prettier": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/eslint-config-prettier/-/eslint-config-prettier-6.15.0.tgz",
      "integrity": "sha512-a1+kOYLR8wMGustcgAjdydMsQ2A/2ipRPwRKUmfYaSxc9ZPcrku080Ctl6zrZzZNs/U82MjSv+qKREkoq3bJaw==",
      "dev": true,
      "requires": {
        "get-stdin": "^6.0.0"
      },
      "dependencies": {
        "get-stdin": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-6.0.0.tgz",
          "integrity": "sha512-jp4tHawyV7+fkkSKyvjuLZswblUtz+SQKzSWnBbii16BuZksJlU1wuBYXY75r+duh/llF1ur6oNwi+2ZzjKZ7g==",
          "dev": true
        }
      }
    },
    "eslint-import-resolver-node": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.4.tgz",
      "integrity": "sha512-ogtf+5AB/O+nM6DIeBUNr2fuT7ot9Qg/1harBfBtaP13ekEWFQEEMP94BCB7zaNW3gyY+8SHYF00rnqYwXKWOA==",
      "dev": true,
      "requires": {
        "debug": "^2.6.9",
        "resolve": "^1.13.1"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        }
      }
    },
    "eslint-module-utils": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.6.0.tgz",
      "integrity": "sha512-6j9xxegbqe8/kZY8cYpcp0xhbK0EgJlg3g9mib3/miLaExuuwc3n5UEfSnU6hWMbT0FAYVvDbL9RrRgpUeQIvA==",
      "dev": true,
      "requires": {
        "debug": "^2.6.9",
        "pkg-dir": "^2.0.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "find-up": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
          "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
          "dev": true,
          "requires": {
            "locate-path": "^2.0.0"
          }
        },
        "locate-path": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
          "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
          "dev": true,
          "requires": {
            "p-locate": "^2.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        },
        "p-limit": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
          "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
          "dev": true,
          "requires": {
            "p-try": "^1.0.0"
          }
        },
        "p-locate": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
          "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
          "dev": true,
          "requires": {
            "p-limit": "^1.1.0"
          }
        },
        "p-try": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
          "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
          "dev": true
        },
        "path-exists": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
          "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
          "dev": true
        },
        "pkg-dir": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-2.0.0.tgz",
          "integrity": "sha1-9tXREJ4Z1j7fQo4L1X4Sd3YVM0s=",
          "dev": true,
          "requires": {
            "find-up": "^2.1.0"
          }
        }
      }
    },
    "eslint-plugin-eslint-comments": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-eslint-comments/-/eslint-plugin-eslint-comments-3.2.0.tgz",
      "integrity": "sha512-0jkOl0hfojIHHmEHgmNdqv4fmh7300NdpA9FFpF7zaoLvB/QeXOGNLIo86oAveJFrfB1p05kC8hpEMHM8DwWVQ==",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^1.0.5",
        "ignore": "^5.0.5"
      },
      "dependencies": {
        "escape-string-regexp": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
          "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
          "dev": true
        }
      }
    },
    "eslint-plugin-functional": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-functional/-/eslint-plugin-functional-3.2.1.tgz",
      "integrity": "sha512-uJ8W0FznWsKp4exxO79b0xSc1WNROzDiVNGgSFOwdZCBeUHQf89BqwqlshNW9aSz/kg2gVGs+Ue6AeTpNSFM/g==",
      "dev": true,
      "requires": {
        "@typescript-eslint/experimental-utils": "^4.9.1",
        "array.prototype.flatmap": "^1.2.4",
        "deepmerge": "^4.2.2",
        "escape-string-regexp": "^4.0.0",
        "object.fromentries": "^2.0.3"
      },
      "dependencies": {
        "escape-string-regexp": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
          "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
          "dev": true
        }
      }
    },
    "eslint-plugin-import": {
      "version": "2.22.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.22.1.tgz",
      "integrity": "sha512-8K7JjINHOpH64ozkAhpT3sd+FswIZTfMZTjdx052pnWrgRCVfp8op9tbjpAk3DdUeI/Ba4C8OjdC0r90erHEOw==",
      "dev": true,
      "requires": {
        "array-includes": "^3.1.1",
        "array.prototype.flat": "^1.2.3",
        "contains-path": "^0.1.0",
        "debug": "^2.6.9",
        "doctrine": "1.5.0",
        "eslint-import-resolver-node": "^0.3.4",
        "eslint-module-utils": "^2.6.0",
        "has": "^1.0.3",
        "minimatch": "^3.0.4",
        "object.values": "^1.1.1",
        "read-pkg-up": "^2.0.0",
        "resolve": "^1.17.0",
        "tsconfig-paths": "^3.9.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "doctrine": {
          "version": "1.5.0",
          "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-1.5.0.tgz",
          "integrity": "sha1-N53Ocw9hZvds76TmcHoVmwLFpvo=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "isarray": "^1.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        }
      }
    },
    "eslint-scope": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
      "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
      "dev": true,
      "requires": {
        "esrecurse": "^4.3.0",
        "estraverse": "^4.1.1"
      }
    },
    "eslint-utils": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-2.1.0.tgz",
      "integrity": "sha512-w94dQYoauyvlDc43XnGB8lU3Zt713vNChgt4EWwhXAP2XkBvndfxF0AgIqKOOasjPIPzj9JqgwkwbCYD0/V3Zg==",
      "dev": true,
      "requires": {
        "eslint-visitor-keys": "^1.1.0"
      },
      "dependencies": {
        "eslint-visitor-keys": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz",
          "integrity": "sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==",
          "dev": true
        }
      }
    },
    "eslint-visitor-keys": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-2.0.0.tgz",
      "integrity": "sha512-QudtT6av5WXels9WjIM7qz1XD1cWGvX4gGXvp/zBn9nXG02D0utdU3Em2m/QjTnrsk6bBjmCygl3rmj118msQQ==",
      "dev": true
    },
    "espree": {
      "version": "7.3.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-7.3.1.tgz",
      "integrity": "sha512-v3JCNCE64umkFpmkFGqzVKsOT0tN1Zr+ueqLZfpV1Ob8e+CEgPWa+OxCoGH3tnhimMKIaBm4m/vaRpJ/krRz2g==",
      "dev": true,
      "requires": {
        "acorn": "^7.4.0",
        "acorn-jsx": "^5.3.1",
        "eslint-visitor-keys": "^1.3.0"
      },
      "dependencies": {
        "acorn": {
          "version": "7.4.1",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
          "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==",
          "dev": true
        },
        "eslint-visitor-keys": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz",
          "integrity": "sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==",
          "dev": true
        }
      }
    },
    "esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "dev": true
    },
    "esquery": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.4.0.tgz",
      "integrity": "sha512-cCDispWt5vHHtwMY2YrAQ4ibFkAL8RbH5YGBnZBc90MolvvfkkQcJro/aZiAQUlQ3qgrYS6D6v8Gc5G5CQsc9w==",
      "dev": true,
      "requires": {
        "estraverse": "^5.1.0"
      },
      "dependencies": {
        "estraverse": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
          "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ==",
          "dev": true
        }
      }
    },
    "esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "requires": {
        "estraverse": "^5.2.0"
      },
      "dependencies": {
        "estraverse": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
          "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ==",
          "dev": true
        }
      }
    },
    "estraverse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "dev": true
    },
    "esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true
    },
    "expand-brackets": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
      "dev": true,
      "requires": {
        "debug": "^2.3.3",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "posix-character-classes": "^0.1.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        }
      }
    },
    "expand-tilde": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/expand-tilde/-/expand-tilde-2.0.2.tgz",
      "integrity": "sha1-l+gBqgUt8CRU3kawK/YhZCzchQI=",
      "dev": true,
      "requires": {
        "homedir-polyfill": "^1.0.1"
      }
    },
    "extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dev": true,
      "requires": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "dev": true,
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        },
        "is-plain-object": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
          "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
          "dev": true,
          "requires": {
            "isobject": "^3.0.1"
          }
        }
      }
    },
    "external-editor": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
      "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
      "dev": true,
      "requires": {
        "chardet": "^0.7.0",
        "iconv-lite": "^0.4.24",
        "tmp": "^0.0.33"
      },
      "dependencies": {
        "iconv-lite": {
          "version": "0.4.24",
          "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
          "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
          "dev": true,
          "requires": {
            "safer-buffer": ">= 2.1.2 < 3"
          }
        }
      }
    },
    "extglob": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
      "dev": true,
      "requires": {
        "array-unique": "^0.3.2",
        "define-property": "^1.0.0",
        "expand-brackets": "^2.1.4",
        "extend-shallow": "^2.0.1",
        "fragment-cache": "^0.2.1",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true
    },
    "fast-diff": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/fast-diff/-/fast-diff-1.2.0.tgz",
      "integrity": "sha512-xJuoT5+L99XlZ8twedaRf6Ax2TgQVxvgZOYoPKqZufmJib0tL2tegPBOZb1pVNgIhlqDlA0eO0c3wBvQcmzx4w==",
      "dev": true
    },
    "fast-glob": {
      "version": "3.2.5",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.5.tgz",
      "integrity": "sha512-2DtFcgT68wiTTiwZ2hNdJfcHNke9XOfnwmBRWXhmeKM8rF0TGwmC/Qto3S7RoZKp5cilZbxzO5iTNTQsJ+EeDg==",
      "dev": true,
      "requires": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.0",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.2",
        "picomatch": "^2.2.1"
      }
    },
    "fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true
    },
    "fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
      "dev": true
    },
    "fastq": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.11.0.tgz",
      "integrity": "sha512-7Eczs8gIPDrVzT+EksYBcupqMyxSHXXrHOLRRxU2/DicV8789MRBRR8+Hc2uWzUupOs4YS4JzBmBxjjCVBxD/g==",
      "dev": true,
      "requires": {
        "reusify": "^1.0.4"
      }
    },
    "figures": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/figures/-/figures-3.2.0.tgz",
      "integrity": "sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^1.0.5"
      },
      "dependencies": {
        "escape-string-regexp": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
          "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
          "dev": true
        }
      }
    },
    "file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "requires": {
        "flat-cache": "^3.0.4"
      }
    },
    "file-type": {
      "version": "14.7.1",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-14.7.1.tgz",
      "integrity": "sha512-sXAMgFk67fQLcetXustxfKX+PZgHIUFn96Xld9uH8aXPdX3xOp0/jg9OdouVTvQrf7mrn+wAa4jN/y9fUOOiRA==",
      "dev": true,
      "requires": {
        "readable-web-to-node-stream": "^2.0.0",
        "strtok3": "^6.0.3",
        "token-types": "^2.0.0",
        "typedarray-to-buffer": "^3.1.5"
      }
    },
    "filename-reserved-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/filename-reserved-regex/-/filename-reserved-regex-1.0.0.tgz",
      "integrity": "sha1-5hz4BfDeHJhFZ9A4bcXfUO5a9+Q=",
      "dev": true
    },
    "filenamify": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/filenamify/-/filenamify-1.2.1.tgz",
      "integrity": "sha1-qfL/0RxQO+0wABUCknI3jx8TZaU=",
      "dev": true,
      "requires": {
        "filename-reserved-regex": "^1.0.0",
        "strip-outer": "^1.0.0",
        "trim-repeated": "^1.0.0"
      }
    },
    "filenamify-url": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/filenamify-url/-/filenamify-url-1.0.0.tgz",
      "integrity": "sha1-syvYExnvWGO3MHi+1Q9GpPeXX1A=",
      "dev": true,
      "requires": {
        "filenamify": "^1.0.0",
        "humanize-url": "^1.0.0"
      }
    },
    "fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "dev": true,
      "requires": {
        "to-regex-range": "^5.0.1"
      }
    },
    "find-cache-dir": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-3.3.1.tgz",
      "integrity": "sha512-t2GDMt3oGC/v+BMwzmllWDuJF/xcDtE5j/fCGbqDD7OLuJkj0cfh1YSA5VKPvwMeLFLNDBkwOKZ2X85jGLVftQ==",
      "dev": true,
      "requires": {
        "commondir": "^1.0.1",
        "make-dir": "^3.0.2",
        "pkg-dir": "^4.1.0"
      }
    },
    "find-node-modules": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/find-node-modules/-/find-node-modules-2.0.0.tgz",
      "integrity": "sha512-8MWIBRgJi/WpjjfVXumjPKCtmQ10B+fjx6zmSA+770GMJirLhWIzg8l763rhjl9xaeaHbnxPNRQKq2mgMhr+aw==",
      "dev": true,
      "requires": {
        "findup-sync": "^3.0.0",
        "merge": "^1.2.1"
      }
    },
    "find-root": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/find-root/-/find-root-1.1.0.tgz",
      "integrity": "sha512-NKfW6bec6GfKc0SGx1e07QZY9PE99u0Bft/0rzSD5k3sO/vwkVUpDUKVm5Gpp5Ue3YfShPFTX2070tDs5kB9Ng==",
      "dev": true
    },
    "find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dev": true,
      "requires": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      }
    },
    "findup-sync": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/findup-sync/-/findup-sync-3.0.0.tgz",
      "integrity": "sha512-YbffarhcicEhOrm4CtrwdKBdCuz576RLdhJDsIfvNtxUuhdRet1qZcsMjqbePtAseKdAnDyM/IyXbu7PRPRLYg==",
      "dev": true,
      "requires": {
        "detect-file": "^1.0.0",
        "is-glob": "^4.0.0",
        "micromatch": "^3.0.4",
        "resolve-dir": "^1.0.1"
      },
      "dependencies": {
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "dev": true,
          "requires": {
            "arr-flatten": "^1.1.0",
            "array-unique": "^0.3.2",
            "extend-shallow": "^2.0.1",
            "fill-range": "^4.0.0",
            "isobject": "^3.0.1",
            "repeat-element": "^1.1.2",
            "snapdragon": "^0.8.1",
            "snapdragon-node": "^2.0.1",
            "split-string": "^3.0.2",
            "to-regex": "^3.0.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            }
          }
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "dev": true,
          "requires": {
            "extend-shallow": "^2.0.1",
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1",
            "to-regex-range": "^2.1.0"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            }
          }
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "dev": true,
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "micromatch": {
          "version": "3.1.10",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
          "dev": true,
          "requires": {
            "arr-diff": "^4.0.0",
            "array-unique": "^0.3.2",
            "braces": "^2.3.1",
            "define-property": "^2.0.2",
            "extend-shallow": "^3.0.2",
            "extglob": "^2.0.4",
            "fragment-cache": "^0.2.1",
            "kind-of": "^6.0.2",
            "nanomatch": "^1.2.9",
            "object.pick": "^1.3.0",
            "regex-not": "^1.0.0",
            "snapdragon": "^0.8.1",
            "to-regex": "^3.0.2"
          }
        },
        "to-regex-range": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
          "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
          "dev": true,
          "requires": {
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1"
          }
        }
      }
    },
    "flat-cache": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.0.4.tgz",
      "integrity": "sha512-dm9s5Pw7Jc0GvMYbshN6zchCA9RgQlzzEZX3vylR9IqFfS8XciblUXOKfW6SiuJ0e13eDYZoZV5wdrev7P3Nwg==",
      "dev": true,
      "requires": {
        "flatted": "^3.1.0",
        "rimraf": "^3.0.2"
      }
    },
    "flatted": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.1.1.tgz",
      "integrity": "sha512-zAoAQiudy+r5SvnSw3KJy5os/oRJYHzrzja/tBDqrZtNhUw8bt6y8OBzMWcjWr+8liV8Eb6yOhw8WZ7VFZ5ZzA==",
      "dev": true
    },
    "for-in": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
      "dev": true
    },
    "foreground-child": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-2.0.0.tgz",
      "integrity": "sha512-dCIq9FpEcyQyXKCkyzmlPTFNgrCzPudOe+mhvJU5zAtlBnGVy2yKxtfsxK2tQBThwq225jcvBjpw1Gr40uzZCA==",
      "dev": true,
      "requires": {
        "cross-spawn": "^7.0.0",
        "signal-exit": "^3.0.2"
      }
    },
    "fragment-cache": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "dev": true,
      "requires": {
        "map-cache": "^0.2.2"
      }
    },
    "fromentries": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/fromentries/-/fromentries-1.3.2.tgz",
      "integrity": "sha512-cHEpEQHUg0f8XdtZCc2ZAhrHzKzT0MrFUTcvx+hfxYu7rGMDc5SKoXFh+n4YigxsHXRzc6OrCshdR1bWH6HHyg==",
      "dev": true
    },
    "fs-access": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/fs-access/-/fs-access-1.0.1.tgz",
      "integrity": "sha1-1qh/JiJxzv6+wwxVNAf7mV2od3o=",
      "dev": true,
      "requires": {
        "null-check": "^1.0.0"
      }
    },
    "fs-extra": {
      "version": "9.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-9.1.0.tgz",
      "integrity": "sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==",
      "dev": true,
      "requires": {
        "at-least-node": "^1.0.0",
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      }
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
      "dev": true
    },
    "fsevents": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
      "dev": true,
      "optional": true
    },
    "function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
      "dev": true
    },
    "functional-red-black-tree": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/functional-red-black-tree/-/functional-red-black-tree-1.0.1.tgz",
      "integrity": "sha1-GwqzvVU7Kg1jmdKcDj6gslIHgyc=",
      "dev": true
    },
    "gensequence": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/gensequence/-/gensequence-3.1.1.tgz",
      "integrity": "sha512-ys3h0hiteRwmY6BsvSttPmkhC0vEQHPJduANBRtH/dlDPZ0UBIb/dXy80IcckXyuQ6LKg+PloRqvGER9IS7F7g==",
      "dev": true
    },
    "gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true
    },
    "get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "dev": true
    },
    "get-intrinsic": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",
      "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1"
      }
    },
    "get-package-type": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz",
      "integrity": "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==",
      "dev": true
    },
    "get-pkg-repo": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/get-pkg-repo/-/get-pkg-repo-1.4.0.tgz",
      "integrity": "sha1-xztInAbYDMVTbCyFP54FIyBWly0=",
      "dev": true,
      "requires": {
        "hosted-git-info": "^2.1.4",
        "meow": "^3.3.0",
        "normalize-package-data": "^2.3.0",
        "parse-github-repo-url": "^1.3.0",
        "through2": "^2.0.0"
      },
      "dependencies": {
        "camelcase": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-2.1.1.tgz",
          "integrity": "sha1-fB0W1nmhu+WcoCys7PsBHiAfWh8=",
          "dev": true
        },
        "camelcase-keys": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-2.1.0.tgz",
          "integrity": "sha1-MIvur/3ygRkFHvodkyITyRuPkuc=",
          "dev": true,
          "requires": {
            "camelcase": "^2.0.0",
            "map-obj": "^1.0.0"
          }
        },
        "find-up": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",
          "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
          "dev": true,
          "requires": {
            "path-exists": "^2.0.0",
            "pinkie-promise": "^2.0.0"
          }
        },
        "get-stdin": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz",
          "integrity": "sha1-uWjGsKBDhDJJAui/Gl3zJXmkUP4=",
          "dev": true
        },
        "indent-string": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-2.1.0.tgz",
          "integrity": "sha1-ji1INIdCEhtKghi3oTfppSBJ3IA=",
          "dev": true,
          "requires": {
            "repeating": "^2.0.0"
          }
        },
        "load-json-file": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",
          "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.2",
            "parse-json": "^2.2.0",
            "pify": "^2.0.0",
            "pinkie-promise": "^2.0.0",
            "strip-bom": "^2.0.0"
          }
        },
        "map-obj": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz",
          "integrity": "sha1-2TPOuSBdgr3PSIb2dCvcK03qFG0=",
          "dev": true
        },
        "meow": {
          "version": "3.7.0",
          "resolved": "https://registry.npmjs.org/meow/-/meow-3.7.0.tgz",
          "integrity": "sha1-cstmi0JSKCkKu/qFaJJYcwioAfs=",
          "dev": true,
          "requires": {
            "camelcase-keys": "^2.0.0",
            "decamelize": "^1.1.2",
            "loud-rejection": "^1.0.0",
            "map-obj": "^1.0.1",
            "minimist": "^1.1.3",
            "normalize-package-data": "^2.3.4",
            "object-assign": "^4.0.1",
            "read-pkg-up": "^1.0.1",
            "redent": "^1.0.0",
            "trim-newlines": "^1.0.0"
          }
        },
        "parse-json": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
          "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
          "dev": true,
          "requires": {
            "error-ex": "^1.2.0"
          }
        },
        "path-exists": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",
          "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
          "dev": true,
          "requires": {
            "pinkie-promise": "^2.0.0"
          }
        },
        "path-type": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",
          "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.2",
            "pify": "^2.0.0",
            "pinkie-promise": "^2.0.0"
          }
        },
        "pify": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
          "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
          "dev": true
        },
        "read-pkg": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz",
          "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",
          "dev": true,
          "requires": {
            "load-json-file": "^1.0.0",
            "normalize-package-data": "^2.3.2",
            "path-type": "^1.0.0"
          }
        },
        "read-pkg-up": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz",
          "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",
          "dev": true,
          "requires": {
            "find-up": "^1.0.0",
            "read-pkg": "^1.0.0"
          }
        },
        "readable-stream": {
          "version": "2.3.7",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
          "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
          "dev": true,
          "requires": {
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.3",
            "isarray": "~1.0.0",
            "process-nextick-args": "~2.0.0",
            "safe-buffer": "~5.1.1",
            "string_decoder": "~1.1.1",
            "util-deprecate": "~1.0.1"
          }
        },
        "redent": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/redent/-/redent-1.0.0.tgz",
          "integrity": "sha1-z5Fqsf1fHxbfsggi3W7H9zDCr94=",
          "dev": true,
          "requires": {
            "indent-string": "^2.1.0",
            "strip-indent": "^1.0.1"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "dev": true,
          "requires": {
            "safe-buffer": "~5.1.0"
          }
        },
        "strip-bom": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz",
          "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",
          "dev": true,
          "requires": {
            "is-utf8": "^0.2.0"
          }
        },
        "strip-indent": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-1.0.1.tgz",
          "integrity": "sha1-DHlipq3vp7vUrDZkYKY4VSrhoKI=",
          "dev": true,
          "requires": {
            "get-stdin": "^4.0.1"
          }
        },
        "through2": {
          "version": "2.0.5",
          "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
          "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
          "dev": true,
          "requires": {
            "readable-stream": "~2.3.6",
            "xtend": "~4.0.1"
          }
        },
        "trim-newlines": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-1.0.0.tgz",
          "integrity": "sha1-WIeWa7WCpFA6QetST301ARgVphM=",
          "dev": true
        }
      }
    },
    "get-stdin": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-8.0.0.tgz",
      "integrity": "sha512-sY22aA6xchAzprjyqmSEQv4UbAAzRN0L2dQB0NlN5acTTK9Don6nhoc3eAbUnpZiCANAMfd/+40kVdKfFygohg==",
      "dev": true
    },
    "get-stream": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
      "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
      "dev": true,
      "requires": {
        "pump": "^3.0.0"
      }
    },
    "get-value": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
      "dev": true
    },
    "gh-pages": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/gh-pages/-/gh-pages-3.1.0.tgz",
      "integrity": "sha512-3b1rly9kuf3/dXsT8+ZxP0UhNLOo1CItj+3e31yUVcaph/yDsJ9RzD7JOw5o5zpBTJVQLlJAASNkUfepi9fe2w==",
      "dev": true,
      "requires": {
        "async": "^2.6.1",
        "commander": "^2.18.0",
        "email-addresses": "^3.0.1",
        "filenamify-url": "^1.0.0",
        "find-cache-dir": "^3.3.1",
        "fs-extra": "^8.1.0",
        "globby": "^6.1.0"
      },
      "dependencies": {
        "array-union": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/array-union/-/array-union-1.0.2.tgz",
          "integrity": "sha1-mjRBDk9OPaI96jdb5b5w8kd47Dk=",
          "dev": true,
          "requires": {
            "array-uniq": "^1.0.1"
          }
        },
        "commander": {
          "version": "2.20.3",
          "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
          "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
          "dev": true
        },
        "fs-extra": {
          "version": "8.1.0",
          "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
          "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.2.0",
            "jsonfile": "^4.0.0",
            "universalify": "^0.1.0"
          }
        },
        "globby": {
          "version": "6.1.0",
          "resolved": "https://registry.npmjs.org/globby/-/globby-6.1.0.tgz",
          "integrity": "sha1-9abXDoOV4hyFj7BInWTfAkJNUGw=",
          "dev": true,
          "requires": {
            "array-union": "^1.0.1",
            "glob": "^7.0.3",
            "object-assign": "^4.0.1",
            "pify": "^2.0.0",
            "pinkie-promise": "^2.0.0"
          }
        },
        "jsonfile": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
          "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.6"
          }
        },
        "pify": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
          "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
          "dev": true
        },
        "universalify": {
          "version": "0.1.2",
          "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
          "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
          "dev": true
        }
      }
    },
    "git-raw-commits": {
      "version": "2.0.10",
      "resolved": "https://registry.npmjs.org/git-raw-commits/-/git-raw-commits-2.0.10.tgz",
      "integrity": "sha512-sHhX5lsbG9SOO6yXdlwgEMQ/ljIn7qMpAbJZCGfXX2fq5T8M5SrDnpYk9/4HswTildcIqatsWa91vty6VhWSaQ==",
      "dev": true,
      "requires": {
        "dargs": "^7.0.0",
        "lodash": "^4.17.15",
        "meow": "^8.0.0",
        "split2": "^3.0.0",
        "through2": "^4.0.0"
      },
      "dependencies": {
        "hosted-git-info": {
          "version": "4.0.2",
          "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.0.2.tgz",
          "integrity": "sha512-c9OGXbZ3guC/xOlCg1Ci/VgWlwsqDv1yMQL1CWqXDL0hDjXuNcq0zuR4xqPSuasI3kqFDhqSyTjREz5gzq0fXg==",
          "dev": true,
          "requires": {
            "lru-cache": "^6.0.0"
          }
        },
        "meow": {
          "version": "8.1.2",
          "resolved": "https://registry.npmjs.org/meow/-/meow-8.1.2.tgz",
          "integrity": "sha512-r85E3NdZ+mpYk1C6RjPFEMSE+s1iZMuHtsHAqY0DT3jZczl0diWUZ8g6oU7h0M9cD2EL+PzaYghhCLzR0ZNn5Q==",
          "dev": true,
          "requires": {
            "@types/minimist": "^1.2.0",
            "camelcase-keys": "^6.2.2",
            "decamelize-keys": "^1.1.0",
            "hard-rejection": "^2.1.0",
            "minimist-options": "4.1.0",
            "normalize-package-data": "^3.0.0",
            "read-pkg-up": "^7.0.1",
            "redent": "^3.0.0",
            "trim-newlines": "^3.0.0",
            "type-fest": "^0.18.0",
            "yargs-parser": "^20.2.3"
          }
        },
        "normalize-package-data": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.2.tgz",
          "integrity": "sha512-6CdZocmfGaKnIHPVFhJJZ3GuR8SsLKvDANFp47Jmy51aKIr8akjAWTSxtpI+MBgBFdSMRyo4hMpDlT6dTffgZg==",
          "dev": true,
          "requires": {
            "hosted-git-info": "^4.0.1",
            "resolve": "^1.20.0",
            "semver": "^7.3.4",
            "validate-npm-package-license": "^3.0.1"
          }
        },
        "read-pkg-up": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
          "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
          "dev": true,
          "requires": {
            "find-up": "^4.1.0",
            "read-pkg": "^5.2.0",
            "type-fest": "^0.8.1"
          },
          "dependencies": {
            "type-fest": {
              "version": "0.8.1",
              "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
              "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
              "dev": true
            }
          }
        },
        "type-fest": {
          "version": "0.18.1",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.18.1.tgz",
          "integrity": "sha512-OIAYXk8+ISY+qTOwkHtKqzAuxchoMiD9Udx+FSGQDuiRR+PJKJHc2NJAXlbhkGwTt/4/nKZxELY1w3ReWOL8mw==",
          "dev": true
        }
      }
    },
    "git-remote-origin-url": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/git-remote-origin-url/-/git-remote-origin-url-2.0.0.tgz",
      "integrity": "sha1-UoJlna4hBxRaERJhEq0yFuxfpl8=",
      "dev": true,
      "requires": {
        "gitconfiglocal": "^1.0.0",
        "pify": "^2.3.0"
      },
      "dependencies": {
        "pify": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
          "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
          "dev": true
        }
      }
    },
    "git-semver-tags": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/git-semver-tags/-/git-semver-tags-4.1.1.tgz",
      "integrity": "sha512-OWyMt5zBe7xFs8vglMmhM9lRQzCWL3WjHtxNNfJTMngGym7pC1kh8sP6jevfydJ6LP3ZvGxfb6ABYgPUM0mtsA==",
      "dev": true,
      "requires": {
        "meow": "^8.0.0",
        "semver": "^6.0.0"
      },
      "dependencies": {
        "hosted-git-info": {
          "version": "4.0.2",
          "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.0.2.tgz",
          "integrity": "sha512-c9OGXbZ3guC/xOlCg1Ci/VgWlwsqDv1yMQL1CWqXDL0hDjXuNcq0zuR4xqPSuasI3kqFDhqSyTjREz5gzq0fXg==",
          "dev": true,
          "requires": {
            "lru-cache": "^6.0.0"
          }
        },
        "meow": {
          "version": "8.1.2",
          "resolved": "https://registry.npmjs.org/meow/-/meow-8.1.2.tgz",
          "integrity": "sha512-r85E3NdZ+mpYk1C6RjPFEMSE+s1iZMuHtsHAqY0DT3jZczl0diWUZ8g6oU7h0M9cD2EL+PzaYghhCLzR0ZNn5Q==",
          "dev": true,
          "requires": {
            "@types/minimist": "^1.2.0",
            "camelcase-keys": "^6.2.2",
            "decamelize-keys": "^1.1.0",
            "hard-rejection": "^2.1.0",
            "minimist-options": "4.1.0",
            "normalize-package-data": "^3.0.0",
            "read-pkg-up": "^7.0.1",
            "redent": "^3.0.0",
            "trim-newlines": "^3.0.0",
            "type-fest": "^0.18.0",
            "yargs-parser": "^20.2.3"
          }
        },
        "normalize-package-data": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.2.tgz",
          "integrity": "sha512-6CdZocmfGaKnIHPVFhJJZ3GuR8SsLKvDANFp47Jmy51aKIr8akjAWTSxtpI+MBgBFdSMRyo4hMpDlT6dTffgZg==",
          "dev": true,
          "requires": {
            "hosted-git-info": "^4.0.1",
            "resolve": "^1.20.0",
            "semver": "^7.3.4",
            "validate-npm-package-license": "^3.0.1"
          },
          "dependencies": {
            "semver": {
              "version": "7.3.5",
              "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
              "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
              "dev": true,
              "requires": {
                "lru-cache": "^6.0.0"
              }
            }
          }
        },
        "read-pkg-up": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
          "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
          "dev": true,
          "requires": {
            "find-up": "^4.1.0",
            "read-pkg": "^5.2.0",
            "type-fest": "^0.8.1"
          },
          "dependencies": {
            "type-fest": {
              "version": "0.8.1",
              "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
              "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
              "dev": true
            }
          }
        },
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        },
        "type-fest": {
          "version": "0.18.1",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.18.1.tgz",
          "integrity": "sha512-OIAYXk8+ISY+qTOwkHtKqzAuxchoMiD9Udx+FSGQDuiRR+PJKJHc2NJAXlbhkGwTt/4/nKZxELY1w3ReWOL8mw==",
          "dev": true
        }
      }
    },
    "gitconfiglocal": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/gitconfiglocal/-/gitconfiglocal-1.0.0.tgz",
      "integrity": "sha1-QdBF84UaXqiPA/JMocYXgRRGS5s=",
      "dev": true,
      "requires": {
        "ini": "^1.3.2"
      },
      "dependencies": {
        "ini": {
          "version": "1.3.8",
          "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
          "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
          "dev": true
        }
      }
    },
    "glob": {
      "version": "7.1.6",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
      "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
      "dev": true,
      "requires": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      }
    },
    "glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "requires": {
        "is-glob": "^4.0.1"
      }
    },
    "global-dirs": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-3.0.0.tgz",
      "integrity": "sha512-v8ho2DS5RiCjftj1nD9NmnfaOzTdud7RRnVd9kFNOjqZbISlx5DQ+OrTkywgd0dIt7oFCvKetZSHoHcP3sDdiA==",
      "dev": true,
      "requires": {
        "ini": "2.0.0"
      }
    },
    "global-modules": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/global-modules/-/global-modules-1.0.0.tgz",
      "integrity": "sha512-sKzpEkf11GpOFuw0Zzjzmt4B4UZwjOcG757PPvrfhxcLFbq0wpsgpOqxpxtxFiCG4DtG93M6XRVbF2oGdev7bg==",
      "dev": true,
      "requires": {
        "global-prefix": "^1.0.1",
        "is-windows": "^1.0.1",
        "resolve-dir": "^1.0.0"
      }
    },
    "global-prefix": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/global-prefix/-/global-prefix-1.0.2.tgz",
      "integrity": "sha1-2/dDxsFJklk8ZVVoy2btMsASLr4=",
      "dev": true,
      "requires": {
        "expand-tilde": "^2.0.2",
        "homedir-polyfill": "^1.0.1",
        "ini": "^1.3.4",
        "is-windows": "^1.0.1",
        "which": "^1.2.14"
      },
      "dependencies": {
        "ini": {
          "version": "1.3.8",
          "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
          "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
          "dev": true
        }
      }
    },
    "globals": {
      "version": "13.7.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.7.0.tgz",
      "integrity": "sha512-Aipsz6ZKRxa/xQkZhNg0qIWXT6x6rD46f6x/PCnBomlttdIyAPak4YD9jTmKpZ72uROSMU87qJtcgpgHaVchiA==",
      "dev": true,
      "requires": {
        "type-fest": "^0.20.2"
      },
      "dependencies": {
        "type-fest": {
          "version": "0.20.2",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
          "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
          "dev": true
        }
      }
    },
    "globby": {
      "version": "11.0.3",
      "resolved": "https://registry.npmjs.org/globby/-/globby-11.0.3.tgz",
      "integrity": "sha512-ffdmosjA807y7+lA1NM0jELARVmYul/715xiILEjo3hBLPTcirgQNnXECn5g3mtR8TOLCVbkfua1Hpen25/Xcg==",
      "dev": true,
      "requires": {
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.1.1",
        "ignore": "^5.1.4",
        "merge2": "^1.3.0",
        "slash": "^3.0.0"
      }
    },
    "got": {
      "version": "9.6.0",
      "resolved": "https://registry.npmjs.org/got/-/got-9.6.0.tgz",
      "integrity": "sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==",
      "dev": true,
      "requires": {
        "@sindresorhus/is": "^0.14.0",
        "@szmarczak/http-timer": "^1.1.2",
        "cacheable-request": "^6.0.0",
        "decompress-response": "^3.3.0",
        "duplexer3": "^0.1.4",
        "get-stream": "^4.1.0",
        "lowercase-keys": "^1.0.1",
        "mimic-response": "^1.0.1",
        "p-cancelable": "^1.0.0",
        "to-readable-stream": "^1.0.0",
        "url-parse-lax": "^3.0.0"
      }
    },
    "graceful-fs": {
      "version": "4.2.6",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.6.tgz",
      "integrity": "sha512-nTnJ528pbqxYanhpDYsi4Rd8MAeaBA67+RZ10CM1m3bTAVFEDcd5AuA4a6W5YkGZ1iNXHzZz8T6TBKLeBuNriQ==",
      "dev": true
    },
    "handlebars": {
      "version": "4.7.7",
      "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.7.7.tgz",
      "integrity": "sha512-aAcXm5OAfE/8IXkcZvCepKU3VzW1/39Fb5ZuqMtgI/hT8X2YgoMvBY5dLhq/cpOvw7Lk1nK/UF71aLG/ZnVYRA==",
      "dev": true,
      "requires": {
        "minimist": "^1.2.5",
        "neo-async": "^2.6.0",
        "source-map": "^0.6.1",
        "uglify-js": "^3.1.4",
        "wordwrap": "^1.0.0"
      }
    },
    "hard-rejection": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/hard-rejection/-/hard-rejection-2.1.0.tgz",
      "integrity": "sha512-VIZB+ibDhx7ObhAe7OVtoEbuP4h/MuOTHJ+J8h/eBXotJYl0fBgR72xDFCKgIh22OJZIOVNxBMWuhAr10r8HdA==",
      "dev": true
    },
    "has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1"
      }
    },
    "has-bigints": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.0.1.tgz",
      "integrity": "sha512-LSBS2LjbNBTf6287JEbEzvJgftkF5qFkmCo9hDRpAzKhUOlJ+hx8dd4USs00SgsUNwc4617J9ki5YtEClM2ffA==",
      "dev": true
    },
    "has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true
    },
    "has-own-prop": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/has-own-prop/-/has-own-prop-2.0.0.tgz",
      "integrity": "sha512-Pq0h+hvsVm6dDEa8x82GnLSYHOzNDt7f0ddFa3FqcQlgzEiptPqL+XrOJNavjOzSYiYWIrgeVYYgGlLmnxwilQ==",
      "dev": true
    },
    "has-symbols": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.2.tgz",
      "integrity": "sha512-chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw==",
      "dev": true
    },
    "has-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "dev": true,
      "requires": {
        "get-value": "^2.0.6",
        "has-values": "^1.0.0",
        "isobject": "^3.0.0"
      }
    },
    "has-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "dev": true,
      "requires": {
        "is-number": "^3.0.0",
        "kind-of": "^4.0.0"
      },
      "dependencies": {
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "dev": true,
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "kind-of": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
          "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "has-yarn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/has-yarn/-/has-yarn-2.1.0.tgz",
      "integrity": "sha512-UqBRqi4ju7T+TqGNdqAO0PaSVGsDGJUBQvk9eUWNGRY1CFGDzYhLWoM7JQEemnlvVcv/YEmc2wNW8BC24EnUsw==",
      "dev": true
    },
    "hasha": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/hasha/-/hasha-5.2.2.tgz",
      "integrity": "sha512-Hrp5vIK/xr5SkeN2onO32H0MgNZ0f17HRNH39WfL0SYUNOTZ5Lz1TJ8Pajo/87dYGEFlLMm7mIc/k/s6Bvz9HQ==",
      "dev": true,
      "requires": {
        "is-stream": "^2.0.0",
        "type-fest": "^0.8.0"
      },
      "dependencies": {
        "type-fest": {
          "version": "0.8.1",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
          "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
          "dev": true
        }
      }
    },
    "highlight.js": {
      "version": "10.7.2",
      "resolved": "https://registry.npmjs.org/highlight.js/-/highlight.js-10.7.2.tgz",
      "integrity": "sha512-oFLl873u4usRM9K63j4ME9u3etNF0PLiJhSQ8rdfuL51Wn3zkD6drf9ZW0dOzjnZI22YYG24z30JcmfCZjMgYg==",
      "dev": true
    },
    "homedir-polyfill": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/homedir-polyfill/-/homedir-polyfill-1.0.3.tgz",
      "integrity": "sha512-eSmmWE5bZTK2Nou4g0AI3zZ9rswp7GRKoKXS1BLUkvPviOqs4YTN1djQIqrXy9k5gEtdLPy86JjRwsNM9tnDcA==",
      "dev": true,
      "requires": {
        "parse-passwd": "^1.0.0"
      }
    },
    "hosted-git-info": {
      "version": "2.8.9",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
      "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
      "dev": true
    },
    "html-escaper": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
      "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==",
      "dev": true
    },
    "http-cache-semantics": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",
      "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ==",
      "dev": true
    },
    "http-proxy-agent": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-4.0.1.tgz",
      "integrity": "sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg==",
      "dev": true,
      "requires": {
        "@tootallnate/once": "1",
        "agent-base": "6",
        "debug": "4"
      }
    },
    "https-proxy-agent": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-4.0.0.tgz",
      "integrity": "sha512-zoDhWrkR3of1l9QAL8/scJZyLu8j/gBkcwcaQOZh7Gyh/+uJQzGVETdgT30akuwkpL8HTRfssqI3BZuV18teDg==",
      "dev": true,
      "requires": {
        "agent-base": "5",
        "debug": "4"
      },
      "dependencies": {
        "agent-base": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-5.1.1.tgz",
          "integrity": "sha512-TMeqbNl2fMW0nMjTEPOwe3J/PRFP4vqeoNuQMG0HlMrtm5QxKqdvAkZ1pRBQ/ulIyDD5Yq0nJ7YbdD8ey0TO3g==",
          "dev": true
        }
      }
    },
    "humanize-url": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/humanize-url/-/humanize-url-1.0.1.tgz",
      "integrity": "sha1-9KuZ4NKIF0yk4eUEB8VfuuRk7/8=",
      "dev": true,
      "requires": {
        "normalize-url": "^1.0.0",
        "strip-url-auth": "^1.0.0"
      },
      "dependencies": {
        "normalize-url": {
          "version": "1.9.1",
          "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-1.9.1.tgz",
          "integrity": "sha1-LMDWazHqIwNkWENuNiDYWVTGbDw=",
          "dev": true,
          "requires": {
            "object-assign": "^4.0.1",
            "prepend-http": "^1.0.0",
            "query-string": "^4.1.0",
            "sort-keys": "^1.0.0"
          }
        },
        "prepend-http": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-1.0.4.tgz",
          "integrity": "sha1-1PRWKwzjaW5BrFLQ4ALlemNdxtw=",
          "dev": true
        }
      }
    },
    "iconv-lite": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.2.tgz",
      "integrity": "sha512-2y91h5OpQlolefMPmUlivelittSWy0rP+oYVpn6A7GwVHNE8AWzoYOBNmlwks3LobaJxgHCYZAnyNo2GgpNRNQ==",
      "dev": true,
      "requires": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      }
    },
    "ieee754": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
      "dev": true
    },
    "ignore": {
      "version": "5.1.8",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.1.8.tgz",
      "integrity": "sha512-BMpfD7PpiETpBl/A6S498BaIJ6Y/ABT93ETbby2fP00v4EbvPBXWEoaR1UBPKs3iR53pJY7EtZk5KACI57i1Uw==",
      "dev": true
    },
    "ignore-by-default": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-2.0.0.tgz",
      "integrity": "sha512-+mQSgMRiFD3L3AOxLYOCxjIq4OnAmo5CIuC+lj5ehCJcPtV++QacEV7FdpzvYxH6DaOySWzQU6RR0lPLy37ckA==",
      "dev": true
    },
    "ignore-walk": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-3.0.3.tgz",
      "integrity": "sha512-m7o6xuOaT1aqheYHKf8W6J5pYH85ZI9w077erOzLje3JsB1gkafkAhHHY19dqjulgIZHFm32Cp5uNZgcQqdJKw==",
      "dev": true,
      "requires": {
        "minimatch": "^3.0.4"
      }
    },
    "import-fresh": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
      "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
      "dev": true,
      "requires": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "dependencies": {
        "resolve-from": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
          "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
          "dev": true
        }
      }
    },
    "import-lazy": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/import-lazy/-/import-lazy-2.1.0.tgz",
      "integrity": "sha1-BWmOPUXIjo1+nZLLBYTnfwlvPkM=",
      "dev": true
    },
    "import-local": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/import-local/-/import-local-3.0.2.tgz",
      "integrity": "sha512-vjL3+w0oulAVZ0hBHnxa/Nm5TAurf9YLQJDhqRZyqb+VKGOB6LU8t9H1Nr5CIo16vh9XfJTOoHwU0B71S557gA==",
      "dev": true,
      "requires": {
        "pkg-dir": "^4.2.0",
        "resolve-cwd": "^3.0.0"
      }
    },
    "imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
      "dev": true
    },
    "indent-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
      "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
      "dev": true
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "dev": true,
      "requires": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true
    },
    "ini": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ini/-/ini-2.0.0.tgz",
      "integrity": "sha512-7PnF4oN3CvZF23ADhA5wRaYEQpJ8qygSkbtTXWBeXWXmEVRXK+1ITciHWwHhsjv1TmW0MgacIv6hEi5pX5NQdA==",
      "dev": true
    },
    "inquirer": {
      "version": "6.5.2",
      "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-6.5.2.tgz",
      "integrity": "sha512-cntlB5ghuB0iuO65Ovoi8ogLHiWGs/5yNrtUcKjFhSSiVeAIVpD7koaSU9RM8mpXw5YDi9RdYXGQMaOURB7ycQ==",
      "dev": true,
      "requires": {
        "ansi-escapes": "^3.2.0",
        "chalk": "^2.4.2",
        "cli-cursor": "^2.1.0",
        "cli-width": "^2.0.0",
        "external-editor": "^3.0.3",
        "figures": "^2.0.0",
        "lodash": "^4.17.12",
        "mute-stream": "0.0.7",
        "run-async": "^2.2.0",
        "rxjs": "^6.4.0",
        "string-width": "^2.1.0",
        "strip-ansi": "^5.1.0",
        "through": "^2.3.6"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        },
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "cli-cursor": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
          "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
          "dev": true,
          "requires": {
            "restore-cursor": "^2.0.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        },
        "escape-string-regexp": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
          "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
          "dev": true
        },
        "figures": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
          "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
          "dev": true,
          "requires": {
            "escape-string-regexp": "^1.0.5"
          }
        },
        "has-flag": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
          "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
          "dev": true
        },
        "is-fullwidth-code-point": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
          "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
          "dev": true
        },
        "mimic-fn": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
          "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
          "dev": true
        },
        "onetime": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
          "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
          "dev": true,
          "requires": {
            "mimic-fn": "^1.0.0"
          }
        },
        "restore-cursor": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
          "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
          "dev": true,
          "requires": {
            "onetime": "^2.0.0",
            "signal-exit": "^3.0.2"
          }
        },
        "string-width": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
          "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
          "dev": true,
          "requires": {
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^4.0.0"
          },
          "dependencies": {
            "strip-ansi": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
              "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
              "dev": true,
              "requires": {
                "ansi-regex": "^3.0.0"
              }
            }
          }
        },
        "strip-ansi": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
          "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
          "dev": true,
          "requires": {
            "ansi-regex": "^4.1.0"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "4.1.0",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
              "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
              "dev": true
            }
          }
        },
        "supports-color": {
          "version": "5.5.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
          "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        }
      }
    },
    "interpret": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/interpret/-/interpret-1.4.0.tgz",
      "integrity": "sha512-agE4QfB2Lkp9uICn7BAqoscw4SZP9kTE2hxiFI3jBPmXJfdqiahTbUuKGsMoN2GtqL9AxhYioAcVvgsb1HvRbA==",
      "dev": true
    },
    "irregular-plurals": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/irregular-plurals/-/irregular-plurals-3.2.0.tgz",
      "integrity": "sha512-YqTdPLfwP7YFN0SsD3QUVCkm9ZG2VzOXv3DOrw5G5mkMbVwptTwVcFv7/C0vOpBmgTxAeTG19XpUs1E522LW9Q==",
      "dev": true
    },
    "is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
      "dev": true
    },
    "is-bigint": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.0.1.tgz",
      "integrity": "sha512-J0ELF4yHFxHy0cmSxZuheDOz2luOdVvqjwmEcj8H/L1JHeuEDSDbeRP+Dk9kFVk5RTFzbucJ2Kb9F7ixY2QaCg==",
      "dev": true
    },
    "is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "requires": {
        "binary-extensions": "^2.0.0"
      }
    },
    "is-boolean-object": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.1.0.tgz",
      "integrity": "sha512-a7Uprx8UtD+HWdyYwnD1+ExtTgqQtD2k/1yJgtXP6wnMm8byhkoTZRl+95LLThpzNZJ5aEvi46cdH+ayMFRwmA==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0"
      }
    },
    "is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
      "dev": true
    },
    "is-callable": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.3.tgz",
      "integrity": "sha512-J1DcMe8UYTBSrKezuIUTUwjXsho29693unXM2YhJUTR2txK/eG47bvNa/wipPFmZFgr/N6f1GA66dv0mEyTIyQ==",
      "dev": true
    },
    "is-ci": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
      "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
      "dev": true,
      "requires": {
        "ci-info": "^2.0.0"
      }
    },
    "is-core-module": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.2.0.tgz",
      "integrity": "sha512-XRAfAdyyY5F5cOXn7hYQDqh2Xmii+DEfIcQGxK/uNwMHhIkPWO0g8msXcbzLe+MpGoR951MlqM/2iIlU4vKDdQ==",
      "dev": true,
      "requires": {
        "has": "^1.0.3"
      }
    },
    "is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-date-object": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.2.tgz",
      "integrity": "sha512-USlDT524woQ08aoZFzh3/Z6ch9Y/EWXEHQ/AaRN0SkKq4t2Jw2R2339tSXmwuVoY7LLlBCbOIlx2myP/L5zk0g==",
      "dev": true
    },
    "is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dev": true,
      "requires": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
          "dev": true
        }
      }
    },
    "is-docker": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.2.0.tgz",
      "integrity": "sha512-K4GwB4i/HzhAzwP/XSlspzRdFTI9N8OxJOyOU7Y5Rz+p+WBokXWVWblaJeBkggthmoSV0OoGTH5thJNvplpkvQ==",
      "dev": true
    },
    "is-error": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/is-error/-/is-error-2.2.2.tgz",
      "integrity": "sha512-IOQqts/aHWbiisY5DuPJQ0gcbvaLFCa7fBa9xoLfxBZvQ+ZI/Zh9xoI7Gk+G64N0FdK4AbibytHht2tWgpJWLg==",
      "dev": true
    },
    "is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "dev": true
    },
    "is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
      "dev": true
    },
    "is-finite": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-finite/-/is-finite-1.1.0.tgz",
      "integrity": "sha512-cdyMtqX/BOqqNBBiKlIVkytNHm49MtMlYyn1zxzvJKWmFMlGzm+ry5BBfYyeY9YmNKbRSo/o7OX9w9ale0wg3w==",
      "dev": true
    },
    "is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true
    },
    "is-glob": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
      "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
      "dev": true,
      "requires": {
        "is-extglob": "^2.1.1"
      }
    },
    "is-installed-globally": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.4.0.tgz",
      "integrity": "sha512-iwGqO3J21aaSkC7jWnHP/difazwS7SFeIqxv6wEtLU8Y5KlzFTjyqcSIT0d8s4+dDhKytsk9PJZ2BkS5eZwQRQ==",
      "dev": true,
      "requires": {
        "global-dirs": "^3.0.0",
        "is-path-inside": "^3.0.2"
      }
    },
    "is-interactive": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-1.0.0.tgz",
      "integrity": "sha512-2HvIEKRoqS62guEC+qBjpvRubdX910WCMuJTZ+I9yvqKU2/12eSL549HMwtabb4oupdj2sMP50k+XJfB/8JE6w==",
      "dev": true
    },
    "is-negative-zero": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.1.tgz",
      "integrity": "sha512-2z6JzQvZRa9A2Y7xC6dQQm4FSTSTNWjKIYYTt4246eMTJmIo0Q+ZyOsU66X8lxK1AbB92dFeglPLrhwpeRKO6w==",
      "dev": true
    },
    "is-npm": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/is-npm/-/is-npm-5.0.0.tgz",
      "integrity": "sha512-WW/rQLOazUq+ST/bCAVBp/2oMERWLsR7OrKyt052dNDk4DHcDE0/7QSXITlmi+VBcV13DfIbysG3tZJm5RfdBA==",
      "dev": true
    },
    "is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true
    },
    "is-number-object": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.0.4.tgz",
      "integrity": "sha512-zohwelOAur+5uXtk8O3GPQ1eAcu4ZX3UwxQhUlfFFMNpUd83gXgjbhJh6HmB6LUNV/ieOLQuDwJO3dWJosUeMw==",
      "dev": true
    },
    "is-obj": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
      "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w==",
      "dev": true
    },
    "is-path-cwd": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-path-cwd/-/is-path-cwd-2.2.0.tgz",
      "integrity": "sha512-w942bTcih8fdJPJmQHFzkS76NEP8Kzzvmw92cXsazb8intwLqPibPPdXf4ANdKV3rYMuuQYGIWtvz9JilB3NFQ==",
      "dev": true
    },
    "is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true
    },
    "is-plain-obj": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
      "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4=",
      "dev": true
    },
    "is-plain-object": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-5.0.0.tgz",
      "integrity": "sha512-VRSzKkbMm5jMDoKLbltAkFQ5Qr7VDiTFGXxYFXXowVj387GeGNOCsOH6Msy00SGZ3Fp84b1Naa1psqgcCIEP5Q==",
      "dev": true
    },
    "is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "dev": true
    },
    "is-regex": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.2.tgz",
      "integrity": "sha512-axvdhb5pdhEVThqJzYXwMlVuZwC+FF2DpcOhTS+y/8jVq4trxyPgfcwIxIKiyeuLlSQYKkmUaPQJ8ZE4yNKXDg==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "has-symbols": "^1.0.1"
      }
    },
    "is-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
      "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw==",
      "dev": true
    },
    "is-string": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.5.tgz",
      "integrity": "sha512-buY6VNRjhQMiF1qWDouloZlQbRhDPCebwxSjxMjxgemYT46YMd2NR0/H+fBhEfWX4A/w9TBJ+ol+okqJKFE6vQ==",
      "dev": true
    },
    "is-symbol": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.3.tgz",
      "integrity": "sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==",
      "dev": true,
      "requires": {
        "has-symbols": "^1.0.1"
      }
    },
    "is-text-path": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-text-path/-/is-text-path-1.0.1.tgz",
      "integrity": "sha1-Thqg+1G/vLPpJogAE5cgLBd1tm4=",
      "dev": true,
      "requires": {
        "text-extensions": "^1.0.0"
      }
    },
    "is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
      "dev": true
    },
    "is-unicode-supported": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-0.1.0.tgz",
      "integrity": "sha512-knxG2q4UC3u8stRGyAVJCOdxFmv5DZiRcdlIaAQXAbSfJya+OhopNotLQrstBhququ4ZpuKbDc/8S6mgXgPFPw==",
      "dev": true
    },
    "is-utf8": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
      "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",
      "dev": true
    },
    "is-windows": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
      "dev": true
    },
    "is-wsl": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
      "integrity": "sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==",
      "dev": true,
      "requires": {
        "is-docker": "^2.0.0"
      }
    },
    "is-yarn-global": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/is-yarn-global/-/is-yarn-global-0.3.0.tgz",
      "integrity": "sha512-VjSeb/lHmkoyd8ryPVIKvOCn4D1koMqY+vqyjjUfc3xyKtP4dYOxM44sZrnqQSzSds3xyOrUTLTC9LVCVgLngw==",
      "dev": true
    },
    "isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
      "dev": true
    },
    "isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
      "dev": true
    },
    "isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true
    },
    "istanbul-lib-coverage": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.0.0.tgz",
      "integrity": "sha512-UiUIqxMgRDET6eR+o5HbfRYP1l0hqkWOs7vNxC/mggutCMUIhWMm8gAHb8tHlyfD3/l6rlgNA5cKdDzEAf6hEg==",
      "dev": true
    },
    "istanbul-lib-hook": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-hook/-/istanbul-lib-hook-3.0.0.tgz",
      "integrity": "sha512-Pt/uge1Q9s+5VAZ+pCo16TYMWPBIl+oaNIjgLQxcX0itS6ueeaA+pEfThZpH8WxhFgCiEb8sAJY6MdUKgiIWaQ==",
      "dev": true,
      "requires": {
        "append-transform": "^2.0.0"
      }
    },
    "istanbul-lib-instrument": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-4.0.3.tgz",
      "integrity": "sha512-BXgQl9kf4WTCPCCpmFGoJkz/+uhvm7h7PFKUYxh7qarQd3ER33vHG//qaE8eN25l07YqZPpHXU9I09l/RD5aGQ==",
      "dev": true,
      "requires": {
        "@babel/core": "^7.7.5",
        "@istanbuljs/schema": "^0.1.2",
        "istanbul-lib-coverage": "^3.0.0",
        "semver": "^6.3.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        }
      }
    },
    "istanbul-lib-processinfo": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/istanbul-lib-processinfo/-/istanbul-lib-processinfo-2.0.2.tgz",
      "integrity": "sha512-kOwpa7z9hme+IBPZMzQ5vdQj8srYgAtaRqeI48NGmAQ+/5yKiHLV0QbYqQpxsdEF0+w14SoB8YbnHKcXE2KnYw==",
      "dev": true,
      "requires": {
        "archy": "^1.0.0",
        "cross-spawn": "^7.0.0",
        "istanbul-lib-coverage": "^3.0.0-alpha.1",
        "make-dir": "^3.0.0",
        "p-map": "^3.0.0",
        "rimraf": "^3.0.0",
        "uuid": "^3.3.3"
      },
      "dependencies": {
        "p-map": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/p-map/-/p-map-3.0.0.tgz",
          "integrity": "sha512-d3qXVTF/s+W+CdJ5A29wywV2n8CQQYahlgz2bFiA+4eVNJbHJodPZ+/gXwPGh0bOqA+j8S+6+ckmvLGPk1QpxQ==",
          "dev": true,
          "requires": {
            "aggregate-error": "^3.0.0"
          }
        }
      }
    },
    "istanbul-lib-report": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
      "integrity": "sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw==",
      "dev": true,
      "requires": {
        "istanbul-lib-coverage": "^3.0.0",
        "make-dir": "^3.0.0",
        "supports-color": "^7.1.0"
      }
    },
    "istanbul-lib-source-maps": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-4.0.0.tgz",
      "integrity": "sha512-c16LpFRkR8vQXyHZ5nLpY35JZtzj1PQY1iZmesUbf1FZHbIupcWfjgOXBY9YHkLEQ6puz1u4Dgj6qmU/DisrZg==",
      "dev": true,
      "requires": {
        "debug": "^4.1.1",
        "istanbul-lib-coverage": "^3.0.0",
        "source-map": "^0.6.1"
      }
    },
    "istanbul-reports": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.0.2.tgz",
      "integrity": "sha512-9tZvz7AiR3PEDNGiV9vIouQ/EAcqMXFmkcA1CDFTwOB98OZVDL0PH9glHotf5Ugp6GCOTypfzGWI/OqjWNCRUw==",
      "dev": true,
      "requires": {
        "html-escaper": "^2.0.0",
        "istanbul-lib-report": "^3.0.0"
      }
    },
    "iterable-to-stream": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/iterable-to-stream/-/iterable-to-stream-1.0.1.tgz",
      "integrity": "sha512-O62gD5ADMUGtJoOoM9U6LQ7i4byPXUNoHJ6mqsmkQJcom331ZJGDApWgDESWyBMEHEJRjtHozgIiTzYo9RU4UA==",
      "dev": true
    },
    "js-string-escape": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/js-string-escape/-/js-string-escape-1.0.1.tgz",
      "integrity": "sha1-4mJbrbwNZ8dTPp7cEGjFh65BN+8=",
      "dev": true
    },
    "js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true
    },
    "js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "dev": true,
      "requires": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      }
    },
    "jsesc": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
      "dev": true
    },
    "json-buffer": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
      "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg=",
      "dev": true
    },
    "json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
      "dev": true
    },
    "json-parse-even-better-errors": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
      "dev": true
    },
    "json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE=",
      "dev": true
    },
    "json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
      "dev": true
    },
    "json5": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
      "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
      "dev": true,
      "requires": {
        "minimist": "^1.2.0"
      }
    },
    "jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.6",
        "universalify": "^2.0.0"
      }
    },
    "jsonparse": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/jsonparse/-/jsonparse-1.3.1.tgz",
      "integrity": "sha1-P02uSpH6wxX3EGL4UhzCOfE2YoA=",
      "dev": true
    },
    "JSONStream": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/JSONStream/-/JSONStream-1.3.5.tgz",
      "integrity": "sha512-E+iruNOY8VV9s4JEbe1aNEm6MiszPRr/UfcHMz0TQh1BXSxHK+ASV1R6W4HpjBhSeS+54PIsAMCBmwD06LLsqQ==",
      "dev": true,
      "requires": {
        "jsonparse": "^1.2.0",
        "through": ">=2.2.7 <3"
      }
    },
    "keyv": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.1.0.tgz",
      "integrity": "sha512-9ykJ/46SN/9KPM/sichzQ7OvXyGDYKGTaDlKMGCAlg2UK8KRy4jb0d8sFc+0Tt0YYnThq8X2RZgCg74RPxgcVA==",
      "dev": true,
      "requires": {
        "json-buffer": "3.0.0"
      }
    },
    "kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true
    },
    "latest-version": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/latest-version/-/latest-version-5.1.0.tgz",
      "integrity": "sha512-weT+r0kTkRQdCdYCNtkMwWXQTMEswKrFBkm4ckQOMVhhqhIMI1UT2hMj+1iigIhgSZm5gTmrRXBNoGUgaTY1xA==",
      "dev": true,
      "requires": {
        "package-json": "^6.3.0"
      }
    },
    "levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "requires": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      }
    },
    "lines-and-columns": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.1.6.tgz",
      "integrity": "sha1-HADHQ7QzzQpOgHWPe2SldEDZ/wA=",
      "dev": true
    },
    "load-json-file": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-5.3.0.tgz",
      "integrity": "sha512-cJGP40Jc/VXUsp8/OrnyKyTZ1y6v/dphm3bioS+RrKXjK2BB6wHUd6JptZEFDGgGahMT+InnZO5i1Ei9mpC8Bw==",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.15",
        "parse-json": "^4.0.0",
        "pify": "^4.0.1",
        "strip-bom": "^3.0.0",
        "type-fest": "^0.3.0"
      }
    },
    "locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dev": true,
      "requires": {
        "p-locate": "^4.1.0"
      }
    },
    "lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
      "dev": true
    },
    "lodash.clonedeep": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.clonedeep/-/lodash.clonedeep-4.5.0.tgz",
      "integrity": "sha1-4j8/nE+Pvd6HJSnBBxhXoIblzO8=",
      "dev": true
    },
    "lodash.flatten": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/lodash.flatten/-/lodash.flatten-4.4.0.tgz",
      "integrity": "sha1-8xwiIlqWMtK7+OSt2+8kCqdlph8=",
      "dev": true
    },
    "lodash.flattendeep": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/lodash.flattendeep/-/lodash.flattendeep-4.4.0.tgz",
      "integrity": "sha1-+wMJF/hqMTTlvJvsDWngAT3f7bI=",
      "dev": true
    },
    "lodash.ismatch": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/lodash.ismatch/-/lodash.ismatch-4.4.0.tgz",
      "integrity": "sha1-dWy1FQyjum8RCFp4hJZF8Yj4Xzc=",
      "dev": true
    },
    "lodash.map": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/lodash.map/-/lodash.map-4.6.0.tgz",
      "integrity": "sha1-dx7Hg540c9nEzeKLGTlMNWL09tM=",
      "dev": true
    },
    "lodash.truncate": {
      "version": "4.4.2",
      "resolved": "https://registry.npmjs.org/lodash.truncate/-/lodash.truncate-4.4.2.tgz",
      "integrity": "sha1-WjUNoLERO4N+z//VgSy+WNbq4ZM=",
      "dev": true
    },
    "log-symbols": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.1.0.tgz",
      "integrity": "sha512-8XPvpAA8uyhfteu8pIvQxpJZ7SYYdpUivZpGy6sFsBuKRY/7rQGavedeB8aK+Zkyq6upMFVL/9AW6vOYzfRyLg==",
      "dev": true,
      "requires": {
        "chalk": "^4.1.0",
        "is-unicode-supported": "^0.1.0"
      }
    },
    "longest": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/longest/-/longest-2.0.1.tgz",
      "integrity": "sha1-eB4YMpaqlPbU2RbcM10NF676I/g=",
      "dev": true
    },
    "loud-rejection": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/loud-rejection/-/loud-rejection-1.6.0.tgz",
      "integrity": "sha1-W0b4AUft7leIcPCG0Eghz5mOVR8=",
      "dev": true,
      "requires": {
        "currently-unhandled": "^0.4.1",
        "signal-exit": "^3.0.0"
      }
    },
    "lowercase-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
      "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA==",
      "dev": true
    },
    "lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "dev": true,
      "requires": {
        "yallist": "^4.0.0"
      }
    },
    "lunr": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/lunr/-/lunr-2.3.9.tgz",
      "integrity": "sha512-zTU3DaZaF3Rt9rhN3uBMGQD3dD2/vFQqnvZCDv4dl5iOzq2IZQqTxu90r4E5J+nP70J3ilqVCrbho2eWaeW8Ow==",
      "dev": true
    },
    "make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "dev": true,
      "requires": {
        "semver": "^6.0.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        }
      }
    },
    "make-error": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
      "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
      "dev": true
    },
    "map-age-cleaner": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/map-age-cleaner/-/map-age-cleaner-0.1.3.tgz",
      "integrity": "sha512-bJzx6nMoP6PDLPBFmg7+xRKeFZvFboMrGlxmNj9ClvX53KrmvM5bXFXEWjbz4cz1AFn+jWJ9z/DJSz7hrs0w3w==",
      "dev": true,
      "requires": {
        "p-defer": "^1.0.0"
      }
    },
    "map-cache": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
      "dev": true
    },
    "map-obj": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-4.2.1.tgz",
      "integrity": "sha512-+WA2/1sPmDj1dlvvJmB5G6JKfY9dpn7EVBUL06+y6PoljPkh+6V1QihwxNkbcGxCRjt2b0F9K0taiCuo7MbdFQ==",
      "dev": true
    },
    "map-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "dev": true,
      "requires": {
        "object-visit": "^1.0.0"
      }
    },
    "marked": {
      "version": "1.2.9",
      "resolved": "https://registry.npmjs.org/marked/-/marked-1.2.9.tgz",
      "integrity": "sha512-H8lIX2SvyitGX+TRdtS06m1jHMijKN/XjfH6Ooii9fvxMlh8QdqBfBDkGUpMWH2kQNrtixjzYUa3SH8ROTgRRw==",
      "dev": true
    },
    "matcher": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/matcher/-/matcher-3.0.0.tgz",
      "integrity": "sha512-OkeDaAZ/bQCxeFAozM55PKcKU0yJMPGifLwV4Qgjitu+5MoAfSQN4lsLJeXZ1b8w0x+/Emda6MZgXS1jvsapng==",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^4.0.0"
      },
      "dependencies": {
        "escape-string-regexp": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
          "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
          "dev": true
        }
      }
    },
    "md5-hex": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/md5-hex/-/md5-hex-3.0.1.tgz",
      "integrity": "sha512-BUiRtTtV39LIJwinWBjqVsU9xhdnz7/i889V859IBFpuqGAj6LuOvHv5XLbgZ2R7ptJoJaEcxkv88/h25T7Ciw==",
      "dev": true,
      "requires": {
        "blueimp-md5": "^2.10.0"
      }
    },
    "mem": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/mem/-/mem-8.1.0.tgz",
      "integrity": "sha512-FIkgXo0kTi3XpvaznV5Muk6Y6w8SkdmRXcY7ZLonQesuYezp59UooLxAVBcGuN6PH2tXN84mR3vyzSc6oSMUfA==",
      "dev": true,
      "requires": {
        "map-age-cleaner": "^0.1.3",
        "mimic-fn": "^3.1.0"
      },
      "dependencies": {
        "mimic-fn": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-3.1.0.tgz",
          "integrity": "sha512-Ysbi9uYW9hFyfrThdDEQuykN4Ey6BuwPD2kpI5ES/nFTDn/98yxYNLZJcgUAKPT/mcrLLKaGzJR9YVxJrIdASQ==",
          "dev": true
        }
      }
    },
    "memorystream": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/memorystream/-/memorystream-0.3.1.tgz",
      "integrity": "sha1-htcJCzDORV1j+64S3aUaR93K+bI=",
      "dev": true
    },
    "meow": {
      "version": "6.1.1",
      "resolved": "https://registry.npmjs.org/meow/-/meow-6.1.1.tgz",
      "integrity": "sha512-3YffViIt2QWgTy6Pale5QpopX/IvU3LPL03jOTqp6pGj3VjesdO/U8CuHMKpnQr4shCNCM5fd5XFFvIIl6JBHg==",
      "dev": true,
      "requires": {
        "@types/minimist": "^1.2.0",
        "camelcase-keys": "^6.2.2",
        "decamelize-keys": "^1.1.0",
        "hard-rejection": "^2.1.0",
        "minimist-options": "^4.0.2",
        "normalize-package-data": "^2.5.0",
        "read-pkg-up": "^7.0.1",
        "redent": "^3.0.0",
        "trim-newlines": "^3.0.0",
        "type-fest": "^0.13.1",
        "yargs-parser": "^18.1.3"
      },
      "dependencies": {
        "camelcase": {
          "version": "5.3.1",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
          "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
          "dev": true
        },
        "read-pkg-up": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
          "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
          "dev": true,
          "requires": {
            "find-up": "^4.1.0",
            "read-pkg": "^5.2.0",
            "type-fest": "^0.8.1"
          },
          "dependencies": {
            "type-fest": {
              "version": "0.8.1",
              "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
              "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
              "dev": true
            }
          }
        },
        "type-fest": {
          "version": "0.13.1",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.13.1.tgz",
          "integrity": "sha512-34R7HTnG0XIJcBSn5XhDd7nNFPRcXYRZrBB2O2jdKqYODldSzBAqzsWoZYYvduky73toYS/ESqxPvkDf/F0XMg==",
          "dev": true
        },
        "yargs-parser": {
          "version": "18.1.3",
          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
          "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
          "dev": true,
          "requires": {
            "camelcase": "^5.0.0",
            "decamelize": "^1.2.0"
          }
        }
      }
    },
    "merge": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/merge/-/merge-1.2.1.tgz",
      "integrity": "sha512-VjFo4P5Whtj4vsLzsYBu5ayHhoHJ0UqNm7ibvShmbmoz7tGi0vXaoJbGdB+GmDMLUdg8DpQXEIeVDAe8MaABvQ==",
      "dev": true
    },
    "merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true
    },
    "micromatch": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.2.tgz",
      "integrity": "sha512-y7FpHSbMUMoyPbYUSzO6PaZ6FyRnQOpHuKwbo1G+Knck95XVU4QAiKdGEnj5wwoS7PlOgthX/09u5iFJ+aYf5Q==",
      "dev": true,
      "requires": {
        "braces": "^3.0.1",
        "picomatch": "^2.0.5"
      }
    },
    "mimic-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
      "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
      "dev": true
    },
    "mimic-response": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
      "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ==",
      "dev": true
    },
    "min-indent": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/min-indent/-/min-indent-1.0.1.tgz",
      "integrity": "sha512-I9jwMn07Sy/IwOj3zVkVik2JTvgpaykDZEigL6Rx6N9LbMywwUSMtxET+7lVoDLLd3O3IXwJwvuuns8UB/HeAg==",
      "dev": true
    },
    "minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "dev": true,
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "minimist": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
      "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw==",
      "dev": true
    },
    "minimist-options": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/minimist-options/-/minimist-options-4.1.0.tgz",
      "integrity": "sha512-Q4r8ghd80yhO/0j1O3B2BjweX3fiHg9cdOwjJd2J76Q135c+NDxGCqdYKQ1SKBuFfgWbAUzBfvYjPUEeNgqN1A==",
      "dev": true,
      "requires": {
        "arrify": "^1.0.1",
        "is-plain-obj": "^1.1.0",
        "kind-of": "^6.0.3"
      },
      "dependencies": {
        "arrify": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
          "integrity": "sha1-iYUI2iIm84DfkEcoRWhJwVAaSw0=",
          "dev": true
        }
      }
    },
    "mixin-deep": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
      "dev": true,
      "requires": {
        "for-in": "^1.0.2",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "dev": true,
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        },
        "is-plain-object": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
          "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
          "dev": true,
          "requires": {
            "isobject": "^3.0.1"
          }
        }
      }
    },
    "modify-values": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/modify-values/-/modify-values-1.0.1.tgz",
      "integrity": "sha512-xV2bxeN6F7oYjZWTe/YPAy6MN2M+sL4u/Rlm2AHCIVGfo2p1yGmBHQ6vHehl4bRTZBdHu3TSkWdYgkwpYzAGSw==",
      "dev": true
    },
    "ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
      "dev": true
    },
    "mute-stream": {
      "version": "0.0.7",
      "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.7.tgz",
      "integrity": "sha1-MHXOk7whuPq0PhvE2n6BFe0ee6s=",
      "dev": true
    },
    "nanomatch": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
      "dev": true,
      "requires": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "fragment-cache": "^0.2.1",
        "is-windows": "^1.0.2",
        "kind-of": "^6.0.2",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      }
    },
    "natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
      "dev": true
    },
    "nc-common": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/nc-common/-/nc-common-0.0.6.tgz",
      "integrity": "sha512-3AryS9uwa5NfISLxMciUonrH7YfXp+nlahB9T7girXIsLQrmwX4MdnuKs32akduCOGpKmjTJSWmATULbuMkbfw=="
    },
    "neo-async": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
      "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
      "dev": true
    },
    "nice-try": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
      "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==",
      "dev": true
    },
    "node-fetch": {
      "version": "2.6.7",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.7.tgz",
      "integrity": "sha512-ZjMPFEfVx5j+y2yF35Kzx5sF7kDzxuDj6ziH4FFbOp87zKDZNx8yExJIb05OGF4Nlt9IHFIMBkRl41VdvcNdbQ==",
      "dev": true,
      "requires": {
        "whatwg-url": "^5.0.0"
      }
    },
    "node-preload": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/node-preload/-/node-preload-0.2.1.tgz",
      "integrity": "sha512-RM5oyBy45cLEoHqCeh+MNuFAxO0vTFBLskvQbOKnEE7YTTSN4tbN8QWDIPQ6L+WvKsB/qLEGpYe2ZZ9d4W9OIQ==",
      "dev": true,
      "requires": {
        "process-on-spawn": "^1.0.0"
      }
    },
    "node-releases": {
      "version": "1.1.71",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.71.tgz",
      "integrity": "sha512-zR6HoT6LrLCRBwukmrVbHv0EpEQjksO6GmFcZQQuCAy139BEsoVKPYnf3jongYW83fAa1torLGYwxxky/p28sg==",
      "dev": true
    },
    "normalize-package-data": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
      "dev": true,
      "requires": {
        "hosted-git-info": "^2.1.4",
        "resolve": "^1.10.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      },
      "dependencies": {
        "semver": {
          "version": "5.7.1",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
          "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
          "dev": true
        }
      }
    },
    "normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true
    },
    "normalize-url": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-4.5.0.tgz",
      "integrity": "sha512-2s47yzUxdexf1OhyRi4Em83iQk0aPvwTddtFz4hnSSw9dCEsLEGf6SwIO8ss/19S9iBb5sJaOuTvTGDeZI00BQ==",
      "dev": true
    },
    "npm-run-all": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/npm-run-all/-/npm-run-all-4.1.5.tgz",
      "integrity": "sha512-Oo82gJDAVcaMdi3nuoKFavkIHBRVqQ1qvMb+9LHk/cF4P6B2m8aP04hGf7oL6wZ9BuGwX1onlLhpuoofSyoQDQ==",
      "dev": true,
      "requires": {
        "ansi-styles": "^3.2.1",
        "chalk": "^2.4.1",
        "cross-spawn": "^6.0.5",
        "memorystream": "^0.3.1",
        "minimatch": "^3.0.4",
        "pidtree": "^0.3.0",
        "read-pkg": "^3.0.0",
        "shell-quote": "^1.6.1",
        "string.prototype.padend": "^3.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        },
        "cross-spawn": {
          "version": "6.0.5",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
          "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
          "dev": true,
          "requires": {
            "nice-try": "^1.0.4",
            "path-key": "^2.0.1",
            "semver": "^5.5.0",
            "shebang-command": "^1.2.0",
            "which": "^1.2.9"
          }
        },
        "escape-string-regexp": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
          "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
          "dev": true
        },
        "has-flag": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
          "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
          "dev": true
        },
        "load-json-file": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
          "integrity": "sha1-L19Fq5HjMhYjT9U62rZo607AmTs=",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.2",
            "parse-json": "^4.0.0",
            "pify": "^3.0.0",
            "strip-bom": "^3.0.0"
          }
        },
        "path-key": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
          "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
          "dev": true
        },
        "path-type": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
          "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
          "dev": true,
          "requires": {
            "pify": "^3.0.0"
          }
        },
        "pify": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
          "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
          "dev": true
        },
        "read-pkg": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
          "integrity": "sha1-nLxoaXj+5l0WwA4rGcI3/Pbjg4k=",
          "dev": true,
          "requires": {
            "load-json-file": "^4.0.0",
            "normalize-package-data": "^2.3.2",
            "path-type": "^3.0.0"
          }
        },
        "semver": {
          "version": "5.7.1",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
          "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
          "dev": true
        },
        "shebang-command": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
          "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
          "dev": true,
          "requires": {
            "shebang-regex": "^1.0.0"
          }
        },
        "shebang-regex": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
          "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
          "dev": true
        },
        "supports-color": {
          "version": "5.5.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
          "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        }
      }
    },
    "null-check": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/null-check/-/null-check-1.0.0.tgz",
      "integrity": "sha1-l33/1xdgErnsMNKjnbXPcqBDnt0=",
      "dev": true
    },
    "nyc": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/nyc/-/nyc-15.1.0.tgz",
      "integrity": "sha512-jMW04n9SxKdKi1ZMGhvUTHBN0EICCRkHemEoE5jm6mTYcqcdas0ATzgUgejlQUHMvpnOZqGB5Xxsv9KxJW1j8A==",
      "dev": true,
      "requires": {
        "@istanbuljs/load-nyc-config": "^1.0.0",
        "@istanbuljs/schema": "^0.1.2",
        "caching-transform": "^4.0.0",
        "convert-source-map": "^1.7.0",
        "decamelize": "^1.2.0",
        "find-cache-dir": "^3.2.0",
        "find-up": "^4.1.0",
        "foreground-child": "^2.0.0",
        "get-package-type": "^0.1.0",
        "glob": "^7.1.6",
        "istanbul-lib-coverage": "^3.0.0",
        "istanbul-lib-hook": "^3.0.0",
        "istanbul-lib-instrument": "^4.0.0",
        "istanbul-lib-processinfo": "^2.0.2",
        "istanbul-lib-report": "^3.0.0",
        "istanbul-lib-source-maps": "^4.0.0",
        "istanbul-reports": "^3.0.2",
        "make-dir": "^3.0.0",
        "node-preload": "^0.2.1",
        "p-map": "^3.0.0",
        "process-on-spawn": "^1.0.0",
        "resolve-from": "^5.0.0",
        "rimraf": "^3.0.0",
        "signal-exit": "^3.0.2",
        "spawn-wrap": "^2.0.0",
        "test-exclude": "^6.0.0",
        "yargs": "^15.0.2"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "dev": true,
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "camelcase": {
          "version": "5.3.1",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
          "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
          "dev": true
        },
        "cliui": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz",
          "integrity": "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==",
          "dev": true,
          "requires": {
            "string-width": "^4.2.0",
            "strip-ansi": "^6.0.0",
            "wrap-ansi": "^6.2.0"
          }
        },
        "p-map": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/p-map/-/p-map-3.0.0.tgz",
          "integrity": "sha512-d3qXVTF/s+W+CdJ5A29wywV2n8CQQYahlgz2bFiA+4eVNJbHJodPZ+/gXwPGh0bOqA+j8S+6+ckmvLGPk1QpxQ==",
          "dev": true,
          "requires": {
            "aggregate-error": "^3.0.0"
          }
        },
        "wrap-ansi": {
          "version": "6.2.0",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
          "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
          "dev": true,
          "requires": {
            "ansi-styles": "^4.0.0",
            "string-width": "^4.1.0",
            "strip-ansi": "^6.0.0"
          }
        },
        "y18n": {
          "version": "4.0.3",
          "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.3.tgz",
          "integrity": "sha512-JKhqTOwSrqNA1NY5lSztJ1GrBiUodLMmIZuLiDaMRJ+itFd+ABVE8XBjOvIWL+rSqNDC74LCSFmlb/U4UZ4hJQ==",
          "dev": true
        },
        "yargs": {
          "version": "15.4.1",
          "resolved": "https://registry.npmjs.org/yargs/-/yargs-15.4.1.tgz",
          "integrity": "sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A==",
          "dev": true,
          "requires": {
            "cliui": "^6.0.0",
            "decamelize": "^1.2.0",
            "find-up": "^4.1.0",
            "get-caller-file": "^2.0.1",
            "require-directory": "^2.1.1",
            "require-main-filename": "^2.0.0",
            "set-blocking": "^2.0.0",
            "string-width": "^4.2.0",
            "which-module": "^2.0.0",
            "y18n": "^4.0.0",
            "yargs-parser": "^18.1.2"
          }
        },
        "yargs-parser": {
          "version": "18.1.3",
          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
          "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
          "dev": true,
          "requires": {
            "camelcase": "^5.0.0",
            "decamelize": "^1.2.0"
          }
        }
      }
    },
    "object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
      "dev": true
    },
    "object-copy": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "dev": true,
      "requires": {
        "copy-descriptor": "^0.1.0",
        "define-property": "^0.2.5",
        "kind-of": "^3.0.3"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "object-inspect": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.9.0.tgz",
      "integrity": "sha512-i3Bp9iTqwhaLZBxGkRfo5ZbE07BQRT7MGu8+nNgwW9ItGp1TzCTw2DLEoWwjClxBjOFI/hWljTAmYGCEwmtnOw==",
      "dev": true
    },
    "object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true
    },
    "object-visit": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "dev": true,
      "requires": {
        "isobject": "^3.0.0"
      }
    },
    "object.assign": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "has-symbols": "^1.0.1",
        "object-keys": "^1.1.1"
      }
    },
    "object.fromentries": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.4.tgz",
      "integrity": "sha512-EsFBshs5RUUpQEY1D4q/m59kMfz4YJvxuNCJcv/jWwOJr34EaVnG11ZrZa0UHB3wnzV1wx8m58T4hQL8IuNXlQ==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.2",
        "has": "^1.0.3"
      }
    },
    "object.pick": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "dev": true,
      "requires": {
        "isobject": "^3.0.1"
      }
    },
    "object.values": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.1.3.tgz",
      "integrity": "sha512-nkF6PfDB9alkOUxpf1HNm/QlkeW3SReqL5WXeBLpEJJnlPSvRaDQpW3gQTksTN3fgJX4hL42RzKyOin6ff3tyw==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.2",
        "has": "^1.0.3"
      }
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "dev": true,
      "requires": {
        "wrappy": "1"
      }
    },
    "onetime": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
      "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
      "dev": true,
      "requires": {
        "mimic-fn": "^2.1.0"
      }
    },
    "open": {
      "version": "7.4.2",
      "resolved": "https://registry.npmjs.org/open/-/open-7.4.2.tgz",
      "integrity": "sha512-MVHddDVweXZF3awtlAS+6pgKLlm/JgxZ90+/NBurBoQctVOOB/zDdVjcyPzQ+0laDGbsWgrRkflI65sQeOgT9Q==",
      "dev": true,
      "requires": {
        "is-docker": "^2.0.0",
        "is-wsl": "^2.1.1"
      }
    },
    "open-cli": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/open-cli/-/open-cli-6.0.1.tgz",
      "integrity": "sha512-A5h8MF3GrT1efn9TiO9LPajDnLtuEiGQT5G8TxWObBlgt1cZJF1YbQo/kNtsD1bJb7HxnT6SaSjzeLq0Rfhygw==",
      "dev": true,
      "requires": {
        "file-type": "^14.1.4",
        "get-stdin": "^7.0.0",
        "meow": "^6.1.0",
        "open": "^7.0.3",
        "temp-write": "^4.0.0"
      },
      "dependencies": {
        "get-stdin": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-7.0.0.tgz",
          "integrity": "sha512-zRKcywvrXlXsA0v0i9Io4KDRaAw7+a1ZpjRwl9Wox8PFlVCCHra7E9c4kqXCoCM9nR5tBkaTTZRBoCm60bFqTQ==",
          "dev": true
        }
      }
    },
    "optionator": {
      "version": "0.9.1",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.1.tgz",
      "integrity": "sha512-74RlY5FCnhq4jRxVUPKDaRwrVNXMqsGsiW6AJw4XK8hmtm10wC0ypZBLw5IIp85NZMr91+qd1RvvENwg7jjRFw==",
      "dev": true,
      "requires": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.3"
      }
    },
    "ora": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/ora/-/ora-5.4.0.tgz",
      "integrity": "sha512-1StwyXQGoU6gdjYkyVcqOLnVlbKj+6yPNNOxJVgpt9t4eksKjiriiHuxktLYkgllwk+D6MbC4ihH84L1udRXPg==",
      "dev": true,
      "requires": {
        "bl": "^4.1.0",
        "chalk": "^4.1.0",
        "cli-cursor": "^3.1.0",
        "cli-spinners": "^2.5.0",
        "is-interactive": "^1.0.0",
        "is-unicode-supported": "^0.1.0",
        "log-symbols": "^4.1.0",
        "strip-ansi": "^6.0.0",
        "wcwidth": "^1.0.1"
      }
    },
    "os-tmpdir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
      "dev": true
    },
    "p-cancelable": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-1.1.0.tgz",
      "integrity": "sha512-s73XxOZ4zpt1edZYZzvhqFa6uvQc1vwUa0K0BdtIZgQMAJj9IbebH+JkgKZc9h+B05PKHLOTl4ajG1BmNrVZlw==",
      "dev": true
    },
    "p-defer": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-defer/-/p-defer-1.0.0.tgz",
      "integrity": "sha1-n26xgvbJqozXQwBKfU+WsZaw+ww=",
      "dev": true
    },
    "p-event": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/p-event/-/p-event-4.2.0.tgz",
      "integrity": "sha512-KXatOjCRXXkSePPb1Nbi0p0m+gQAwdlbhi4wQKJPI1HsMQS9g+Sqp2o+QHziPr7eYJyOZet836KoHEVM1mwOrQ==",
      "dev": true,
      "requires": {
        "p-timeout": "^3.1.0"
      }
    },
    "p-finally": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
      "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
      "dev": true
    },
    "p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dev": true,
      "requires": {
        "p-try": "^2.0.0"
      }
    },
    "p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dev": true,
      "requires": {
        "p-limit": "^2.2.0"
      }
    },
    "p-map": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
      "integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",
      "dev": true,
      "requires": {
        "aggregate-error": "^3.0.0"
      }
    },
    "p-timeout": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/p-timeout/-/p-timeout-3.2.0.tgz",
      "integrity": "sha512-rhIwUycgwwKcP9yTOOFK/AKsAopjjCakVqLHePO3CC6Mir1Z99xT+R63jZxAT5lFZLa2inS5h+ZS2GvR99/FBg==",
      "dev": true,
      "requires": {
        "p-finally": "^1.0.0"
      }
    },
    "p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
      "dev": true
    },
    "package-hash": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/package-hash/-/package-hash-4.0.0.tgz",
      "integrity": "sha512-whdkPIooSu/bASggZ96BWVvZTRMOFxnyUG5PnTSGKoJE2gd5mbVNmR2Nj20QFzxYYgAXpoqC+AiXzl+UMRh7zQ==",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.15",
        "hasha": "^5.0.0",
        "lodash.flattendeep": "^4.4.0",
        "release-zalgo": "^1.0.0"
      }
    },
    "package-json": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/package-json/-/package-json-6.5.0.tgz",
      "integrity": "sha512-k3bdm2n25tkyxcjSKzB5x8kfVxlMdgsbPr0GkZcwHsLpba6cBjqCt1KlcChKEvxHIcTB1FVMuwoijZ26xex5MQ==",
      "dev": true,
      "requires": {
        "got": "^9.6.0",
        "registry-auth-token": "^4.0.0",
        "registry-url": "^5.0.0",
        "semver": "^6.2.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        }
      }
    },
    "parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "requires": {
        "callsites": "^3.0.0"
      }
    },
    "parse-github-repo-url": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/parse-github-repo-url/-/parse-github-repo-url-1.4.1.tgz",
      "integrity": "sha1-nn2LslKmy2ukJZUGC3v23z28H1A=",
      "dev": true
    },
    "parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
      "dev": true,
      "requires": {
        "error-ex": "^1.3.1",
        "json-parse-better-errors": "^1.0.1"
      }
    },
    "parse-ms": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/parse-ms/-/parse-ms-2.1.0.tgz",
      "integrity": "sha512-kHt7kzLoS9VBZfUsiKjv43mr91ea+U05EyKkEtqp7vNbHxmaVuEqN7XxeEVnGrMtYOAxGrDElSi96K7EgO1zCA==",
      "dev": true
    },
    "parse-passwd": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/parse-passwd/-/parse-passwd-1.0.0.tgz",
      "integrity": "sha1-bVuTSkVpk7I9N/QKOC1vFmao5cY=",
      "dev": true
    },
    "pascalcase": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
      "dev": true
    },
    "path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
      "dev": true
    },
    "path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true
    },
    "path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true
    },
    "path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true
    },
    "peek-readable": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/peek-readable/-/peek-readable-3.1.3.tgz",
      "integrity": "sha512-mpAcysyRJxmICBcBa5IXH7SZPvWkcghm6Fk8RekoS3v+BpbSzlZzuWbMx+GXrlUwESi9qHar4nVEZNMKylIHvg==",
      "dev": true
    },
    "picomatch": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.2.tgz",
      "integrity": "sha512-q0M/9eZHzmr0AulXyPwNfZjtwZ/RBZlbN3K3CErVrk50T2ASYI7Bye0EvekFY3IP1Nt2DHu0re+V2ZHIpMkuWg==",
      "dev": true
    },
    "pidtree": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/pidtree/-/pidtree-0.3.1.tgz",
      "integrity": "sha512-qQbW94hLHEqCg7nhby4yRC7G2+jYHY4Rguc2bjw7Uug4GIJuu1tvf2uHaZv5Q8zdt+WKJ6qK1FOI6amaWUo5FA==",
      "dev": true
    },
    "pify": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
      "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
      "dev": true
    },
    "pinkie": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
      "dev": true
    },
    "pinkie-promise": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
      "dev": true,
      "requires": {
        "pinkie": "^2.0.0"
      }
    },
    "pkg-conf": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/pkg-conf/-/pkg-conf-3.1.0.tgz",
      "integrity": "sha512-m0OTbR/5VPNPqO1ph6Fqbj7Hv6QU7gR/tQW40ZqrL1rjgCU85W6C1bJn0BItuJqnR98PWzw7Z8hHeChD1WrgdQ==",
      "dev": true,
      "requires": {
        "find-up": "^3.0.0",
        "load-json-file": "^5.2.0"
      },
      "dependencies": {
        "find-up": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
          "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
          "dev": true,
          "requires": {
            "locate-path": "^3.0.0"
          }
        },
        "locate-path": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
          "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
          "dev": true,
          "requires": {
            "p-locate": "^3.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "p-locate": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
          "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
          "dev": true,
          "requires": {
            "p-limit": "^2.0.0"
          }
        },
        "path-exists": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
          "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
          "dev": true
        }
      }
    },
    "pkg-dir": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
      "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
      "dev": true,
      "requires": {
        "find-up": "^4.0.0"
      }
    },
    "plur": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/plur/-/plur-4.0.0.tgz",
      "integrity": "sha512-4UGewrYgqDFw9vV6zNV+ADmPAUAfJPKtGvb/VdpQAx25X5f3xXdGdyOEVFwkl8Hl/tl7+xbeHqSEM+D5/TirUg==",
      "dev": true,
      "requires": {
        "irregular-plurals": "^3.2.0"
      }
    },
    "posix-character-classes": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
      "dev": true
    },
    "prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true
    },
    "prepend-http": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
      "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc=",
      "dev": true
    },
    "prettier": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-2.2.1.tgz",
      "integrity": "sha512-PqyhM2yCjg/oKkFPtTGUojv7gnZAoG80ttl45O6x2Ug/rMJw4wcc9k6aaf2hibP7BGVCCM33gZoGjyvt9mm16Q==",
      "dev": true
    },
    "pretty-ms": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/pretty-ms/-/pretty-ms-7.0.1.tgz",
      "integrity": "sha512-973driJZvxiGOQ5ONsFhOF/DtzPMOMtgC11kCpUrPGMTgqp2q/1gwzCquocrN33is0VZ5GFHXZYMM9l6h67v2Q==",
      "dev": true,
      "requires": {
        "parse-ms": "^2.1.0"
      }
    },
    "process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
      "dev": true
    },
    "process-on-spawn": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/process-on-spawn/-/process-on-spawn-1.0.0.tgz",
      "integrity": "sha512-1WsPDsUSMmZH5LeMLegqkPDrsGgsWwk1Exipy2hvB0o/F0ASzbpIctSCcZIK1ykJvtTJULEH+20WOFjMvGnCTg==",
      "dev": true,
      "requires": {
        "fromentries": "^1.2.0"
      }
    },
    "progress": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/progress/-/progress-2.0.3.tgz",
      "integrity": "sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==",
      "dev": true
    },
    "pump": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
      "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
      "dev": true,
      "requires": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
      "dev": true
    },
    "pupa": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/pupa/-/pupa-2.1.1.tgz",
      "integrity": "sha512-l1jNAspIBSFqbT+y+5FosojNpVpF94nlI+wDUpqP9enwOTfHx9f0gh5nB96vl+6yTpsJsypeNrwfzPrKuHB41A==",
      "dev": true,
      "requires": {
        "escape-goat": "^2.0.0"
      }
    },
    "q": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/q/-/q-1.5.1.tgz",
      "integrity": "sha1-fjL3W0E4EpHQRhHxvxQQmsAGUdc=",
      "dev": true
    },
    "query-string": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/query-string/-/query-string-4.3.4.tgz",
      "integrity": "sha1-u7aTucqRXCMlFbIosaArYJBD2+s=",
      "dev": true,
      "requires": {
        "object-assign": "^4.1.0",
        "strict-uri-encode": "^1.0.0"
      }
    },
    "queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true
    },
    "quick-lru": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-4.0.1.tgz",
      "integrity": "sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==",
      "dev": true
    },
    "rc": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
      "dev": true,
      "requires": {
        "deep-extend": "^0.6.0",
        "ini": "~1.3.0",
        "minimist": "^1.2.0",
        "strip-json-comments": "~2.0.1"
      },
      "dependencies": {
        "ini": {
          "version": "1.3.8",
          "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
          "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
          "dev": true
        }
      }
    },
    "read-pkg": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-5.2.0.tgz",
      "integrity": "sha512-Ug69mNOpfvKDAc2Q8DRpMjjzdtrnv9HcSMX+4VsZxD1aZ6ZzrIE7rlzXBtWTyhULSMKg076AW6WR5iZpD0JiOg==",
      "dev": true,
      "requires": {
        "@types/normalize-package-data": "^2.4.0",
        "normalize-package-data": "^2.5.0",
        "parse-json": "^5.0.0",
        "type-fest": "^0.6.0"
      },
      "dependencies": {
        "parse-json": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
          "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "error-ex": "^1.3.1",
            "json-parse-even-better-errors": "^2.3.0",
            "lines-and-columns": "^1.1.6"
          }
        },
        "type-fest": {
          "version": "0.6.0",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
          "integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
          "dev": true
        }
      }
    },
    "read-pkg-up": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-2.0.0.tgz",
      "integrity": "sha1-a3KoBImE4MQeeVEP1en6mbO1Sb4=",
      "dev": true,
      "requires": {
        "find-up": "^2.0.0",
        "read-pkg": "^2.0.0"
      },
      "dependencies": {
        "find-up": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
          "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
          "dev": true,
          "requires": {
            "locate-path": "^2.0.0"
          }
        },
        "load-json-file": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-2.0.0.tgz",
          "integrity": "sha1-eUfkIUmvgNaWy/eXvKq8/h/inKg=",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.2",
            "parse-json": "^2.2.0",
            "pify": "^2.0.0",
            "strip-bom": "^3.0.0"
          }
        },
        "locate-path": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
          "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
          "dev": true,
          "requires": {
            "p-locate": "^2.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "p-limit": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
          "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
          "dev": true,
          "requires": {
            "p-try": "^1.0.0"
          }
        },
        "p-locate": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
          "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
          "dev": true,
          "requires": {
            "p-limit": "^1.1.0"
          }
        },
        "p-try": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
          "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
          "dev": true
        },
        "parse-json": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
          "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
          "dev": true,
          "requires": {
            "error-ex": "^1.2.0"
          }
        },
        "path-exists": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
          "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
          "dev": true
        },
        "path-type": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/path-type/-/path-type-2.0.0.tgz",
          "integrity": "sha1-8BLMuEFbcJb8LaoQVMPXI4lZTHM=",
          "dev": true,
          "requires": {
            "pify": "^2.0.0"
          }
        },
        "pify": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
          "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
          "dev": true
        },
        "read-pkg": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-2.0.0.tgz",
          "integrity": "sha1-jvHAYjxqbbDcZxPEv6xGMysjaPg=",
          "dev": true,
          "requires": {
            "load-json-file": "^2.0.0",
            "normalize-package-data": "^2.3.2",
            "path-type": "^2.0.0"
          }
        }
      }
    },
    "readable-stream": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
      "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
      "dev": true,
      "requires": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      }
    },
    "readable-web-to-node-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/readable-web-to-node-stream/-/readable-web-to-node-stream-2.0.0.tgz",
      "integrity": "sha512-+oZJurc4hXpaaqsN68GoZGQAQIA3qr09Or4fqEsargABnbe5Aau8hFn6ISVleT3cpY/0n/8drn7huyyEvTbghA==",
      "dev": true
    },
    "readdirp": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.5.0.tgz",
      "integrity": "sha512-cMhu7c/8rdhkHXWsY+osBhfSy0JikwpHK/5+imo+LpeasTF8ouErHrlYkwT0++njiyuDvc7OFY5T3ukvZ8qmFQ==",
      "dev": true,
      "requires": {
        "picomatch": "^2.2.1"
      }
    },
    "rechoir": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.6.2.tgz",
      "integrity": "sha1-hSBLVNuoLVdC4oyWdW70OvUOM4Q=",
      "dev": true,
      "requires": {
        "resolve": "^1.1.6"
      }
    },
    "redent": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/redent/-/redent-3.0.0.tgz",
      "integrity": "sha512-6tDA8g98We0zd0GvVeMT9arEOnTw9qM03L9cJXaCjrip1OO764RDBLBfrB4cwzNGDj5OA5ioymC9GkizgWJDUg==",
      "dev": true,
      "requires": {
        "indent-string": "^4.0.0",
        "strip-indent": "^3.0.0"
      }
    },
    "regex-not": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "dev": true,
      "requires": {
        "extend-shallow": "^3.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "regexpp": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/regexpp/-/regexpp-3.1.0.tgz",
      "integrity": "sha512-ZOIzd8yVsQQA7j8GCSlPGXwg5PfmA1mrq0JP4nGhh54LaKN3xdai/vHUDu74pKwV8OxseMS65u2NImosQcSD0Q==",
      "dev": true
    },
    "registry-auth-token": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-4.2.1.tgz",
      "integrity": "sha512-6gkSb4U6aWJB4SF2ZvLb76yCBjcvufXBqvvEx1HbmKPkutswjW1xNVRY0+daljIYRbogN7O0etYSlbiaEQyMyw==",
      "dev": true,
      "requires": {
        "rc": "^1.2.8"
      }
    },
    "registry-url": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-5.1.0.tgz",
      "integrity": "sha512-8acYXXTI0AkQv6RAOjE3vOaIXZkT9wo4LOFbBKYQEEnnMNBpKqdUrI6S4NT0KPIo/WVvJ5tE/X5LF/TQUf0ekw==",
      "dev": true,
      "requires": {
        "rc": "^1.2.8"
      }
    },
    "release-zalgo": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/release-zalgo/-/release-zalgo-1.0.0.tgz",
      "integrity": "sha1-CXALflB0Mpc5Mw5TXFqQ+2eFFzA=",
      "dev": true,
      "requires": {
        "es6-error": "^4.0.1"
      }
    },
    "repeat-element": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.4.tgz",
      "integrity": "sha512-LFiNfRcSu7KK3evMyYOuCzv3L10TW7yC1G2/+StMjK8Y6Vqd2MG7r/Qjw4ghtuCOjFvlnms/iMmLqpvW/ES/WQ==",
      "dev": true
    },
    "repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
      "dev": true
    },
    "repeating": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/repeating/-/repeating-2.0.1.tgz",
      "integrity": "sha1-UhTFOpJtNVJwdSf7q0FdvAjQbdo=",
      "dev": true,
      "requires": {
        "is-finite": "^1.0.0"
      }
    },
    "require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
      "dev": true
    },
    "require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "dev": true
    },
    "require-main-filename": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
      "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==",
      "dev": true
    },
    "resolve": {
      "version": "1.20.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.20.0.tgz",
      "integrity": "sha512-wENBPt4ySzg4ybFQW2TT1zMQucPK95HSh/nq2CFTZVOGut2+pQvSsgtda4d26YrYcr067wjbmzOG8byDPBX63A==",
      "dev": true,
      "requires": {
        "is-core-module": "^2.2.0",
        "path-parse": "^1.0.6"
      }
    },
    "resolve-cwd": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
      "integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
      "dev": true,
      "requires": {
        "resolve-from": "^5.0.0"
      }
    },
    "resolve-dir": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/resolve-dir/-/resolve-dir-1.0.1.tgz",
      "integrity": "sha1-eaQGRMNivoLybv/nOcm7U4IEb0M=",
      "dev": true,
      "requires": {
        "expand-tilde": "^2.0.0",
        "global-modules": "^1.0.0"
      }
    },
    "resolve-from": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
      "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
      "dev": true
    },
    "resolve-global": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-global/-/resolve-global-1.0.0.tgz",
      "integrity": "sha512-zFa12V4OLtT5XUX/Q4VLvTfBf+Ok0SPc1FNGM/z9ctUdiU618qwKpWnd0CHs3+RqROfyEg/DhuHbMWYqcgljEw==",
      "dev": true,
      "requires": {
        "global-dirs": "^0.1.1"
      },
      "dependencies": {
        "global-dirs": {
          "version": "0.1.1",
          "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-0.1.1.tgz",
          "integrity": "sha1-sxnA3UYH81PzvpzKTHL8FIxJ9EU=",
          "dev": true,
          "requires": {
            "ini": "^1.3.4"
          }
        },
        "ini": {
          "version": "1.3.8",
          "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
          "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
          "dev": true
        }
      }
    },
    "resolve-url": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
      "dev": true
    },
    "responselike": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/responselike/-/responselike-1.0.2.tgz",
      "integrity": "sha1-kYcg7ztjHFZCvgaPFa3lpG9Loec=",
      "dev": true,
      "requires": {
        "lowercase-keys": "^1.0.0"
      }
    },
    "restore-cursor": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
      "integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
      "dev": true,
      "requires": {
        "onetime": "^5.1.0",
        "signal-exit": "^3.0.2"
      }
    },
    "ret": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
      "dev": true
    },
    "reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "dev": true
    },
    "rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "dev": true,
      "requires": {
        "glob": "^7.1.3"
      }
    },
    "run-async": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.4.1.tgz",
      "integrity": "sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ==",
      "dev": true
    },
    "run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "requires": {
        "queue-microtask": "^1.2.2"
      }
    },
    "rxjs": {
      "version": "6.6.7",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.7.tgz",
      "integrity": "sha512-hTdwr+7yYNIT5n4AMYp85KA6yw2Va0FLa3Rguvbpa4W3I5xynaBZo41cM3XM+4Q6fRMj3sBYIR1VAmZMXYJvRQ==",
      "dev": true,
      "requires": {
        "tslib": "^1.9.0"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "dev": true
    },
    "safe-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "dev": true,
      "requires": {
        "ret": "~0.1.10"
      }
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "dev": true
    },
    "semver": {
      "version": "7.3.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
      "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
      "dev": true,
      "requires": {
        "lru-cache": "^6.0.0"
      }
    },
    "semver-diff": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/semver-diff/-/semver-diff-3.1.1.tgz",
      "integrity": "sha512-GX0Ix/CJcHyB8c4ykpHGIAvLyOwOobtM/8d+TQkAd81/bEjgPHrfba41Vpesr7jX/t8Uh+R3EX9eAS5be+jQYg==",
      "dev": true,
      "requires": {
        "semver": "^6.3.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        }
      }
    },
    "serialize-error": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/serialize-error/-/serialize-error-7.0.1.tgz",
      "integrity": "sha512-8I8TjW5KMOKsZQTvoxjuSIa7foAwPWGOts+6o7sgjz41/qMD9VQHEDxi6PBvK2l0MXUmqZyNpUK+T2tQaaElvw==",
      "dev": true,
      "requires": {
        "type-fest": "^0.13.1"
      },
      "dependencies": {
        "type-fest": {
          "version": "0.13.1",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.13.1.tgz",
          "integrity": "sha512-34R7HTnG0XIJcBSn5XhDd7nNFPRcXYRZrBB2O2jdKqYODldSzBAqzsWoZYYvduky73toYS/ESqxPvkDf/F0XMg==",
          "dev": true
        }
      }
    },
    "set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",
      "dev": true
    },
    "set-value": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
      "dev": true,
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-extendable": "^0.1.1",
        "is-plain-object": "^2.0.3",
        "split-string": "^3.0.1"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "is-plain-object": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
          "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
          "dev": true,
          "requires": {
            "isobject": "^3.0.1"
          }
        }
      }
    },
    "shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "requires": {
        "shebang-regex": "^3.0.0"
      }
    },
    "shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true
    },
    "shell-quote": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.7.3.tgz",
      "integrity": "sha512-Vpfqwm4EnqGdlsBFNmHhxhElJYrdfcxPThu+ryKS5J8L/fhAwLazFZtq+S+TWZ9ANj2piSQLGj6NQg+lKPmxrw==",
      "dev": true
    },
      "version": "0.8.5",
      "integrity": "sha512-TiwcRcrkhHvbrZbnRcFYMLl30Dfov3HKqzp5tO5b4pt6G/SezKcYhmDg15zXVBswHmctSAQKznqNW2LO5tTDow==",
      "requires": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.7.3.tgz",
      "integrity": "sha512-Vpfqwm4EnqGdlsBFNmHhxhElJYrdfcxPThu+ryKS5J8L/fhAwLazFZtq+S+TWZ9ANj2piSQLGj6NQg+lKPmxrw==",
        "glob": "^7.0.0",
        "interpret": "^1.0.0",
        "rechoir": "^0.6.2"
      }
    },
    "signal-exit": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
      "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA==",
      "dev": true
    },
    "slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true
    },
    "slice-ansi": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-3.0.0.tgz",
      "integrity": "sha512-pSyv7bSTC7ig9Dcgbw9AuRNUb5k5V6oDudjZoMBSr13qpLBG7tB+zgCkARjq7xIUgdz5P1Qe8u+rSGdouOOIyQ==",
      "dev": true,
      "requires": {
        "ansi-styles": "^4.0.0",
        "astral-regex": "^2.0.0",
        "is-fullwidth-code-point": "^3.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "dev": true,
          "requires": {
            "color-convert": "^2.0.1"
          }
        }
      }
    },
    "snapdragon": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "dev": true,
      "requires": {
        "base": "^0.11.1",
        "debug": "^2.2.0",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "map-cache": "^0.2.2",
        "source-map": "^0.5.6",
        "source-map-resolve": "^0.5.0",
        "use": "^3.1.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        }
      }
    },
    "snapdragon-node": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "dev": true,
      "requires": {
        "define-property": "^1.0.0",
        "isobject": "^3.0.0",
        "snapdragon-util": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "snapdragon-util": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "dev": true,
      "requires": {
        "kind-of": "^3.2.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "sort-keys": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-1.1.2.tgz",
      "integrity": "sha1-RBttTTRnmPG05J6JIK37oOVD+a0=",
      "dev": true,
      "requires": {
        "is-plain-obj": "^1.0.0"
      }
    },
    "source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true
    },
    "source-map-resolve": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
      "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
      "dev": true,
      "requires": {
        "atob": "^2.1.2",
        "decode-uri-component": "^0.2.0",
        "resolve-url": "^0.2.1",
        "source-map-url": "^0.4.0",
        "urix": "^0.1.0"
      }
    },
    "source-map-support": {
      "version": "0.5.19",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
      "integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
      "dev": true,
      "requires": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "source-map-url": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.1.tgz",
      "integrity": "sha512-cPiFOTLUKvJFIg4SKVScy4ilPPW6rFgMgfuZJPNoDuMs3nC1HbMUycBoJw77xFIp6z1UJQJOfx6C9GMH80DiTw==",
      "dev": true
    },
    "spawn-wrap": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/spawn-wrap/-/spawn-wrap-2.0.0.tgz",
      "integrity": "sha512-EeajNjfN9zMnULLwhZZQU3GWBoFNkbngTUPfaawT4RkMiviTxcX0qfhVbGey39mfctfDHkWtuecgQ8NJcyQWHg==",
      "dev": true,
      "requires": {
        "foreground-child": "^2.0.0",
        "is-windows": "^1.0.2",
        "make-dir": "^3.0.0",
        "rimraf": "^3.0.0",
        "signal-exit": "^3.0.2",
        "which": "^2.0.1"
      },
      "dependencies": {
        "which": {
          "version": "2.0.2",
          "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
          "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
          "dev": true,
          "requires": {
            "isexe": "^2.0.0"
          }
        }
      }
    },
    "spdx-correct": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz",
      "integrity": "sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==",
      "dev": true,
      "requires": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-exceptions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
      "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==",
      "dev": true
    },
    "spdx-expression-parse": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
      "dev": true,
      "requires": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-license-ids": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.7.tgz",
      "integrity": "sha512-U+MTEOO0AiDzxwFvoa4JVnMV6mZlJKk2sBLt90s7G0Gd0Mlknc7kxEn3nuDPNZRta7O2uy8oLcZLVT+4sqNZHQ==",
      "dev": true
    },
    "split": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/split/-/split-1.0.1.tgz",
      "integrity": "sha512-mTyOoPbrivtXnwnIxZRFYRrPNtEFKlpB2fvjSnCQUiAA6qAZzqwna5envK4uk6OIeP17CsdF3rSBGYVBsU0Tkg==",
      "dev": true,
      "requires": {
        "through": "2"
      }
    },
    "split-string": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "dev": true,
      "requires": {
        "extend-shallow": "^3.0.0"
      }
    },
    "split2": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/split2/-/split2-3.2.2.tgz",
      "integrity": "sha512-9NThjpgZnifTkJpzTZ7Eue85S49QwpNhZTq6GRJwObb6jnLFNGB7Qm73V5HewTROPyxD0C29xqmaI68bQtV+hg==",
      "dev": true,
      "requires": {
        "readable-stream": "^3.0.0"
      }
    },
    "sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
      "dev": true
    },
    "stack-utils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-2.0.3.tgz",
      "integrity": "sha512-gL//fkxfWUsIlFL2Tl42Cl6+HFALEaB1FU76I/Fy+oZjRreP7OPMXFlGbxM7NQsI0ZpUfw76sHnv0WNYuTb7Iw==",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^2.0.0"
      }
    },
    "standard-version": {
      "version": "9.2.0",
      "resolved": "https://registry.npmjs.org/standard-version/-/standard-version-9.2.0.tgz",
      "integrity": "sha512-utJcqjk/wR4sePSwDoRcc5CzJ6S+kec5Hd0+1TJI+j1TRYuuptweAnEUdkkjGf2vYoGab2ezefyVtW065HZ1Uw==",
      "dev": true,
      "requires": {
        "chalk": "^2.4.2",
        "conventional-changelog": "3.1.24",
        "conventional-changelog-config-spec": "2.1.0",
        "conventional-changelog-conventionalcommits": "4.5.0",
        "conventional-recommended-bump": "6.1.0",
        "detect-indent": "^6.0.0",
        "detect-newline": "^3.1.0",
        "dotgitignore": "^2.1.0",
        "figures": "^3.1.0",
        "find-up": "^5.0.0",
        "fs-access": "^1.0.1",
        "git-semver-tags": "^4.0.0",
        "semver": "^7.1.1",
        "stringify-package": "^1.0.1",
        "yargs": "^16.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        },
        "escape-string-regexp": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
          "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
          "dev": true
        },
        "find-up": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
          "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
          "dev": true,
          "requires": {
            "locate-path": "^6.0.0",
            "path-exists": "^4.0.0"
          }
        },
        "has-flag": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
          "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
          "dev": true
        },
        "locate-path": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
          "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
          "dev": true,
          "requires": {
            "p-locate": "^5.0.0"
          }
        },
        "p-limit": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
          "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
          "dev": true,
          "requires": {
            "yocto-queue": "^0.1.0"
          }
        },
        "p-locate": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
          "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
          "dev": true,
          "requires": {
            "p-limit": "^3.0.2"
          }
        },
        "supports-color": {
          "version": "5.5.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
          "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        }
      }
    },
    "static-extend": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "dev": true,
      "requires": {
        "define-property": "^0.2.5",
        "object-copy": "^0.1.0"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "stream-events": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/stream-events/-/stream-events-1.0.5.tgz",
      "integrity": "sha512-E1GUzBSgvct8Jsb3v2X15pjzN1tYebtbLaMg+eBOUOAxgbLoSbT2NS91ckc5lJD1KfLjId+jXJRgo0qnV5Nerg==",
      "dev": true,
      "requires": {
        "stubs": "^3.0.0"
      }
    },
    "strict-uri-encode": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-1.1.0.tgz",
      "integrity": "sha1-J5siXfHVgrH1TmWt3UNS4Y+qBxM=",
      "dev": true
    },
    "string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "dev": true,
      "requires": {
        "safe-buffer": "~5.2.0"
      },
      "dependencies": {
        "safe-buffer": {
          "version": "5.2.1",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
          "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
          "dev": true
        }
      }
    },
    "string-width": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
      "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
      "dev": true,
      "requires": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.0"
      }
    },
    "string.prototype.padend": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/string.prototype.padend/-/string.prototype.padend-3.1.2.tgz",
      "integrity": "sha512-/AQFLdYvePENU3W5rgurfWSMU6n+Ww8n/3cUt7E+vPBB/D7YDG8x+qjoFs4M/alR2bW7Qg6xMjVwWUOvuQ0XpQ==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.2"
      }
    },
    "string.prototype.trimend": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.4.tgz",
      "integrity": "sha512-y9xCjw1P23Awk8EvTpcyL2NIr1j7wJ39f+k6lvRnSMz+mz9CGz9NYPelDk42kOz6+ql8xjfK8oYzy3jAP5QU5A==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3"
      }
    },
    "string.prototype.trimstart": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.4.tgz",
      "integrity": "sha512-jh6e984OBfvxS50tdY2nRZnoC5/mLFKOREQfw8t5yytkoUsJRNxvI/E39qu1sD0OtWI3OC0XgKSmcWwziwYuZw==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3"
      }
    },
    "stringify-package": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/stringify-package/-/stringify-package-1.0.1.tgz",
      "integrity": "sha512-sa4DUQsYciMP1xhKWGuFM04fB0LG/9DlluZoSVywUMRNvzid6XucHK0/90xGxRoHrAaROrcHK1aPKaijCtSrhg==",
      "dev": true
    },
    "strip-ansi": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
      "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
      "dev": true,
      "requires": {
        "ansi-regex": "^5.0.0"
      }
    },
    "strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
      "dev": true
    },
    "strip-indent": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-3.0.0.tgz",
      "integrity": "sha512-laJTa3Jb+VQpaC6DseHhF7dXVqHTfJPCRDaEbid/drOhgitgYku/letMUqOXFoWV0zIIUbjpdH2t+tYj4bQMRQ==",
      "dev": true,
      "requires": {
        "min-indent": "^1.0.0"
      }
    },
    "strip-json-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo=",
      "dev": true
    },
    "strip-outer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/strip-outer/-/strip-outer-1.0.1.tgz",
      "integrity": "sha512-k55yxKHwaXnpYGsOzg4Vl8+tDrWylxDEpknGjhTiZB8dFRU5rTo9CAzeycivxV3s+zlTKwrs6WxMxR95n26kwg==",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^1.0.2"
      },
      "dependencies": {
        "escape-string-regexp": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
          "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
          "dev": true
        }
      }
    },
    "strip-url-auth": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/strip-url-auth/-/strip-url-auth-1.0.1.tgz",
      "integrity": "sha1-IrD6OkE4WzO+PzMVUbu4N/oM164=",
      "dev": true
    },
    "strtok3": {
      "version": "6.0.8",
      "resolved": "https://registry.npmjs.org/strtok3/-/strtok3-6.0.8.tgz",
      "integrity": "sha512-QLgv+oiXwXgCgp2PdPPa+Jpp4D9imK9e/0BsyfeFMr6QL6wMVqoVn9+OXQ9I7MZbmUzN6lmitTJ09uwS2OmGcw==",
      "dev": true,
      "requires": {
        "@tokenizer/token": "^0.1.1",
        "@types/debug": "^4.1.5",
        "peek-readable": "^3.1.3"
      }
    },
    "stubs": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/stubs/-/stubs-3.0.0.tgz",
      "integrity": "sha1-6NK6H6nJBXAwPAMLaQD31fiavls=",
      "dev": true
    },
    "supertap": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/supertap/-/supertap-2.0.0.tgz",
      "integrity": "sha512-jRzcXlCeDYvKoZGA5oRhYyR3jUIYu0enkSxtmAgHRlD7HwrovTpH4bDSi0py9FtuA8si9cW/fKommJHuaoDHJA==",
      "dev": true,
      "requires": {
        "arrify": "^2.0.1",
        "indent-string": "^4.0.0",
        "js-yaml": "^3.14.0",
        "serialize-error": "^7.0.1",
        "strip-ansi": "^6.0.0"
      }
    },
    "supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "requires": {
        "has-flag": "^4.0.0"
      }
    },
    "table": {
      "version": "6.0.9",
      "resolved": "https://registry.npmjs.org/table/-/table-6.0.9.tgz",
      "integrity": "sha512-F3cLs9a3hL1Z7N4+EkSscsel3z55XT950AvB05bwayrNg5T1/gykXtigioTAjbltvbMSJvvhFCbnf6mX+ntnJQ==",
      "dev": true,
      "requires": {
        "ajv": "^8.0.1",
        "is-boolean-object": "^1.1.0",
        "is-number-object": "^1.0.4",
        "is-string": "^1.0.5",
        "lodash.clonedeep": "^4.5.0",
        "lodash.flatten": "^4.4.0",
        "lodash.truncate": "^4.4.2",
        "slice-ansi": "^4.0.0",
        "string-width": "^4.2.0"
      },
      "dependencies": {
        "ajv": {
          "version": "8.0.5",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.0.5.tgz",
          "integrity": "sha512-RkiLa/AeJx7+9OvniQ/qeWu0w74A8DiPPBclQ6ji3ZQkv5KamO+QGpqmi7O4JIw3rHGUXZ6CoP9tsAkn3gyazg==",
          "dev": true,
          "requires": {
            "fast-deep-equal": "^3.1.1",
            "json-schema-traverse": "^1.0.0",
            "require-from-string": "^2.0.2",
            "uri-js": "^4.2.2"
          }
        },
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "dev": true,
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "json-schema-traverse": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
          "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
          "dev": true
        },
        "slice-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-4.0.0.tgz",
          "integrity": "sha512-qMCMfhY040cVHT43K9BFygqYbUPFZKHOg7K73mtTWJRb8pyP3fzf4Ixd5SzdEJQ6MRUg/WBnOLxghZtKKurENQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^4.0.0",
            "astral-regex": "^2.0.0",
            "is-fullwidth-code-point": "^3.0.0"
          }
        }
      }
    },
    "teeny-request": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/teeny-request/-/teeny-request-6.0.1.tgz",
      "integrity": "sha512-TAK0c9a00ELOqLrZ49cFxvPVogMUFaWY8dUsQc/0CuQPGF+BOxOQzXfE413BAk2kLomwNplvdtMpeaeGWmoc2g==",
      "dev": true,
      "requires": {
        "http-proxy-agent": "^4.0.0",
        "https-proxy-agent": "^4.0.0",
        "node-fetch": "^2.2.0",
        "stream-events": "^1.0.5",
        "uuid": "^3.3.2"
      }
    },
    "temp-dir": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/temp-dir/-/temp-dir-2.0.0.tgz",
      "integrity": "sha512-aoBAniQmmwtcKp/7BzsH8Cxzv8OL736p7v1ihGb5e9DJ9kTwGWHrQrVB5+lfVDzfGrdRzXch+ig7LHaY1JTOrg==",
      "dev": true
    },
    "temp-write": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/temp-write/-/temp-write-4.0.0.tgz",
      "integrity": "sha512-HIeWmj77uOOHb0QX7siN3OtwV3CTntquin6TNVg6SHOqCP3hYKmox90eeFOGaY1MqJ9WYDDjkyZrW6qS5AWpbw==",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.15",
        "is-stream": "^2.0.0",
        "make-dir": "^3.0.0",
        "temp-dir": "^1.0.0",
        "uuid": "^3.3.2"
      },
      "dependencies": {
        "temp-dir": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/temp-dir/-/temp-dir-1.0.0.tgz",
          "integrity": "sha1-CnwOom06Oa+n4OvqnB/AvE2qAR0=",
          "dev": true
        }
      }
    },
    "test-exclude": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
      "integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
      "dev": true,
      "requires": {
        "@istanbuljs/schema": "^0.1.2",
        "glob": "^7.1.4",
        "minimatch": "^3.0.4"
      }
    },
    "text-extensions": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/text-extensions/-/text-extensions-1.9.0.tgz",
      "integrity": "sha512-wiBrwC1EhBelW12Zy26JeOUkQ5mRu+5o8rpsJk5+2t+Y5vE7e842qtZDQ2g1NpX/29HdyFeJ4nSIhI47ENSxlQ==",
      "dev": true
    },
    "text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha1-f17oI66AUgfACvLfSoTsP8+lcLQ=",
      "dev": true
    },
    "through": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
      "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU=",
      "dev": true
    },
    "through2": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/through2/-/through2-4.0.2.tgz",
      "integrity": "sha512-iOqSav00cVxEEICeD7TjLB1sueEL+81Wpzp2bY17uZjZN0pWZPuo4suZ/61VujxmqSGFfgOcNuTZ85QJwNZQpw==",
      "dev": true,
      "requires": {
        "readable-stream": "3"
      }
    },
    "time-zone": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/time-zone/-/time-zone-1.0.0.tgz",
      "integrity": "sha1-mcW/VZWJZq9tBtg73zgA3IL67F0=",
      "dev": true
    },
    "tmp": {
      "version": "0.0.33",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
      "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
      "dev": true,
      "requires": {
        "os-tmpdir": "~1.0.2"
      }
    },
    "to-fast-properties": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=",
      "dev": true
    },
    "to-object-path": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "to-readable-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/to-readable-stream/-/to-readable-stream-1.0.0.tgz",
      "integrity": "sha512-Iq25XBt6zD5npPhlLVXGFN3/gyR2/qODcKNNyTMd4vbm39HUaOiAM4PMq0eMVC/Tkxz+Zjdsc55g9yyz+Yq00Q==",
      "dev": true
    },
    "to-regex": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "dev": true,
      "requires": {
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "regex-not": "^1.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "requires": {
        "is-number": "^7.0.0"
      }
    },
    "token-types": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/token-types/-/token-types-2.1.1.tgz",
      "integrity": "sha512-wnQcqlreS6VjthyHO3Y/kpK/emflxDBNhlNUPfh7wE39KnuDdOituXomIbyI79vBtF0Ninpkh72mcuRHo+RG3Q==",
      "dev": true,
      "requires": {
        "@tokenizer/token": "^0.1.1",
        "ieee754": "^1.2.1"
      }
    },
    "tr46": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
      "integrity": "sha1-gYT9NH2snNwYWZLzpmIuFLnZq2o=",
      "dev": true
    },
    "trim-newlines": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-3.0.0.tgz",
      "integrity": "sha512-C4+gOpvmxaSMKuEf9Qc134F1ZuOHVXKRbtEflf4NTtuuJDEIJ9p5PXsalL8SkeRw+qit1Mo+yuvMPAKwWg/1hA==",
      "dev": true
    },
    "trim-off-newlines": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/trim-off-newlines/-/trim-off-newlines-1.0.3.tgz",
      "integrity": "sha512-kh6Tu6GbeSNMGfrrZh6Bb/4ZEHV1QlB4xNDBeog8Y9/QwFlKTRyWvY3Fs9tRDAMZliVUwieMgEdIeL/FtqjkJg==",
      "dev": true
    },
    "trim-repeated": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/trim-repeated/-/trim-repeated-1.0.0.tgz",
      "integrity": "sha1-42RqLqTokTEr9+rObPsFOAvAHCE=",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^1.0.2"
      },
      "dependencies": {
        "escape-string-regexp": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
          "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
          "dev": true
        }
      }
    },
    "ts-node": {
      "version": "9.1.1",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-9.1.1.tgz",
      "integrity": "sha512-hPlt7ZACERQGf03M253ytLY3dHbGNGrAq9qIHWUY9XHYl1z7wYngSr3OQ5xmui8o2AaxsONxIzjafLUiWBo1Fg==",
      "dev": true,
      "requires": {
        "arg": "^4.1.0",
        "create-require": "^1.1.0",
        "diff": "^4.0.1",
        "make-error": "^1.1.1",
        "source-map-support": "^0.5.17",
        "yn": "3.1.1"
      }
    },
    "tsconfig-paths": {
      "version": "3.9.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.9.0.tgz",
      "integrity": "sha512-dRcuzokWhajtZWkQsDVKbWyY+jgcLC5sqJhg2PSgf4ZkH2aHPvaOY8YWGhmjb68b5qqTfasSsDO9k7RUiEmZAw==",
      "dev": true,
      "requires": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.1",
        "minimist": "^1.2.0",
        "strip-bom": "^3.0.0"
      }
    },
    "tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
      "dev": true
    },
    "tsutils": {
      "version": "3.21.0",
      "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-3.21.0.tgz",
      "integrity": "sha512-mHKK3iUXL+3UF6xL5k0PEhKRUBKPBCv/+RkEOpjRWxxx27KKRBmmA60A9pgOUvMi8GKhRMPEmjBRPzs2W7O1OA==",
      "dev": true,
      "requires": {
        "tslib": "^1.8.1"
      }
    },
    "type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "requires": {
        "prelude-ls": "^1.2.1"
      }
    },
    "type-fest": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.3.1.tgz",
      "integrity": "sha512-cUGJnCdr4STbePCgqNFbpVNCepa+kAVohJs1sLhxzdH+gnEoOd8VhbYa7pD3zZYGiURWM2xzEII3fQcRizDkYQ==",
      "dev": true
    },
    "typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",
      "dev": true
    },
    "typedarray-to-buffer": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
      "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
      "dev": true,
      "requires": {
        "is-typedarray": "^1.0.0"
      }
    },
    "typedoc": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/typedoc/-/typedoc-0.19.2.tgz",
      "integrity": "sha512-oDEg1BLEzi1qvgdQXc658EYgJ5qJLVSeZ0hQ57Eq4JXy6Vj2VX4RVo18qYxRWz75ifAaYuYNBUCnbhjd37TfOg==",
      "dev": true,
      "requires": {
        "fs-extra": "^9.0.1",
        "handlebars": "^4.7.6",
        "highlight.js": "^10.2.0",
        "lodash": "^4.17.20",
        "lunr": "^2.3.9",
        "marked": "^1.1.1",
        "minimatch": "^3.0.0",
        "progress": "^2.0.3",
        "semver": "^7.3.2",
        "shelljs": "^0.8.4",
        "typedoc-default-themes": "^0.11.4"
      }
    },
    "typedoc-default-themes": {
      "version": "0.11.4",
      "resolved": "https://registry.npmjs.org/typedoc-default-themes/-/typedoc-default-themes-0.11.4.tgz",
      "integrity": "sha512-Y4Lf+qIb9NTydrexlazAM46SSLrmrQRqWiD52593g53SsmUFioAsMWt8m834J6qsp+7wHRjxCXSZeiiW5cMUdw==",
      "dev": true
    },
    "typescript": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-4.2.4.tgz",
      "integrity": "sha512-V+evlYHZnQkaz8TRBuxTA92yZBPotr5H+WhQ7bD3hZUndx5tGOa1fuCgeSjxAzM1RiN5IzvadIXTVefuuwZCRg==",
      "dev": true
    },
    "uglify-js": {
      "version": "3.13.3",
      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.13.3.tgz",
      "integrity": "sha512-otIc7O9LyxpUcQoXzj2hL4LPWKklO6LJWoJUzNa8A17Xgi4fOeDC8FBDOLHnC/Slo1CQgsZMcM6as0M76BZaig==",
      "dev": true,
      "optional": true
    },
    "unbox-primitive": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.1.tgz",
      "integrity": "sha512-tZU/3NqK3dA5gpE1KtyiJUrEB0lxnGkMFHptJ7q6ewdZ8s12QrODwNbhIJStmJkd1QDXa1NRA8aF2A1zk/Ypyw==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1",
        "has-bigints": "^1.0.1",
        "has-symbols": "^1.0.2",
        "which-boxed-primitive": "^1.0.2"
      }
    },
    "union-value": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
      "dev": true,
      "requires": {
        "arr-union": "^3.1.0",
        "get-value": "^2.0.6",
        "is-extendable": "^0.1.1",
        "set-value": "^2.0.1"
      }
    },
    "unique-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-2.0.0.tgz",
      "integrity": "sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==",
      "dev": true,
      "requires": {
        "crypto-random-string": "^2.0.0"
      }
    },
    "universalify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.0.tgz",
      "integrity": "sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ==",
      "dev": true
    },
    "unset-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "dev": true,
      "requires": {
        "has-value": "^0.3.1",
        "isobject": "^3.0.0"
      },
      "dependencies": {
        "has-value": {
          "version": "0.3.1",
          "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
          "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
          "dev": true,
          "requires": {
            "get-value": "^2.0.3",
            "has-values": "^0.1.4",
            "isobject": "^2.0.0"
          },
          "dependencies": {
            "isobject": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
              "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
              "dev": true,
              "requires": {
                "isarray": "1.0.0"
              }
            }
          }
        },
        "has-values": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
          "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
          "dev": true
        }
      }
    },
    "update-notifier": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/update-notifier/-/update-notifier-5.1.0.tgz",
      "integrity": "sha512-ItnICHbeMh9GqUy31hFPrD1kcuZ3rpxDZbf4KUDavXwS0bW5m7SLbDQpGX3UYr072cbrF5hFUs3r5tUsPwjfHw==",
      "dev": true,
      "requires": {
        "boxen": "^5.0.0",
        "chalk": "^4.1.0",
        "configstore": "^5.0.1",
        "has-yarn": "^2.1.0",
        "import-lazy": "^2.1.0",
        "is-ci": "^2.0.0",
        "is-installed-globally": "^0.4.0",
        "is-npm": "^5.0.0",
        "is-yarn-global": "^0.3.0",
        "latest-version": "^5.1.0",
        "pupa": "^2.1.1",
        "semver": "^7.3.4",
        "semver-diff": "^3.1.1",
        "xdg-basedir": "^4.0.0"
      }
    },
    "uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "urix": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
      "dev": true
    },
    "url-parse-lax": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-3.0.0.tgz",
      "integrity": "sha1-FrXK/Afb42dsGxmZF3gj1lA6yww=",
      "dev": true,
      "requires": {
        "prepend-http": "^2.0.0"
      }
    },
    "urlgrey": {
      "version": "0.4.4",
      "resolved": "https://registry.npmjs.org/urlgrey/-/urlgrey-0.4.4.tgz",
      "integrity": "sha1-iS/pWWCAXoVRnxzUOJ8stMu3ZS8=",
      "dev": true
    },
    "use": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",
      "dev": true
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
      "dev": true
    },
    "uuid": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
      "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
      "dev": true
    },
    "v8-compile-cache": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.3.0.tgz",
      "integrity": "sha512-l8lCEmLcLYZh4nbunNZvQCJc5pv7+RCwa8q/LdUx8u7lsWvPDKmpodJAJNwkAhJC//dFY48KuIEmjtd4RViDrA==",
      "dev": true
    },
    "validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "dev": true,
      "requires": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "vscode-uri": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/vscode-uri/-/vscode-uri-3.0.2.tgz",
      "integrity": "sha512-jkjy6pjU1fxUvI51P+gCsxg1u2n8LSt0W6KrCNQceaziKzff74GoWmjVG46KieVzybO1sttPQmYfrwSHey7GUA==",
      "dev": true
    },
    "wcwidth": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
      "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
      "dev": true,
      "requires": {
        "defaults": "^1.0.3"
      }
    },
    "webidl-conversions": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
      "integrity": "sha1-JFNCdeKnvGvnvIZhHMFq4KVlSHE=",
      "dev": true
    },
    "well-known-symbols": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/well-known-symbols/-/well-known-symbols-2.0.0.tgz",
      "integrity": "sha512-ZMjC3ho+KXo0BfJb7JgtQ5IBuvnShdlACNkKkdsqBmYw3bPAaJfPeYUo6tLUaT5tG/Gkh7xkpBhKRQ9e7pyg9Q==",
      "dev": true
    },
    "whatwg-url": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
      "integrity": "sha1-lmRU6HZUYuN2RNNib2dCzotwll0=",
      "dev": true,
      "requires": {
        "tr46": "~0.0.3",
        "webidl-conversions": "^3.0.0"
      }
    },
    "which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dev": true,
      "requires": {
        "isexe": "^2.0.0"
      }
    },
    "which-boxed-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
      "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
      "dev": true,
      "requires": {
        "is-bigint": "^1.0.1",
        "is-boolean-object": "^1.1.0",
        "is-number-object": "^1.0.4",
        "is-string": "^1.0.5",
        "is-symbol": "^1.0.3"
      }
    },
    "which-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
      "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=",
      "dev": true
    },
    "widest-line": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-3.1.0.tgz",
      "integrity": "sha512-NsmoXalsWVDMGupxZ5R08ka9flZjjiLvHVAWYOKtiKM8ujtZWr9cRffak+uSE48+Ob8ObalXpwyeUiyDD6QFgg==",
      "dev": true,
      "requires": {
        "string-width": "^4.0.0"
      }
    },
    "word-wrap": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
      "dev": true
    },
    "wordwrap": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
      "integrity": "sha1-J1hIEIkUVqQXHI0CJkQa3pDLyus=",
      "dev": true
    },
    "wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "requires": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "dev": true,
          "requires": {
            "color-convert": "^2.0.1"
          }
        }
      }
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
      "dev": true
    },
    "write-file-atomic": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
      "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
      "dev": true,
      "requires": {
        "imurmurhash": "^0.1.4",
        "is-typedarray": "^1.0.0",
        "signal-exit": "^3.0.2",
        "typedarray-to-buffer": "^3.1.5"
      }
    },
    "xdg-basedir": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-4.0.0.tgz",
      "integrity": "sha512-PSNhEJDejZYV7h50BohL09Er9VaIefr2LMAf3OEmpCkjOi34eYyQYAXUTjEQtZJTKcF0E2UKTh+osDLsgNim9Q==",
      "dev": true
    },
    "xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "dev": true
    },
    "y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true
    },
    "yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "dev": true
    },
    "yaml": {
      "version": "1.10.2",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz",
      "integrity": "sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==",
      "dev": true,
      "optional": true
    },
    "yargs": {
      "version": "16.2.0",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.2.0.tgz",
      "integrity": "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==",
      "dev": true,
      "requires": {
        "cliui": "^7.0.2",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.0",
        "y18n": "^5.0.5",
        "yargs-parser": "^20.2.2"
      }
    },
    "yargs-parser": {
      "version": "20.2.7",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.7.tgz",
      "integrity": "sha512-FiNkvbeHzB/syOjIUxFDCnhSfzAL8R5vs40MgLFBorXACCOAEaWu0gRZl14vG8MR9AOJIZbmkjhusqBYZ3HTHw==",
      "dev": true
    },
    "yn": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
      "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
      "dev": true
    },
    "yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true
    }
  }
}