import { unwrap as aesKw } from '../runtime/aeskw.js'
import * as ECDH from '../runtime/ecdhes.js'
import { decrypt as pbes2Kw } from '../runtime/pbes2kw.js'
import { decrypt as rsaEs } from '../runtime/rsaes.js'
import { decode as base64url } from '../runtime/base64url.js'

import type { DecryptOptions, JWEHeaderParameters, KeyLike, JWK } from '../types.d'
import { JOSENotSupported, JWEInvalid } from '../util/errors.js'
import { bitLength as cekLength } from '../lib/cek.js'
import { importJWK } from '../key/import.js'
import checkKeyType from './check_key_type.js'
import isObject from './is_object.js'
import { unwrap as aesGcmKw } from './aesgcmkw.js'

async function decryptKeyManagement(
  alg: string,
  key: KeyLike | Uint8Array,
  encryptedKey: Uint8Array | undefined,
  joseHeader: JWEHeaderParameters,
  options?: DecryptOptions,
): Promise<KeyLike | Uint8Array> {
  checkKeyType(alg, key, 'decrypt')

  switch (alg) {
    case 'dir': {
      // Direct Encryption
      if (encryptedKey !== undefined)
        throw new JWEInvalid('Encountered unexpected JWE Encrypted Key')

      return key
    }
    case 'ECDH-ES':
      // Direct Key Agreement
      if (encryptedKey !== undefined)
        throw new JWEInvalid('Encountered unexpected JWE Encrypted Key')

    case 'ECDH-ES+A128KW':
    case 'ECDH-ES+A192KW':
    case 'ECDH-ES+A256KW': {
      // Direct Key Agreement
      if (!isObject<JWK>(joseHeader.epk))
        throw new JWEInvalid(`JOSE Header "epk" (Ephemeral Public Key) missing or invalid`)

      if (!ECDH.ecdhAllowed(key))
        throw new JOSENotSupported(
          'ECDH with the provided key is not allowed or not supported by your javascript runtime',
        )

      const epk = await importJWK(joseHeader.epk, alg)
      let partyUInfo!: Uint8Array
      let partyVInfo!: Uint8Array

      if (joseHeader.apu !== undefined) {
        if (typeof joseHeader.apu !== 'string')
          throw new JWEInvalid(`JOSE Header "apu" (Agreement PartyUInfo) invalid`)
        partyUInfo = base64url(joseHeader.apu)
      }

      if (joseHeader.apv !== undefined) {
        if (typeof joseHeader.apv !== 'string')
          throw new JWEInvalid(`JOSE Header "apv" (Agreement PartyVInfo) invalid`)
        partyVInfo = base64url(joseHeader.apv)
      }

      const sharedSecret = await ECDH.deriveKey(
        epk,
        key,
        alg === 'ECDH-ES' ? joseHeader.enc! : alg,
        alg === 'ECDH-ES' ? cekLength(joseHeader.enc!) : parseInt(alg.slice(-5, -2), 10),
        partyUInfo,
        partyVInfo,
      )

      if (alg === 'ECDH-ES') return sharedSecret

      // Key Agreement with Key Wrapping
      if (encryptedKey === undefined) throw new JWEInvalid('JWE Encrypted Key missing')

      return aesKw(alg.slice(-6), sharedSecret, encryptedKey)
    }
    case 'RSA1_5':
    case 'RSA-OAEP':
    case 'RSA-OAEP-256':
    case 'RSA-OAEP-384':
    case 'RSA-OAEP-512': {
      // Key Encryption (RSA)
      if (encryptedKey === undefined) throw new JWEInvalid('JWE Encrypted Key missing')

      return rsaEs(alg, key, encryptedKey)
    }
    case 'PBES2-HS256+A128KW':
    case 'PBES2-HS384+A192KW':
    case 'PBES2-HS512+A256KW': {
      // Key Encryption (PBES2)
      if (encryptedKey === undefined) throw new JWEInvalid('JWE Encrypted Key missing')

      if (typeof joseHeader.p2c !== 'number')
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) missing or invalid`)

      const p2cLimit = options?.maxPBES2Count || 10_000

      if (joseHeader.p2c > p2cLimit)
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`)

      if (typeof joseHeader.p2s !== 'string')
        throw new JWEInvalid(`JOSE Header "p2s" (PBES2 Salt) missing or invalid`)

      return pbes2Kw(alg, key, encryptedKey, joseHeader.p2c, base64url(joseHeader.p2s))
    }
    case 'A128KW':
    case 'A192KW':
    case 'A256KW': {
      // Key Wrapping (AES KW)
      if (encryptedKey === undefined) throw new JWEInvalid('JWE Encrypted Key missing')

      return aesKw(alg, key, encryptedKey)
    }
    case 'A128GCMKW':
    case 'A192GCMKW':
    case 'A256GCMKW': {
      // Key Wrapping (AES GCM KW)
      if (encryptedKey === undefined) throw new JWEInvalid('JWE Encrypted Key missing')

      if (typeof joseHeader.iv !== 'string')
        throw new JWEInvalid(`JOSE Header "iv" (Initialization Vector) missing or invalid`)

      if (typeof joseHeader.tag !== 'string')
        throw new JWEInvalid(`JOSE Header "tag" (Authentication Tag) missing or invalid`)

      const iv = base64url(joseHeader.iv)
      const tag = base64url(joseHeader.tag)

      return aesGcmKw(alg, key, encryptedKey, iv, tag)
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value')
    }
  }
}

export default decryptKeyManagement