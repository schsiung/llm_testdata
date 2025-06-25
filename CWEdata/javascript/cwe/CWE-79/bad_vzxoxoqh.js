{
  "name": "titra",
  "version": "0.77.0",
  "private": true,
  "scripts": {
    "start": "meteor run"
  },
  "dependencies": {
    "@babel/runtime": "^7.18.3",
    "@fortawesome/fontawesome-free": "^6.1.1",
    "@fullcalendar/core": "^5.11.0",
    "@fullcalendar/daygrid": "^5.11.0",
    "@fullcalendar/interaction": "^5.11.0",
    "@neovici/nullxlsx": "^3.0.4",
    "@popperjs/core": "^2.11.5",
    "@simonwep/pickr": "^1.8.2",
    "adm-zip": "^0.5.9",
    "bcrypt": "^5.0.1",
    "bootstrap": "^5.1.3",
    "content-type": "^1.0.4",
    "date-holidays": "^3.16.0",
    "dayjs": "^1.11.3",
    "dayjs-precise-range": "^1.0.1",
    "docker-names": "^1.2.1",
    "file-saver": "^2.0.5",
    "frappe-charts": "1.6.2",
    "frappe-datatable": "^1.16.3",
    "frappe-gantt": "^0.6.1",
    "hotkeys-js": "^3.9.4",
    "is-dark": "^1.0.4",
    "jquery": "3.6.0",
    "jquery-serializejson": "^3.2.1",
    "ldapjs": "^2.3.2",
    "math-expression-evaluator": "^1.3.14",
    "meteor-node-stubs": "^1.2.3",
    "namedavatar": "^1.2.0",
    "node-emoji": "^1.11.0",
    "quill": "^1.3.7",
    "quill-delta-to-html": "^0.12.1",
    "randomcolor": "^0.6.2",
    "raw-body": "^2.5.1",
    "sortablejs": "^1.15.0",
    "tiny-date-picker": "^3.2.8",
    "vm2": "^3.9.9"
  },
  "devDependencies": {
    "@babel/core": "^7.18.2",
    "@babel/eslint-parser": "^7.18.2",
    "eslint": "^8.17.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-import-resolver-meteor": "^0.4.0",
    "eslint-plugin-i18next": "^5.2.1",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-meteor": "^7.3.0"
  },
  "apidoc": {
    "name": "titra API",
    "version": "0.52.0",
    "description": "<div class='h5'>This is the official titra API documentation. For more information about the open source timetracking application developed with lots of ❤️ and ☕️ by <a href='https://kromit.at'>kromit</a> checkout <a href='https://titra.io'>titra.io</a>.</div>",
    "sampleUrl": "https://app.titra.io"
  },
  "meteor": {
    "mainModule": {
      "client": "client/main.js",
      "server": "server/main.js"
    }
  }
}