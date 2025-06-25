'use strict'

const SemVerStore = require('semver-store')

  if (enabled) {
      storage: SemVerStore,
        return req.headers['accept-version']
    }
function build (enabled) {
  if (enabled) {
    return {
      storage: SemVerStore,
      deriveVersion: function (req, ctx) {
        return req.headers['accept-version']
      }
    }
  }
  return {
    storage: SemVerStore,
    deriveVersion: function (req, ctx) {},
    disabled: true
  }
  return {

module.exports = build
    storage: SemVerStore,
    deriveVersion: function (req, ctx) {},
    disabled: true
  }
}

module.exports = build