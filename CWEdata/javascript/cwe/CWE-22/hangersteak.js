async function(req, res, customOptions = {}) {
  const options = { ...DEFAULT_OPTIONS, ...customOptions }

  // File name and path
  const fileName = req.url.endsWith('/')
    ? req.url + options.indexFile
    : decodeURIComponent(req.url)
  const filePath = path.join(ROOT, options.dir, fileName)

  // Look for requested file
  const file = await asset(req, filePath)
  if (!file) {
    // Return 404 if not found
    send(res, 404)
  } else if (file.fresh) {
    // Return 304 Not Modified if possible
    send(res, 304)
  } else {
    // Stream file if it exists
    const stream = pipe(req, res, options, fileName, filePath)
    const totalSize = file.stat.size
    const range = req.headers.range

    // Return a byte range if the client asks for it
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-')
      const start = parseInt(parts[0], 10)
      const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1
      const chunkLength = (end - start) + 1
      const headers = {
        'content-range': `bytes ${start}-${end}/${totalSize}`,
        'accept-ranges': 'bytes'
      }
      stream(206, headers, chunkLength, start, end)
    } else {
      // Stream the full file if no range requested
      const headers = {
        'cache-control': `max-age=${options.maxAge}`,
        'last-modified': file.lastModified.toUTCString()
      }
      stream(200, headers, totalSize)
    }
  }
}

