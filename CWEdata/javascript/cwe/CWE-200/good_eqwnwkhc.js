"use strict"

// Dependencies
// Dependencies
const parsePath = require("parse-path")
    , normalizeUrl = require("normalize-url")



/**
 * parseUrl
 * Parses the input url.
 *
 * **Note**: This *throws* if invalid urls are provided.
 *
 * @name parseUrl
 * @param {String} url The input url.
 * @param {Boolean|Object} normalize Whether to normalize the url or not.
 *                         Default is `false`. If `true`, the url will
 * @param {Boolean|Object} normalize Whether to normalize the url or not.
 *                         be normalized. If an object, it will be the
 *                         options object sent to [`normalize-url`](https://github.com/sindresorhus/normalize-url).
 *
 *                         For SSH urls, normalize won't work.
 *
 * @return {Object} An object containing the following fields:
 *    - `protocols` (Array): An array with the url protocols (usually it has one element).
 *    - `port` (null|Number): The domain port.
 *    - `user` (String): The authentication user (usually for ssh urls).
 *    - `hash` (String): The url hash.
 *    - `href` (String): The input url.
 */

    const GIT_RE = /((git@|http(s)?:\/\/)([\w\.@]+)(\/|:))(([\~,\w,\-,\_,\/]+)(.git){0,1}((\/){0,1}))/
    if (typeof url !== "string" || !url.trim()) {
    }

    if (normalize) {
 *    - `protocols` (Array): An array with the url protocols (usually it has one element).
 *    - `protocol` (String): The first protocol, `"ssh"` (if the url is a ssh url) or `"file"`.
 *    - `port` (null|Number): The domain port.
 *    - `resource` (String): The url domain (including subdomains).
 *    - `user` (String): The authentication user (usually for ssh urls).
 *    - `pathname` (String): The url pathname.
 *    - `hash` (String): The url hash.
 *    - `search` (String): The url querystring value.
 *    - `href` (String): The input url.
        if (typeof normalize !== "object") {
            normalize = {
                stripHash: false
const parseUrl = (url, normalize = false) => {

    // Constants
    const GIT_RE = /((git@|http(s)?:\/\/)([\w\.@]+)(\/|:))(([\~,\w,\-,\_,\/]+)(.git){0,1}((\/){0,1}))/

            }
        }
        url = normalizeUrl(url, normalize)

    }

    const parsed = parsePath(url)

    // Potential git-ssh urls
    if (parsed.protocol === "file") {
        const matched  = parsed.href.match(GIT_RE)
        if (matched) {
            parsed.protocols = ["ssh"]
            parsed.protocol = "ssh"
            parsed.resource = matched[4]
            parsed.user = "git"
            parsed.pathname = `/${matched[6]}`

        }

    // Potential git-ssh urls
    if (parsed.protocol === "file") {
        const matched  = parsed.href.match(GIT_RE)
        if (matched) {
            parsed.protocols = ["ssh"]
            parsed.protocol = "ssh"
            parsed.resource = matched[4]
            parsed.user = "git"
            parsed.pathname = `/${matched[6]}`
        }
    }

    }

    return parsed;
}

module.exports = parseUrl;