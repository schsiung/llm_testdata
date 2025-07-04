{
	"name": "convert-svg",
	"lockfileVersion": 2,
	"requires": true,
	"packages": {
		"": {
			"name": "convert-svg",
			"license": "MIT",
			"dependencies": {
				"chalk": "^4.1.2",
				"commander": "^9.2.0",
				"cheerio": "^1.0.0-rc.11",
				"file-url": "^3.0.0",
				"get-stdin": "^8.0.0",
				"glob": "^8.0.1",
				"lodash.clonedeep": "^4.5.0",
				"lodash.omit": "^4.5.0",
				"lodash.pick": "^4.4.0",
				"pollock": "^0.2.0",
				"rimraf": "^3.0.2",
				"sinon": "^13.0.2",
				"tmp": "^0.2.1"
			},
			"devDependencies": {
				"del-cli": "^4.0.1",
				"eslint": "^8.14.0",
				"eslint-config-notninja": "^0.4.0",
				"lerna": "^4.0.0",
				"mocha": "^9.2.2"
			},
			"engines": {
				"node": "^12.20.0 || >=14"
			}
		},
		"node_modules/@babel/code-frame": {
			"version": "7.16.7",
			"resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.16.7.tgz",
			"integrity": "sha512-iAXqUn8IIeBTNd72xsFlgaXHkMBMt6y4HJp1tIaK465CWLT/fG1aqB7ykr95gHHmlBdGbFeWWfyB4NJJ0nmeIg==",
			"dev": true,
			"dependencies": {
				"@babel/highlight": "^7.16.7"
			},
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/helper-validator-identifier": {
			"version": "7.16.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.16.7.tgz",
			"integrity": "sha512-hsEnFemeiW4D08A5gUAZxLBTXpZ39P+a+DGDsHw1yxqyQ/jzFEnxf5uTEGp+3bzAbNOxU1paTgYS4ECU/IgfDw==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@babel/highlight": {
			"version": "7.17.12",
			"resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.17.12.tgz",
			"integrity": "sha512-7yykMVF3hfZY2jsHZEEgLc+3x4o1O+fYyULu11GynEUQNwB6lua+IIQn1FiJxNucd5UlyJryrwsOh8PL9Sn8Qg==",
			"dev": true,
			"dependencies": {
				"@babel/helper-validator-identifier": "^7.16.7",
				"chalk": "^2.0.0",
				"js-tokens": "^4.0.0"
			},
			"engines": {
				"node": ">=6.9.0"
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
			"integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
			"dev": true
		},
		"node_modules/@babel/highlight/node_modules/escape-string-regexp": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
			"integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
			"dev": true,
			"engines": {
				"node": ">=0.8.0"
			}
		},
		"node_modules/@babel/highlight/node_modules/has-flag": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
			"integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
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
		"node_modules/@eslint/eslintrc": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-1.3.0.tgz",
			"integrity": "sha512-UWW0TMTmk2d7hLcWD1/e2g5HDM/HQ3csaLSqXCfqwh4uNDuNqlaKWXmEsL4Cs41Z0KnILNvwbHAah3C2yt06kw==",
			"dev": true,
			"dependencies": {
				"ajv": "^6.12.4",
				"debug": "^4.3.2",
				"espree": "^9.3.2",
				"globals": "^13.15.0",
				"ignore": "^5.2.0",
				"import-fresh": "^3.2.1",
				"js-yaml": "^4.1.0",
				"minimatch": "^3.1.2",
				"strip-json-comments": "^3.1.1"
			},
			"engines": {
				"node": "^12.22.0 || ^14.17.0 || >=16.0.0"
			}
		},
		"node_modules/@gar/promisify": {
			"version": "1.1.3",
			"resolved": "https://registry.npmjs.org/@gar/promisify/-/promisify-1.1.3.tgz",
			"integrity": "sha512-k2Ty1JcVojjJFwrg/ThKi2ujJ7XNLYaFGNB/bWT9wGR+oSMJHMa5w+CUq6p/pVrKeNNgA7pCqEcjSnHVoqJQFw==",
			"dev": true
		},
		"node_modules/@humanwhocodes/config-array": {
			"version": "0.9.5",
			"resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.9.5.tgz",
			"integrity": "sha512-ObyMyWxZiCu/yTisA7uzx81s40xR2fD5Cg/2Kq7G02ajkNubJf6BopgDTmDyc3U7sXpNKM8cYOw7s7Tyr+DnCw==",
			"dev": true,
			"dependencies": {
				"@humanwhocodes/object-schema": "^1.2.1",
				"debug": "^4.1.1",
				"minimatch": "^3.0.4"
			},
			"engines": {
				"node": ">=10.10.0"
			}
		},
		"node_modules/@humanwhocodes/object-schema": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-1.2.1.tgz",
			"integrity": "sha512-ZnQMnLV4e7hDlUvw8H+U8ASL02SS2Gn6+9Ac3wGGLIe7+je2AeAOxPY+izIPJDfFDb7eDjev0Us8MO1iFRN8hA==",
			"dev": true
		},
		"node_modules/@hutson/parse-repository-url": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/@hutson/parse-repository-url/-/parse-repository-url-3.0.2.tgz",
			"integrity": "sha512-H9XAx3hc0BQHY6l+IFSWHDySypcXsvsuLhgYLUGywmJ5pswRVQJUHpOsobnLYp2ZUaUlKiKDrgWWhosOwAEM8Q==",
			"dev": true,
			"engines": {
				"node": ">=6.9.0"
			}
		},
		"node_modules/@lerna/add": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/add/-/add-4.0.0.tgz",
			"integrity": "sha512-cpmAH1iS3k8JBxNvnMqrGTTjbY/ZAiKa1ChJzFevMYY3eeqbvhsBKnBcxjRXtdrJ6bd3dCQM+ZtK+0i682Fhng==",
			"dev": true,
			"dependencies": {
				"@lerna/bootstrap": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/filter-options": "4.0.0",
				"@lerna/npm-conf": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"dedent": "^0.7.0",
				"npm-package-arg": "^8.1.0",
				"p-map": "^4.0.0",
				"pacote": "^11.2.6",
				"semver": "^7.3.4"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/bootstrap": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/bootstrap/-/bootstrap-4.0.0.tgz",
			"integrity": "sha512-RkS7UbeM2vu+kJnHzxNRCLvoOP9yGNgkzRdy4UV2hNalD7EP41bLvRVOwRYQ7fhc2QcbhnKNdOBihYRL0LcKtw==",
			"dev": true,
			"dependencies": {
				"@lerna/command": "4.0.0",
				"@lerna/filter-options": "4.0.0",
				"@lerna/has-npm-version": "4.0.0",
				"@lerna/npm-install": "4.0.0",
				"@lerna/package-graph": "4.0.0",
				"@lerna/pulse-till-done": "4.0.0",
				"@lerna/rimraf-dir": "4.0.0",
				"@lerna/run-lifecycle": "4.0.0",
				"@lerna/run-topologically": "4.0.0",
				"@lerna/symlink-binary": "4.0.0",
				"@lerna/symlink-dependencies": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"dedent": "^0.7.0",
				"get-port": "^5.1.1",
				"multimatch": "^5.0.0",
				"npm-package-arg": "^8.1.0",
				"npmlog": "^4.1.2",
				"p-map": "^4.0.0",
				"p-map-series": "^2.1.0",
				"p-waterfall": "^2.1.1",
				"read-package-tree": "^5.3.1",
				"semver": "^7.3.4"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/changed": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/changed/-/changed-4.0.0.tgz",
			"integrity": "sha512-cD+KuPRp6qiPOD+BO6S6SN5cARspIaWSOqGBpGnYzLb4uWT8Vk4JzKyYtc8ym1DIwyoFXHosXt8+GDAgR8QrgQ==",
			"dev": true,
			"dependencies": {
				"@lerna/collect-updates": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/listable": "4.0.0",
				"@lerna/output": "4.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/check-working-tree": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/check-working-tree/-/check-working-tree-4.0.0.tgz",
			"integrity": "sha512-/++bxM43jYJCshBiKP5cRlCTwSJdRSxVmcDAXM+1oUewlZJVSVlnks5eO0uLxokVFvLhHlC5kHMc7gbVFPHv6Q==",
			"dev": true,
			"dependencies": {
				"@lerna/collect-uncommitted": "4.0.0",
				"@lerna/describe-ref": "4.0.0",
				"@lerna/validation-error": "4.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/child-process": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/child-process/-/child-process-4.0.0.tgz",
			"integrity": "sha512-XtCnmCT9eyVsUUHx6y/CTBYdV9g2Cr/VxyseTWBgfIur92/YKClfEtJTbOh94jRT62hlKLqSvux/UhxXVh613Q==",
			"dev": true,
			"dependencies": {
				"chalk": "^4.1.0",
				"execa": "^5.0.0",
				"strong-log-transformer": "^2.1.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/clean": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/clean/-/clean-4.0.0.tgz",
			"integrity": "sha512-uugG2iN9k45ITx2jtd8nEOoAtca8hNlDCUM0N3lFgU/b1mEQYAPRkqr1qs4FLRl/Y50ZJ41wUz1eazS+d/0osA==",
			"dev": true,
			"dependencies": {
				"@lerna/command": "4.0.0",
				"@lerna/filter-options": "4.0.0",
				"@lerna/prompt": "4.0.0",
				"@lerna/pulse-till-done": "4.0.0",
				"@lerna/rimraf-dir": "4.0.0",
				"p-map": "^4.0.0",
				"p-map-series": "^2.1.0",
				"p-waterfall": "^2.1.1"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/cli": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/cli/-/cli-4.0.0.tgz",
			"integrity": "sha512-Neaw3GzFrwZiRZv2g7g6NwFjs3er1vhraIniEs0jjVLPMNC4eata0na3GfE5yibkM/9d3gZdmihhZdZ3EBdvYA==",
			"dev": true,
			"dependencies": {
				"@lerna/global-options": "4.0.0",
				"dedent": "^0.7.0",
				"npmlog": "^4.1.2",
				"yargs": "^16.2.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/collect-uncommitted": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/collect-uncommitted/-/collect-uncommitted-4.0.0.tgz",
			"integrity": "sha512-ufSTfHZzbx69YNj7KXQ3o66V4RC76ffOjwLX0q/ab//61bObJ41n03SiQEhSlmpP+gmFbTJ3/7pTe04AHX9m/g==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"chalk": "^4.1.0",
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/collect-updates": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/collect-updates/-/collect-updates-4.0.0.tgz",
			"integrity": "sha512-bnNGpaj4zuxsEkyaCZLka9s7nMs58uZoxrRIPJ+nrmrZYp1V5rrd+7/NYTuunOhY2ug1sTBvTAxj3NZQ+JKnOw==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"@lerna/describe-ref": "4.0.0",
				"minimatch": "^3.0.4",
				"npmlog": "^4.1.2",
				"slash": "^3.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/command": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/command/-/command-4.0.0.tgz",
			"integrity": "sha512-LM9g3rt5FsPNFqIHUeRwWXLNHJ5NKzOwmVKZ8anSp4e1SPrv2HNc1V02/9QyDDZK/w+5POXH5lxZUI1CHaOK/A==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"@lerna/package-graph": "4.0.0",
				"@lerna/project": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"@lerna/write-log-file": "4.0.0",
				"clone-deep": "^4.0.1",
				"dedent": "^0.7.0",
				"execa": "^5.0.0",
				"is-ci": "^2.0.0",
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/conventional-commits": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/conventional-commits/-/conventional-commits-4.0.0.tgz",
			"integrity": "sha512-CSUQRjJHFrH8eBn7+wegZLV3OrNc0Y1FehYfYGhjLE2SIfpCL4bmfu/ViYuHh9YjwHaA+4SX6d3hR+xkeseKmw==",
			"dev": true,
			"dependencies": {
				"@lerna/validation-error": "4.0.0",
				"conventional-changelog-angular": "^5.0.12",
				"conventional-changelog-core": "^4.2.2",
				"conventional-recommended-bump": "^6.1.0",
				"fs-extra": "^9.1.0",
				"get-stream": "^6.0.0",
				"lodash.template": "^4.5.0",
				"npm-package-arg": "^8.1.0",
				"npmlog": "^4.1.2",
				"pify": "^5.0.0",
				"semver": "^7.3.4"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/create": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/create/-/create-4.0.0.tgz",
			"integrity": "sha512-mVOB1niKByEUfxlbKTM1UNECWAjwUdiioIbRQZEeEabtjCL69r9rscIsjlGyhGWCfsdAG5wfq4t47nlDXdLLag==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/npm-conf": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"dedent": "^0.7.0",
				"fs-extra": "^9.1.0",
				"globby": "^11.0.2",
				"init-package-json": "^2.0.2",
				"npm-package-arg": "^8.1.0",
				"p-reduce": "^2.1.0",
				"pacote": "^11.2.6",
				"pify": "^5.0.0",
				"semver": "^7.3.4",
				"slash": "^3.0.0",
				"validate-npm-package-license": "^3.0.4",
				"validate-npm-package-name": "^3.0.0",
				"whatwg-url": "^8.4.0",
				"yargs-parser": "20.2.4"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/create-symlink": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/create-symlink/-/create-symlink-4.0.0.tgz",
			"integrity": "sha512-I0phtKJJdafUiDwm7BBlEUOtogmu8+taxq6PtIrxZbllV9hWg59qkpuIsiFp+no7nfRVuaasNYHwNUhDAVQBig==",
			"dev": true,
			"dependencies": {
				"cmd-shim": "^4.1.0",
				"fs-extra": "^9.1.0",
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/describe-ref": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/describe-ref/-/describe-ref-4.0.0.tgz",
			"integrity": "sha512-eTU5+xC4C5Gcgz+Ey4Qiw9nV2B4JJbMulsYJMW8QjGcGh8zudib7Sduj6urgZXUYNyhYpRs+teci9M2J8u+UvQ==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/diff": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/diff/-/diff-4.0.0.tgz",
			"integrity": "sha512-jYPKprQVg41+MUMxx6cwtqsNm0Yxx9GDEwdiPLwcUTFx+/qKCEwifKNJ1oGIPBxyEHX2PFCOjkK39lHoj2qiag==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/exec": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/exec/-/exec-4.0.0.tgz",
			"integrity": "sha512-VGXtL/b/JfY84NB98VWZpIExfhLOzy0ozm/0XaS4a2SmkAJc5CeUfrhvHxxkxiTBLkU+iVQUyYEoAT0ulQ8PCw==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/filter-options": "4.0.0",
				"@lerna/profiler": "4.0.0",
				"@lerna/run-topologically": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"p-map": "^4.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/filter-options": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/filter-options/-/filter-options-4.0.0.tgz",
			"integrity": "sha512-vV2ANOeZhOqM0rzXnYcFFCJ/kBWy/3OA58irXih9AMTAlQLymWAK0akWybl++sUJ4HB9Hx12TOqaXbYS2NM5uw==",
			"dev": true,
			"dependencies": {
				"@lerna/collect-updates": "4.0.0",
				"@lerna/filter-packages": "4.0.0",
				"dedent": "^0.7.0",
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/filter-packages": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/filter-packages/-/filter-packages-4.0.0.tgz",
			"integrity": "sha512-+4AJIkK7iIiOaqCiVTYJxh/I9qikk4XjNQLhE3kixaqgMuHl1NQ99qXRR0OZqAWB9mh8Z1HA9bM5K1HZLBTOqA==",
			"dev": true,
			"dependencies": {
				"@lerna/validation-error": "4.0.0",
				"multimatch": "^5.0.0",
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/get-npm-exec-opts": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/get-npm-exec-opts/-/get-npm-exec-opts-4.0.0.tgz",
			"integrity": "sha512-yvmkerU31CTWS2c7DvmAWmZVeclPBqI7gPVr5VATUKNWJ/zmVcU4PqbYoLu92I9Qc4gY1TuUplMNdNuZTSL7IQ==",
			"dev": true,
			"dependencies": {
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/get-packed": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/get-packed/-/get-packed-4.0.0.tgz",
			"integrity": "sha512-rfWONRsEIGyPJTxFzC8ECb3ZbsDXJbfqWYyeeQQDrJRPnEJErlltRLPLgC2QWbxFgFPsoDLeQmFHJnf0iDfd8w==",
			"dev": true,
			"dependencies": {
				"fs-extra": "^9.1.0",
				"ssri": "^8.0.1",
				"tar": "^6.1.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/github-client": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/github-client/-/github-client-4.0.0.tgz",
			"integrity": "sha512-2jhsldZtTKXYUBnOm23Lb0Fx8G4qfSXF9y7UpyUgWUj+YZYd+cFxSuorwQIgk5P4XXrtVhsUesIsli+BYSThiw==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"@octokit/plugin-enterprise-rest": "^6.0.1",
				"@octokit/rest": "^18.1.0",
				"git-url-parse": "^11.4.4",
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/gitlab-client": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/gitlab-client/-/gitlab-client-4.0.0.tgz",
			"integrity": "sha512-OMUpGSkeDWFf7BxGHlkbb35T7YHqVFCwBPSIR6wRsszY8PAzCYahtH3IaJzEJyUg6vmZsNl0FSr3pdA2skhxqA==",
			"dev": true,
			"dependencies": {
				"node-fetch": "^2.6.1",
				"npmlog": "^4.1.2",
				"whatwg-url": "^8.4.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/global-options": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/global-options/-/global-options-4.0.0.tgz",
			"integrity": "sha512-TRMR8afAHxuYBHK7F++Ogop2a82xQjoGna1dvPOY6ltj/pEx59pdgcJfYcynYqMkFIk8bhLJJN9/ndIfX29FTQ==",
			"dev": true,
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/has-npm-version": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/has-npm-version/-/has-npm-version-4.0.0.tgz",
			"integrity": "sha512-LQ3U6XFH8ZmLCsvsgq1zNDqka0Xzjq5ibVN+igAI5ccRWNaUsE/OcmsyMr50xAtNQMYMzmpw5GVLAivT2/YzCg==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"semver": "^7.3.4"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/import": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/import/-/import-4.0.0.tgz",
			"integrity": "sha512-FaIhd+4aiBousKNqC7TX1Uhe97eNKf5/SC7c5WZANVWtC7aBWdmswwDt3usrzCNpj6/Wwr9EtEbYROzxKH8ffg==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/prompt": "4.0.0",
				"@lerna/pulse-till-done": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"dedent": "^0.7.0",
				"fs-extra": "^9.1.0",
				"p-map-series": "^2.1.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/info": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/info/-/info-4.0.0.tgz",
			"integrity": "sha512-8Uboa12kaCSZEn4XRfPz5KU9XXoexSPS4oeYGj76s2UQb1O1GdnEyfjyNWoUl1KlJ2i/8nxUskpXIftoFYH0/Q==",
			"dev": true,
			"dependencies": {
				"@lerna/command": "4.0.0",
				"@lerna/output": "4.0.0",
				"envinfo": "^7.7.4"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/init": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/init/-/init-4.0.0.tgz",
			"integrity": "sha512-wY6kygop0BCXupzWj5eLvTUqdR7vIAm0OgyV9WHpMYQGfs1V22jhztt8mtjCloD/O0nEe4tJhdG62XU5aYmPNQ==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"@lerna/command": "4.0.0",
				"fs-extra": "^9.1.0",
				"p-map": "^4.0.0",
				"write-json-file": "^4.3.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/link": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/link/-/link-4.0.0.tgz",
			"integrity": "sha512-KlvPi7XTAcVOByfaLlOeYOfkkDcd+bejpHMCd1KcArcFTwijOwXOVi24DYomIeHvy6HsX/IUquJ4PPUJIeB4+w==",
			"dev": true,
			"dependencies": {
				"@lerna/command": "4.0.0",
				"@lerna/package-graph": "4.0.0",
				"@lerna/symlink-dependencies": "4.0.0",
				"p-map": "^4.0.0",
				"slash": "^3.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/list": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/list/-/list-4.0.0.tgz",
			"integrity": "sha512-L2B5m3P+U4Bif5PultR4TI+KtW+SArwq1i75QZ78mRYxPc0U/piau1DbLOmwrdqr99wzM49t0Dlvl6twd7GHFg==",
			"dev": true,
			"dependencies": {
				"@lerna/command": "4.0.0",
				"@lerna/filter-options": "4.0.0",
				"@lerna/listable": "4.0.0",
				"@lerna/output": "4.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/listable": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/listable/-/listable-4.0.0.tgz",
			"integrity": "sha512-/rPOSDKsOHs5/PBLINZOkRIX1joOXUXEtyUs5DHLM8q6/RP668x/1lFhw6Dx7/U+L0+tbkpGtZ1Yt0LewCLgeQ==",
			"dev": true,
			"dependencies": {
				"@lerna/query-graph": "4.0.0",
				"chalk": "^4.1.0",
				"columnify": "^1.5.4"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/log-packed": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/log-packed/-/log-packed-4.0.0.tgz",
			"integrity": "sha512-+dpCiWbdzgMAtpajLToy9PO713IHoE6GV/aizXycAyA07QlqnkpaBNZ8DW84gHdM1j79TWockGJo9PybVhrrZQ==",
			"dev": true,
			"dependencies": {
				"byte-size": "^7.0.0",
				"columnify": "^1.5.4",
				"has-unicode": "^2.0.1",
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/npm-conf": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/npm-conf/-/npm-conf-4.0.0.tgz",
			"integrity": "sha512-uS7H02yQNq3oejgjxAxqq/jhwGEE0W0ntr8vM3EfpCW1F/wZruwQw+7bleJQ9vUBjmdXST//tk8mXzr5+JXCfw==",
			"dev": true,
			"dependencies": {
				"config-chain": "^1.1.12",
				"pify": "^5.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/npm-dist-tag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/npm-dist-tag/-/npm-dist-tag-4.0.0.tgz",
			"integrity": "sha512-F20sg28FMYTgXqEQihgoqSfwmq+Id3zT23CnOwD+XQMPSy9IzyLf1fFVH319vXIw6NF6Pgs4JZN2Qty6/CQXGw==",
			"dev": true,
			"dependencies": {
				"@lerna/otplease": "4.0.0",
				"npm-package-arg": "^8.1.0",
				"npm-registry-fetch": "^9.0.0",
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/npm-install": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/npm-install/-/npm-install-4.0.0.tgz",
			"integrity": "sha512-aKNxq2j3bCH3eXl3Fmu4D54s/YLL9WSwV8W7X2O25r98wzrO38AUN6AB9EtmAx+LV/SP15et7Yueg9vSaanRWg==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"@lerna/get-npm-exec-opts": "4.0.0",
				"fs-extra": "^9.1.0",
				"npm-package-arg": "^8.1.0",
				"npmlog": "^4.1.2",
				"signal-exit": "^3.0.3",
				"write-pkg": "^4.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/npm-publish": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/npm-publish/-/npm-publish-4.0.0.tgz",
			"integrity": "sha512-vQb7yAPRo5G5r77DRjHITc9piR9gvEKWrmfCH7wkfBnGWEqu7n8/4bFQ7lhnkujvc8RXOsYpvbMQkNfkYibD/w==",
			"dev": true,
			"dependencies": {
				"@lerna/otplease": "4.0.0",
				"@lerna/run-lifecycle": "4.0.0",
				"fs-extra": "^9.1.0",
				"libnpmpublish": "^4.0.0",
				"npm-package-arg": "^8.1.0",
				"npmlog": "^4.1.2",
				"pify": "^5.0.0",
				"read-package-json": "^3.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/npm-run-script": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/npm-run-script/-/npm-run-script-4.0.0.tgz",
			"integrity": "sha512-Jmyh9/IwXJjOXqKfIgtxi0bxi1pUeKe5bD3S81tkcy+kyng/GNj9WSqD5ZggoNP2NP//s4CLDAtUYLdP7CU9rA==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"@lerna/get-npm-exec-opts": "4.0.0",
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/otplease": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/otplease/-/otplease-4.0.0.tgz",
			"integrity": "sha512-Sgzbqdk1GH4psNiT6hk+BhjOfIr/5KhGBk86CEfHNJTk9BK4aZYyJD4lpDbDdMjIV4g03G7pYoqHzH765T4fxw==",
			"dev": true,
			"dependencies": {
				"@lerna/prompt": "4.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/output": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/output/-/output-4.0.0.tgz",
			"integrity": "sha512-Un1sHtO1AD7buDQrpnaYTi2EG6sLF+KOPEAMxeUYG5qG3khTs2Zgzq5WE3dt2N/bKh7naESt20JjIW6tBELP0w==",
			"dev": true,
			"dependencies": {
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/pack-directory": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/pack-directory/-/pack-directory-4.0.0.tgz",
			"integrity": "sha512-NJrmZNmBHS+5aM+T8N6FVbaKFScVqKlQFJNY2k7nsJ/uklNKsLLl6VhTQBPwMTbf6Tf7l6bcKzpy7aePuq9UiQ==",
			"dev": true,
			"dependencies": {
				"@lerna/get-packed": "4.0.0",
				"@lerna/package": "4.0.0",
				"@lerna/run-lifecycle": "4.0.0",
				"npm-packlist": "^2.1.4",
				"npmlog": "^4.1.2",
				"tar": "^6.1.0",
				"temp-write": "^4.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/package": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/package/-/package-4.0.0.tgz",
			"integrity": "sha512-l0M/izok6FlyyitxiQKr+gZLVFnvxRQdNhzmQ6nRnN9dvBJWn+IxxpM+cLqGACatTnyo9LDzNTOj2Db3+s0s8Q==",
			"dev": true,
			"dependencies": {
				"load-json-file": "^6.2.0",
				"npm-package-arg": "^8.1.0",
				"write-pkg": "^4.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/package-graph": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/package-graph/-/package-graph-4.0.0.tgz",
			"integrity": "sha512-QED2ZCTkfXMKFoTGoccwUzjHtZMSf3UKX14A4/kYyBms9xfFsesCZ6SLI5YeySEgcul8iuIWfQFZqRw+Qrjraw==",
			"dev": true,
			"dependencies": {
				"@lerna/prerelease-id-from-version": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"npm-package-arg": "^8.1.0",
				"npmlog": "^4.1.2",
				"semver": "^7.3.4"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/prerelease-id-from-version": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/prerelease-id-from-version/-/prerelease-id-from-version-4.0.0.tgz",
			"integrity": "sha512-GQqguzETdsYRxOSmdFZ6zDBXDErIETWOqomLERRY54f4p+tk4aJjoVdd9xKwehC9TBfIFvlRbL1V9uQGHh1opg==",
			"dev": true,
			"dependencies": {
				"semver": "^7.3.4"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/profiler": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/profiler/-/profiler-4.0.0.tgz",
			"integrity": "sha512-/BaEbqnVh1LgW/+qz8wCuI+obzi5/vRE8nlhjPzdEzdmWmZXuCKyWSEzAyHOJWw1ntwMiww5dZHhFQABuoFz9Q==",
			"dev": true,
			"dependencies": {
				"fs-extra": "^9.1.0",
				"npmlog": "^4.1.2",
				"upath": "^2.0.1"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/project": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/project/-/project-4.0.0.tgz",
			"integrity": "sha512-o0MlVbDkD5qRPkFKlBZsXZjoNTWPyuL58564nSfZJ6JYNmgAptnWPB2dQlAc7HWRZkmnC2fCkEdoU+jioPavbg==",
			"dev": true,
			"dependencies": {
				"@lerna/package": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"cosmiconfig": "^7.0.0",
				"dedent": "^0.7.0",
				"dot-prop": "^6.0.1",
				"glob-parent": "^5.1.1",
				"globby": "^11.0.2",
				"load-json-file": "^6.2.0",
				"npmlog": "^4.1.2",
				"p-map": "^4.0.0",
				"resolve-from": "^5.0.0",
				"write-json-file": "^4.3.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/project/node_modules/glob-parent": {
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
		"node_modules/@lerna/project/node_modules/resolve-from": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
			"integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/@lerna/prompt": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/prompt/-/prompt-4.0.0.tgz",
			"integrity": "sha512-4Ig46oCH1TH5M7YyTt53fT6TuaKMgqUUaqdgxvp6HP6jtdak6+amcsqB8YGz2eQnw/sdxunx84DfI9XpoLj4bQ==",
			"dev": true,
			"dependencies": {
				"inquirer": "^7.3.3",
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/publish": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/publish/-/publish-4.0.0.tgz",
			"integrity": "sha512-K8jpqjHrChH22qtkytA5GRKIVFEtqBF6JWj1I8dWZtHs4Jywn8yB1jQ3BAMLhqmDJjWJtRck0KXhQQKzDK2UPg==",
			"dev": true,
			"dependencies": {
				"@lerna/check-working-tree": "4.0.0",
				"@lerna/child-process": "4.0.0",
				"@lerna/collect-updates": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/describe-ref": "4.0.0",
				"@lerna/log-packed": "4.0.0",
				"@lerna/npm-conf": "4.0.0",
				"@lerna/npm-dist-tag": "4.0.0",
				"@lerna/npm-publish": "4.0.0",
				"@lerna/otplease": "4.0.0",
				"@lerna/output": "4.0.0",
				"@lerna/pack-directory": "4.0.0",
				"@lerna/prerelease-id-from-version": "4.0.0",
				"@lerna/prompt": "4.0.0",
				"@lerna/pulse-till-done": "4.0.0",
				"@lerna/run-lifecycle": "4.0.0",
				"@lerna/run-topologically": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"@lerna/version": "4.0.0",
				"fs-extra": "^9.1.0",
				"libnpmaccess": "^4.0.1",
				"npm-package-arg": "^8.1.0",
				"npm-registry-fetch": "^9.0.0",
				"npmlog": "^4.1.2",
				"p-map": "^4.0.0",
				"p-pipe": "^3.1.0",
				"pacote": "^11.2.6",
				"semver": "^7.3.4"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/pulse-till-done": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/pulse-till-done/-/pulse-till-done-4.0.0.tgz",
			"integrity": "sha512-Frb4F7QGckaybRhbF7aosLsJ5e9WuH7h0KUkjlzSByVycxY91UZgaEIVjS2oN9wQLrheLMHl6SiFY0/Pvo0Cxg==",
			"dev": true,
			"dependencies": {
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/query-graph": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/query-graph/-/query-graph-4.0.0.tgz",
			"integrity": "sha512-YlP6yI3tM4WbBmL9GCmNDoeQyzcyg1e4W96y/PKMZa5GbyUvkS2+Jc2kwPD+5KcXou3wQZxSPzR3Te5OenaDdg==",
			"dev": true,
			"dependencies": {
				"@lerna/package-graph": "4.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/resolve-symlink": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/resolve-symlink/-/resolve-symlink-4.0.0.tgz",
			"integrity": "sha512-RtX8VEUzqT+uLSCohx8zgmjc6zjyRlh6i/helxtZTMmc4+6O4FS9q5LJas2uGO2wKvBlhcD6siibGt7dIC3xZA==",
			"dev": true,
			"dependencies": {
				"fs-extra": "^9.1.0",
				"npmlog": "^4.1.2",
				"read-cmd-shim": "^2.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/rimraf-dir": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/rimraf-dir/-/rimraf-dir-4.0.0.tgz",
			"integrity": "sha512-QNH9ABWk9mcMJh2/muD9iYWBk1oQd40y6oH+f3wwmVGKYU5YJD//+zMiBI13jxZRtwBx0vmBZzkBkK1dR11cBg==",
			"dev": true,
			"dependencies": {
				"@lerna/child-process": "4.0.0",
				"npmlog": "^4.1.2",
				"path-exists": "^4.0.0",
				"rimraf": "^3.0.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/run": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/run/-/run-4.0.0.tgz",
			"integrity": "sha512-9giulCOzlMPzcZS/6Eov6pxE9gNTyaXk0Man+iCIdGJNMrCnW7Dme0Z229WWP/UoxDKg71F2tMsVVGDiRd8fFQ==",
			"dev": true,
			"dependencies": {
				"@lerna/command": "4.0.0",
				"@lerna/filter-options": "4.0.0",
				"@lerna/npm-run-script": "4.0.0",
				"@lerna/output": "4.0.0",
				"@lerna/profiler": "4.0.0",
				"@lerna/run-topologically": "4.0.0",
				"@lerna/timer": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"p-map": "^4.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/run-lifecycle": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/run-lifecycle/-/run-lifecycle-4.0.0.tgz",
			"integrity": "sha512-IwxxsajjCQQEJAeAaxF8QdEixfI7eLKNm4GHhXHrgBu185JcwScFZrj9Bs+PFKxwb+gNLR4iI5rpUdY8Y0UdGQ==",
			"dev": true,
			"dependencies": {
				"@lerna/npm-conf": "4.0.0",
				"npm-lifecycle": "^3.1.5",
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/run-topologically": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/run-topologically/-/run-topologically-4.0.0.tgz",
			"integrity": "sha512-EVZw9hGwo+5yp+VL94+NXRYisqgAlj0jWKWtAIynDCpghRxCE5GMO3xrQLmQgqkpUl9ZxQFpICgYv5DW4DksQA==",
			"dev": true,
			"dependencies": {
				"@lerna/query-graph": "4.0.0",
				"p-queue": "^6.6.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/symlink-binary": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/symlink-binary/-/symlink-binary-4.0.0.tgz",
			"integrity": "sha512-zualodWC4q1QQc1pkz969hcFeWXOsVYZC5AWVtAPTDfLl+TwM7eG/O6oP+Rr3fFowspxo6b1TQ6sYfDV6HXNWA==",
			"dev": true,
			"dependencies": {
				"@lerna/create-symlink": "4.0.0",
				"@lerna/package": "4.0.0",
				"fs-extra": "^9.1.0",
				"p-map": "^4.0.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/symlink-dependencies": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/symlink-dependencies/-/symlink-dependencies-4.0.0.tgz",
			"integrity": "sha512-BABo0MjeUHNAe2FNGty1eantWp8u83BHSeIMPDxNq0MuW2K3CiQRaeWT3EGPAzXpGt0+hVzBrA6+OT0GPn7Yuw==",
			"dev": true,
			"dependencies": {
				"@lerna/create-symlink": "4.0.0",
				"@lerna/resolve-symlink": "4.0.0",
				"@lerna/symlink-binary": "4.0.0",
				"fs-extra": "^9.1.0",
				"p-map": "^4.0.0",
				"p-map-series": "^2.1.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/timer": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/timer/-/timer-4.0.0.tgz",
			"integrity": "sha512-WFsnlaE7SdOvjuyd05oKt8Leg3ENHICnvX3uYKKdByA+S3g+TCz38JsNs7OUZVt+ba63nC2nbXDlUnuT2Xbsfg==",
			"dev": true,
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/validation-error": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/validation-error/-/validation-error-4.0.0.tgz",
			"integrity": "sha512-1rBOM5/koiVWlRi3V6dB863E1YzJS8v41UtsHgMr6gB2ncJ2LsQtMKlJpi3voqcgh41H8UsPXR58RrrpPpufyw==",
			"dev": true,
			"dependencies": {
				"npmlog": "^4.1.2"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/version": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/version/-/version-4.0.0.tgz",
			"integrity": "sha512-otUgiqs5W9zGWJZSCCMRV/2Zm2A9q9JwSDS7s/tlKq4mWCYriWo7+wsHEA/nPTMDyYyBO5oyZDj+3X50KDUzeA==",
			"dev": true,
			"dependencies": {
				"@lerna/check-working-tree": "4.0.0",
				"@lerna/child-process": "4.0.0",
				"@lerna/collect-updates": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/conventional-commits": "4.0.0",
				"@lerna/github-client": "4.0.0",
				"@lerna/gitlab-client": "4.0.0",
				"@lerna/output": "4.0.0",
				"@lerna/prerelease-id-from-version": "4.0.0",
				"@lerna/prompt": "4.0.0",
				"@lerna/run-lifecycle": "4.0.0",
				"@lerna/run-topologically": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"chalk": "^4.1.0",
				"dedent": "^0.7.0",
				"load-json-file": "^6.2.0",
				"minimatch": "^3.0.4",
				"npmlog": "^4.1.2",
				"p-map": "^4.0.0",
				"p-pipe": "^3.1.0",
				"p-reduce": "^2.1.0",
				"p-waterfall": "^2.1.1",
				"semver": "^7.3.4",
				"slash": "^3.0.0",
				"temp-write": "^4.0.0",
				"write-json-file": "^4.3.0"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@lerna/write-log-file": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/write-log-file/-/write-log-file-4.0.0.tgz",
			"integrity": "sha512-XRG5BloiArpXRakcnPHmEHJp+4AtnhRtpDIHSghmXD5EichI1uD73J7FgPp30mm2pDRq3FdqB0NbwSEsJ9xFQg==",
			"dev": true,
			"dependencies": {
				"npmlog": "^4.1.2",
				"write-file-atomic": "^3.0.3"
			},
			"engines": {
				"node": ">= 10.18.0"
			}
		},
		"node_modules/@nodelib/fs.scandir": {
			"version": "2.1.5",
			"resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
			"integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
			"dev": true,
			"dependencies": {
				"@nodelib/fs.stat": "2.0.5",
				"run-parallel": "^1.1.9"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/@nodelib/fs.stat": {
			"version": "2.0.5",
			"resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
			"integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
			"dev": true,
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/@nodelib/fs.walk": {
			"version": "1.2.8",
			"resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
			"integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
			"dev": true,
			"dependencies": {
				"@nodelib/fs.scandir": "2.1.5",
				"fastq": "^1.6.0"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/@npmcli/ci-detect": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/@npmcli/ci-detect/-/ci-detect-1.4.0.tgz",
			"integrity": "sha512-3BGrt6FLjqM6br5AhWRKTr3u5GIVkjRYeAFrMp3HjnfICrg4xOrVRwFavKT6tsp++bq5dluL5t8ME/Nha/6c1Q==",
			"dev": true
		},
		"node_modules/@npmcli/fs": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/@npmcli/fs/-/fs-1.1.1.tgz",
			"integrity": "sha512-8KG5RD0GVP4ydEzRn/I4BNDuxDtqVbOdm8675T49OIG/NGhaK0pjPX7ZcDlvKYbA+ulvVK3ztfcF4uBdOxuJbQ==",
			"dev": true,
			"dependencies": {
				"@gar/promisify": "^1.0.1",
				"semver": "^7.3.5"
			}
		},
		"node_modules/@npmcli/git": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/@npmcli/git/-/git-2.1.0.tgz",
			"integrity": "sha512-/hBFX/QG1b+N7PZBFs0bi+evgRZcK9nWBxQKZkGoXUT5hJSwl5c4d7y8/hm+NQZRPhQ67RzFaj5UM9YeyKoryw==",
			"dev": true,
			"dependencies": {
				"@npmcli/promise-spawn": "^1.3.2",
				"lru-cache": "^6.0.0",
				"mkdirp": "^1.0.4",
				"npm-pick-manifest": "^6.1.1",
				"promise-inflight": "^1.0.1",
				"promise-retry": "^2.0.1",
				"semver": "^7.3.5",
				"which": "^2.0.2"
			}
		},
		"node_modules/@npmcli/installed-package-contents": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/@npmcli/installed-package-contents/-/installed-package-contents-1.0.7.tgz",
			"integrity": "sha512-9rufe0wnJusCQoLpV9ZPKIVP55itrM5BxOXs10DmdbRfgWtHy1LDyskbwRnBghuB0PrF7pNPOqREVtpz4HqzKw==",
			"dev": true,
			"dependencies": {
				"npm-bundled": "^1.1.1",
				"npm-normalize-package-bin": "^1.0.1"
			},
			"bin": {
				"installed-package-contents": "index.js"
			},
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/@npmcli/move-file": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/@npmcli/move-file/-/move-file-1.1.2.tgz",
			"integrity": "sha512-1SUf/Cg2GzGDyaf15aR9St9TWlb+XvbZXWpDx8YKs7MLzMH/BCeopv+y9vzrzgkfykCGuWOlSu3mZhj2+FQcrg==",
			"dev": true,
			"dependencies": {
				"mkdirp": "^1.0.4",
				"rimraf": "^3.0.2"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/@npmcli/node-gyp": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/@npmcli/node-gyp/-/node-gyp-1.0.3.tgz",
			"integrity": "sha512-fnkhw+fmX65kiLqk6E3BFLXNC26rUhK90zVwe2yncPliVT/Qos3xjhTLE59Df8KnPlcwIERXKVlU1bXoUQ+liA==",
			"dev": true
		},
		"node_modules/@npmcli/promise-spawn": {
			"version": "1.3.2",
			"resolved": "https://registry.npmjs.org/@npmcli/promise-spawn/-/promise-spawn-1.3.2.tgz",
			"integrity": "sha512-QyAGYo/Fbj4MXeGdJcFzZ+FkDkomfRBrPM+9QYJSg+PxgAUL+LU3FneQk37rKR2/zjqkCV1BLHccX98wRXG3Sg==",
			"dev": true,
			"dependencies": {
				"infer-owner": "^1.0.4"
			}
		},
		"node_modules/@npmcli/run-script": {
			"version": "1.8.6",
			"resolved": "https://registry.npmjs.org/@npmcli/run-script/-/run-script-1.8.6.tgz",
			"integrity": "sha512-e42bVZnC6VluBZBAFEr3YrdqSspG3bgilyg4nSLBJ7TRGNCzxHa92XAHxQBLYg0BmgwO4b2mf3h/l5EkEWRn3g==",
			"dev": true,
			"dependencies": {
				"@npmcli/node-gyp": "^1.0.2",
				"@npmcli/promise-spawn": "^1.3.2",
				"node-gyp": "^7.1.0",
				"read-package-json-fast": "^2.0.1"
			}
		},
		"node_modules/@npmcli/run-script/node_modules/glob": {
			"version": "7.2.3",
			"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
			"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
			"dev": true,
			"dependencies": {
				"fs.realpath": "^1.0.0",
				"inflight": "^1.0.4",
				"inherits": "2",
				"minimatch": "^3.1.1",
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
		"node_modules/@npmcli/run-script/node_modules/node-gyp": {
			"version": "7.1.2",
			"resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-7.1.2.tgz",
			"integrity": "sha512-CbpcIo7C3eMu3dL1c3d0xw449fHIGALIJsRP4DDPHpyiW8vcriNY7ubh9TE4zEKfSxscY7PjeFnshE7h75ynjQ==",
			"dev": true,
			"dependencies": {
				"env-paths": "^2.2.0",
				"glob": "^7.1.4",
				"graceful-fs": "^4.2.3",
				"nopt": "^5.0.0",
				"npmlog": "^4.1.2",
				"request": "^2.88.2",
				"rimraf": "^3.0.2",
				"semver": "^7.3.2",
				"tar": "^6.0.2",
				"which": "^2.0.2"
			},
			"bin": {
				"node-gyp": "bin/node-gyp.js"
			},
			"engines": {
				"node": ">= 10.12.0"
			}
		},
		"node_modules/@npmcli/run-script/node_modules/nopt": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/nopt/-/nopt-5.0.0.tgz",
			"integrity": "sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==",
			"dev": true,
			"dependencies": {
				"abbrev": "1"
			},
			"bin": {
				"nopt": "bin/nopt.js"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/@octokit/auth-token": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@octokit/auth-token/-/auth-token-2.5.0.tgz",
			"integrity": "sha512-r5FVUJCOLl19AxiuZD2VRZ/ORjp/4IN98Of6YJoJOkY75CIBuYfmiNHGrDwXr+aLGG55igl9QrxX3hbiXlLb+g==",
			"dev": true,
			"dependencies": {
				"@octokit/types": "^6.0.3"
			}
		},
		"node_modules/@octokit/core": {
			"version": "3.6.0",
			"resolved": "https://registry.npmjs.org/@octokit/core/-/core-3.6.0.tgz",
			"integrity": "sha512-7RKRKuA4xTjMhY+eG3jthb3hlZCsOwg3rztWh75Xc+ShDWOfDDATWbeZpAHBNRpm4Tv9WgBMOy1zEJYXG6NJ7Q==",
			"dev": true,
			"dependencies": {
				"@octokit/auth-token": "^2.4.4",
				"@octokit/graphql": "^4.5.8",
				"@octokit/request": "^5.6.3",
				"@octokit/request-error": "^2.0.5",
				"@octokit/types": "^6.0.3",
				"before-after-hook": "^2.2.0",
				"universal-user-agent": "^6.0.0"
			}
		},
		"node_modules/@octokit/endpoint": {
			"version": "6.0.12",
			"resolved": "https://registry.npmjs.org/@octokit/endpoint/-/endpoint-6.0.12.tgz",
			"integrity": "sha512-lF3puPwkQWGfkMClXb4k/eUT/nZKQfxinRWJrdZaJO85Dqwo/G0yOC434Jr2ojwafWJMYqFGFa5ms4jJUgujdA==",
			"dev": true,
			"dependencies": {
				"@octokit/types": "^6.0.3",
				"is-plain-object": "^5.0.0",
				"universal-user-agent": "^6.0.0"
			}
		},
		"node_modules/@octokit/graphql": {
			"version": "4.8.0",
			"resolved": "https://registry.npmjs.org/@octokit/graphql/-/graphql-4.8.0.tgz",
			"integrity": "sha512-0gv+qLSBLKF0z8TKaSKTsS39scVKF9dbMxJpj3U0vC7wjNWFuIpL/z76Qe2fiuCbDRcJSavkXsVtMS6/dtQQsg==",
			"dev": true,
			"dependencies": {
				"@octokit/request": "^5.6.0",
				"@octokit/types": "^6.0.3",
				"universal-user-agent": "^6.0.0"
			}
		},
		"node_modules/@octokit/openapi-types": {
			"version": "11.2.0",
			"resolved": "https://registry.npmjs.org/@octokit/openapi-types/-/openapi-types-11.2.0.tgz",
			"integrity": "sha512-PBsVO+15KSlGmiI8QAzaqvsNlZlrDlyAJYcrXBCvVUxCp7VnXjkwPoFHgjEJXx3WF9BAwkA6nfCUA7i9sODzKA==",
			"dev": true
		},
		"node_modules/@octokit/plugin-enterprise-rest": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/@octokit/plugin-enterprise-rest/-/plugin-enterprise-rest-6.0.1.tgz",
			"integrity": "sha512-93uGjlhUD+iNg1iWhUENAtJata6w5nE+V4urXOAlIXdco6xNZtUSfYY8dzp3Udy74aqO/B5UZL80x/YMa5PKRw==",
			"dev": true
		},
		"node_modules/@octokit/plugin-paginate-rest": {
			"version": "2.17.0",
			"resolved": "https://registry.npmjs.org/@octokit/plugin-paginate-rest/-/plugin-paginate-rest-2.17.0.tgz",
			"integrity": "sha512-tzMbrbnam2Mt4AhuyCHvpRkS0oZ5MvwwcQPYGtMv4tUa5kkzG58SVB0fcsLulOZQeRnOgdkZWkRUiyBlh0Bkyw==",
			"dev": true,
			"dependencies": {
				"@octokit/types": "^6.34.0"
			},
			"peerDependencies": {
				"@octokit/core": ">=2"
			}
		},
		"node_modules/@octokit/plugin-request-log": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/@octokit/plugin-request-log/-/plugin-request-log-1.0.4.tgz",
			"integrity": "sha512-mLUsMkgP7K/cnFEw07kWqXGF5LKrOkD+lhCrKvPHXWDywAwuDUeDwWBpc69XK3pNX0uKiVt8g5z96PJ6z9xCFA==",
			"dev": true,
			"peerDependencies": {
				"@octokit/core": ">=3"
			}
		},
		"node_modules/@octokit/plugin-rest-endpoint-methods": {
			"version": "5.13.0",
			"resolved": "https://registry.npmjs.org/@octokit/plugin-rest-endpoint-methods/-/plugin-rest-endpoint-methods-5.13.0.tgz",
			"integrity": "sha512-uJjMTkN1KaOIgNtUPMtIXDOjx6dGYysdIFhgA52x4xSadQCz3b/zJexvITDVpANnfKPW/+E0xkOvLntqMYpviA==",
			"dev": true,
			"dependencies": {
				"@octokit/types": "^6.34.0",
				"deprecation": "^2.3.1"
			},
			"peerDependencies": {
				"@octokit/core": ">=3"
			}
		},
		"node_modules/@octokit/request": {
			"version": "5.6.3",
			"resolved": "https://registry.npmjs.org/@octokit/request/-/request-5.6.3.tgz",
			"integrity": "sha512-bFJl0I1KVc9jYTe9tdGGpAMPy32dLBXXo1dS/YwSCTL/2nd9XeHsY616RE3HPXDVk+a+dBuzyz5YdlXwcDTr2A==",
			"dev": true,
			"dependencies": {
				"@octokit/endpoint": "^6.0.1",
				"@octokit/request-error": "^2.1.0",
				"@octokit/types": "^6.16.1",
				"is-plain-object": "^5.0.0",
				"node-fetch": "^2.6.7",
				"universal-user-agent": "^6.0.0"
			}
		},
		"node_modules/@octokit/request-error": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/@octokit/request-error/-/request-error-2.1.0.tgz",
			"integrity": "sha512-1VIvgXxs9WHSjicsRwq8PlR2LR2x6DwsJAaFgzdi0JfJoGSO8mYI/cHJQ+9FbN21aa+DrgNLnwObmyeSC8Rmpg==",
			"dev": true,
			"dependencies": {
				"@octokit/types": "^6.0.3",
				"deprecation": "^2.0.0",
				"once": "^1.4.0"
			}
		},
		"node_modules/@octokit/rest": {
			"version": "18.12.0",
			"resolved": "https://registry.npmjs.org/@octokit/rest/-/rest-18.12.0.tgz",
			"integrity": "sha512-gDPiOHlyGavxr72y0guQEhLsemgVjwRePayJ+FcKc2SJqKUbxbkvf5kAZEWA/MKvsfYlQAMVzNJE3ezQcxMJ2Q==",
			"dev": true,
			"dependencies": {
				"@octokit/core": "^3.5.1",
				"@octokit/plugin-paginate-rest": "^2.16.8",
				"@octokit/plugin-request-log": "^1.0.4",
				"@octokit/plugin-rest-endpoint-methods": "^5.12.0"
			}
		},
		"node_modules/@octokit/types": {
			"version": "6.34.0",
			"resolved": "https://registry.npmjs.org/@octokit/types/-/types-6.34.0.tgz",
			"integrity": "sha512-s1zLBjWhdEI2zwaoSgyOFoKSl109CUcVBCc7biPJ3aAf6LGLU6szDvi31JPU7bxfla2lqfhjbbg/5DdFNxOwHw==",
			"dev": true,
			"dependencies": {
				"@octokit/openapi-types": "^11.2.0"
			}
		},
		"node_modules/@sinonjs/commons": {
			"version": "1.8.3",
			"resolved": "https://registry.npmjs.org/@sinonjs/commons/-/commons-1.8.3.tgz",
			"integrity": "sha512-xkNcLAn/wZaX14RPlwizcKicDk9G3F8m2nU3L7Ukm5zBgTwiT0wsoFAHx9Jq56fJA1z/7uKGtCRu16sOUCLIHQ==",
			"dependencies": {
				"type-detect": "4.0.8"
			}
		},
		"node_modules/@sinonjs/fake-timers": {
			"version": "9.1.2",
			"resolved": "https://registry.npmjs.org/@sinonjs/fake-timers/-/fake-timers-9.1.2.tgz",
			"integrity": "sha512-BPS4ynJW/o92PUR4wgriz2Ud5gpST5vz6GQfMixEDK0Z8ZCUv2M7SkBLykH56T++Xs+8ln9zTGbOvNGIe02/jw==",
			"dependencies": {
				"@sinonjs/commons": "^1.7.0"
			}
		},
		"node_modules/@sinonjs/samsam": {
			"version": "6.1.1",
			"resolved": "https://registry.npmjs.org/@sinonjs/samsam/-/samsam-6.1.1.tgz",
			"integrity": "sha512-cZ7rKJTLiE7u7Wi/v9Hc2fs3Ucc3jrWeMgPHbbTCeVAB2S0wOBbYlkJVeNSL04i7fdhT8wIbDq1zhC/PXTD2SA==",
			"dependencies": {
				"@sinonjs/commons": "^1.6.0",
				"lodash.get": "^4.4.2",
				"type-detect": "^4.0.8"
			}
		},
		"node_modules/@sinonjs/text-encoding": {
			"version": "0.7.1",
			"resolved": "https://registry.npmjs.org/@sinonjs/text-encoding/-/text-encoding-0.7.1.tgz",
			"integrity": "sha512-+iTbntw2IZPb/anVDbypzfQa+ay64MW0Zo8aJ8gZPWMMK6/OubMVb6lUPMagqjOPnmtauXnFCACVl3O7ogjeqQ=="
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
		"node_modules/@types/minimatch": {
			"version": "3.0.5",
			"resolved": "https://registry.npmjs.org/@types/minimatch/-/minimatch-3.0.5.tgz",
			"integrity": "sha512-Klz949h02Gz2uZCMGwDUSDS1YBlTdDDgbWHi+81l29tQALUtvz4rAYi5uoVhE5Lagoq6DeqAUlbrHvW/mXDgdQ==",
			"dev": true
		},
		"node_modules/@types/minimist": {
			"version": "1.2.2",
			"resolved": "https://registry.npmjs.org/@types/minimist/-/minimist-1.2.2.tgz",
			"integrity": "sha512-jhuKLIRrhvCPLqwPcx6INqmKeiA5EWrsCOPhrlFSrbrmU4ZMPjj5Ul/oLCMDO98XRUIwVm78xICz4EPCektzeQ==",
			"dev": true
		},
		"node_modules/@types/normalize-package-data": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@types/normalize-package-data/-/normalize-package-data-2.4.1.tgz",
			"integrity": "sha512-Gj7cI7z+98M282Tqmp2K5EIsoouUEzbBJhQQzDE3jSIRk6r9gsz0oUokqIUR4u1R3dMHo0pDHM7sNOHyhulypw==",
			"dev": true
		},
		"node_modules/@types/parse-json": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz",
			"integrity": "sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA==",
			"dev": true
		},
		"node_modules/@ungap/promise-all-settled": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/@ungap/promise-all-settled/-/promise-all-settled-1.1.2.tgz",
			"integrity": "sha512-sL/cEvJWAnClXw0wHk85/2L0G6Sj8UB0Ctc1TEMbKSsmpRosqhwj9gWgFRZSrBr2f9tiXISwNhCPmlfqUqyb9Q==",
			"dev": true
		},
		"node_modules/abbrev": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
			"integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
			"dev": true
		},
		"node_modules/acorn": {
			"version": "8.7.1",
			"resolved": "https://registry.npmjs.org/acorn/-/acorn-8.7.1.tgz",
			"integrity": "sha512-Xx54uLJQZ19lKygFXOWsscKUbsBZW0CPykPhVQdhIeIwrbPmJzqeASDInc8nKBnp/JT6igTs82qPXz069H8I/A==",
			"dev": true,
			"bin": {
				"acorn": "bin/acorn"
			},
			"engines": {
				"node": ">=0.4.0"
			}
		},
		"node_modules/acorn-jsx": {
			"version": "5.3.2",
			"resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
			"integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
			"dev": true,
			"peerDependencies": {
				"acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
			}
		},
		"node_modules/add-stream": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/add-stream/-/add-stream-1.0.0.tgz",
			"integrity": "sha512-qQLMr+8o0WC4FZGQTcJiKBVC59JylcPSrTtk6usvmIDFUOCKegapy1VHQwRbFMOFyb/inzUVqHs+eMYKDM1YeQ==",
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
		"node_modules/agentkeepalive": {
			"version": "4.2.1",
			"resolved": "https://registry.npmjs.org/agentkeepalive/-/agentkeepalive-4.2.1.tgz",
			"integrity": "sha512-Zn4cw2NEqd+9fiSVWMscnjyQ1a8Yfoc5oBajLeo5w+YBHgDUcEBY2hS4YpTz6iN5f/2zQiktcuM6tS8x1p9dpA==",
			"dev": true,
			"dependencies": {
				"debug": "^4.1.0",
				"depd": "^1.1.2",
				"humanize-ms": "^1.2.1"
			},
			"engines": {
				"node": ">= 8.0.0"
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
			"version": "4.3.2",
			"resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
			"integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
			"dev": true,
			"dependencies": {
				"type-fest": "^0.21.3"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/ansi-escapes/node_modules/type-fest": {
			"version": "0.21.3",
			"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
			"integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==",
			"dev": true,
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/ansi-regex": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
			"integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/ansi-styles": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
			"integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
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
		"node_modules/aproba": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/aproba/-/aproba-2.0.0.tgz",
			"integrity": "sha512-lYe4Gx7QT+MKGbDsA+Z+he/Wtef0BiwDOlK/XkBrdfsh9J/jPPXbX0tE9x9cl27Tmu5gg3QUbUrQYa/y+KOHPQ==",
			"dev": true
		},
		"node_modules/are-we-there-yet": {
			"version": "1.1.7",
			"resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.1.7.tgz",
			"integrity": "sha512-nxwy40TuMiUGqMyRHgCSWZ9FM4VAoRP4xUYSTv5ImRog+h9yISPbVH7H8fASCIzYn9wlEv4zvFL7uKDMCFQm3g==",
			"dev": true,
			"dependencies": {
				"delegates": "^1.0.0",
				"readable-stream": "^2.0.6"
			}
		},
		"node_modules/are-we-there-yet/node_modules/readable-stream": {
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
		"node_modules/are-we-there-yet/node_modules/safe-buffer": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
			"integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
			"dev": true
		},
		"node_modules/are-we-there-yet/node_modules/string_decoder": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
			"integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
			"dev": true,
			"dependencies": {
				"safe-buffer": "~5.1.0"
			}
		},
		"node_modules/argparse": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
			"integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
			"dev": true
		},
		"node_modules/array-differ": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/array-differ/-/array-differ-3.0.0.tgz",
			"integrity": "sha512-THtfYS6KtME/yIAhKjZ2ul7XI96lQGHRputJQHO80LAWQnuGP4iCIN8vdMRboGbIEYBwU33q8Tch1os2+X0kMg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/array-ify": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/array-ify/-/array-ify-1.0.0.tgz",
			"integrity": "sha512-c5AMf34bKdvPhQ7tBGhqkgKNUzMr4WUs+WDtC2ZUGOUncbxKMTvqxYctiseW3+L4bA8ec+GcZ6/A/FW4m8ukng==",
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
		"node_modules/array.prototype.reduce": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/array.prototype.reduce/-/array.prototype.reduce-1.0.4.tgz",
			"integrity": "sha512-WnM+AjG/DvLRLo4DDl+r+SvCzYtD2Jd9oeBYMcEaI7t3fFrHY9M53/wdLcTvmZNQ70IU6Htj0emFkZ5TS+lrdw==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.2",
				"define-properties": "^1.1.3",
				"es-abstract": "^1.19.2",
				"es-array-method-boxes-properly": "^1.0.0",
				"is-string": "^1.0.7"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/arrify": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
			"integrity": "sha512-3CYzex9M9FGQjCGMGyi6/31c8GJbgb0qGyrx5HWxPd0aCwh4cB2YjMb2Xf9UuoogrMrlO9cTqnB5rI5GHZTcUA==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/asap": {
			"version": "2.0.6",
			"resolved": "https://registry.npmjs.org/asap/-/asap-2.0.6.tgz",
			"integrity": "sha512-BSHWgDSAiKs50o2Re8ppvp3seVHXSRM44cdSsT9FfNEUUZLOGWVCsiWaRPWM1Znn+mqZ1OfVZ3z3DWEzSp7hRA==",
			"dev": true
		},
		"node_modules/asn1": {
			"version": "0.2.6",
			"resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.6.tgz",
			"integrity": "sha512-ix/FxPn0MDjeyJ7i/yoHGFt/EX6LyNbxSEhPPXODPL+KB0VPk86UYfL0lMdy+KCnv+fmvIzySwaK5COwqVbWTQ==",
			"dev": true,
			"dependencies": {
				"safer-buffer": "~2.1.0"
			}
		},
		"node_modules/assert-plus": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
			"integrity": "sha512-NfJ4UzBCcQGLDlQq7nHxH+tv3kyZ0hHQqF5BO6J7tNJeP5do1llPr8dZ8zHonfhAu0PHAdMkSo+8o0wxg9lZWw==",
			"dev": true,
			"engines": {
				"node": ">=0.8"
			}
		},
		"node_modules/asynckit": {
			"version": "0.4.0",
			"resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
			"integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
			"dev": true
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
		"node_modules/aws-sign2": {
			"version": "0.7.0",
			"resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
			"integrity": "sha512-08kcGqnYf/YmjoRhfxyu+CLxBjUtHLXLXX/vUfx9l2LYzG3c1m61nrpyFUZI6zeS+Li/wWMMidD9KgrqtGq3mA==",
			"dev": true,
			"engines": {
				"node": "*"
			}
		},
		"node_modules/aws4": {
			"version": "1.11.0",
			"resolved": "https://registry.npmjs.org/aws4/-/aws4-1.11.0.tgz",
			"integrity": "sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA==",
			"dev": true
		},
		"node_modules/balanced-match": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
			"integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
		},
		"node_modules/bcrypt-pbkdf": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
			"integrity": "sha512-qeFIXtP4MSoi6NLqO12WfqARWWuCKi2Rn/9hJLEmtB5yTNr9DqFWkJRCf2qShWzPeAMRnOgCrq0sg/KLv5ES9w==",
			"dev": true,
			"dependencies": {
				"tweetnacl": "^0.14.3"
			}
		},
		"node_modules/before-after-hook": {
			"version": "2.2.2",
			"resolved": "https://registry.npmjs.org/before-after-hook/-/before-after-hook-2.2.2.tgz",
			"integrity": "sha512-3pZEU3NT5BFUo/AD5ERPWOgQOCZITni6iavr5AUw5AUwQjMlI0kzu5btnyD39AF0gUEsDPwJT+oY1ORBJijPjQ==",
			"dev": true
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
		"node_modules/boolbase": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
			"integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww=="
		},
		"node_modules/brace-expansion": {
			"version": "1.1.11",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
			"integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
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
		"node_modules/browser-stdout": {
			"version": "1.3.1",
			"resolved": "https://registry.npmjs.org/browser-stdout/-/browser-stdout-1.3.1.tgz",
			"integrity": "sha512-qhAVI1+Av2X7qelOfAIYwXONood6XlZE/fXaBSmW/T5SzLAmCgzi+eiWE7fUvbHaeNBQH13UftjpXxsfLkMpgw==",
			"dev": true
		},
		"node_modules/buffer-from": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
			"integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
			"dev": true
		},
		"node_modules/builtins": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/builtins/-/builtins-1.0.3.tgz",
			"integrity": "sha512-uYBjakWipfaO/bXI7E8rq6kpwHRZK5cNYrUv2OzZSI/FvmdMyXJ2tG9dKcjEC5YHmHpUAwsargWIZNWdxb/bnQ==",
			"dev": true
		},
		"node_modules/byline": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/byline/-/byline-5.0.0.tgz",
			"integrity": "sha512-s6webAy+R4SR8XVuJWt2V2rGvhnrhxN+9S15GNuTK3wKPOXFF6RNc+8ug2XhH+2s4f+uudG4kUVYmYOQWL2g0Q==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/byte-size": {
			"version": "7.0.1",
			"resolved": "https://registry.npmjs.org/byte-size/-/byte-size-7.0.1.tgz",
			"integrity": "sha512-crQdqyCwhokxwV1UyDzLZanhkugAgft7vt0qbbdt60C6Zf3CAiGmtUCylbtYwrU6loOUw3euGrNtW1J651ot1A==",
			"dev": true,
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/cacache": {
			"version": "15.3.0",
			"resolved": "https://registry.npmjs.org/cacache/-/cacache-15.3.0.tgz",
			"integrity": "sha512-VVdYzXEn+cnbXpFgWs5hTT7OScegHVmLhJIR8Ufqk3iFD6A6j5iSX1KuBTfNEv4tdJWE2PzA6IVFtcLC7fN9wQ==",
			"dev": true,
			"dependencies": {
				"@npmcli/fs": "^1.0.0",
				"@npmcli/move-file": "^1.0.1",
				"chownr": "^2.0.0",
				"fs-minipass": "^2.0.0",
				"glob": "^7.1.4",
				"infer-owner": "^1.0.4",
				"lru-cache": "^6.0.0",
				"minipass": "^3.1.1",
				"minipass-collect": "^1.0.2",
				"minipass-flush": "^1.0.5",
				"minipass-pipeline": "^1.2.2",
				"mkdirp": "^1.0.3",
				"p-map": "^4.0.0",
				"promise-inflight": "^1.0.1",
				"rimraf": "^3.0.2",
				"ssri": "^8.0.1",
				"tar": "^6.0.2",
				"unique-filename": "^1.1.1"
			},
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/cacache/node_modules/glob": {
			"version": "7.2.3",
			"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
			"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
			"dev": true,
			"dependencies": {
				"fs.realpath": "^1.0.0",
				"inflight": "^1.0.4",
				"inherits": "2",
				"minimatch": "^3.1.1",
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
			"version": "6.3.0",
			"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz",
			"integrity": "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==",
			"dev": true,
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/camelcase-keys": {
			"version": "7.0.2",
			"resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-7.0.2.tgz",
			"integrity": "sha512-Rjs1H+A9R+Ig+4E/9oyB66UC5Mj9Xq3N//vcLf2WzgdTi/3gUu3Z9KoqmlrEG4VuuLK8wJHofxzdQXz/knhiYg==",
			"dev": true,
			"dependencies": {
				"camelcase": "^6.3.0",
				"map-obj": "^4.1.0",
				"quick-lru": "^5.1.1",
				"type-fest": "^1.2.1"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/camelcase-keys/node_modules/type-fest": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-1.4.0.tgz",
			"integrity": "sha512-yGSza74xk0UG8k+pLh5oeoYirvIiWo5t0/o3zHHAO2tRDiZcxWP7fywNlXhqb6/r6sWvwi+RsyQMWhVLe4BVuA==",
			"dev": true,
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/caseless": {
			"version": "0.12.0",
			"resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
			"integrity": "sha512-4tYFyifaFfGacoiObjJegolkwSU4xQNGbVgUiNYVUxbQ2x2lUsFvY4hVgVzGiIe6WLOPqycWXA40l+PWsxthUw==",
			"dev": true
		},
		"node_modules/chalk": {
			"version": "4.1.2",
			"resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
			"integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
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
		"node_modules/chardet": {
			"version": "0.7.0",
			"resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
			"integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",
			"dev": true
		},
		"node_modules/cheerio": {
			"version": "1.0.0-rc.11",
			"resolved": "https://registry.npmjs.org/cheerio/-/cheerio-1.0.0-rc.11.tgz",
			"integrity": "sha512-bQwNaDIBKID5ts/DsdhxrjqFXYfLw4ste+wMKqWA8DyKcS4qwsPP4Bk8ZNaTJjvpiX/qW3BT4sU7d6Bh5i+dag==",
			"dependencies": {
				"cheerio-select": "^2.1.0",
				"dom-serializer": "^2.0.0",
				"domhandler": "^5.0.3",
				"domutils": "^3.0.1",
				"htmlparser2": "^8.0.1",
				"parse5": "^7.0.0",
				"parse5-htmlparser2-tree-adapter": "^7.0.0",
				"tslib": "^2.4.0"
			},
			"engines": {
				"node": ">= 6"
			},
			"funding": {
				"url": "https://github.com/cheeriojs/cheerio?sponsor=1"
			}
		},
		"node_modules/cheerio-select": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/cheerio-select/-/cheerio-select-2.1.0.tgz",
			"integrity": "sha512-9v9kG0LvzrlcungtnJtpGNxY+fzECQKhK4EGJX2vByejiMX84MFNQw4UxPJl3bFbTMw+Dfs37XaIkCwTZfLh4g==",
			"dependencies": {
				"boolbase": "^1.0.0",
				"css-select": "^5.1.0",
				"css-what": "^6.1.0",
				"domelementtype": "^2.3.0",
				"domhandler": "^5.0.3",
				"domutils": "^3.0.1"
			},
			"funding": {
				"url": "https://github.com/sponsors/fb55"
			}
		},
		"node_modules/cheerio/node_modules/tslib": {
			"version": "2.4.0",
			"resolved": "https://registry.npmjs.org/tslib/-/tslib-2.4.0.tgz",
			"integrity": "sha512-d6xOpEDfsi2CZVlPQzGeux8XMwLT9hssAsaPYExaQMuYskwb+x1x7J371tWlbBdWHroy99KnVB6qIkUbs5X3UQ=="
		},
		"node_modules/chokidar": {
			"version": "3.5.3",
			"resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.3.tgz",
			"integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",
			"dev": true,
			"funding": [
				{
					"type": "individual",
					"url": "https://paulmillr.com/funding/"
				}
			],
			"dependencies": {
				"anymatch": "~3.1.2",
				"braces": "~3.0.2",
				"glob-parent": "~5.1.2",
				"is-binary-path": "~2.1.0",
				"is-glob": "~4.0.1",
				"normalize-path": "~3.0.0",
				"readdirp": "~3.6.0"
			},
			"engines": {
				"node": ">= 8.10.0"
			},
			"optionalDependencies": {
				"fsevents": "~2.3.2"
			}
		},
		"node_modules/chokidar/node_modules/glob-parent": {
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
		"node_modules/chownr": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
			"integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==",
			"dev": true,
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/ci-info": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
			"integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ==",
			"dev": true
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
		"node_modules/cli-width": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/cli-width/-/cli-width-3.0.0.tgz",
			"integrity": "sha512-FxqpkPPwu1HjuN93Omfm4h8uIanXofW0RxVEW3k5RKx+mJJYSthzNhp32Kzxxy3YAEZ/Dc/EWN1vZRY0+kOhbw==",
			"dev": true,
			"engines": {
				"node": ">= 10"
			}
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
			"integrity": "sha512-JQHZ2QMW6l3aH/j6xCqQThY/9OH4D/9ls34cgkUBiEeocRTU04tHfKPBsUK1PqZCUQM7GiA0IIXJSuXHI64Kbg==",
			"dev": true,
			"engines": {
				"node": ">=0.8"
			}
		},
		"node_modules/clone-deep": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
			"integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
			"dev": true,
			"dependencies": {
				"is-plain-object": "^2.0.4",
				"kind-of": "^6.0.2",
				"shallow-clone": "^3.0.0"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/clone-deep/node_modules/is-plain-object": {
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
		"node_modules/cmd-shim": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/cmd-shim/-/cmd-shim-4.1.0.tgz",
			"integrity": "sha512-lb9L7EM4I/ZRVuljLPEtUJOP+xiQVknZ4ZMpMgEp4JzNldPb27HU03hi6K1/6CoIuit/Zm/LQXySErFeXxDprw==",
			"dev": true,
			"dependencies": {
				"mkdirp-infer-owner": "^2.0.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/code-point-at": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
			"integrity": "sha512-RpAVKQA5T63xEj6/giIbUEtZwJ4UFIc3ZtvEkiaUERylqe8xb5IvqcgOurZLahv93CLKfxcw5YI+DZcUBRyLXA==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/color-convert": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
			"integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
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
			"integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
		},
		"node_modules/columnify": {
			"version": "1.6.0",
			"resolved": "https://registry.npmjs.org/columnify/-/columnify-1.6.0.tgz",
			"integrity": "sha512-lomjuFZKfM6MSAnV9aCZC9sc0qGbmZdfygNv+nCpqVkSKdCxCklLtd16O0EILGkImHw9ZpHkAnHaB+8Zxq5W6Q==",
			"dev": true,
			"dependencies": {
				"strip-ansi": "^6.0.1",
				"wcwidth": "^1.0.0"
			},
			"engines": {
				"node": ">=8.0.0"
			}
		},
		"node_modules/combined-stream": {
			"version": "1.0.8",
			"resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
			"integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
			"dev": true,
			"dependencies": {
				"delayed-stream": "~1.0.0"
			},
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/commander": {
			"version": "9.3.0",
			"resolved": "https://registry.npmjs.org/commander/-/commander-9.3.0.tgz",
			"integrity": "sha512-hv95iU5uXPbK83mjrJKuZyFM/LBAoCV/XhVGkS5Je6tl7sxr6A0ITMw5WoRV46/UaJ46Nllm3Xt7IaJhXTIkzw==",
			"engines": {
				"node": "^12.20.0 || >=14"
			}
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
		"node_modules/compare-func/node_modules/dot-prop": {
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
		"node_modules/concat-map": {
			"version": "0.0.1",
			"resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
			"integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg=="
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
		"node_modules/config-chain": {
			"version": "1.1.13",
			"resolved": "https://registry.npmjs.org/config-chain/-/config-chain-1.1.13.tgz",
			"integrity": "sha512-qj+f8APARXHrM0hraqXYb2/bOVSV4PvJQlNZ/DVj0QrmNM2q2euizkeuVckQ57J+W0mRH6Hvi+k50M4Jul2VRQ==",
			"dev": true,
			"dependencies": {
				"ini": "^1.3.4",
				"proto-list": "~1.2.1"
			}
		},
		"node_modules/console-control-strings": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
			"integrity": "sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ==",
			"dev": true
		},
		"node_modules/conventional-changelog-angular": {
			"version": "5.0.13",
			"resolved": "https://registry.npmjs.org/conventional-changelog-angular/-/conventional-changelog-angular-5.0.13.tgz",
			"integrity": "sha512-i/gipMxs7s8L/QeuavPF2hLnJgH6pEZAttySB6aiQLWcX3puWDL3ACVmvBhJGxnAy52Qc15ua26BufY6KpmrVA==",
			"dev": true,
			"dependencies": {
				"compare-func": "^2.0.0",
				"q": "^1.5.1"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/conventional-changelog-core": {
			"version": "4.2.4",
			"resolved": "https://registry.npmjs.org/conventional-changelog-core/-/conventional-changelog-core-4.2.4.tgz",
			"integrity": "sha512-gDVS+zVJHE2v4SLc6B0sLsPiloR0ygU7HaDW14aNJE1v4SlqJPILPl/aJC7YdtRE4CybBf8gDwObBvKha8Xlyg==",
			"dev": true,
			"dependencies": {
				"add-stream": "^1.0.0",
				"conventional-changelog-writer": "^5.0.0",
				"conventional-commits-parser": "^3.2.0",
				"dateformat": "^3.0.0",
				"get-pkg-repo": "^4.0.0",
				"git-raw-commits": "^2.0.8",
				"git-remote-origin-url": "^2.0.0",
				"git-semver-tags": "^4.1.1",
				"lodash": "^4.17.15",
				"normalize-package-data": "^3.0.0",
				"q": "^1.5.1",
				"read-pkg": "^3.0.0",
				"read-pkg-up": "^3.0.0",
				"through2": "^4.0.0"
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
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/conventional-changelog-writer/-/conventional-changelog-writer-5.0.1.tgz",
			"integrity": "sha512-5WsuKUfxW7suLblAbFnxAcrvf6r+0b7GvNaWUwUIk0bXMnENP/PEieGKVUQrjPqwPT4o3EPAASBXiY6iHooLOQ==",
			"dev": true,
			"dependencies": {
				"conventional-commits-filter": "^2.0.7",
				"dateformat": "^3.0.0",
				"handlebars": "^4.7.7",
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
		"node_modules/conventional-changelog-writer/node_modules/camelcase": {
			"version": "5.3.1",
			"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
			"integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/conventional-changelog-writer/node_modules/camelcase-keys": {
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
		"node_modules/conventional-changelog-writer/node_modules/find-up": {
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
		"node_modules/conventional-changelog-writer/node_modules/hosted-git-info": {
			"version": "2.8.9",
			"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
			"integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
			"dev": true
		},
		"node_modules/conventional-changelog-writer/node_modules/locate-path": {
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
		"node_modules/conventional-changelog-writer/node_modules/p-limit": {
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
		"node_modules/conventional-changelog-writer/node_modules/p-locate": {
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
		"node_modules/conventional-changelog-writer/node_modules/quick-lru": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-4.0.1.tgz",
			"integrity": "sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/conventional-changelog-writer/node_modules/read-pkg": {
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
		"node_modules/conventional-changelog-writer/node_modules/read-pkg/node_modules/normalize-package-data": {
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
		"node_modules/conventional-changelog-writer/node_modules/read-pkg/node_modules/semver": {
			"version": "5.7.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
			"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
			"dev": true,
			"bin": {
				"semver": "bin/semver"
			}
		},
		"node_modules/conventional-changelog-writer/node_modules/read-pkg/node_modules/type-fest": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
			"integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/conventional-changelog-writer/node_modules/redent": {
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
		"node_modules/conventional-changelog-writer/node_modules/semver": {
			"version": "6.3.0",
			"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
			"integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
			"dev": true,
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/conventional-changelog-writer/node_modules/strip-indent": {
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
		"node_modules/conventional-changelog-writer/node_modules/trim-newlines": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-3.0.1.tgz",
			"integrity": "sha512-c1PTsA3tYrIsLGkJkzHF+w9F2EyxfXGo4UyJc4pFL++FMjnq0HJS69T3M7d//gKrFKwy429bouPescbjecU+Zw==",
			"dev": true,
			"engines": {
				"node": ">=8"
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
			"version": "3.2.4",
			"resolved": "https://registry.npmjs.org/conventional-commits-parser/-/conventional-commits-parser-3.2.4.tgz",
			"integrity": "sha512-nK7sAtfi+QXbxHCYfhpZsfRtaitZLIA6889kFIouLvz6repszQDgxBu7wf2WbU+Dco7sAnNCJYERCwt54WPC2Q==",
			"dev": true,
			"dependencies": {
				"is-text-path": "^1.0.1",
				"JSONStream": "^1.0.4",
				"lodash": "^4.17.15",
				"meow": "^8.0.0",
				"split2": "^3.0.0",
				"through2": "^4.0.0"
			},
			"bin": {
				"conventional-commits-parser": "cli.js"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/conventional-commits-parser/node_modules/camelcase": {
			"version": "5.3.1",
			"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
			"integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/conventional-commits-parser/node_modules/camelcase-keys": {
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
		"node_modules/conventional-commits-parser/node_modules/find-up": {
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
		"node_modules/conventional-commits-parser/node_modules/hosted-git-info": {
			"version": "2.8.9",
			"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
			"integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
			"dev": true
		},
		"node_modules/conventional-commits-parser/node_modules/locate-path": {
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
		"node_modules/conventional-commits-parser/node_modules/p-limit": {
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
		"node_modules/conventional-commits-parser/node_modules/p-locate": {
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
		"node_modules/conventional-commits-parser/node_modules/quick-lru": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-4.0.1.tgz",
			"integrity": "sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/conventional-commits-parser/node_modules/read-pkg": {
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
		"node_modules/conventional-commits-parser/node_modules/read-pkg/node_modules/normalize-package-data": {
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
		"node_modules/conventional-commits-parser/node_modules/read-pkg/node_modules/type-fest": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
			"integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/conventional-commits-parser/node_modules/redent": {
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
		"node_modules/conventional-commits-parser/node_modules/semver": {
			"version": "5.7.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
			"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
			"dev": true,
			"bin": {
				"semver": "bin/semver"
			}
		},
		"node_modules/conventional-commits-parser/node_modules/strip-indent": {
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
		"node_modules/conventional-commits-parser/node_modules/trim-newlines": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-3.0.1.tgz",
			"integrity": "sha512-c1PTsA3tYrIsLGkJkzHF+w9F2EyxfXGo4UyJc4pFL++FMjnq0HJS69T3M7d//gKrFKwy429bouPescbjecU+Zw==",
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
		"node_modules/conventional-recommended-bump/node_modules/camelcase": {
			"version": "5.3.1",
			"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
			"integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/conventional-recommended-bump/node_modules/camelcase-keys": {
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
		"node_modules/conventional-recommended-bump/node_modules/find-up": {
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
		"node_modules/conventional-recommended-bump/node_modules/hosted-git-info": {
			"version": "2.8.9",
			"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
			"integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
			"dev": true
		},
		"node_modules/conventional-recommended-bump/node_modules/locate-path": {
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
		"node_modules/conventional-recommended-bump/node_modules/p-limit": {
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
		"node_modules/conventional-recommended-bump/node_modules/p-locate": {
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
		"node_modules/conventional-recommended-bump/node_modules/quick-lru": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-4.0.1.tgz",
			"integrity": "sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/conventional-recommended-bump/node_modules/read-pkg": {
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
		"node_modules/conventional-recommended-bump/node_modules/read-pkg/node_modules/normalize-package-data": {
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
		"node_modules/conventional-recommended-bump/node_modules/read-pkg/node_modules/type-fest": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
			"integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/conventional-recommended-bump/node_modules/redent": {
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
		"node_modules/conventional-recommended-bump/node_modules/semver": {
			"version": "5.7.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
			"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
			"dev": true,
			"bin": {
				"semver": "bin/semver"
			}
		},
		"node_modules/conventional-recommended-bump/node_modules/strip-indent": {
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
		"node_modules/conventional-recommended-bump/node_modules/trim-newlines": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-3.0.1.tgz",
			"integrity": "sha512-c1PTsA3tYrIsLGkJkzHF+w9F2EyxfXGo4UyJc4pFL++FMjnq0HJS69T3M7d//gKrFKwy429bouPescbjecU+Zw==",
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
		"node_modules/core-util-is": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
			"integrity": "sha512-3lqz5YjWTYnW6dlDa5TLaTCcShfar1e40rmcJVwCBJC6mWlFuj0eCHIElmG1g5kyuJ/GD+8Wn4FFCcz4gJPfaQ==",
			"dev": true
		},
		"node_modules/cosmiconfig": {
			"version": "7.0.1",
			"resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.1.tgz",
			"integrity": "sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==",
			"dev": true,
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
		"node_modules/css-select": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/css-select/-/css-select-5.1.0.tgz",
			"integrity": "sha512-nwoRF1rvRRnnCqqY7updORDsuqKzqYJ28+oSMaJMMgOauh3fvwHqMS7EZpIPqK8GL+g9mKxF1vP/ZjSeNjEVHg==",
			"dependencies": {
				"boolbase": "^1.0.0",
				"css-what": "^6.1.0",
				"domhandler": "^5.0.2",
				"domutils": "^3.0.1",
				"nth-check": "^2.0.1"
			},
			"funding": {
				"url": "https://github.com/sponsors/fb55"
			}
		},
		"node_modules/css-what": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/css-what/-/css-what-6.1.0.tgz",
			"integrity": "sha512-HTUrgRJ7r4dsZKU6GjmpfRK1O76h97Z8MfS1G0FozR+oF2kG6Vfe8JE6zwrkbxigziPHinCJ+gCPjA9EaBDtRw==",
			"engines": {
				"node": ">= 6"
			},
			"funding": {
				"url": "https://github.com/sponsors/fb55"
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
		"node_modules/dashdash": {
			"version": "1.14.1",
			"resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
			"integrity": "sha512-jRFi8UDGo6j+odZiEpjazZaWqEal3w/basFjQHQEwVtZJGDpxbH1MeYluwCS8Xq5wmLJooDlMgvVarmWfGM44g==",
			"dev": true,
			"dependencies": {
				"assert-plus": "^1.0.0"
			},
			"engines": {
				"node": ">=0.10"
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
			"version": "4.3.4",
			"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
			"integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
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
		"node_modules/debuglog": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/debuglog/-/debuglog-1.0.1.tgz",
			"integrity": "sha512-syBZ+rnAK3EgMsH2aYEOLUW7mZSY9Gb+0wUMCFsZvcmiz+HigA0LOcq/HoQqVuGG+EKykunc7QG2bzrponfaSw==",
			"dev": true,
			"engines": {
				"node": "*"
			}
		},
		"node_modules/decamelize": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/decamelize/-/decamelize-5.0.1.tgz",
			"integrity": "sha512-VfxadyCECXgQlkoEAjeghAr5gY3Hf+IKjKb+X8tGVDtveCjN+USwprd2q3QXBR9T1+x2DG0XZF5/w+7HAtSaXA==",
			"dev": true,
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/decamelize-keys": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/decamelize-keys/-/decamelize-keys-1.1.0.tgz",
			"integrity": "sha512-ocLWuYzRPoS9bfiSdDd3cxvrzovVMZnRDVEzAs+hWIVXGDbHxWMECij2OBuyB/An0FFW/nLuq6Kv1i/YC5Qfzg==",
			"dev": true,
			"dependencies": {
				"decamelize": "^1.1.0",
				"map-obj": "^1.0.0"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/decamelize-keys/node_modules/decamelize": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
			"integrity": "sha512-z2S+W9X73hAUUki+N+9Za2lBlun89zigOyGrsax+KUQ6wKW4ZoWpEYBkGhQjwAjjDCkWxhY0VKEhk8wzY7F5cA==",
			"dev": true,
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
			"integrity": "sha512-hjf+xovcEn31w/EUYdTXQh/8smFL/dzYjohQGEIgjyNavaJfBY2p5F527Bo1VPATxv0VYTUC2bOcXvqFwk78Og==",
			"dev": true,
			"engines": {
				"node": ">=0.10"
			}
		},
		"node_modules/dedent": {
			"version": "0.7.0",
			"resolved": "https://registry.npmjs.org/dedent/-/dedent-0.7.0.tgz",
			"integrity": "sha512-Q6fKUPqnAHAyhiUgFU7BUzLiv0kd8saH9al7tnu5Q/okj6dnupxyTgFIBjVzJATdfIAm9NAsvXNzjaKa+bxVyA==",
			"dev": true
		},
		"node_modules/deep-is": {
			"version": "0.1.4",
			"resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
			"integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
			"dev": true
		},
		"node_modules/defaults": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
			"integrity": "sha512-s82itHOnYrN0Ib8r+z7laQz3sdE+4FP3d9Q7VLO7U+KRT+CR0GsWuyHxzdAY82I7cXv0G/twrqomTJLOssO5HA==",
			"dev": true,
			"dependencies": {
				"clone": "^1.0.2"
			}
		},
		"node_modules/define-properties": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.4.tgz",
			"integrity": "sha512-uckOqKcfaVvtBdsVkdPv3XjveQJsNQqmhXgRi8uhvWWuPYZCNlzT8qAyblUgNoXdHdjMTzAqeGjAoli8f+bzPA==",
			"dev": true,
			"dependencies": {
				"has-property-descriptors": "^1.0.0",
				"object-keys": "^1.1.1"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/del": {
			"version": "6.1.1",
			"resolved": "https://registry.npmjs.org/del/-/del-6.1.1.tgz",
			"integrity": "sha512-ua8BhapfP0JUJKC/zV9yHHDW/rDoDxP4Zhn3AkA6/xT6gY7jYXJiaeyBZznYVujhZZET+UgcbZiQ7sN3WqcImg==",
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
		"node_modules/del-cli": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/del-cli/-/del-cli-4.0.1.tgz",
			"integrity": "sha512-KtR/6cBfZkGDAP2NA7z+bP4p1OMob3wjN9mq13+SWvExx6jT9gFWfLgXEeX8J2B47OKeNCq9yTONmtryQ+m+6g==",
			"dev": true,
			"dependencies": {
				"del": "^6.0.0",
				"meow": "^10.1.0"
			},
			"bin": {
				"del": "cli.js",
				"del-cli": "cli.js"
			},
			"engines": {
				"node": ">=12.20"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/delayed-stream": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
			"integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
			"dev": true,
			"engines": {
				"node": ">=0.4.0"
			}
		},
		"node_modules/delegates": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
			"integrity": "sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ==",
			"dev": true
		},
		"node_modules/depd": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
			"integrity": "sha512-7emPTl6Dpo6JRXOXjLRxck+FlLRX5847cLKEn00PLAgc3g2hTZZgr+e4c2v6QpSmLeFP3n5yUo7ft6avBK/5jQ==",
			"dev": true,
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/deprecation": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/deprecation/-/deprecation-2.3.1.tgz",
			"integrity": "sha512-xmHIy4F3scKVwMsQ4WnVaS8bHOx0DmVwRywosKhaILI0ywMDWPtBSku2HNxRvF7jtwDRsoEwYQSfbxj8b7RlJQ==",
			"dev": true
		},
		"node_modules/detect-indent": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/detect-indent/-/detect-indent-6.1.0.tgz",
			"integrity": "sha512-reYkTUJAZb9gUuZ2RvVCNhVHdg62RHnJ7WJl8ftMi4diZ6NWlciOzQN88pUhSELEwflJht4oQDv0F0BMlwaYtA==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/dezalgo": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/dezalgo/-/dezalgo-1.0.4.tgz",
			"integrity": "sha512-rXSP0bf+5n0Qonsb+SVVfNfIsimO4HEtmnIpPHY8Q1UCzKlQrDMfdobr8nJOOsRgWCyMRqeSBQzmWUMq7zvVig==",
			"dev": true,
			"dependencies": {
				"asap": "^2.0.0",
				"wrappy": "1"
			}
		},
		"node_modules/diff": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/diff/-/diff-5.0.0.tgz",
			"integrity": "sha512-/VTCrvm5Z0JGty/BWHljh+BAiw3IK+2j87NGMu8Nwc/f48WoDAC395uomO9ZD117ZOBaHmkX1oyLvkVM/aIT3w==",
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
		"node_modules/dom-serializer": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-2.0.0.tgz",
			"integrity": "sha512-wIkAryiqt/nV5EQKqQpo3SToSOV9J0DnbJqwK7Wv/Trc92zIAYZ4FlMu+JPFW1DfGFt81ZTCGgDEabffXeLyJg==",
			"dependencies": {
				"domelementtype": "^2.3.0",
				"domhandler": "^5.0.2",
				"entities": "^4.2.0"
			},
			"funding": {
				"url": "https://github.com/cheeriojs/dom-serializer?sponsor=1"
			}
		},
		"node_modules/domelementtype": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.3.0.tgz",
			"integrity": "sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw==",
			"funding": [
				{
					"type": "github",
					"url": "https://github.com/sponsors/fb55"
				}
			]
		},
		"node_modules/domhandler": {
			"version": "5.0.3",
			"resolved": "https://registry.npmjs.org/domhandler/-/domhandler-5.0.3.tgz",
			"integrity": "sha512-cgwlv/1iFQiFnU96XXgROh8xTeetsnJiDsTc7TYCLFd9+/WNkIqPTxiM/8pSd8VIrhXGTf1Ny1q1hquVqDJB5w==",
			"dependencies": {
				"domelementtype": "^2.3.0"
			},
			"engines": {
				"node": ">= 4"
			},
			"funding": {
				"url": "https://github.com/fb55/domhandler?sponsor=1"
			}
		},
		"node_modules/domutils": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/domutils/-/domutils-3.0.1.tgz",
			"integrity": "sha512-z08c1l761iKhDFtfXO04C7kTdPBLi41zwOZl00WS8b5eiaebNpY00HKbztwBq+e3vyqWNwWF3mP9YLUeqIrF+Q==",
			"dependencies": {
				"dom-serializer": "^2.0.0",
				"domelementtype": "^2.3.0",
				"domhandler": "^5.0.1"
			},
			"funding": {
				"url": "https://github.com/fb55/domutils?sponsor=1"
			}
		},
		"node_modules/dot-prop": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-6.0.1.tgz",
			"integrity": "sha512-tE7ztYzXHIeyvc7N+hR3oi7FIbf/NIjVP9hmAt3yMXzrQ072/fpjGLx2GxNxGxUl5V73MEqYzioOMoVhGMJ5cA==",
			"dev": true,
			"dependencies": {
				"is-obj": "^2.0.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/duplexer": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/duplexer/-/duplexer-0.1.2.tgz",
			"integrity": "sha512-jtD6YG370ZCIi/9GTaJKQxWTZD045+4R4hTk/x1UyoqadyJ9x9CgSi1RlVDQF8U2sxLLSnFkCaMihqljHIWgMg==",
			"dev": true
		},
		"node_modules/ecc-jsbn": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
			"integrity": "sha512-eh9O+hwRHNbG4BLTjEl3nw044CkGm5X6LoaCf7LPp7UU8Qrt47JYNi6nPX8xjW97TKGKm1ouctg0QSpZe9qrnw==",
			"dev": true,
			"dependencies": {
				"jsbn": "~0.1.0",
				"safer-buffer": "^2.1.0"
			}
		},
		"node_modules/emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
			"dev": true
		},
		"node_modules/encoding": {
			"version": "0.1.13",
			"resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.13.tgz",
			"integrity": "sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==",
			"dev": true,
			"optional": true,
			"dependencies": {
				"iconv-lite": "^0.6.2"
			}
		},
		"node_modules/encoding/node_modules/iconv-lite": {
			"version": "0.6.3",
			"resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
			"integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
			"dev": true,
			"optional": true,
			"dependencies": {
				"safer-buffer": ">= 2.1.2 < 3.0.0"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/entities": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/entities/-/entities-4.3.0.tgz",
			"integrity": "sha512-/iP1rZrSEJ0DTlPiX+jbzlA3eVkY/e8L8SozroF395fIqE3TYF/Nz7YOMAawta+vLmyJ/hkGNNPcSbMADCCXbg==",
			"engines": {
				"node": ">=0.12"
			},
			"funding": {
				"url": "https://github.com/fb55/entities?sponsor=1"
			}
		},
		"node_modules/env-paths": {
			"version": "2.2.1",
			"resolved": "https://registry.npmjs.org/env-paths/-/env-paths-2.2.1.tgz",
			"integrity": "sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/envinfo": {
			"version": "7.8.1",
			"resolved": "https://registry.npmjs.org/envinfo/-/envinfo-7.8.1.tgz",
			"integrity": "sha512-/o+BXHmB7ocbHEAs6F2EnG0ogybVVUdkRunTT2glZU9XAaGmhqskrvKwqXuDfNjEO0LZKWdejEEpnq8aM0tOaw==",
			"dev": true,
			"bin": {
				"envinfo": "dist/cli.js"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/err-code": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/err-code/-/err-code-2.0.3.tgz",
			"integrity": "sha512-2bmlRpNKBxT/CRmPOlyISQpNj+qSeYvcym/uT0Jx2bMOlKLtSy1ZmLuVxSEKKyor/N5yhvp/ZiG1oE3DEYMSFA==",
			"dev": true
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
			"version": "1.20.1",
			"resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.20.1.tgz",
			"integrity": "sha512-WEm2oBhfoI2sImeM4OF2zE2V3BYdSF+KnSi9Sidz51fQHd7+JuF8Xgcj9/0o+OWeIeIS/MiuNnlruQrJf16GQA==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.2",
				"es-to-primitive": "^1.2.1",
				"function-bind": "^1.1.1",
				"function.prototype.name": "^1.1.5",
				"get-intrinsic": "^1.1.1",
				"get-symbol-description": "^1.0.0",
				"has": "^1.0.3",
				"has-property-descriptors": "^1.0.0",
				"has-symbols": "^1.0.3",
				"internal-slot": "^1.0.3",
				"is-callable": "^1.2.4",
				"is-negative-zero": "^2.0.2",
				"is-regex": "^1.1.4",
				"is-shared-array-buffer": "^1.0.2",
				"is-string": "^1.0.7",
				"is-weakref": "^1.0.2",
				"object-inspect": "^1.12.0",
				"object-keys": "^1.1.1",
				"object.assign": "^4.1.2",
				"regexp.prototype.flags": "^1.4.3",
				"string.prototype.trimend": "^1.0.5",
				"string.prototype.trimstart": "^1.0.5",
				"unbox-primitive": "^1.0.2"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/es-array-method-boxes-properly": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/es-array-method-boxes-properly/-/es-array-method-boxes-properly-1.0.0.tgz",
			"integrity": "sha512-wd6JXUmyHmt8T5a2xreUwKcGPq6f1f+WwIJkijUqiGcJz1qqnZgP6XIK+QyIWU5lT7imeNxUll48bziG+TSYcA==",
			"dev": true
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
		"node_modules/escalade": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
			"integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/escape-string-regexp": {
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
		"node_modules/eslint": {
			"version": "8.16.0",
			"resolved": "https://registry.npmjs.org/eslint/-/eslint-8.16.0.tgz",
			"integrity": "sha512-MBndsoXY/PeVTDJeWsYj7kLZ5hQpJOfMYLsF6LicLHQWbRDG19lK5jOix4DPl8yY4SUFcE3txy86OzFLWT+yoA==",
			"dev": true,
			"dependencies": {
				"@eslint/eslintrc": "^1.3.0",
				"@humanwhocodes/config-array": "^0.9.2",
				"ajv": "^6.10.0",
				"chalk": "^4.0.0",
				"cross-spawn": "^7.0.2",
				"debug": "^4.3.2",
				"doctrine": "^3.0.0",
				"escape-string-regexp": "^4.0.0",
				"eslint-scope": "^7.1.1",
				"eslint-utils": "^3.0.0",
				"eslint-visitor-keys": "^3.3.0",
				"espree": "^9.3.2",
				"esquery": "^1.4.0",
				"esutils": "^2.0.2",
				"fast-deep-equal": "^3.1.3",
				"file-entry-cache": "^6.0.1",
				"functional-red-black-tree": "^1.0.1",
				"glob-parent": "^6.0.1",
				"globals": "^13.15.0",
				"ignore": "^5.2.0",
				"import-fresh": "^3.0.0",
				"imurmurhash": "^0.1.4",
				"is-glob": "^4.0.0",
				"js-yaml": "^4.1.0",
				"json-stable-stringify-without-jsonify": "^1.0.1",
				"levn": "^0.4.1",
				"lodash.merge": "^4.6.2",
				"minimatch": "^3.1.2",
				"natural-compare": "^1.4.0",
				"optionator": "^0.9.1",
				"regexpp": "^3.2.0",
				"strip-ansi": "^6.0.1",
				"strip-json-comments": "^3.1.0",
				"text-table": "^0.2.0",
				"v8-compile-cache": "^2.0.3"
			},
			"bin": {
				"eslint": "bin/eslint.js"
			},
			"engines": {
				"node": "^12.22.0 || ^14.17.0 || >=16.0.0"
			},
			"funding": {
				"url": "https://opencollective.com/eslint"
			}
		},
		"node_modules/eslint-config-notninja": {
			"version": "0.4.0",
			"resolved": "https://registry.npmjs.org/eslint-config-notninja/-/eslint-config-notninja-0.4.0.tgz",
			"integrity": "sha512-c55Kk7d+/AbvhZTBPQNCnkKHYtsFgxpeAmNCm4VR95TsuD34AgUoWoHrcvOONYFyQ9hf/8dwYee56D8A17Io+w==",
			"dev": true
		},
		"node_modules/eslint-scope": {
			"version": "7.1.1",
			"resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.1.1.tgz",
			"integrity": "sha512-QKQM/UXpIiHcLqJ5AOyIW7XZmzjkzQXYE54n1++wb0u9V/abW3l9uQnxX8Z5Xd18xyKIMTUAyQ0k1e8pz6LUrw==",
			"dev": true,
			"dependencies": {
				"esrecurse": "^4.3.0",
				"estraverse": "^5.2.0"
			},
			"engines": {
				"node": "^12.22.0 || ^14.17.0 || >=16.0.0"
			}
		},
		"node_modules/eslint-utils": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-3.0.0.tgz",
			"integrity": "sha512-uuQC43IGctw68pJA1RgbQS8/NP7rch6Cwd4j3ZBtgo4/8Flj4eGE7ZYSZRN3iq5pVUv6GPdW5Z1RFleo84uLDA==",
			"dev": true,
			"dependencies": {
				"eslint-visitor-keys": "^2.0.0"
			},
			"engines": {
				"node": "^10.0.0 || ^12.0.0 || >= 14.0.0"
			},
			"funding": {
				"url": "https://github.com/sponsors/mysticatea"
			},
			"peerDependencies": {
				"eslint": ">=5"
			}
		},
		"node_modules/eslint-utils/node_modules/eslint-visitor-keys": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-2.1.0.tgz",
			"integrity": "sha512-0rSmRBzXgDzIsD6mGdJgevzgezI534Cer5L/vyMX0kHzT/jiB43jRhd9YUlMGYLQy2zprNmoT8qasCGtY+QaKw==",
			"dev": true,
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/eslint-visitor-keys": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.3.0.tgz",
			"integrity": "sha512-mQ+suqKJVyeuwGYHAdjMFqjCyfl8+Ldnxuyp3ldiMBFKkvytrXUZWaiPCEav8qDHKty44bD+qV1IP4T+w+xXRA==",
			"dev": true,
			"engines": {
				"node": "^12.22.0 || ^14.17.0 || >=16.0.0"
			}
		},
		"node_modules/espree": {
			"version": "9.3.2",
			"resolved": "https://registry.npmjs.org/espree/-/espree-9.3.2.tgz",
			"integrity": "sha512-D211tC7ZwouTIuY5x9XnS0E9sWNChB7IYKX/Xp5eQj3nFXhqmiUDB9q27y76oFl8jTg3pXcQx/bpxMfs3CIZbA==",
			"dev": true,
			"dependencies": {
				"acorn": "^8.7.1",
				"acorn-jsx": "^5.3.2",
				"eslint-visitor-keys": "^3.3.0"
			},
			"engines": {
				"node": "^12.22.0 || ^14.17.0 || >=16.0.0"
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
		"node_modules/estraverse": {
			"version": "5.3.0",
			"resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
			"integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
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
		"node_modules/eventemitter3": {
			"version": "4.0.7",
			"resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",
			"integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==",
			"dev": true
		},
		"node_modules/execa": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
			"integrity": "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==",
			"dev": true,
			"dependencies": {
				"cross-spawn": "^7.0.3",
				"get-stream": "^6.0.0",
				"human-signals": "^2.1.0",
				"is-stream": "^2.0.0",
				"merge-stream": "^2.0.0",
				"npm-run-path": "^4.0.1",
				"onetime": "^5.1.2",
				"signal-exit": "^3.0.3",
				"strip-final-newline": "^2.0.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sindresorhus/execa?sponsor=1"
			}
		},
		"node_modules/extend": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
			"integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
			"dev": true
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
		"node_modules/external-editor/node_modules/tmp": {
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
		"node_modules/extsprintf": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
			"integrity": "sha512-11Ndz7Nv+mvAC1j0ktTa7fAb0vLyGGX+rMHNBYQviQDGU0Hw7lhctJANqbPhu9nV9/izT/IntTgZ7Im/9LJs9g==",
			"dev": true,
			"engines": [
				"node >=0.6.0"
			]
		},
		"node_modules/fast-deep-equal": {
			"version": "3.1.3",
			"resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
			"integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
			"dev": true
		},
		"node_modules/fast-glob": {
			"version": "3.2.11",
			"resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.11.tgz",
			"integrity": "sha512-xrO3+1bxSo3ZVHAnqzyuewYT6aMFHRAd4Kcs92MAonjwQZLsK9d0SF1IyQ3k5PoirxTW0Oe/RqFgMQ6TcNE5Ew==",
			"dev": true,
			"dependencies": {
				"@nodelib/fs.stat": "^2.0.2",
				"@nodelib/fs.walk": "^1.2.3",
				"glob-parent": "^5.1.2",
				"merge2": "^1.3.0",
				"micromatch": "^4.0.4"
			},
			"engines": {
				"node": ">=8.6.0"
			}
		},
		"node_modules/fast-glob/node_modules/glob-parent": {
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
		"node_modules/fast-json-stable-stringify": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
			"integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
			"dev": true
		},
		"node_modules/fast-levenshtein": {
			"version": "2.0.6",
			"resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
			"integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
			"dev": true
		},
		"node_modules/fastq": {
			"version": "1.13.0",
			"resolved": "https://registry.npmjs.org/fastq/-/fastq-1.13.0.tgz",
			"integrity": "sha512-YpkpUnK8od0o1hmeSc7UUs/eB/vIPWJYjKck2QKIzAf71Vm1AAQ3EbuZB3g2JIy+pg+ERD0vqI79KyZiB2e2Nw==",
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
			"integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
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
		"node_modules/file-url": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/file-url/-/file-url-3.0.0.tgz",
			"integrity": "sha512-g872QGsHexznxkIAdK8UiZRe7SkE6kvylShU4Nsj8NvfvZag7S0QuQ4IgvPDkk75HxgjIVDwycFTDAgIiO4nDA==",
			"engines": {
				"node": ">=8"
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
		"node_modules/filter-obj": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/filter-obj/-/filter-obj-1.1.0.tgz",
			"integrity": "sha512-8rXg1ZnX7xzy2NGDVkBVaAy+lSlPNwad13BtgSlLuxfIslyt5Vg64U7tFcCt4WS1R0hvtnQybT/IyCkGZ3DpXQ==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/find-up": {
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
		"node_modules/flat": {
			"version": "5.0.2",
			"resolved": "https://registry.npmjs.org/flat/-/flat-5.0.2.tgz",
			"integrity": "sha512-b6suED+5/3rTpUBdG1gupIl8MPFCAMA0QXwmljLhvCUKcUvdE4gWky9zpuGCcXHOsz4J9wPGNWq6OKpmIzz3hQ==",
			"dev": true,
			"bin": {
				"flat": "cli.js"
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
			"version": "3.2.5",
			"resolved": "https://registry.npmjs.org/flatted/-/flatted-3.2.5.tgz",
			"integrity": "sha512-WIWGi2L3DyTUvUrwRKgGi9TwxQMUEqPOPQBVi71R96jZXJdFskXEmf54BoZaS1kknGODoIGASGEzBUYdyMCBJg==",
			"dev": true
		},
		"node_modules/forever-agent": {
			"version": "0.6.1",
			"resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
			"integrity": "sha512-j0KLYPhm6zeac4lz3oJ3o65qvgQCcPubiyotZrXqEaG4hNagNYO8qdlUrX5vwqv9ohqeT/Z3j6+yW067yWWdUw==",
			"dev": true,
			"engines": {
				"node": "*"
			}
		},
		"node_modules/form-data": {
			"version": "2.3.3",
			"resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
			"integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
			"dev": true,
			"dependencies": {
				"asynckit": "^0.4.0",
				"combined-stream": "^1.0.6",
				"mime-types": "^2.1.12"
			},
			"engines": {
				"node": ">= 0.12"
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
		"node_modules/fs-minipass": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
			"integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
			"dev": true,
			"dependencies": {
				"minipass": "^3.0.0"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/fs.realpath": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
			"integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw=="
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
		"node_modules/function.prototype.name": {
			"version": "1.1.5",
			"resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.1.5.tgz",
			"integrity": "sha512-uN7m/BzVKQnCUF/iW8jYea67v++2u7m5UgENbHRtdDVclOUP+FMPlCNdmk0h/ysGyo2tavMJEDqJAkJdRa1vMA==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.2",
				"define-properties": "^1.1.3",
				"es-abstract": "^1.19.0",
				"functions-have-names": "^1.2.2"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/functional-red-black-tree": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/functional-red-black-tree/-/functional-red-black-tree-1.0.1.tgz",
			"integrity": "sha512-dsKNQNdj6xA3T+QlADDA7mOSlX0qiMINjn0cgr+eGHGsbSHzTabcIogz2+p/iqP1Xs6EP/sS2SbqH+brGTbq0g==",
			"dev": true
		},
		"node_modules/functions-have-names": {
			"version": "1.2.3",
			"resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
			"integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
			"dev": true,
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/gauge": {
			"version": "2.7.4",
			"resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
			"integrity": "sha512-14x4kjc6lkD3ltw589k0NrPD6cCNTD6CWoVUNpB85+DrtONoZn+Rug6xZU5RvSC4+TZPxA5AnBibQYAvZn41Hg==",
			"dev": true,
			"dependencies": {
				"aproba": "^1.0.3",
				"console-control-strings": "^1.0.0",
				"has-unicode": "^2.0.0",
				"object-assign": "^4.1.0",
				"signal-exit": "^3.0.0",
				"string-width": "^1.0.1",
				"strip-ansi": "^3.0.1",
				"wide-align": "^1.1.0"
			}
		},
		"node_modules/gauge/node_modules/ansi-regex": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
			"integrity": "sha512-TIGnTpdo+E3+pCyAluZvtED5p5wCqLdezCyhPZzKPcxvFplEt4i+W7OONCKgeZFT3+y5NZZfOOS/Bdcanm1MYA==",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/gauge/node_modules/aproba": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
			"integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw==",
			"dev": true
		},
		"node_modules/gauge/node_modules/is-fullwidth-code-point": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
			"integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
			"dev": true,
			"dependencies": {
				"number-is-nan": "^1.0.0"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/gauge/node_modules/string-width": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
			"integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
			"dev": true,
			"dependencies": {
				"code-point-at": "^1.0.0",
				"is-fullwidth-code-point": "^1.0.0",
				"strip-ansi": "^3.0.0"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/gauge/node_modules/strip-ansi": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
			"integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
			"dev": true,
			"dependencies": {
				"ansi-regex": "^2.0.0"
			},
			"engines": {
				"node": ">=0.10.0"
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
		"node_modules/get-pkg-repo": {
			"version": "4.2.1",
			"resolved": "https://registry.npmjs.org/get-pkg-repo/-/get-pkg-repo-4.2.1.tgz",
			"integrity": "sha512-2+QbHjFRfGB74v/pYWjd5OhU3TDIC2Gv/YKUTk/tCvAz0pkn/Mz6P3uByuBimLOcPvN2jYdScl3xGFSrx0jEcA==",
			"dev": true,
			"dependencies": {
				"@hutson/parse-repository-url": "^3.0.0",
				"hosted-git-info": "^4.0.0",
				"through2": "^2.0.0",
				"yargs": "^16.2.0"
			},
			"bin": {
				"get-pkg-repo": "src/cli.js"
			},
			"engines": {
				"node": ">=6.9.0"
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
		"node_modules/get-pkg-repo/node_modules/safe-buffer": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
			"integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
			"dev": true
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
		"node_modules/get-port": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/get-port/-/get-port-5.1.1.tgz",
			"integrity": "sha512-g/Q1aTSDOxFpchXC4i8ZWvxA1lnPqx/JHqcpIw0/LX9T8x/GBbi6YnlN5nhaKIFkT8oFsscUKgDJYxfwfS6QsQ==",
			"dev": true,
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/get-stdin": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-8.0.0.tgz",
			"integrity": "sha512-sY22aA6xchAzprjyqmSEQv4UbAAzRN0L2dQB0NlN5acTTK9Don6nhoc3eAbUnpZiCANAMfd/+40kVdKfFygohg==",
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/get-stream": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
			"integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==",
			"dev": true,
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/get-symbol-description": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.0.0.tgz",
			"integrity": "sha512-2EmdH1YvIQiZpltCNgkuiUnyukzxM/R6NDJX31Ke3BG1Nq5b0S2PhX59UKi9vZpPDQVdqn+1IcaAwnzTT5vCjw==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.2",
				"get-intrinsic": "^1.1.1"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/getpass": {
			"version": "0.1.7",
			"resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
			"integrity": "sha512-0fzj9JxOLfJ+XGLhR8ze3unN0KZCgZwiSSDz168VERjK8Wl8kVSdcu2kspd4s4wtAa1y/qrVRiAA0WclVsu0ng==",
			"dev": true,
			"dependencies": {
				"assert-plus": "^1.0.0"
			}
		},
		"node_modules/git-raw-commits": {
			"version": "2.0.11",
			"resolved": "https://registry.npmjs.org/git-raw-commits/-/git-raw-commits-2.0.11.tgz",
			"integrity": "sha512-VnctFhw+xfj8Va1xtfEqCUD2XDrbAPSJx+hSrE5K7fGdjZruW7XV+QOrN7LF/RJyvspRiD2I0asWsxFp0ya26A==",
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
		"node_modules/git-raw-commits/node_modules/camelcase": {
			"version": "5.3.1",
			"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
			"integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/git-raw-commits/node_modules/camelcase-keys": {
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
		"node_modules/git-raw-commits/node_modules/find-up": {
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
		"node_modules/git-raw-commits/node_modules/hosted-git-info": {
			"version": "2.8.9",
			"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
			"integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
			"dev": true
		},
		"node_modules/git-raw-commits/node_modules/locate-path": {
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
		"node_modules/git-raw-commits/node_modules/p-limit": {
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
		"node_modules/git-raw-commits/node_modules/p-locate": {
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
		"node_modules/git-raw-commits/node_modules/quick-lru": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-4.0.1.tgz",
			"integrity": "sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/git-raw-commits/node_modules/read-pkg": {
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
		"node_modules/git-raw-commits/node_modules/read-pkg/node_modules/normalize-package-data": {
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
		"node_modules/git-raw-commits/node_modules/read-pkg/node_modules/type-fest": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
			"integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/git-raw-commits/node_modules/redent": {
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
		"node_modules/git-raw-commits/node_modules/semver": {
			"version": "5.7.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
			"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
			"dev": true,
			"bin": {
				"semver": "bin/semver"
			}
		},
		"node_modules/git-raw-commits/node_modules/strip-indent": {
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
		"node_modules/git-raw-commits/node_modules/trim-newlines": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-3.0.1.tgz",
			"integrity": "sha512-c1PTsA3tYrIsLGkJkzHF+w9F2EyxfXGo4UyJc4pFL++FMjnq0HJS69T3M7d//gKrFKwy429bouPescbjecU+Zw==",
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
			"integrity": "sha512-eU+GGrZgccNJcsDH5LkXR3PB9M958hxc7sbA8DFJjrv9j4L2P/eZfKhM+QD6wyzpiv+b1BpK0XrYCxkovtjSLw==",
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
		"node_modules/git-semver-tags/node_modules/camelcase": {
			"version": "5.3.1",
			"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
			"integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/git-semver-tags/node_modules/camelcase-keys": {
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
		"node_modules/git-semver-tags/node_modules/find-up": {
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
		"node_modules/git-semver-tags/node_modules/hosted-git-info": {
			"version": "2.8.9",
			"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
			"integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
			"dev": true
		},
		"node_modules/git-semver-tags/node_modules/locate-path": {
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
		"node_modules/git-semver-tags/node_modules/p-limit": {
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
		"node_modules/git-semver-tags/node_modules/p-locate": {
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
		"node_modules/git-semver-tags/node_modules/quick-lru": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-4.0.1.tgz",
			"integrity": "sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/git-semver-tags/node_modules/read-pkg": {
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
		"node_modules/git-semver-tags/node_modules/read-pkg/node_modules/normalize-package-data": {
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
		"node_modules/git-semver-tags/node_modules/read-pkg/node_modules/semver": {
			"version": "5.7.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
			"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
			"dev": true,
			"bin": {
				"semver": "bin/semver"
			}
		},
		"node_modules/git-semver-tags/node_modules/read-pkg/node_modules/type-fest": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
			"integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/git-semver-tags/node_modules/redent": {
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
		"node_modules/git-semver-tags/node_modules/semver": {
			"version": "6.3.0",
			"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
			"integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
			"dev": true,
			"bin": {
				"semver": "bin/semver.js"
			}
		},
		"node_modules/git-semver-tags/node_modules/strip-indent": {
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
		"node_modules/git-semver-tags/node_modules/trim-newlines": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-3.0.1.tgz",
			"integrity": "sha512-c1PTsA3tYrIsLGkJkzHF+w9F2EyxfXGo4UyJc4pFL++FMjnq0HJS69T3M7d//gKrFKwy429bouPescbjecU+Zw==",
			"dev": true,
			"engines": {
				"node": ">=8"
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
		"node_modules/git-up": {
			"version": "4.0.5",
			"resolved": "https://registry.npmjs.org/git-up/-/git-up-4.0.5.tgz",
			"integrity": "sha512-YUvVDg/vX3d0syBsk/CKUTib0srcQME0JyHkL5BaYdwLsiCslPWmDSi8PUMo9pXYjrryMcmsCoCgsTpSCJEQaA==",
			"dev": true,
			"dependencies": {
				"is-ssh": "^1.3.0",
				"parse-url": "^6.0.0"
			}
		},
		"node_modules/git-url-parse": {
			"version": "11.6.0",
			"resolved": "https://registry.npmjs.org/git-url-parse/-/git-url-parse-11.6.0.tgz",
			"integrity": "sha512-WWUxvJs5HsyHL6L08wOusa/IXYtMuCAhrMmnTjQPpBU0TTHyDhnOATNH3xNQz7YOQUsqIIPTGr4xiVti1Hsk5g==",
			"dev": true,
			"dependencies": {
				"git-up": "^4.0.0"
			}
		},
		"node_modules/gitconfiglocal": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/gitconfiglocal/-/gitconfiglocal-1.0.0.tgz",
			"integrity": "sha512-spLUXeTAVHxDtKsJc8FkFVgFtMdEN9qPGpL23VfSHx4fP4+Ds097IXLvymbnDH8FnmxX5Nr9bPw3A+AQ6mWEaQ==",
			"dev": true,
			"dependencies": {
				"ini": "^1.3.2"
			}
		},
		"node_modules/glob": {
			"version": "8.0.3",
			"resolved": "https://registry.npmjs.org/glob/-/glob-8.0.3.tgz",
			"integrity": "sha512-ull455NHSHI/Y1FqGaaYFaLGkNMMJbavMrEGFXG/PGrg6y7sutWHUHrz6gy6WEBH6akM1M414dWKCNs+IhKdiQ==",
			"dependencies": {
				"fs.realpath": "^1.0.0",
				"inflight": "^1.0.4",
				"inherits": "2",
				"minimatch": "^5.0.1",
				"once": "^1.3.0"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/isaacs"
			}
		},
		"node_modules/glob-parent": {
			"version": "6.0.2",
			"resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
			"integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
			"dev": true,
			"dependencies": {
				"is-glob": "^4.0.3"
			},
			"engines": {
				"node": ">=10.13.0"
			}
		},
		"node_modules/glob/node_modules/brace-expansion": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
			"integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
			"dependencies": {
				"balanced-match": "^1.0.0"
			}
		},
		"node_modules/glob/node_modules/minimatch": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.0.tgz",
			"integrity": "sha512-9TPBGGak4nHfGZsPBohm9AWg6NoT7QTCehS3BIJABslyZbzxfV78QM2Y6+i741OPZIafFAaiiEMh5OyIrJPgtg==",
			"dependencies": {
				"brace-expansion": "^2.0.1"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/globals": {
			"version": "13.15.0",
			"resolved": "https://registry.npmjs.org/globals/-/globals-13.15.0.tgz",
			"integrity": "sha512-bpzcOlgDhMG070Av0Vy5Owklpv1I6+j96GhUI7Rh7IzDCKLzboflLrrfqMu8NquDbiR4EOQk7XzJwqVJxicxog==",
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
		"node_modules/globby": {
			"version": "11.1.0",
			"resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
			"integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
			"dev": true,
			"dependencies": {
				"array-union": "^2.1.0",
				"dir-glob": "^3.0.1",
				"fast-glob": "^3.2.9",
				"ignore": "^5.2.0",
				"merge2": "^1.4.1",
				"slash": "^3.0.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/graceful-fs": {
			"version": "4.2.10",
			"resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.10.tgz",
			"integrity": "sha512-9ByhssR2fPVsNZj478qUUbKfmL0+t5BDVyjShtyZZLiK7ZDAArFFfopyOTj0M05wE2tJPisA4iTnnXl2YoPvOA==",
			"dev": true
		},
		"node_modules/growl": {
			"version": "1.10.5",
			"resolved": "https://registry.npmjs.org/growl/-/growl-1.10.5.tgz",
			"integrity": "sha512-qBr4OuELkhPenW6goKVXiv47US3clb3/IbuWF9KNKEijAy9oeHxU9IgzjvJhHkUzhaj7rOUD7+YGWqUjLp5oSA==",
			"dev": true,
			"engines": {
				"node": ">=4.x"
			}
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
		"node_modules/har-schema": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
			"integrity": "sha512-Oqluz6zhGX8cyRaTQlFMPw80bSJVG2x/cFb8ZPhUILGgHka9SsokCCOQgpveePerqidZOrT14ipqfJb7ILcW5Q==",
			"dev": true,
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/har-validator": {
			"version": "5.1.5",
			"resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
			"integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
			"deprecated": "this library is no longer supported",
			"dev": true,
			"dependencies": {
				"ajv": "^6.12.3",
				"har-schema": "^2.0.0"
			},
			"engines": {
				"node": ">=6"
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
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.0.2.tgz",
			"integrity": "sha512-tSvCKtBr9lkF0Ex0aQiP9N+OpV4zi2r/Nee5VkRDbaqv35RLYMzbwQfFSZZH0kR+Rd6302UJZ2p/bJCEoR3VoQ==",
			"dev": true,
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/has-flag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
			"integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/has-property-descriptors": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.0.tgz",
			"integrity": "sha512-62DVLZGoiEBDHQyqG4w9xCuZ7eJEwNmJRWw2VY84Oedb7WFcA27fiEVe8oUQx9hAUJ4ekurquucTGwsyO1XGdQ==",
			"dev": true,
			"dependencies": {
				"get-intrinsic": "^1.1.1"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/has-symbols": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
			"integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",
			"dev": true,
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/has-tostringtag": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.0.tgz",
			"integrity": "sha512-kFjcSNhnlGV1kyoGk7OXKSawH5JOb/LzUc5w9B02hOTO0dfFRjbHQKvg1d6cf3HbeUmtU9VbbV3qzZ2Teh97WQ==",
			"dev": true,
			"dependencies": {
				"has-symbols": "^1.0.2"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/has-unicode": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
			"integrity": "sha512-8Rf9Y83NBReMnx0gFzA8JImQACstCYWUplepDa9xprwwtmgEZUF0h/i5xSA625zB/I37EtrswSST6OXxwaaIJQ==",
			"dev": true
		},
		"node_modules/he": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
			"integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
			"dev": true,
			"bin": {
				"he": "bin/he"
			}
		},
		"node_modules/hosted-git-info": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.1.0.tgz",
			"integrity": "sha512-kyCuEOWjJqZuDbRHzL8V93NzQhwIB71oFWSyzVo+KPZI+pnQPPxucdkrOZvkLRnrf5URsQM+IJ09Dw29cRALIA==",
			"dev": true,
			"dependencies": {
				"lru-cache": "^6.0.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/htmlparser2": {
			"version": "8.0.1",
			"resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-8.0.1.tgz",
			"integrity": "sha512-4lVbmc1diZC7GUJQtRQ5yBAeUCL1exyMwmForWkRLnwyzWBFxN633SALPMGYaWZvKe9j1pRZJpauvmxENSp/EA==",
			"funding": [
				"https://github.com/fb55/htmlparser2?sponsor=1",
				{
					"type": "github",
					"url": "https://github.com/sponsors/fb55"
				}
			],
			"dependencies": {
				"domelementtype": "^2.3.0",
				"domhandler": "^5.0.2",
				"domutils": "^3.0.1",
				"entities": "^4.3.0"
			}
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
		"node_modules/http-signature": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
			"integrity": "sha512-CAbnr6Rz4CYQkLYUtSNXxQPUH2gK8f3iWexVlsnMeD+GjlsQ0Xsy1cOX+mN3dtxYomRy21CiOzU8Uhw6OwncEQ==",
			"dev": true,
			"dependencies": {
				"assert-plus": "^1.0.0",
				"jsprim": "^1.2.2",
				"sshpk": "^1.7.0"
			},
			"engines": {
				"node": ">=0.8",
				"npm": ">=1.3.7"
			}
		},
		"node_modules/https-proxy-agent": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
			"integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
			"dev": true,
			"dependencies": {
				"agent-base": "6",
				"debug": "4"
			},
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/human-signals": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
			"integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==",
			"dev": true,
			"engines": {
				"node": ">=10.17.0"
			}
		},
		"node_modules/humanize-ms": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/humanize-ms/-/humanize-ms-1.2.1.tgz",
			"integrity": "sha512-Fl70vYtsAFb/C06PTS9dZBo7ihau+Tu/DNCk/OyHhea07S+aeMWpFFkUaXRa8fI+ScZbEI8dfSxwY7gxZ9SAVQ==",
			"dev": true,
			"dependencies": {
				"ms": "^2.0.0"
			}
		},
		"node_modules/iconv-lite": {
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
		"node_modules/ignore": {
			"version": "5.2.0",
			"resolved": "https://registry.npmjs.org/ignore/-/ignore-5.2.0.tgz",
			"integrity": "sha512-CmxgYGiEPCLhfLnpPp1MoRmifwEIOgjcHXxOBjv7mY96c+eWScsOP9c112ZyLdWHi0FxHjI+4uVhKYp/gcdRmQ==",
			"dev": true,
			"engines": {
				"node": ">= 4"
			}
		},
		"node_modules/ignore-walk": {
			"version": "3.0.4",
			"resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-3.0.4.tgz",
			"integrity": "sha512-PY6Ii8o1jMRA1z4F2hRkH/xN59ox43DavKvD3oDpfurRlOJyAHpifIwpbdv1n4jt4ov0jSpw3kQ4GhJnpBL6WQ==",
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
		"node_modules/import-local": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/import-local/-/import-local-3.1.0.tgz",
			"integrity": "sha512-ASB07uLtnDs1o6EHjKpX34BKYDSqnFerfTOJL2HvMqF70LnxpjkzDB8J44oT9pu4AMPkQwf8jl6szgvNd2tRIg==",
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
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
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
		"node_modules/infer-owner": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/infer-owner/-/infer-owner-1.0.4.tgz",
			"integrity": "sha512-IClj+Xz94+d7irH5qRyfJonOdfTzuDaifE6ZPWfx0N0+/ATZCbuTPq2prFl526urkQd90WyUKIh1DfBQ2hMz9A==",
			"dev": true
		},
		"node_modules/inflight": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
			"integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
			"dependencies": {
				"once": "^1.3.0",
				"wrappy": "1"
			}
		},
		"node_modules/inherits": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
			"integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
		},
		"node_modules/ini": {
			"version": "1.3.8",
			"resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
			"integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
			"dev": true
		},
		"node_modules/init-package-json": {
			"version": "2.0.5",
			"resolved": "https://registry.npmjs.org/init-package-json/-/init-package-json-2.0.5.tgz",
			"integrity": "sha512-u1uGAtEFu3VA6HNl/yUWw57jmKEMx8SKOxHhxjGnOFUiIlFnohKDFg4ZrPpv9wWqk44nDxGJAtqjdQFm+9XXQA==",
			"dev": true,
			"dependencies": {
				"npm-package-arg": "^8.1.5",
				"promzard": "^0.3.0",
				"read": "~1.0.1",
				"read-package-json": "^4.1.1",
				"semver": "^7.3.5",
				"validate-npm-package-license": "^3.0.4",
				"validate-npm-package-name": "^3.0.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/init-package-json/node_modules/glob": {
			"version": "7.2.3",
			"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
			"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
			"dev": true,
			"dependencies": {
				"fs.realpath": "^1.0.0",
				"inflight": "^1.0.4",
				"inherits": "2",
				"minimatch": "^3.1.1",
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
		"node_modules/init-package-json/node_modules/read-package-json": {
			"version": "4.1.2",
			"resolved": "https://registry.npmjs.org/read-package-json/-/read-package-json-4.1.2.tgz",
			"integrity": "sha512-Dqer4pqzamDE2O4M55xp1qZMuLPqi4ldk2ya648FOMHRjwMzFhuxVrG04wd0c38IsvkVdr3vgHI6z+QTPdAjrQ==",
			"dev": true,
			"dependencies": {
				"glob": "^7.1.1",
				"json-parse-even-better-errors": "^2.3.0",
				"normalize-package-data": "^3.0.0",
				"npm-normalize-package-bin": "^1.0.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/inquirer": {
			"version": "7.3.3",
			"resolved": "https://registry.npmjs.org/inquirer/-/inquirer-7.3.3.tgz",
			"integrity": "sha512-JG3eIAj5V9CwcGvuOmoo6LB9kbAYT8HXffUl6memuszlwDC/qvFAJw49XJ5NROSFNPxp3iQg1GqkFhaY/CR0IA==",
			"dev": true,
			"dependencies": {
				"ansi-escapes": "^4.2.1",
				"chalk": "^4.1.0",
				"cli-cursor": "^3.1.0",
				"cli-width": "^3.0.0",
				"external-editor": "^3.0.3",
				"figures": "^3.0.0",
				"lodash": "^4.17.19",
				"mute-stream": "0.0.8",
				"run-async": "^2.4.0",
				"rxjs": "^6.6.0",
				"string-width": "^4.1.0",
				"strip-ansi": "^6.0.0",
				"through": "^2.3.6"
			},
			"engines": {
				"node": ">=8.0.0"
			}
		},
		"node_modules/internal-slot": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.0.3.tgz",
			"integrity": "sha512-O0DB1JC/sPyZl7cIo78n5dR7eUSwwpYPiXRhTzNxZVAMUuB8vlnRFyLxdrVToks6XPLVnFfbzaVd5WLjhgg+vA==",
			"dev": true,
			"dependencies": {
				"get-intrinsic": "^1.1.0",
				"has": "^1.0.3",
				"side-channel": "^1.0.4"
			},
			"engines": {
				"node": ">= 0.4"
			}
		},
		"node_modules/ip": {
			"version": "1.1.8",
			"resolved": "https://registry.npmjs.org/ip/-/ip-1.1.8.tgz",
			"integrity": "sha512-PuExPYUiu6qMBQb4l06ecm6T6ujzhmh+MeJcW9wa89PoAz5pvd4zPgN5WJV104mb6S2T1AwNIAaB70JNrLQWhg==",
			"dev": true
		},
		"node_modules/is-arrayish": {
			"version": "0.2.1",
			"resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
			"integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
			"dev": true
		},
		"node_modules/is-bigint": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.0.4.tgz",
			"integrity": "sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==",
			"dev": true,
			"dependencies": {
				"has-bigints": "^1.0.1"
			},
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
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.1.2.tgz",
			"integrity": "sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.2",
				"has-tostringtag": "^1.0.0"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/is-callable": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.4.tgz",
			"integrity": "sha512-nsuwtxZfMX67Oryl9LCQ+upnC0Z0BgpwntpS89m1H/TLF0zNfzfLMV/9Wa/6MZsj0acpEjAO0KF1xT6ZdLl95w==",
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
			"version": "2.9.0",
			"resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.9.0.tgz",
			"integrity": "sha512-+5FPy5PnwmO3lvfMb0AsoPaBG+5KHUI0wYFXOtYPnVVVspTFUuMZNfNaNVRt3FZadstu2c8x23vykRW/NBoU6A==",
			"dev": true,
			"dependencies": {
				"has": "^1.0.3"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/is-date-object": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.5.tgz",
			"integrity": "sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==",
			"dev": true,
			"dependencies": {
				"has-tostringtag": "^1.0.0"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
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
			"version": "4.0.3",
			"resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
			"integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
			"dev": true,
			"dependencies": {
				"is-extglob": "^2.1.1"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/is-lambda": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/is-lambda/-/is-lambda-1.0.1.tgz",
			"integrity": "sha1-PZh3iZ5qU+/AFgUEzeFfgubwYdU=",
			"dev": true
		},
		"node_modules/is-negative-zero": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.2.tgz",
			"integrity": "sha512-dqJvarLawXsFbNDeJW7zAz8ItJ9cd28YufuuFzh0G8pNHjJMnY08Dv7sYX2uF5UpQOwieAeOExEYAWWfu7ZZUA==",
			"dev": true,
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
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
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.0.7.tgz",
			"integrity": "sha512-k1U0IRzLMo7ZlYIfzRu23Oh6MiIFasgpb9X76eqfFZAqwH44UI4KTBvBYIZ1dSL9ZzChTB9ShHfLkR4pdW5krQ==",
			"dev": true,
			"dependencies": {
				"has-tostringtag": "^1.0.0"
			},
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
		"node_modules/is-regex": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.4.tgz",
			"integrity": "sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.2",
				"has-tostringtag": "^1.0.0"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/is-shared-array-buffer": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.2.tgz",
			"integrity": "sha512-sqN2UDu1/0y6uvXyStCOzyhAjCSlHceFoMKJW8W9EU9cvic/QdsZ0kEU93HEy3IUEFZIiH/3w+AH/UQbPHNdhA==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.2"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/is-ssh": {
			"version": "1.3.3",
			"resolved": "https://registry.npmjs.org/is-ssh/-/is-ssh-1.3.3.tgz",
			"integrity": "sha512-NKzJmQzJfEEma3w5cJNcUMxoXfDjz0Zj0eyCalHn2E6VOwlzjZo0yuO2fcBSf8zhFuVCL/82/r5gRcoi6aEPVQ==",
			"dev": true,
			"dependencies": {
				"protocols": "^1.1.0"
			}
		},
		"node_modules/is-stream": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
			"integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/is-string": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.7.tgz",
			"integrity": "sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==",
			"dev": true,
			"dependencies": {
				"has-tostringtag": "^1.0.0"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/is-symbol": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.4.tgz",
			"integrity": "sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==",
			"dev": true,
			"dependencies": {
				"has-symbols": "^1.0.2"
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
		"node_modules/is-weakref": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.0.2.tgz",
			"integrity": "sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.2"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
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
		"node_modules/isstream": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
			"integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
			"dev": true
		},
		"node_modules/js-tokens": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
			"integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
			"dev": true
		},
		"node_modules/js-yaml": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
			"integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
			"dev": true,
			"dependencies": {
				"argparse": "^2.0.1"
			},
			"bin": {
				"js-yaml": "bin/js-yaml.js"
			}
		},
		"node_modules/jsbn": {
			"version": "0.1.1",
			"resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
			"integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
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
		"node_modules/json-schema": {
			"version": "0.4.0",
			"resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.4.0.tgz",
			"integrity": "sha512-es94M3nTIfsEPisRafak+HDLfHXnKBhV3vU5eqPcS3flIWqcxJWgXHXiey3YrpaNsanY5ei1VoYEbOzijuq9BA==",
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
		"node_modules/jsprim": {
			"version": "1.4.2",
			"resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.2.tgz",
			"integrity": "sha512-P2bSOMAc/ciLz6DzgjVlGJP9+BrJWu5UDGK70C2iweC5QBIeFf0ZXRvGjEj2uYgrY2MkAAhsSWHDWlFtEroZWw==",
			"dev": true,
			"dependencies": {
				"assert-plus": "1.0.0",
				"extsprintf": "1.3.0",
				"json-schema": "0.4.0",
				"verror": "1.10.0"
			},
			"engines": {
				"node": ">=0.6.0"
			}
		},
		"node_modules/just-extend": {
			"version": "4.2.1",
			"resolved": "https://registry.npmjs.org/just-extend/-/just-extend-4.2.1.tgz",
			"integrity": "sha512-g3UB796vUFIY90VIv/WX3L2c8CS2MdWUww3CNrYmqza1Fg0DURc2K/O4YrnklBdQarSJ/y8JnJYDGc+1iumQjg=="
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
		"node_modules/lerna": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/lerna/-/lerna-4.0.0.tgz",
			"integrity": "sha512-DD/i1znurfOmNJb0OBw66NmNqiM8kF6uIrzrJ0wGE3VNdzeOhz9ziWLYiRaZDGGwgbcjOo6eIfcx9O5Qynz+kg==",
			"dev": true,
			"dependencies": {
				"@lerna/add": "4.0.0",
				"@lerna/bootstrap": "4.0.0",
				"@lerna/changed": "4.0.0",
				"@lerna/clean": "4.0.0",
				"@lerna/cli": "4.0.0",
				"@lerna/create": "4.0.0",
				"@lerna/diff": "4.0.0",
				"@lerna/exec": "4.0.0",
				"@lerna/import": "4.0.0",
				"@lerna/info": "4.0.0",
				"@lerna/init": "4.0.0",
				"@lerna/link": "4.0.0",
				"@lerna/list": "4.0.0",
				"@lerna/publish": "4.0.0",
				"@lerna/run": "4.0.0",
				"@lerna/version": "4.0.0",
				"import-local": "^3.0.2",
				"npmlog": "^4.1.2"
			},
			"bin": {
				"lerna": "cli.js"
			},
			"engines": {
				"node": ">= 10.18.0"
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
		"node_modules/libnpmaccess": {
			"version": "4.0.3",
			"resolved": "https://registry.npmjs.org/libnpmaccess/-/libnpmaccess-4.0.3.tgz",
			"integrity": "sha512-sPeTSNImksm8O2b6/pf3ikv4N567ERYEpeKRPSmqlNt1dTZbvgpJIzg5vAhXHpw2ISBsELFRelk0jEahj1c6nQ==",
			"dev": true,
			"dependencies": {
				"aproba": "^2.0.0",
				"minipass": "^3.1.1",
				"npm-package-arg": "^8.1.2",
				"npm-registry-fetch": "^11.0.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/libnpmaccess/node_modules/make-fetch-happen": {
			"version": "9.1.0",
			"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-9.1.0.tgz",
			"integrity": "sha512-+zopwDy7DNknmwPQplem5lAZX/eCOzSvSNNcSKm5eVwTkOBzoktEfXsa9L23J/GIRhxRsaxzkPEhrJEpE2F4Gg==",
			"dev": true,
			"dependencies": {
				"agentkeepalive": "^4.1.3",
				"cacache": "^15.2.0",
				"http-cache-semantics": "^4.1.0",
				"http-proxy-agent": "^4.0.1",
				"https-proxy-agent": "^5.0.0",
				"is-lambda": "^1.0.1",
				"lru-cache": "^6.0.0",
				"minipass": "^3.1.3",
				"minipass-collect": "^1.0.2",
				"minipass-fetch": "^1.3.2",
				"minipass-flush": "^1.0.5",
				"minipass-pipeline": "^1.2.4",
				"negotiator": "^0.6.2",
				"promise-retry": "^2.0.1",
				"socks-proxy-agent": "^6.0.0",
				"ssri": "^8.0.0"
			},
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/libnpmaccess/node_modules/npm-registry-fetch": {
			"version": "11.0.0",
			"resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-11.0.0.tgz",
			"integrity": "sha512-jmlgSxoDNuhAtxUIG6pVwwtz840i994dL14FoNVZisrmZW5kWd63IUTNv1m/hyRSGSqWjCUp/YZlS1BJyNp9XA==",
			"dev": true,
			"dependencies": {
				"make-fetch-happen": "^9.0.1",
				"minipass": "^3.1.3",
				"minipass-fetch": "^1.3.0",
				"minipass-json-stream": "^1.0.1",
				"minizlib": "^2.0.0",
				"npm-package-arg": "^8.0.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/libnpmaccess/node_modules/socks-proxy-agent": {
			"version": "6.2.0",
			"resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-6.2.0.tgz",
			"integrity": "sha512-wWqJhjb32Q6GsrUqzuFkukxb/zzide5quXYcMVpIjxalDBBYy2nqKCFQ/9+Ie4dvOYSQdOk3hUlZSdzZOd3zMQ==",
			"dev": true,
			"dependencies": {
				"agent-base": "^6.0.2",
				"debug": "^4.3.3",
				"socks": "^2.6.2"
			},
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/libnpmpublish": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/libnpmpublish/-/libnpmpublish-4.0.2.tgz",
			"integrity": "sha512-+AD7A2zbVeGRCFI2aO//oUmapCwy7GHqPXFJh3qpToSRNU+tXKJ2YFUgjt04LPPAf2dlEH95s6EhIHM1J7bmOw==",
			"dev": true,
			"dependencies": {
				"normalize-package-data": "^3.0.2",
				"npm-package-arg": "^8.1.2",
				"npm-registry-fetch": "^11.0.0",
				"semver": "^7.1.3",
				"ssri": "^8.0.1"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/libnpmpublish/node_modules/make-fetch-happen": {
			"version": "9.1.0",
			"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-9.1.0.tgz",
			"integrity": "sha512-+zopwDy7DNknmwPQplem5lAZX/eCOzSvSNNcSKm5eVwTkOBzoktEfXsa9L23J/GIRhxRsaxzkPEhrJEpE2F4Gg==",
			"dev": true,
			"dependencies": {
				"agentkeepalive": "^4.1.3",
				"cacache": "^15.2.0",
				"http-cache-semantics": "^4.1.0",
				"http-proxy-agent": "^4.0.1",
				"https-proxy-agent": "^5.0.0",
				"is-lambda": "^1.0.1",
				"lru-cache": "^6.0.0",
				"minipass": "^3.1.3",
				"minipass-collect": "^1.0.2",
				"minipass-fetch": "^1.3.2",
				"minipass-flush": "^1.0.5",
				"minipass-pipeline": "^1.2.4",
				"negotiator": "^0.6.2",
				"promise-retry": "^2.0.1",
				"socks-proxy-agent": "^6.0.0",
				"ssri": "^8.0.0"
			},
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/libnpmpublish/node_modules/npm-registry-fetch": {
			"version": "11.0.0",
			"resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-11.0.0.tgz",
			"integrity": "sha512-jmlgSxoDNuhAtxUIG6pVwwtz840i994dL14FoNVZisrmZW5kWd63IUTNv1m/hyRSGSqWjCUp/YZlS1BJyNp9XA==",
			"dev": true,
			"dependencies": {
				"make-fetch-happen": "^9.0.1",
				"minipass": "^3.1.3",
				"minipass-fetch": "^1.3.0",
				"minipass-json-stream": "^1.0.1",
				"minizlib": "^2.0.0",
				"npm-package-arg": "^8.0.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/libnpmpublish/node_modules/socks-proxy-agent": {
			"version": "6.2.0",
			"resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-6.2.0.tgz",
			"integrity": "sha512-wWqJhjb32Q6GsrUqzuFkukxb/zzide5quXYcMVpIjxalDBBYy2nqKCFQ/9+Ie4dvOYSQdOk3hUlZSdzZOd3zMQ==",
			"dev": true,
			"dependencies": {
				"agent-base": "^6.0.2",
				"debug": "^4.3.3",
				"socks": "^2.6.2"
			},
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/lines-and-columns": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
			"integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
			"dev": true
		},
		"node_modules/load-json-file": {
			"version": "6.2.0",
			"resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-6.2.0.tgz",
			"integrity": "sha512-gUD/epcRms75Cw8RT1pUdHugZYM5ce64ucs2GEISABwkRsOQr0q2wm/MV2TKThycIe5e0ytRweW2RZxclogCdQ==",
			"dev": true,
			"dependencies": {
				"graceful-fs": "^4.1.15",
				"parse-json": "^5.0.0",
				"strip-bom": "^4.0.0",
				"type-fest": "^0.6.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/load-json-file/node_modules/type-fest": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
			"integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/locate-path": {
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
		"node_modules/lodash": {
			"version": "4.17.21",
			"resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
			"integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
			"dev": true
		},
		"node_modules/lodash._reinterpolate": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/lodash._reinterpolate/-/lodash._reinterpolate-3.0.0.tgz",
			"integrity": "sha1-DM8tiRZq8Ds2Y8eWU4t1rG4RTZ0=",
			"dev": true
		},
		"node_modules/lodash.clonedeep": {
			"version": "4.5.0",
			"resolved": "https://registry.npmjs.org/lodash.clonedeep/-/lodash.clonedeep-4.5.0.tgz",
			"integrity": "sha1-4j8/nE+Pvd6HJSnBBxhXoIblzO8="
		},
		"node_modules/lodash.get": {
			"version": "4.4.2",
			"resolved": "https://registry.npmjs.org/lodash.get/-/lodash.get-4.4.2.tgz",
			"integrity": "sha1-LRd/ZS+jHpObRDjVNBSZ36OCXpk="
		},
		"node_modules/lodash.ismatch": {
			"version": "4.4.0",
			"resolved": "https://registry.npmjs.org/lodash.ismatch/-/lodash.ismatch-4.4.0.tgz",
			"integrity": "sha1-dWy1FQyjum8RCFp4hJZF8Yj4Xzc=",
			"dev": true
		},
		"node_modules/lodash.merge": {
			"version": "4.6.2",
			"resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
			"integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
			"dev": true
		},
		"node_modules/lodash.omit": {
			"version": "4.5.0",
			"resolved": "https://registry.npmjs.org/lodash.omit/-/lodash.omit-4.5.0.tgz",
			"integrity": "sha1-brGa5aHuHdnfC5aeZs4Lf6MLXmA="
		},
		"node_modules/lodash.pick": {
			"version": "4.4.0",
			"resolved": "https://registry.npmjs.org/lodash.pick/-/lodash.pick-4.4.0.tgz",
			"integrity": "sha1-UvBWEP/53tQiYRRB7R/BI6AwAbM="
		},
		"node_modules/lodash.template": {
			"version": "4.5.0",
			"resolved": "https://registry.npmjs.org/lodash.template/-/lodash.template-4.5.0.tgz",
			"integrity": "sha512-84vYFxIkmidUiFxidA/KjjH9pAycqW+h980j7Fuz5qxRtO9pgB7MDFTdys1N7A5mcucRiDyEq4fusljItR1T/A==",
			"dev": true,
			"dependencies": {
				"lodash._reinterpolate": "^3.0.0",
				"lodash.templatesettings": "^4.0.0"
			}
		},
		"node_modules/lodash.templatesettings": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/lodash.templatesettings/-/lodash.templatesettings-4.2.0.tgz",
			"integrity": "sha512-stgLz+i3Aa9mZgnjr/O+v9ruKZsPsndy7qPZOchbqk2cnTU1ZaldKK+v7m54WoKIyxiuMZTKT2H81F8BeAc3ZQ==",
			"dev": true,
			"dependencies": {
				"lodash._reinterpolate": "^3.0.0"
			}
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
		"node_modules/make-fetch-happen": {
			"version": "8.0.14",
			"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-8.0.14.tgz",
			"integrity": "sha512-EsS89h6l4vbfJEtBZnENTOFk8mCRpY5ru36Xe5bcX1KYIli2mkSHqoFsp5O1wMDvTJJzxe/4THpCTtygjeeGWQ==",
			"dev": true,
			"dependencies": {
				"agentkeepalive": "^4.1.3",
				"cacache": "^15.0.5",
				"http-cache-semantics": "^4.1.0",
				"http-proxy-agent": "^4.0.1",
				"https-proxy-agent": "^5.0.0",
				"is-lambda": "^1.0.1",
				"lru-cache": "^6.0.0",
				"minipass": "^3.1.3",
				"minipass-collect": "^1.0.2",
				"minipass-fetch": "^1.3.2",
				"minipass-flush": "^1.0.5",
				"minipass-pipeline": "^1.2.4",
				"promise-retry": "^2.0.1",
				"socks-proxy-agent": "^5.0.0",
				"ssri": "^8.0.0"
			},
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/map-obj": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/map-obj/-/map-obj-4.3.0.tgz",
			"integrity": "sha512-hdN1wVrZbb29eBGiGjJbeP8JbKjq1urkHJ/LIP/NY48MZ1QVXUsQBV1G1zvYFHn1XE06cwjBsOI2K3Ulnj1YXQ==",
			"dev": true,
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/meow": {
			"version": "10.1.2",
			"resolved": "https://registry.npmjs.org/meow/-/meow-10.1.2.tgz",
			"integrity": "sha512-zbuAlN+V/sXlbGchNS9WTWjUzeamwMt/BApKCJi7B0QyZstZaMx0n4Unll/fg0njGtMdC9UP5SAscvOCLYdM+Q==",
			"dev": true,
			"dependencies": {
				"@types/minimist": "^1.2.2",
				"camelcase-keys": "^7.0.0",
				"decamelize": "^5.0.0",
				"decamelize-keys": "^1.1.0",
				"hard-rejection": "^2.1.0",
				"minimist-options": "4.1.0",
				"normalize-package-data": "^3.0.2",
				"read-pkg-up": "^8.0.0",
				"redent": "^4.0.0",
				"trim-newlines": "^4.0.2",
				"type-fest": "^1.2.2",
				"yargs-parser": "^20.2.9"
			},
			"engines": {
				"node": "^12.20.0 || ^14.13.1 || >=16.0.0"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/meow/node_modules/read-pkg": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-6.0.0.tgz",
			"integrity": "sha512-X1Fu3dPuk/8ZLsMhEj5f4wFAF0DWoK7qhGJvgaijocXxBmSToKfbFtqbxMO7bVjNA1dmE5huAzjXj/ey86iw9Q==",
			"dev": true,
			"dependencies": {
				"@types/normalize-package-data": "^2.4.0",
				"normalize-package-data": "^3.0.2",
				"parse-json": "^5.2.0",
				"type-fest": "^1.0.1"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/meow/node_modules/read-pkg-up": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-8.0.0.tgz",
			"integrity": "sha512-snVCqPczksT0HS2EC+SxUndvSzn6LRCwpfSvLrIfR5BKDQQZMaI6jPRC9dYvYFDRAuFEAnkwww8kBBNE/3VvzQ==",
			"dev": true,
			"dependencies": {
				"find-up": "^5.0.0",
				"read-pkg": "^6.0.0",
				"type-fest": "^1.0.1"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/meow/node_modules/type-fest": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-1.4.0.tgz",
			"integrity": "sha512-yGSza74xk0UG8k+pLh5oeoYirvIiWo5t0/o3zHHAO2tRDiZcxWP7fywNlXhqb6/r6sWvwi+RsyQMWhVLe4BVuA==",
			"dev": true,
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/meow/node_modules/yargs-parser": {
			"version": "20.2.9",
			"resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",
			"integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==",
			"dev": true,
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/merge-stream": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
			"integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
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
			"version": "4.0.5",
			"resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.5.tgz",
			"integrity": "sha512-DMy+ERcEW2q8Z2Po+WNXuw3c5YaUSFjAO5GsJqfEl7UjvtIuFKO6ZrKvcItdy98dwFI2N1tg3zNIdKaQT+aNdA==",
			"dev": true,
			"dependencies": {
				"braces": "^3.0.2",
				"picomatch": "^2.3.1"
			},
			"engines": {
				"node": ">=8.6"
			}
		},
		"node_modules/mime-db": {
			"version": "1.52.0",
			"resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
			"integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
			"dev": true,
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/mime-types": {
			"version": "2.1.35",
			"resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
			"integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
			"dev": true,
			"dependencies": {
				"mime-db": "1.52.0"
			},
			"engines": {
				"node": ">= 0.6"
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
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
			"integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
			"dependencies": {
				"brace-expansion": "^1.1.7"
			},
			"engines": {
				"node": "*"
			}
		},
		"node_modules/minimist": {
			"version": "1.2.6",
			"resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.6.tgz",
			"integrity": "sha512-Jsjnk4bw3YJqYzbdyBiNsPWHPfO++UGG749Cxs6peCu5Xg4nrena6OVxOYxrQTqww0Jmwt+Ref8rggumkTLz9Q==",
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
		"node_modules/minipass": {
			"version": "3.1.6",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-3.1.6.tgz",
			"integrity": "sha512-rty5kpw9/z8SX9dmxblFA6edItUmwJgMeYDZRrwlIVN27i8gysGbznJwUggw2V/FVqFSDdWy040ZPS811DYAqQ==",
			"dev": true,
			"dependencies": {
				"yallist": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/minipass-collect": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/minipass-collect/-/minipass-collect-1.0.2.tgz",
			"integrity": "sha512-6T6lH0H8OG9kITm/Jm6tdooIbogG9e0tLgpY6mphXSm/A9u8Nq1ryBG+Qspiub9LjWlBPsPS3tWQ/Botq4FdxA==",
			"dev": true,
			"dependencies": {
				"minipass": "^3.0.0"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/minipass-fetch": {
			"version": "1.4.1",
			"resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-1.4.1.tgz",
			"integrity": "sha512-CGH1eblLq26Y15+Azk7ey4xh0J/XfJfrCox5LDJiKqI2Q2iwOLOKrlmIaODiSQS8d18jalF6y2K2ePUm0CmShw==",
			"dev": true,
			"dependencies": {
				"minipass": "^3.1.0",
				"minipass-sized": "^1.0.3",
				"minizlib": "^2.0.0"
			},
			"engines": {
				"node": ">=8"
			},
			"optionalDependencies": {
				"encoding": "^0.1.12"
			}
		},
		"node_modules/minipass-flush": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/minipass-flush/-/minipass-flush-1.0.5.tgz",
			"integrity": "sha512-JmQSYYpPUqX5Jyn1mXaRwOda1uQ8HP5KAT/oDSLCzt1BYRhQU0/hDtsB1ufZfEEzMZ9aAVmsBw8+FWsIXlClWw==",
			"dev": true,
			"dependencies": {
				"minipass": "^3.0.0"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/minipass-json-stream": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/minipass-json-stream/-/minipass-json-stream-1.0.1.tgz",
			"integrity": "sha512-ODqY18UZt/I8k+b7rl2AENgbWE8IDYam+undIJONvigAz8KR5GWblsFTEfQs0WODsjbSXWlm+JHEv8Gr6Tfdbg==",
			"dev": true,
			"dependencies": {
				"jsonparse": "^1.3.1",
				"minipass": "^3.0.0"
			}
		},
		"node_modules/minipass-pipeline": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/minipass-pipeline/-/minipass-pipeline-1.2.4.tgz",
			"integrity": "sha512-xuIq7cIOt09RPRJ19gdi4b+RiNvDFYe5JH+ggNvBqGqpQXcru3PcRmOZuHBKWK1Txf9+cQ+HMVN4d6z46LZP7A==",
			"dev": true,
			"dependencies": {
				"minipass": "^3.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/minipass-sized": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/minipass-sized/-/minipass-sized-1.0.3.tgz",
			"integrity": "sha512-MbkQQ2CTiBMlA2Dm/5cY+9SWFEN8pzzOXi6rlM5Xxq0Yqbda5ZQy9sU75a673FE9ZK0Zsbr6Y5iP6u9nktfg2g==",
			"dev": true,
			"dependencies": {
				"minipass": "^3.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/minizlib": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
			"integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
			"dev": true,
			"dependencies": {
				"minipass": "^3.0.0",
				"yallist": "^4.0.0"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/mkdirp": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
			"integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
			"dev": true,
			"bin": {
				"mkdirp": "bin/cmd.js"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/mkdirp-infer-owner": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/mkdirp-infer-owner/-/mkdirp-infer-owner-2.0.0.tgz",
			"integrity": "sha512-sdqtiFt3lkOaYvTXSRIUjkIdPTcxgv5+fgqYE/5qgwdw12cOrAuzzgzvVExIkH/ul1oeHN3bCLOWSG3XOqbKKw==",
			"dev": true,
			"dependencies": {
				"chownr": "^2.0.0",
				"infer-owner": "^1.0.4",
				"mkdirp": "^1.0.3"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/mocha": {
			"version": "9.2.2",
			"resolved": "https://registry.npmjs.org/mocha/-/mocha-9.2.2.tgz",
			"integrity": "sha512-L6XC3EdwT6YrIk0yXpavvLkn8h+EU+Y5UcCHKECyMbdUIxyMuZj4bX4U9e1nvnvUUvQVsV2VHQr5zLdcUkhW/g==",
			"dev": true,
			"dependencies": {
				"@ungap/promise-all-settled": "1.1.2",
				"ansi-colors": "4.1.1",
				"browser-stdout": "1.3.1",
				"chokidar": "3.5.3",
				"debug": "4.3.3",
				"diff": "5.0.0",
				"escape-string-regexp": "4.0.0",
				"find-up": "5.0.0",
				"glob": "7.2.0",
				"growl": "1.10.5",
				"he": "1.2.0",
				"js-yaml": "4.1.0",
				"log-symbols": "4.1.0",
				"minimatch": "4.2.1",
				"ms": "2.1.3",
				"nanoid": "3.3.1",
				"serialize-javascript": "6.0.0",
				"strip-json-comments": "3.1.1",
				"supports-color": "8.1.1",
				"which": "2.0.2",
				"workerpool": "6.2.0",
				"yargs": "16.2.0",
				"yargs-parser": "20.2.4",
				"yargs-unparser": "2.0.0"
			},
			"bin": {
				"_mocha": "bin/_mocha",
				"mocha": "bin/mocha"
			},
			"engines": {
				"node": ">= 12.0.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/mochajs"
			}
		},
		"node_modules/mocha/node_modules/debug": {
			"version": "4.3.3",
			"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.3.tgz",
			"integrity": "sha512-/zxw5+vh1Tfv+4Qn7a5nsbcJKPaSvCDhojn6FEl9vupwK2VCSDtEiEtqr8DFtzYFOdz63LBkxec7DYuc2jon6Q==",
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
		"node_modules/mocha/node_modules/debug/node_modules/ms": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
			"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
			"dev": true
		},
		"node_modules/mocha/node_modules/glob": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.0.tgz",
			"integrity": "sha512-lmLf6gtyrPq8tTjSmrO94wBeQbFR3HbLHbuyD69wuyQkImp2hWqMGB47OX65FBkPffO641IP9jWa1z4ivqG26Q==",
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
		"node_modules/mocha/node_modules/glob/node_modules/minimatch": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
			"integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
			"dev": true,
			"dependencies": {
				"brace-expansion": "^1.1.7"
			},
			"engines": {
				"node": "*"
			}
		},
		"node_modules/mocha/node_modules/minimatch": {
			"version": "4.2.1",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-4.2.1.tgz",
			"integrity": "sha512-9Uq1ChtSZO+Mxa/CL1eGizn2vRn3MlLgzhT0Iz8zaY8NdvxvB0d5QdPFmCKf7JKA9Lerx5vRrnwO03jsSfGG9g==",
			"dev": true,
			"dependencies": {
				"brace-expansion": "^1.1.7"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/mocha/node_modules/ms": {
			"version": "2.1.3",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
			"integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
			"dev": true
		},
		"node_modules/mocha/node_modules/supports-color": {
			"version": "8.1.1",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
			"integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
			"dev": true,
			"dependencies": {
				"has-flag": "^4.0.0"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/chalk/supports-color?sponsor=1"
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
		"node_modules/multimatch": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/multimatch/-/multimatch-5.0.0.tgz",
			"integrity": "sha512-ypMKuglUrZUD99Tk2bUQ+xNQj43lPEfAeX2o9cTteAmShXy2VHDJpuwu1o0xqoKCt9jLVAvwyFKdLTPXKAfJyA==",
			"dev": true,
			"dependencies": {
				"@types/minimatch": "^3.0.3",
				"array-differ": "^3.0.0",
				"array-union": "^2.1.0",
				"arrify": "^2.0.1",
				"minimatch": "^3.0.4"
			},
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/multimatch/node_modules/arrify": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/arrify/-/arrify-2.0.1.tgz",
			"integrity": "sha512-3duEwti880xqi4eAMN8AyR4a0ByT90zoYdLlevfrvU43vb0YZwZVfxOgxWrLXXXpyugL0hNZc9G6BiB5B3nUug==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/mute-stream": {
			"version": "0.0.8",
			"resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.8.tgz",
			"integrity": "sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA==",
			"dev": true
		},
		"node_modules/nanoid": {
			"version": "3.3.1",
			"resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.1.tgz",
			"integrity": "sha512-n6Vs/3KGyxPQd6uO0eH4Bv0ojGSUvuLlIHtC3Y0kEO23YRge8H9x1GCzLn28YX0H66pMkxuaeESFq4tKISKwdw==",
			"dev": true,
			"bin": {
				"nanoid": "bin/nanoid.cjs"
			},
			"engines": {
				"node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
			}
		},
		"node_modules/natural-compare": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
			"integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
			"dev": true
		},
		"node_modules/negotiator": {
			"version": "0.6.3",
			"resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
			"integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
			"dev": true,
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/neo-async": {
			"version": "2.6.2",
			"resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
			"integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
			"dev": true
		},
		"node_modules/nise": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/nise/-/nise-5.1.1.tgz",
			"integrity": "sha512-yr5kW2THW1AkxVmCnKEh4nbYkJdB3I7LUkiUgOvEkOp414mc2UMaHMA7pjq1nYowhdoJZGwEKGaQVbxfpWj10A==",
			"dependencies": {
				"@sinonjs/commons": "^1.8.3",
				"@sinonjs/fake-timers": ">=5",
				"@sinonjs/text-encoding": "^0.7.1",
				"just-extend": "^4.0.2",
				"path-to-regexp": "^1.7.0"
			}
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
		"node_modules/node-fetch/node_modules/tr46": {
			"version": "0.0.3",
			"resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
			"integrity": "sha1-gYT9NH2snNwYWZLzpmIuFLnZq2o=",
			"dev": true
		},
		"node_modules/node-fetch/node_modules/webidl-conversions": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
			"integrity": "sha1-JFNCdeKnvGvnvIZhHMFq4KVlSHE=",
			"dev": true
		},
		"node_modules/node-fetch/node_modules/whatwg-url": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
			"integrity": "sha1-lmRU6HZUYuN2RNNib2dCzotwll0=",
			"dev": true,
			"dependencies": {
				"tr46": "~0.0.3",
				"webidl-conversions": "^3.0.0"
			}
		},
		"node_modules/node-gyp": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-5.1.1.tgz",
			"integrity": "sha512-WH0WKGi+a4i4DUt2mHnvocex/xPLp9pYt5R6M2JdFB7pJ7Z34hveZ4nDTGTiLXCkitA9T8HFZjhinBCiVHYcWw==",
			"dev": true,
			"dependencies": {
				"env-paths": "^2.2.0",
				"glob": "^7.1.4",
				"graceful-fs": "^4.2.2",
				"mkdirp": "^0.5.1",
				"nopt": "^4.0.1",
				"npmlog": "^4.1.2",
				"request": "^2.88.0",
				"rimraf": "^2.6.3",
				"semver": "^5.7.1",
				"tar": "^4.4.12",
				"which": "^1.3.1"
			},
			"bin": {
				"node-gyp": "bin/node-gyp.js"
			},
			"engines": {
				"node": ">= 6.0.0"
			}
		},
		"node_modules/node-gyp/node_modules/chownr": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
			"integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg==",
			"dev": true
		},
		"node_modules/node-gyp/node_modules/fs-minipass": {
			"version": "1.2.7",
			"resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-1.2.7.tgz",
			"integrity": "sha512-GWSSJGFy4e9GUeCcbIkED+bgAoFyj7XF1mV8rma3QW4NIqX9Kyx79N/PF61H5udOV3aY1IaMLs6pGbH71nlCTA==",
			"dev": true,
			"dependencies": {
				"minipass": "^2.6.0"
			}
		},
		"node_modules/node-gyp/node_modules/glob": {
			"version": "7.2.3",
			"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
			"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
			"dev": true,
			"dependencies": {
				"fs.realpath": "^1.0.0",
				"inflight": "^1.0.4",
				"inherits": "2",
				"minimatch": "^3.1.1",
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
		"node_modules/node-gyp/node_modules/minipass": {
			"version": "2.9.0",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-2.9.0.tgz",
			"integrity": "sha512-wxfUjg9WebH+CUDX/CdbRlh5SmfZiy/hpkxaRI16Y9W56Pa75sWgd/rvFilSgrauD9NyFymP/+JFV3KwzIsJeg==",
			"dev": true,
			"dependencies": {
				"safe-buffer": "^5.1.2",
				"yallist": "^3.0.0"
			}
		},
		"node_modules/node-gyp/node_modules/minizlib": {
			"version": "1.3.3",
			"resolved": "https://registry.npmjs.org/minizlib/-/minizlib-1.3.3.tgz",
			"integrity": "sha512-6ZYMOEnmVsdCeTJVE0W9ZD+pVnE8h9Hma/iOwwRDsdQoePpoX56/8B6z3P9VNwppJuBKNRuFDRNRqRWexT9G9Q==",
			"dev": true,
			"dependencies": {
				"minipass": "^2.9.0"
			}
		},
		"node_modules/node-gyp/node_modules/mkdirp": {
			"version": "0.5.6",
			"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz",
			"integrity": "sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==",
			"dev": true,
			"dependencies": {
				"minimist": "^1.2.6"
			},
			"bin": {
				"mkdirp": "bin/cmd.js"
			}
		},
		"node_modules/node-gyp/node_modules/rimraf": {
			"version": "2.7.1",
			"resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
			"integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
			"dev": true,
			"dependencies": {
				"glob": "^7.1.3"
			},
			"bin": {
				"rimraf": "bin.js"
			}
		},
		"node_modules/node-gyp/node_modules/semver": {
			"version": "5.7.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
			"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
			"dev": true,
			"bin": {
				"semver": "bin/semver"
			}
		},
		"node_modules/node-gyp/node_modules/tar": {
			"version": "4.4.19",
			"resolved": "https://registry.npmjs.org/tar/-/tar-4.4.19.tgz",
			"integrity": "sha512-a20gEsvHnWe0ygBY8JbxoM4w3SJdhc7ZAuxkLqh+nvNQN2IOt0B5lLgM490X5Hl8FF0dl0tOf2ewFYAlIFgzVA==",
			"dev": true,
			"dependencies": {
				"chownr": "^1.1.4",
				"fs-minipass": "^1.2.7",
				"minipass": "^2.9.0",
				"minizlib": "^1.3.3",
				"mkdirp": "^0.5.5",
				"safe-buffer": "^5.2.1",
				"yallist": "^3.1.1"
			},
			"engines": {
				"node": ">=4.5"
			}
		},
		"node_modules/node-gyp/node_modules/which": {
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
		"node_modules/node-gyp/node_modules/yallist": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
			"integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
			"dev": true
		},
		"node_modules/nopt": {
			"version": "4.0.3",
			"resolved": "https://registry.npmjs.org/nopt/-/nopt-4.0.3.tgz",
			"integrity": "sha512-CvaGwVMztSMJLOeXPrez7fyfObdZqNUK1cPAEzLHrTybIua9pMdmmPR5YwtfNftIOMv3DPUhFaxsZMNTQO20Kg==",
			"dev": true,
			"dependencies": {
				"abbrev": "1",
				"osenv": "^0.1.4"
			},
			"bin": {
				"nopt": "bin/nopt.js"
			}
		},
		"node_modules/normalize-package-data": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.3.tgz",
			"integrity": "sha512-p2W1sgqij3zMMyRC067Dg16bfzVH+w7hyegmpIvZ4JNjqtGOVAIvLmjBx3yP7YTe9vKJgkoNOPjwQGogDoMXFA==",
			"dev": true,
			"dependencies": {
				"hosted-git-info": "^4.0.1",
				"is-core-module": "^2.5.0",
				"semver": "^7.3.4",
				"validate-npm-package-license": "^3.0.1"
			},
			"engines": {
				"node": ">=10"
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
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-6.1.0.tgz",
			"integrity": "sha512-DlL+XwOy3NxAQ8xuC0okPgK46iuVNAK01YN7RueYBqqFeGsBjV9XmCAzAdgt+667bCl5kPh9EqKKDwnaPG1I7A==",
			"dev": true,
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/npm-bundled": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/npm-bundled/-/npm-bundled-1.1.2.tgz",
			"integrity": "sha512-x5DHup0SuyQcmL3s7Rx/YQ8sbw/Hzg0rj48eN0dV7hf5cmQq5PXIeioroH3raV1QC1yh3uTYuMThvEQF3iKgGQ==",
			"dev": true,
			"dependencies": {
				"npm-normalize-package-bin": "^1.0.1"
			}
		},
		"node_modules/npm-install-checks": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/npm-install-checks/-/npm-install-checks-4.0.0.tgz",
			"integrity": "sha512-09OmyDkNLYwqKPOnbI8exiOZU2GVVmQp7tgez2BPi5OZC8M82elDAps7sxC4l//uSUtotWqoEIDwjRvWH4qz8w==",
			"dev": true,
			"dependencies": {
				"semver": "^7.1.1"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/npm-lifecycle": {
			"version": "3.1.5",
			"resolved": "https://registry.npmjs.org/npm-lifecycle/-/npm-lifecycle-3.1.5.tgz",
			"integrity": "sha512-lDLVkjfZmvmfvpvBzA4vzee9cn+Me4orq0QF8glbswJVEbIcSNWib7qGOffolysc3teCqbbPZZkzbr3GQZTL1g==",
			"dev": true,
			"dependencies": {
				"byline": "^5.0.0",
				"graceful-fs": "^4.1.15",
				"node-gyp": "^5.0.2",
				"resolve-from": "^4.0.0",
				"slide": "^1.1.6",
				"uid-number": "0.0.6",
				"umask": "^1.1.0",
				"which": "^1.3.1"
			}
		},
		"node_modules/npm-lifecycle/node_modules/which": {
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
		"node_modules/npm-normalize-package-bin": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/npm-normalize-package-bin/-/npm-normalize-package-bin-1.0.1.tgz",
			"integrity": "sha512-EPfafl6JL5/rU+ot6P3gRSCpPDW5VmIzX959Ob1+ySFUuuYHWHekXpwdUZcKP5C+DS4GEtdJluwBjnsNDl+fSA==",
			"dev": true
		},
		"node_modules/npm-package-arg": {
			"version": "8.1.5",
			"resolved": "https://registry.npmjs.org/npm-package-arg/-/npm-package-arg-8.1.5.tgz",
			"integrity": "sha512-LhgZrg0n0VgvzVdSm1oiZworPbTxYHUJCgtsJW8mGvlDpxTM1vSJc3m5QZeUkhAHIzbz3VCHd/R4osi1L1Tg/Q==",
			"dev": true,
			"dependencies": {
				"hosted-git-info": "^4.0.1",
				"semver": "^7.3.4",
				"validate-npm-package-name": "^3.0.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/npm-packlist": {
			"version": "2.2.2",
			"resolved": "https://registry.npmjs.org/npm-packlist/-/npm-packlist-2.2.2.tgz",
			"integrity": "sha512-Jt01acDvJRhJGthnUJVF/w6gumWOZxO7IkpY/lsX9//zqQgnF7OJaxgQXcerd4uQOLu7W5bkb4mChL9mdfm+Zg==",
			"dev": true,
			"dependencies": {
				"glob": "^7.1.6",
				"ignore-walk": "^3.0.3",
				"npm-bundled": "^1.1.1",
				"npm-normalize-package-bin": "^1.0.1"
			},
			"bin": {
				"npm-packlist": "bin/index.js"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/npm-packlist/node_modules/glob": {
			"version": "7.2.3",
			"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
			"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
			"dev": true,
			"dependencies": {
				"fs.realpath": "^1.0.0",
				"inflight": "^1.0.4",
				"inherits": "2",
				"minimatch": "^3.1.1",
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
		"node_modules/npm-pick-manifest": {
			"version": "6.1.1",
			"resolved": "https://registry.npmjs.org/npm-pick-manifest/-/npm-pick-manifest-6.1.1.tgz",
			"integrity": "sha512-dBsdBtORT84S8V8UTad1WlUyKIY9iMsAmqxHbLdeEeBNMLQDlDWWra3wYUx9EBEIiG/YwAy0XyNHDd2goAsfuA==",
			"dev": true,
			"dependencies": {
				"npm-install-checks": "^4.0.0",
				"npm-normalize-package-bin": "^1.0.1",
				"npm-package-arg": "^8.1.2",
				"semver": "^7.3.4"
			}
		},
		"node_modules/npm-registry-fetch": {
			"version": "9.0.0",
			"resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-9.0.0.tgz",
			"integrity": "sha512-PuFYYtnQ8IyVl6ib9d3PepeehcUeHN9IO5N/iCRhyg9tStQcqGQBRVHmfmMWPDERU3KwZoHFvbJ4FPXPspvzbA==",
			"dev": true,
			"dependencies": {
				"@npmcli/ci-detect": "^1.0.0",
				"lru-cache": "^6.0.0",
				"make-fetch-happen": "^8.0.9",
				"minipass": "^3.1.3",
				"minipass-fetch": "^1.3.0",
				"minipass-json-stream": "^1.0.1",
				"minizlib": "^2.0.0",
				"npm-package-arg": "^8.0.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/npm-run-path": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
			"integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
			"dev": true,
			"dependencies": {
				"path-key": "^3.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/npmlog": {
			"version": "4.1.2",
			"resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
			"integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
			"dev": true,
			"dependencies": {
				"are-we-there-yet": "~1.1.2",
				"console-control-strings": "~1.1.0",
				"gauge": "~2.7.3",
				"set-blocking": "~2.0.0"
			}
		},
		"node_modules/nth-check": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz",
			"integrity": "sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==",
			"dependencies": {
				"boolbase": "^1.0.0"
			},
			"funding": {
				"url": "https://github.com/fb55/nth-check?sponsor=1"
			}
		},
		"node_modules/number-is-nan": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
			"integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/oauth-sign": {
			"version": "0.9.0",
			"resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
			"integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
			"dev": true,
			"engines": {
				"node": "*"
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
		"node_modules/object-inspect": {
			"version": "1.12.2",
			"resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.2.tgz",
			"integrity": "sha512-z+cPxW0QGUp0mcqcsgQyLVRDoXFQbXOwBaqyF7VIgI4TWNQsDHrBpUQslRmIfAoYWdYzs6UlKJtB2XJpTaNSpQ==",
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
		"node_modules/object.getownpropertydescriptors": {
			"version": "2.1.4",
			"resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.4.tgz",
			"integrity": "sha512-sccv3L/pMModT6dJAYF3fzGMVcb38ysQ0tEE6ixv2yXJDtEIPph268OlAdJj5/qZMZDq2g/jqvwppt36uS/uQQ==",
			"dev": true,
			"dependencies": {
				"array.prototype.reduce": "^1.0.4",
				"call-bind": "^1.0.2",
				"define-properties": "^1.1.4",
				"es-abstract": "^1.20.1"
			},
			"engines": {
				"node": ">= 0.8"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/once": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
			"integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
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
		"node_modules/os-homedir": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
			"integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M=",
			"dev": true,
			"engines": {
				"node": ">=0.10.0"
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
		"node_modules/osenv": {
			"version": "0.1.5",
			"resolved": "https://registry.npmjs.org/osenv/-/osenv-0.1.5.tgz",
			"integrity": "sha512-0CWcCECdMVc2Rw3U5w9ZjqX6ga6ubk1xDVKxtBQPK7wis/0F2r9T6k4ydGYhecl7YUBxBVxhL5oisPsNxAPe2g==",
			"dev": true,
			"dependencies": {
				"os-homedir": "^1.0.0",
				"os-tmpdir": "^1.0.0"
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
		"node_modules/p-locate": {
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
		"node_modules/p-map-series": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/p-map-series/-/p-map-series-2.1.0.tgz",
			"integrity": "sha512-RpYIIK1zXSNEOdwxcfe7FdvGcs7+y5n8rifMhMNWvaxRNMPINJHF5GDeuVxWqnfrcHPSCnp7Oo5yNXHId9Av2Q==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/p-pipe": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/p-pipe/-/p-pipe-3.1.0.tgz",
			"integrity": "sha512-08pj8ATpzMR0Y80x50yJHn37NF6vjrqHutASaX5LiH5npS9XPvrUmscd9MF5R4fuYRHOxQR1FfMIlF7AzwoPqw==",
			"dev": true,
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/p-queue": {
			"version": "6.6.2",
			"resolved": "https://registry.npmjs.org/p-queue/-/p-queue-6.6.2.tgz",
			"integrity": "sha512-RwFpb72c/BhQLEXIZ5K2e+AhgNVmIejGlTgiB9MzZ0e93GRvqZ7uSi0dvRF7/XIXDeNkra2fNHBxTyPDGySpjQ==",
			"dev": true,
			"dependencies": {
				"eventemitter3": "^4.0.4",
				"p-timeout": "^3.2.0"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/p-reduce": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/p-reduce/-/p-reduce-2.1.0.tgz",
			"integrity": "sha512-2USApvnsutq8uoxZBGbbWM0JIYLiEMJ9RlaN7fAzVNb9OZN0SHjjTTfIcb667XynS5Y1VhwDJVDa72TnPzAYWw==",
			"dev": true,
			"engines": {
				"node": ">=8"
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
		"node_modules/p-waterfall": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/p-waterfall/-/p-waterfall-2.1.1.tgz",
			"integrity": "sha512-RRTnDb2TBG/epPRI2yYXsimO0v3BXC8Yd3ogr1545IaqKK17VGhbWVeGGN+XfCm/08OK8635nH31c8bATkHuSw==",
			"dev": true,
			"dependencies": {
				"p-reduce": "^2.0.0"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/pacote": {
			"version": "11.3.5",
			"resolved": "https://registry.npmjs.org/pacote/-/pacote-11.3.5.tgz",
			"integrity": "sha512-fT375Yczn4zi+6Hkk2TBe1x1sP8FgFsEIZ2/iWaXY2r/NkhDJfxbcn5paz1+RTFCyNf+dPnaoBDJoAxXSU8Bkg==",
			"dev": true,
			"dependencies": {
				"@npmcli/git": "^2.1.0",
				"@npmcli/installed-package-contents": "^1.0.6",
				"@npmcli/promise-spawn": "^1.2.0",
				"@npmcli/run-script": "^1.8.2",
				"cacache": "^15.0.5",
				"chownr": "^2.0.0",
				"fs-minipass": "^2.1.0",
				"infer-owner": "^1.0.4",
				"minipass": "^3.1.3",
				"mkdirp": "^1.0.3",
				"npm-package-arg": "^8.0.1",
				"npm-packlist": "^2.1.4",
				"npm-pick-manifest": "^6.0.0",
				"npm-registry-fetch": "^11.0.0",
				"promise-retry": "^2.0.1",
				"read-package-json-fast": "^2.0.1",
				"rimraf": "^3.0.2",
				"ssri": "^8.0.1",
				"tar": "^6.1.0"
			},
			"bin": {
				"pacote": "lib/bin.js"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/pacote/node_modules/make-fetch-happen": {
			"version": "9.1.0",
			"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-9.1.0.tgz",
			"integrity": "sha512-+zopwDy7DNknmwPQplem5lAZX/eCOzSvSNNcSKm5eVwTkOBzoktEfXsa9L23J/GIRhxRsaxzkPEhrJEpE2F4Gg==",
			"dev": true,
			"dependencies": {
				"agentkeepalive": "^4.1.3",
				"cacache": "^15.2.0",
				"http-cache-semantics": "^4.1.0",
				"http-proxy-agent": "^4.0.1",
				"https-proxy-agent": "^5.0.0",
				"is-lambda": "^1.0.1",
				"lru-cache": "^6.0.0",
				"minipass": "^3.1.3",
				"minipass-collect": "^1.0.2",
				"minipass-fetch": "^1.3.2",
				"minipass-flush": "^1.0.5",
				"minipass-pipeline": "^1.2.4",
				"negotiator": "^0.6.2",
				"promise-retry": "^2.0.1",
				"socks-proxy-agent": "^6.0.0",
				"ssri": "^8.0.0"
			},
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/pacote/node_modules/npm-registry-fetch": {
			"version": "11.0.0",
			"resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-11.0.0.tgz",
			"integrity": "sha512-jmlgSxoDNuhAtxUIG6pVwwtz840i994dL14FoNVZisrmZW5kWd63IUTNv1m/hyRSGSqWjCUp/YZlS1BJyNp9XA==",
			"dev": true,
			"dependencies": {
				"make-fetch-happen": "^9.0.1",
				"minipass": "^3.1.3",
				"minipass-fetch": "^1.3.0",
				"minipass-json-stream": "^1.0.1",
				"minizlib": "^2.0.0",
				"npm-package-arg": "^8.0.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/pacote/node_modules/socks-proxy-agent": {
			"version": "6.2.0",
			"resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-6.2.0.tgz",
			"integrity": "sha512-wWqJhjb32Q6GsrUqzuFkukxb/zzide5quXYcMVpIjxalDBBYy2nqKCFQ/9+Ie4dvOYSQdOk3hUlZSdzZOd3zMQ==",
			"dev": true,
			"dependencies": {
				"agent-base": "^6.0.2",
				"debug": "^4.3.3",
				"socks": "^2.6.2"
			},
			"engines": {
				"node": ">= 10"
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
		"node_modules/parse-json": {
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
		"node_modules/parse-path": {
			"version": "4.0.3",
			"resolved": "https://registry.npmjs.org/parse-path/-/parse-path-4.0.3.tgz",
			"integrity": "sha512-9Cepbp2asKnWTJ9x2kpw6Fe8y9JDbqwahGCTvklzd/cEq5C5JC59x2Xb0Kx+x0QZ8bvNquGO8/BWP0cwBHzSAA==",
			"dev": true,
			"dependencies": {
				"is-ssh": "^1.3.0",
				"protocols": "^1.4.0",
				"qs": "^6.9.4",
				"query-string": "^6.13.8"
			}
		},
		"node_modules/parse-url": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/parse-url/-/parse-url-6.0.0.tgz",
			"integrity": "sha512-cYyojeX7yIIwuJzledIHeLUBVJ6COVLeT4eF+2P6aKVzwvgKQPndCBv3+yQ7pcWjqToYwaligxzSYNNmGoMAvw==",
			"dev": true,
			"dependencies": {
				"is-ssh": "^1.3.0",
				"normalize-url": "^6.1.0",
				"parse-path": "^4.0.0",
				"protocols": "^1.4.0"
			}
		},
		"node_modules/parse5": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/parse5/-/parse5-7.0.0.tgz",
			"integrity": "sha512-y/t8IXSPWTuRZqXc0ajH/UwDj4mnqLEbSttNbThcFhGrZuOyoyvNBO85PBp2jQa55wY9d07PBNjsK8ZP3K5U6g==",
			"dependencies": {
				"entities": "^4.3.0"
			},
			"funding": {
				"url": "https://github.com/inikulin/parse5?sponsor=1"
			}
		},
		"node_modules/parse5-htmlparser2-tree-adapter": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/parse5-htmlparser2-tree-adapter/-/parse5-htmlparser2-tree-adapter-7.0.0.tgz",
			"integrity": "sha512-B77tOZrqqfUfnVcOrUvfdLbz4pu4RopLD/4vmu3HUPswwTA8OH0EMW9BlWR2B0RCoiZRAHEUu7IxeP1Pd1UU+g==",
			"dependencies": {
				"domhandler": "^5.0.2",
				"parse5": "^7.0.0"
			},
			"funding": {
				"url": "https://github.com/inikulin/parse5?sponsor=1"
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
		"node_modules/path-to-regexp": {
			"version": "1.8.0",
			"resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-1.8.0.tgz",
			"integrity": "sha512-n43JRhlUKUAlibEJhPeir1ncUID16QnEjNpwzNdO3Lm4ywrBpBZ5oLD0I6br9evr1Y9JTqwRtAh7JLoOzAQdVA==",
			"dependencies": {
				"isarray": "0.0.1"
			}
		},
		"node_modules/path-to-regexp/node_modules/isarray": {
			"version": "0.0.1",
			"resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
			"integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
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
		"node_modules/performance-now": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
			"integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
			"dev": true
		},
		"node_modules/picomatch": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
			"integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
			"dev": true,
			"engines": {
				"node": ">=8.6"
			},
			"funding": {
				"url": "https://github.com/sponsors/jonschlinkert"
			}
		},
		"node_modules/pify": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/pify/-/pify-5.0.0.tgz",
			"integrity": "sha512-eW/gHNMlxdSP6dmG6uJip6FXN0EQBwm2clYYd8Wul42Cwu/DK8HEftzsapcNdYe2MfLiIwZqsDk2RDEsTE79hA==",
			"dev": true,
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
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
		"node_modules/pkg-dir/node_modules/find-up": {
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
		"node_modules/pkg-dir/node_modules/locate-path": {
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
		"node_modules/pkg-dir/node_modules/p-limit": {
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
		"node_modules/pkg-dir/node_modules/p-locate": {
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
		"node_modules/pollock": {
			"version": "0.2.1",
			"resolved": "https://registry.npmjs.org/pollock/-/pollock-0.2.1.tgz",
			"integrity": "sha512-2Xy6LImSXm0ANKv9BKSVuCa6Z4ACbK7oUrl9gtUgqLkekL7n9C0mlWsOGYYuGbCG8xT0x3Q4F31C3ZMyVQjwsg=="
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
		"node_modules/process-nextick-args": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
			"integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
			"dev": true
		},
		"node_modules/promise-inflight": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/promise-inflight/-/promise-inflight-1.0.1.tgz",
			"integrity": "sha1-mEcocL8igTL8vdhoEputEsPAKeM=",
			"dev": true
		},
		"node_modules/promise-retry": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/promise-retry/-/promise-retry-2.0.1.tgz",
			"integrity": "sha512-y+WKFlBR8BGXnsNlIHFGPZmyDf3DFMoLhaflAnyZgV6rG6xu+JwesTo2Q9R6XwYmtmwAFCkAk3e35jEdoeh/3g==",
			"dev": true,
			"dependencies": {
				"err-code": "^2.0.2",
				"retry": "^0.12.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/promzard": {
			"version": "0.3.0",
			"resolved": "https://registry.npmjs.org/promzard/-/promzard-0.3.0.tgz",
			"integrity": "sha1-JqXW7ox97kyxIggwWs+5O6OCqe4=",
			"dev": true,
			"dependencies": {
				"read": "1"
			}
		},
		"node_modules/proto-list": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/proto-list/-/proto-list-1.2.4.tgz",
			"integrity": "sha1-IS1b/hMYMGpCD2QCuOJv85ZHqEk=",
			"dev": true
		},
		"node_modules/protocols": {
			"version": "1.4.8",
			"resolved": "https://registry.npmjs.org/protocols/-/protocols-1.4.8.tgz",
			"integrity": "sha512-IgjKyaUSjsROSO8/D49Ab7hP8mJgTYcqApOqdPhLoPxAplXmkp+zRvsrSQjFn5by0rhm4VH0GAUELIPpx7B1yg==",
			"dev": true
		},
		"node_modules/psl": {
			"version": "1.8.0",
			"resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
			"integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==",
			"dev": true
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
		"node_modules/qs": {
			"version": "6.10.3",
			"resolved": "https://registry.npmjs.org/qs/-/qs-6.10.3.tgz",
			"integrity": "sha512-wr7M2E0OFRfIfJZjKGieI8lBKb7fRCH4Fv5KNPEs7gJ8jadvotdsS08PzOKR7opXhZ/Xkjtt3WF9g38drmyRqQ==",
			"dev": true,
			"dependencies": {
				"side-channel": "^1.0.4"
			},
			"engines": {
				"node": ">=0.6"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/query-string": {
			"version": "6.14.1",
			"resolved": "https://registry.npmjs.org/query-string/-/query-string-6.14.1.tgz",
			"integrity": "sha512-XDxAeVmpfu1/6IjyT/gXHOl+S0vQ9owggJ30hhWKdHAsNPOcasn5o9BW0eejZqL2e4vMjhAxoW3jVHcD6mbcYw==",
			"dev": true,
			"dependencies": {
				"decode-uri-component": "^0.2.0",
				"filter-obj": "^1.1.0",
				"split-on-first": "^1.0.0",
				"strict-uri-encode": "^2.0.0"
			},
			"engines": {
				"node": ">=6"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
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
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
			"integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA==",
			"dev": true,
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/randombytes": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
			"integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
			"dev": true,
			"dependencies": {
				"safe-buffer": "^5.1.0"
			}
		},
		"node_modules/read": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/read/-/read-1.0.7.tgz",
			"integrity": "sha1-s9oZvQUkMal2cdRKQmNK33ELQMQ=",
			"dev": true,
			"dependencies": {
				"mute-stream": "~0.0.4"
			},
			"engines": {
				"node": ">=0.8"
			}
		},
		"node_modules/read-cmd-shim": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/read-cmd-shim/-/read-cmd-shim-2.0.0.tgz",
			"integrity": "sha512-HJpV9bQpkl6KwjxlJcBoqu9Ba0PQg8TqSNIOrulGt54a0uup0HtevreFHzYzkm0lpnleRdNBzXznKrgxglEHQw==",
			"dev": true
		},
		"node_modules/read-package-json": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/read-package-json/-/read-package-json-3.0.1.tgz",
			"integrity": "sha512-aLcPqxovhJTVJcsnROuuzQvv6oziQx4zd3JvG0vGCL5MjTONUc4uJ90zCBC6R7W7oUKBNoR/F8pkyfVwlbxqng==",
			"dev": true,
			"dependencies": {
				"glob": "^7.1.1",
				"json-parse-even-better-errors": "^2.3.0",
				"normalize-package-data": "^3.0.0",
				"npm-normalize-package-bin": "^1.0.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/read-package-json-fast": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/read-package-json-fast/-/read-package-json-fast-2.0.3.tgz",
			"integrity": "sha512-W/BKtbL+dUjTuRL2vziuYhp76s5HZ9qQhd/dKfWIZveD0O40453QNyZhC0e63lqZrAQ4jiOapVoeJ7JrszenQQ==",
			"dev": true,
			"dependencies": {
				"json-parse-even-better-errors": "^2.3.0",
				"npm-normalize-package-bin": "^1.0.1"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/read-package-json/node_modules/glob": {
			"version": "7.2.3",
			"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
			"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
			"dev": true,
			"dependencies": {
				"fs.realpath": "^1.0.0",
				"inflight": "^1.0.4",
				"inherits": "2",
				"minimatch": "^3.1.1",
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
		"node_modules/read-package-tree": {
			"version": "5.3.1",
			"resolved": "https://registry.npmjs.org/read-package-tree/-/read-package-tree-5.3.1.tgz",
			"integrity": "sha512-mLUDsD5JVtlZxjSlPPx1RETkNjjvQYuweKwNVt1Sn8kP5Jh44pvYuUHCp6xSVDZWbNxVxG5lyZJ921aJH61sTw==",
			"deprecated": "The functionality that this package provided is now in @npmcli/arborist",
			"dev": true,
			"dependencies": {
				"read-package-json": "^2.0.0",
				"readdir-scoped-modules": "^1.0.0",
				"util-promisify": "^2.1.0"
			}
		},
		"node_modules/read-package-tree/node_modules/glob": {
			"version": "7.2.3",
			"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
			"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
			"dev": true,
			"dependencies": {
				"fs.realpath": "^1.0.0",
				"inflight": "^1.0.4",
				"inherits": "2",
				"minimatch": "^3.1.1",
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
		"node_modules/read-package-tree/node_modules/hosted-git-info": {
			"version": "2.8.9",
			"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
			"integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
			"dev": true
		},
		"node_modules/read-package-tree/node_modules/normalize-package-data": {
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
		"node_modules/read-package-tree/node_modules/read-package-json": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/read-package-json/-/read-package-json-2.1.2.tgz",
			"integrity": "sha512-D1KmuLQr6ZSJS0tW8hf3WGpRlwszJOXZ3E8Yd/DNRaM5d+1wVRZdHlpGBLAuovjr28LbWvjpWkBHMxpRGGjzNA==",
			"dev": true,
			"dependencies": {
				"glob": "^7.1.1",
				"json-parse-even-better-errors": "^2.3.0",
				"normalize-package-data": "^2.0.0",
				"npm-normalize-package-bin": "^1.0.0"
			}
		},
		"node_modules/read-package-tree/node_modules/semver": {
			"version": "5.7.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
			"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
			"dev": true,
			"bin": {
				"semver": "bin/semver"
			}
		},
		"node_modules/read-pkg": {
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
		"node_modules/read-pkg-up": {
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
		"node_modules/read-pkg-up/node_modules/find-up": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
			"integrity": "sha512-NWzkk0jSJtTt08+FBFMvXoeZnOJD+jTtsRmBYbAIzJdX6l7dLgR7CTubCM5/eDdPUBvLCeVasP1brfVR/9/EZQ==",
			"dev": true,
			"dependencies": {
				"locate-path": "^2.0.0"
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
		"node_modules/read-pkg-up/node_modules/path-exists": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
			"integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
			"dev": true,
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/read-pkg/node_modules/hosted-git-info": {
			"version": "2.8.9",
			"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
			"integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
			"dev": true
		},
		"node_modules/read-pkg/node_modules/load-json-file": {
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
		"node_modules/read-pkg/node_modules/normalize-package-data": {
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
		"node_modules/read-pkg/node_modules/parse-json": {
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
		"node_modules/read-pkg/node_modules/path-type": {
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
		"node_modules/read-pkg/node_modules/pify": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
			"integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
			"dev": true,
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/read-pkg/node_modules/semver": {
			"version": "5.7.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
			"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
			"dev": true,
			"bin": {
				"semver": "bin/semver"
			}
		},
		"node_modules/read-pkg/node_modules/strip-bom": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
			"integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
			"dev": true,
			"engines": {
				"node": ">=4"
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
		"node_modules/readdir-scoped-modules": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/readdir-scoped-modules/-/readdir-scoped-modules-1.1.0.tgz",
			"integrity": "sha512-asaikDeqAQg7JifRsZn1NJZXo9E+VwlyCfbkZhwyISinqk5zNS6266HS5kah6P0SaQKGF6SkNnZVHUzHFYxYDw==",
			"dev": true,
			"dependencies": {
				"debuglog": "^1.0.1",
				"dezalgo": "^1.0.0",
				"graceful-fs": "^4.1.2",
				"once": "^1.3.0"
			}
		},
		"node_modules/readdirp": {
			"version": "3.6.0",
			"resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
			"integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
			"dev": true,
			"dependencies": {
				"picomatch": "^2.2.1"
			},
			"engines": {
				"node": ">=8.10.0"
			}
		},
		"node_modules/redent": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/redent/-/redent-4.0.0.tgz",
			"integrity": "sha512-tYkDkVVtYkSVhuQ4zBgfvciymHaeuel+zFKXShfDnFP5SyVEP7qo70Rf1jTOTCx3vGNAbnEi/xFkcfQVMIBWag==",
			"dev": true,
			"dependencies": {
				"indent-string": "^5.0.0",
				"strip-indent": "^4.0.0"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/redent/node_modules/indent-string": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/indent-string/-/indent-string-5.0.0.tgz",
			"integrity": "sha512-m6FAo/spmsW2Ab2fU35JTYwtOKa2yAwXSwgjSv1TJzh4Mh7mC3lzAOVLBprb72XsTrgkEIsl7YrFNAiDiRhIGg==",
			"dev": true,
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/regexp.prototype.flags": {
			"version": "1.4.3",
			"resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.4.3.tgz",
			"integrity": "sha512-fjggEOO3slI6Wvgjwflkc4NFRCTZAu5CnNfBd5qOMYhWdn67nJBBu34/TkD++eeFmd8C9r9jfXJ27+nSiRkSUA==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.2",
				"define-properties": "^1.1.3",
				"functions-have-names": "^1.2.2"
			},
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/regexpp": {
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/regexpp/-/regexpp-3.2.0.tgz",
			"integrity": "sha512-pq2bWo9mVD43nbts2wGv17XLiNLya+GklZ8kaDLV2Z08gDCsGpnKn9BFMepvWuHCbyVvY7J5o5+BVvoQbmlJLg==",
			"dev": true,
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/mysticatea"
			}
		},
		"node_modules/request": {
			"version": "2.88.2",
			"resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
			"integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
			"deprecated": "request has been deprecated, see https://github.com/request/request/issues/3142",
			"dev": true,
			"dependencies": {
				"aws-sign2": "~0.7.0",
				"aws4": "^1.8.0",
				"caseless": "~0.12.0",
				"combined-stream": "~1.0.6",
				"extend": "~3.0.2",
				"forever-agent": "~0.6.1",
				"form-data": "~2.3.2",
				"har-validator": "~5.1.3",
				"http-signature": "~1.2.0",
				"is-typedarray": "~1.0.0",
				"isstream": "~0.1.2",
				"json-stringify-safe": "~5.0.1",
				"mime-types": "~2.1.19",
				"oauth-sign": "~0.9.0",
				"performance-now": "^2.1.0",
				"qs": "~6.5.2",
				"safe-buffer": "^5.1.2",
				"tough-cookie": "~2.5.0",
				"tunnel-agent": "^0.6.0",
				"uuid": "^3.3.2"
			},
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/request/node_modules/qs": {
			"version": "6.5.3",
			"resolved": "https://registry.npmjs.org/qs/-/qs-6.5.3.tgz",
			"integrity": "sha512-qxXIEh4pCGfHICj1mAJQ2/2XVZkjCDTcEgfoSQxc/fYivUZxTkk7L3bDBJSoNrEzXI17oUO5Dp07ktqE5KzczA==",
			"dev": true,
			"engines": {
				"node": ">=0.6"
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
		"node_modules/resolve": {
			"version": "1.22.0",
			"resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.0.tgz",
			"integrity": "sha512-Hhtrw0nLeSrFQ7phPp4OOcVjLPIeMnRlr5mcnVuMe7M/7eBn98A3hmFRLoFo3DLZkivSYwhRUJTyPyWAk56WLw==",
			"dev": true,
			"dependencies": {
				"is-core-module": "^2.8.1",
				"path-parse": "^1.0.7",
				"supports-preserve-symlinks-flag": "^1.0.0"
			},
			"bin": {
				"resolve": "bin/resolve"
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
		"node_modules/resolve-cwd/node_modules/resolve-from": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
			"integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/resolve-from": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
			"integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
			"dev": true,
			"engines": {
				"node": ">=4"
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
		"node_modules/retry": {
			"version": "0.12.0",
			"resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",
			"integrity": "sha1-G0KmJmoh8HQh0bC1S33BZ7AcATs=",
			"dev": true,
			"engines": {
				"node": ">= 4"
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
		"node_modules/rimraf/node_modules/glob": {
			"version": "7.2.3",
			"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
			"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
			"dependencies": {
				"fs.realpath": "^1.0.0",
				"inflight": "^1.0.4",
				"inherits": "2",
				"minimatch": "^3.1.1",
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
		"node_modules/safer-buffer": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
			"integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
			"dev": true
		},
		"node_modules/semver": {
			"version": "7.3.7",
			"resolved": "https://registry.npmjs.org/semver/-/semver-7.3.7.tgz",
			"integrity": "sha512-QlYTucUYOews+WeEujDoEGziz4K6c47V/Bd+LjSSYcA94p+DmINdf7ncaUinThfvZyu13lN9OY1XDxt8C0Tw0g==",
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
		"node_modules/serialize-javascript": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-6.0.0.tgz",
			"integrity": "sha512-Qr3TosvguFt8ePWqsvRfrKyQXIiW+nGbYpy8XK24NQHE83caxWt+mIymTT19DGFbNWNLfEwsrkSmN64lVWB9ag==",
			"dev": true,
			"dependencies": {
				"randombytes": "^2.1.0"
			}
		},
		"node_modules/set-blocking": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
			"integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",
			"dev": true
		},
		"node_modules/shallow-clone": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
			"integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
			"dev": true,
			"dependencies": {
				"kind-of": "^6.0.2"
			},
			"engines": {
				"node": ">=8"
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
		"node_modules/side-channel": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
			"integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.0",
				"get-intrinsic": "^1.0.2",
				"object-inspect": "^1.9.0"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/signal-exit": {
			"version": "3.0.7",
			"resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
			"integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
			"dev": true
		},
		"node_modules/sinon": {
			"version": "13.0.2",
			"resolved": "https://registry.npmjs.org/sinon/-/sinon-13.0.2.tgz",
			"integrity": "sha512-KvOrztAVqzSJWMDoxM4vM+GPys1df2VBoXm+YciyB/OLMamfS3VXh3oGh5WtrAGSzrgczNWFFY22oKb7Fi5eeA==",
			"dependencies": {
				"@sinonjs/commons": "^1.8.3",
				"@sinonjs/fake-timers": "^9.1.2",
				"@sinonjs/samsam": "^6.1.1",
				"diff": "^5.0.0",
				"nise": "^5.1.1",
				"supports-color": "^7.2.0"
			},
			"funding": {
				"type": "opencollective",
				"url": "https://opencollective.com/sinon"
			}
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
		"node_modules/slide": {
			"version": "1.1.6",
			"resolved": "https://registry.npmjs.org/slide/-/slide-1.1.6.tgz",
			"integrity": "sha1-VusCfWW00tzmyy4tMsTUr8nh1wc=",
			"dev": true,
			"engines": {
				"node": "*"
			}
		},
		"node_modules/smart-buffer": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz",
			"integrity": "sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==",
			"dev": true,
			"engines": {
				"node": ">= 6.0.0",
				"npm": ">= 3.0.0"
			}
		},
		"node_modules/socks": {
			"version": "2.6.2",
			"resolved": "https://registry.npmjs.org/socks/-/socks-2.6.2.tgz",
			"integrity": "sha512-zDZhHhZRY9PxRruRMR7kMhnf3I8hDs4S3f9RecfnGxvcBHQcKcIH/oUcEWffsfl1XxdYlA7nnlGbbTvPz9D8gA==",
			"dev": true,
			"dependencies": {
				"ip": "^1.1.5",
				"smart-buffer": "^4.2.0"
			},
			"engines": {
				"node": ">= 10.13.0",
				"npm": ">= 3.0.0"
			}
		},
		"node_modules/socks-proxy-agent": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-5.0.1.tgz",
			"integrity": "sha512-vZdmnjb9a2Tz6WEQVIurybSwElwPxMZaIc7PzqbJTrezcKNznv6giT7J7tZDZ1BojVaa1jvO/UiUdhDVB0ACoQ==",
			"dev": true,
			"dependencies": {
				"agent-base": "^6.0.2",
				"debug": "4",
				"socks": "^2.3.3"
			},
			"engines": {
				"node": ">= 6"
			}
		},
		"node_modules/sort-keys": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-4.2.0.tgz",
			"integrity": "sha512-aUYIEU/UviqPgc8mHR6IW1EGxkAXpeRETYcrzg8cLAvUPZcpAlleSXHV2mY7G12GphSH6Gzv+4MMVSSkbdteHg==",
			"dev": true,
			"dependencies": {
				"is-plain-obj": "^2.0.0"
			},
			"engines": {
				"node": ">=8"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/sort-keys/node_modules/is-plain-obj": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-2.1.0.tgz",
			"integrity": "sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==",
			"dev": true,
			"engines": {
				"node": ">=8"
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
			"version": "3.0.11",
			"resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.11.tgz",
			"integrity": "sha512-Ctl2BrFiM0X3MANYgj3CkygxhRmr9mi6xhejbdO960nF6EDJApTYpn0BQnDKlnNBULKiCN1n3w9EBkHK8ZWg+g==",
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
		"node_modules/split-on-first": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/split-on-first/-/split-on-first-1.1.0.tgz",
			"integrity": "sha512-43ZssAJaMusuKWL8sKUBQXHWOpq8d6CfN/u1p4gUzfJkM05C8rxTmYrkIPTXapZpORA6LkkzcUulJ8FqA7Uudw==",
			"dev": true,
			"engines": {
				"node": ">=6"
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
		"node_modules/sshpk": {
			"version": "1.17.0",
			"resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.17.0.tgz",
			"integrity": "sha512-/9HIEs1ZXGhSPE8X6Ccm7Nam1z8KcoCqPdI7ecm1N33EzAetWahvQWVqLZtaZQ+IDKX4IyA2o0gBzqIMkAagHQ==",
			"dev": true,
			"dependencies": {
				"asn1": "~0.2.3",
				"assert-plus": "^1.0.0",
				"bcrypt-pbkdf": "^1.0.0",
				"dashdash": "^1.12.0",
				"ecc-jsbn": "~0.1.1",
				"getpass": "^0.1.1",
				"jsbn": "~0.1.0",
				"safer-buffer": "^2.0.2",
				"tweetnacl": "~0.14.0"
			},
			"bin": {
				"sshpk-conv": "bin/sshpk-conv",
				"sshpk-sign": "bin/sshpk-sign",
				"sshpk-verify": "bin/sshpk-verify"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/ssri": {
			"version": "8.0.1",
			"resolved": "https://registry.npmjs.org/ssri/-/ssri-8.0.1.tgz",
			"integrity": "sha512-97qShzy1AiyxvPNIkLWoGua7xoQzzPjQ0HAH4B0rWKo7SZ6USuPcrUiAFrws0UH8RrbWmgq3LMTObhPIHbbBeQ==",
			"dev": true,
			"dependencies": {
				"minipass": "^3.1.1"
			},
			"engines": {
				"node": ">= 8"
			}
		},
		"node_modules/strict-uri-encode": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-2.0.0.tgz",
			"integrity": "sha1-ucczDHBChi9rFC3CdLvMWGbONUY=",
			"dev": true,
			"engines": {
				"node": ">=4"
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
		"node_modules/string-width": {
			"version": "4.2.3",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
			"integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
			"dev": true,
			"dependencies": {
				"emoji-regex": "^8.0.0",
				"is-fullwidth-code-point": "^3.0.0",
				"strip-ansi": "^6.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/string.prototype.trimend": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.5.tgz",
			"integrity": "sha512-I7RGvmjV4pJ7O3kdf+LXFpVfdNOxtCW/2C8f6jNiW4+PQchwxkCDzlk1/7p+Wl4bqFIZeF47qAHXLuHHWKAxog==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.2",
				"define-properties": "^1.1.4",
				"es-abstract": "^1.19.5"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/string.prototype.trimstart": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.5.tgz",
			"integrity": "sha512-THx16TJCGlsN0o6dl2o6ncWUsdgnLRSA23rRE5pyGBw/mLr3Ej/R2LaqCtgP8VNMGZsvMWnf9ooZPyY2bHvUFg==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.2",
				"define-properties": "^1.1.4",
				"es-abstract": "^1.19.5"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/strip-ansi": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
			"integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
			"dev": true,
			"dependencies": {
				"ansi-regex": "^5.0.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/strip-bom": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
			"integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/strip-final-newline": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
			"integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/strip-indent": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-4.0.0.tgz",
			"integrity": "sha512-mnVSV2l+Zv6BLpSD/8V87CW/y9EmmbYzGCIavsnsI6/nwn26DwffM/yztm30Z/I2DY9wdS3vXVCMnHDgZaVNoA==",
			"dev": true,
			"dependencies": {
				"min-indent": "^1.0.1"
			},
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/strip-json-comments": {
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
		"node_modules/strong-log-transformer": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/strong-log-transformer/-/strong-log-transformer-2.1.0.tgz",
			"integrity": "sha512-B3Hgul+z0L9a236FAUC9iZsL+nVHgoCJnqCbN588DjYxvGXaXaaFbfmQ/JhvKjZwsOukuR72XbHv71Qkug0HxA==",
			"dev": true,
			"dependencies": {
				"duplexer": "^0.1.1",
				"minimist": "^1.2.0",
				"through": "^2.3.4"
			},
			"bin": {
				"sl-log-transformer": "bin/sl-log-transformer.js"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/supports-color": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
			"integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
			"dependencies": {
				"has-flag": "^4.0.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/supports-preserve-symlinks-flag": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
			"integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
			"dev": true,
			"engines": {
				"node": ">= 0.4"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/tar": {
			"version": "6.1.11",
			"resolved": "https://registry.npmjs.org/tar/-/tar-6.1.11.tgz",
			"integrity": "sha512-an/KZQzQUkZCkuoAA64hM92X0Urb6VpRhAFllDzz44U2mcD5scmT3zBc4VgVpkugF580+DQn8eAFSyoQt0tznA==",
			"dev": true,
			"dependencies": {
				"chownr": "^2.0.0",
				"fs-minipass": "^2.0.0",
				"minipass": "^3.0.0",
				"minizlib": "^2.1.1",
				"mkdirp": "^1.0.3",
				"yallist": "^4.0.0"
			},
			"engines": {
				"node": ">= 10"
			}
		},
		"node_modules/temp-dir": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/temp-dir/-/temp-dir-1.0.0.tgz",
			"integrity": "sha1-CnwOom06Oa+n4OvqnB/AvE2qAR0=",
			"dev": true,
			"engines": {
				"node": ">=4"
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
		"node_modules/tmp": {
			"version": "0.2.1",
			"resolved": "https://registry.npmjs.org/tmp/-/tmp-0.2.1.tgz",
			"integrity": "sha512-76SUhtfqR2Ijn+xllcI5P1oyannHNHByD80W1q447gU3mp9G9PSpGdWmjUOHRDPiHYacIk66W7ubDTuPF3BEtQ==",
			"dependencies": {
				"rimraf": "^3.0.0"
			},
			"engines": {
				"node": ">=8.17.0"
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
		"node_modules/tough-cookie": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
			"integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
			"dev": true,
			"dependencies": {
				"psl": "^1.1.28",
				"punycode": "^2.1.1"
			},
			"engines": {
				"node": ">=0.8"
			}
		},
		"node_modules/tr46": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/tr46/-/tr46-2.1.0.tgz",
			"integrity": "sha512-15Ih7phfcdP5YxqiB+iDtLoaTz4Nd35+IiAv0kQ5FNKHzXgdWqPoTIqEDDJmXceQt4JZk6lVPT8lnDlPpGDppw==",
			"dev": true,
			"dependencies": {
				"punycode": "^2.1.1"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/trim-newlines": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-4.0.2.tgz",
			"integrity": "sha512-GJtWyq9InR/2HRiLZgpIKv+ufIKrVrvjQWEj7PxAXNc5dwbNJkqhAUoAGgzRmULAnoOM5EIpveYd3J2VeSAIew==",
			"dev": true,
			"engines": {
				"node": ">=12"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/tslib": {
			"version": "1.14.1",
			"resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
			"integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
			"dev": true
		},
		"node_modules/tunnel-agent": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
			"integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
			"dev": true,
			"dependencies": {
				"safe-buffer": "^5.0.1"
			},
			"engines": {
				"node": "*"
			}
		},
		"node_modules/tweetnacl": {
			"version": "0.14.5",
			"resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
			"integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
			"dev": true
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
		"node_modules/type-detect": {
			"version": "4.0.8",
			"resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz",
			"integrity": "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==",
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/type-fest": {
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
		"node_modules/uglify-js": {
			"version": "3.15.5",
			"resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.15.5.tgz",
			"integrity": "sha512-hNM5q5GbBRB5xB+PMqVRcgYe4c8jbyZ1pzZhS6jbq54/4F2gFK869ZheiE5A8/t+W5jtTNpWef/5Q9zk639FNQ==",
			"dev": true,
			"optional": true,
			"bin": {
				"uglifyjs": "bin/uglifyjs"
			},
			"engines": {
				"node": ">=0.8.0"
			}
		},
		"node_modules/uid-number": {
			"version": "0.0.6",
			"resolved": "https://registry.npmjs.org/uid-number/-/uid-number-0.0.6.tgz",
			"integrity": "sha1-DqEOgDXo61uOREnwbaHHMGY7qoE=",
			"dev": true,
			"engines": {
				"node": "*"
			}
		},
		"node_modules/umask": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/umask/-/umask-1.1.0.tgz",
			"integrity": "sha1-8pzr8B31F5ErtY/5xOUP3o4zMg0=",
			"dev": true
		},
		"node_modules/unbox-primitive": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.2.tgz",
			"integrity": "sha512-61pPlCD9h51VoreyJ0BReideM3MDKMKnh6+V9L08331ipq6Q8OFXZYiqP6n/tbHx4s5I9uRhcye6BrbkizkBDw==",
			"dev": true,
			"dependencies": {
				"call-bind": "^1.0.2",
				"has-bigints": "^1.0.2",
				"has-symbols": "^1.0.3",
				"which-boxed-primitive": "^1.0.2"
			},
			"funding": {
				"url": "https://github.com/sponsors/ljharb"
			}
		},
		"node_modules/unique-filename": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-1.1.1.tgz",
			"integrity": "sha512-Vmp0jIp2ln35UTXuryvjzkjGdRyf9b2lTXuSYUiPmzRcl3FDtYqAwOnTJkAngD9SWhnoJzDbTKwaOrZ+STtxNQ==",
			"dev": true,
			"dependencies": {
				"unique-slug": "^2.0.0"
			}
		},
		"node_modules/unique-slug": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-2.0.2.tgz",
			"integrity": "sha512-zoWr9ObaxALD3DOPfjPSqxt4fnZiWblxHIgeWqW8x7UqDzEtHEQLzji2cuJYQFCU6KmoJikOYAZlrTHHebjx2w==",
			"dev": true,
			"dependencies": {
				"imurmurhash": "^0.1.4"
			}
		},
		"node_modules/universal-user-agent": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/universal-user-agent/-/universal-user-agent-6.0.0.tgz",
			"integrity": "sha512-isyNax3wXoKaulPDZWHQqbmIx1k2tb9fb3GGDBRxCscfYV2Ch7WxPArBsFEG8s/safwXTT7H4QGhaIkTp9447w==",
			"dev": true
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
		"node_modules/upath": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/upath/-/upath-2.0.1.tgz",
			"integrity": "sha512-1uEe95xksV1O0CYKXo8vQvN1JEbtJp7lb7C5U9HMsIp6IVwntkH/oNUzyVNQSd4S1sYk2FpSSW44FqMc8qee5w==",
			"dev": true,
			"engines": {
				"node": ">=4",
				"yarn": "*"
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
		"node_modules/util-deprecate": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
			"integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
			"dev": true
		},
		"node_modules/util-promisify": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/util-promisify/-/util-promisify-2.1.0.tgz",
			"integrity": "sha1-PCI2R2xNMsX/PEcAKt18E7moKlM=",
			"dev": true,
			"dependencies": {
				"object.getownpropertydescriptors": "^2.0.3"
			}
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
		"node_modules/validate-npm-package-name": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/validate-npm-package-name/-/validate-npm-package-name-3.0.0.tgz",
			"integrity": "sha1-X6kS2B630MdK/BQN5zF/DKffQ34=",
			"dev": true,
			"dependencies": {
				"builtins": "^1.0.3"
			}
		},
		"node_modules/verror": {
			"version": "1.10.0",
			"resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
			"integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
			"dev": true,
			"engines": [
				"node >=0.6.0"
			],
			"dependencies": {
				"assert-plus": "^1.0.0",
				"core-util-is": "1.0.2",
				"extsprintf": "^1.2.0"
			}
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
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-6.1.0.tgz",
			"integrity": "sha512-qBIvFLGiBpLjfwmYAaHPXsn+ho5xZnGvyGvsarywGNc8VyQJUMHJ8OBKGGrPER0okBeMDaan4mNBlgBROxuI8w==",
			"dev": true,
			"engines": {
				"node": ">=10.4"
			}
		},
		"node_modules/whatwg-url": {
			"version": "8.7.0",
			"resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-8.7.0.tgz",
			"integrity": "sha512-gAojqb/m9Q8a5IV96E3fHJM70AzCkgt4uXYX2O7EmuyOnLrViCQlsEBmF9UQIu3/aeAIp2U17rtbpZWNntQqdg==",
			"dev": true,
			"dependencies": {
				"lodash": "^4.7.0",
				"tr46": "^2.1.0",
				"webidl-conversions": "^6.1.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/which": {
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
		"node_modules/wide-align": {
			"version": "1.1.5",
			"resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.5.tgz",
			"integrity": "sha512-eDMORYaPNZ4sQIuuYPDHdQvf4gyCF9rEEV/yPxGfwPkRodwEgiMUUXTx/dex+Me0wxx53S+NgUHaP7y3MGlDmg==",
			"dev": true,
			"dependencies": {
				"string-width": "^1.0.2 || 2 || 3 || 4"
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
		"node_modules/workerpool": {
			"version": "6.2.0",
			"resolved": "https://registry.npmjs.org/workerpool/-/workerpool-6.2.0.tgz",
			"integrity": "sha512-Rsk5qQHJ9eowMH28Jwhe8HEbmdYDX4lwoMWshiCXugjtHqMD9ZbiqSDLxcsfdqsETPzVUtX5s1Z5kStiIM6l4A==",
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
		"node_modules/wrappy": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
			"integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
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
		"node_modules/write-json-file": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/write-json-file/-/write-json-file-4.3.0.tgz",
			"integrity": "sha512-PxiShnxf0IlnQuMYOPPhPkhExoCQuTUNPOa/2JWCYTmBquU9njyyDuwRKN26IZBlp4yn1nt+Agh2HOOBl+55HQ==",
			"dev": true,
			"dependencies": {
				"detect-indent": "^6.0.0",
				"graceful-fs": "^4.1.15",
				"is-plain-obj": "^2.0.0",
				"make-dir": "^3.0.0",
				"sort-keys": "^4.0.0",
				"write-file-atomic": "^3.0.0"
			},
			"engines": {
				"node": ">=8.3"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/write-json-file/node_modules/is-plain-obj": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-2.1.0.tgz",
			"integrity": "sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==",
			"dev": true,
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/write-pkg": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/write-pkg/-/write-pkg-4.0.0.tgz",
			"integrity": "sha512-v2UQ+50TNf2rNHJ8NyWttfm/EJUBWMJcx6ZTYZr6Qp52uuegWw/lBkCtCbnYZEmPRNL61m+u67dAmGxo+HTULA==",
			"dev": true,
			"dependencies": {
				"sort-keys": "^2.0.0",
				"type-fest": "^0.4.1",
				"write-json-file": "^3.2.0"
			},
			"engines": {
				"node": ">=8"
			}
		},
		"node_modules/write-pkg/node_modules/detect-indent": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/detect-indent/-/detect-indent-5.0.0.tgz",
			"integrity": "sha512-rlpvsxUtM0PQvy9iZe640/IWwWYyBsTApREbA1pHOpmOUIl9MkP/U4z7vTtg4Oaojvqhxt7sdufnT0EzGaR31g==",
			"dev": true,
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/write-pkg/node_modules/make-dir": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
			"integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
			"dev": true,
			"dependencies": {
				"pify": "^4.0.1",
				"semver": "^5.6.0"
			},
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/write-pkg/node_modules/pify": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
			"integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/write-pkg/node_modules/semver": {
			"version": "5.7.1",
			"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
			"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
			"dev": true,
			"bin": {
				"semver": "bin/semver"
			}
		},
		"node_modules/write-pkg/node_modules/sort-keys": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-2.0.0.tgz",
			"integrity": "sha1-ZYU1WEhh7JfXMNbPQYIuH1ZoQSg=",
			"dev": true,
			"dependencies": {
				"is-plain-obj": "^1.0.0"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/write-pkg/node_modules/type-fest": {
			"version": "0.4.1",
			"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.4.1.tgz",
			"integrity": "sha512-IwzA/LSfD2vC1/YDYMv/zHP4rDF1usCwllsDpbolT3D4fUepIO7f9K70jjmUewU/LmGUKJcwcVtDCpnKk4BPMw==",
			"dev": true,
			"engines": {
				"node": ">=6"
			}
		},
		"node_modules/write-pkg/node_modules/write-file-atomic": {
			"version": "2.4.3",
			"resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.3.tgz",
			"integrity": "sha512-GaETH5wwsX+GcnzhPgKcKjJ6M2Cq3/iZp1WyY/X1CSqrW+jVNM9Y7D8EC2sM4ZG/V8wZlSniJnCKWPmBYAucRQ==",
			"dev": true,
			"dependencies": {
				"graceful-fs": "^4.1.11",
				"imurmurhash": "^0.1.4",
				"signal-exit": "^3.0.2"
			}
		},
		"node_modules/write-pkg/node_modules/write-json-file": {
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/write-json-file/-/write-json-file-3.2.0.tgz",
			"integrity": "sha512-3xZqT7Byc2uORAatYiP3DHUUAVEkNOswEWNs9H5KXiicRTvzYzYqKjYc4G7p+8pltvAw641lVByKVtMpf+4sYQ==",
			"dev": true,
			"dependencies": {
				"detect-indent": "^5.0.0",
				"graceful-fs": "^4.1.15",
				"make-dir": "^2.1.0",
				"pify": "^4.0.1",
				"sort-keys": "^2.0.0",
				"write-file-atomic": "^2.4.2"
			},
			"engines": {
				"node": ">=6"
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
			"version": "20.2.4",
			"resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.4.tgz",
			"integrity": "sha512-WOkpgNhPTlE73h4VFAFsOnomJVaovO8VqLDzy5saChRBFQFBoMYirowyW+Q9HB4HFF4Z7VZTiG3iSzJJA29yRA==",
			"dev": true,
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/yargs-unparser": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/yargs-unparser/-/yargs-unparser-2.0.0.tgz",
			"integrity": "sha512-7pRTIA9Qc1caZ0bZ6RYRGbHJthJWuakf+WmHK0rVeLkNrrGhfoabBNdue6kdINI6r4if7ocq9aD/n7xwKOdzOA==",
			"dev": true,
			"dependencies": {
				"camelcase": "^6.0.0",
				"decamelize": "^4.0.0",
				"flat": "^5.0.2",
				"is-plain-obj": "^2.1.0"
			},
			"engines": {
				"node": ">=10"
			}
		},
		"node_modules/yargs-unparser/node_modules/decamelize": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/decamelize/-/decamelize-4.0.0.tgz",
			"integrity": "sha512-9iE1PgSik9HeIIw2JO94IidnE3eBoQrFJ3w7sFuzSX4DpmZ3v5sZpUiV5Swcf6mQEF+Y0ru8Neo+p+nyh2J+hQ==",
			"dev": true,
			"engines": {
				"node": ">=10"
			},
			"funding": {
				"url": "https://github.com/sponsors/sindresorhus"
			}
		},
		"node_modules/yargs-unparser/node_modules/is-plain-obj": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-2.1.0.tgz",
			"integrity": "sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==",
			"dev": true,
			"engines": {
				"node": ">=8"
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
		"@babel/code-frame": {
			"version": "7.16.7",
			"resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.16.7.tgz",
			"integrity": "sha512-iAXqUn8IIeBTNd72xsFlgaXHkMBMt6y4HJp1tIaK465CWLT/fG1aqB7ykr95gHHmlBdGbFeWWfyB4NJJ0nmeIg==",
			"dev": true,
			"requires": {
				"@babel/highlight": "^7.16.7"
			}
		},
		"@babel/helper-validator-identifier": {
			"version": "7.16.7",
			"resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.16.7.tgz",
			"integrity": "sha512-hsEnFemeiW4D08A5gUAZxLBTXpZ39P+a+DGDsHw1yxqyQ/jzFEnxf5uTEGp+3bzAbNOxU1paTgYS4ECU/IgfDw==",
			"dev": true
		},
		"@babel/highlight": {
			"version": "7.17.12",
			"resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.17.12.tgz",
			"integrity": "sha512-7yykMVF3hfZY2jsHZEEgLc+3x4o1O+fYyULu11GynEUQNwB6lua+IIQn1FiJxNucd5UlyJryrwsOh8PL9Sn8Qg==",
			"dev": true,
			"requires": {
				"@babel/helper-validator-identifier": "^7.16.7",
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
					"integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
					"dev": true
				},
				"escape-string-regexp": {
					"version": "1.0.5",
					"resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
					"integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
					"dev": true
				},
				"has-flag": {
					"version": "3.0.0",
					"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
					"integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
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
		"@eslint/eslintrc": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-1.3.0.tgz",
			"integrity": "sha512-UWW0TMTmk2d7hLcWD1/e2g5HDM/HQ3csaLSqXCfqwh4uNDuNqlaKWXmEsL4Cs41Z0KnILNvwbHAah3C2yt06kw==",
			"dev": true,
			"requires": {
				"ajv": "^6.12.4",
				"debug": "^4.3.2",
				"espree": "^9.3.2",
				"globals": "^13.15.0",
				"ignore": "^5.2.0",
				"import-fresh": "^3.2.1",
				"js-yaml": "^4.1.0",
				"minimatch": "^3.1.2",
				"strip-json-comments": "^3.1.1"
			}
		},
		"@gar/promisify": {
			"version": "1.1.3",
			"resolved": "https://registry.npmjs.org/@gar/promisify/-/promisify-1.1.3.tgz",
			"integrity": "sha512-k2Ty1JcVojjJFwrg/ThKi2ujJ7XNLYaFGNB/bWT9wGR+oSMJHMa5w+CUq6p/pVrKeNNgA7pCqEcjSnHVoqJQFw==",
			"dev": true
		},
		"@humanwhocodes/config-array": {
			"version": "0.9.5",
			"resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.9.5.tgz",
			"integrity": "sha512-ObyMyWxZiCu/yTisA7uzx81s40xR2fD5Cg/2Kq7G02ajkNubJf6BopgDTmDyc3U7sXpNKM8cYOw7s7Tyr+DnCw==",
			"dev": true,
			"requires": {
				"@humanwhocodes/object-schema": "^1.2.1",
				"debug": "^4.1.1",
				"minimatch": "^3.0.4"
			}
		},
		"@humanwhocodes/object-schema": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-1.2.1.tgz",
			"integrity": "sha512-ZnQMnLV4e7hDlUvw8H+U8ASL02SS2Gn6+9Ac3wGGLIe7+je2AeAOxPY+izIPJDfFDb7eDjev0Us8MO1iFRN8hA==",
			"dev": true
		},
		"@hutson/parse-repository-url": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/@hutson/parse-repository-url/-/parse-repository-url-3.0.2.tgz",
			"integrity": "sha512-H9XAx3hc0BQHY6l+IFSWHDySypcXsvsuLhgYLUGywmJ5pswRVQJUHpOsobnLYp2ZUaUlKiKDrgWWhosOwAEM8Q==",
			"dev": true
		},
		"@lerna/add": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/add/-/add-4.0.0.tgz",
			"integrity": "sha512-cpmAH1iS3k8JBxNvnMqrGTTjbY/ZAiKa1ChJzFevMYY3eeqbvhsBKnBcxjRXtdrJ6bd3dCQM+ZtK+0i682Fhng==",
			"dev": true,
			"requires": {
				"@lerna/bootstrap": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/filter-options": "4.0.0",
				"@lerna/npm-conf": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"dedent": "^0.7.0",
				"npm-package-arg": "^8.1.0",
				"p-map": "^4.0.0",
				"pacote": "^11.2.6",
				"semver": "^7.3.4"
			}
		},
		"@lerna/bootstrap": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/bootstrap/-/bootstrap-4.0.0.tgz",
			"integrity": "sha512-RkS7UbeM2vu+kJnHzxNRCLvoOP9yGNgkzRdy4UV2hNalD7EP41bLvRVOwRYQ7fhc2QcbhnKNdOBihYRL0LcKtw==",
			"dev": true,
			"requires": {
				"@lerna/command": "4.0.0",
				"@lerna/filter-options": "4.0.0",
				"@lerna/has-npm-version": "4.0.0",
				"@lerna/npm-install": "4.0.0",
				"@lerna/package-graph": "4.0.0",
				"@lerna/pulse-till-done": "4.0.0",
				"@lerna/rimraf-dir": "4.0.0",
				"@lerna/run-lifecycle": "4.0.0",
				"@lerna/run-topologically": "4.0.0",
				"@lerna/symlink-binary": "4.0.0",
				"@lerna/symlink-dependencies": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"dedent": "^0.7.0",
				"get-port": "^5.1.1",
				"multimatch": "^5.0.0",
				"npm-package-arg": "^8.1.0",
				"npmlog": "^4.1.2",
				"p-map": "^4.0.0",
				"p-map-series": "^2.1.0",
				"p-waterfall": "^2.1.1",
				"read-package-tree": "^5.3.1",
				"semver": "^7.3.4"
			}
		},
		"@lerna/changed": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/changed/-/changed-4.0.0.tgz",
			"integrity": "sha512-cD+KuPRp6qiPOD+BO6S6SN5cARspIaWSOqGBpGnYzLb4uWT8Vk4JzKyYtc8ym1DIwyoFXHosXt8+GDAgR8QrgQ==",
			"dev": true,
			"requires": {
				"@lerna/collect-updates": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/listable": "4.0.0",
				"@lerna/output": "4.0.0"
			}
		},
		"@lerna/check-working-tree": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/check-working-tree/-/check-working-tree-4.0.0.tgz",
			"integrity": "sha512-/++bxM43jYJCshBiKP5cRlCTwSJdRSxVmcDAXM+1oUewlZJVSVlnks5eO0uLxokVFvLhHlC5kHMc7gbVFPHv6Q==",
			"dev": true,
			"requires": {
				"@lerna/collect-uncommitted": "4.0.0",
				"@lerna/describe-ref": "4.0.0",
				"@lerna/validation-error": "4.0.0"
			}
		},
		"@lerna/child-process": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/child-process/-/child-process-4.0.0.tgz",
			"integrity": "sha512-XtCnmCT9eyVsUUHx6y/CTBYdV9g2Cr/VxyseTWBgfIur92/YKClfEtJTbOh94jRT62hlKLqSvux/UhxXVh613Q==",
			"dev": true,
			"requires": {
				"chalk": "^4.1.0",
				"execa": "^5.0.0",
				"strong-log-transformer": "^2.1.0"
			}
		},
		"@lerna/clean": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/clean/-/clean-4.0.0.tgz",
			"integrity": "sha512-uugG2iN9k45ITx2jtd8nEOoAtca8hNlDCUM0N3lFgU/b1mEQYAPRkqr1qs4FLRl/Y50ZJ41wUz1eazS+d/0osA==",
			"dev": true,
			"requires": {
				"@lerna/command": "4.0.0",
				"@lerna/filter-options": "4.0.0",
				"@lerna/prompt": "4.0.0",
				"@lerna/pulse-till-done": "4.0.0",
				"@lerna/rimraf-dir": "4.0.0",
				"p-map": "^4.0.0",
				"p-map-series": "^2.1.0",
				"p-waterfall": "^2.1.1"
			}
		},
		"@lerna/cli": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/cli/-/cli-4.0.0.tgz",
			"integrity": "sha512-Neaw3GzFrwZiRZv2g7g6NwFjs3er1vhraIniEs0jjVLPMNC4eata0na3GfE5yibkM/9d3gZdmihhZdZ3EBdvYA==",
			"dev": true,
			"requires": {
				"@lerna/global-options": "4.0.0",
				"dedent": "^0.7.0",
				"npmlog": "^4.1.2",
				"yargs": "^16.2.0"
			}
		},
		"@lerna/collect-uncommitted": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/collect-uncommitted/-/collect-uncommitted-4.0.0.tgz",
			"integrity": "sha512-ufSTfHZzbx69YNj7KXQ3o66V4RC76ffOjwLX0q/ab//61bObJ41n03SiQEhSlmpP+gmFbTJ3/7pTe04AHX9m/g==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"chalk": "^4.1.0",
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/collect-updates": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/collect-updates/-/collect-updates-4.0.0.tgz",
			"integrity": "sha512-bnNGpaj4zuxsEkyaCZLka9s7nMs58uZoxrRIPJ+nrmrZYp1V5rrd+7/NYTuunOhY2ug1sTBvTAxj3NZQ+JKnOw==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"@lerna/describe-ref": "4.0.0",
				"minimatch": "^3.0.4",
				"npmlog": "^4.1.2",
				"slash": "^3.0.0"
			}
		},
		"@lerna/command": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/command/-/command-4.0.0.tgz",
			"integrity": "sha512-LM9g3rt5FsPNFqIHUeRwWXLNHJ5NKzOwmVKZ8anSp4e1SPrv2HNc1V02/9QyDDZK/w+5POXH5lxZUI1CHaOK/A==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"@lerna/package-graph": "4.0.0",
				"@lerna/project": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"@lerna/write-log-file": "4.0.0",
				"clone-deep": "^4.0.1",
				"dedent": "^0.7.0",
				"execa": "^5.0.0",
				"is-ci": "^2.0.0",
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/conventional-commits": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/conventional-commits/-/conventional-commits-4.0.0.tgz",
			"integrity": "sha512-CSUQRjJHFrH8eBn7+wegZLV3OrNc0Y1FehYfYGhjLE2SIfpCL4bmfu/ViYuHh9YjwHaA+4SX6d3hR+xkeseKmw==",
			"dev": true,
			"requires": {
				"@lerna/validation-error": "4.0.0",
				"conventional-changelog-angular": "^5.0.12",
				"conventional-changelog-core": "^4.2.2",
				"conventional-recommended-bump": "^6.1.0",
				"fs-extra": "^9.1.0",
				"get-stream": "^6.0.0",
				"lodash.template": "^4.5.0",
				"npm-package-arg": "^8.1.0",
				"npmlog": "^4.1.2",
				"pify": "^5.0.0",
				"semver": "^7.3.4"
			}
		},
		"@lerna/create": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/create/-/create-4.0.0.tgz",
			"integrity": "sha512-mVOB1niKByEUfxlbKTM1UNECWAjwUdiioIbRQZEeEabtjCL69r9rscIsjlGyhGWCfsdAG5wfq4t47nlDXdLLag==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/npm-conf": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"dedent": "^0.7.0",
				"fs-extra": "^9.1.0",
				"globby": "^11.0.2",
				"init-package-json": "^2.0.2",
				"npm-package-arg": "^8.1.0",
				"p-reduce": "^2.1.0",
				"pacote": "^11.2.6",
				"pify": "^5.0.0",
				"semver": "^7.3.4",
				"slash": "^3.0.0",
				"validate-npm-package-license": "^3.0.4",
				"validate-npm-package-name": "^3.0.0",
				"whatwg-url": "^8.4.0",
				"yargs-parser": "20.2.4"
			}
		},
		"@lerna/create-symlink": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/create-symlink/-/create-symlink-4.0.0.tgz",
			"integrity": "sha512-I0phtKJJdafUiDwm7BBlEUOtogmu8+taxq6PtIrxZbllV9hWg59qkpuIsiFp+no7nfRVuaasNYHwNUhDAVQBig==",
			"dev": true,
			"requires": {
				"cmd-shim": "^4.1.0",
				"fs-extra": "^9.1.0",
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/describe-ref": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/describe-ref/-/describe-ref-4.0.0.tgz",
			"integrity": "sha512-eTU5+xC4C5Gcgz+Ey4Qiw9nV2B4JJbMulsYJMW8QjGcGh8zudib7Sduj6urgZXUYNyhYpRs+teci9M2J8u+UvQ==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/diff": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/diff/-/diff-4.0.0.tgz",
			"integrity": "sha512-jYPKprQVg41+MUMxx6cwtqsNm0Yxx9GDEwdiPLwcUTFx+/qKCEwifKNJ1oGIPBxyEHX2PFCOjkK39lHoj2qiag==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/exec": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/exec/-/exec-4.0.0.tgz",
			"integrity": "sha512-VGXtL/b/JfY84NB98VWZpIExfhLOzy0ozm/0XaS4a2SmkAJc5CeUfrhvHxxkxiTBLkU+iVQUyYEoAT0ulQ8PCw==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/filter-options": "4.0.0",
				"@lerna/profiler": "4.0.0",
				"@lerna/run-topologically": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"p-map": "^4.0.0"
			}
		},
		"@lerna/filter-options": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/filter-options/-/filter-options-4.0.0.tgz",
			"integrity": "sha512-vV2ANOeZhOqM0rzXnYcFFCJ/kBWy/3OA58irXih9AMTAlQLymWAK0akWybl++sUJ4HB9Hx12TOqaXbYS2NM5uw==",
			"dev": true,
			"requires": {
				"@lerna/collect-updates": "4.0.0",
				"@lerna/filter-packages": "4.0.0",
				"dedent": "^0.7.0",
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/filter-packages": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/filter-packages/-/filter-packages-4.0.0.tgz",
			"integrity": "sha512-+4AJIkK7iIiOaqCiVTYJxh/I9qikk4XjNQLhE3kixaqgMuHl1NQ99qXRR0OZqAWB9mh8Z1HA9bM5K1HZLBTOqA==",
			"dev": true,
			"requires": {
				"@lerna/validation-error": "4.0.0",
				"multimatch": "^5.0.0",
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/get-npm-exec-opts": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/get-npm-exec-opts/-/get-npm-exec-opts-4.0.0.tgz",
			"integrity": "sha512-yvmkerU31CTWS2c7DvmAWmZVeclPBqI7gPVr5VATUKNWJ/zmVcU4PqbYoLu92I9Qc4gY1TuUplMNdNuZTSL7IQ==",
			"dev": true,
			"requires": {
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/get-packed": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/get-packed/-/get-packed-4.0.0.tgz",
			"integrity": "sha512-rfWONRsEIGyPJTxFzC8ECb3ZbsDXJbfqWYyeeQQDrJRPnEJErlltRLPLgC2QWbxFgFPsoDLeQmFHJnf0iDfd8w==",
			"dev": true,
			"requires": {
				"fs-extra": "^9.1.0",
				"ssri": "^8.0.1",
				"tar": "^6.1.0"
			}
		},
		"@lerna/github-client": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/github-client/-/github-client-4.0.0.tgz",
			"integrity": "sha512-2jhsldZtTKXYUBnOm23Lb0Fx8G4qfSXF9y7UpyUgWUj+YZYd+cFxSuorwQIgk5P4XXrtVhsUesIsli+BYSThiw==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"@octokit/plugin-enterprise-rest": "^6.0.1",
				"@octokit/rest": "^18.1.0",
				"git-url-parse": "^11.4.4",
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/gitlab-client": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/gitlab-client/-/gitlab-client-4.0.0.tgz",
			"integrity": "sha512-OMUpGSkeDWFf7BxGHlkbb35T7YHqVFCwBPSIR6wRsszY8PAzCYahtH3IaJzEJyUg6vmZsNl0FSr3pdA2skhxqA==",
			"dev": true,
			"requires": {
				"node-fetch": "^2.6.1",
				"npmlog": "^4.1.2",
				"whatwg-url": "^8.4.0"
			}
		},
		"@lerna/global-options": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/global-options/-/global-options-4.0.0.tgz",
			"integrity": "sha512-TRMR8afAHxuYBHK7F++Ogop2a82xQjoGna1dvPOY6ltj/pEx59pdgcJfYcynYqMkFIk8bhLJJN9/ndIfX29FTQ==",
			"dev": true
		},
		"@lerna/has-npm-version": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/has-npm-version/-/has-npm-version-4.0.0.tgz",
			"integrity": "sha512-LQ3U6XFH8ZmLCsvsgq1zNDqka0Xzjq5ibVN+igAI5ccRWNaUsE/OcmsyMr50xAtNQMYMzmpw5GVLAivT2/YzCg==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"semver": "^7.3.4"
			}
		},
		"@lerna/import": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/import/-/import-4.0.0.tgz",
			"integrity": "sha512-FaIhd+4aiBousKNqC7TX1Uhe97eNKf5/SC7c5WZANVWtC7aBWdmswwDt3usrzCNpj6/Wwr9EtEbYROzxKH8ffg==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/prompt": "4.0.0",
				"@lerna/pulse-till-done": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"dedent": "^0.7.0",
				"fs-extra": "^9.1.0",
				"p-map-series": "^2.1.0"
			}
		},
		"@lerna/info": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/info/-/info-4.0.0.tgz",
			"integrity": "sha512-8Uboa12kaCSZEn4XRfPz5KU9XXoexSPS4oeYGj76s2UQb1O1GdnEyfjyNWoUl1KlJ2i/8nxUskpXIftoFYH0/Q==",
			"dev": true,
			"requires": {
				"@lerna/command": "4.0.0",
				"@lerna/output": "4.0.0",
				"envinfo": "^7.7.4"
			}
		},
		"@lerna/init": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/init/-/init-4.0.0.tgz",
			"integrity": "sha512-wY6kygop0BCXupzWj5eLvTUqdR7vIAm0OgyV9WHpMYQGfs1V22jhztt8mtjCloD/O0nEe4tJhdG62XU5aYmPNQ==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"@lerna/command": "4.0.0",
				"fs-extra": "^9.1.0",
				"p-map": "^4.0.0",
				"write-json-file": "^4.3.0"
			}
		},
		"@lerna/link": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/link/-/link-4.0.0.tgz",
			"integrity": "sha512-KlvPi7XTAcVOByfaLlOeYOfkkDcd+bejpHMCd1KcArcFTwijOwXOVi24DYomIeHvy6HsX/IUquJ4PPUJIeB4+w==",
			"dev": true,
			"requires": {
				"@lerna/command": "4.0.0",
				"@lerna/package-graph": "4.0.0",
				"@lerna/symlink-dependencies": "4.0.0",
				"p-map": "^4.0.0",
				"slash": "^3.0.0"
			}
		},
		"@lerna/list": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/list/-/list-4.0.0.tgz",
			"integrity": "sha512-L2B5m3P+U4Bif5PultR4TI+KtW+SArwq1i75QZ78mRYxPc0U/piau1DbLOmwrdqr99wzM49t0Dlvl6twd7GHFg==",
			"dev": true,
			"requires": {
				"@lerna/command": "4.0.0",
				"@lerna/filter-options": "4.0.0",
				"@lerna/listable": "4.0.0",
				"@lerna/output": "4.0.0"
			}
		},
		"@lerna/listable": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/listable/-/listable-4.0.0.tgz",
			"integrity": "sha512-/rPOSDKsOHs5/PBLINZOkRIX1joOXUXEtyUs5DHLM8q6/RP668x/1lFhw6Dx7/U+L0+tbkpGtZ1Yt0LewCLgeQ==",
			"dev": true,
			"requires": {
				"@lerna/query-graph": "4.0.0",
				"chalk": "^4.1.0",
				"columnify": "^1.5.4"
			}
		},
		"@lerna/log-packed": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/log-packed/-/log-packed-4.0.0.tgz",
			"integrity": "sha512-+dpCiWbdzgMAtpajLToy9PO713IHoE6GV/aizXycAyA07QlqnkpaBNZ8DW84gHdM1j79TWockGJo9PybVhrrZQ==",
			"dev": true,
			"requires": {
				"byte-size": "^7.0.0",
				"columnify": "^1.5.4",
				"has-unicode": "^2.0.1",
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/npm-conf": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/npm-conf/-/npm-conf-4.0.0.tgz",
			"integrity": "sha512-uS7H02yQNq3oejgjxAxqq/jhwGEE0W0ntr8vM3EfpCW1F/wZruwQw+7bleJQ9vUBjmdXST//tk8mXzr5+JXCfw==",
			"dev": true,
			"requires": {
				"config-chain": "^1.1.12",
				"pify": "^5.0.0"
			}
		},
		"@lerna/npm-dist-tag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/npm-dist-tag/-/npm-dist-tag-4.0.0.tgz",
			"integrity": "sha512-F20sg28FMYTgXqEQihgoqSfwmq+Id3zT23CnOwD+XQMPSy9IzyLf1fFVH319vXIw6NF6Pgs4JZN2Qty6/CQXGw==",
			"dev": true,
			"requires": {
				"@lerna/otplease": "4.0.0",
				"npm-package-arg": "^8.1.0",
				"npm-registry-fetch": "^9.0.0",
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/npm-install": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/npm-install/-/npm-install-4.0.0.tgz",
			"integrity": "sha512-aKNxq2j3bCH3eXl3Fmu4D54s/YLL9WSwV8W7X2O25r98wzrO38AUN6AB9EtmAx+LV/SP15et7Yueg9vSaanRWg==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"@lerna/get-npm-exec-opts": "4.0.0",
				"fs-extra": "^9.1.0",
				"npm-package-arg": "^8.1.0",
				"npmlog": "^4.1.2",
				"signal-exit": "^3.0.3",
				"write-pkg": "^4.0.0"
			}
		},
		"@lerna/npm-publish": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/npm-publish/-/npm-publish-4.0.0.tgz",
			"integrity": "sha512-vQb7yAPRo5G5r77DRjHITc9piR9gvEKWrmfCH7wkfBnGWEqu7n8/4bFQ7lhnkujvc8RXOsYpvbMQkNfkYibD/w==",
			"dev": true,
			"requires": {
				"@lerna/otplease": "4.0.0",
				"@lerna/run-lifecycle": "4.0.0",
				"fs-extra": "^9.1.0",
				"libnpmpublish": "^4.0.0",
				"npm-package-arg": "^8.1.0",
				"npmlog": "^4.1.2",
				"pify": "^5.0.0",
				"read-package-json": "^3.0.0"
			}
		},
		"@lerna/npm-run-script": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/npm-run-script/-/npm-run-script-4.0.0.tgz",
			"integrity": "sha512-Jmyh9/IwXJjOXqKfIgtxi0bxi1pUeKe5bD3S81tkcy+kyng/GNj9WSqD5ZggoNP2NP//s4CLDAtUYLdP7CU9rA==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"@lerna/get-npm-exec-opts": "4.0.0",
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/otplease": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/otplease/-/otplease-4.0.0.tgz",
			"integrity": "sha512-Sgzbqdk1GH4psNiT6hk+BhjOfIr/5KhGBk86CEfHNJTk9BK4aZYyJD4lpDbDdMjIV4g03G7pYoqHzH765T4fxw==",
			"dev": true,
			"requires": {
				"@lerna/prompt": "4.0.0"
			}
		},
		"@lerna/output": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/output/-/output-4.0.0.tgz",
			"integrity": "sha512-Un1sHtO1AD7buDQrpnaYTi2EG6sLF+KOPEAMxeUYG5qG3khTs2Zgzq5WE3dt2N/bKh7naESt20JjIW6tBELP0w==",
			"dev": true,
			"requires": {
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/pack-directory": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/pack-directory/-/pack-directory-4.0.0.tgz",
			"integrity": "sha512-NJrmZNmBHS+5aM+T8N6FVbaKFScVqKlQFJNY2k7nsJ/uklNKsLLl6VhTQBPwMTbf6Tf7l6bcKzpy7aePuq9UiQ==",
			"dev": true,
			"requires": {
				"@lerna/get-packed": "4.0.0",
				"@lerna/package": "4.0.0",
				"@lerna/run-lifecycle": "4.0.0",
				"npm-packlist": "^2.1.4",
				"npmlog": "^4.1.2",
				"tar": "^6.1.0",
				"temp-write": "^4.0.0"
			}
		},
		"@lerna/package": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/package/-/package-4.0.0.tgz",
			"integrity": "sha512-l0M/izok6FlyyitxiQKr+gZLVFnvxRQdNhzmQ6nRnN9dvBJWn+IxxpM+cLqGACatTnyo9LDzNTOj2Db3+s0s8Q==",
			"dev": true,
			"requires": {
				"load-json-file": "^6.2.0",
				"npm-package-arg": "^8.1.0",
				"write-pkg": "^4.0.0"
			}
		},
		"@lerna/package-graph": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/package-graph/-/package-graph-4.0.0.tgz",
			"integrity": "sha512-QED2ZCTkfXMKFoTGoccwUzjHtZMSf3UKX14A4/kYyBms9xfFsesCZ6SLI5YeySEgcul8iuIWfQFZqRw+Qrjraw==",
			"dev": true,
			"requires": {
				"@lerna/prerelease-id-from-version": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"npm-package-arg": "^8.1.0",
				"npmlog": "^4.1.2",
				"semver": "^7.3.4"
			}
		},
		"@lerna/prerelease-id-from-version": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/prerelease-id-from-version/-/prerelease-id-from-version-4.0.0.tgz",
			"integrity": "sha512-GQqguzETdsYRxOSmdFZ6zDBXDErIETWOqomLERRY54f4p+tk4aJjoVdd9xKwehC9TBfIFvlRbL1V9uQGHh1opg==",
			"dev": true,
			"requires": {
				"semver": "^7.3.4"
			}
		},
		"@lerna/profiler": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/profiler/-/profiler-4.0.0.tgz",
			"integrity": "sha512-/BaEbqnVh1LgW/+qz8wCuI+obzi5/vRE8nlhjPzdEzdmWmZXuCKyWSEzAyHOJWw1ntwMiww5dZHhFQABuoFz9Q==",
			"dev": true,
			"requires": {
				"fs-extra": "^9.1.0",
				"npmlog": "^4.1.2",
				"upath": "^2.0.1"
			}
		},
		"@lerna/project": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/project/-/project-4.0.0.tgz",
			"integrity": "sha512-o0MlVbDkD5qRPkFKlBZsXZjoNTWPyuL58564nSfZJ6JYNmgAptnWPB2dQlAc7HWRZkmnC2fCkEdoU+jioPavbg==",
			"dev": true,
			"requires": {
				"@lerna/package": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"cosmiconfig": "^7.0.0",
				"dedent": "^0.7.0",
				"dot-prop": "^6.0.1",
				"glob-parent": "^5.1.1",
				"globby": "^11.0.2",
				"load-json-file": "^6.2.0",
				"npmlog": "^4.1.2",
				"p-map": "^4.0.0",
				"resolve-from": "^5.0.0",
				"write-json-file": "^4.3.0"
			},
			"dependencies": {
				"glob-parent": {
					"version": "5.1.2",
					"resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
					"integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
					"dev": true,
					"requires": {
						"is-glob": "^4.0.1"
					}
				},
				"resolve-from": {
					"version": "5.0.0",
					"resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
					"integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
					"dev": true
				}
			}
		},
		"@lerna/prompt": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/prompt/-/prompt-4.0.0.tgz",
			"integrity": "sha512-4Ig46oCH1TH5M7YyTt53fT6TuaKMgqUUaqdgxvp6HP6jtdak6+amcsqB8YGz2eQnw/sdxunx84DfI9XpoLj4bQ==",
			"dev": true,
			"requires": {
				"inquirer": "^7.3.3",
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/publish": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/publish/-/publish-4.0.0.tgz",
			"integrity": "sha512-K8jpqjHrChH22qtkytA5GRKIVFEtqBF6JWj1I8dWZtHs4Jywn8yB1jQ3BAMLhqmDJjWJtRck0KXhQQKzDK2UPg==",
			"dev": true,
			"requires": {
				"@lerna/check-working-tree": "4.0.0",
				"@lerna/child-process": "4.0.0",
				"@lerna/collect-updates": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/describe-ref": "4.0.0",
				"@lerna/log-packed": "4.0.0",
				"@lerna/npm-conf": "4.0.0",
				"@lerna/npm-dist-tag": "4.0.0",
				"@lerna/npm-publish": "4.0.0",
				"@lerna/otplease": "4.0.0",
				"@lerna/output": "4.0.0",
				"@lerna/pack-directory": "4.0.0",
				"@lerna/prerelease-id-from-version": "4.0.0",
				"@lerna/prompt": "4.0.0",
				"@lerna/pulse-till-done": "4.0.0",
				"@lerna/run-lifecycle": "4.0.0",
				"@lerna/run-topologically": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"@lerna/version": "4.0.0",
				"fs-extra": "^9.1.0",
				"libnpmaccess": "^4.0.1",
				"npm-package-arg": "^8.1.0",
				"npm-registry-fetch": "^9.0.0",
				"npmlog": "^4.1.2",
				"p-map": "^4.0.0",
				"p-pipe": "^3.1.0",
				"pacote": "^11.2.6",
				"semver": "^7.3.4"
			}
		},
		"@lerna/pulse-till-done": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/pulse-till-done/-/pulse-till-done-4.0.0.tgz",
			"integrity": "sha512-Frb4F7QGckaybRhbF7aosLsJ5e9WuH7h0KUkjlzSByVycxY91UZgaEIVjS2oN9wQLrheLMHl6SiFY0/Pvo0Cxg==",
			"dev": true,
			"requires": {
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/query-graph": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/query-graph/-/query-graph-4.0.0.tgz",
			"integrity": "sha512-YlP6yI3tM4WbBmL9GCmNDoeQyzcyg1e4W96y/PKMZa5GbyUvkS2+Jc2kwPD+5KcXou3wQZxSPzR3Te5OenaDdg==",
			"dev": true,
			"requires": {
				"@lerna/package-graph": "4.0.0"
			}
		},
		"@lerna/resolve-symlink": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/resolve-symlink/-/resolve-symlink-4.0.0.tgz",
			"integrity": "sha512-RtX8VEUzqT+uLSCohx8zgmjc6zjyRlh6i/helxtZTMmc4+6O4FS9q5LJas2uGO2wKvBlhcD6siibGt7dIC3xZA==",
			"dev": true,
			"requires": {
				"fs-extra": "^9.1.0",
				"npmlog": "^4.1.2",
				"read-cmd-shim": "^2.0.0"
			}
		},
		"@lerna/rimraf-dir": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/rimraf-dir/-/rimraf-dir-4.0.0.tgz",
			"integrity": "sha512-QNH9ABWk9mcMJh2/muD9iYWBk1oQd40y6oH+f3wwmVGKYU5YJD//+zMiBI13jxZRtwBx0vmBZzkBkK1dR11cBg==",
			"dev": true,
			"requires": {
				"@lerna/child-process": "4.0.0",
				"npmlog": "^4.1.2",
				"path-exists": "^4.0.0",
				"rimraf": "^3.0.2"
			}
		},
		"@lerna/run": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/run/-/run-4.0.0.tgz",
			"integrity": "sha512-9giulCOzlMPzcZS/6Eov6pxE9gNTyaXk0Man+iCIdGJNMrCnW7Dme0Z229WWP/UoxDKg71F2tMsVVGDiRd8fFQ==",
			"dev": true,
			"requires": {
				"@lerna/command": "4.0.0",
				"@lerna/filter-options": "4.0.0",
				"@lerna/npm-run-script": "4.0.0",
				"@lerna/output": "4.0.0",
				"@lerna/profiler": "4.0.0",
				"@lerna/run-topologically": "4.0.0",
				"@lerna/timer": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"p-map": "^4.0.0"
			}
		},
		"@lerna/run-lifecycle": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/run-lifecycle/-/run-lifecycle-4.0.0.tgz",
			"integrity": "sha512-IwxxsajjCQQEJAeAaxF8QdEixfI7eLKNm4GHhXHrgBu185JcwScFZrj9Bs+PFKxwb+gNLR4iI5rpUdY8Y0UdGQ==",
			"dev": true,
			"requires": {
				"@lerna/npm-conf": "4.0.0",
				"npm-lifecycle": "^3.1.5",
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/run-topologically": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/run-topologically/-/run-topologically-4.0.0.tgz",
			"integrity": "sha512-EVZw9hGwo+5yp+VL94+NXRYisqgAlj0jWKWtAIynDCpghRxCE5GMO3xrQLmQgqkpUl9ZxQFpICgYv5DW4DksQA==",
			"dev": true,
			"requires": {
				"@lerna/query-graph": "4.0.0",
				"p-queue": "^6.6.2"
			}
		},
		"@lerna/symlink-binary": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/symlink-binary/-/symlink-binary-4.0.0.tgz",
			"integrity": "sha512-zualodWC4q1QQc1pkz969hcFeWXOsVYZC5AWVtAPTDfLl+TwM7eG/O6oP+Rr3fFowspxo6b1TQ6sYfDV6HXNWA==",
			"dev": true,
			"requires": {
				"@lerna/create-symlink": "4.0.0",
				"@lerna/package": "4.0.0",
				"fs-extra": "^9.1.0",
				"p-map": "^4.0.0"
			}
		},
		"@lerna/symlink-dependencies": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/symlink-dependencies/-/symlink-dependencies-4.0.0.tgz",
			"integrity": "sha512-BABo0MjeUHNAe2FNGty1eantWp8u83BHSeIMPDxNq0MuW2K3CiQRaeWT3EGPAzXpGt0+hVzBrA6+OT0GPn7Yuw==",
			"dev": true,
			"requires": {
				"@lerna/create-symlink": "4.0.0",
				"@lerna/resolve-symlink": "4.0.0",
				"@lerna/symlink-binary": "4.0.0",
				"fs-extra": "^9.1.0",
				"p-map": "^4.0.0",
				"p-map-series": "^2.1.0"
			}
		},
		"@lerna/timer": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/timer/-/timer-4.0.0.tgz",
			"integrity": "sha512-WFsnlaE7SdOvjuyd05oKt8Leg3ENHICnvX3uYKKdByA+S3g+TCz38JsNs7OUZVt+ba63nC2nbXDlUnuT2Xbsfg==",
			"dev": true
		},
		"@lerna/validation-error": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/validation-error/-/validation-error-4.0.0.tgz",
			"integrity": "sha512-1rBOM5/koiVWlRi3V6dB863E1YzJS8v41UtsHgMr6gB2ncJ2LsQtMKlJpi3voqcgh41H8UsPXR58RrrpPpufyw==",
			"dev": true,
			"requires": {
				"npmlog": "^4.1.2"
			}
		},
		"@lerna/version": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/version/-/version-4.0.0.tgz",
			"integrity": "sha512-otUgiqs5W9zGWJZSCCMRV/2Zm2A9q9JwSDS7s/tlKq4mWCYriWo7+wsHEA/nPTMDyYyBO5oyZDj+3X50KDUzeA==",
			"dev": true,
			"requires": {
				"@lerna/check-working-tree": "4.0.0",
				"@lerna/child-process": "4.0.0",
				"@lerna/collect-updates": "4.0.0",
				"@lerna/command": "4.0.0",
				"@lerna/conventional-commits": "4.0.0",
				"@lerna/github-client": "4.0.0",
				"@lerna/gitlab-client": "4.0.0",
				"@lerna/output": "4.0.0",
				"@lerna/prerelease-id-from-version": "4.0.0",
				"@lerna/prompt": "4.0.0",
				"@lerna/run-lifecycle": "4.0.0",
				"@lerna/run-topologically": "4.0.0",
				"@lerna/validation-error": "4.0.0",
				"chalk": "^4.1.0",
				"dedent": "^0.7.0",
				"load-json-file": "^6.2.0",
				"minimatch": "^3.0.4",
				"npmlog": "^4.1.2",
				"p-map": "^4.0.0",
				"p-pipe": "^3.1.0",
				"p-reduce": "^2.1.0",
				"p-waterfall": "^2.1.1",
				"semver": "^7.3.4",
				"slash": "^3.0.0",
				"temp-write": "^4.0.0",
				"write-json-file": "^4.3.0"
			}
		},
		"@lerna/write-log-file": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@lerna/write-log-file/-/write-log-file-4.0.0.tgz",
			"integrity": "sha512-XRG5BloiArpXRakcnPHmEHJp+4AtnhRtpDIHSghmXD5EichI1uD73J7FgPp30mm2pDRq3FdqB0NbwSEsJ9xFQg==",
			"dev": true,
			"requires": {
				"npmlog": "^4.1.2",
				"write-file-atomic": "^3.0.3"
			}
		},
		"@nodelib/fs.scandir": {
			"version": "2.1.5",
			"resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
			"integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
			"dev": true,
			"requires": {
				"@nodelib/fs.stat": "2.0.5",
				"run-parallel": "^1.1.9"
			}
		},
		"@nodelib/fs.stat": {
			"version": "2.0.5",
			"resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
			"integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
			"dev": true
		},
		"@nodelib/fs.walk": {
			"version": "1.2.8",
			"resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
			"integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
			"dev": true,
			"requires": {
				"@nodelib/fs.scandir": "2.1.5",
				"fastq": "^1.6.0"
			}
		},
		"@npmcli/ci-detect": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/@npmcli/ci-detect/-/ci-detect-1.4.0.tgz",
			"integrity": "sha512-3BGrt6FLjqM6br5AhWRKTr3u5GIVkjRYeAFrMp3HjnfICrg4xOrVRwFavKT6tsp++bq5dluL5t8ME/Nha/6c1Q==",
			"dev": true
		},
		"@npmcli/fs": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/@npmcli/fs/-/fs-1.1.1.tgz",
			"integrity": "sha512-8KG5RD0GVP4ydEzRn/I4BNDuxDtqVbOdm8675T49OIG/NGhaK0pjPX7ZcDlvKYbA+ulvVK3ztfcF4uBdOxuJbQ==",
			"dev": true,
			"requires": {
				"@gar/promisify": "^1.0.1",
				"semver": "^7.3.5"
			}
		},
		"@npmcli/git": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/@npmcli/git/-/git-2.1.0.tgz",
			"integrity": "sha512-/hBFX/QG1b+N7PZBFs0bi+evgRZcK9nWBxQKZkGoXUT5hJSwl5c4d7y8/hm+NQZRPhQ67RzFaj5UM9YeyKoryw==",
			"dev": true,
			"requires": {
				"@npmcli/promise-spawn": "^1.3.2",
				"lru-cache": "^6.0.0",
				"mkdirp": "^1.0.4",
				"npm-pick-manifest": "^6.1.1",
				"promise-inflight": "^1.0.1",
				"promise-retry": "^2.0.1",
				"semver": "^7.3.5",
				"which": "^2.0.2"
			}
		},
		"@npmcli/installed-package-contents": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/@npmcli/installed-package-contents/-/installed-package-contents-1.0.7.tgz",
			"integrity": "sha512-9rufe0wnJusCQoLpV9ZPKIVP55itrM5BxOXs10DmdbRfgWtHy1LDyskbwRnBghuB0PrF7pNPOqREVtpz4HqzKw==",
			"dev": true,
			"requires": {
				"npm-bundled": "^1.1.1",
				"npm-normalize-package-bin": "^1.0.1"
			}
		},
		"@npmcli/move-file": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/@npmcli/move-file/-/move-file-1.1.2.tgz",
			"integrity": "sha512-1SUf/Cg2GzGDyaf15aR9St9TWlb+XvbZXWpDx8YKs7MLzMH/BCeopv+y9vzrzgkfykCGuWOlSu3mZhj2+FQcrg==",
			"dev": true,
			"requires": {
				"mkdirp": "^1.0.4",
				"rimraf": "^3.0.2"
			}
		},
		"@npmcli/node-gyp": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/@npmcli/node-gyp/-/node-gyp-1.0.3.tgz",
			"integrity": "sha512-fnkhw+fmX65kiLqk6E3BFLXNC26rUhK90zVwe2yncPliVT/Qos3xjhTLE59Df8KnPlcwIERXKVlU1bXoUQ+liA==",
			"dev": true
		},
		"@npmcli/promise-spawn": {
			"version": "1.3.2",
			"resolved": "https://registry.npmjs.org/@npmcli/promise-spawn/-/promise-spawn-1.3.2.tgz",
			"integrity": "sha512-QyAGYo/Fbj4MXeGdJcFzZ+FkDkomfRBrPM+9QYJSg+PxgAUL+LU3FneQk37rKR2/zjqkCV1BLHccX98wRXG3Sg==",
			"dev": true,
			"requires": {
				"infer-owner": "^1.0.4"
			}
		},
		"@npmcli/run-script": {
			"version": "1.8.6",
			"resolved": "https://registry.npmjs.org/@npmcli/run-script/-/run-script-1.8.6.tgz",
			"integrity": "sha512-e42bVZnC6VluBZBAFEr3YrdqSspG3bgilyg4nSLBJ7TRGNCzxHa92XAHxQBLYg0BmgwO4b2mf3h/l5EkEWRn3g==",
			"dev": true,
			"requires": {
				"@npmcli/node-gyp": "^1.0.2",
				"@npmcli/promise-spawn": "^1.3.2",
				"node-gyp": "^7.1.0",
				"read-package-json-fast": "^2.0.1"
			},
			"dependencies": {
				"glob": {
					"version": "7.2.3",
					"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
					"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
					"dev": true,
					"requires": {
						"fs.realpath": "^1.0.0",
						"inflight": "^1.0.4",
						"inherits": "2",
						"minimatch": "^3.1.1",
						"once": "^1.3.0",
						"path-is-absolute": "^1.0.0"
					}
				},
				"node-gyp": {
					"version": "7.1.2",
					"resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-7.1.2.tgz",
					"integrity": "sha512-CbpcIo7C3eMu3dL1c3d0xw449fHIGALIJsRP4DDPHpyiW8vcriNY7ubh9TE4zEKfSxscY7PjeFnshE7h75ynjQ==",
					"dev": true,
					"requires": {
						"env-paths": "^2.2.0",
						"glob": "^7.1.4",
						"graceful-fs": "^4.2.3",
						"nopt": "^5.0.0",
						"npmlog": "^4.1.2",
						"request": "^2.88.2",
						"rimraf": "^3.0.2",
						"semver": "^7.3.2",
						"tar": "^6.0.2",
						"which": "^2.0.2"
					}
				},
				"nopt": {
					"version": "5.0.0",
					"resolved": "https://registry.npmjs.org/nopt/-/nopt-5.0.0.tgz",
					"integrity": "sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==",
					"dev": true,
					"requires": {
						"abbrev": "1"
					}
				}
			}
		},
		"@octokit/auth-token": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/@octokit/auth-token/-/auth-token-2.5.0.tgz",
			"integrity": "sha512-r5FVUJCOLl19AxiuZD2VRZ/ORjp/4IN98Of6YJoJOkY75CIBuYfmiNHGrDwXr+aLGG55igl9QrxX3hbiXlLb+g==",
			"dev": true,
			"requires": {
				"@octokit/types": "^6.0.3"
			}
		},
		"@octokit/core": {
			"version": "3.6.0",
			"resolved": "https://registry.npmjs.org/@octokit/core/-/core-3.6.0.tgz",
			"integrity": "sha512-7RKRKuA4xTjMhY+eG3jthb3hlZCsOwg3rztWh75Xc+ShDWOfDDATWbeZpAHBNRpm4Tv9WgBMOy1zEJYXG6NJ7Q==",
			"dev": true,
			"requires": {
				"@octokit/auth-token": "^2.4.4",
				"@octokit/graphql": "^4.5.8",
				"@octokit/request": "^5.6.3",
				"@octokit/request-error": "^2.0.5",
				"@octokit/types": "^6.0.3",
				"before-after-hook": "^2.2.0",
				"universal-user-agent": "^6.0.0"
			}
		},
		"@octokit/endpoint": {
			"version": "6.0.12",
			"resolved": "https://registry.npmjs.org/@octokit/endpoint/-/endpoint-6.0.12.tgz",
			"integrity": "sha512-lF3puPwkQWGfkMClXb4k/eUT/nZKQfxinRWJrdZaJO85Dqwo/G0yOC434Jr2ojwafWJMYqFGFa5ms4jJUgujdA==",
			"dev": true,
			"requires": {
				"@octokit/types": "^6.0.3",
				"is-plain-object": "^5.0.0",
				"universal-user-agent": "^6.0.0"
			}
		},
		"@octokit/graphql": {
			"version": "4.8.0",
			"resolved": "https://registry.npmjs.org/@octokit/graphql/-/graphql-4.8.0.tgz",
			"integrity": "sha512-0gv+qLSBLKF0z8TKaSKTsS39scVKF9dbMxJpj3U0vC7wjNWFuIpL/z76Qe2fiuCbDRcJSavkXsVtMS6/dtQQsg==",
			"dev": true,
			"requires": {
				"@octokit/request": "^5.6.0",
				"@octokit/types": "^6.0.3",
				"universal-user-agent": "^6.0.0"
			}
		},
		"@octokit/openapi-types": {
			"version": "11.2.0",
			"resolved": "https://registry.npmjs.org/@octokit/openapi-types/-/openapi-types-11.2.0.tgz",
			"integrity": "sha512-PBsVO+15KSlGmiI8QAzaqvsNlZlrDlyAJYcrXBCvVUxCp7VnXjkwPoFHgjEJXx3WF9BAwkA6nfCUA7i9sODzKA==",
			"dev": true
		},
		"@octokit/plugin-enterprise-rest": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/@octokit/plugin-enterprise-rest/-/plugin-enterprise-rest-6.0.1.tgz",
			"integrity": "sha512-93uGjlhUD+iNg1iWhUENAtJata6w5nE+V4urXOAlIXdco6xNZtUSfYY8dzp3Udy74aqO/B5UZL80x/YMa5PKRw==",
			"dev": true
		},
		"@octokit/plugin-paginate-rest": {
			"version": "2.17.0",
			"resolved": "https://registry.npmjs.org/@octokit/plugin-paginate-rest/-/plugin-paginate-rest-2.17.0.tgz",
			"integrity": "sha512-tzMbrbnam2Mt4AhuyCHvpRkS0oZ5MvwwcQPYGtMv4tUa5kkzG58SVB0fcsLulOZQeRnOgdkZWkRUiyBlh0Bkyw==",
			"dev": true,
			"requires": {
				"@octokit/types": "^6.34.0"
			}
		},
		"@octokit/plugin-request-log": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/@octokit/plugin-request-log/-/plugin-request-log-1.0.4.tgz",
			"integrity": "sha512-mLUsMkgP7K/cnFEw07kWqXGF5LKrOkD+lhCrKvPHXWDywAwuDUeDwWBpc69XK3pNX0uKiVt8g5z96PJ6z9xCFA==",
			"dev": true,
			"requires": {}
		},
		"@octokit/plugin-rest-endpoint-methods": {
			"version": "5.13.0",
			"resolved": "https://registry.npmjs.org/@octokit/plugin-rest-endpoint-methods/-/plugin-rest-endpoint-methods-5.13.0.tgz",
			"integrity": "sha512-uJjMTkN1KaOIgNtUPMtIXDOjx6dGYysdIFhgA52x4xSadQCz3b/zJexvITDVpANnfKPW/+E0xkOvLntqMYpviA==",
			"dev": true,
			"requires": {
				"@octokit/types": "^6.34.0",
				"deprecation": "^2.3.1"
			}
		},
		"@octokit/request": {
			"version": "5.6.3",
			"resolved": "https://registry.npmjs.org/@octokit/request/-/request-5.6.3.tgz",
			"integrity": "sha512-bFJl0I1KVc9jYTe9tdGGpAMPy32dLBXXo1dS/YwSCTL/2nd9XeHsY616RE3HPXDVk+a+dBuzyz5YdlXwcDTr2A==",
			"dev": true,
			"requires": {
				"@octokit/endpoint": "^6.0.1",
				"@octokit/request-error": "^2.1.0",
				"@octokit/types": "^6.16.1",
				"is-plain-object": "^5.0.0",
				"node-fetch": "^2.6.7",
				"universal-user-agent": "^6.0.0"
			}
		},
		"@octokit/request-error": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/@octokit/request-error/-/request-error-2.1.0.tgz",
			"integrity": "sha512-1VIvgXxs9WHSjicsRwq8PlR2LR2x6DwsJAaFgzdi0JfJoGSO8mYI/cHJQ+9FbN21aa+DrgNLnwObmyeSC8Rmpg==",
			"dev": true,
			"requires": {
				"@octokit/types": "^6.0.3",
				"deprecation": "^2.0.0",
				"once": "^1.4.0"
			}
		},
		"@octokit/rest": {
			"version": "18.12.0",
			"resolved": "https://registry.npmjs.org/@octokit/rest/-/rest-18.12.0.tgz",
			"integrity": "sha512-gDPiOHlyGavxr72y0guQEhLsemgVjwRePayJ+FcKc2SJqKUbxbkvf5kAZEWA/MKvsfYlQAMVzNJE3ezQcxMJ2Q==",
			"dev": true,
			"requires": {
				"@octokit/core": "^3.5.1",
				"@octokit/plugin-paginate-rest": "^2.16.8",
				"@octokit/plugin-request-log": "^1.0.4",
				"@octokit/plugin-rest-endpoint-methods": "^5.12.0"
			}
		},
		"@octokit/types": {
			"version": "6.34.0",
			"resolved": "https://registry.npmjs.org/@octokit/types/-/types-6.34.0.tgz",
			"integrity": "sha512-s1zLBjWhdEI2zwaoSgyOFoKSl109CUcVBCc7biPJ3aAf6LGLU6szDvi31JPU7bxfla2lqfhjbbg/5DdFNxOwHw==",
			"dev": true,
			"requires": {
				"@octokit/openapi-types": "^11.2.0"
			}
		},
		"@sinonjs/commons": {
			"version": "1.8.3",
			"resolved": "https://registry.npmjs.org/@sinonjs/commons/-/commons-1.8.3.tgz",
			"integrity": "sha512-xkNcLAn/wZaX14RPlwizcKicDk9G3F8m2nU3L7Ukm5zBgTwiT0wsoFAHx9Jq56fJA1z/7uKGtCRu16sOUCLIHQ==",
			"requires": {
				"type-detect": "4.0.8"
			}
		},
		"@sinonjs/fake-timers": {
			"version": "9.1.2",
			"resolved": "https://registry.npmjs.org/@sinonjs/fake-timers/-/fake-timers-9.1.2.tgz",
			"integrity": "sha512-BPS4ynJW/o92PUR4wgriz2Ud5gpST5vz6GQfMixEDK0Z8ZCUv2M7SkBLykH56T++Xs+8ln9zTGbOvNGIe02/jw==",
			"requires": {
				"@sinonjs/commons": "^1.7.0"
			}
		},
		"@sinonjs/samsam": {
			"version": "6.1.1",
			"resolved": "https://registry.npmjs.org/@sinonjs/samsam/-/samsam-6.1.1.tgz",
			"integrity": "sha512-cZ7rKJTLiE7u7Wi/v9Hc2fs3Ucc3jrWeMgPHbbTCeVAB2S0wOBbYlkJVeNSL04i7fdhT8wIbDq1zhC/PXTD2SA==",
			"requires": {
				"@sinonjs/commons": "^1.6.0",
				"lodash.get": "^4.4.2",
				"type-detect": "^4.0.8"
			}
		},
		"@sinonjs/text-encoding": {
			"version": "0.7.1",
			"resolved": "https://registry.npmjs.org/@sinonjs/text-encoding/-/text-encoding-0.7.1.tgz",
			"integrity": "sha512-+iTbntw2IZPb/anVDbypzfQa+ay64MW0Zo8aJ8gZPWMMK6/OubMVb6lUPMagqjOPnmtauXnFCACVl3O7ogjeqQ=="
		},
		"@tootallnate/once": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/@tootallnate/once/-/once-1.1.2.tgz",
			"integrity": "sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw==",
			"dev": true
		},
		"@types/minimatch": {
			"version": "3.0.5",
			"resolved": "https://registry.npmjs.org/@types/minimatch/-/minimatch-3.0.5.tgz",
			"integrity": "sha512-Klz949h02Gz2uZCMGwDUSDS1YBlTdDDgbWHi+81l29tQALUtvz4rAYi5uoVhE5Lagoq6DeqAUlbrHvW/mXDgdQ==",
			"dev": true
		},
		"@types/minimist": {
			"version": "1.2.2",
			"resolved": "https://registry.npmjs.org/@types/minimist/-/minimist-1.2.2.tgz",
			"integrity": "sha512-jhuKLIRrhvCPLqwPcx6INqmKeiA5EWrsCOPhrlFSrbrmU4ZMPjj5Ul/oLCMDO98XRUIwVm78xICz4EPCektzeQ==",
			"dev": true
		},
		"@types/normalize-package-data": {
			"version": "2.4.1",
			"resolved": "https://registry.npmjs.org/@types/normalize-package-data/-/normalize-package-data-2.4.1.tgz",
			"integrity": "sha512-Gj7cI7z+98M282Tqmp2K5EIsoouUEzbBJhQQzDE3jSIRk6r9gsz0oUokqIUR4u1R3dMHo0pDHM7sNOHyhulypw==",
			"dev": true
		},
		"@types/parse-json": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz",
			"integrity": "sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA==",
			"dev": true
		},
		"@ungap/promise-all-settled": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/@ungap/promise-all-settled/-/promise-all-settled-1.1.2.tgz",
			"integrity": "sha512-sL/cEvJWAnClXw0wHk85/2L0G6Sj8UB0Ctc1TEMbKSsmpRosqhwj9gWgFRZSrBr2f9tiXISwNhCPmlfqUqyb9Q==",
			"dev": true
		},
		"abbrev": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
			"integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
			"dev": true
		},
		"acorn": {
			"version": "8.7.1",
			"resolved": "https://registry.npmjs.org/acorn/-/acorn-8.7.1.tgz",
			"integrity": "sha512-Xx54uLJQZ19lKygFXOWsscKUbsBZW0CPykPhVQdhIeIwrbPmJzqeASDInc8nKBnp/JT6igTs82qPXz069H8I/A==",
			"dev": true
		},
		"acorn-jsx": {
			"version": "5.3.2",
			"resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
			"integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
			"dev": true,
			"requires": {}
		},
		"add-stream": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/add-stream/-/add-stream-1.0.0.tgz",
			"integrity": "sha512-qQLMr+8o0WC4FZGQTcJiKBVC59JylcPSrTtk6usvmIDFUOCKegapy1VHQwRbFMOFyb/inzUVqHs+eMYKDM1YeQ==",
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
		"agentkeepalive": {
			"version": "4.2.1",
			"resolved": "https://registry.npmjs.org/agentkeepalive/-/agentkeepalive-4.2.1.tgz",
			"integrity": "sha512-Zn4cw2NEqd+9fiSVWMscnjyQ1a8Yfoc5oBajLeo5w+YBHgDUcEBY2hS4YpTz6iN5f/2zQiktcuM6tS8x1p9dpA==",
			"dev": true,
			"requires": {
				"debug": "^4.1.0",
				"depd": "^1.1.2",
				"humanize-ms": "^1.2.1"
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
		"ansi-colors": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.1.tgz",
			"integrity": "sha512-JoX0apGbHaUJBNl6yF+p6JAFYZ666/hhCGKN5t9QFjbJQKUU/g8MNbFDbvfrgKXvI1QpZplPOnwIo99lX/AAmA==",
			"dev": true
		},
		"ansi-escapes": {
			"version": "4.3.2",
			"resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
			"integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
			"dev": true,
			"requires": {
				"type-fest": "^0.21.3"
			},
			"dependencies": {
				"type-fest": {
					"version": "0.21.3",
					"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
					"integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==",
					"dev": true
				}
			}
		},
		"ansi-regex": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
			"integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
			"dev": true
		},
		"ansi-styles": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
			"integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
			"requires": {
				"color-convert": "^2.0.1"
			}
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
		"aproba": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/aproba/-/aproba-2.0.0.tgz",
			"integrity": "sha512-lYe4Gx7QT+MKGbDsA+Z+he/Wtef0BiwDOlK/XkBrdfsh9J/jPPXbX0tE9x9cl27Tmu5gg3QUbUrQYa/y+KOHPQ==",
			"dev": true
		},
		"are-we-there-yet": {
			"version": "1.1.7",
			"resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.1.7.tgz",
			"integrity": "sha512-nxwy40TuMiUGqMyRHgCSWZ9FM4VAoRP4xUYSTv5ImRog+h9yISPbVH7H8fASCIzYn9wlEv4zvFL7uKDMCFQm3g==",
			"dev": true,
			"requires": {
				"delegates": "^1.0.0",
				"readable-stream": "^2.0.6"
			},
			"dependencies": {
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
				"safe-buffer": {
					"version": "5.1.2",
					"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
					"integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
					"dev": true
				},
				"string_decoder": {
					"version": "1.1.1",
					"resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
					"integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
					"dev": true,
					"requires": {
						"safe-buffer": "~5.1.0"
					}
				}
			}
		},
		"argparse": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
			"integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
			"dev": true
		},
		"array-differ": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/array-differ/-/array-differ-3.0.0.tgz",
			"integrity": "sha512-THtfYS6KtME/yIAhKjZ2ul7XI96lQGHRputJQHO80LAWQnuGP4iCIN8vdMRboGbIEYBwU33q8Tch1os2+X0kMg==",
			"dev": true
		},
		"array-ify": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/array-ify/-/array-ify-1.0.0.tgz",
			"integrity": "sha512-c5AMf34bKdvPhQ7tBGhqkgKNUzMr4WUs+WDtC2ZUGOUncbxKMTvqxYctiseW3+L4bA8ec+GcZ6/A/FW4m8ukng==",
			"dev": true
		},
		"array-union": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
			"integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
			"dev": true
		},
		"array.prototype.reduce": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/array.prototype.reduce/-/array.prototype.reduce-1.0.4.tgz",
			"integrity": "sha512-WnM+AjG/DvLRLo4DDl+r+SvCzYtD2Jd9oeBYMcEaI7t3fFrHY9M53/wdLcTvmZNQ70IU6Htj0emFkZ5TS+lrdw==",
			"dev": true,
			"requires": {
				"call-bind": "^1.0.2",
				"define-properties": "^1.1.3",
				"es-abstract": "^1.19.2",
				"es-array-method-boxes-properly": "^1.0.0",
				"is-string": "^1.0.7"
			}
		},
		"arrify": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
			"integrity": "sha512-3CYzex9M9FGQjCGMGyi6/31c8GJbgb0qGyrx5HWxPd0aCwh4cB2YjMb2Xf9UuoogrMrlO9cTqnB5rI5GHZTcUA==",
			"dev": true
		},
		"asap": {
			"version": "2.0.6",
			"resolved": "https://registry.npmjs.org/asap/-/asap-2.0.6.tgz",
			"integrity": "sha512-BSHWgDSAiKs50o2Re8ppvp3seVHXSRM44cdSsT9FfNEUUZLOGWVCsiWaRPWM1Znn+mqZ1OfVZ3z3DWEzSp7hRA==",
			"dev": true
		},
		"asn1": {
			"version": "0.2.6",
			"resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.6.tgz",
			"integrity": "sha512-ix/FxPn0MDjeyJ7i/yoHGFt/EX6LyNbxSEhPPXODPL+KB0VPk86UYfL0lMdy+KCnv+fmvIzySwaK5COwqVbWTQ==",
			"dev": true,
			"requires": {
				"safer-buffer": "~2.1.0"
			}
		},
		"assert-plus": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
			"integrity": "sha512-NfJ4UzBCcQGLDlQq7nHxH+tv3kyZ0hHQqF5BO6J7tNJeP5do1llPr8dZ8zHonfhAu0PHAdMkSo+8o0wxg9lZWw==",
			"dev": true
		},
		"asynckit": {
			"version": "0.4.0",
			"resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
			"integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
			"dev": true
		},
		"at-least-node": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/at-least-node/-/at-least-node-1.0.0.tgz",
			"integrity": "sha512-+q/t7Ekv1EDY2l6Gda6LLiX14rU9TV20Wa3ofeQmwPFZbOMo9DXrLbOjFaaclkXKWidIaopwAObQDqwWtGUjqg==",
			"dev": true
		},
		"aws-sign2": {
			"version": "0.7.0",
			"resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
			"integrity": "sha512-08kcGqnYf/YmjoRhfxyu+CLxBjUtHLXLXX/vUfx9l2LYzG3c1m61nrpyFUZI6zeS+Li/wWMMidD9KgrqtGq3mA==",
			"dev": true
		},
		"aws4": {
			"version": "1.11.0",
			"resolved": "https://registry.npmjs.org/aws4/-/aws4-1.11.0.tgz",
			"integrity": "sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA==",
			"dev": true
		},
		"balanced-match": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
			"integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
		},
		"bcrypt-pbkdf": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
			"integrity": "sha512-qeFIXtP4MSoi6NLqO12WfqARWWuCKi2Rn/9hJLEmtB5yTNr9DqFWkJRCf2qShWzPeAMRnOgCrq0sg/KLv5ES9w==",
			"dev": true,
			"requires": {
				"tweetnacl": "^0.14.3"
			}
		},
		"before-after-hook": {
			"version": "2.2.2",
			"resolved": "https://registry.npmjs.org/before-after-hook/-/before-after-hook-2.2.2.tgz",
			"integrity": "sha512-3pZEU3NT5BFUo/AD5ERPWOgQOCZITni6iavr5AUw5AUwQjMlI0kzu5btnyD39AF0gUEsDPwJT+oY1ORBJijPjQ==",
			"dev": true
		},
		"binary-extensions": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
			"integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
			"dev": true
		},
		"boolbase": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
			"integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww=="
		},
		"brace-expansion": {
			"version": "1.1.11",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
			"integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
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
		"browser-stdout": {
			"version": "1.3.1",
			"resolved": "https://registry.npmjs.org/browser-stdout/-/browser-stdout-1.3.1.tgz",
			"integrity": "sha512-qhAVI1+Av2X7qelOfAIYwXONood6XlZE/fXaBSmW/T5SzLAmCgzi+eiWE7fUvbHaeNBQH13UftjpXxsfLkMpgw==",
			"dev": true
		},
		"buffer-from": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
			"integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
			"dev": true
		},
		"builtins": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/builtins/-/builtins-1.0.3.tgz",
			"integrity": "sha512-uYBjakWipfaO/bXI7E8rq6kpwHRZK5cNYrUv2OzZSI/FvmdMyXJ2tG9dKcjEC5YHmHpUAwsargWIZNWdxb/bnQ==",
			"dev": true
		},
		"byline": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/byline/-/byline-5.0.0.tgz",
			"integrity": "sha512-s6webAy+R4SR8XVuJWt2V2rGvhnrhxN+9S15GNuTK3wKPOXFF6RNc+8ug2XhH+2s4f+uudG4kUVYmYOQWL2g0Q==",
			"dev": true
		},
		"byte-size": {
			"version": "7.0.1",
			"resolved": "https://registry.npmjs.org/byte-size/-/byte-size-7.0.1.tgz",
			"integrity": "sha512-crQdqyCwhokxwV1UyDzLZanhkugAgft7vt0qbbdt60C6Zf3CAiGmtUCylbtYwrU6loOUw3euGrNtW1J651ot1A==",
			"dev": true
		},
		"cacache": {
			"version": "15.3.0",
			"resolved": "https://registry.npmjs.org/cacache/-/cacache-15.3.0.tgz",
			"integrity": "sha512-VVdYzXEn+cnbXpFgWs5hTT7OScegHVmLhJIR8Ufqk3iFD6A6j5iSX1KuBTfNEv4tdJWE2PzA6IVFtcLC7fN9wQ==",
			"dev": true,
			"requires": {
				"@npmcli/fs": "^1.0.0",
				"@npmcli/move-file": "^1.0.1",
				"chownr": "^2.0.0",
				"fs-minipass": "^2.0.0",
				"glob": "^7.1.4",
				"infer-owner": "^1.0.4",
				"lru-cache": "^6.0.0",
				"minipass": "^3.1.1",
				"minipass-collect": "^1.0.2",
				"minipass-flush": "^1.0.5",
				"minipass-pipeline": "^1.2.2",
				"mkdirp": "^1.0.3",
				"p-map": "^4.0.0",
				"promise-inflight": "^1.0.1",
				"rimraf": "^3.0.2",
				"ssri": "^8.0.1",
				"tar": "^6.0.2",
				"unique-filename": "^1.1.1"
			},
			"dependencies": {
				"glob": {
					"version": "7.2.3",
					"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
					"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
					"dev": true,
					"requires": {
						"fs.realpath": "^1.0.0",
						"inflight": "^1.0.4",
						"inherits": "2",
						"minimatch": "^3.1.1",
						"once": "^1.3.0",
						"path-is-absolute": "^1.0.0"
					}
				}
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
			"version": "6.3.0",
			"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz",
			"integrity": "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==",
			"dev": true
		},
		"camelcase-keys": {
			"version": "7.0.2",
			"resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-7.0.2.tgz",
			"integrity": "sha512-Rjs1H+A9R+Ig+4E/9oyB66UC5Mj9Xq3N//vcLf2WzgdTi/3gUu3Z9KoqmlrEG4VuuLK8wJHofxzdQXz/knhiYg==",
			"dev": true,
			"requires": {
				"camelcase": "^6.3.0",
				"map-obj": "^4.1.0",
				"quick-lru": "^5.1.1",
				"type-fest": "^1.2.1"
			},
			"dependencies": {
				"type-fest": {
					"version": "1.4.0",
					"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-1.4.0.tgz",
					"integrity": "sha512-yGSza74xk0UG8k+pLh5oeoYirvIiWo5t0/o3zHHAO2tRDiZcxWP7fywNlXhqb6/r6sWvwi+RsyQMWhVLe4BVuA==",
					"dev": true
				}
			}
		},
		"caseless": {
			"version": "0.12.0",
			"resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
			"integrity": "sha512-4tYFyifaFfGacoiObjJegolkwSU4xQNGbVgUiNYVUxbQ2x2lUsFvY4hVgVzGiIe6WLOPqycWXA40l+PWsxthUw==",
			"dev": true
		},
		"chalk": {
			"version": "4.1.2",
			"resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
			"integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
			"requires": {
				"ansi-styles": "^4.1.0",
				"supports-color": "^7.1.0"
			}
		},
		"chardet": {
			"version": "0.7.0",
			"resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
			"integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",
			"dev": true
		},
		"cheerio": {
			"version": "1.0.0-rc.11",
			"resolved": "https://registry.npmjs.org/cheerio/-/cheerio-1.0.0-rc.11.tgz",
			"integrity": "sha512-bQwNaDIBKID5ts/DsdhxrjqFXYfLw4ste+wMKqWA8DyKcS4qwsPP4Bk8ZNaTJjvpiX/qW3BT4sU7d6Bh5i+dag==",
			"requires": {
				"cheerio-select": "^2.1.0",
				"dom-serializer": "^2.0.0",
				"domhandler": "^5.0.3",
				"domutils": "^3.0.1",
				"htmlparser2": "^8.0.1",
				"parse5": "^7.0.0",
				"parse5-htmlparser2-tree-adapter": "^7.0.0",
				"tslib": "^2.4.0"
			},
			"dependencies": {
				"tslib": {
					"version": "2.4.0",
					"resolved": "https://registry.npmjs.org/tslib/-/tslib-2.4.0.tgz",
					"integrity": "sha512-d6xOpEDfsi2CZVlPQzGeux8XMwLT9hssAsaPYExaQMuYskwb+x1x7J371tWlbBdWHroy99KnVB6qIkUbs5X3UQ=="
				}
			}
		},
		"cheerio-select": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/cheerio-select/-/cheerio-select-2.1.0.tgz",
			"integrity": "sha512-9v9kG0LvzrlcungtnJtpGNxY+fzECQKhK4EGJX2vByejiMX84MFNQw4UxPJl3bFbTMw+Dfs37XaIkCwTZfLh4g==",
			"requires": {
				"boolbase": "^1.0.0",
				"css-select": "^5.1.0",
				"css-what": "^6.1.0",
				"domelementtype": "^2.3.0",
				"domhandler": "^5.0.3",
				"domutils": "^3.0.1"
			}
		},
		"chokidar": {
			"version": "3.5.3",
			"resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.3.tgz",
			"integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",
			"dev": true,
			"requires": {
				"anymatch": "~3.1.2",
				"braces": "~3.0.2",
				"fsevents": "~2.3.2",
				"glob-parent": "~5.1.2",
				"is-binary-path": "~2.1.0",
				"is-glob": "~4.0.1",
				"normalize-path": "~3.0.0",
				"readdirp": "~3.6.0"
			},
			"dependencies": {
				"glob-parent": {
					"version": "5.1.2",
					"resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
					"integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
					"dev": true,
					"requires": {
						"is-glob": "^4.0.1"
					}
				}
			}
		},
		"chownr": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
			"integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==",
			"dev": true
		},
		"ci-info": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
			"integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ==",
			"dev": true
		},
		"clean-stack": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
			"integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
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
		"cli-width": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/cli-width/-/cli-width-3.0.0.tgz",
			"integrity": "sha512-FxqpkPPwu1HjuN93Omfm4h8uIanXofW0RxVEW3k5RKx+mJJYSthzNhp32Kzxxy3YAEZ/Dc/EWN1vZRY0+kOhbw==",
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
			"integrity": "sha512-JQHZ2QMW6l3aH/j6xCqQThY/9OH4D/9ls34cgkUBiEeocRTU04tHfKPBsUK1PqZCUQM7GiA0IIXJSuXHI64Kbg==",
			"dev": true
		},
		"clone-deep": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
			"integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
			"dev": true,
			"requires": {
				"is-plain-object": "^2.0.4",
				"kind-of": "^6.0.2",
				"shallow-clone": "^3.0.0"
			},
			"dependencies": {
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
		"cmd-shim": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/cmd-shim/-/cmd-shim-4.1.0.tgz",
			"integrity": "sha512-lb9L7EM4I/ZRVuljLPEtUJOP+xiQVknZ4ZMpMgEp4JzNldPb27HU03hi6K1/6CoIuit/Zm/LQXySErFeXxDprw==",
			"dev": true,
			"requires": {
				"mkdirp-infer-owner": "^2.0.0"
			}
		},
		"code-point-at": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
			"integrity": "sha512-RpAVKQA5T63xEj6/giIbUEtZwJ4UFIc3ZtvEkiaUERylqe8xb5IvqcgOurZLahv93CLKfxcw5YI+DZcUBRyLXA==",
			"dev": true
		},
		"color-convert": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
			"integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
			"requires": {
				"color-name": "~1.1.4"
			}
		},
		"color-name": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
			"integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
		},
		"columnify": {
			"version": "1.6.0",
			"resolved": "https://registry.npmjs.org/columnify/-/columnify-1.6.0.tgz",
			"integrity": "sha512-lomjuFZKfM6MSAnV9aCZC9sc0qGbmZdfygNv+nCpqVkSKdCxCklLtd16O0EILGkImHw9ZpHkAnHaB+8Zxq5W6Q==",
			"dev": true,
			"requires": {
				"strip-ansi": "^6.0.1",
				"wcwidth": "^1.0.0"
			}
		},
		"combined-stream": {
			"version": "1.0.8",
			"resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
			"integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
			"dev": true,
			"requires": {
				"delayed-stream": "~1.0.0"
			}
		},
		"commander": {
			"version": "9.3.0",
			"resolved": "https://registry.npmjs.org/commander/-/commander-9.3.0.tgz",
			"integrity": "sha512-hv95iU5uXPbK83mjrJKuZyFM/LBAoCV/XhVGkS5Je6tl7sxr6A0ITMw5WoRV46/UaJ46Nllm3Xt7IaJhXTIkzw=="
		},
		"compare-func": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/compare-func/-/compare-func-2.0.0.tgz",
			"integrity": "sha512-zHig5N+tPWARooBnb0Zx1MFcdfpyJrfTJ3Y5L+IFvUm8rM74hHz66z0gw0x4tijh5CorKkKUCnW82R2vmpeCRA==",
			"dev": true,
			"requires": {
				"array-ify": "^1.0.0",
				"dot-prop": "^5.1.0"
			},
			"dependencies": {
				"dot-prop": {
					"version": "5.3.0",
					"resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.3.0.tgz",
					"integrity": "sha512-QM8q3zDe58hqUqjraQOmzZ1LIH9SWQJTlEKCH4kJ2oQvLZk7RbQXvtDM2XEq3fwkV9CCvvH4LA0AV+ogFsBM2Q==",
					"dev": true,
					"requires": {
						"is-obj": "^2.0.0"
					}
				}
			}
		},
		"concat-map": {
			"version": "0.0.1",
			"resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
			"integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg=="
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
		"config-chain": {
			"version": "1.1.13",
			"resolved": "https://registry.npmjs.org/config-chain/-/config-chain-1.1.13.tgz",
			"integrity": "sha512-qj+f8APARXHrM0hraqXYb2/bOVSV4PvJQlNZ/DVj0QrmNM2q2euizkeuVckQ57J+W0mRH6Hvi+k50M4Jul2VRQ==",
			"dev": true,
			"requires": {
				"ini": "^1.3.4",
				"proto-list": "~1.2.1"
			}
		},
		"console-control-strings": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
			"integrity": "sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ==",
			"dev": true
		},
		"conventional-changelog-angular": {
			"version": "5.0.13",
			"resolved": "https://registry.npmjs.org/conventional-changelog-angular/-/conventional-changelog-angular-5.0.13.tgz",
			"integrity": "sha512-i/gipMxs7s8L/QeuavPF2hLnJgH6pEZAttySB6aiQLWcX3puWDL3ACVmvBhJGxnAy52Qc15ua26BufY6KpmrVA==",
			"dev": true,
			"requires": {
				"compare-func": "^2.0.0",
				"q": "^1.5.1"
			}
		},
		"conventional-changelog-core": {
			"version": "4.2.4",
			"resolved": "https://registry.npmjs.org/conventional-changelog-core/-/conventional-changelog-core-4.2.4.tgz",
			"integrity": "sha512-gDVS+zVJHE2v4SLc6B0sLsPiloR0ygU7HaDW14aNJE1v4SlqJPILPl/aJC7YdtRE4CybBf8gDwObBvKha8Xlyg==",
			"dev": true,
			"requires": {
				"add-stream": "^1.0.0",
				"conventional-changelog-writer": "^5.0.0",
				"conventional-commits-parser": "^3.2.0",
				"dateformat": "^3.0.0",
				"get-pkg-repo": "^4.0.0",
				"git-raw-commits": "^2.0.8",
				"git-remote-origin-url": "^2.0.0",
				"git-semver-tags": "^4.1.1",
				"lodash": "^4.17.15",
				"normalize-package-data": "^3.0.0",
				"q": "^1.5.1",
				"read-pkg": "^3.0.0",
				"read-pkg-up": "^3.0.0",
				"through2": "^4.0.0"
			}
		},
		"conventional-changelog-preset-loader": {
			"version": "2.3.4",
			"resolved": "https://registry.npmjs.org/conventional-changelog-preset-loader/-/conventional-changelog-preset-loader-2.3.4.tgz",
			"integrity": "sha512-GEKRWkrSAZeTq5+YjUZOYxdHq+ci4dNwHvpaBC3+ENalzFWuCWa9EZXSuZBpkr72sMdKB+1fyDV4takK1Lf58g==",
			"dev": true
		},
		"conventional-changelog-writer": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/conventional-changelog-writer/-/conventional-changelog-writer-5.0.1.tgz",
			"integrity": "sha512-5WsuKUfxW7suLblAbFnxAcrvf6r+0b7GvNaWUwUIk0bXMnENP/PEieGKVUQrjPqwPT4o3EPAASBXiY6iHooLOQ==",
			"dev": true,
			"requires": {
				"conventional-commits-filter": "^2.0.7",
				"dateformat": "^3.0.0",
				"handlebars": "^4.7.7",
				"json-stringify-safe": "^5.0.1",
				"lodash": "^4.17.15",
				"meow": "^8.0.0",
				"semver": "^6.0.0",
				"split": "^1.0.0",
				"through2": "^4.0.0"
			},
			"dependencies": {
				"camelcase": {
					"version": "5.3.1",
					"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
					"integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
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
					}
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
				"hosted-git-info": {
					"version": "2.8.9",
					"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
					"integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
					"dev": true
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
				"quick-lru": {
					"version": "4.0.1",
					"resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-4.0.1.tgz",
					"integrity": "sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==",
					"dev": true
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
				"semver": {
					"version": "6.3.0",
					"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
					"integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
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
				"trim-newlines": {
					"version": "3.0.1",
					"resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-3.0.1.tgz",
					"integrity": "sha512-c1PTsA3tYrIsLGkJkzHF+w9F2EyxfXGo4UyJc4pFL++FMjnq0HJS69T3M7d//gKrFKwy429bouPescbjecU+Zw==",
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
			"version": "3.2.4",
			"resolved": "https://registry.npmjs.org/conventional-commits-parser/-/conventional-commits-parser-3.2.4.tgz",
			"integrity": "sha512-nK7sAtfi+QXbxHCYfhpZsfRtaitZLIA6889kFIouLvz6repszQDgxBu7wf2WbU+Dco7sAnNCJYERCwt54WPC2Q==",
			"dev": true,
			"requires": {
				"is-text-path": "^1.0.1",
				"JSONStream": "^1.0.4",
				"lodash": "^4.17.15",
				"meow": "^8.0.0",
				"split2": "^3.0.0",
				"through2": "^4.0.0"
			},
			"dependencies": {
				"camelcase": {
					"version": "5.3.1",
					"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
					"integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
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
					}
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
				"hosted-git-info": {
					"version": "2.8.9",
					"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
					"integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
					"dev": true
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
				"quick-lru": {
					"version": "4.0.1",
					"resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-4.0.1.tgz",
					"integrity": "sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==",
					"dev": true
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
						"type-fest": {
							"version": "0.6.0",
							"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
							"integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
							"dev": true
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
				"semver": {
					"version": "5.7.1",
					"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
					"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
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
				"trim-newlines": {
					"version": "3.0.1",
					"resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-3.0.1.tgz",
					"integrity": "sha512-c1PTsA3tYrIsLGkJkzHF+w9F2EyxfXGo4UyJc4pFL++FMjnq0HJS69T3M7d//gKrFKwy429bouPescbjecU+Zw==",
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
				"camelcase": {
					"version": "5.3.1",
					"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
					"integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
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
					}
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
				"hosted-git-info": {
					"version": "2.8.9",
					"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
					"integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
					"dev": true
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
				"quick-lru": {
					"version": "4.0.1",
					"resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-4.0.1.tgz",
					"integrity": "sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==",
					"dev": true
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
						"type-fest": {
							"version": "0.6.0",
							"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
							"integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
							"dev": true
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
				"semver": {
					"version": "5.7.1",
					"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
					"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
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
				"trim-newlines": {
					"version": "3.0.1",
					"resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-3.0.1.tgz",
					"integrity": "sha512-c1PTsA3tYrIsLGkJkzHF+w9F2EyxfXGo4UyJc4pFL++FMjnq0HJS69T3M7d//gKrFKwy429bouPescbjecU+Zw==",
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
		"core-util-is": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
			"integrity": "sha512-3lqz5YjWTYnW6dlDa5TLaTCcShfar1e40rmcJVwCBJC6mWlFuj0eCHIElmG1g5kyuJ/GD+8Wn4FFCcz4gJPfaQ==",
			"dev": true
		},
		"cosmiconfig": {
			"version": "7.0.1",
			"resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.1.tgz",
			"integrity": "sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==",
			"dev": true,
			"requires": {
				"@types/parse-json": "^4.0.0",
				"import-fresh": "^3.2.1",
				"parse-json": "^5.0.0",
				"path-type": "^4.0.0",
				"yaml": "^1.10.0"
			}
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
			}
		},
		"css-select": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/css-select/-/css-select-5.1.0.tgz",
			"integrity": "sha512-nwoRF1rvRRnnCqqY7updORDsuqKzqYJ28+oSMaJMMgOauh3fvwHqMS7EZpIPqK8GL+g9mKxF1vP/ZjSeNjEVHg==",
			"requires": {
				"boolbase": "^1.0.0",
				"css-what": "^6.1.0",
				"domhandler": "^5.0.2",
				"domutils": "^3.0.1",
				"nth-check": "^2.0.1"
			}
		},
		"css-what": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/css-what/-/css-what-6.1.0.tgz",
			"integrity": "sha512-HTUrgRJ7r4dsZKU6GjmpfRK1O76h97Z8MfS1G0FozR+oF2kG6Vfe8JE6zwrkbxigziPHinCJ+gCPjA9EaBDtRw=="
		},
		"dargs": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/dargs/-/dargs-7.0.0.tgz",
			"integrity": "sha512-2iy1EkLdlBzQGvbweYRFxmFath8+K7+AKB0TlhHWkNuH+TmovaMH/Wp7V7R4u7f4SnX3OgLsU9t1NI9ioDnUpg==",
			"dev": true
		},
		"dashdash": {
			"version": "1.14.1",
			"resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
			"integrity": "sha512-jRFi8UDGo6j+odZiEpjazZaWqEal3w/basFjQHQEwVtZJGDpxbH1MeYluwCS8Xq5wmLJooDlMgvVarmWfGM44g==",
			"dev": true,
			"requires": {
				"assert-plus": "^1.0.0"
			}
		},
		"dateformat": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/dateformat/-/dateformat-3.0.3.tgz",
			"integrity": "sha512-jyCETtSl3VMZMWeRo7iY1FL19ges1t55hMo5yaam4Jrsm5EPL89UQkoQRyiI+Yf4k8r2ZpdngkV8hr1lIdjb3Q==",
			"dev": true
		},
		"debug": {
			"version": "4.3.4",
			"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
			"integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
			"dev": true,
			"requires": {
				"ms": "2.1.2"
			}
		},
		"debuglog": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/debuglog/-/debuglog-1.0.1.tgz",
			"integrity": "sha512-syBZ+rnAK3EgMsH2aYEOLUW7mZSY9Gb+0wUMCFsZvcmiz+HigA0LOcq/HoQqVuGG+EKykunc7QG2bzrponfaSw==",
			"dev": true
		},
		"decamelize": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/decamelize/-/decamelize-5.0.1.tgz",
			"integrity": "sha512-VfxadyCECXgQlkoEAjeghAr5gY3Hf+IKjKb+X8tGVDtveCjN+USwprd2q3QXBR9T1+x2DG0XZF5/w+7HAtSaXA==",
			"dev": true
		},
		"decamelize-keys": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/decamelize-keys/-/decamelize-keys-1.1.0.tgz",
			"integrity": "sha512-ocLWuYzRPoS9bfiSdDd3cxvrzovVMZnRDVEzAs+hWIVXGDbHxWMECij2OBuyB/An0FFW/nLuq6Kv1i/YC5Qfzg==",
			"dev": true,
			"requires": {
				"decamelize": "^1.1.0",
				"map-obj": "^1.0.0"
			},
			"dependencies": {
				"decamelize": {
					"version": "1.2.0",
					"resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
					"integrity": "sha512-z2S+W9X73hAUUki+N+9Za2lBlun89zigOyGrsax+KUQ6wKW4ZoWpEYBkGhQjwAjjDCkWxhY0VKEhk8wzY7F5cA==",
					"dev": true
				},
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
			"integrity": "sha512-hjf+xovcEn31w/EUYdTXQh/8smFL/dzYjohQGEIgjyNavaJfBY2p5F527Bo1VPATxv0VYTUC2bOcXvqFwk78Og==",
			"dev": true
		},
		"dedent": {
			"version": "0.7.0",
			"resolved": "https://registry.npmjs.org/dedent/-/dedent-0.7.0.tgz",
			"integrity": "sha512-Q6fKUPqnAHAyhiUgFU7BUzLiv0kd8saH9al7tnu5Q/okj6dnupxyTgFIBjVzJATdfIAm9NAsvXNzjaKa+bxVyA==",
			"dev": true
		},
		"deep-is": {
			"version": "0.1.4",
			"resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
			"integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
			"dev": true
		},
		"defaults": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
			"integrity": "sha512-s82itHOnYrN0Ib8r+z7laQz3sdE+4FP3d9Q7VLO7U+KRT+CR0GsWuyHxzdAY82I7cXv0G/twrqomTJLOssO5HA==",
			"dev": true,
			"requires": {
				"clone": "^1.0.2"
			}
		},
		"define-properties": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.4.tgz",
			"integrity": "sha512-uckOqKcfaVvtBdsVkdPv3XjveQJsNQqmhXgRi8uhvWWuPYZCNlzT8qAyblUgNoXdHdjMTzAqeGjAoli8f+bzPA==",
			"dev": true,
			"requires": {
				"has-property-descriptors": "^1.0.0",
				"object-keys": "^1.1.1"
			}
		},
		"del": {
			"version": "6.1.1",
			"resolved": "https://registry.npmjs.org/del/-/del-6.1.1.tgz",
			"integrity": "sha512-ua8BhapfP0JUJKC/zV9yHHDW/rDoDxP4Zhn3AkA6/xT6gY7jYXJiaeyBZznYVujhZZET+UgcbZiQ7sN3WqcImg==",
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
		"del-cli": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/del-cli/-/del-cli-4.0.1.tgz",
			"integrity": "sha512-KtR/6cBfZkGDAP2NA7z+bP4p1OMob3wjN9mq13+SWvExx6jT9gFWfLgXEeX8J2B47OKeNCq9yTONmtryQ+m+6g==",
			"dev": true,
			"requires": {
				"del": "^6.0.0",
				"meow": "^10.1.0"
			}
		},
		"delayed-stream": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
			"integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
			"dev": true
		},
		"delegates": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
			"integrity": "sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ==",
			"dev": true
		},
		"depd": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
			"integrity": "sha512-7emPTl6Dpo6JRXOXjLRxck+FlLRX5847cLKEn00PLAgc3g2hTZZgr+e4c2v6QpSmLeFP3n5yUo7ft6avBK/5jQ==",
			"dev": true
		},
		"deprecation": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/deprecation/-/deprecation-2.3.1.tgz",
			"integrity": "sha512-xmHIy4F3scKVwMsQ4WnVaS8bHOx0DmVwRywosKhaILI0ywMDWPtBSku2HNxRvF7jtwDRsoEwYQSfbxj8b7RlJQ==",
			"dev": true
		},
		"detect-indent": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/detect-indent/-/detect-indent-6.1.0.tgz",
			"integrity": "sha512-reYkTUJAZb9gUuZ2RvVCNhVHdg62RHnJ7WJl8ftMi4diZ6NWlciOzQN88pUhSELEwflJht4oQDv0F0BMlwaYtA==",
			"dev": true
		},
		"dezalgo": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/dezalgo/-/dezalgo-1.0.4.tgz",
			"integrity": "sha512-rXSP0bf+5n0Qonsb+SVVfNfIsimO4HEtmnIpPHY8Q1UCzKlQrDMfdobr8nJOOsRgWCyMRqeSBQzmWUMq7zvVig==",
			"dev": true,
			"requires": {
				"asap": "^2.0.0",
				"wrappy": "1"
			}
		},
		"diff": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/diff/-/diff-5.0.0.tgz",
			"integrity": "sha512-/VTCrvm5Z0JGty/BWHljh+BAiw3IK+2j87NGMu8Nwc/f48WoDAC395uomO9ZD117ZOBaHmkX1oyLvkVM/aIT3w=="
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
		"dom-serializer": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-2.0.0.tgz",
			"integrity": "sha512-wIkAryiqt/nV5EQKqQpo3SToSOV9J0DnbJqwK7Wv/Trc92zIAYZ4FlMu+JPFW1DfGFt81ZTCGgDEabffXeLyJg==",
			"requires": {
				"domelementtype": "^2.3.0",
				"domhandler": "^5.0.2",
				"entities": "^4.2.0"
			}
		},
		"domelementtype": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.3.0.tgz",
			"integrity": "sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw=="
		},
		"domhandler": {
			"version": "5.0.3",
			"resolved": "https://registry.npmjs.org/domhandler/-/domhandler-5.0.3.tgz",
			"integrity": "sha512-cgwlv/1iFQiFnU96XXgROh8xTeetsnJiDsTc7TYCLFd9+/WNkIqPTxiM/8pSd8VIrhXGTf1Ny1q1hquVqDJB5w==",
			"requires": {
				"domelementtype": "^2.3.0"
			}
		},
		"domutils": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/domutils/-/domutils-3.0.1.tgz",
			"integrity": "sha512-z08c1l761iKhDFtfXO04C7kTdPBLi41zwOZl00WS8b5eiaebNpY00HKbztwBq+e3vyqWNwWF3mP9YLUeqIrF+Q==",
			"requires": {
				"dom-serializer": "^2.0.0",
				"domelementtype": "^2.3.0",
				"domhandler": "^5.0.1"
			}
		},
		"dot-prop": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-6.0.1.tgz",
			"integrity": "sha512-tE7ztYzXHIeyvc7N+hR3oi7FIbf/NIjVP9hmAt3yMXzrQ072/fpjGLx2GxNxGxUl5V73MEqYzioOMoVhGMJ5cA==",
			"dev": true,
			"requires": {
				"is-obj": "^2.0.0"
			}
		},
		"duplexer": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/duplexer/-/duplexer-0.1.2.tgz",
			"integrity": "sha512-jtD6YG370ZCIi/9GTaJKQxWTZD045+4R4hTk/x1UyoqadyJ9x9CgSi1RlVDQF8U2sxLLSnFkCaMihqljHIWgMg==",
			"dev": true
		},
		"ecc-jsbn": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
			"integrity": "sha512-eh9O+hwRHNbG4BLTjEl3nw044CkGm5X6LoaCf7LPp7UU8Qrt47JYNi6nPX8xjW97TKGKm1ouctg0QSpZe9qrnw==",
			"dev": true,
			"requires": {
				"jsbn": "~0.1.0",
				"safer-buffer": "^2.1.0"
			}
		},
		"emoji-regex": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
			"integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
			"dev": true
		},
		"encoding": {
			"version": "0.1.13",
			"resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.13.tgz",
			"integrity": "sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==",
			"dev": true,
			"optional": true,
			"requires": {
				"iconv-lite": "^0.6.2"
			},
			"dependencies": {
				"iconv-lite": {
					"version": "0.6.3",
					"resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
					"integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
					"dev": true,
					"optional": true,
					"requires": {
						"safer-buffer": ">= 2.1.2 < 3.0.0"
					}
				}
			}
		},
		"entities": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/entities/-/entities-4.3.0.tgz",
			"integrity": "sha512-/iP1rZrSEJ0DTlPiX+jbzlA3eVkY/e8L8SozroF395fIqE3TYF/Nz7YOMAawta+vLmyJ/hkGNNPcSbMADCCXbg=="
		},
		"env-paths": {
			"version": "2.2.1",
			"resolved": "https://registry.npmjs.org/env-paths/-/env-paths-2.2.1.tgz",
			"integrity": "sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==",
			"dev": true
		},
		"envinfo": {
			"version": "7.8.1",
			"resolved": "https://registry.npmjs.org/envinfo/-/envinfo-7.8.1.tgz",
			"integrity": "sha512-/o+BXHmB7ocbHEAs6F2EnG0ogybVVUdkRunTT2glZU9XAaGmhqskrvKwqXuDfNjEO0LZKWdejEEpnq8aM0tOaw==",
			"dev": true
		},
		"err-code": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/err-code/-/err-code-2.0.3.tgz",
			"integrity": "sha512-2bmlRpNKBxT/CRmPOlyISQpNj+qSeYvcym/uT0Jx2bMOlKLtSy1ZmLuVxSEKKyor/N5yhvp/ZiG1oE3DEYMSFA==",
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
			"version": "1.20.1",
			"resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.20.1.tgz",
			"integrity": "sha512-WEm2oBhfoI2sImeM4OF2zE2V3BYdSF+KnSi9Sidz51fQHd7+JuF8Xgcj9/0o+OWeIeIS/MiuNnlruQrJf16GQA==",
			"dev": true,
			"requires": {
				"call-bind": "^1.0.2",
				"es-to-primitive": "^1.2.1",
				"function-bind": "^1.1.1",
				"function.prototype.name": "^1.1.5",
				"get-intrinsic": "^1.1.1",
				"get-symbol-description": "^1.0.0",
				"has": "^1.0.3",
				"has-property-descriptors": "^1.0.0",
				"has-symbols": "^1.0.3",
				"internal-slot": "^1.0.3",
				"is-callable": "^1.2.4",
				"is-negative-zero": "^2.0.2",
				"is-regex": "^1.1.4",
				"is-shared-array-buffer": "^1.0.2",
				"is-string": "^1.0.7",
				"is-weakref": "^1.0.2",
				"object-inspect": "^1.12.0",
				"object-keys": "^1.1.1",
				"object.assign": "^4.1.2",
				"regexp.prototype.flags": "^1.4.3",
				"string.prototype.trimend": "^1.0.5",
				"string.prototype.trimstart": "^1.0.5",
				"unbox-primitive": "^1.0.2"
			}
		},
		"es-array-method-boxes-properly": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/es-array-method-boxes-properly/-/es-array-method-boxes-properly-1.0.0.tgz",
			"integrity": "sha512-wd6JXUmyHmt8T5a2xreUwKcGPq6f1f+WwIJkijUqiGcJz1qqnZgP6XIK+QyIWU5lT7imeNxUll48bziG+TSYcA==",
			"dev": true
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
		"escalade": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
			"integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",
			"dev": true
		},
		"escape-string-regexp": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
			"integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
			"dev": true
		},
		"eslint": {
			"version": "8.16.0",
			"resolved": "https://registry.npmjs.org/eslint/-/eslint-8.16.0.tgz",
			"integrity": "sha512-MBndsoXY/PeVTDJeWsYj7kLZ5hQpJOfMYLsF6LicLHQWbRDG19lK5jOix4DPl8yY4SUFcE3txy86OzFLWT+yoA==",
			"dev": true,
			"requires": {
				"@eslint/eslintrc": "^1.3.0",
				"@humanwhocodes/config-array": "^0.9.2",
				"ajv": "^6.10.0",
				"chalk": "^4.0.0",
				"cross-spawn": "^7.0.2",
				"debug": "^4.3.2",
				"doctrine": "^3.0.0",
				"escape-string-regexp": "^4.0.0",
				"eslint-scope": "^7.1.1",
				"eslint-utils": "^3.0.0",
				"eslint-visitor-keys": "^3.3.0",
				"espree": "^9.3.2",
				"esquery": "^1.4.0",
				"esutils": "^2.0.2",
				"fast-deep-equal": "^3.1.3",
				"file-entry-cache": "^6.0.1",
				"functional-red-black-tree": "^1.0.1",
				"glob-parent": "^6.0.1",
				"globals": "^13.15.0",
				"ignore": "^5.2.0",
				"import-fresh": "^3.0.0",
				"imurmurhash": "^0.1.4",
				"is-glob": "^4.0.0",
				"js-yaml": "^4.1.0",
				"json-stable-stringify-without-jsonify": "^1.0.1",
				"levn": "^0.4.1",
				"lodash.merge": "^4.6.2",
				"minimatch": "^3.1.2",
				"natural-compare": "^1.4.0",
				"optionator": "^0.9.1",
				"regexpp": "^3.2.0",
				"strip-ansi": "^6.0.1",
				"strip-json-comments": "^3.1.0",
				"text-table": "^0.2.0",
				"v8-compile-cache": "^2.0.3"
			}
		},
		"eslint-config-notninja": {
			"version": "0.4.0",
			"resolved": "https://registry.npmjs.org/eslint-config-notninja/-/eslint-config-notninja-0.4.0.tgz",
			"integrity": "sha512-c55Kk7d+/AbvhZTBPQNCnkKHYtsFgxpeAmNCm4VR95TsuD34AgUoWoHrcvOONYFyQ9hf/8dwYee56D8A17Io+w==",
			"dev": true
		},
		"eslint-scope": {
			"version": "7.1.1",
			"resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.1.1.tgz",
			"integrity": "sha512-QKQM/UXpIiHcLqJ5AOyIW7XZmzjkzQXYE54n1++wb0u9V/abW3l9uQnxX8Z5Xd18xyKIMTUAyQ0k1e8pz6LUrw==",
			"dev": true,
			"requires": {
				"esrecurse": "^4.3.0",
				"estraverse": "^5.2.0"
			}
		},
		"eslint-utils": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-3.0.0.tgz",
			"integrity": "sha512-uuQC43IGctw68pJA1RgbQS8/NP7rch6Cwd4j3ZBtgo4/8Flj4eGE7ZYSZRN3iq5pVUv6GPdW5Z1RFleo84uLDA==",
			"dev": true,
			"requires": {
				"eslint-visitor-keys": "^2.0.0"
			},
			"dependencies": {
				"eslint-visitor-keys": {
					"version": "2.1.0",
					"resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-2.1.0.tgz",
					"integrity": "sha512-0rSmRBzXgDzIsD6mGdJgevzgezI534Cer5L/vyMX0kHzT/jiB43jRhd9YUlMGYLQy2zprNmoT8qasCGtY+QaKw==",
					"dev": true
				}
			}
		},
		"eslint-visitor-keys": {
			"version": "3.3.0",
			"resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.3.0.tgz",
			"integrity": "sha512-mQ+suqKJVyeuwGYHAdjMFqjCyfl8+Ldnxuyp3ldiMBFKkvytrXUZWaiPCEav8qDHKty44bD+qV1IP4T+w+xXRA==",
			"dev": true
		},
		"espree": {
			"version": "9.3.2",
			"resolved": "https://registry.npmjs.org/espree/-/espree-9.3.2.tgz",
			"integrity": "sha512-D211tC7ZwouTIuY5x9XnS0E9sWNChB7IYKX/Xp5eQj3nFXhqmiUDB9q27y76oFl8jTg3pXcQx/bpxMfs3CIZbA==",
			"dev": true,
			"requires": {
				"acorn": "^8.7.1",
				"acorn-jsx": "^5.3.2",
				"eslint-visitor-keys": "^3.3.0"
			}
		},
		"esquery": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/esquery/-/esquery-1.4.0.tgz",
			"integrity": "sha512-cCDispWt5vHHtwMY2YrAQ4ibFkAL8RbH5YGBnZBc90MolvvfkkQcJro/aZiAQUlQ3qgrYS6D6v8Gc5G5CQsc9w==",
			"dev": true,
			"requires": {
				"estraverse": "^5.1.0"
			}
		},
		"esrecurse": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
			"integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
			"dev": true,
			"requires": {
				"estraverse": "^5.2.0"
			}
		},
		"estraverse": {
			"version": "5.3.0",
			"resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
			"integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
			"dev": true
		},
		"esutils": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
			"integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
			"dev": true
		},
		"eventemitter3": {
			"version": "4.0.7",
			"resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",
			"integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==",
			"dev": true
		},
		"execa": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
			"integrity": "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==",
			"dev": true,
			"requires": {
				"cross-spawn": "^7.0.3",
				"get-stream": "^6.0.0",
				"human-signals": "^2.1.0",
				"is-stream": "^2.0.0",
				"merge-stream": "^2.0.0",
				"npm-run-path": "^4.0.1",
				"onetime": "^5.1.2",
				"signal-exit": "^3.0.3",
				"strip-final-newline": "^2.0.0"
			}
		},
		"extend": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
			"integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
			"dev": true
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
				"tmp": {
					"version": "0.0.33",
					"resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
					"integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
					"dev": true,
					"requires": {
						"os-tmpdir": "~1.0.2"
					}
				}
			}
		},
		"extsprintf": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
			"integrity": "sha512-11Ndz7Nv+mvAC1j0ktTa7fAb0vLyGGX+rMHNBYQviQDGU0Hw7lhctJANqbPhu9nV9/izT/IntTgZ7Im/9LJs9g==",
			"dev": true
		},
		"fast-deep-equal": {
			"version": "3.1.3",
			"resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
			"integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
			"dev": true
		},
		"fast-glob": {
			"version": "3.2.11",
			"resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.11.tgz",
			"integrity": "sha512-xrO3+1bxSo3ZVHAnqzyuewYT6aMFHRAd4Kcs92MAonjwQZLsK9d0SF1IyQ3k5PoirxTW0Oe/RqFgMQ6TcNE5Ew==",
			"dev": true,
			"requires": {
				"@nodelib/fs.stat": "^2.0.2",
				"@nodelib/fs.walk": "^1.2.3",
				"glob-parent": "^5.1.2",
				"merge2": "^1.3.0",
				"micromatch": "^4.0.4"
			},
			"dependencies": {
				"glob-parent": {
					"version": "5.1.2",
					"resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
					"integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
					"dev": true,
					"requires": {
						"is-glob": "^4.0.1"
					}
				}
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
			"integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
			"dev": true
		},
		"fastq": {
			"version": "1.13.0",
			"resolved": "https://registry.npmjs.org/fastq/-/fastq-1.13.0.tgz",
			"integrity": "sha512-YpkpUnK8od0o1hmeSc7UUs/eB/vIPWJYjKck2QKIzAf71Vm1AAQ3EbuZB3g2JIy+pg+ERD0vqI79KyZiB2e2Nw==",
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
					"integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
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
		"file-url": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/file-url/-/file-url-3.0.0.tgz",
			"integrity": "sha512-g872QGsHexznxkIAdK8UiZRe7SkE6kvylShU4Nsj8NvfvZag7S0QuQ4IgvPDkk75HxgjIVDwycFTDAgIiO4nDA=="
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
		"filter-obj": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/filter-obj/-/filter-obj-1.1.0.tgz",
			"integrity": "sha512-8rXg1ZnX7xzy2NGDVkBVaAy+lSlPNwad13BtgSlLuxfIslyt5Vg64U7tFcCt4WS1R0hvtnQybT/IyCkGZ3DpXQ==",
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
		"flat": {
			"version": "5.0.2",
			"resolved": "https://registry.npmjs.org/flat/-/flat-5.0.2.tgz",
			"integrity": "sha512-b6suED+5/3rTpUBdG1gupIl8MPFCAMA0QXwmljLhvCUKcUvdE4gWky9zpuGCcXHOsz4J9wPGNWq6OKpmIzz3hQ==",
			"dev": true
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
			"version": "3.2.5",
			"resolved": "https://registry.npmjs.org/flatted/-/flatted-3.2.5.tgz",
			"integrity": "sha512-WIWGi2L3DyTUvUrwRKgGi9TwxQMUEqPOPQBVi71R96jZXJdFskXEmf54BoZaS1kknGODoIGASGEzBUYdyMCBJg==",
			"dev": true
		},
		"forever-agent": {
			"version": "0.6.1",
			"resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
			"integrity": "sha512-j0KLYPhm6zeac4lz3oJ3o65qvgQCcPubiyotZrXqEaG4hNagNYO8qdlUrX5vwqv9ohqeT/Z3j6+yW067yWWdUw==",
			"dev": true
		},
		"form-data": {
			"version": "2.3.3",
			"resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
			"integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
			"dev": true,
			"requires": {
				"asynckit": "^0.4.0",
				"combined-stream": "^1.0.6",
				"mime-types": "^2.1.12"
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
		"fs-minipass": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
			"integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
			"dev": true,
			"requires": {
				"minipass": "^3.0.0"
			}
		},
		"fs.realpath": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
			"integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw=="
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
		"function.prototype.name": {
			"version": "1.1.5",
			"resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.1.5.tgz",
			"integrity": "sha512-uN7m/BzVKQnCUF/iW8jYea67v++2u7m5UgENbHRtdDVclOUP+FMPlCNdmk0h/ysGyo2tavMJEDqJAkJdRa1vMA==",
			"dev": true,
			"requires": {
				"call-bind": "^1.0.2",
				"define-properties": "^1.1.3",
				"es-abstract": "^1.19.0",
				"functions-have-names": "^1.2.2"
			}
		},
		"functional-red-black-tree": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/functional-red-black-tree/-/functional-red-black-tree-1.0.1.tgz",
			"integrity": "sha512-dsKNQNdj6xA3T+QlADDA7mOSlX0qiMINjn0cgr+eGHGsbSHzTabcIogz2+p/iqP1Xs6EP/sS2SbqH+brGTbq0g==",
			"dev": true
		},
		"functions-have-names": {
			"version": "1.2.3",
			"resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
			"integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
			"dev": true
		},
		"gauge": {
			"version": "2.7.4",
			"resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
			"integrity": "sha512-14x4kjc6lkD3ltw589k0NrPD6cCNTD6CWoVUNpB85+DrtONoZn+Rug6xZU5RvSC4+TZPxA5AnBibQYAvZn41Hg==",
			"dev": true,
			"requires": {
				"aproba": "^1.0.3",
				"console-control-strings": "^1.0.0",
				"has-unicode": "^2.0.0",
				"object-assign": "^4.1.0",
				"signal-exit": "^3.0.0",
				"string-width": "^1.0.1",
				"strip-ansi": "^3.0.1",
				"wide-align": "^1.1.0"
			},
			"dependencies": {
				"ansi-regex": {
					"version": "2.1.1",
					"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
					"integrity": "sha512-TIGnTpdo+E3+pCyAluZvtED5p5wCqLdezCyhPZzKPcxvFplEt4i+W7OONCKgeZFT3+y5NZZfOOS/Bdcanm1MYA==",
					"dev": true
				},
				"aproba": {
					"version": "1.2.0",
					"resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
					"integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw==",
					"dev": true
				},
				"is-fullwidth-code-point": {
					"version": "1.0.0",
					"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
					"integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
					"dev": true,
					"requires": {
						"number-is-nan": "^1.0.0"
					}
				},
				"string-width": {
					"version": "1.0.2",
					"resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
					"integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
					"dev": true,
					"requires": {
						"code-point-at": "^1.0.0",
						"is-fullwidth-code-point": "^1.0.0",
						"strip-ansi": "^3.0.0"
					}
				},
				"strip-ansi": {
					"version": "3.0.1",
					"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
					"integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
					"dev": true,
					"requires": {
						"ansi-regex": "^2.0.0"
					}
				}
			}
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
		"get-pkg-repo": {
			"version": "4.2.1",
			"resolved": "https://registry.npmjs.org/get-pkg-repo/-/get-pkg-repo-4.2.1.tgz",
			"integrity": "sha512-2+QbHjFRfGB74v/pYWjd5OhU3TDIC2Gv/YKUTk/tCvAz0pkn/Mz6P3uByuBimLOcPvN2jYdScl3xGFSrx0jEcA==",
			"dev": true,
			"requires": {
				"@hutson/parse-repository-url": "^3.0.0",
				"hosted-git-info": "^4.0.0",
				"through2": "^2.0.0",
				"yargs": "^16.2.0"
			},
			"dependencies": {
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
				"safe-buffer": {
					"version": "5.1.2",
					"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
					"integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
					"dev": true
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
				"through2": {
					"version": "2.0.5",
					"resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
					"integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
					"dev": true,
					"requires": {
						"readable-stream": "~2.3.6",
						"xtend": "~4.0.1"
					}
				}
			}
		},
		"get-port": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/get-port/-/get-port-5.1.1.tgz",
			"integrity": "sha512-g/Q1aTSDOxFpchXC4i8ZWvxA1lnPqx/JHqcpIw0/LX9T8x/GBbi6YnlN5nhaKIFkT8oFsscUKgDJYxfwfS6QsQ==",
			"dev": true
		},
		"get-stdin": {
			"version": "8.0.0",
			"resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-8.0.0.tgz",
			"integrity": "sha512-sY22aA6xchAzprjyqmSEQv4UbAAzRN0L2dQB0NlN5acTTK9Don6nhoc3eAbUnpZiCANAMfd/+40kVdKfFygohg=="
		},
		"get-stream": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
			"integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==",
			"dev": true
		},
		"get-symbol-description": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.0.0.tgz",
			"integrity": "sha512-2EmdH1YvIQiZpltCNgkuiUnyukzxM/R6NDJX31Ke3BG1Nq5b0S2PhX59UKi9vZpPDQVdqn+1IcaAwnzTT5vCjw==",
			"dev": true,
			"requires": {
				"call-bind": "^1.0.2",
				"get-intrinsic": "^1.1.1"
			}
		},
		"getpass": {
			"version": "0.1.7",
			"resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
			"integrity": "sha512-0fzj9JxOLfJ+XGLhR8ze3unN0KZCgZwiSSDz168VERjK8Wl8kVSdcu2kspd4s4wtAa1y/qrVRiAA0WclVsu0ng==",
			"dev": true,
			"requires": {
				"assert-plus": "^1.0.0"
			}
		},
		"git-raw-commits": {
			"version": "2.0.11",
			"resolved": "https://registry.npmjs.org/git-raw-commits/-/git-raw-commits-2.0.11.tgz",
			"integrity": "sha512-VnctFhw+xfj8Va1xtfEqCUD2XDrbAPSJx+hSrE5K7fGdjZruW7XV+QOrN7LF/RJyvspRiD2I0asWsxFp0ya26A==",
			"dev": true,
			"requires": {
				"dargs": "^7.0.0",
				"lodash": "^4.17.15",
				"meow": "^8.0.0",
				"split2": "^3.0.0",
				"through2": "^4.0.0"
			},
			"dependencies": {
				"camelcase": {
					"version": "5.3.1",
					"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
					"integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
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
					}
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
				"hosted-git-info": {
					"version": "2.8.9",
					"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
					"integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
					"dev": true
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
				"quick-lru": {
					"version": "4.0.1",
					"resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-4.0.1.tgz",
					"integrity": "sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==",
					"dev": true
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
						"type-fest": {
							"version": "0.6.0",
							"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
							"integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
							"dev": true
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
				"semver": {
					"version": "5.7.1",
					"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
					"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
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
				"trim-newlines": {
					"version": "3.0.1",
					"resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-3.0.1.tgz",
					"integrity": "sha512-c1PTsA3tYrIsLGkJkzHF+w9F2EyxfXGo4UyJc4pFL++FMjnq0HJS69T3M7d//gKrFKwy429bouPescbjecU+Zw==",
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
		"git-remote-origin-url": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/git-remote-origin-url/-/git-remote-origin-url-2.0.0.tgz",
			"integrity": "sha512-eU+GGrZgccNJcsDH5LkXR3PB9M958hxc7sbA8DFJjrv9j4L2P/eZfKhM+QD6wyzpiv+b1BpK0XrYCxkovtjSLw==",
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
				"camelcase": {
					"version": "5.3.1",
					"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
					"integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
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
					}
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
				"hosted-git-info": {
					"version": "2.8.9",
					"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
					"integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
					"dev": true
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
				"quick-lru": {
					"version": "4.0.1",
					"resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-4.0.1.tgz",
					"integrity": "sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==",
					"dev": true
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
				"semver": {
					"version": "6.3.0",
					"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
					"integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
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
				"trim-newlines": {
					"version": "3.0.1",
					"resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-3.0.1.tgz",
					"integrity": "sha512-c1PTsA3tYrIsLGkJkzHF+w9F2EyxfXGo4UyJc4pFL++FMjnq0HJS69T3M7d//gKrFKwy429bouPescbjecU+Zw==",
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
		"git-up": {
			"version": "4.0.5",
			"resolved": "https://registry.npmjs.org/git-up/-/git-up-4.0.5.tgz",
			"integrity": "sha512-YUvVDg/vX3d0syBsk/CKUTib0srcQME0JyHkL5BaYdwLsiCslPWmDSi8PUMo9pXYjrryMcmsCoCgsTpSCJEQaA==",
			"dev": true,
			"requires": {
				"is-ssh": "^1.3.0",
				"parse-url": "^6.0.0"
			}
		},
		"git-url-parse": {
			"version": "11.6.0",
			"resolved": "https://registry.npmjs.org/git-url-parse/-/git-url-parse-11.6.0.tgz",
			"integrity": "sha512-WWUxvJs5HsyHL6L08wOusa/IXYtMuCAhrMmnTjQPpBU0TTHyDhnOATNH3xNQz7YOQUsqIIPTGr4xiVti1Hsk5g==",
			"dev": true,
			"requires": {
				"git-up": "^4.0.0"
			}
		},
		"gitconfiglocal": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/gitconfiglocal/-/gitconfiglocal-1.0.0.tgz",
			"integrity": "sha512-spLUXeTAVHxDtKsJc8FkFVgFtMdEN9qPGpL23VfSHx4fP4+Ds097IXLvymbnDH8FnmxX5Nr9bPw3A+AQ6mWEaQ==",
			"dev": true,
			"requires": {
				"ini": "^1.3.2"
			}
		},
		"glob": {
			"version": "8.0.3",
			"resolved": "https://registry.npmjs.org/glob/-/glob-8.0.3.tgz",
			"integrity": "sha512-ull455NHSHI/Y1FqGaaYFaLGkNMMJbavMrEGFXG/PGrg6y7sutWHUHrz6gy6WEBH6akM1M414dWKCNs+IhKdiQ==",
			"requires": {
				"fs.realpath": "^1.0.0",
				"inflight": "^1.0.4",
				"inherits": "2",
				"minimatch": "^5.0.1",
				"once": "^1.3.0"
			},
			"dependencies": {
				"brace-expansion": {
					"version": "2.0.1",
					"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
					"integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
					"requires": {
						"balanced-match": "^1.0.0"
					}
				},
				"minimatch": {
					"version": "5.1.0",
					"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.0.tgz",
					"integrity": "sha512-9TPBGGak4nHfGZsPBohm9AWg6NoT7QTCehS3BIJABslyZbzxfV78QM2Y6+i741OPZIafFAaiiEMh5OyIrJPgtg==",
					"requires": {
						"brace-expansion": "^2.0.1"
					}
				}
			}
		},
		"glob-parent": {
			"version": "6.0.2",
			"resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
			"integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
			"dev": true,
			"requires": {
				"is-glob": "^4.0.3"
			}
		},
		"globals": {
			"version": "13.15.0",
			"resolved": "https://registry.npmjs.org/globals/-/globals-13.15.0.tgz",
			"integrity": "sha512-bpzcOlgDhMG070Av0Vy5Owklpv1I6+j96GhUI7Rh7IzDCKLzboflLrrfqMu8NquDbiR4EOQk7XzJwqVJxicxog==",
			"dev": true,
			"requires": {
				"type-fest": "^0.20.2"
			}
		},
		"globby": {
			"version": "11.1.0",
			"resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
			"integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
			"dev": true,
			"requires": {
				"array-union": "^2.1.0",
				"dir-glob": "^3.0.1",
				"fast-glob": "^3.2.9",
				"ignore": "^5.2.0",
				"merge2": "^1.4.1",
				"slash": "^3.0.0"
			}
		},
		"graceful-fs": {
			"version": "4.2.10",
			"resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.10.tgz",
			"integrity": "sha512-9ByhssR2fPVsNZj478qUUbKfmL0+t5BDVyjShtyZZLiK7ZDAArFFfopyOTj0M05wE2tJPisA4iTnnXl2YoPvOA==",
			"dev": true
		},
		"growl": {
			"version": "1.10.5",
			"resolved": "https://registry.npmjs.org/growl/-/growl-1.10.5.tgz",
			"integrity": "sha512-qBr4OuELkhPenW6goKVXiv47US3clb3/IbuWF9KNKEijAy9oeHxU9IgzjvJhHkUzhaj7rOUD7+YGWqUjLp5oSA==",
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
		"har-schema": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
			"integrity": "sha512-Oqluz6zhGX8cyRaTQlFMPw80bSJVG2x/cFb8ZPhUILGgHka9SsokCCOQgpveePerqidZOrT14ipqfJb7ILcW5Q==",
			"dev": true
		},
		"har-validator": {
			"version": "5.1.5",
			"resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
			"integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
			"dev": true,
			"requires": {
				"ajv": "^6.12.3",
				"har-schema": "^2.0.0"
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
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.0.2.tgz",
			"integrity": "sha512-tSvCKtBr9lkF0Ex0aQiP9N+OpV4zi2r/Nee5VkRDbaqv35RLYMzbwQfFSZZH0kR+Rd6302UJZ2p/bJCEoR3VoQ==",
			"dev": true
		},
		"has-flag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
			"integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
		},
		"has-property-descriptors": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.0.tgz",
			"integrity": "sha512-62DVLZGoiEBDHQyqG4w9xCuZ7eJEwNmJRWw2VY84Oedb7WFcA27fiEVe8oUQx9hAUJ4ekurquucTGwsyO1XGdQ==",
			"dev": true,
			"requires": {
				"get-intrinsic": "^1.1.1"
			}
		},
		"has-symbols": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
			"integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",
			"dev": true
		},
		"has-tostringtag": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.0.tgz",
			"integrity": "sha512-kFjcSNhnlGV1kyoGk7OXKSawH5JOb/LzUc5w9B02hOTO0dfFRjbHQKvg1d6cf3HbeUmtU9VbbV3qzZ2Teh97WQ==",
			"dev": true,
			"requires": {
				"has-symbols": "^1.0.2"
			}
		},
		"has-unicode": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
			"integrity": "sha512-8Rf9Y83NBReMnx0gFzA8JImQACstCYWUplepDa9xprwwtmgEZUF0h/i5xSA625zB/I37EtrswSST6OXxwaaIJQ==",
			"dev": true
		},
		"he": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
			"integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
			"dev": true
		},
		"hosted-git-info": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.1.0.tgz",
			"integrity": "sha512-kyCuEOWjJqZuDbRHzL8V93NzQhwIB71oFWSyzVo+KPZI+pnQPPxucdkrOZvkLRnrf5URsQM+IJ09Dw29cRALIA==",
			"dev": true,
			"requires": {
				"lru-cache": "^6.0.0"
			}
		},
		"htmlparser2": {
			"version": "8.0.1",
			"resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-8.0.1.tgz",
			"integrity": "sha512-4lVbmc1diZC7GUJQtRQ5yBAeUCL1exyMwmForWkRLnwyzWBFxN633SALPMGYaWZvKe9j1pRZJpauvmxENSp/EA==",
			"requires": {
				"domelementtype": "^2.3.0",
				"domhandler": "^5.0.2",
				"domutils": "^3.0.1",
				"entities": "^4.3.0"
			}
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
		"http-signature": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
			"integrity": "sha512-CAbnr6Rz4CYQkLYUtSNXxQPUH2gK8f3iWexVlsnMeD+GjlsQ0Xsy1cOX+mN3dtxYomRy21CiOzU8Uhw6OwncEQ==",
			"dev": true,
			"requires": {
				"assert-plus": "^1.0.0",
				"jsprim": "^1.2.2",
				"sshpk": "^1.7.0"
			}
		},
		"https-proxy-agent": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
			"integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
			"dev": true,
			"requires": {
				"agent-base": "6",
				"debug": "4"
			}
		},
		"human-signals": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
			"integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==",
			"dev": true
		},
		"humanize-ms": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/humanize-ms/-/humanize-ms-1.2.1.tgz",
			"integrity": "sha512-Fl70vYtsAFb/C06PTS9dZBo7ihau+Tu/DNCk/OyHhea07S+aeMWpFFkUaXRa8fI+ScZbEI8dfSxwY7gxZ9SAVQ==",
			"dev": true,
			"requires": {
				"ms": "^2.0.0"
			}
		},
		"iconv-lite": {
			"version": "0.4.24",
			"resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
			"integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
			"dev": true,
			"requires": {
				"safer-buffer": ">= 2.1.2 < 3"
			}
		},
		"ignore": {
			"version": "5.2.0",
			"resolved": "https://registry.npmjs.org/ignore/-/ignore-5.2.0.tgz",
			"integrity": "sha512-CmxgYGiEPCLhfLnpPp1MoRmifwEIOgjcHXxOBjv7mY96c+eWScsOP9c112ZyLdWHi0FxHjI+4uVhKYp/gcdRmQ==",
			"dev": true
		},
		"ignore-walk": {
			"version": "3.0.4",
			"resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-3.0.4.tgz",
			"integrity": "sha512-PY6Ii8o1jMRA1z4F2hRkH/xN59ox43DavKvD3oDpfurRlOJyAHpifIwpbdv1n4jt4ov0jSpw3kQ4GhJnpBL6WQ==",
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
			}
		},
		"import-local": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/import-local/-/import-local-3.1.0.tgz",
			"integrity": "sha512-ASB07uLtnDs1o6EHjKpX34BKYDSqnFerfTOJL2HvMqF70LnxpjkzDB8J44oT9pu4AMPkQwf8jl6szgvNd2tRIg==",
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
		"infer-owner": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/infer-owner/-/infer-owner-1.0.4.tgz",
			"integrity": "sha512-IClj+Xz94+d7irH5qRyfJonOdfTzuDaifE6ZPWfx0N0+/ATZCbuTPq2prFl526urkQd90WyUKIh1DfBQ2hMz9A==",
			"dev": true
		},
		"inflight": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
			"integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
			"requires": {
				"once": "^1.3.0",
				"wrappy": "1"
			}
		},
		"inherits": {
			"version": "2.0.4",
			"resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
			"integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
		},
		"ini": {
			"version": "1.3.8",
			"resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
			"integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
			"dev": true
		},
		"init-package-json": {
			"version": "2.0.5",
			"resolved": "https://registry.npmjs.org/init-package-json/-/init-package-json-2.0.5.tgz",
			"integrity": "sha512-u1uGAtEFu3VA6HNl/yUWw57jmKEMx8SKOxHhxjGnOFUiIlFnohKDFg4ZrPpv9wWqk44nDxGJAtqjdQFm+9XXQA==",
			"dev": true,
			"requires": {
				"npm-package-arg": "^8.1.5",
				"promzard": "^0.3.0",
				"read": "~1.0.1",
				"read-package-json": "^4.1.1",
				"semver": "^7.3.5",
				"validate-npm-package-license": "^3.0.4",
				"validate-npm-package-name": "^3.0.0"
			},
			"dependencies": {
				"glob": {
					"version": "7.2.3",
					"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
					"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
					"dev": true,
					"requires": {
						"fs.realpath": "^1.0.0",
						"inflight": "^1.0.4",
						"inherits": "2",
						"minimatch": "^3.1.1",
						"once": "^1.3.0",
						"path-is-absolute": "^1.0.0"
					}
				},
				"read-package-json": {
					"version": "4.1.2",
					"resolved": "https://registry.npmjs.org/read-package-json/-/read-package-json-4.1.2.tgz",
					"integrity": "sha512-Dqer4pqzamDE2O4M55xp1qZMuLPqi4ldk2ya648FOMHRjwMzFhuxVrG04wd0c38IsvkVdr3vgHI6z+QTPdAjrQ==",
					"dev": true,
					"requires": {
						"glob": "^7.1.1",
						"json-parse-even-better-errors": "^2.3.0",
						"normalize-package-data": "^3.0.0",
						"npm-normalize-package-bin": "^1.0.0"
					}
				}
			}
		},
		"inquirer": {
			"version": "7.3.3",
			"resolved": "https://registry.npmjs.org/inquirer/-/inquirer-7.3.3.tgz",
			"integrity": "sha512-JG3eIAj5V9CwcGvuOmoo6LB9kbAYT8HXffUl6memuszlwDC/qvFAJw49XJ5NROSFNPxp3iQg1GqkFhaY/CR0IA==",
			"dev": true,
			"requires": {
				"ansi-escapes": "^4.2.1",
				"chalk": "^4.1.0",
				"cli-cursor": "^3.1.0",
				"cli-width": "^3.0.0",
				"external-editor": "^3.0.3",
				"figures": "^3.0.0",
				"lodash": "^4.17.19",
				"mute-stream": "0.0.8",
				"run-async": "^2.4.0",
				"rxjs": "^6.6.0",
				"string-width": "^4.1.0",
				"strip-ansi": "^6.0.0",
				"through": "^2.3.6"
			}
		},
		"internal-slot": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.0.3.tgz",
			"integrity": "sha512-O0DB1JC/sPyZl7cIo78n5dR7eUSwwpYPiXRhTzNxZVAMUuB8vlnRFyLxdrVToks6XPLVnFfbzaVd5WLjhgg+vA==",
			"dev": true,
			"requires": {
				"get-intrinsic": "^1.1.0",
				"has": "^1.0.3",
				"side-channel": "^1.0.4"
			}
		},
		"ip": {
			"version": "1.1.8",
			"resolved": "https://registry.npmjs.org/ip/-/ip-1.1.8.tgz",
			"integrity": "sha512-PuExPYUiu6qMBQb4l06ecm6T6ujzhmh+MeJcW9wa89PoAz5pvd4zPgN5WJV104mb6S2T1AwNIAaB70JNrLQWhg==",
			"dev": true
		},
		"is-arrayish": {
			"version": "0.2.1",
			"resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
			"integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
			"dev": true
		},
		"is-bigint": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.0.4.tgz",
			"integrity": "sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==",
			"dev": true,
			"requires": {
				"has-bigints": "^1.0.1"
			}
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
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.1.2.tgz",
			"integrity": "sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==",
			"dev": true,
			"requires": {
				"call-bind": "^1.0.2",
				"has-tostringtag": "^1.0.0"
			}
		},
		"is-callable": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.4.tgz",
			"integrity": "sha512-nsuwtxZfMX67Oryl9LCQ+upnC0Z0BgpwntpS89m1H/TLF0zNfzfLMV/9Wa/6MZsj0acpEjAO0KF1xT6ZdLl95w==",
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
			"version": "2.9.0",
			"resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.9.0.tgz",
			"integrity": "sha512-+5FPy5PnwmO3lvfMb0AsoPaBG+5KHUI0wYFXOtYPnVVVspTFUuMZNfNaNVRt3FZadstu2c8x23vykRW/NBoU6A==",
			"dev": true,
			"requires": {
				"has": "^1.0.3"
			}
		},
		"is-date-object": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.5.tgz",
			"integrity": "sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==",
			"dev": true,
			"requires": {
				"has-tostringtag": "^1.0.0"
			}
		},
		"is-extglob": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
			"integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
			"dev": true
		},
		"is-fullwidth-code-point": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
			"integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
			"dev": true
		},
		"is-glob": {
			"version": "4.0.3",
			"resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
			"integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
			"dev": true,
			"requires": {
				"is-extglob": "^2.1.1"
			}
		},
		"is-lambda": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/is-lambda/-/is-lambda-1.0.1.tgz",
			"integrity": "sha1-PZh3iZ5qU+/AFgUEzeFfgubwYdU=",
			"dev": true
		},
		"is-negative-zero": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.2.tgz",
			"integrity": "sha512-dqJvarLawXsFbNDeJW7zAz8ItJ9cd28YufuuFzh0G8pNHjJMnY08Dv7sYX2uF5UpQOwieAeOExEYAWWfu7ZZUA==",
			"dev": true
		},
		"is-number": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
			"integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
			"dev": true
		},
		"is-number-object": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.0.7.tgz",
			"integrity": "sha512-k1U0IRzLMo7ZlYIfzRu23Oh6MiIFasgpb9X76eqfFZAqwH44UI4KTBvBYIZ1dSL9ZzChTB9ShHfLkR4pdW5krQ==",
			"dev": true,
			"requires": {
				"has-tostringtag": "^1.0.0"
			}
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
		"is-regex": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.4.tgz",
			"integrity": "sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==",
			"dev": true,
			"requires": {
				"call-bind": "^1.0.2",
				"has-tostringtag": "^1.0.0"
			}
		},
		"is-shared-array-buffer": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.2.tgz",
			"integrity": "sha512-sqN2UDu1/0y6uvXyStCOzyhAjCSlHceFoMKJW8W9EU9cvic/QdsZ0kEU93HEy3IUEFZIiH/3w+AH/UQbPHNdhA==",
			"dev": true,
			"requires": {
				"call-bind": "^1.0.2"
			}
		},
		"is-ssh": {
			"version": "1.3.3",
			"resolved": "https://registry.npmjs.org/is-ssh/-/is-ssh-1.3.3.tgz",
			"integrity": "sha512-NKzJmQzJfEEma3w5cJNcUMxoXfDjz0Zj0eyCalHn2E6VOwlzjZo0yuO2fcBSf8zhFuVCL/82/r5gRcoi6aEPVQ==",
			"dev": true,
			"requires": {
				"protocols": "^1.1.0"
			}
		},
		"is-stream": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
			"integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==",
			"dev": true
		},
		"is-string": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.7.tgz",
			"integrity": "sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==",
			"dev": true,
			"requires": {
				"has-tostringtag": "^1.0.0"
			}
		},
		"is-symbol": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.4.tgz",
			"integrity": "sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==",
			"dev": true,
			"requires": {
				"has-symbols": "^1.0.2"
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
		"is-weakref": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.0.2.tgz",
			"integrity": "sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==",
			"dev": true,
			"requires": {
				"call-bind": "^1.0.2"
			}
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
		"isstream": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
			"integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
			"dev": true
		},
		"js-tokens": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
			"integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
			"dev": true
		},
		"js-yaml": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
			"integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
			"dev": true,
			"requires": {
				"argparse": "^2.0.1"
			}
		},
		"jsbn": {
			"version": "0.1.1",
			"resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
			"integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
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
		"json-schema": {
			"version": "0.4.0",
			"resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.4.0.tgz",
			"integrity": "sha512-es94M3nTIfsEPisRafak+HDLfHXnKBhV3vU5eqPcS3flIWqcxJWgXHXiey3YrpaNsanY5ei1VoYEbOzijuq9BA==",
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
		"jsprim": {
			"version": "1.4.2",
			"resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.2.tgz",
			"integrity": "sha512-P2bSOMAc/ciLz6DzgjVlGJP9+BrJWu5UDGK70C2iweC5QBIeFf0ZXRvGjEj2uYgrY2MkAAhsSWHDWlFtEroZWw==",
			"dev": true,
			"requires": {
				"assert-plus": "1.0.0",
				"extsprintf": "1.3.0",
				"json-schema": "0.4.0",
				"verror": "1.10.0"
			}
		},
		"just-extend": {
			"version": "4.2.1",
			"resolved": "https://registry.npmjs.org/just-extend/-/just-extend-4.2.1.tgz",
			"integrity": "sha512-g3UB796vUFIY90VIv/WX3L2c8CS2MdWUww3CNrYmqza1Fg0DURc2K/O4YrnklBdQarSJ/y8JnJYDGc+1iumQjg=="
		},
		"kind-of": {
			"version": "6.0.3",
			"resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
			"integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
			"dev": true
		},
		"lerna": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/lerna/-/lerna-4.0.0.tgz",
			"integrity": "sha512-DD/i1znurfOmNJb0OBw66NmNqiM8kF6uIrzrJ0wGE3VNdzeOhz9ziWLYiRaZDGGwgbcjOo6eIfcx9O5Qynz+kg==",
			"dev": true,
			"requires": {
				"@lerna/add": "4.0.0",
				"@lerna/bootstrap": "4.0.0",
				"@lerna/changed": "4.0.0",
				"@lerna/clean": "4.0.0",
				"@lerna/cli": "4.0.0",
				"@lerna/create": "4.0.0",
				"@lerna/diff": "4.0.0",
				"@lerna/exec": "4.0.0",
				"@lerna/import": "4.0.0",
				"@lerna/info": "4.0.0",
				"@lerna/init": "4.0.0",
				"@lerna/link": "4.0.0",
				"@lerna/list": "4.0.0",
				"@lerna/publish": "4.0.0",
				"@lerna/run": "4.0.0",
				"@lerna/version": "4.0.0",
				"import-local": "^3.0.2",
				"npmlog": "^4.1.2"
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
		"libnpmaccess": {
			"version": "4.0.3",
			"resolved": "https://registry.npmjs.org/libnpmaccess/-/libnpmaccess-4.0.3.tgz",
			"integrity": "sha512-sPeTSNImksm8O2b6/pf3ikv4N567ERYEpeKRPSmqlNt1dTZbvgpJIzg5vAhXHpw2ISBsELFRelk0jEahj1c6nQ==",
			"dev": true,
			"requires": {
				"aproba": "^2.0.0",
				"minipass": "^3.1.1",
				"npm-package-arg": "^8.1.2",
				"npm-registry-fetch": "^11.0.0"
			},
			"dependencies": {
				"make-fetch-happen": {
					"version": "9.1.0",
					"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-9.1.0.tgz",
					"integrity": "sha512-+zopwDy7DNknmwPQplem5lAZX/eCOzSvSNNcSKm5eVwTkOBzoktEfXsa9L23J/GIRhxRsaxzkPEhrJEpE2F4Gg==",
					"dev": true,
					"requires": {
						"agentkeepalive": "^4.1.3",
						"cacache": "^15.2.0",
						"http-cache-semantics": "^4.1.0",
						"http-proxy-agent": "^4.0.1",
						"https-proxy-agent": "^5.0.0",
						"is-lambda": "^1.0.1",
						"lru-cache": "^6.0.0",
						"minipass": "^3.1.3",
						"minipass-collect": "^1.0.2",
						"minipass-fetch": "^1.3.2",
						"minipass-flush": "^1.0.5",
						"minipass-pipeline": "^1.2.4",
						"negotiator": "^0.6.2",
						"promise-retry": "^2.0.1",
						"socks-proxy-agent": "^6.0.0",
						"ssri": "^8.0.0"
					}
				},
				"npm-registry-fetch": {
					"version": "11.0.0",
					"resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-11.0.0.tgz",
					"integrity": "sha512-jmlgSxoDNuhAtxUIG6pVwwtz840i994dL14FoNVZisrmZW5kWd63IUTNv1m/hyRSGSqWjCUp/YZlS1BJyNp9XA==",
					"dev": true,
					"requires": {
						"make-fetch-happen": "^9.0.1",
						"minipass": "^3.1.3",
						"minipass-fetch": "^1.3.0",
						"minipass-json-stream": "^1.0.1",
						"minizlib": "^2.0.0",
						"npm-package-arg": "^8.0.0"
					}
				},
				"socks-proxy-agent": {
					"version": "6.2.0",
					"resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-6.2.0.tgz",
					"integrity": "sha512-wWqJhjb32Q6GsrUqzuFkukxb/zzide5quXYcMVpIjxalDBBYy2nqKCFQ/9+Ie4dvOYSQdOk3hUlZSdzZOd3zMQ==",
					"dev": true,
					"requires": {
						"agent-base": "^6.0.2",
						"debug": "^4.3.3",
						"socks": "^2.6.2"
					}
				}
			}
		},
		"libnpmpublish": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/libnpmpublish/-/libnpmpublish-4.0.2.tgz",
			"integrity": "sha512-+AD7A2zbVeGRCFI2aO//oUmapCwy7GHqPXFJh3qpToSRNU+tXKJ2YFUgjt04LPPAf2dlEH95s6EhIHM1J7bmOw==",
			"dev": true,
			"requires": {
				"normalize-package-data": "^3.0.2",
				"npm-package-arg": "^8.1.2",
				"npm-registry-fetch": "^11.0.0",
				"semver": "^7.1.3",
				"ssri": "^8.0.1"
			},
			"dependencies": {
				"make-fetch-happen": {
					"version": "9.1.0",
					"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-9.1.0.tgz",
					"integrity": "sha512-+zopwDy7DNknmwPQplem5lAZX/eCOzSvSNNcSKm5eVwTkOBzoktEfXsa9L23J/GIRhxRsaxzkPEhrJEpE2F4Gg==",
					"dev": true,
					"requires": {
						"agentkeepalive": "^4.1.3",
						"cacache": "^15.2.0",
						"http-cache-semantics": "^4.1.0",
						"http-proxy-agent": "^4.0.1",
						"https-proxy-agent": "^5.0.0",
						"is-lambda": "^1.0.1",
						"lru-cache": "^6.0.0",
						"minipass": "^3.1.3",
						"minipass-collect": "^1.0.2",
						"minipass-fetch": "^1.3.2",
						"minipass-flush": "^1.0.5",
						"minipass-pipeline": "^1.2.4",
						"negotiator": "^0.6.2",
						"promise-retry": "^2.0.1",
						"socks-proxy-agent": "^6.0.0",
						"ssri": "^8.0.0"
					}
				},
				"npm-registry-fetch": {
					"version": "11.0.0",
					"resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-11.0.0.tgz",
					"integrity": "sha512-jmlgSxoDNuhAtxUIG6pVwwtz840i994dL14FoNVZisrmZW5kWd63IUTNv1m/hyRSGSqWjCUp/YZlS1BJyNp9XA==",
					"dev": true,
					"requires": {
						"make-fetch-happen": "^9.0.1",
						"minipass": "^3.1.3",
						"minipass-fetch": "^1.3.0",
						"minipass-json-stream": "^1.0.1",
						"minizlib": "^2.0.0",
						"npm-package-arg": "^8.0.0"
					}
				},
				"socks-proxy-agent": {
					"version": "6.2.0",
					"resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-6.2.0.tgz",
					"integrity": "sha512-wWqJhjb32Q6GsrUqzuFkukxb/zzide5quXYcMVpIjxalDBBYy2nqKCFQ/9+Ie4dvOYSQdOk3hUlZSdzZOd3zMQ==",
					"dev": true,
					"requires": {
						"agent-base": "^6.0.2",
						"debug": "^4.3.3",
						"socks": "^2.6.2"
					}
				}
			}
		},
		"lines-and-columns": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
			"integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
			"dev": true
		},
		"load-json-file": {
			"version": "6.2.0",
			"resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-6.2.0.tgz",
			"integrity": "sha512-gUD/epcRms75Cw8RT1pUdHugZYM5ce64ucs2GEISABwkRsOQr0q2wm/MV2TKThycIe5e0ytRweW2RZxclogCdQ==",
			"dev": true,
			"requires": {
				"graceful-fs": "^4.1.15",
				"parse-json": "^5.0.0",
				"strip-bom": "^4.0.0",
				"type-fest": "^0.6.0"
			},
			"dependencies": {
				"type-fest": {
					"version": "0.6.0",
					"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
					"integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
					"dev": true
				}
			}
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
		"lodash": {
			"version": "4.17.21",
			"resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
			"integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
			"dev": true
		},
		"lodash._reinterpolate": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/lodash._reinterpolate/-/lodash._reinterpolate-3.0.0.tgz",
			"integrity": "sha1-DM8tiRZq8Ds2Y8eWU4t1rG4RTZ0=",
			"dev": true
		},
		"lodash.clonedeep": {
			"version": "4.5.0",
			"resolved": "https://registry.npmjs.org/lodash.clonedeep/-/lodash.clonedeep-4.5.0.tgz",
			"integrity": "sha1-4j8/nE+Pvd6HJSnBBxhXoIblzO8="
		},
		"lodash.get": {
			"version": "4.4.2",
			"resolved": "https://registry.npmjs.org/lodash.get/-/lodash.get-4.4.2.tgz",
			"integrity": "sha1-LRd/ZS+jHpObRDjVNBSZ36OCXpk="
		},
		"lodash.ismatch": {
			"version": "4.4.0",
			"resolved": "https://registry.npmjs.org/lodash.ismatch/-/lodash.ismatch-4.4.0.tgz",
			"integrity": "sha1-dWy1FQyjum8RCFp4hJZF8Yj4Xzc=",
			"dev": true
		},
		"lodash.merge": {
			"version": "4.6.2",
			"resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
			"integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
			"dev": true
		},
		"lodash.omit": {
			"version": "4.5.0",
			"resolved": "https://registry.npmjs.org/lodash.omit/-/lodash.omit-4.5.0.tgz",
			"integrity": "sha1-brGa5aHuHdnfC5aeZs4Lf6MLXmA="
		},
		"lodash.pick": {
			"version": "4.4.0",
			"resolved": "https://registry.npmjs.org/lodash.pick/-/lodash.pick-4.4.0.tgz",
			"integrity": "sha1-UvBWEP/53tQiYRRB7R/BI6AwAbM="
		},
		"lodash.template": {
			"version": "4.5.0",
			"resolved": "https://registry.npmjs.org/lodash.template/-/lodash.template-4.5.0.tgz",
			"integrity": "sha512-84vYFxIkmidUiFxidA/KjjH9pAycqW+h980j7Fuz5qxRtO9pgB7MDFTdys1N7A5mcucRiDyEq4fusljItR1T/A==",
			"dev": true,
			"requires": {
				"lodash._reinterpolate": "^3.0.0",
				"lodash.templatesettings": "^4.0.0"
			}
		},
		"lodash.templatesettings": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/lodash.templatesettings/-/lodash.templatesettings-4.2.0.tgz",
			"integrity": "sha512-stgLz+i3Aa9mZgnjr/O+v9ruKZsPsndy7qPZOchbqk2cnTU1ZaldKK+v7m54WoKIyxiuMZTKT2H81F8BeAc3ZQ==",
			"dev": true,
			"requires": {
				"lodash._reinterpolate": "^3.0.0"
			}
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
		"lru-cache": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
			"integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
			"dev": true,
			"requires": {
				"yallist": "^4.0.0"
			}
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
		"make-fetch-happen": {
			"version": "8.0.14",
			"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-8.0.14.tgz",
			"integrity": "sha512-EsS89h6l4vbfJEtBZnENTOFk8mCRpY5ru36Xe5bcX1KYIli2mkSHqoFsp5O1wMDvTJJzxe/4THpCTtygjeeGWQ==",
			"dev": true,
			"requires": {
				"agentkeepalive": "^4.1.3",
				"cacache": "^15.0.5",
				"http-cache-semantics": "^4.1.0",
				"http-proxy-agent": "^4.0.1",
				"https-proxy-agent": "^5.0.0",
				"is-lambda": "^1.0.1",
				"lru-cache": "^6.0.0",
				"minipass": "^3.1.3",
				"minipass-collect": "^1.0.2",
				"minipass-fetch": "^1.3.2",
				"minipass-flush": "^1.0.5",
				"minipass-pipeline": "^1.2.4",
				"promise-retry": "^2.0.1",
				"socks-proxy-agent": "^5.0.0",
				"ssri": "^8.0.0"
			}
		},
		"map-obj": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/map-obj/-/map-obj-4.3.0.tgz",
			"integrity": "sha512-hdN1wVrZbb29eBGiGjJbeP8JbKjq1urkHJ/LIP/NY48MZ1QVXUsQBV1G1zvYFHn1XE06cwjBsOI2K3Ulnj1YXQ==",
			"dev": true
		},
		"meow": {
			"version": "10.1.2",
			"resolved": "https://registry.npmjs.org/meow/-/meow-10.1.2.tgz",
			"integrity": "sha512-zbuAlN+V/sXlbGchNS9WTWjUzeamwMt/BApKCJi7B0QyZstZaMx0n4Unll/fg0njGtMdC9UP5SAscvOCLYdM+Q==",
			"dev": true,
			"requires": {
				"@types/minimist": "^1.2.2",
				"camelcase-keys": "^7.0.0",
				"decamelize": "^5.0.0",
				"decamelize-keys": "^1.1.0",
				"hard-rejection": "^2.1.0",
				"minimist-options": "4.1.0",
				"normalize-package-data": "^3.0.2",
				"read-pkg-up": "^8.0.0",
				"redent": "^4.0.0",
				"trim-newlines": "^4.0.2",
				"type-fest": "^1.2.2",
				"yargs-parser": "^20.2.9"
			},
			"dependencies": {
				"read-pkg": {
					"version": "6.0.0",
					"resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-6.0.0.tgz",
					"integrity": "sha512-X1Fu3dPuk/8ZLsMhEj5f4wFAF0DWoK7qhGJvgaijocXxBmSToKfbFtqbxMO7bVjNA1dmE5huAzjXj/ey86iw9Q==",
					"dev": true,
					"requires": {
						"@types/normalize-package-data": "^2.4.0",
						"normalize-package-data": "^3.0.2",
						"parse-json": "^5.2.0",
						"type-fest": "^1.0.1"
					}
				},
				"read-pkg-up": {
					"version": "8.0.0",
					"resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-8.0.0.tgz",
					"integrity": "sha512-snVCqPczksT0HS2EC+SxUndvSzn6LRCwpfSvLrIfR5BKDQQZMaI6jPRC9dYvYFDRAuFEAnkwww8kBBNE/3VvzQ==",
					"dev": true,
					"requires": {
						"find-up": "^5.0.0",
						"read-pkg": "^6.0.0",
						"type-fest": "^1.0.1"
					}
				},
				"type-fest": {
					"version": "1.4.0",
					"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-1.4.0.tgz",
					"integrity": "sha512-yGSza74xk0UG8k+pLh5oeoYirvIiWo5t0/o3zHHAO2tRDiZcxWP7fywNlXhqb6/r6sWvwi+RsyQMWhVLe4BVuA==",
					"dev": true
				},
				"yargs-parser": {
					"version": "20.2.9",
					"resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",
					"integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==",
					"dev": true
				}
			}
		},
		"merge-stream": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
			"integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
			"dev": true
		},
		"merge2": {
			"version": "1.4.1",
			"resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
			"integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
			"dev": true
		},
		"micromatch": {
			"version": "4.0.5",
			"resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.5.tgz",
			"integrity": "sha512-DMy+ERcEW2q8Z2Po+WNXuw3c5YaUSFjAO5GsJqfEl7UjvtIuFKO6ZrKvcItdy98dwFI2N1tg3zNIdKaQT+aNdA==",
			"dev": true,
			"requires": {
				"braces": "^3.0.2",
				"picomatch": "^2.3.1"
			}
		},
		"mime-db": {
			"version": "1.52.0",
			"resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
			"integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
			"dev": true
		},
		"mime-types": {
			"version": "2.1.35",
			"resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
			"integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
			"dev": true,
			"requires": {
				"mime-db": "1.52.0"
			}
		},
		"mimic-fn": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
			"integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
			"dev": true
		},
		"min-indent": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/min-indent/-/min-indent-1.0.1.tgz",
			"integrity": "sha512-I9jwMn07Sy/IwOj3zVkVik2JTvgpaykDZEigL6Rx6N9LbMywwUSMtxET+7lVoDLLd3O3IXwJwvuuns8UB/HeAg==",
			"dev": true
		},
		"minimatch": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
			"integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
			"requires": {
				"brace-expansion": "^1.1.7"
			}
		},
		"minimist": {
			"version": "1.2.6",
			"resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.6.tgz",
			"integrity": "sha512-Jsjnk4bw3YJqYzbdyBiNsPWHPfO++UGG749Cxs6peCu5Xg4nrena6OVxOYxrQTqww0Jmwt+Ref8rggumkTLz9Q==",
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
			}
		},
		"minipass": {
			"version": "3.1.6",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-3.1.6.tgz",
			"integrity": "sha512-rty5kpw9/z8SX9dmxblFA6edItUmwJgMeYDZRrwlIVN27i8gysGbznJwUggw2V/FVqFSDdWy040ZPS811DYAqQ==",
			"dev": true,
			"requires": {
				"yallist": "^4.0.0"
			}
		},
		"minipass-collect": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/minipass-collect/-/minipass-collect-1.0.2.tgz",
			"integrity": "sha512-6T6lH0H8OG9kITm/Jm6tdooIbogG9e0tLgpY6mphXSm/A9u8Nq1ryBG+Qspiub9LjWlBPsPS3tWQ/Botq4FdxA==",
			"dev": true,
			"requires": {
				"minipass": "^3.0.0"
			}
		},
		"minipass-fetch": {
			"version": "1.4.1",
			"resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-1.4.1.tgz",
			"integrity": "sha512-CGH1eblLq26Y15+Azk7ey4xh0J/XfJfrCox5LDJiKqI2Q2iwOLOKrlmIaODiSQS8d18jalF6y2K2ePUm0CmShw==",
			"dev": true,
			"requires": {
				"encoding": "^0.1.12",
				"minipass": "^3.1.0",
				"minipass-sized": "^1.0.3",
				"minizlib": "^2.0.0"
			}
		},
		"minipass-flush": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/minipass-flush/-/minipass-flush-1.0.5.tgz",
			"integrity": "sha512-JmQSYYpPUqX5Jyn1mXaRwOda1uQ8HP5KAT/oDSLCzt1BYRhQU0/hDtsB1ufZfEEzMZ9aAVmsBw8+FWsIXlClWw==",
			"dev": true,
			"requires": {
				"minipass": "^3.0.0"
			}
		},
		"minipass-json-stream": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/minipass-json-stream/-/minipass-json-stream-1.0.1.tgz",
			"integrity": "sha512-ODqY18UZt/I8k+b7rl2AENgbWE8IDYam+undIJONvigAz8KR5GWblsFTEfQs0WODsjbSXWlm+JHEv8Gr6Tfdbg==",
			"dev": true,
			"requires": {
				"jsonparse": "^1.3.1",
				"minipass": "^3.0.0"
			}
		},
		"minipass-pipeline": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/minipass-pipeline/-/minipass-pipeline-1.2.4.tgz",
			"integrity": "sha512-xuIq7cIOt09RPRJ19gdi4b+RiNvDFYe5JH+ggNvBqGqpQXcru3PcRmOZuHBKWK1Txf9+cQ+HMVN4d6z46LZP7A==",
			"dev": true,
			"requires": {
				"minipass": "^3.0.0"
			}
		},
		"minipass-sized": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/minipass-sized/-/minipass-sized-1.0.3.tgz",
			"integrity": "sha512-MbkQQ2CTiBMlA2Dm/5cY+9SWFEN8pzzOXi6rlM5Xxq0Yqbda5ZQy9sU75a673FE9ZK0Zsbr6Y5iP6u9nktfg2g==",
			"dev": true,
			"requires": {
				"minipass": "^3.0.0"
			}
		},
		"minizlib": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
			"integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
			"dev": true,
			"requires": {
				"minipass": "^3.0.0",
				"yallist": "^4.0.0"
			}
		},
		"mkdirp": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
			"integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
			"dev": true
		},
		"mkdirp-infer-owner": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/mkdirp-infer-owner/-/mkdirp-infer-owner-2.0.0.tgz",
			"integrity": "sha512-sdqtiFt3lkOaYvTXSRIUjkIdPTcxgv5+fgqYE/5qgwdw12cOrAuzzgzvVExIkH/ul1oeHN3bCLOWSG3XOqbKKw==",
			"dev": true,
			"requires": {
				"chownr": "^2.0.0",
				"infer-owner": "^1.0.4",
				"mkdirp": "^1.0.3"
			}
		},
		"mocha": {
			"version": "9.2.2",
			"resolved": "https://registry.npmjs.org/mocha/-/mocha-9.2.2.tgz",
			"integrity": "sha512-L6XC3EdwT6YrIk0yXpavvLkn8h+EU+Y5UcCHKECyMbdUIxyMuZj4bX4U9e1nvnvUUvQVsV2VHQr5zLdcUkhW/g==",
			"dev": true,
			"requires": {
				"@ungap/promise-all-settled": "1.1.2",
				"ansi-colors": "4.1.1",
				"browser-stdout": "1.3.1",
				"chokidar": "3.5.3",
				"debug": "4.3.3",
				"diff": "5.0.0",
				"escape-string-regexp": "4.0.0",
				"find-up": "5.0.0",
				"glob": "7.2.0",
				"growl": "1.10.5",
				"he": "1.2.0",
				"js-yaml": "4.1.0",
				"log-symbols": "4.1.0",
				"minimatch": "4.2.1",
				"ms": "2.1.3",
				"nanoid": "3.3.1",
				"serialize-javascript": "6.0.0",
				"strip-json-comments": "3.1.1",
				"supports-color": "8.1.1",
				"which": "2.0.2",
				"workerpool": "6.2.0",
				"yargs": "16.2.0",
				"yargs-parser": "20.2.4",
				"yargs-unparser": "2.0.0"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.3",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.3.tgz",
					"integrity": "sha512-/zxw5+vh1Tfv+4Qn7a5nsbcJKPaSvCDhojn6FEl9vupwK2VCSDtEiEtqr8DFtzYFOdz63LBkxec7DYuc2jon6Q==",
					"dev": true,
					"requires": {
						"ms": "2.1.2"
					},
					"dependencies": {
						"ms": {
							"version": "2.1.2",
							"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
							"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
							"dev": true
						}
					}
				},
				"glob": {
					"version": "7.2.0",
					"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.0.tgz",
					"integrity": "sha512-lmLf6gtyrPq8tTjSmrO94wBeQbFR3HbLHbuyD69wuyQkImp2hWqMGB47OX65FBkPffO641IP9jWa1z4ivqG26Q==",
					"dev": true,
					"requires": {
						"fs.realpath": "^1.0.0",
						"inflight": "^1.0.4",
						"inherits": "2",
						"minimatch": "^3.0.4",
						"once": "^1.3.0",
						"path-is-absolute": "^1.0.0"
					},
					"dependencies": {
						"minimatch": {
							"version": "3.1.2",
							"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
							"integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
							"dev": true,
							"requires": {
								"brace-expansion": "^1.1.7"
							}
						}
					}
				},
				"minimatch": {
					"version": "4.2.1",
					"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-4.2.1.tgz",
					"integrity": "sha512-9Uq1ChtSZO+Mxa/CL1eGizn2vRn3MlLgzhT0Iz8zaY8NdvxvB0d5QdPFmCKf7JKA9Lerx5vRrnwO03jsSfGG9g==",
					"dev": true,
					"requires": {
						"brace-expansion": "^1.1.7"
					}
				},
				"ms": {
					"version": "2.1.3",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
					"integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
					"dev": true
				},
				"supports-color": {
					"version": "8.1.1",
					"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
					"integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
					"dev": true,
					"requires": {
						"has-flag": "^4.0.0"
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
		"multimatch": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/multimatch/-/multimatch-5.0.0.tgz",
			"integrity": "sha512-ypMKuglUrZUD99Tk2bUQ+xNQj43lPEfAeX2o9cTteAmShXy2VHDJpuwu1o0xqoKCt9jLVAvwyFKdLTPXKAfJyA==",
			"dev": true,
			"requires": {
				"@types/minimatch": "^3.0.3",
				"array-differ": "^3.0.0",
				"array-union": "^2.1.0",
				"arrify": "^2.0.1",
				"minimatch": "^3.0.4"
			},
			"dependencies": {
				"arrify": {
					"version": "2.0.1",
					"resolved": "https://registry.npmjs.org/arrify/-/arrify-2.0.1.tgz",
					"integrity": "sha512-3duEwti880xqi4eAMN8AyR4a0ByT90zoYdLlevfrvU43vb0YZwZVfxOgxWrLXXXpyugL0hNZc9G6BiB5B3nUug==",
					"dev": true
				}
			}
		},
		"mute-stream": {
			"version": "0.0.8",
			"resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.8.tgz",
			"integrity": "sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA==",
			"dev": true
		},
		"nanoid": {
			"version": "3.3.1",
			"resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.1.tgz",
			"integrity": "sha512-n6Vs/3KGyxPQd6uO0eH4Bv0ojGSUvuLlIHtC3Y0kEO23YRge8H9x1GCzLn28YX0H66pMkxuaeESFq4tKISKwdw==",
			"dev": true
		},
		"natural-compare": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
			"integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
			"dev": true
		},
		"negotiator": {
			"version": "0.6.3",
			"resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
			"integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
			"dev": true
		},
		"neo-async": {
			"version": "2.6.2",
			"resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
			"integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
			"dev": true
		},
		"nise": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/nise/-/nise-5.1.1.tgz",
			"integrity": "sha512-yr5kW2THW1AkxVmCnKEh4nbYkJdB3I7LUkiUgOvEkOp414mc2UMaHMA7pjq1nYowhdoJZGwEKGaQVbxfpWj10A==",
			"requires": {
				"@sinonjs/commons": "^1.8.3",
				"@sinonjs/fake-timers": ">=5",
				"@sinonjs/text-encoding": "^0.7.1",
				"just-extend": "^4.0.2",
				"path-to-regexp": "^1.7.0"
			}
		},
		"node-fetch": {
			"version": "2.6.7",
			"resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.7.tgz",
			"integrity": "sha512-ZjMPFEfVx5j+y2yF35Kzx5sF7kDzxuDj6ziH4FFbOp87zKDZNx8yExJIb05OGF4Nlt9IHFIMBkRl41VdvcNdbQ==",
			"dev": true,
			"requires": {
				"whatwg-url": "^5.0.0"
			},
			"dependencies": {
				"tr46": {
					"version": "0.0.3",
					"resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
					"integrity": "sha1-gYT9NH2snNwYWZLzpmIuFLnZq2o=",
					"dev": true
				},
				"webidl-conversions": {
					"version": "3.0.1",
					"resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
					"integrity": "sha1-JFNCdeKnvGvnvIZhHMFq4KVlSHE=",
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
				}
			}
		},
		"node-gyp": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-5.1.1.tgz",
			"integrity": "sha512-WH0WKGi+a4i4DUt2mHnvocex/xPLp9pYt5R6M2JdFB7pJ7Z34hveZ4nDTGTiLXCkitA9T8HFZjhinBCiVHYcWw==",
			"dev": true,
			"requires": {
				"env-paths": "^2.2.0",
				"glob": "^7.1.4",
				"graceful-fs": "^4.2.2",
				"mkdirp": "^0.5.1",
				"nopt": "^4.0.1",
				"npmlog": "^4.1.2",
				"request": "^2.88.0",
				"rimraf": "^2.6.3",
				"semver": "^5.7.1",
				"tar": "^4.4.12",
				"which": "^1.3.1"
			},
			"dependencies": {
				"chownr": {
					"version": "1.1.4",
					"resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
					"integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg==",
					"dev": true
				},
				"fs-minipass": {
					"version": "1.2.7",
					"resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-1.2.7.tgz",
					"integrity": "sha512-GWSSJGFy4e9GUeCcbIkED+bgAoFyj7XF1mV8rma3QW4NIqX9Kyx79N/PF61H5udOV3aY1IaMLs6pGbH71nlCTA==",
					"dev": true,
					"requires": {
						"minipass": "^2.6.0"
					}
				},
				"glob": {
					"version": "7.2.3",
					"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
					"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
					"dev": true,
					"requires": {
						"fs.realpath": "^1.0.0",
						"inflight": "^1.0.4",
						"inherits": "2",
						"minimatch": "^3.1.1",
						"once": "^1.3.0",
						"path-is-absolute": "^1.0.0"
					}
				},
				"minipass": {
					"version": "2.9.0",
					"resolved": "https://registry.npmjs.org/minipass/-/minipass-2.9.0.tgz",
					"integrity": "sha512-wxfUjg9WebH+CUDX/CdbRlh5SmfZiy/hpkxaRI16Y9W56Pa75sWgd/rvFilSgrauD9NyFymP/+JFV3KwzIsJeg==",
					"dev": true,
					"requires": {
						"safe-buffer": "^5.1.2",
						"yallist": "^3.0.0"
					}
				},
				"minizlib": {
					"version": "1.3.3",
					"resolved": "https://registry.npmjs.org/minizlib/-/minizlib-1.3.3.tgz",
					"integrity": "sha512-6ZYMOEnmVsdCeTJVE0W9ZD+pVnE8h9Hma/iOwwRDsdQoePpoX56/8B6z3P9VNwppJuBKNRuFDRNRqRWexT9G9Q==",
					"dev": true,
					"requires": {
						"minipass": "^2.9.0"
					}
				},
				"mkdirp": {
					"version": "0.5.6",
					"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz",
					"integrity": "sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==",
					"dev": true,
					"requires": {
						"minimist": "^1.2.6"
					}
				},
				"rimraf": {
					"version": "2.7.1",
					"resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
					"integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
					"dev": true,
					"requires": {
						"glob": "^7.1.3"
					}
				},
				"semver": {
					"version": "5.7.1",
					"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
					"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
					"dev": true
				},
				"tar": {
					"version": "4.4.19",
					"resolved": "https://registry.npmjs.org/tar/-/tar-4.4.19.tgz",
					"integrity": "sha512-a20gEsvHnWe0ygBY8JbxoM4w3SJdhc7ZAuxkLqh+nvNQN2IOt0B5lLgM490X5Hl8FF0dl0tOf2ewFYAlIFgzVA==",
					"dev": true,
					"requires": {
						"chownr": "^1.1.4",
						"fs-minipass": "^1.2.7",
						"minipass": "^2.9.0",
						"minizlib": "^1.3.3",
						"mkdirp": "^0.5.5",
						"safe-buffer": "^5.2.1",
						"yallist": "^3.1.1"
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
				"yallist": {
					"version": "3.1.1",
					"resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
					"integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
					"dev": true
				}
			}
		},
		"nopt": {
			"version": "4.0.3",
			"resolved": "https://registry.npmjs.org/nopt/-/nopt-4.0.3.tgz",
			"integrity": "sha512-CvaGwVMztSMJLOeXPrez7fyfObdZqNUK1cPAEzLHrTybIua9pMdmmPR5YwtfNftIOMv3DPUhFaxsZMNTQO20Kg==",
			"dev": true,
			"requires": {
				"abbrev": "1",
				"osenv": "^0.1.4"
			}
		},
		"normalize-package-data": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-3.0.3.tgz",
			"integrity": "sha512-p2W1sgqij3zMMyRC067Dg16bfzVH+w7hyegmpIvZ4JNjqtGOVAIvLmjBx3yP7YTe9vKJgkoNOPjwQGogDoMXFA==",
			"dev": true,
			"requires": {
				"hosted-git-info": "^4.0.1",
				"is-core-module": "^2.5.0",
				"semver": "^7.3.4",
				"validate-npm-package-license": "^3.0.1"
			}
		},
		"normalize-path": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
			"integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
			"dev": true
		},
		"normalize-url": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-6.1.0.tgz",
			"integrity": "sha512-DlL+XwOy3NxAQ8xuC0okPgK46iuVNAK01YN7RueYBqqFeGsBjV9XmCAzAdgt+667bCl5kPh9EqKKDwnaPG1I7A==",
			"dev": true
		},
		"npm-bundled": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/npm-bundled/-/npm-bundled-1.1.2.tgz",
			"integrity": "sha512-x5DHup0SuyQcmL3s7Rx/YQ8sbw/Hzg0rj48eN0dV7hf5cmQq5PXIeioroH3raV1QC1yh3uTYuMThvEQF3iKgGQ==",
			"dev": true,
			"requires": {
				"npm-normalize-package-bin": "^1.0.1"
			}
		},
		"npm-install-checks": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/npm-install-checks/-/npm-install-checks-4.0.0.tgz",
			"integrity": "sha512-09OmyDkNLYwqKPOnbI8exiOZU2GVVmQp7tgez2BPi5OZC8M82elDAps7sxC4l//uSUtotWqoEIDwjRvWH4qz8w==",
			"dev": true,
			"requires": {
				"semver": "^7.1.1"
			}
		},
		"npm-lifecycle": {
			"version": "3.1.5",
			"resolved": "https://registry.npmjs.org/npm-lifecycle/-/npm-lifecycle-3.1.5.tgz",
			"integrity": "sha512-lDLVkjfZmvmfvpvBzA4vzee9cn+Me4orq0QF8glbswJVEbIcSNWib7qGOffolysc3teCqbbPZZkzbr3GQZTL1g==",
			"dev": true,
			"requires": {
				"byline": "^5.0.0",
				"graceful-fs": "^4.1.15",
				"node-gyp": "^5.0.2",
				"resolve-from": "^4.0.0",
				"slide": "^1.1.6",
				"uid-number": "0.0.6",
				"umask": "^1.1.0",
				"which": "^1.3.1"
			},
			"dependencies": {
				"which": {
					"version": "1.3.1",
					"resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
					"integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
					"dev": true,
					"requires": {
						"isexe": "^2.0.0"
					}
				}
			}
		},
		"npm-normalize-package-bin": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/npm-normalize-package-bin/-/npm-normalize-package-bin-1.0.1.tgz",
			"integrity": "sha512-EPfafl6JL5/rU+ot6P3gRSCpPDW5VmIzX959Ob1+ySFUuuYHWHekXpwdUZcKP5C+DS4GEtdJluwBjnsNDl+fSA==",
			"dev": true
		},
		"npm-package-arg": {
			"version": "8.1.5",
			"resolved": "https://registry.npmjs.org/npm-package-arg/-/npm-package-arg-8.1.5.tgz",
			"integrity": "sha512-LhgZrg0n0VgvzVdSm1oiZworPbTxYHUJCgtsJW8mGvlDpxTM1vSJc3m5QZeUkhAHIzbz3VCHd/R4osi1L1Tg/Q==",
			"dev": true,
			"requires": {
				"hosted-git-info": "^4.0.1",
				"semver": "^7.3.4",
				"validate-npm-package-name": "^3.0.0"
			}
		},
		"npm-packlist": {
			"version": "2.2.2",
			"resolved": "https://registry.npmjs.org/npm-packlist/-/npm-packlist-2.2.2.tgz",
			"integrity": "sha512-Jt01acDvJRhJGthnUJVF/w6gumWOZxO7IkpY/lsX9//zqQgnF7OJaxgQXcerd4uQOLu7W5bkb4mChL9mdfm+Zg==",
			"dev": true,
			"requires": {
				"glob": "^7.1.6",
				"ignore-walk": "^3.0.3",
				"npm-bundled": "^1.1.1",
				"npm-normalize-package-bin": "^1.0.1"
			},
			"dependencies": {
				"glob": {
					"version": "7.2.3",
					"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
					"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
					"dev": true,
					"requires": {
						"fs.realpath": "^1.0.0",
						"inflight": "^1.0.4",
						"inherits": "2",
						"minimatch": "^3.1.1",
						"once": "^1.3.0",
						"path-is-absolute": "^1.0.0"
					}
				}
			}
		},
		"npm-pick-manifest": {
			"version": "6.1.1",
			"resolved": "https://registry.npmjs.org/npm-pick-manifest/-/npm-pick-manifest-6.1.1.tgz",
			"integrity": "sha512-dBsdBtORT84S8V8UTad1WlUyKIY9iMsAmqxHbLdeEeBNMLQDlDWWra3wYUx9EBEIiG/YwAy0XyNHDd2goAsfuA==",
			"dev": true,
			"requires": {
				"npm-install-checks": "^4.0.0",
				"npm-normalize-package-bin": "^1.0.1",
				"npm-package-arg": "^8.1.2",
				"semver": "^7.3.4"
			}
		},
		"npm-registry-fetch": {
			"version": "9.0.0",
			"resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-9.0.0.tgz",
			"integrity": "sha512-PuFYYtnQ8IyVl6ib9d3PepeehcUeHN9IO5N/iCRhyg9tStQcqGQBRVHmfmMWPDERU3KwZoHFvbJ4FPXPspvzbA==",
			"dev": true,
			"requires": {
				"@npmcli/ci-detect": "^1.0.0",
				"lru-cache": "^6.0.0",
				"make-fetch-happen": "^8.0.9",
				"minipass": "^3.1.3",
				"minipass-fetch": "^1.3.0",
				"minipass-json-stream": "^1.0.1",
				"minizlib": "^2.0.0",
				"npm-package-arg": "^8.0.0"
			}
		},
		"npm-run-path": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
			"integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
			"dev": true,
			"requires": {
				"path-key": "^3.0.0"
			}
		},
		"npmlog": {
			"version": "4.1.2",
			"resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
			"integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
			"dev": true,
			"requires": {
				"are-we-there-yet": "~1.1.2",
				"console-control-strings": "~1.1.0",
				"gauge": "~2.7.3",
				"set-blocking": "~2.0.0"
			}
		},
		"nth-check": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz",
			"integrity": "sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==",
			"requires": {
				"boolbase": "^1.0.0"
			}
		},
		"number-is-nan": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
			"integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",
			"dev": true
		},
		"oauth-sign": {
			"version": "0.9.0",
			"resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
			"integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
			"dev": true
		},
		"object-assign": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
			"integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
			"dev": true
		},
		"object-inspect": {
			"version": "1.12.2",
			"resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.2.tgz",
			"integrity": "sha512-z+cPxW0QGUp0mcqcsgQyLVRDoXFQbXOwBaqyF7VIgI4TWNQsDHrBpUQslRmIfAoYWdYzs6UlKJtB2XJpTaNSpQ==",
			"dev": true
		},
		"object-keys": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
			"integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
			"dev": true
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
		"object.getownpropertydescriptors": {
			"version": "2.1.4",
			"resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.4.tgz",
			"integrity": "sha512-sccv3L/pMModT6dJAYF3fzGMVcb38ysQ0tEE6ixv2yXJDtEIPph268OlAdJj5/qZMZDq2g/jqvwppt36uS/uQQ==",
			"dev": true,
			"requires": {
				"array.prototype.reduce": "^1.0.4",
				"call-bind": "^1.0.2",
				"define-properties": "^1.1.4",
				"es-abstract": "^1.20.1"
			}
		},
		"once": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
			"integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
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
		"os-homedir": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
			"integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M=",
			"dev": true
		},
		"os-tmpdir": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
			"integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
			"dev": true
		},
		"osenv": {
			"version": "0.1.5",
			"resolved": "https://registry.npmjs.org/osenv/-/osenv-0.1.5.tgz",
			"integrity": "sha512-0CWcCECdMVc2Rw3U5w9ZjqX6ga6ubk1xDVKxtBQPK7wis/0F2r9T6k4ydGYhecl7YUBxBVxhL5oisPsNxAPe2g==",
			"dev": true,
			"requires": {
				"os-homedir": "^1.0.0",
				"os-tmpdir": "^1.0.0"
			}
		},
		"p-finally": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
			"integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
			"dev": true
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
		"p-map": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
			"integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",
			"dev": true,
			"requires": {
				"aggregate-error": "^3.0.0"
			}
		},
		"p-map-series": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/p-map-series/-/p-map-series-2.1.0.tgz",
			"integrity": "sha512-RpYIIK1zXSNEOdwxcfe7FdvGcs7+y5n8rifMhMNWvaxRNMPINJHF5GDeuVxWqnfrcHPSCnp7Oo5yNXHId9Av2Q==",
			"dev": true
		},
		"p-pipe": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/p-pipe/-/p-pipe-3.1.0.tgz",
			"integrity": "sha512-08pj8ATpzMR0Y80x50yJHn37NF6vjrqHutASaX5LiH5npS9XPvrUmscd9MF5R4fuYRHOxQR1FfMIlF7AzwoPqw==",
			"dev": true
		},
		"p-queue": {
			"version": "6.6.2",
			"resolved": "https://registry.npmjs.org/p-queue/-/p-queue-6.6.2.tgz",
			"integrity": "sha512-RwFpb72c/BhQLEXIZ5K2e+AhgNVmIejGlTgiB9MzZ0e93GRvqZ7uSi0dvRF7/XIXDeNkra2fNHBxTyPDGySpjQ==",
			"dev": true,
			"requires": {
				"eventemitter3": "^4.0.4",
				"p-timeout": "^3.2.0"
			}
		},
		"p-reduce": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/p-reduce/-/p-reduce-2.1.0.tgz",
			"integrity": "sha512-2USApvnsutq8uoxZBGbbWM0JIYLiEMJ9RlaN7fAzVNb9OZN0SHjjTTfIcb667XynS5Y1VhwDJVDa72TnPzAYWw==",
			"dev": true
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
		"p-waterfall": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/p-waterfall/-/p-waterfall-2.1.1.tgz",
			"integrity": "sha512-RRTnDb2TBG/epPRI2yYXsimO0v3BXC8Yd3ogr1545IaqKK17VGhbWVeGGN+XfCm/08OK8635nH31c8bATkHuSw==",
			"dev": true,
			"requires": {
				"p-reduce": "^2.0.0"
			}
		},
		"pacote": {
			"version": "11.3.5",
			"resolved": "https://registry.npmjs.org/pacote/-/pacote-11.3.5.tgz",
			"integrity": "sha512-fT375Yczn4zi+6Hkk2TBe1x1sP8FgFsEIZ2/iWaXY2r/NkhDJfxbcn5paz1+RTFCyNf+dPnaoBDJoAxXSU8Bkg==",
			"dev": true,
			"requires": {
				"@npmcli/git": "^2.1.0",
				"@npmcli/installed-package-contents": "^1.0.6",
				"@npmcli/promise-spawn": "^1.2.0",
				"@npmcli/run-script": "^1.8.2",
				"cacache": "^15.0.5",
				"chownr": "^2.0.0",
				"fs-minipass": "^2.1.0",
				"infer-owner": "^1.0.4",
				"minipass": "^3.1.3",
				"mkdirp": "^1.0.3",
				"npm-package-arg": "^8.0.1",
				"npm-packlist": "^2.1.4",
				"npm-pick-manifest": "^6.0.0",
				"npm-registry-fetch": "^11.0.0",
				"promise-retry": "^2.0.1",
				"read-package-json-fast": "^2.0.1",
				"rimraf": "^3.0.2",
				"ssri": "^8.0.1",
				"tar": "^6.1.0"
			},
			"dependencies": {
				"make-fetch-happen": {
					"version": "9.1.0",
					"resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-9.1.0.tgz",
					"integrity": "sha512-+zopwDy7DNknmwPQplem5lAZX/eCOzSvSNNcSKm5eVwTkOBzoktEfXsa9L23J/GIRhxRsaxzkPEhrJEpE2F4Gg==",
					"dev": true,
					"requires": {
						"agentkeepalive": "^4.1.3",
						"cacache": "^15.2.0",
						"http-cache-semantics": "^4.1.0",
						"http-proxy-agent": "^4.0.1",
						"https-proxy-agent": "^5.0.0",
						"is-lambda": "^1.0.1",
						"lru-cache": "^6.0.0",
						"minipass": "^3.1.3",
						"minipass-collect": "^1.0.2",
						"minipass-fetch": "^1.3.2",
						"minipass-flush": "^1.0.5",
						"minipass-pipeline": "^1.2.4",
						"negotiator": "^0.6.2",
						"promise-retry": "^2.0.1",
						"socks-proxy-agent": "^6.0.0",
						"ssri": "^8.0.0"
					}
				},
				"npm-registry-fetch": {
					"version": "11.0.0",
					"resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-11.0.0.tgz",
					"integrity": "sha512-jmlgSxoDNuhAtxUIG6pVwwtz840i994dL14FoNVZisrmZW5kWd63IUTNv1m/hyRSGSqWjCUp/YZlS1BJyNp9XA==",
					"dev": true,
					"requires": {
						"make-fetch-happen": "^9.0.1",
						"minipass": "^3.1.3",
						"minipass-fetch": "^1.3.0",
						"minipass-json-stream": "^1.0.1",
						"minizlib": "^2.0.0",
						"npm-package-arg": "^8.0.0"
					}
				},
				"socks-proxy-agent": {
					"version": "6.2.0",
					"resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-6.2.0.tgz",
					"integrity": "sha512-wWqJhjb32Q6GsrUqzuFkukxb/zzide5quXYcMVpIjxalDBBYy2nqKCFQ/9+Ie4dvOYSQdOk3hUlZSdzZOd3zMQ==",
					"dev": true,
					"requires": {
						"agent-base": "^6.0.2",
						"debug": "^4.3.3",
						"socks": "^2.6.2"
					}
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
		"parse-path": {
			"version": "4.0.3",
			"resolved": "https://registry.npmjs.org/parse-path/-/parse-path-4.0.3.tgz",
			"integrity": "sha512-9Cepbp2asKnWTJ9x2kpw6Fe8y9JDbqwahGCTvklzd/cEq5C5JC59x2Xb0Kx+x0QZ8bvNquGO8/BWP0cwBHzSAA==",
			"dev": true,
			"requires": {
				"is-ssh": "^1.3.0",
				"protocols": "^1.4.0",
				"qs": "^6.9.4",
				"query-string": "^6.13.8"
			}
		},
		"parse-url": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/parse-url/-/parse-url-6.0.0.tgz",
			"integrity": "sha512-cYyojeX7yIIwuJzledIHeLUBVJ6COVLeT4eF+2P6aKVzwvgKQPndCBv3+yQ7pcWjqToYwaligxzSYNNmGoMAvw==",
			"dev": true,
			"requires": {
				"is-ssh": "^1.3.0",
				"normalize-url": "^6.1.0",
				"parse-path": "^4.0.0",
				"protocols": "^1.4.0"
			}
		},
		"parse5": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/parse5/-/parse5-7.0.0.tgz",
			"integrity": "sha512-y/t8IXSPWTuRZqXc0ajH/UwDj4mnqLEbSttNbThcFhGrZuOyoyvNBO85PBp2jQa55wY9d07PBNjsK8ZP3K5U6g==",
			"requires": {
				"entities": "^4.3.0"
			}
		},
		"parse5-htmlparser2-tree-adapter": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/parse5-htmlparser2-tree-adapter/-/parse5-htmlparser2-tree-adapter-7.0.0.tgz",
			"integrity": "sha512-B77tOZrqqfUfnVcOrUvfdLbz4pu4RopLD/4vmu3HUPswwTA8OH0EMW9BlWR2B0RCoiZRAHEUu7IxeP1Pd1UU+g==",
			"requires": {
				"domhandler": "^5.0.2",
				"parse5": "^7.0.0"
			}
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
			"integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
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
		"path-to-regexp": {
			"version": "1.8.0",
			"resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-1.8.0.tgz",
			"integrity": "sha512-n43JRhlUKUAlibEJhPeir1ncUID16QnEjNpwzNdO3Lm4ywrBpBZ5oLD0I6br9evr1Y9JTqwRtAh7JLoOzAQdVA==",
			"requires": {
				"isarray": "0.0.1"
			},
			"dependencies": {
				"isarray": {
					"version": "0.0.1",
					"resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
					"integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
				}
			}
		},
		"path-type": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
			"integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
			"dev": true
		},
		"performance-now": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
			"integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
			"dev": true
		},
		"picomatch": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
			"integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
			"dev": true
		},
		"pify": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/pify/-/pify-5.0.0.tgz",
			"integrity": "sha512-eW/gHNMlxdSP6dmG6uJip6FXN0EQBwm2clYYd8Wul42Cwu/DK8HEftzsapcNdYe2MfLiIwZqsDk2RDEsTE79hA==",
			"dev": true
		},
		"pkg-dir": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
			"integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
			"dev": true,
			"requires": {
				"find-up": "^4.0.0"
			},
			"dependencies": {
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
				"locate-path": {
					"version": "5.0.0",
					"resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
					"integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
					"dev": true,
					"requires": {
						"p-locate": "^4.1.0"
					}
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
				}
			}
		},
		"pollock": {
			"version": "0.2.1",
			"resolved": "https://registry.npmjs.org/pollock/-/pollock-0.2.1.tgz",
			"integrity": "sha512-2Xy6LImSXm0ANKv9BKSVuCa6Z4ACbK7oUrl9gtUgqLkekL7n9C0mlWsOGYYuGbCG8xT0x3Q4F31C3ZMyVQjwsg=="
		},
		"prelude-ls": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
			"integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
			"dev": true
		},
		"process-nextick-args": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
			"integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
			"dev": true
		},
		"promise-inflight": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/promise-inflight/-/promise-inflight-1.0.1.tgz",
			"integrity": "sha1-mEcocL8igTL8vdhoEputEsPAKeM=",
			"dev": true
		},
		"promise-retry": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/promise-retry/-/promise-retry-2.0.1.tgz",
			"integrity": "sha512-y+WKFlBR8BGXnsNlIHFGPZmyDf3DFMoLhaflAnyZgV6rG6xu+JwesTo2Q9R6XwYmtmwAFCkAk3e35jEdoeh/3g==",
			"dev": true,
			"requires": {
				"err-code": "^2.0.2",
				"retry": "^0.12.0"
			}
		},
		"promzard": {
			"version": "0.3.0",
			"resolved": "https://registry.npmjs.org/promzard/-/promzard-0.3.0.tgz",
			"integrity": "sha1-JqXW7ox97kyxIggwWs+5O6OCqe4=",
			"dev": true,
			"requires": {
				"read": "1"
			}
		},
		"proto-list": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/proto-list/-/proto-list-1.2.4.tgz",
			"integrity": "sha1-IS1b/hMYMGpCD2QCuOJv85ZHqEk=",
			"dev": true
		},
		"protocols": {
			"version": "1.4.8",
			"resolved": "https://registry.npmjs.org/protocols/-/protocols-1.4.8.tgz",
			"integrity": "sha512-IgjKyaUSjsROSO8/D49Ab7hP8mJgTYcqApOqdPhLoPxAplXmkp+zRvsrSQjFn5by0rhm4VH0GAUELIPpx7B1yg==",
			"dev": true
		},
		"psl": {
			"version": "1.8.0",
			"resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
			"integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==",
			"dev": true
		},
		"punycode": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
			"integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
			"dev": true
		},
		"q": {
			"version": "1.5.1",
			"resolved": "https://registry.npmjs.org/q/-/q-1.5.1.tgz",
			"integrity": "sha1-fjL3W0E4EpHQRhHxvxQQmsAGUdc=",
			"dev": true
		},
		"qs": {
			"version": "6.10.3",
			"resolved": "https://registry.npmjs.org/qs/-/qs-6.10.3.tgz",
			"integrity": "sha512-wr7M2E0OFRfIfJZjKGieI8lBKb7fRCH4Fv5KNPEs7gJ8jadvotdsS08PzOKR7opXhZ/Xkjtt3WF9g38drmyRqQ==",
			"dev": true,
			"requires": {
				"side-channel": "^1.0.4"
			}
		},
		"query-string": {
			"version": "6.14.1",
			"resolved": "https://registry.npmjs.org/query-string/-/query-string-6.14.1.tgz",
			"integrity": "sha512-XDxAeVmpfu1/6IjyT/gXHOl+S0vQ9owggJ30hhWKdHAsNPOcasn5o9BW0eejZqL2e4vMjhAxoW3jVHcD6mbcYw==",
			"dev": true,
			"requires": {
				"decode-uri-component": "^0.2.0",
				"filter-obj": "^1.1.0",
				"split-on-first": "^1.0.0",
				"strict-uri-encode": "^2.0.0"
			}
		},
		"queue-microtask": {
			"version": "1.2.3",
			"resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
			"integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
			"dev": true
		},
		"quick-lru": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
			"integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA==",
			"dev": true
		},
		"randombytes": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
			"integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
			"dev": true,
			"requires": {
				"safe-buffer": "^5.1.0"
			}
		},
		"read": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/read/-/read-1.0.7.tgz",
			"integrity": "sha1-s9oZvQUkMal2cdRKQmNK33ELQMQ=",
			"dev": true,
			"requires": {
				"mute-stream": "~0.0.4"
			}
		},
		"read-cmd-shim": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/read-cmd-shim/-/read-cmd-shim-2.0.0.tgz",
			"integrity": "sha512-HJpV9bQpkl6KwjxlJcBoqu9Ba0PQg8TqSNIOrulGt54a0uup0HtevreFHzYzkm0lpnleRdNBzXznKrgxglEHQw==",
			"dev": true
		},
		"read-package-json": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/read-package-json/-/read-package-json-3.0.1.tgz",
			"integrity": "sha512-aLcPqxovhJTVJcsnROuuzQvv6oziQx4zd3JvG0vGCL5MjTONUc4uJ90zCBC6R7W7oUKBNoR/F8pkyfVwlbxqng==",
			"dev": true,
			"requires": {
				"glob": "^7.1.1",
				"json-parse-even-better-errors": "^2.3.0",
				"normalize-package-data": "^3.0.0",
				"npm-normalize-package-bin": "^1.0.0"
			},
			"dependencies": {
				"glob": {
					"version": "7.2.3",
					"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
					"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
					"dev": true,
					"requires": {
						"fs.realpath": "^1.0.0",
						"inflight": "^1.0.4",
						"inherits": "2",
						"minimatch": "^3.1.1",
						"once": "^1.3.0",
						"path-is-absolute": "^1.0.0"
					}
				}
			}
		},
		"read-package-json-fast": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/read-package-json-fast/-/read-package-json-fast-2.0.3.tgz",
			"integrity": "sha512-W/BKtbL+dUjTuRL2vziuYhp76s5HZ9qQhd/dKfWIZveD0O40453QNyZhC0e63lqZrAQ4jiOapVoeJ7JrszenQQ==",
			"dev": true,
			"requires": {
				"json-parse-even-better-errors": "^2.3.0",
				"npm-normalize-package-bin": "^1.0.1"
			}
		},
		"read-package-tree": {
			"version": "5.3.1",
			"resolved": "https://registry.npmjs.org/read-package-tree/-/read-package-tree-5.3.1.tgz",
			"integrity": "sha512-mLUDsD5JVtlZxjSlPPx1RETkNjjvQYuweKwNVt1Sn8kP5Jh44pvYuUHCp6xSVDZWbNxVxG5lyZJ921aJH61sTw==",
			"dev": true,
			"requires": {
				"read-package-json": "^2.0.0",
				"readdir-scoped-modules": "^1.0.0",
				"util-promisify": "^2.1.0"
			},
			"dependencies": {
				"glob": {
					"version": "7.2.3",
					"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
					"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
					"dev": true,
					"requires": {
						"fs.realpath": "^1.0.0",
						"inflight": "^1.0.4",
						"inherits": "2",
						"minimatch": "^3.1.1",
						"once": "^1.3.0",
						"path-is-absolute": "^1.0.0"
					}
				},
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
				"read-package-json": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/read-package-json/-/read-package-json-2.1.2.tgz",
					"integrity": "sha512-D1KmuLQr6ZSJS0tW8hf3WGpRlwszJOXZ3E8Yd/DNRaM5d+1wVRZdHlpGBLAuovjr28LbWvjpWkBHMxpRGGjzNA==",
					"dev": true,
					"requires": {
						"glob": "^7.1.1",
						"json-parse-even-better-errors": "^2.3.0",
						"normalize-package-data": "^2.0.0",
						"npm-normalize-package-bin": "^1.0.0"
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
				"semver": {
					"version": "5.7.1",
					"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
					"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
					"dev": true
				},
				"strip-bom": {
					"version": "3.0.0",
					"resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
					"integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
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
			},
			"dependencies": {
				"find-up": {
					"version": "2.1.0",
					"resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
					"integrity": "sha512-NWzkk0jSJtTt08+FBFMvXoeZnOJD+jTtsRmBYbAIzJdX6l7dLgR7CTubCM5/eDdPUBvLCeVasP1brfVR/9/EZQ==",
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
		"readdir-scoped-modules": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/readdir-scoped-modules/-/readdir-scoped-modules-1.1.0.tgz",
			"integrity": "sha512-asaikDeqAQg7JifRsZn1NJZXo9E+VwlyCfbkZhwyISinqk5zNS6266HS5kah6P0SaQKGF6SkNnZVHUzHFYxYDw==",
			"dev": true,
			"requires": {
				"debuglog": "^1.0.1",
				"dezalgo": "^1.0.0",
				"graceful-fs": "^4.1.2",
				"once": "^1.3.0"
			}
		},
		"readdirp": {
			"version": "3.6.0",
			"resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
			"integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
			"dev": true,
			"requires": {
				"picomatch": "^2.2.1"
			}
		},
		"redent": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/redent/-/redent-4.0.0.tgz",
			"integrity": "sha512-tYkDkVVtYkSVhuQ4zBgfvciymHaeuel+zFKXShfDnFP5SyVEP7qo70Rf1jTOTCx3vGNAbnEi/xFkcfQVMIBWag==",
			"dev": true,
			"requires": {
				"indent-string": "^5.0.0",
				"strip-indent": "^4.0.0"
			},
			"dependencies": {
				"indent-string": {
					"version": "5.0.0",
					"resolved": "https://registry.npmjs.org/indent-string/-/indent-string-5.0.0.tgz",
					"integrity": "sha512-m6FAo/spmsW2Ab2fU35JTYwtOKa2yAwXSwgjSv1TJzh4Mh7mC3lzAOVLBprb72XsTrgkEIsl7YrFNAiDiRhIGg==",
					"dev": true
				}
			}
		},
		"regexp.prototype.flags": {
			"version": "1.4.3",
			"resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.4.3.tgz",
			"integrity": "sha512-fjggEOO3slI6Wvgjwflkc4NFRCTZAu5CnNfBd5qOMYhWdn67nJBBu34/TkD++eeFmd8C9r9jfXJ27+nSiRkSUA==",
			"dev": true,
			"requires": {
				"call-bind": "^1.0.2",
				"define-properties": "^1.1.3",
				"functions-have-names": "^1.2.2"
			}
		},
		"regexpp": {
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/regexpp/-/regexpp-3.2.0.tgz",
			"integrity": "sha512-pq2bWo9mVD43nbts2wGv17XLiNLya+GklZ8kaDLV2Z08gDCsGpnKn9BFMepvWuHCbyVvY7J5o5+BVvoQbmlJLg==",
			"dev": true
		},
		"request": {
			"version": "2.88.2",
			"resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
			"integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
			"dev": true,
			"requires": {
				"aws-sign2": "~0.7.0",
				"aws4": "^1.8.0",
				"caseless": "~0.12.0",
				"combined-stream": "~1.0.6",
				"extend": "~3.0.2",
				"forever-agent": "~0.6.1",
				"form-data": "~2.3.2",
				"har-validator": "~5.1.3",
				"http-signature": "~1.2.0",
				"is-typedarray": "~1.0.0",
				"isstream": "~0.1.2",
				"json-stringify-safe": "~5.0.1",
				"mime-types": "~2.1.19",
				"oauth-sign": "~0.9.0",
				"performance-now": "^2.1.0",
				"qs": "~6.5.2",
				"safe-buffer": "^5.1.2",
				"tough-cookie": "~2.5.0",
				"tunnel-agent": "^0.6.0",
				"uuid": "^3.3.2"
			},
			"dependencies": {
				"qs": {
					"version": "6.5.3",
					"resolved": "https://registry.npmjs.org/qs/-/qs-6.5.3.tgz",
					"integrity": "sha512-qxXIEh4pCGfHICj1mAJQ2/2XVZkjCDTcEgfoSQxc/fYivUZxTkk7L3bDBJSoNrEzXI17oUO5Dp07ktqE5KzczA==",
					"dev": true
				}
			}
		},
		"require-directory": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
			"integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
			"dev": true
		},
		"resolve": {
			"version": "1.22.0",
			"resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.0.tgz",
			"integrity": "sha512-Hhtrw0nLeSrFQ7phPp4OOcVjLPIeMnRlr5mcnVuMe7M/7eBn98A3hmFRLoFo3DLZkivSYwhRUJTyPyWAk56WLw==",
			"dev": true,
			"requires": {
				"is-core-module": "^2.8.1",
				"path-parse": "^1.0.7",
				"supports-preserve-symlinks-flag": "^1.0.0"
			}
		},
		"resolve-cwd": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
			"integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
			"dev": true,
			"requires": {
				"resolve-from": "^5.0.0"
			},
			"dependencies": {
				"resolve-from": {
					"version": "5.0.0",
					"resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
					"integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
					"dev": true
				}
			}
		},
		"resolve-from": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
			"integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
			"dev": true
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
		"retry": {
			"version": "0.12.0",
			"resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",
			"integrity": "sha1-G0KmJmoh8HQh0bC1S33BZ7AcATs=",
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
			"requires": {
				"glob": "^7.1.3"
			},
			"dependencies": {
				"glob": {
					"version": "7.2.3",
					"resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
					"integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
					"requires": {
						"fs.realpath": "^1.0.0",
						"inflight": "^1.0.4",
						"inherits": "2",
						"minimatch": "^3.1.1",
						"once": "^1.3.0",
						"path-is-absolute": "^1.0.0"
					}
				}
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
			"version": "5.2.1",
			"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
			"integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
			"dev": true
		},
		"safer-buffer": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
			"integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
			"dev": true
		},
		"semver": {
			"version": "7.3.7",
			"resolved": "https://registry.npmjs.org/semver/-/semver-7.3.7.tgz",
			"integrity": "sha512-QlYTucUYOews+WeEujDoEGziz4K6c47V/Bd+LjSSYcA94p+DmINdf7ncaUinThfvZyu13lN9OY1XDxt8C0Tw0g==",
			"dev": true,
			"requires": {
				"lru-cache": "^6.0.0"
			}
		},
		"serialize-javascript": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-6.0.0.tgz",
			"integrity": "sha512-Qr3TosvguFt8ePWqsvRfrKyQXIiW+nGbYpy8XK24NQHE83caxWt+mIymTT19DGFbNWNLfEwsrkSmN64lVWB9ag==",
			"dev": true,
			"requires": {
				"randombytes": "^2.1.0"
			}
		},
		"set-blocking": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
			"integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",
			"dev": true
		},
		"shallow-clone": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
			"integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
			"dev": true,
			"requires": {
				"kind-of": "^6.0.2"
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
		"side-channel": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
			"integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
			"dev": true,
			"requires": {
				"call-bind": "^1.0.0",
				"get-intrinsic": "^1.0.2",
				"object-inspect": "^1.9.0"
			}
		},
		"signal-exit": {
			"version": "3.0.7",
			"resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
			"integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
			"dev": true
		},
		"sinon": {
			"version": "13.0.2",
			"resolved": "https://registry.npmjs.org/sinon/-/sinon-13.0.2.tgz",
			"integrity": "sha512-KvOrztAVqzSJWMDoxM4vM+GPys1df2VBoXm+YciyB/OLMamfS3VXh3oGh5WtrAGSzrgczNWFFY22oKb7Fi5eeA==",
			"requires": {
				"@sinonjs/commons": "^1.8.3",
				"@sinonjs/fake-timers": "^9.1.2",
				"@sinonjs/samsam": "^6.1.1",
				"diff": "^5.0.0",
				"nise": "^5.1.1",
				"supports-color": "^7.2.0"
			}
		},
		"slash": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
			"integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
			"dev": true
		},
		"slide": {
			"version": "1.1.6",
			"resolved": "https://registry.npmjs.org/slide/-/slide-1.1.6.tgz",
			"integrity": "sha1-VusCfWW00tzmyy4tMsTUr8nh1wc=",
			"dev": true
		},
		"smart-buffer": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz",
			"integrity": "sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==",
			"dev": true
		},
		"socks": {
			"version": "2.6.2",
			"resolved": "https://registry.npmjs.org/socks/-/socks-2.6.2.tgz",
			"integrity": "sha512-zDZhHhZRY9PxRruRMR7kMhnf3I8hDs4S3f9RecfnGxvcBHQcKcIH/oUcEWffsfl1XxdYlA7nnlGbbTvPz9D8gA==",
			"dev": true,
			"requires": {
				"ip": "^1.1.5",
				"smart-buffer": "^4.2.0"
			}
		},
		"socks-proxy-agent": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-5.0.1.tgz",
			"integrity": "sha512-vZdmnjb9a2Tz6WEQVIurybSwElwPxMZaIc7PzqbJTrezcKNznv6giT7J7tZDZ1BojVaa1jvO/UiUdhDVB0ACoQ==",
			"dev": true,
			"requires": {
				"agent-base": "^6.0.2",
				"debug": "4",
				"socks": "^2.3.3"
			}
		},
		"sort-keys": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-4.2.0.tgz",
			"integrity": "sha512-aUYIEU/UviqPgc8mHR6IW1EGxkAXpeRETYcrzg8cLAvUPZcpAlleSXHV2mY7G12GphSH6Gzv+4MMVSSkbdteHg==",
			"dev": true,
			"requires": {
				"is-plain-obj": "^2.0.0"
			},
			"dependencies": {
				"is-plain-obj": {
					"version": "2.1.0",
					"resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-2.1.0.tgz",
					"integrity": "sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==",
					"dev": true
				}
			}
		},
		"source-map": {
			"version": "0.6.1",
			"resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
			"integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
			"dev": true
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
			"version": "3.0.11",
			"resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.11.tgz",
			"integrity": "sha512-Ctl2BrFiM0X3MANYgj3CkygxhRmr9mi6xhejbdO960nF6EDJApTYpn0BQnDKlnNBULKiCN1n3w9EBkHK8ZWg+g==",
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
		"split-on-first": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/split-on-first/-/split-on-first-1.1.0.tgz",
			"integrity": "sha512-43ZssAJaMusuKWL8sKUBQXHWOpq8d6CfN/u1p4gUzfJkM05C8rxTmYrkIPTXapZpORA6LkkzcUulJ8FqA7Uudw==",
			"dev": true
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
		"sshpk": {
			"version": "1.17.0",
			"resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.17.0.tgz",
			"integrity": "sha512-/9HIEs1ZXGhSPE8X6Ccm7Nam1z8KcoCqPdI7ecm1N33EzAetWahvQWVqLZtaZQ+IDKX4IyA2o0gBzqIMkAagHQ==",
			"dev": true,
			"requires": {
				"asn1": "~0.2.3",
				"assert-plus": "^1.0.0",
				"bcrypt-pbkdf": "^1.0.0",
				"dashdash": "^1.12.0",
				"ecc-jsbn": "~0.1.1",
				"getpass": "^0.1.1",
				"jsbn": "~0.1.0",
				"safer-buffer": "^2.0.2",
				"tweetnacl": "~0.14.0"
			}
		},
		"ssri": {
			"version": "8.0.1",
			"resolved": "https://registry.npmjs.org/ssri/-/ssri-8.0.1.tgz",
			"integrity": "sha512-97qShzy1AiyxvPNIkLWoGua7xoQzzPjQ0HAH4B0rWKo7SZ6USuPcrUiAFrws0UH8RrbWmgq3LMTObhPIHbbBeQ==",
			"dev": true,
			"requires": {
				"minipass": "^3.1.1"
			}
		},
		"strict-uri-encode": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-2.0.0.tgz",
			"integrity": "sha1-ucczDHBChi9rFC3CdLvMWGbONUY=",
			"dev": true
		},
		"string_decoder": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
			"integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
			"dev": true,
			"requires": {
				"safe-buffer": "~5.2.0"
			}
		},
		"string-width": {
			"version": "4.2.3",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
			"integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
			"dev": true,
			"requires": {
				"emoji-regex": "^8.0.0",
				"is-fullwidth-code-point": "^3.0.0",
				"strip-ansi": "^6.0.1"
			}
		},
		"string.prototype.trimend": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.5.tgz",
			"integrity": "sha512-I7RGvmjV4pJ7O3kdf+LXFpVfdNOxtCW/2C8f6jNiW4+PQchwxkCDzlk1/7p+Wl4bqFIZeF47qAHXLuHHWKAxog==",
			"dev": true,
			"requires": {
				"call-bind": "^1.0.2",
				"define-properties": "^1.1.4",
				"es-abstract": "^1.19.5"
			}
		},
		"string.prototype.trimstart": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.5.tgz",
			"integrity": "sha512-THx16TJCGlsN0o6dl2o6ncWUsdgnLRSA23rRE5pyGBw/mLr3Ej/R2LaqCtgP8VNMGZsvMWnf9ooZPyY2bHvUFg==",
			"dev": true,
			"requires": {
				"call-bind": "^1.0.2",
				"define-properties": "^1.1.4",
				"es-abstract": "^1.19.5"
			}
		},
		"strip-ansi": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
			"integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
			"dev": true,
			"requires": {
				"ansi-regex": "^5.0.1"
			}
		},
		"strip-bom": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
			"integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==",
			"dev": true
		},
		"strip-final-newline": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
			"integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
			"dev": true
		},
		"strip-indent": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-4.0.0.tgz",
			"integrity": "sha512-mnVSV2l+Zv6BLpSD/8V87CW/y9EmmbYzGCIavsnsI6/nwn26DwffM/yztm30Z/I2DY9wdS3vXVCMnHDgZaVNoA==",
			"dev": true,
			"requires": {
				"min-indent": "^1.0.1"
			}
		},
		"strip-json-comments": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
			"integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
			"dev": true
		},
		"strong-log-transformer": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/strong-log-transformer/-/strong-log-transformer-2.1.0.tgz",
			"integrity": "sha512-B3Hgul+z0L9a236FAUC9iZsL+nVHgoCJnqCbN588DjYxvGXaXaaFbfmQ/JhvKjZwsOukuR72XbHv71Qkug0HxA==",
			"dev": true,
			"requires": {
				"duplexer": "^0.1.1",
				"minimist": "^1.2.0",
				"through": "^2.3.4"
			}
		},
		"supports-color": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
			"integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
			"requires": {
				"has-flag": "^4.0.0"
			}
		},
		"supports-preserve-symlinks-flag": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
			"integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
			"dev": true
		},
		"tar": {
			"version": "6.1.11",
			"resolved": "https://registry.npmjs.org/tar/-/tar-6.1.11.tgz",
			"integrity": "sha512-an/KZQzQUkZCkuoAA64hM92X0Urb6VpRhAFllDzz44U2mcD5scmT3zBc4VgVpkugF580+DQn8eAFSyoQt0tznA==",
			"dev": true,
			"requires": {
				"chownr": "^2.0.0",
				"fs-minipass": "^2.0.0",
				"minipass": "^3.0.0",
				"minizlib": "^2.1.1",
				"mkdirp": "^1.0.3",
				"yallist": "^4.0.0"
			}
		},
		"temp-dir": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/temp-dir/-/temp-dir-1.0.0.tgz",
			"integrity": "sha1-CnwOom06Oa+n4OvqnB/AvE2qAR0=",
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
		"tmp": {
			"version": "0.2.1",
			"resolved": "https://registry.npmjs.org/tmp/-/tmp-0.2.1.tgz",
			"integrity": "sha512-76SUhtfqR2Ijn+xllcI5P1oyannHNHByD80W1q447gU3mp9G9PSpGdWmjUOHRDPiHYacIk66W7ubDTuPF3BEtQ==",
			"requires": {
				"rimraf": "^3.0.0"
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
		"tough-cookie": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
			"integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
			"dev": true,
			"requires": {
				"psl": "^1.1.28",
				"punycode": "^2.1.1"
			}
		},
		"tr46": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/tr46/-/tr46-2.1.0.tgz",
			"integrity": "sha512-15Ih7phfcdP5YxqiB+iDtLoaTz4Nd35+IiAv0kQ5FNKHzXgdWqPoTIqEDDJmXceQt4JZk6lVPT8lnDlPpGDppw==",
			"dev": true,
			"requires": {
				"punycode": "^2.1.1"
			}
		},
		"trim-newlines": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-4.0.2.tgz",
			"integrity": "sha512-GJtWyq9InR/2HRiLZgpIKv+ufIKrVrvjQWEj7PxAXNc5dwbNJkqhAUoAGgzRmULAnoOM5EIpveYd3J2VeSAIew==",
			"dev": true
		},
		"tslib": {
			"version": "1.14.1",
			"resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
			"integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
			"dev": true
		},
		"tunnel-agent": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
			"integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
			"dev": true,
			"requires": {
				"safe-buffer": "^5.0.1"
			}
		},
		"tweetnacl": {
			"version": "0.14.5",
			"resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
			"integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
			"dev": true
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
		"type-detect": {
			"version": "4.0.8",
			"resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz",
			"integrity": "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g=="
		},
		"type-fest": {
			"version": "0.20.2",
			"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
			"integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
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
		"uglify-js": {
			"version": "3.15.5",
			"resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.15.5.tgz",
			"integrity": "sha512-hNM5q5GbBRB5xB+PMqVRcgYe4c8jbyZ1pzZhS6jbq54/4F2gFK869ZheiE5A8/t+W5jtTNpWef/5Q9zk639FNQ==",
			"dev": true,
			"optional": true
		},
		"uid-number": {
			"version": "0.0.6",
			"resolved": "https://registry.npmjs.org/uid-number/-/uid-number-0.0.6.tgz",
			"integrity": "sha1-DqEOgDXo61uOREnwbaHHMGY7qoE=",
			"dev": true
		},
		"umask": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/umask/-/umask-1.1.0.tgz",
			"integrity": "sha1-8pzr8B31F5ErtY/5xOUP3o4zMg0=",
			"dev": true
		},
		"unbox-primitive": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.2.tgz",
			"integrity": "sha512-61pPlCD9h51VoreyJ0BReideM3MDKMKnh6+V9L08331ipq6Q8OFXZYiqP6n/tbHx4s5I9uRhcye6BrbkizkBDw==",
			"dev": true,
			"requires": {
				"call-bind": "^1.0.2",
				"has-bigints": "^1.0.2",
				"has-symbols": "^1.0.3",
				"which-boxed-primitive": "^1.0.2"
			}
		},
		"unique-filename": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-1.1.1.tgz",
			"integrity": "sha512-Vmp0jIp2ln35UTXuryvjzkjGdRyf9b2lTXuSYUiPmzRcl3FDtYqAwOnTJkAngD9SWhnoJzDbTKwaOrZ+STtxNQ==",
			"dev": true,
			"requires": {
				"unique-slug": "^2.0.0"
			}
		},
		"unique-slug": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-2.0.2.tgz",
			"integrity": "sha512-zoWr9ObaxALD3DOPfjPSqxt4fnZiWblxHIgeWqW8x7UqDzEtHEQLzji2cuJYQFCU6KmoJikOYAZlrTHHebjx2w==",
			"dev": true,
			"requires": {
				"imurmurhash": "^0.1.4"
			}
		},
		"universal-user-agent": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/universal-user-agent/-/universal-user-agent-6.0.0.tgz",
			"integrity": "sha512-isyNax3wXoKaulPDZWHQqbmIx1k2tb9fb3GGDBRxCscfYV2Ch7WxPArBsFEG8s/safwXTT7H4QGhaIkTp9447w==",
			"dev": true
		},
		"universalify": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.0.tgz",
			"integrity": "sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ==",
			"dev": true
		},
		"upath": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/upath/-/upath-2.0.1.tgz",
			"integrity": "sha512-1uEe95xksV1O0CYKXo8vQvN1JEbtJp7lb7C5U9HMsIp6IVwntkH/oNUzyVNQSd4S1sYk2FpSSW44FqMc8qee5w==",
			"dev": true
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
		"util-deprecate": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
			"integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
			"dev": true
		},
		"util-promisify": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/util-promisify/-/util-promisify-2.1.0.tgz",
			"integrity": "sha1-PCI2R2xNMsX/PEcAKt18E7moKlM=",
			"dev": true,
			"requires": {
				"object.getownpropertydescriptors": "^2.0.3"
			}
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
		"validate-npm-package-name": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/validate-npm-package-name/-/validate-npm-package-name-3.0.0.tgz",
			"integrity": "sha1-X6kS2B630MdK/BQN5zF/DKffQ34=",
			"dev": true,
			"requires": {
				"builtins": "^1.0.3"
			}
		},
		"verror": {
			"version": "1.10.0",
			"resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
			"integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
			"dev": true,
			"requires": {
				"assert-plus": "^1.0.0",
				"core-util-is": "1.0.2",
				"extsprintf": "^1.2.0"
			}
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
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-6.1.0.tgz",
			"integrity": "sha512-qBIvFLGiBpLjfwmYAaHPXsn+ho5xZnGvyGvsarywGNc8VyQJUMHJ8OBKGGrPER0okBeMDaan4mNBlgBROxuI8w==",
			"dev": true
		},
		"whatwg-url": {
			"version": "8.7.0",
			"resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-8.7.0.tgz",
			"integrity": "sha512-gAojqb/m9Q8a5IV96E3fHJM70AzCkgt4uXYX2O7EmuyOnLrViCQlsEBmF9UQIu3/aeAIp2U17rtbpZWNntQqdg==",
			"dev": true,
			"requires": {
				"lodash": "^4.7.0",
				"tr46": "^2.1.0",
				"webidl-conversions": "^6.1.0"
			}
		},
		"which": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
			"integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
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
		"wide-align": {
			"version": "1.1.5",
			"resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.5.tgz",
			"integrity": "sha512-eDMORYaPNZ4sQIuuYPDHdQvf4gyCF9rEEV/yPxGfwPkRodwEgiMUUXTx/dex+Me0wxx53S+NgUHaP7y3MGlDmg==",
			"dev": true,
			"requires": {
				"string-width": "^1.0.2 || 2 || 3 || 4"
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
		"workerpool": {
			"version": "6.2.0",
			"resolved": "https://registry.npmjs.org/workerpool/-/workerpool-6.2.0.tgz",
			"integrity": "sha512-Rsk5qQHJ9eowMH28Jwhe8HEbmdYDX4lwoMWshiCXugjtHqMD9ZbiqSDLxcsfdqsETPzVUtX5s1Z5kStiIM6l4A==",
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
			}
		},
		"wrappy": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
			"integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
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
		"write-json-file": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/write-json-file/-/write-json-file-4.3.0.tgz",
			"integrity": "sha512-PxiShnxf0IlnQuMYOPPhPkhExoCQuTUNPOa/2JWCYTmBquU9njyyDuwRKN26IZBlp4yn1nt+Agh2HOOBl+55HQ==",
			"dev": true,
			"requires": {
				"detect-indent": "^6.0.0",
				"graceful-fs": "^4.1.15",
				"is-plain-obj": "^2.0.0",
				"make-dir": "^3.0.0",
				"sort-keys": "^4.0.0",
				"write-file-atomic": "^3.0.0"
			},
			"dependencies": {
				"is-plain-obj": {
					"version": "2.1.0",
					"resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-2.1.0.tgz",
					"integrity": "sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==",
					"dev": true
				}
			}
		},
		"write-pkg": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/write-pkg/-/write-pkg-4.0.0.tgz",
			"integrity": "sha512-v2UQ+50TNf2rNHJ8NyWttfm/EJUBWMJcx6ZTYZr6Qp52uuegWw/lBkCtCbnYZEmPRNL61m+u67dAmGxo+HTULA==",
			"dev": true,
			"requires": {
				"sort-keys": "^2.0.0",
				"type-fest": "^0.4.1",
				"write-json-file": "^3.2.0"
			},
			"dependencies": {
				"detect-indent": {
					"version": "5.0.0",
					"resolved": "https://registry.npmjs.org/detect-indent/-/detect-indent-5.0.0.tgz",
					"integrity": "sha512-rlpvsxUtM0PQvy9iZe640/IWwWYyBsTApREbA1pHOpmOUIl9MkP/U4z7vTtg4Oaojvqhxt7sdufnT0EzGaR31g==",
					"dev": true
				},
				"make-dir": {
					"version": "2.1.0",
					"resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
					"integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
					"dev": true,
					"requires": {
						"pify": "^4.0.1",
						"semver": "^5.6.0"
					}
				},
				"pify": {
					"version": "4.0.1",
					"resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
					"integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
					"dev": true
				},
				"semver": {
					"version": "5.7.1",
					"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
					"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
					"dev": true
				},
				"sort-keys": {
					"version": "2.0.0",
					"resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-2.0.0.tgz",
					"integrity": "sha1-ZYU1WEhh7JfXMNbPQYIuH1ZoQSg=",
					"dev": true,
					"requires": {
						"is-plain-obj": "^1.0.0"
					}
				},
				"type-fest": {
					"version": "0.4.1",
					"resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.4.1.tgz",
					"integrity": "sha512-IwzA/LSfD2vC1/YDYMv/zHP4rDF1usCwllsDpbolT3D4fUepIO7f9K70jjmUewU/LmGUKJcwcVtDCpnKk4BPMw==",
					"dev": true
				},
				"write-file-atomic": {
					"version": "2.4.3",
					"resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.3.tgz",
					"integrity": "sha512-GaETH5wwsX+GcnzhPgKcKjJ6M2Cq3/iZp1WyY/X1CSqrW+jVNM9Y7D8EC2sM4ZG/V8wZlSniJnCKWPmBYAucRQ==",
					"dev": true,
					"requires": {
						"graceful-fs": "^4.1.11",
						"imurmurhash": "^0.1.4",
						"signal-exit": "^3.0.2"
					}
				},
				"write-json-file": {
					"version": "3.2.0",
					"resolved": "https://registry.npmjs.org/write-json-file/-/write-json-file-3.2.0.tgz",
					"integrity": "sha512-3xZqT7Byc2uORAatYiP3DHUUAVEkNOswEWNs9H5KXiicRTvzYzYqKjYc4G7p+8pltvAw641lVByKVtMpf+4sYQ==",
					"dev": true,
					"requires": {
						"detect-indent": "^5.0.0",
						"graceful-fs": "^4.1.15",
						"make-dir": "^2.1.0",
						"pify": "^4.0.1",
						"sort-keys": "^2.0.0",
						"write-file-atomic": "^2.4.2"
					}
				}
			}
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
			"dev": true
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
			"version": "20.2.4",
			"resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.4.tgz",
			"integrity": "sha512-WOkpgNhPTlE73h4VFAFsOnomJVaovO8VqLDzy5saChRBFQFBoMYirowyW+Q9HB4HFF4Z7VZTiG3iSzJJA29yRA==",
			"dev": true
		},
		"yargs-unparser": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/yargs-unparser/-/yargs-unparser-2.0.0.tgz",
			"integrity": "sha512-7pRTIA9Qc1caZ0bZ6RYRGbHJthJWuakf+WmHK0rVeLkNrrGhfoabBNdue6kdINI6r4if7ocq9aD/n7xwKOdzOA==",
			"dev": true,
			"requires": {
				"camelcase": "^6.0.0",
				"decamelize": "^4.0.0",
				"flat": "^5.0.2",
				"is-plain-obj": "^2.1.0"
			},
			"dependencies": {
				"decamelize": {
					"version": "4.0.0",
					"resolved": "https://registry.npmjs.org/decamelize/-/decamelize-4.0.0.tgz",
					"integrity": "sha512-9iE1PgSik9HeIIw2JO94IidnE3eBoQrFJ3w7sFuzSX4DpmZ3v5sZpUiV5Swcf6mQEF+Y0ru8Neo+p+nyh2J+hQ==",
					"dev": true
				},
				"is-plain-obj": {
					"version": "2.1.0",
					"resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-2.1.0.tgz",
					"integrity": "sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==",
					"dev": true
				}
			}
		},
		"yocto-queue": {
			"version": "0.1.0",
			"resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
			"integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
			"dev": true
		}
	}
}