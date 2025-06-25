function createPrivateKey (keyBitsize, options, callback) {
  if (!callback && !options && typeof keyBitsize === 'function') {
    callback = keyBitsize
    keyBitsize = undefined
    options = {}
  } else if (!callback && keyBitsize && typeof options === 'function') {
    callback = options
    options = {}
  }

  keyBitsize = Number(keyBitsize) || 2048

  var params = ['genrsa']
  var delTempPWFiles = []

  if (options && options.cipher && (Number(helper.ciphers.indexOf(options.cipher)) !== -1) && options.password) {
    helper.createPasswordFile({ 'cipher': options.cipher, 'password': options.password, 'passType': 'out' }, params, delTempPWFiles[delTempPWFiles.length])
  }

  params.push(keyBitsize)

  openssl.exec(params, 'RSA PRIVATE KEY', function (sslErr, key) {
    function done (err) {
      if (err) {
        return callback(err)
      }
      callback(null, {
        key: key
      })
    }
    helper.deleteTempFiles(delTempPWFiles, function (fsErr) {
      done(sslErr || fsErr)
    })
  })
}

function createCSR (options, callback) {
  if (!callback && typeof options === 'function') {
    callback = options
    options = undefined
  }

  options = options || {}

  // http://stackoverflow.com/questions/14089872/why-does-node-js-accept-ip-addresses-in-certificates-only-for-san-not-for-cn
  if (options.commonName && (net.isIPv4(options.commonName) || net.isIPv6(options.commonName))) {
    if (!options.altNames) {
      options.altNames = [options.commonName]
    } else if (options.altNames.indexOf(options.commonName) === -1) {
      options.altNames = options.altNames.concat([options.commonName])
    }
  }

  if (!options.clientKey) {
    createPrivateKey(options.keyBitsize || 2048, function (error, keyData) {
      if (error) {
        return callback(error)
      }
      options.clientKey = keyData.key
      createCSR(options, callback)
    })
    return
  }

  var params = ['req',
    '-new',
    '-' + (options.hash || 'sha256')
  ]

  if (options.csrConfigFile) {
    params.push('-config')
    params.push(options.csrConfigFile)
  } else {
    params.push('-subj')
    params.push(generateCSRSubject(options))
  }

  params.push('-key')
  params.push('--TMPFILE--')

  var tmpfiles = [options.clientKey]
  var config = null

  if (options.altNames && Array.isArray(options.altNames) && options.altNames.length) {
    params.push('-extensions')
    params.push('v3_req')
    params.push('-config')
    params.push('--TMPFILE--')
    var altNamesRep = []
    for (var i = 0; i < options.altNames.length; i++) {
      altNamesRep.push((net.isIP(options.altNames[i]) ? 'IP' : 'DNS') + '.' + (i + 1) + ' = ' + options.altNames[i])
    }

    tmpfiles.push(config = [
      '[req]',
      'req_extensions = v3_req',
      'distinguished_name = req_distinguished_name',
      '[v3_req]',
      'subjectAltName = @alt_names',
      '[alt_names]',
      altNamesRep.join('\n'),
      '[req_distinguished_name]',
      'commonName = Common Name',
      'commonName_max = 64'
    ].join('\n'))
  } else if (options.config) {
    config = options.config
  }

  var delTempPWFiles = []
  if (options.clientKeyPassword) {
    helper.createPasswordFile({ 'cipher': '', 'password': options.clientKeyPassword, 'passType': 'in' }, params, delTempPWFiles[delTempPWFiles.length])
  }

  openssl.exec(params, 'CERTIFICATE REQUEST', tmpfiles, function (sslErr, data) {
    function done (err) {
      if (err) {
        return callback(err)
      }
      callback(null, {
        csr: data,
        config: config,
        clientKey: options.clientKey
      })
    }
    helper.deleteTempFiles(delTempPWFiles, function (fsErr) {
      done(sslErr || fsErr)
    })
  })
}

function createCertificate (options, callback) {
  if (!callback && typeof options === 'function') {
    callback = options
    options = undefined
  }

  options = options || {}

  if (!options.csr) {
    createCSR(options, function (error, keyData) {
      if (error) {
        return callback(error)
      }
      options.csr = keyData.csr
      options.config = keyData.config
      options.clientKey = keyData.clientKey
      createCertificate(options, callback)
    })
    return
  }

  if (!options.serviceKey) {
    if (options.selfSigned) {
      options.serviceKey = options.clientKey
    } else {
      createPrivateKey(options.keyBitsize || 2048, function (error, keyData) {
        if (error) {
          return callback(error)
        }
        options.serviceKey = keyData.key
        createCertificate(options, callback)
      })
      return
    }
  }

  var params = ['x509',
    '-req',
    '-' + (options.hash || 'sha256'),
    '-days',
    Number(options.days) || '365',
    '-in',
    '--TMPFILE--'
  ]
  var tmpfiles = [options.csr]
  var delTempPWFiles = []

  if (options.serviceCertificate) {
    params.push('-CA')
    params.push('--TMPFILE--')
    params.push('-CAkey')
    params.push('--TMPFILE--')
    if (options.serial) {
      params.push('-set_serial')
      if (helper.isNumber(options.serial)) {
        // set the serial to the max lenth of 20 octets ()
        // A certificate serial number is not decimal conforming. That is the
        // bytes in a serial number do not necessarily map to a printable ASCII
        // character.
        // eg: 0x00 is a valid serial number and can not be represented in a
        // human readable format (atleast one that can be directly mapped to
        // the ACSII table).
        params.push('0x' + ('0000000000000000000000000000000000000000' + options.serial.toString(16)).slice(-40))
      } else {
        if (helper.isHex(options.serial)) {
          if (options.serial.startsWith('0x')) {
            options.serial = options.serial.substring(2, options.serial.length)
          }
          params.push('0x' + ('0000000000000000000000000000000000000000' + options.serial).slice(-40))
        } else {
          params.push('0x' + ('0000000000000000000000000000000000000000' + helper.toHex(options.serial)).slice(-40))
        }
      }
    } else {
      params.push('-CAcreateserial')
      if (options.serialFile) {
        params.push('-CAserial')
        params.push(options.serialFile + '.srl')
      }
    }
    if (options.serviceKeyPassword) {
      helper.createPasswordFile({ 'cipher': '', 'password': options.serviceKeyPassword, 'passType': 'in' }, params, delTempPWFiles[delTempPWFiles.length])
    }
    tmpfiles.push(options.serviceCertificate)
    tmpfiles.push(options.serviceKey)
  } else {
    params.push('-signkey')
    params.push('--TMPFILE--')
    if (options.serviceKeyPassword) {
      helper.createPasswordFile({ 'cipher': '', 'password': options.serviceKeyPassword, 'passType': 'in' }, params, delTempPWFiles[delTempPWFiles.length])
    }
    tmpfiles.push(options.serviceKey)
  }

  if (options.config) {
    params.push('-extensions')
    params.push('v3_req')
    params.push('-extfile')
    params.push('--TMPFILE--')
    tmpfiles.push(options.config)
  } else if (options.extFile) {
    params.push('-extfile')
    params.push(options.extFile)
  }

  if (options.clientKeyPassword) {
    helper.createPasswordFile({ 'cipher': '', 'password': options.clientKeyPassword, 'passType': 'in' }, params, delTempPWFiles[delTempPWFiles.length])
  }

  openssl.exec(params, 'CERTIFICATE', tmpfiles, function (sslErr, data) {
    function done (err) {
      if (err) {
        return callback(err)
      }
      var response = {
        csr: options.csr,
        clientKey: options.clientKey,
        certificate: data,
        serviceKey: options.serviceKey
      }
      return callback(null, response)
    }

    helper.deleteTempFiles(delTempPWFiles, function (fsErr) {
      done(sslErr || fsErr)
    })
  })
}

function getModulus (certificate, password, hash, callback) {
  if (!callback && !hash && typeof password === 'function') {
    callback = password
    password = undefined
    hash = false
  } else if (!callback && hash && typeof hash === 'function') {
    callback = hash
    hash = false
    // password will be falsy if not provided
  }
  // adding hash function to params, is not supported by openssl.
  // process piping would be the right way (... | openssl md5)
  // No idea how this can be achieved in easy with the current build in methods
  // of pem.
  if (hash && hash !== 'md5') {
    hash = false
  }

  certificate = (Buffer.isBuffer(certificate) && certificate.toString()) || certificate

  var type = ''
  if (certificate.match(/BEGIN(\sNEW)? CERTIFICATE REQUEST/)) {
    type = 'req'
  } else if (certificate.match(/BEGIN RSA PRIVATE KEY/) || certificate.match(/BEGIN PRIVATE KEY/)) {
    type = 'rsa'
  } else {
    type = 'x509'
  }
  var params = [
    type,
    '-noout',
    '-modulus',
    '-in',
    '--TMPFILE--'
  ]
  var delTempPWFiles = []
  if (password) {
    helper.createPasswordFile({ 'cipher': '', 'password': password, 'passType': 'in' }, params, delTempPWFiles[delTempPWFiles.length])
  }

  openssl.spawnWrapper(params, certificate, function (sslErr, code, stdout, stderr) {
    function done (err) {
      if (err) {
        return callback(err)
      }
      var match = stdout.match(/Modulus=([0-9a-fA-F]+)$/m)
      if (match) {
        return callback(null, {
          modulus: hash ? require(hash)(match[1]) : match[1]
        })
      } else {
        return callback(new Error('No modulus'))
      }
    }
    helper.deleteTempFiles(delTempPWFiles, function (fsErr) {
      done(sslErr || fsErr || stderr)
    })
  })
}

function createPkcs12 (key, certificate, password, options, callback) {
  if (!callback && typeof options === 'function') {
    callback = options
    options = {}
  }

  var params = ['pkcs12', '-export']
  var delTempPWFiles = []

  if (options.cipher && options.clientKeyPassword) {
    // NOTICE: The password field is needed! self if it is empty.
    // create password file for the import "-passin"
    helper.createPasswordFile({ 'cipher': options.cipher, 'password': options.clientKeyPassword, 'passType': 'in' }, params, delTempPWFiles[delTempPWFiles.length])
  }
  // NOTICE: The password field is needed! self if it is empty.
  // create password file for the password "-password"
  helper.createPasswordFile({ 'cipher': '', 'password': password, 'passType': 'word' }, params, delTempPWFiles[delTempPWFiles.length])

  params.push('-in')
  params.push('--TMPFILE--')
  params.push('-inkey')
  params.push('--TMPFILE--')

  var tmpfiles = [certificate, key]

  if (options.certFiles) {
    tmpfiles.push(options.certFiles.join(''))

    params.push('-certfile')
    params.push('--TMPFILE--')
  }

  openssl.execBinary(params, tmpfiles, function (sslErr, pkcs12) {
    function done (err) {
      if (err) {
        return callback(err)
      }
      return callback(null, {
        pkcs12: pkcs12
      })
    }
    helper.deleteTempFiles(delTempPWFiles, function (fsErr) {
      done(sslErr || fsErr)
    })
  })
}

function readPkcs12 (bufferOrPath, options, callback) {
  if (!callback && typeof options === 'function') {
    callback = options
    options = {}
  }

  options.p12Password = options.p12Password || ''

  var tmpfiles = []
  var delTempPWFiles = []
  var args = ['pkcs12', '-in', bufferOrPath]

  helper.createPasswordFile({ 'cipher': '', 'password': options.p12Password, 'passType': 'in' }, args, delTempPWFiles[delTempPWFiles.length])

  if (Buffer.isBuffer(bufferOrPath)) {
    tmpfiles = [bufferOrPath]
    args[2] = '--TMPFILE--'
  }

  if (options.clientKeyPassword) {
    helper.createPasswordFile({ 'cipher': '', 'password': options.clientKeyPassword, 'passType': 'out' }, args, delTempPWFiles[delTempPWFiles.length])
  } else {
    args.push('-nodes')
  }

  openssl.execBinary(args, tmpfiles, function (sslErr, stdout) {
    function done (err) {
      var keybundle = {}

      if (err && err.message.indexOf('No such file or directory') !== -1) {
        err.code = 'ENOENT'
      }

      if (!err) {
        var certs = readFromString(stdout, CERT_START, CERT_END)
        keybundle.cert = certs.shift()
        keybundle.ca = certs
        keybundle.key = readFromString(stdout, KEY_START, KEY_END).pop()

        if (keybundle.key) {
        // convert to RSA key
          return openssl.exec(['rsa', '-in', '--TMPFILE--'], 'RSA PRIVATE KEY', [keybundle.key], function (err, key) {
            keybundle.key = key

            return callback(err, keybundle)
          })
        }

        if (options.clientKeyPassword) {
          keybundle.key = readFromString(stdout, ENCRYPTED_KEY_START, ENCRYPTED_KEY_END).pop()
        } else {
          keybundle.key = readFromString(stdout, RSA_KEY_START, RSA_KEY_END).pop()
        }
      }

      return callback(err, keybundle)
    }
    helper.deleteTempFiles(delTempPWFiles, function (fsErr) {
      done(sslErr || fsErr)
    })
  })
}

function checkCertificate (certificate, passphrase, callback) {
  var params
  var delTempPWFiles = []

  if (!callback && typeof passphrase === 'function') {
    callback = passphrase
    passphrase = undefined
  }
  certificate = (certificate || '').toString()

  if (certificate.match(/BEGIN(\sNEW)? CERTIFICATE REQUEST/)) {
    params = ['req', '-text', '-noout', '-verify', '-in', '--TMPFILE--']
  } else if (certificate.match(/BEGIN RSA PRIVATE KEY/) || certificate.match(/BEGIN PRIVATE KEY/)) {
    params = ['rsa', '-noout', '-check', '-in', '--TMPFILE--']
  } else {
    params = ['x509', '-text', '-noout', '-in', '--TMPFILE--']
  }
  if (passphrase) {
    helper.createPasswordFile({ 'cipher': '', 'password': passphrase, 'passType': 'in' }, params, delTempPWFiles[delTempPWFiles.length])
  }

  openssl.spawnWrapper(params, certificate, function (sslErr, code, stdout, stderr) {
    function done (err) {
      if (err && err.toString().trim() !== 'verify OK') {
        return callback(err)
      }
      var result
      switch (params[0]) {
        case 'rsa':
          result = /^Rsa key ok$/i.test(stdout.trim())
          break
        default:
          result = /Signature Algorithm/im.test(stdout)
          break
      }

      callback(null, result)
    }
    helper.deleteTempFiles(delTempPWFiles, function (fsErr) {
      done(sslErr || fsErr || stderr)
    })
  })
}

function checkPkcs12 (bufferOrPath, passphrase, callback) {
  if (!callback && typeof passphrase === 'function') {
    callback = passphrase
    passphrase = ''
  }

  var tmpfiles = []
  var delTempPWFiles = []
  var args = ['pkcs12', '-info', '-in', bufferOrPath, '-noout', '-maciter', '-nodes']

  helper.createPasswordFile({ 'cipher': '', 'password': passphrase, 'passType': 'in' }, args, delTempPWFiles[delTempPWFiles.length])

  if (Buffer.isBuffer(bufferOrPath)) {
    tmpfiles = [bufferOrPath]
    args[3] = '--TMPFILE--'
  }

  openssl.spawnWrapper(args, tmpfiles, function (sslErr, code, stdout, stderr) {
    function done (err) {
      if (err) {
        return callback(err)
      }
      callback(null, (/MAC verified OK/im.test(stderr) || (!(/MAC verified OK/im.test(stderr)) && !(/Mac verify error/im.test(stderr)))))
    }
    helper.deleteTempFiles(delTempPWFiles, function (fsErr) {
      done(sslErr || fsErr)
    })
  })
}

