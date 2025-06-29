{
    "baseUrl": "http://localhost:3000/",
    "testFiles": [
        "test/restTableOps.js",
        "test/restViews.js",
        "test/restRoles.js",
        "test/restMisc.js",
        "test/xcdb-restTableOps.js",
        "test/xcdb-restViews.js",
        "test/xcdb-restRoles.js",
        "test/xcdb-restMisc.js",
        "test/gqlTableOps.js",
        "test/gqlViews.js",
        "test/gqlRoles.js",
        "test/gqlMisc.js",
        "test/xcdb-gqlTableOps.js",
        "test/xcdb-gqlViews.js",
        "test/xcdb-gqlRoles.js",
        "test/xcdb-gqlMisc.js",
        "test/pg-restTableOps.js",
        "test/pg-restViews.js",
        "test/pg-restRoles.js",
        "test/pg-restMisc.js",
        "common/9a_QuickTest.js"
    ],
    "defaultCommandTimeout": 13000,
    "pageLoadTimeout": 600000,
    "viewportWidth": 1980,
    "viewportHeight": 1000,
    "video": false,
    "retries": 0,
    "screenshotOnRunFailure": false,
    "numTestsKeptInMemory": 0,
    "experimentalInteractiveRunEvents": true,
    "env": {
        "testMode": [
            { "apiType": "rest", "dbType": "xcdb" },
            { "apiType": "graphql", "dbType": "xcdb" },
            { "apiType": "rest", "dbType": "mysql" },
            { "apiType": "graphql", "dbType": "mysql" },
            { "apiType": "rest", "dbType": "postgres" }
        ],
        "db": {
            "host": "127.0.0.1",
            "user": "root",
            "password": "password"
        },
        "screenshot": false,
        "airtable": {
            "apiKey": "keyn1MR87qgyUsYg4",
            "sharedBase": "https://airtable.com/shr4z0qmh6dg5s3eB"
        }
    },
    "fixturesFolder": "scripts/cypress/fixtures",
    "integrationFolder": "scripts/cypress/integration",
    "pluginsFile": "scripts/cypress/plugins/index.js",
    "screenshotsFolder": "scripts/cypress/screenshots",
    "videosFolder": "scripts/cypress/videos",
    "downloadsFolder": "scripts/cypress/downloads",
    "supportFile": "scripts/cypress/support/index.js",
    "chromeWebSecurity": false
}