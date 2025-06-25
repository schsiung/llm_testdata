(env, key) => {
      env[key] = process.env[key]
      return env
    }

(env) => {
  const PREFIX = /^AEGIR_/i
  const raw = Object.keys(process.env)
    .filter((key) => PREFIX.test(key))
    .reduce((env, key) => {
      env[key] = process.env[key]
      return env
    }, {
      NODE_ENV: process.env.NODE_ENV || env || 'development'
    })

  const stringifed = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key])
      return env
    }, {})
  }

  return {
    raw: raw,
    stringified: stringifed
  }
}

