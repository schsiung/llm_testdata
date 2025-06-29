const fs = require('fs')
const express = require('express')
const ms = require('ms')
// @ts-ignore
const Grant = require('grant').express()
const merge = require('lodash.merge')
const cookieParser = require('cookie-parser')
const interceptor = require('express-interceptor')
const { isURL } = require('validator')
const uuid = require('uuid')

const grantConfig = require('./config/grant')()
const providerManager = require('./server/provider')
const controllers = require('./server/controllers')
const s3 = require('./server/controllers/s3')
const getS3Client = require('./server/s3-client')
const url = require('./server/controllers/url')
const emitter = require('./server/emitter')
const redis = require('./server/redis')
const { getURLBuilder } = require('./server/helpers/utils')
const jobs = require('./server/jobs')
const logger = require('./server/logger')
const middlewares = require('./server/middlewares')
const { ProviderApiError, ProviderAuthError } = require('./server/provider/error')
const { getCredentialsOverrideMiddleware } = require('./server/provider/credentials')
// @ts-ignore
const { version } = require('../package.json')

const defaultOptions = {
  server: {
    protocol: 'http',
    path: '',
  },
  providerOptions: {
    s3: {
      acl: 'public-read',
      endpoint: 'https://{service}.{region}.amazonaws.com',
      conditions: [],
      useAccelerateEndpoint: false,
      getKey: (req, filename) => filename,
      expires: ms('5 minutes') / 1000,
    },
  },
  allowLocalUrls: false,
  logClientVersion: true,
  periodicPingUrls: [],
  streamingUpload: false,
}

// make the errors available publicly for custom providers
module.exports.errors = { ProviderApiError, ProviderAuthError }
module.exports.socket = require('./server/socket')

/**
 * Entry point into initializing the Companion app.
 *
 * @param {object} options
 * @returns {import('express').Express}
 */
module.exports.app = (options = {}) => {
  validateConfig(options)

  options = merge({}, defaultOptions, options)
  const providers = providerManager.getDefaultProviders()
  const searchProviders = providerManager.getSearchProviders()
  providerManager.addProviderOptions(options, grantConfig)

  const { customProviders } = options
  if (customProviders) {
    providerManager.addCustomProviders(customProviders, providers, grantConfig)
  }

  // mask provider secrets from log messages
  maskLogger(options)

  // create singleton redis client
  if (options.redisUrl) {
    redis.client(merge({ url: options.redisUrl }, options.redisOptions || {}))
  }
  emitter(options.multipleInstances && options.redisUrl, options.redisPubSubScope)

  const app = express()

  if (options.metrics) {
    app.use(middlewares.metrics({ path: options.server.path }))

    // backward compatibility
    // TODO remove in next major semver
    if (options.server.path) {
      const buildUrl = getURLBuilder(options)
      app.get('/metrics', (req, res) => {
        process.emitWarning('/metrics is deprecated when specifying a path to companion')
        const metricsUrl = buildUrl('/metrics', true)
        res.redirect(metricsUrl)
      })
    }
  }

  app.use(cookieParser()) // server tokens are added to cookies

  app.use(interceptGrantErrorResponse)
  // override provider credentials at request time
  app.use('/connect/:authProvider/:override?', getCredentialsOverrideMiddleware(providers, options))
  app.use(Grant(grantConfig))

  app.use((req, res, next) => {
    if (options.sendSelfEndpoint) {
      const { protocol } = options.server
      res.header('i-am', `${protocol}://${options.sendSelfEndpoint}`)
    }
    next()
  })

  app.use(middlewares.cors(options))

  // add uppy options to the request object so it can be accessed by subsequent handlers.
  app.use('*', getOptionsMiddleware(options))
  app.use('/s3', s3(options.providerOptions.s3))
  app.use('/url', url())

  app.post('/:providerName/preauth', middlewares.hasSessionAndProvider, controllers.preauth)
  app.get('/:providerName/connect', middlewares.hasSessionAndProvider, controllers.connect)
  app.get('/:providerName/redirect', middlewares.hasSessionAndProvider, controllers.redirect)
  app.get('/:providerName/callback', middlewares.hasSessionAndProvider, controllers.callback)
  app.post('/:providerName/deauthorization/callback', middlewares.hasSessionAndProvider, controllers.deauthorizationCallback)
  app.get('/:providerName/logout', middlewares.hasSessionAndProvider, middlewares.gentleVerifyToken, controllers.logout)
  app.get('/:providerName/send-token', middlewares.hasSessionAndProvider, middlewares.verifyToken, controllers.sendToken)
  app.get('/:providerName/list/:id?', middlewares.hasSessionAndProvider, middlewares.verifyToken, controllers.list)
  app.post('/:providerName/get/:id', middlewares.hasSessionAndProvider, middlewares.verifyToken, controllers.get)
  app.get('/:providerName/thumbnail/:id', middlewares.hasSessionAndProvider, middlewares.cookieAuthToken, middlewares.verifyToken, controllers.thumbnail)
  // @ts-ignore Type instantiation is excessively deep and possibly infinite.
  app.get('/search/:searchProviderName/list', middlewares.hasSearchQuery, middlewares.loadSearchProviderToken, controllers.list)
  app.post('/search/:searchProviderName/get/:id', middlewares.loadSearchProviderToken, controllers.get)

  app.param('providerName', providerManager.getProviderMiddleware(providers, true))
  app.param('searchProviderName', providerManager.getProviderMiddleware(searchProviders))

  if (app.get('env') !== 'test') {
    jobs.startCleanUpJob(options.filePath)
  }

  const processId = uuid.v4()

  jobs.startPeriodicPingJob({
    urls: options.periodicPingUrls,
    interval: options.periodicPingInterval,
    count: options.periodicPingCount,
    staticPayload: options.periodicPingStaticPayload,
    version,
    processId,
  })

  return app
}

// intercepts grantJS' default response error when something goes
// wrong during oauth process.
const interceptGrantErrorResponse = interceptor((req, res) => {
  return {
    isInterceptable: () => {
      // match grant.js' callback url
      return /^\/connect\/\w+\/callback/.test(req.path)
    },
    intercept: (body, send) => {
      const unwantedBody = 'error=Grant%3A%20missing%20session%20or%20misconfigured%20provider'
      if (body === unwantedBody) {
        logger.error(`grant.js responded with error: ${body}`, 'grant.oauth.error', req.id)
        res.set('Content-Type', 'text/plain')
        const reqHint = req.id ? `Request ID: ${req.id}` : ''
        send([
          'Companion was unable to complete the OAuth process :(',
          'Error: User session is missing or the Provider was misconfigured',
          reqHint,
        ].join('\n'))
      } else {
        send(body)
      }
    },
  }
})

/**
 *
 * @param {object} options
 */
const getOptionsMiddleware = (options) => {
  /**
   * @param {object} req
   * @param {object} res
   * @param {Function} next
   */
  const middleware = (req, res, next) => {
    const versionFromQuery = req.query.uppyVersions ? decodeURIComponent(req.query.uppyVersions) : null
    req.companion = {
      options,
      s3Client: getS3Client(options),
      authToken: req.header('uppy-auth-token') || req.query.uppyAuthToken,
      clientVersion: req.header('uppy-versions') || versionFromQuery || '1.0.0',
      buildURL: getURLBuilder(options),
    }

    if (options.logClientVersion) {
      logger.info(`uppy client version ${req.companion.clientVersion}`, 'companion.client.version')
    }
    next()
  }

  return middleware
}

/**
 * Informs the logger about all provider secrets that should be masked
 * if they are found in a log message
 *
 * @param {object} companionOptions
 */
const maskLogger = (companionOptions) => {
  const secrets = []
  const { providerOptions, customProviders } = companionOptions
  Object.keys(providerOptions).forEach((provider) => {
    if (providerOptions[provider].secret) {
      secrets.push(providerOptions[provider].secret)
    }
  })

  if (customProviders) {
    Object.keys(customProviders).forEach((provider) => {
      if (customProviders[provider].config && customProviders[provider].config.secret) {
        secrets.push(customProviders[provider].config.secret)
      }
    })
  }

  logger.setMaskables(secrets)
}

/**
 * validates that the mandatory companion options are set.
 * If it is invalid, it will console an error of unset options and exits the process.
 * If it is valid, nothing happens.
 *
 * @param {object} companionOptions
 */
const validateConfig = (companionOptions) => {
  const mandatoryOptions = ['secret', 'filePath', 'server.host']
  /** @type {string[]} */
  const unspecified = []

  mandatoryOptions.forEach((i) => {
    const value = i.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), companionOptions)

    if (!value) unspecified.push(`"${i}"`)
  })

  // vaidate that all required config is specified
  if (unspecified.length) {
    const messagePrefix = 'Please specify the following options to use companion:'
    throw new Error(`${messagePrefix}\n${unspecified.join(',\n')}`)
  }

  // validate that specified filePath is writeable/readable.
  try {
    // @ts-ignore
    fs.accessSync(`${companionOptions.filePath}`, fs.R_OK | fs.W_OK) // eslint-disable-line no-bitwise
  } catch (err) {
    throw new Error(
      `No access to "${companionOptions.filePath}". Please ensure the directory exists and with read/write permissions.`,
    )
  }

  const { providerOptions, periodicPingUrls } = companionOptions

  if (providerOptions) {
    const deprecatedOptions = { microsoft: 'onedrive', google: 'drive' }
    Object.keys(deprecatedOptions).forEach((deprected) => {
      if (providerOptions[deprected]) {
        throw new Error(`The Provider option "${deprected}" is no longer supported. Please use the option "${deprecatedOptions[deprected]}" instead.`)
      }
    })
  }

  if (companionOptions.uploadUrls == null || companionOptions.uploadUrls.length === 0) {
    logger.warn('Running without uploadUrls specified is a security risk if running in production', 'startup.uploadUrls')
  }

  if (periodicPingUrls != null && (
    !Array.isArray(periodicPingUrls)
    || periodicPingUrls.some((url2) => !isURL(url2, { protocols: ['http', 'https'], require_protocol: true, require_tld: false }))
  )) {
    throw new TypeError('Invalid periodicPingUrls')
  }
}