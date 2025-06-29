======= 3.4.9

- fixed measuring dimension for `.gif` images
- fixed potential remote code execution in `U.set()` founded by [Snyk](https://snyk.io/vuln)

======= 3.4.7

- fixed: command injection in `Image.pipe()` and `Image.stream()`
- fixed `DELETE` method for the schemas (now it works like `PATCH` method)
- fixed: `controller.transfer()`

======= 3.4.6

- added: a support for Total.js v4 UIDs

- updated: file stats
- updated: calculating of `usage`

- fixed: applying of `default_root` in static files
- fixed: routing evaluation
- fixed: parsing of longer WebSocket messages
- fixed: mail error handling
- fixed: `versions` with `default_root`

======= 3.4.5

- fixed: a problem with persistent images

======= 3.4.4

- added: schema options `$.successful(function(response) {})`
- added: `options.reconnectserver {Boolean}`  to `WEBSOCKETCLIENT`
- added: `req.snapshot(callback(err, request_body))`
- added: a new command `CMD('reload_preferences')`
- added: a new FILESTORAGE mechanism based on `UID`
- added: `sql` extension to `U.getContentType()`
- added: `F.stats.performance.usage` which contains percentual usage of the thread

- updated: `SchemaOptions` method `$.response([index/operation_name])`, e.g. `$.response('workflow.NAME')`
- updated: snapshot `startscript.js.json` contains tabs instead of spaces
- updated: `DatabaseBuilder.rule(rule, [param])`, supports string declaration of filter function
- updated: `URL` validation

- fixed: cleaning of NoSQL embedded databases
- fixed: `String.parseCSV()`, now supports multiline strings
- fixed: a bug when closing of websocket
- fixed: `DatabaseBuilder.search()` method
- fixed: `Error` in `CLONE()` method
- fixed: `schema.inherit()` by adding `schema.middleware()` and `schema.verify()`
- fixed: parsing messages in WebSocket
- fixed: a problem in some commands pre-render in the view compiler
- fixed: parsing of query strings

======= 3.4.3

- added: `HASH(value, [type])` for creating hash like in jComponent
- added: `SchemaOptions.repo` as alias to `SchemaInstance.model.$$repository`
- added: a new type `CONVERT syntax` to `schema.define()` (more in docs)
- added: `SchemaEntity.verify(name, function($), [cache])` for async verification of values
- added: `TEMP` variable as a new global variable (it's cleaned every 7 minutes)
- added: `CONF.allow_persistent_images: true` which allows to reuse resized images in temp directory
- added: `req.filecache(callback)` as alias for `F.exists()`
- added: own QueryParser
- added: `RESTBuilderInstance.convert('name:String,age:Number')` method
- added: `RESTBuilder.upgrade(fn(restbuilder))` for upgrading of `RESTBuilder`
- added: `RESTBuilder` parses Total.js Errors in responses as Error
- added: `String.prototype.env()` replaces all values in the form `[key]` for `CONF.key`
- added: WebSocket supports a new type - raw `buffer`
- added: `Number.fixed(decimals)`

- updated: `websocket.send2(message, comparer, replacer, [params])` by adding `params` argument for comparer function
- updated: `Websocket.encodedecode` can enable/disable easily encoding of messages
- updated: bundling skips all bundles with `-bk.bundle` in filename
- updated: bundle filenames are displayed in console
- updated: `UPDATE()` method by adding `noarchive` argument
- updated: `TEST()` method supports `[subdomain]` keyword and `METHOD url` in URL address
- updated: `MODIFY([filename], fn)` by adding `filename` argument
- updated: background of schedulers by @fgnm
- updated: `U.download()` by adding `param` argument
- updated: `U.request()` by adding `param` argument
- updated: `schema.cl(name, [value])` method by adding `value` argument for replacing of existing code-list
- updated: Tangular version to `v4.0.0`

- improved: `filename` in modificators (now filenames contain relative paths)
- improved: performance of `U.request()` (around +10%)
- improved: performance of `U.download()` (around +10%)
- improved: performance of `RESTBuilder`
- improved: CSS minifier by compressing single hex color from e.g. `#000000` to `#000`

- fixed: localization in `totaljs` executable script
- fixed: phone validation
- fixed: `DOWNLOAD()`
- fixed: `Number.VAT()` by Tomas Novak
- fixed: debugging mode in Node.js v14
- fixed: `allow_compile_html` in static files
- fixed: `ROUTE()` method, there was a problem with spaces `GET /*      `
- fixed: `ACTION()` with json output
- fixed: controller in `$ACTION()` with used `get` and `query` actions
- fixed: `PATCH` method in `$ACTION()`
- fixed: `schema.allow()` in `PATCH` method
- fixed: image resizing in debug-mode

======= 3.4.1

- added: `SchemaOptions.parent` returns a parent model
- added: Tangular template engine (experimental)
- added: `String.makeid()` for creating of unique identifier from string
- added: a new property called `message.ua` to `FLOWSTREAM()`

- updated: `HttpFile.fs()` by adding `id` argument for updating of existing file
- updated: default value for `allow_ssc_validation` to `true`

- fixed: `String.parseDate(format)` with defined format
- fixed: inheriting of controllers between schemas
- fixed: `MailMessage.attachments()`
- fixed: calling of `F.snapshotstats` in cache recycle
- fixed: `controller.success()`
- fixed: removing of unused files when a bundle is extracting
- fixed: a processor function in `F.backup()`

- improved: `Date.format()`
- improved: Total.js translate (supports ErrorBuilder and DBMS)

======= 3.4.0

- added: `date.setTimeZone(timezone)`
- added: `NOSQL('~absolute_path.nosql')' loads external NoSQL embedded database
- added: `TABLE('~absolute_path.nosql')' loads external Table
- added: `(generate)` subtype into the `config` files
- added: `String.isBase64()`
- added: new schema type `Base64`
- added: SchemaEntity supports `schema.addWorkflowExtension(name, fn($, [data]))`
- added: SchemaEntity supports `schema.addTransformExtension(name, fn($, [data]))`
- added: SchemaEntity supports `schema.addOperationExtension(name, fn($, [data]))`
- added: SchemaEntity supports `schema.addHookExtension(name, fn($, [data]))`
- added: SchemaEntity supports `schema.setSaveExtension(fn($, [data]))`
- added: SchemaEntity supports `schema.setReadExtension(fn($, [data]))`
- added: SchemaEntity supports `schema.setQueryExtension(fn($, [data]))`
- added: SchemaEntity supports `schema.setRemoveExtension(fn($, [data]))`
- added: SchemaEntity supports `schema.setInsertExtension(fn($, [data]))`
- added: SchemaEntity supports `schema.setUpdateExtension(fn($, [data]))`
- added: SchemaEntity supports `schema.setPatchExtension(fn($, [data]))`
- added: SchemaOptions supports `$.extend([data])` for evaluating of all extensions for the current operation
- added: `WebSocket.keys` property (it contains all keys with connections)
- added: `threads` directory for server-less functionality
- added: a global variable called `THREAD` with a name of current thread
- added: `require('total.js').http(..., { thread: 'thread_name' })` evaluates only specified thread
- added: `require('total.js').cluster.http(..., { thread: 'thread_name' })` evaluates only specified thread in cluster
- added: framework creates a file with app stats in the form `your_init_script_name.js.json`
- added: a new config key `allow_stats_snapshot`
- added: view engine `@{import()}` supports auto-merging JS or CSS files: `@{import('default.js + ui.js')}`
- added: `exports.options` delegate to component in `FLOWSTREAM`
- added: `DatabaseBuilder.autofill()` from DBMS
- added: `HttpFile.extension` property
- added: `HttpFile.size` property alias to `HttpFile.length`
- added: auto-session cleaner of unused sessions
- added: `allow_sessions_unused` config key for cleaning of unused sessions
- added: missing `PATH.schemas`, `PATH.operations` and `PATH.tasks`
- added: a new method `PATH.updates`
- added: easy updating of applications via `UPDATE(versions, [callback], [pause_server_message])`
- added: NOSQL counter `.reset([type], [id], [date], [callback])` method-
- added: `session.listlive(callback)` returns all live items in session
- added: `controller.ua` returns parsed User-Agent
- added: `$.ua` returns parsed User-Agent in Schemas, Operations, TaskBuilder, `MIDDLEWARE()` and `AUTH()`
- added: support for `.mjs` extensions
- added: a simple support for DDOS protection `allow_reqlimit : Number` (max. concurent requests by IP just-in-time)
- added: unit-testing supports colors, added by @dacrhu
- added: `String.encryptUID()` as alias for `U.encryptUID()`
- added: `String.decryptUID()` as alias for `U.decryptUID()`

- updated: `WEBSOCKET()` supports `+`, `-` and `🔒` as authorization flags
- updated: `LOAD()` supports `service` type
- updated: cluster watches `restart` or `restart_NAME_of_THREAD` files for restarting of existing threads
- updated: cluster supports `auto` mode
- updated: cluster supports watcher in `debug` mode
- updated: `*.filefs()`, `*.filenosql()`, `*.imagefs()`, `*.imagenosql()` by adding `checkmeta` argument
- updated: `$.done([user_instance])` method in `AUTH()`, added a new argument called `user_instance` (optional)
- updated: GZIP is enabled only for JSON bodies which have more than 4096 bytes
- updated: `.env` parser supports parsing of `.env-debug` or `.env-release` files according to the mode
- updated: list of user-agents in `String.parseUA()`

- fixed: `ON('error404')` when the route doens't exist
- fixed: `filter` in Schema `workflows`, `transformations` and `operations`
- fixed: `NOSQL()` joins with absolute paths
- fixed: `TABLE()` joins with absolute paths
- fixed: `(random)` subtype in `config` files
- fixed: `(response)` phrase in `ROUTE()` for multiple `OPERATIONS`
- fixed: a response in `ROUTE()` with mulitple operations if the result contained some error
- fixed: a security bug with a path traversal vulnerability
- fixed: `debug` watcher for `themes`
- fixed: `generators` in schemas with a new declaration
- fixed: a problem with handling files in 404 action
- fixed: `startup` directory in bundles
- fixed: `schema.inherit()` didn't copy `required` fields.
- fixed: `SUCCESS()` serialization with `SUCCESS()` argument
- fixed: a critial bug with `UID()` generator
- fixed: clearing of DNS cache

- improved: `LOGMAIL()` mail format
- improved: starting logs in console output (added IPv4 local address)
- improved: performance with JSON serialization in `controller.success()` and `controller.done()`

======= 3.3.2

- fixed: default time zone (`utc` is default time zone)

======= 3.3.1

- added: `RESTBuilder.callback()` which performs `.exec()` automatically
- added: `FLOWSTREAM()`

- fixed: `AUDIT()` method
- fixed: error handling in `controller.invalid()`
- fixed: `req.authorize()`
- fixed: CSS auto-vendor-prefixes, fixed `opacity` with `!important`
- fixed: `CONVERT()` a problem with arrays

======= 3.3.0

- added: `NEWTASK(name, declaration)` for creating preddefined `TaskBuilder`
- added: `TASK(name, taskname, callback, [controller/SchemaOptions/OperationOptions/ErrorBuilder])` for executing preddefined `TaskBuilder`
- added: a new config key `directory_tasks` for `TaskBuilder`
- added: a global alias `MODIFY()` for `F.modify()`
- added: a global alias `VIEWCOMPILE()` for `F.view_compile()`
- added: `mail.type = 'html'` can be `html` (default) or `plain`
- added: `$.headers` into the `SchemaOptions`, `OperationOptions` and `TaskBuilder`
- added: `String.parseCSV([delimiter])` returns `Object Array`
- added: `String.parseUA([structured])` a simple user-agent parser
- added: `req.useragent([structured])` returns parsed User-Agent
- added: a new config key `default_crypto` it can rewrite Total.js crypto mechanism (default: `undefined`)
- added: a new config key `default_crypto_iv` it's an initialization vector (default: generated from `secret`) or it can contain a custom `hex` value
- added: a new config key `allow_workers_silent` can enable/disable silent workers (default: `false`)
- added: a new config sub-type called `random`, example: `secret_key    (random)  : 10` and `10` means a length of value
- added: a new command `clear_dnscache` for clearing DNS cache
- added: commands `INSTALL('command', 'command_name', function)` for registering commands and `CMD(name, [a], [b], [c], [d])` for executing commands
- added: `ENCRYPTREQ(req, val, [key], [strict])` to encrypt value according to the request meta data
- added: `DECRYPTREQ(req, val, [key])` to decrypt value according to the request meta data
- added: `controller.nocache()`
- added: `controller.nocontent()`
- added: `REPO` as a global variable
- added: `FUNC` as a global variable
- added: `MAIN` as a global variable
- added: `DEF` as a global variable for defining of behaviour for some operations (alternative to `F`)
- added: `PREF.set(name, [value])` (read+write) or `PREF.propname` (only read) for reading/writing a persistent preferences
- added: `F.onPrefSave = function(obj)` to write preferences
- added: `F.onPrefLoad = function(next(obj))` to read preferences
- added: `RESTBuilder.url(url)` which returns a new instance of `RESTBuilder` for chaining
- added: `restbuilder.keepalive()` enables a keepalive for `RESTBuilder` instance
- added: `SESSION()` management, more in docs
- added: `controller.sessionid` with ID of `SESSION()`
- added: `AUTH()` supports a new auth declaration with `$` as `AuthOptions` like `SchemaOptions` or `OperationOptions`
- added: `AuthOptions` to prototypes
- added: `ErrorBuilder.length` property (alias for `instance.items.length)
- added: Schemas `prepare` supports `req` argument
- added: `DEF.currencies.eur = function(val) {}` registers a currency formatter
- added: `DEF.helpers` registers a new view engine helper (`F.helpers` is alias for for this object)
- added: `DEF.validators` is alias for for `F.validators`
- added: usage of currency formatter `Number.currency(currency)`
- added: new schema type `Number2` with default value is `null`, not zero `0`
- added: `@{json2(model, elementID, key1, key2, key3)}` can serialize data with keys defined into the `<script type="application/json">`
- added: schemas supports `PATCH` and `.setPatch()`, only specified field are processed
- added: `SchemaOptions` supports `$.keys` for `PATCH` method
- added: `schema.cl(name)` ("cl" means codelist) returns `{Array}` a list of values from defined enum/keyvalue
- added: `schema.props()` returns `{Object}` meta info about all defined properties
- added: `SchemaOptions`, `OperationOptions` and `TaskOptions` supports `$.req` and `$.res` properties
- added: `AUDIT(name, $, [type], message)` a method for audit logs
- added: __obsolete__ message to older declaration of middleware, schemas and operations
- added: `U.diffarr(prop, arr_A, arr_B)` for comparing of two arrays
- added: `DIFFARR(prop, arr_A, arr_B)` is a global alias for `U.diffarr()`
- added: `global.REQUIRE()` for local modules within app directory
- added: `global.isWORKER` variable which contains `true` (when the process is executed as a worker) or `false`
- added: `ACTION(url, [data], callback)` can evaluate a route without request creation
- added: `ROUTE('🔒 METHOD URL')`, it means that 🔒 adds `authorized` flag
- added: `ROUTE('+METHOD URL')`, it means that `++` or `+` adds `authorized` flag
- added: `ROUTE('-METHOD URL')`, it means that `--` or `-` adds `authorized` flag
- added: `SchemaOptions`, `OperationOptions`, `TaskOptions` supports filtered query arguments via `$.filter`
- added: `controller.done([value])`
- added: `SITEMAP()` as alias to `F.sitemap()`
- added: config key `allow_localize` enables a localization for all `HTML` files
- added: `controller.breadcrumb` returns all sitemap items
- added: `PAUSESERVER(name, pause)` pauses web server (alias for `F.wait()`)
- added: `PROXY(endpoint, hostname, [copypath], [before_fn(uri,req,res)], [after_fn(res)])` makes a direct proxy from webserver
- added: `schema.middleware(function($, next))` for creating simple middlewares for Schema operations
- added: `FILE404(fn(req, res))` performs a simple fallback for non-existing files
- added: `$PATCH(schema, model, [options], callback, [controller])` method
- added: `.env` parser to `process.env`
- added: `String.parseENV()` for parsing `.env` syntax
- added: `$.noop()` for custom responses
- added: `$ACTION(schemaroute, [model], callback, [controller])` evaluates schema
- added: `process.send('total:restart')` performs a restart of app when the app is in debug mode
- added: `NOSQLREADER(filename)` for reading different files of NoSQL embedded databases
- added: `TABLEREADER(filename)` for reading different files of Table embedded databases
- added: `Mail.use()` an alias for `F.useSMTP()`
- added: `F.onAudit(name, data)` delegate for handling audit logs
- added: Components support a new features called `Parts`, more in docs

- updated: `$.invalid()` without arguments can return a function `function(err)`
- updated: Mail `unsubscribe` appends new header which enables `unsubscribe` in e.g. iOS
- updated: `MODIFY`, handler contains a new argument `controller`
- updated: `headers` argument in `controller.proxy` supports `flags: []` for REQEUST method
- updated: `.filefs()` and `.filenosql()` supports `download` with `true` or with `(name, type) => 'new_name'` (`filename` will be read from NoSQL binary file)
- updated: `$.done(arg)` argument `@arg` can be `boolean` (response will be as a value) or object/primitive value (`arg` will be as a value)
- updated: `String.arg(obj, [encode], [def])` added `encode` (`true`, `json`, `html`) and `def` arguments
- updated: `AUTH(req, res, flags, next)` and `next` function can handle `callback(err, user)`
- updated: `REQUEST()` supports `keepalive` flag
- updated: `bundles` mechanism supports merging files `--filename` between `bundles` files
- updated: `String.hash(true)` returns unsigned int
- updated: `CONF:default_image_converter` supports `magick` for new version of ImageMagick
- updated: `CONF.default_image_consumption` can contain ZERO value which means disabled optimialization of CPU/memory consumption
- updated: `CONF.default_image_consumption` has changed a default value to `0`
- updated: `U.parseXML(str, [replace])` and `String.parseXML([replace])` contains a new argument called `replace`
- updated: `LOAD()` added a callback function
- updated: components support `encoding="utf8"` attribute for `<file` tag (default: `base64`)
- updated: `EventEmitter2` supports a new argument `obj`, example: `U.EventEmitter2(obj)` or supports `.extend` method: `U.EventEmitter2.extend(proto)`
- updated: `UID()` generates new types of `UID` with 100% backward compatibility
- updated: `FILESTORAGE()` now it works in cluster mode

- fixed: schemas validation
- fixed: error handling in dynamic schemas
- fixed: CSS variables
- fixed: CSS variables with additional `!important` clause
- fixed: `controller.proxy()` with Gzip/Deflate compression
- fixed: HTTP status code with `204` in `REQUEST()`
- fixed: `cookies` in `WEBSOCKETCLIENT`
- fixed: `REQUEST()` with `json` flag and with `null` and `''` value
- fixed: rendering components in `layout`
- fixed: resources, there was a bug with reading of value from `default.resource`
- fixed: too many open files in `res.image()`
- fixed: too many open files in `res.filefs()`
- fixed: Schema `Boolean` parser
- fixed: renamed `F.stats.request.path` to `F.stats.request.patch`
- fixed: SMTP sender (a problem with auth mechanism with some mail servers)
- fixed: filter in `F.backup()`
- fixed: paths for stored directories in `F.backup()`
- fixed: uploading files
- fixed: `U.getExtension()` by @molda

- renamed: `*.routeScript` to `*.public_js`
- renamed: `*.routeStyle` to `*.public_css`
- renamed: `*.routeFont` to `*.public_font`
- renamed: `*.routeVideo` to `*.public_video`
- renamed: `*.routeImage` to `*.public_image`
- renamed: `*.routeDownload` to `*.public_download`
- renamed: `*.routeStatic` to `*.public`
- renamed: `controller.viewCompile()` to `controller.view_compile()`
- renamed: event `cache-set` to `cache_set`:
- renamed: event `controller-render-meta` to `controller_render_meta`
- renamed: event `request-end` to `request_end`
- renamed: event `websocket-begin` to `websocket_begin`
- renamed: event `websocket-end` to `websocket_end`
- renamed: event `request-begin` to `request_begin`
- renamed: event `upload-begin` to `upload_begin`
- renamed: event `upload-end` to `upload_end`
- renamed: event `cache-expire` to `cache_expired`

- __removed: backward compatibility__ with older version of Node.js < 10
- removed: `F.hash()`, alternative `String.prototype.hash()`
- removed: `controller.hash()`, alternative `String.prototype.hash()`

- improved Schemas and error handling
- improved `res.filefs()` method for nonexistent files

======= 3.2.0

- added: `WORKER()` alias to `F.worker()`
- added: `WORKER2()` alias to `F.worker2()`
- added: `F.cluster.https()`
- added: `TaskBuilder.done2([send_value])` returns `function` with wrapped `.done()`
- added: `TaskBuilder.success2([send_value])` returns `function` with wrapped `.success()`
- added: `TaskBuilder.next2(name)` returns `function` with wrapped `.next()`
- added: new `RESTBuilder` aliases `.DELETE()`, `.PUT()`, `.POST()`, `.PATCH() and `.GET()`
- added: `schema.before(key, (value, model, index) => value)` is a simple and new alternative to `schema.setPrepare()`
- added: `SchemaInstance.$parent` returns a parent schema (if the schema is nested schema)
- added: `SchemaOptions.redirect(url)` can perform a redirect from the schema
- added: `OperationOptions.redirect(url)` can perform a redirect from the operation
- added: `.ics` extension as acceptable file for the web server

- updated: `F.worker2()` returns entire `stdout` buffer in the `callback(err, buffer)`
- updated: `$options()` by adding `disabled` key
- updated: `String.ROOT()` by adding a support for jComponent `AJAX()` calls
- updated: `RESTBuilder.method(method, [data])` added `data` argument
- updated: `String.parseDate([format])` added `format` argument
- updated: SMTP settings contain `heloid` as `heloidentifier` (manually can be defined `HELO` or `EHLO` command)
- updated: SMTP hostname is computed from email if SMTP is not specified

- fixed: critical bug with security + improved security
- fixed: system routing
- fixed: NoSQL sorting, solved a strange problem
- fixed: `U.request()` with `GET` method by @khaledkhalil94 (it doesn't send JSON data if `data` is null/undefined)
- fixed: `F.wait()` in WebSocket
- fixed: `String.capitalize(true)`
- fixed: `REQUEST()` uploading of additional multipart/form-data (removed encoding)
- fixed: view engine conditions defined in `<script>`
- fixed: auto-redirects in `U.download()`
- fixed: image streams resizing
- fixed: `@{'%config_key'}` a problem with rendering a value with `'`

- removed: `X-Powered-By: Total.js`

======= 3.1.0

- added: CSS variables support default values `border-radius: $radius || 10px`
- added: NoSQL storage `.find(beg, end, [threads])` + `.count(beg, end, [threads])` + '.scalar(beg, end, type, field, [threads])' with multiple thread support
- added: `U.reader()`
- added: `bundles` supports merging files between bundle and project, project file must start with e.g. `--name.js`
- added: `.bundlesignore` support with similiar functionality like `.gitignore`
- added: support for `SameSite` cookie attribute
- added: `RUN()` for executing multiple Total.js operations
- added: a new global alias `CONF` (it's a reference to config) for `F.config`
- added: a new global alias `FUNC` (it's a reference to functions) for `F.functions`
- added: `DatabaseBuilder.arg(key, value)` for adding an dynamic argument
- added: NOSQL/TABLE modify supports `!field` as boolean toggle
- added: NOSQL/TABLE modify supports a new type `$age: 'js_code'` with some JS code
- added: NOSQL/TABLE update supports a new type `'js_code'` with some JS code
- added: a new config item `default-restbuilder-timeout : 10000`
- added: a new config item `default-cors : https://www.totaljs.com, https://www.componentator.com` which allows originators for `CORS()` method
- added: a new config item `default-request-maxkeys : 33` for restricting query max. keys
- added: a new config item `logger : false` which enables logging for Middleware, Schemas and Operations
- added: a new config item `bundling : shallow` which enables shallow bundling (if `bundle.json` exists then the bundles won't be extracted)
- added: `SchemaOptions` and `OperationOptions` supports `$.cancel()` method
- added: `CACHE(name, [value], [expire], [persistent])` alias for `F.cache.get2()` and `F.cache.set()` or `F.cache.set2()`
- added: encryption of config values
- added: `F.refresh()` for refreshing of internal cache
- added: `DatabaseBuilder.each(fn)` for browsing of evaluated records
- added: Bundles can be downloaded from URL addresses
- added: `ONCE()` alias to `F.once()`
- added: `image.define(value)` performs `convert -define 'value'`
- added: Total.js JS files (+ packages) tarted with `.` (dot) or ended with `-bk` won't be processed
- added: A new builder called `TaskBuilder` for creating custom tasks in Schemas or Operations
- added: `WebSocket.send2(message, [comparer(client, message)], [replacer])` a new method for better sending frames
- addde: `PATH` as a global alias for `F.path`

- updated: `debug` mode creates a `start_name_script.pid` instead of `debug.pid`
- updated: `NEWOPERATION()` supports `repeat`, `stop` and `binderror` arguments (more in docs)
- updated: routing, now it supports operations in the form `ROUTE('..  * --> @save_operation @load_operation (response)')`
- updated: `ROUTE()` supports multiple HTTP method declaration `ROUTE('GET,POST,PUT /something/', action)`
- updated: `ROUTE()` supports dynamic schemas
- updated: `REQUEST()` can return binary data if the content-type is not `text/*` or `application/*`
- updated: NoSQL joins support array values
- updated: `ROUTING(id:|search, [flags])` method
- updated: `F.path.mkdir(path, [cache])` can cache a current satte (default: false)
- updated: `controller.all()` can return `Array` of all WebSocketClient
- updated: startup info by adding user name
- updated: `LOCALIZE()` now `url` arg can be a function which replaces `F.onLocale`

- fixed: a critical bug with storing uploaded files via `httpfile.fs()` or `httpfile.nosql()`
- fixed: a critical bug with JavaScript minificator
- fixed: a critical bug with NoSQL counter and freezing app
- fixed: a critical bug with rendering of multiple async components
- fixed: a critical bug with GZIP compression (sometimes appeared in Safari)
- fixed: `nosql.update()` and `nosql.modify()` methods if the first argument is a function
- fixed: `F.wait()` in the test mode
- fixed: `LOCALIZE()` for nested directories
- fixed: sending of error handling when WebSocketClient is starting (for example: `unauthorized`)
- fixed: `versions` and `auto` feature with enabled `F.wait()`
- fixed: `versions` and `auto` feature with direct link to file
- fixed: `LOAD('release')` a release mode
- fixed: `SchemaInstance.$clean()` for nested schemas
- fixed: extracting `bundles` (added `/flow/` and `/dashboard/`)
- fixed: subdomain routing for `localhost`
- fixed: service for database cleaner
- fixed: rendering group of components
- fixed: RESTBuilder - JSON request without param sends an empty object
- fixed: `$MAKE()` with `callback`
- fixed: `String.slug()` for UTF - Chinese/Japan/Arabic/etc. chars
- fixed: async rendering of `components`
- fixed: RESTBuilder cache works only if the response status is `200`
- fixed: compressing CSS with `\t` tabs
- fixed: `controller.autoclear()`
- fixed: `controller.proxy()`
- fixed: `repeat` mode in `SCHEDULE()`
- fixed: `--inspect` argument for Workers by Tema Smirnov
- fixed: TLS in SMTP mail sender
- fixed: applying of versions
- fixed: unit-tests reads only `javascript` files
- fixed: `controller.invalid()` a problem with ErrorBuilder as a argument

- removed: `F.config.debug`
- removed: `controller.isDebug`

- improved: NoSQL reader
- improved: `UID()` -> now it changes a random hash each minute
- improved: CORS
- improved: rendering of components

======= 3.0.0

- added: (IMPORTANT) bundles
- added: (IMPORTANT) Total.js components can have async delegate
- added: (IMPORTANT) Total.js components support nested public files encoded in base64
- added: (IMPORTANT) NoSQL worker
- added: (IMPORTANT) NoSQL embedded storage for smaller big data / IoT
- added: `debugging` supports live reloading
- added: new schema operations: `schema.setInsert()` and `schema.setUpdate()`
- added: `RESTBuilder.patch([data])`
- added: `RESTBuilder.type(new-content-type)`
- added: `CONVERT(obj, schema)` for quick converting values like Schema (more in docs.)
- added: `Capitalize2` schema type which converts only the first char
- added: `MailMessage.high()` sets `high` priority of the email messsage
- added: `MailMessage.low()` sets `low` priority of the email messsage
- added: `MailMessage.confidential()` sets `Sensitivity` header with `confidential` value
- added: `MailMessage.attachmentnosql(db, id, [name])` sends a file from NoSQL embedded database
- added: `MailMessage.attachmentfs(storage_name, id, [name])` sends a file from FileStorage
- added: `SchemaBuilderEntity.$stop()` stops the async list
- added: `SchemaOptions.stop()` alias to `$.model.$stop()`
- added: `SchemaOptions.next()` alias to `$.model.$next()`
- added: `SchemaOptions.output()` alias to `$.model.$output()`
- added: `SchemaOptions.clean()` alias to `$.model.$clean()`
- added: `SchemaOptions.response()` alias to `$.model.$response([index])`
- added: `SchemaOptions.$async(callback, [index])` alias to `$.model.$async()`
- added: `SchemaOptions.$get([options], [callback])` alias to `$.model.$get()`
- added: `SchemaOptions.$insert([options], [callback])` alias to `$.model.$insert()`
- added: `SchemaOptions.$query([options], [callback])` alias to `$.model.$query()`
- added: `SchemaOptions.$remove([options], [callback])` alias to `$.model.$remove()`
- added: `SchemaOptions.$save([options], [callback])` alias to `$.model.$save()`
- added: `SchemaOptions.$update([options], [callback])` alias to `$.model.$update()`
- added: `SchemaOptions.$workflow(name, [options], [callback])` alias to `$.model.$workflow()`
- added: `SchemaOptions.$transform(name, [options], [callback])` alias to `$.model.$transform()`
- added: `SchemaOptions.$operation(name, [options], [callback])` alias to `$.model.$operation()`
- added: `SchemaOptions.$hook(name, [options], [callback])` alias to `$.model.$hook()`
- added: `SchemaOptions.stop()` alias to `$.model.$stop()`
- added: a new route flag type `&group` something like `roles` but groups aren't evaluated
- added: `route.groups` with defined groups
- added: NoSQL `database.listing([view])` which generates a listing response
- added: `DatabaseBuilder.insert(fn(doc))` can modify a document after `update` or `modify` has `insert` mode
- added: `DatabaseBuilder.query(code)` can contain a raw JS condition in the form e.g. `doc.age > 18 && doc.age < 33`
- added: `DatabaseBuilder.regexp(name, regexp)` RegExp search in strings
- added: `DatabaseBuilder.fulltext(name, regexp, [weight])` full text search in strings, more info in docs.
- added: `DatabaseBuilder.hour(name, [compare], value)` creates a condition for hours
- added: `DatabaseBuilder.minute(name, [compare], value)` creates a condition for minutes
- added: `Database.find2()` performs faster and reverse reading of documents (from end to begin of the file)
- added: `Database.stream(fn, [repository], [callback(err, repository, count)])` for streaming documents
- added: `Database.lock(callback(next))` locks all internal DB operations
- added: `Database.ready(callback)` executes a callback when DB is ready to use (only for special cases if you use indexes)
- added: new directory `schemas` with a new configuration item `directory-schemas'
- added: new directory `operations` with a new configuration item `directory-operations'
- added: `String.crc32([unsigned])`
- added: `U.hash('crc32')` and `U.hash('crc32unsigned')`
- added: config `nosql-worker' for enabling worker for NoSQL embedded database (default: `false`)
- added: config `nosql-inmemory' can contain name of databases e.g. (`users, products`) or String Array
- added: config `nosql-cleaner` for cleaning databases from removed documents (default: `1440` === 24 hours)
- added: config `nosql-logger` (default `true`) enables simple logs when re-indexing and cleaning
- added: config `security.txt` for auto-generating security.txt content (more in docs)
- added: config `default-proxy` for default web proxy server
- added: config `allow-cache-cluster` (default `true`) allow/disallow cache synchronization
- added: `GUID()` a global alias for `U.GUID()`
- added: `VIEW()` a global alias for `F.view()`
- added: `SchemaBuilderEntity.$response([index])` returns a specific response from an operation in `async` queue
- added: `$SAVE(schema, model, [options], [callback], [controller])` performs `schema.save()`
- added: `$INSERT(schema, model, [options], [callback], [controller])` performs `schema.insert()`
- added: `$UPDATE(schema, model, [options], [callback], [controller])` performs `schema.update()`
- added: `$REMOVE(schema, [options], [callback], [controller])` performs `schema.remove()`
- added: `U.streamer2()` same functionality as `U.streamer()` but it returns `Buffer` instead of `String`
- added: `Number.round([precision])`
- added: `UID([type])` supports custom types, e.g. `UID('users')` or `UID('orders')`
- added: `REQUEST()` global method, it's alias to `U.request()`
- added: `NOW` global property, it's alias to `F.datetime`
- added: `DatabaseBuilder.promise()`
- added: `RESTBuilder.promise()`
- added: `RESTBuilder.plain()` it returns a raw string from the response body
- added: `versions` file supports `auto` value for generating auto-checksum of files
- added: `F.load()` supports `test`
- added: NoSQL binary supports `custom` small data attributes
- added: CSS and JS supports a simple View Engine markup (config + resources + F.global)
- added: `controller.split` alias to `controller.req.split`
- added: nicer error response messages
- added: `RESTBuilder.proxy(proxy)` for HTTP proxy
- added: `U.request()` supports a new flag `proxy`, for example `proxy 127.0.0.1:8080`
- added: NoSQL database a new event `change`, more in docs
- added: `schema.define()(DEFAULT_VALUE)` added `DEFAULT_VALUE`
- added: `TESTUSER([user])` for faking of `F.onAuthorize` delegate, targeted for unit-testing only
- added: `G` as a global alias for `F.global`
- added: `ERROR([name])` is an improved `F.error()` without arguments
- added: a simple support for `.heic` and `.heif` image format
- added: `controller.sitemap_url2()`
- added: `controller.sitemap_name2()`
- added: `@{sitemap_url2()}`
- added: `@{sitemap_name2()}`
- added: `F.syshash` contains a simple MD5 hash with OS info
- added: `SchemaEntity.clear()` for removing all current definition
- added: new view engine markup `@{#}` for simulating of root URL
- added: new view engine command `@{root}` for getting sub-root path
- added: `String.ROOT()` for replacing `@{#}` markup in strings
- added: `U.decryptUID(value, key)` for encrypting number/string values
- added: `U.encryptUID(value, key)` for decrypting of number/string values
- added: `F.config['secret-uid']` as a hidden secret for encrypting/decrypting values
- added: `F.dir(path)` for changing of root directory
- added: `NOSQL()/TABLE().memory(count, [size])` for memory consumption, more in docs
- added: `HttpFile.fs(storage_name, [custom], [callback])` saves a file into the FileStorage
- added: `HttpFile.nosql(db_name, [custom], [callback])` saves a file into the FileStorage
- added: `res.filefs(storage_name, id, [download], [headers], [callback])` returns file from FileStorage
- added: `res.filenosql(db_name, id, [download], [headers], [callback])` returns file from NoSQL binary
- added: `res.imagefs(storage_name, id, image_make_fn, [headers], [callback])` returns file from FileStorage
- added: `res.imagenosql(db_name, id, image_make_fn, [headers], [callback])` returns file from NoSQL binary
- added: new stats `F.stats.performance` contains count of `request` and `file` per minute
- added: new method `controller.operation(name, value, [callback], [options])` for evaluating of operation

- updated: (IMPORTANT) NoSQL binary divides files to independent directories for 1000 files per directory
- updated: `GROUP()` by adding a new argument `url_prefix`
- updated: `NEWSCHEMA()` supports `NEWSCHEMA('group/name')`
- updated: `ROUTE()`, extended syntax for schemas, for example: `Schema --> @name` (more in docs.)
- updated: `ROUTE()` supports a new HTTP method definition `ROUTE('GET /api/users/')`, `ROUTE('POST /api/users/')`, etc.
- updated: `ROUTE()` supports a schema definition directly in the URL `ROUTE('GET /api/users/ *User --> @save')`, etc.
- updated: `tpm` supports a new command called `bundle`, for example: `tpm bundle cms`
- updated: `F.restore()` filter can return a new filename (for files only)
- updated: `@{import('livereload')}` or `@{import('livereload wss://mywebsite.com')}` supports `livereload` value and it's rendered in `debug` mode only
- updated: information after the framework is started
- updated: `schema.define('name', null)` removes a schema field
- updated: Chunker supports `compression`, default `true`
- updated: Chunker supports `autoremove` processed files in `each()` or `read()` method, default `true`
- updated: `String.parseConfig(def, [onError])` can handle errors better
- updated: `middleware`, now Total.js supports new declaration `F.middleware(function($) {})`
- updated: `F.wait()` HTML template
- updated: JavaScript compressor, now optimizes multiple `var` declarations
- updated: `CORS()` without arguments for all routes, methods and origins
- updated: `CORS()` tries to join multiple same preferences to one
- updated: `CORS(path)` without additional arguments allows all HTTP methods
- updated: `U.keywords()` for Chinese/Japan characters
- updated: `@{import()}` by adding `manifest` value linked to `/manifest.json`
- updated: `F.use()` supports `function` instead of `middleware` name
- updated: improved crypto algorithm
- updated: decreased a maximum count of keys to `33` from `69` when the query string is parsing
- updated: extended `schema.required(name, (model, workflow) => workflow.update)`, more in docs.
- updated: `$MAKE(schema, model, [filter/workflows], ...)` supports `workflows` (array or object) instead of filter for `schema.required()`
- updated: `OPERATION()` by adding `controller`

- fixed: mail attachments
- fixed: mail `message.manually()`
- fixed: WebSocket comparing of `origin` header
- fixed: uninstalling CORS routes
- fixed: cache for `favicon`
- fixed: `Date.extend()`
- fixed: `String.isJSON()` validator
- fixed: `String.parseDate()` now it parses date to UTC correctly
- fixed: `Date.format()` now it formats a date as UTC correctly
- fixed: HTML compressor with `\r\n` (Windows line endings)
- fixed: schema validation
- fixed: `U.atob()`
- fixed: `U.btoa()`
- fixed: schema field can be changed dynamically
- fixed: `String.arg()`
- fixed: `controller.href()` with Array values
- fixed: `U.get()` a problem with path with `-`
- fixed: `U.set()` a problem with path with `-`
- fixed: `F.path.mkdir()` in Windows and Linux

- replaced: config `disable-clear-temporary-directory` to `allow-clear-temp : true|false`
- replaced: config `disable-strict-server-certificate-validation` to `allow-ssc-validation : true|false`
- replaced: config `default-websocket-request-length` to `default-websocket-maxlength`
- replaced: config `default-request-length` to `default-request-maxlength`
- replaced: config `default-maximum-file-descriptors` to `default-maxopenfiles`
- replaced: `controller.proxy()` functionality (the name remains) via `controller.proxy2()` functionality

- removed: `F.responseFile()`
- removed: `F.responsePipe()`
- removed: `F.responseImage()`
- removed: `F.responseImageWithoutCache()`
- removed: `F.responseStream()`
- removed: `F.responseBinary()`
- removed: `F.responseContent()`
- removed: `F.responseRedirect()`
- removed: `F.response400()`
- removed: `F.response401()`
- removed: `F.response404()`
- removed: `F.response408()`
- removed: `F.response431()`
- removed: `F.response500()`
- removed: `F.response501()`
- removed: `F.responseStatic()`
- removed: `F.setModified()`
- removed: `F.notModified()`
- removed: `F.responseCode()`
- removed: `F.noCache()`
- removed: `controller.$modified()`
- removed: `controller.$etag()`

- improved: `debug` mode timing with improved consumption
- improved: performance (+20%) NoSQL embedded database
- improved: reading performance (+5%) in `U.streamer()`
- improved: CSS compressor
- improved: CORS processing
- improved: internal encryption/decryption mechanism

======= 2.9.4 (HOTFIX)

- fixed: mail attachments
- fixed: comparing `origin` header in WebSocket
- fixed: unit-testing

======= 2.9.3 (HOTFIX)

- added: `String.arg(obj)` for a simple templating `Hello {variable}!`
- added: new event `ON('@controllername', function() {})` -> is executed if the controller is evaluated

- updated: RESTBuilder default headers are lower-case
- updated: `content-disposition` header by adding `utf-8` according to [RFC 5987](https://tools.ietf.org/html/rfc5987#section-3.2.2)

- fixed: a missing property `controller.params` in WebSocket controller
- fixed: `$ASYNC()` execution in some cases
- fixed: `SCRIPT()` code with comments
- fixed: a callback reference in `OPERATION()`
- fixed: cache after route is removed
- fixed: `409` system route
- fixed: requests with `range` header and bad values
- fixed: `clearSchedule()`
- fixed: `Date.extend()` problem with months
- fixed: NoSQL counter reading stats

======= 2.9.2

- added: `controller.html(body, [headers])`
- added: `F.cluster.master(name, [data])` - for child processes, this method emits an event in master process
- added: `F.cluster.on(name, callback(data))` - master event listener
- added: `LOGMAIL()` global alias for `F.logmail()`
- added: `MAIL()` global alias for `F.mail()`
- added: own implementation of `onFinished`
- added: `RESTBuilder.cookies(obj)` can set cookies as raw object
- added: `RESTBuilder.cook([true/false])` enables persistent cookies
- added: `SchemaOptions.params` which returns dynamic params from the controller's action
- added: `SchemaOptions.done([arg])` as a callback (contains wrapped SUCCESS())
- added: `SchemaOptions.DB()` which returns `DB(this.error)` instance (for SQL Agent)
- added: `OperationOptions.done([arg])` as a callback (contains wrapped SUCCESS())
- added: `OperationOptions.DB()` which returns `DB(this.error)` instance (for SQL Agent)
- added: static method `Image.measure(type, buffer)` for measuring width/height of image
- added: `EACHOPERATION(function(name) {})` for obtaining all registered operations
- added: `controller.params` which returns dynamic params from the action

- updated: `F.load()`, now supports `string` for `debug` or `release` mode
- updated: `F.cluster.request()` can be executed from master process
- updated: `Image.miniature()` change a default filter from `Box` to `Hamming`
- updated: `U.request()` supports a new flag `cookies` which enables a parsing cookies from response

- fixed: schema validation (problem with Arrays)
- fixed: determines `x-forwarded-proto`
- fixed: nested schema validation
- fixed: themes static routing
- fixed: NoSQL reader
- fixed: NoSQL counter (sorting while reading stats)
- fixed: loading dependencies
- fixed: uninstalling middleware
- fixed: reading/updating sitemap in controller

- removed: max. sort `string` length
- removed: `auto` appending `.css` and `.js` extension in view engine
- removed: experimental `defer` feature

- improved: GZIP compression
- improved: code

======= 2.9.1 (HOTFIX)

- added: `controller.throw409()`, `req.throw409()`
- added: new view aliases: `@{R.something}` for `repository`, `@{M.something}` for `model` and `@{G.something}` for `global`

- updated: `ErrorBuilder.push()` supports `.push(name, status_code)` or `.push(name, error, status_code)`

- fixed: sitemap language auto-setting
- fixed: NoSQL: `builder.paginate()` a problem with zero limit (default limit will be `maxlimit`)
- fixed: NoSQL number filtering
- fixed: localization of ErrorBuilder in controllers

======= 2.9.0

- added: `WebSocketClient`
- added: `$ASYNC(schema, callback, [index], [controlller])` alias to `SchemaBuilderEntity.$async()`
- added: `ArrayBuffer.prototype.toBuffer()`
- added: `AUTH(fn)` is an alias to `F.onAuthorize = fn`
- added: `controller.success()` alias to `controller.json(SUCCESS(value))`
- added: `CORS()` alias to `F.cors()`
- added: `DatabaseBuilder.paginate(page, limit)`
- added: `F.config['allow-compile']` can disable the whole compilation of static files
- added: `F.config['default-dependency-timeout']` it's a timeout for module dependencies
- added: `F.path.rmdir(directory/directories, callback)`
- added: `F.path.unlink(file/files, callback)`
- added: `LOCALIZE()` a new global alias to `F.localize()`
- added: `MAP()` a new global alias to `F.map()`
- added: `MERGE()` a new global alias to `F.merge()`
- added: `MIDDLEWARE()` a new global alias to `F.middleware()`
- added: `NOSQL('users').backups([filter(doc)], callback(err, response))` returns all backups
- added: `SchemaOptions.invalid(name, [value], [path], [index])` alias to `$.errors.push() + callback()`
- added: `SchemaOptions.success()` alias to `callback(SUCCESS(value))`
- added: `controller.sitemapid` contains a sitemap identifier
- added: `controller.sitemap_add(parent, name, url)` appends a new item into the sitemap per request
- added: `@{sitemap_add(parent, name, url)}` appends a new item into the sitemap per request
- added: `SchemaEntity.required('fieldname', boolean/function(model))` which can disable/enable validation for this field

- updated: `sitemap` routing can contain an additional path, e.g. `#sitemapid/path/`
- updated: `F.localize()` supports sitemap routing
- updated: `F.merge()` supports sitemap routing
- updated: `F.map()` supports sitemap routing
- updated: `F.http(mode, [options], [middleware(listen)])` added a new argument `middleware`
- updated: `debug.js` now reads directories according to the config (author: @luoage)
- updated: config parser supports `config` sub-type
- updated: `controller.$exec()` --> `callback` is by default `controller.callback()`
- updated: `F.localize()` has enabled `compression` by default
- updated: HTTP server is listening after the framework is completely loaded
- updated: (IMPORTANT) HTTP cache in dynamic content and static files
- updated: `F.prototypes()` by adding `OperationOptions`
- updated: ErrorHandling in schemas (supports inline validation and advanced conditions)
- updated: `F.noCache()` is obsolete

- renamed: `allow-handle-static-files` to `allow-static-files`

- fixed: (IMPORTANT) `DatabaseBuilder.in()`
- fixed: (IMPORTANT) `U.ls2()`
- fixed: (IMPORTANT) `WebSocket` implementation (author: @jozefgula)
- fixed: `ArrayBuffer` in webosocket
- fixed: `F.path.mkdir()` on Windows (author: @molda)
- fixed: `F.restore()` on Windows (author: @molda)
- fixed: `F.rmdir` removes all files and directories
- fixed: `JSON` type in Total.js schemas
- fixed: `MODEL()`, `MODULE()`, `INCLUDE()` now are direct aliases
- fixed: a check for maximum length of request data
- fixed: Date formatting with `a` value
- fixed: empty localization in view engine e.g. `@()`
- fixed: external static routing in view engine on Windows
- fixed: NoSQL filtering with `or`
- fixed: NoSQL multiple updates
- fixed: NoSQL sorting of boolean values in larger dataset
- fixed: responding on `range` header
- fixed: unit testing (author: @ckpiggy)
- fixed: `schema.setPrefix()` in nested schemas
- fixed: sitemap localization
- fixed: CORS custom headers
- fixed: NoSQL date filtering

- improved: performance and security

======= 2.8.0

- added: `NOSQL().restore()` restores a database (its package)
- added: Mail options support a new property `xoauth2` (it needs to contain a `BASE64` value) for sending emails via OAuth 2.0 tokens (more in docs)
- added: `F.path.mkdir(path)` creates all directories according to the path
- added: `MailMessage.send2([callback])` sends a message according to the framework configuration
- added: a new filter for NoSQL embedded `DatabaseBuilder.contains(name)`
- added: a new filter for NoSQL embedded `DatabaseBuilder.empty(name)`
- added: (IMPORTANT) NoSQL counter supports daily stats (NoSQL counter files will be upgraded automatically and backwards incompatible)
- added: (IMPORTANT) NoSQL database and counter can read data from URL
- added: NoSQL counter `db.counter.daily_sum([id], callback)` for reading stats
- added: NoSQL counter `db.counter.daily_max([id], callback)` for reading stats
- added: NoSQL counter `db.counter.daily_min([id], callback)` for reading stats
- added: NoSQL counter `db.counter.monthly_sum([id], callback)` for reading stats
- added: NoSQL counter `db.counter.monthly_max([id], callback)` for reading stats
- added: NoSQL counter `db.counter.monthly_min([id], callback)` for reading stats
- added: NoSQL counter `db.counter.yearly_sum([id], callback)` for reading stats
- added: NoSQL counter `db.counter.yearly_max([id], callback)` for reading stats
- added: NoSQL counter `db.counter.yearly_min([id], callback)` for reading stats
- added: NoSQL counter `db.counter.stats_sum(top, [year], [month], [day], callback)` for reading stats
- added: NoSQL counter `db.counter.stats_max(top, [year], [month], [day], callback)` for reading stats
- added: NoSQL counter `db.counter.stats_min(top, [year], [month], [day], callback)` for reading stats
- added: NoSQL counter `db.counter.minimum([id], callback)` for reading stats
- added: NoSQL counter `db.counter.maximum([id], callback)` for reading stats
- added: NoSQL counter `db.counter.min(id, value)` for writing stats
- added: NoSQL counter `db.counter.max(id, value)` for writing stats
- added: NoSQL counter `db.counter.sum(id, value)` for writing stats (alias for `db.counter.hit()`)
- added: NoSQL counter: a new event `stats` when the stats are changed
- added: NoSQL logging in `DatabaseBuilder.log(msg, [user])`
- added: NoSQL backuping documents while they are updating/removing in `DatabaseBuilder.backup([user])`
- added: `CLONE(obj)` alias for `U.clone()`
- added: `GROUP(flags, fn)` alias for `F.group()`
- added: `F.cache.set2()` it creates a persistent cache (persistent items are stored in a file)
- added: new View Engine command `@{'%config'}` which reads a value from config directly
- added: `F.config['allow-filter-errors']` for filtering network unhandled errors
- added: `REDIRECT()` alias for `F.redirect()`

- updated: (IMPORTANT) packages compress/decompress function supports streaming data
- updated: (IMPORTANT) `NOSQL().backup()` !!! was changed !!!!
- updated: `controller.view(name/url, [model], [headers], [partial])` can render a view from URL address
- updated: `F.backup()` argument `path` can contain `String Array` file list
- updated: `controller.viewCompile(body, model, [headers], [partial], [cacheKey])` add a cache key
- updated: `image.command(arg, value, [priority], [escape])` a `priority` argument can be `escape` when it contains `boolean` value
- updated: `U.getExtension()` returns lower-case extensions
- updated: `total.js/debug` watchs `/workflows` file
- updated: file `/workflows` supports custom `options`, more in docs
- updated: `Array.random()` algorithm (+70% faster than older)
- updated: `RESTBuilder.file(name, filetarget, [filename])` can contain `filename` instead of buffer
- updated: `U.streamer(beg, [end], onItem(item, index), [skip], [stream])` added a new argument `stream` for flushing buffer
- updated: `ErrorBuilder.addTransform(name, callback(isResponse))` by adding new argument `isresponse`
- updated: `sorting` (framework + NoSQL embedded), now supports `internationalization`
- updated: `total.js/debugger` by adding a new option `options.watch = ['directory']`
- updated: `U.streamer()` supports "cancelation", just return `false`
- updated: CSS auto-prefixer, added: `repeating-linear-gradient`, `radial-gradient`, `repeating-radial-gradient` and removed `-o` prefix

- fixed: (IMPORTANT) long messages in WebSocket
- fixed: (IMPORTANT) `controller` param in schemas
- fixed: moved executing of `MailMessage.callback()` to better place
- fixed: mail auth when `options.user` and `options.password` are blank
- fixed: JS/CSS/HTML blocks
- fixed: `F.prototypes()`
- fixed: `F.decrypt()` a problem with parsing JSON and date formats
- fided: `debug.js` sometimes was created a problem with output informations

- improved: Date formatting (+50%)
- improved: NoSQL performance (around 60% in some cases)

======= 2.7.0

- added: __IMPORTANT__ new unit-testing mechanism
- added: __IMPORTANT__ `F.prototypes(function(proto) {})` for extending all internal prototypes
- added: `HttpFile` is set in `global` for extending of prototype
- added: `file.move()` a new alias for `file.rename()`
- added: `SchemaBuilderEntity.$controller(new_controller)`
- added: `EMPTYCONTROLLER` is a global variable
- added: new alias `NOSQL.set()` and `NOSQL.get()` for `NOSQL.meta()`
- added: `RESTBuilder.file(name, filename, [buffer])` supports uploading files
- added: `RESTBuilder.mobile()` adds `iPhone` phrase into the `User-Agent` header
- added: `RESTBuilder.robot()` adds `Bot` phrase into the `User-Agent` header
- added: a small protection for multipart data
- added: a new global aliases `ROUTE()` --> `F.route()`, `FILE()` --> `F.file()` and `WEBSOCKET()` --> `F.websocket()`

- updated: __IMPORTANT__ components (framework can render css/js from specific group)
- updated: `F.cluster` each operation checks whether cluster is activated
- updated: default IP to `0.0.0.0`
- updated: `Date.prototype.format()` with `ddd` renders name of day with 2 capital letters

- fixed: new schemas with defined callback `function($)`
- fixed: loading of `config-test` file (added rewriting of existing values)
- fixed: Total.js version in `debug.js`
- fixed: cluster initialization

- improved: `cors` in `F.restful()` and `F.restful2()`
- improved: `auto-vendor-prefixes`
- improved: parsing files from multipart data

======= 2.6.2 (HOTFIX)

- fixed: a critical bug with `debug.js`
- fixed: `try/catch` block from parsing of WebSocket message

======= 2.6.1 (HOTFIX)

- fixed: timeout in `RESTBuilder` and `U.request()`
- fixed: `F.merge()` a problem with `.js` or `.css` extension in some directory

======= 2.6.0

- added: `F.config['default-errorbuilder-status']` a default HTTP status for all error builders default `200`
- added: `F.config['default-listenpath']` starts a UNIX socket server listening for connections on the given path
- added: `F.listenpath` contains `default-listenpath` location
- added: `F.custom(mode, http, request_prototype, response_prototype, options)` a new mode for overwriting default HTTP server
- added: `schema.inherit([group], name)` can inherit all values from another schema
- added: NoSQL synchronization for cluster (more in docs)
- added: cache synchronization for cluster (more in docs)
- added: `F.cluster` (more in docs)
- added: Total.js `debug` script `require('total.js/debug')` instead of `debug.js` file
- added: a support for `async` attribute when `<script async src="` tag is generating, e.g. `@{import('async default.js')}`

- updated: `F.http(type, options)` supports `options.listenpath` for HTTP server (a direct shortcut for `default-listenpath`)
- updated: `F.script` returns error if compilation fails
- updated: `debug.js` supports `inspector`
- updated: NoSQL embedded database sorting (increased read performance about 30%)
- updated: RESTBuilder parsers JSON date string as `Date` object
- updated: `favicon()` generates `<link rel="icon"` instead of `<link rel="shortcut icon"`

- fixed: `controller.send()` bad declaration of `connection.id` for `id` and `blacklist` arguments
- fixed: `totaljs --translate` problem with `node_modules` and `.git` directory
- fixed: a waiting mode in `GETSCHEMA()`
- fixed: cache `instance.cache()` in RESTBuilder
- fixed: NoSQL filtering (critical)
- fixed: a bug ImageMagick/GraphicsMagick when the path contains spaces (critical)
- fixed: `controller.memorize()` didn't work (critical)
- fixed: dynamic params when `controller.transfer()` is performed

======= 2.5.0

- added: a missing property for WebSocket controller `controller.mobile`
- added: `EMIT()` alias for `F.emit()`
- added: `ON()` alias for `F.on()`
- added: `OFF()` alias for `F.removeListener(eventName, listener)` or `F.removeAllListeners([eventName])`
- added: `controller.components()` adds script/css tag into the head
- added: `@{components([group], [settings])}` renders all components together from selected group
- added: a new alias `WAIT()` alias for `U.wait()`
- added: `res.status(code)` for express middleware
- added: `F.clearSchedule(id)` for removing existing schedules
- added: a support for WebSocket compression
- added: removing `.package` files from `tmp` directory
- added: a new schema implementation (more in docs)
- added: `F.restful2()` has simplified route mechanism (it doesn't use "{id}" param for insert(POST)/update(POST)/delete(DELETE) method with except "GET" method)
- added: `res.binary(buffer, contentType, [type], [download], [headers])`
- added: a new route flag `novalidate` (a prevention for Schema validation)
- added: `U.upload(files, url, [callback], [cookies], [headers], [method], [timeout])` for multiple uploading files
- added: `RESTBuilder.redirect(true/false)` enables/disables auto-redirect (default: enabled)
- added: new schema aliases (`$QUERY()`, `$GET()`, `$WORKFLOW()`, '$TRANSFORM()' and `$OPERATION()`)
- added: `allow-head` (default: false) adds `head` method into the each route automatically
- added: `F.config['allow-defer']` enables deferring functions with `DEFER` keyword (default: false)
- added: `DEFER` feature
- added: `F.config['allow-debug']` starts a mini debugger
- added: `res.image_nocache()` alternative to `F.responseImageWithoutCache`
- added: `req.localize()` performs localization (executes `F.onLocale`)
- added: `image.limit(type, value)` creates a memory/map/disk/etc. limitation for GM or IM
- added: `default-image-consumption` for GM/IM memory limitation (default value `30%`)
- added: `F.useSMTP(smtp, [options], [callback(err)])` rewrites current SMTP settings

- updated: `F.http('debug/release/test', { debug: true })` can start a mini debugger
- updated: `F.route()`, `F.websocket()` and `F.file()` --> now returns `FrameworkRoute` instance instead of `Framework` instance (more in docs)
- updated: `F.load(debug, [types], [path])` supports a new type `service` which enables `F.on('service')`
- updated: Components (now doesn't have to has `html` body)
- updated: A component implementation can contain `exports.group = 'name';`
- updated: framework loads all dependencies in order
- updated: routes (web/websockets/files) can have an identifier in this form `F.route('/', ['id:custom_dentificator']);
- updated: `UNINSTALL(type, url/id/fn)` supports new types `web`, `websocket` and `file`, e.g. `UNINSTALL('web', 'id:custom_identifier')`
- updated: `U.request()`, added a new flag: `raw` (sends raw data)
- updated: `F.schedule()` returns an identifier
- updated: `U.clone()` supports `buffer` properties
- updated: `setTimeout2(name, fn(param), timeout, [limit], [param])` added a new argument `limit` and `param`
- updated: `F.script()` --> `now` argument (in the script body) is function `now()` which it still returns `new Date()`
- updated: `F.script(body, value, callback(err, response, param), [param])` --> `param` argument is a helper
- updated: middleware `next(false)` cancels calling of next middleware and controller
- updated: `OPERATION(name, value, [callback(err, response, param)], [param])` added a new (helper) argument `param`
- updated: Mail error handling (added Message instance)
- updated: `U.request()` add a new flag `noredirect`
- updated: `F.exists(req, res, [max], callback(next, filename, req, res))` added a new arguments into the callback `req` and `res`
- updated: `F.memorize()` uses `themeName` as a part of the cache key
- updated: `debug.js` (missing `startup` directory)

- renamed: configuration `mail.address.from` for `mail-address-form`
- renamed: configuration `mail.address.reply` for `mail-address-reply`
- renamed: configuration `mail.address.copy` for `mail-address-copy`
- renamed: configuration `mail.smtp` for `mail-smtp`
- renamed: configuration `mail.smtp-options` for `mail-smtp-options`

- fixed: config `static-accepts` (it didn't work)
- fixed: routing with `upload` flag
- fixed: workers timeout
- fixed: modificators by George Okojie Davis
- fixed: NoSQL comparing dates `equal` in `where` condition
- fixed: a problem with `booting` packages if are used custom paths (by @harry-stot)
- fixed: JavaScript compression
- fixed: `allow-compile-style` for inline CSS in views

- improved: events
- improved: parsing data from requests
- improved: mechanism of components
- improved: performance
- improved: responding
- improved: mail attachments

======= 2.4.0

- added: `components` more in docs
- added: `X-Powered-By` header again with option to change/remove it in the framework config `default-xpoweredby   : Total.js`
- added: `UPTODATE(type, url, [options], interval, [callback(err)])` more in docs
- added: `F.on('uptodate', function(type, name) {})` new event for up-to-date dependencies
- added: `F.stats.other.mail` with a count of sent emails
- added: `F.stats.response.errorBuilder` with count of sent ErrorBuilders
- added: `F.stats.response.image` with count of processed images via GM or IM
- added: `F.stats.request.schema` with count of request to SchemaBuilder
- added: `String.prototype.parseTerminal([fields], fn(values, index, count, realIndex), [skipLines], [takeLines])`
- added: `TRACE(message, [name], [url], [ip])` is an alias for `F.trace()`
- added: `F.config['trace-console']` (default: `true`) shows tracing on the console
- added: `F.convert(name, type/function(val))` registers a new convertor (convertors uses QueryParser (GET/POST))
- added: `F.convert(obj)` performs convertor for an object
- added: `F.download(url, filename, [callback])` a new alias for `F.snapshot()`
- added: `$$$([group], name)` for `GETSCHEMA([group], name)`
- added: configuration files supports options for all dependencies `module#mymodulename    (Object)   : { name: 'A custom options for dependency' }`
- added: `U.chunker()` added a new property `chunker.pages` with count of all stored pages
- added: `U.chunker()` added a new property `chunker.count` with count of all stored items
- added: `NEWOPERATION(name, fn(error, callback(response), value))` - registers a new operation (same as schemas)
- added: `OPERATION('name', function(err, response))` - executes an operation (same as schemas)
- added: `.flac` file extensions
- added: a new method for `MailMessage` object `message.unsubscribe('your URL or email address')`

- updated: new error message `The field "@" is invalid.`
- updated: `NOSQL().insert(doc, [unique])`
- updated: `quicksort` algorithm has been replaced for `shellsort` (increased performance of sorting about 10-15%)
- updated: `NOSQL().counter.monthly(true, ...)` shows all stats by ID
- updated: `NOSQL().counter.yearly(true, ...)` shows all stats by ID
- updated: `dependencies` supports up-to-date features e.g. `module (1 day)   : https://......js`
- updated: `F.findConnections([path])` a `path` argument is optional
- updated: `U.streamer(beg, [end], function, [skip])` add a new argument `skip`
- updated: deprecated methods in Node.js v7
- updated: `String.parseJSON([date])` added `date` argument (date fields will be converted to `datetime`)
- updated: `F.script()` can compile code to function e.g.: `F.script('next(a + b)')` returns a compiled function
- updated: `String.captialize([onlyFirst])` add a new argument `onlyFirst`
- updated: `F.onParseQuery(value, req)` add a new argument `req`
- updated: `F.onParseXML(value, req)` add a new argument `req`
- updated: `F.onParseJSON(value, req)` add a new argument `req`
- updated: `RESTBuilder.url()` without argument returns a current URL
- updated: `RESTBuilder.exec(function(err, value, response))` when the `error` exists the `value` is still `EMPTYOBJECT`
- updated: addded a new argument `replacer` to `controller.send(message, [id], [blacklist], [replacer])` and `client.send(message, [raw], [replacer])`

- removed: behaviours
- removed: restrictions
- removed: `TransformBuilder`
- removed: `F.config['allow-compatibility']` (not used)
- removed: `controller.date()` method has been useless
- removed: dynamic view compilation through `.view()` method
- removed: `contorller.proxy()` in WebSocket controller

- fixed: JS minificator
- fixed: global alias `I` for isomorphic code
- fixed: streaming files in `debug` mode (removed cache)
- fixed: (critical) a bug with authorization in WebSocket
- fixed: `nosql_builder.join()` a problem with using `nosql_builder.first()` by @yexing (Xing Ye)
- fixed: `String.parseInt2()` - a possible NaN value
- fixed: `String.parseFloat2()` - a possible NaN value
- fixed: `F.snapshot()`
- fixed: HTML compression (a fixed problem with HTML comments)
- fixed: restarting framework (missing cleaning of `F.temporary`)
- fixed: `U.isDate()` a problem with older dates than 1970, reported by @docgit

- improved: code
- improved: memory consumption for static files
- improved: CSS compression
- improved: CPU and memory consumption
- improved: performance
- improved: updating of `F.datetime`
- improved: `uninstall` dependencies
- improved: installing 3rd-party dependencies (framework compares same contents)

======= 2.3.0

- added: support for `/workflows` file (more in documentation)
- added: `ShcemaBuilderEntity.$exec(name, callback)` (more in documentation)
- added: `SchemaBuilder` supports new types `enum` and `keyvalue`
- added: `controller.$exec(name, [options], [callback])` (more in documentation)
- added: a new argument `description` to each SchemaBuilder `set` + `add` method e.g. `.setSave()`, `.addWorkflow()`, etc..
- added: `SchemaBuilder.meta` contains all registered handlers with their descriptions
- added: a property `controller.schema`
- added: `F.viewCompile(body, [model], [layout], [repository], [language])` - dynamic views
- added: `controller.viewCompile(body, [model], [headers], [partial])` - dynamic views
- added: `{viewCompile(body, [model])}` - dynamic views
- added: `Controller` is a global variable for extending prototype
- added: `F.validators` with Regular Expressions
- added: View Engine supports `@{continue}` and `@{break}` command for looping
- added: `URLBuilder.make(fn)`
- added: `NOSQLMEMORY(dbName, [viewName])` enables in-memory database collection
- added: NoSQL `nosql.upsert(doc)` inserts a new document where document doesn't exist in DB
- added: NoSQL `nosql.release()` for releasing of in-memory DB (framework clears unused in-memory databases automatically)
- added: NoSQL `nosql.scalar(type, dbName, [view])` performs scalar operation by type: `sum`, `min`, `max`, `avg`, `count` or `group`
- added: NoSQL `nosql.binary.all(callback)` browses all stored files
- added: NoSQL `nosql.binary.clear(callback)`removes all stored files
- added: NoSQL `DatabaseBuilder.random()`
- added: NoSQL `DatabaseBuilder.join(field, dbName, [view])` returns `DatabaseBuilder` with updated `.where(field_JoinedDB, field_currentdb)` method (it supports `.fields()` too)
- added: NoSQL `DatabaseBuilder.join()` supports scalar operation too, e.g. `nosql.join(...).scalar('count')`
- added: NoSQL `DatabaseBuilder.scalar(type, [field])` - types: `sum`, `min`, `max`, `avg`, `count` or `group`
- added: NoSQL `DatabaseBuilder.month(field, [operator], value)` filters `Date` fields according its month number
- added: NoSQL `DatabaseBuilder.year(field, [operator], value)` filters `Date` fields according its year number
- added: NoSQL `DatabaseBuilder.day(field, [operator], value)` filters `Date` fields according its day number
- added: NoSQL events (documents): `insert`, `update`, `modify` and `remove`
- added: NoSQL events (binary): `insert`, `remove` and `clear`
- added: NoSQL events (counter): `hit`, `remove` and `clear`
- added: a new alias `NOBIN(dbName)` witch it returns `NOSQL(dbName).binary` (a binary instance)
- added: a new alias `NOCOUNTER(dbName)` witch it returns `NOSQL(dbName).counter` (a counter instance)
- added: `F.kill(signal)` for killing an instance of the framework
- added: `I` alias for `isomorphic code on server-side and client-side together by hhhaker6@gmail.com <https://github.com/Creeplays>
- added: `F.script(body, value, callback(err, value))` evaluates script securly in safe scope (more in documentation)
- added: new alias `SCRIPT()` for `F.script()`
- added: `HttpFile.rename(filename, [callback(err)])` moves file to another directory

- updated: `F.on('exit', function(signal) {})` added a signal code
- updated: SchemaBuilderEntity contains new argument `controller`, e.g. `.setSave(function(error, model, options, callback, controller) { ..`
- updated: removed all validators of email addresses from FrameworkMail
- updated: `GETSCHEMA([group], name, [callback(err, schema)])` can wait for a schema
- updated: `F.localize()` supports modificators as `static` type
- updated: `F.modify()` supports a new type `static`, it's group of `.html`, `.txt` and `.md` files
- updated: `U.trim(obj, [clean])` supports a new argument `clean` (default `false`) and when it's `true` and a value is `''` then it sets the value to `undefined`
- updated: `nosql.update(docToUpdate, [docToInsert])` when the document for updating doesn't exist then database performs insert
- updated: `nosql.modify(docToUpdate, [docToInsert])` when the document for updating doesn't exist then database performs insert
- updated: `nosql.binary` stores a creation date as meta info

- fixed: Image.stream()
- fixed: global variable `Image` (in a single library)
- fixed: JavaScript compressor (problem with Regular Expressions)
- fixed: custom paths in `F.model()` and `F.source()`
- fixed: NoSQL removing documents (problem with different filters in one queue)
- fixed: fix view compiler error message
- fixed: `String.prototype.capitalize`

- removed: `nosql` doesn't support cache (`DatabaseBuilder.cache` is obsolete)
- removed: `F.refresh()` the method was useless

- replaced: `Array.randomize()` for `Array.random()`

- improved: code

======= 2.2.0

- added: `controller.proxy2(url, [callback], [headers], [timeout])` creates a proxy between current request and new URL
- added: `Image.watermark(filename, [x], [y], [width], [height])` creates a watermark
- added: hidden hack `res.noCompress = true` disables compilation of `.js` or `.css`
- added: `RESTBuilder` for creating REST requests (more in docs)
- added: new config item `allow-cache-snapshot` - to prevent cache when the framework is restarted

- updated: `SINGLETON(name, [def = {}])` about `def` argument
- updated: `debug.js` adds timestamps
- updated: `F.redirect()` can contain a relative URL of file
- updated: NoSQL embedded parser, dates are parsed as date object
- updated: `Pagination.next()`, `Pagination.prev()`, `Pagination.last()` and `Pagination.first()` supports new arguments `.html([link_inner_html], [class_name])`
- updated: `F.worker()` supports packages `F.worker('@eshop/myworker-script')`
- updated: `FrameworkImage` when the instance contains no command then `.minify()` method is performed automatically for preventing of empty response
- updated: `F.config['static-accepts']` removed dots from all extensions

- improved: `@{href(key, value)}` performance
- improved: Total Package Manager `$ tpm --help`
- improved: FrameworkImage command building

- fixed: (critical) NoSQL `nosql.modify()` and problem with updating `undefined` values
- fixed: (critical) security with GM and IM --> 10000x thanks for Luis Figueiredo <luisf@hexasoftware.com>
- fixed: `Image.stream()` and `Image.pipe()`

- renamed: `F.onLocate` renamed to __`F.onLocale`__

======= 2.1.0

- added: `F.sitemap_add(string)` for adding entries to sitemap by Martin Smola <https://github.com/molda>
- added: SchemaBuilderEntity `schema.addHook(name, fn(error, model, options, callback))`
- added: SchemaBuilderEntity `schema.hook(name, model, [helper], callback)`
- added: `controller.$hook(name, [helper], callback)`
- added: `String.parseInt2()` the method searchs number and converts it to integer
- added: `String.parseFloat2()` the method searchs number and converts it to float
- added: `@{title2('this content will be added to end of current title')}`
- added: `String.parseInt2()` the method searchs number and converts it to integer
- added: `String.parseFloat2()` the method searchs number and converts it to float
- added: `@{absolute(url, [hostname])}` for importing links with absolute URL by George Okojie Davis <https://github.com/binarygeotech>
- added: `sitemap_replace(name, title, url)` can change sitemap `title` and `url` onetime
- added: new JavaScript minificator algorithm because of Douglas Crockford "Good, not Evil"
- added: NoSQL supports counter for e.g. views or downloads, etc., more in documentation
- added: new routing mechanism `F.mmr(url, action)` for streaming `multipart/x-mixed-replace` types (client-->server)
- added: `controller.mmr(filename, [stream], callback)` for streaming `multipart/x-mixed-replace` (server-->client)
- added: `setTimeout2(key, fn, timeout)` resets old and creates a new `setTimeout` according to the `key`
- added: `clearTimeou2(key)` resets existing timeout
- added: `dnscache` into the `controller.pipe()` and `F.responsePipe()`
- added: `CREATE([group], name)` the methods create an empty object according to the schema
- added: `F.group(flags, fn)` for extending routes (web, websocket, file) flags
- added: `Number.prototype.filesize([decimals], [type])` formatting file sizes
- added: `binary` importing CSV `-csv`
- added: `controller.autodestroy([callback])` only for websocket

- updated: `framework.view()`, `controller.view()` and `@{view()}` supports `=theme/viewname`
- updated: sitemap routing supports localization
- updated: `F.cache.fn(name, fnCache, fnCallback(value, isFromCache))` - added argument `isFromCache`
- updated: `F.use(name, url, types, [first])` - `first` (default: `false`) argument adds a new middleware to the beginning of a route middleware
- updated: `String.toSearch()` - removes duplicates characters + better performance
- updated: `String.decode()` - improves decoding by Tom Spaccialbelli <https://github.com/harry-stot>

- fixed: (critical) NoSQL views
- fixed: (critical) view compilation in release mode (problem with just-in-time rendering)
- fixed: (critical) `F.eval()`
- fixed: (critical) parsing Date instance as Date instance in SchemaBuilder
- fixed: `F.resize()` additional path `~`
- fixed: `controller.memorize()` threw a timeout when the action contains some error in the memorize scope
- fixed: `F.sitemap()` fixed problem with `me` argument
- fixed: SchemaBuilderEntity preparing and validation
- fixed: QuickSort algorithm (problem with dates)
- fixed: `TRY()` scope
- fixed: problem with resources in views
- fixed: CSS compressor
- fixed: CORS
- fixed: problem with SUCCESS() and async schemas
- fixed: killing the process
- fixed: HTML compressor in views

======= 2.0.1

- added: binary supports webserver `totaljs 8000` starts webserver on 8000 port and the current directory will be a public directory
- added: configuration supports new subtype (`env` or `environment`) for binding values from `process.env`
- added: `SchemaBuilderEntity.$next(type, [name], helper)` --> adds a new operation (type: `workflow`, `transform`, `operation`, `save`, `read`, `query`, `remove`) to async list as next step
- added: `SchemaBuilderEntity.$push(type, [name], helper)` --> adds a new operation (type: `workflow`, `transform`, `operation`, `save`, `read`, `query`, `remove`) to async list as last step
- added: `SchemaBuilderEntity.$index(index)` can changed `obj.$async()` index (the index can be string e.g. `+1` or `-1`)
- added: `SchemaBuilderEntity.$callback(fn)` can changed `obj.$async()` callback
- added: `SchemaBuilderEntity.$repository(name, [value])` can get / set temporary value

- added: `SchemaBuilderEntity.$output()` sets the current `callback(value)` as output/result for `obj.$async(function(err, output))`

- updated: when the config contains `directory-temp` with empty value then the framework uses system temporary directory
- updated: `U.reduce()` supports array

- fixed: binary `totaljs`, fixed problem with creating localized texts
- fixed: `F.responseFile()` problem with cached filename, extension was broken when the framework reads the file from cache
- fixed: preparing values with subtype for array in SchemaBuilder
- fixed: generation UID
- fixed: problem with uninstalling middleware
- fixed: email validation, a problem with e.g. `blabla@somedomain.business` by @VarunBatraIT

- improved: view engine rendering
- improved: view engine memory consumption

======= 2.0.0

- added: new NoSQL version v4.0.0 is fully optimized for total.js
- added: `controller.invalid([status])` creates the ErrorBuilder instance and it responds in the next tick
- added: `controller.sitemap_url([id])` returns an URL from the sitemap
- added: `controller.sitemap_name([id])` returns a name/title from the sitemap
- added: `controller.sitemap_change(id, property, newvalue)` can change a current value in the sitemap
- added: `controller.sitemap_navigation([parent], [langauge])` can get list of all items according to the parent
- added: `@{sitemap_url([id], [arg1], [arg2], [argN])}` returns an URL from the sitemap
- added: `@{sitemap_name([id], [arg1], [arg2], [argN])}` returns a name/title from the sitemap
- added: `@{sitemap_change(id, property, newvalue)}` can change a current value in the sitemap
- added: `@{sitemap_navigation([parent], [language])` can get list of all items according to the parent
- added: `/startup/` all scripts in this directory are executed only one (then are renamed automatically)
- added: `F.route()` supports a new flag: `cors` (creates a cors route) and `credentials` (enables cookies for cors)
- added: `ErrorBuilder.plain()` returns all errors as a simple string
- added: `Array.findItem()` alias to `Array.find()`
- added: `Number.async(fn(index, next), callback)` for asynchronous operations
- added: `UID()` for generating unique identifiers (contains minimum 18 chars)
- added: `F.restart()` for restarting app
- added: `F.on('restart')`
- added: quicksort algorithm for sorting arrays
- added: `Array.quicksort(property_name, [asc], [maxlength])` for sorting arrays
- added: `String.removeTags()` by @harry-stot
- added: F.nosql(name) + NOSQL(name) --> alias for NoSQL embedded database (it can be used with e.g. SQL Agent)
- added: modificators can handle `INSTALL('view', ...)`
- added: `String.isPhone()` for phone number validation
- added: `String.isUID()` for UID() validation
- added: `String.isZIP()`
- added: `Pagination.html(max, format)` returns `String`
- added: `Pagination.json(max, format)` returns `String`
- added: new schemabuilder types `Email` (string, maxlength 120), `Phone` (string, maxlength 20), `Zip` (string, maxlength 10), `Capitalize` (string), `Lowerize` (string), `Upperize` (string), `UID` (string, minlength 18, maxlength 20), `Url` (string, maxlength 500), `JSON` (string)
- added: `SchemaBuilderEntity.fields` and it contains all field names in array.
- added: `Mail.send(smtp, options, messages, [callback])` messages must be array
- added: `Mail.send2(messages, [callback])` sends messages according to the framework configuration
- added: `Mail.try(smtp, options, callback)` tries to open a SMTP
- added: `F.datetime` contains current datetime and each 1 minute is the value increased
- added: `F.stats.other.restart` contains a new property with count of restarting
- added: `F.config.trace` for enable/disable tracing, `Boolean`, in a debug mode: `true`, release mode: `false`
- added: `F.trace(message, [name], [uri], [ip])`
- added: `controller.trace(message)`
- added: `req.split` contains splitted url
- added: `F.touch(url/req)` for clearing internal cache of cached static files (it works only in release mode)
- added: `F.path.exists(path, callback(exist, size, isFile))` for check of existing file
- added: `U.chunker(name, [max])` creates the chunker (for streaming some items)
- added: `F.worker2(name, [args], [callback], [timeout])`
- added: `SchemaBuilderEntity.allow('fieldname1', 'fieldnameN')` - allows other keys out of defined fields
- added: `global.EMPTYOBJECT`
- added: `global.EMPTYARRAY`
- added: `global.SINGLETON(name)` returns a singleton object instance
- added: `controller.referrer` returns a value from `req.headers['referer']`
- added: `controller.author(value)` can change `<meta name="author"`
- added: `@{author(value)}` can change `<meta name="author"`
- added: view engine supports looping with objects `@{foreach m in model} key: @{m.key} and value: @{m.value} @{end}`

- updated: subdomain routing supports wildcard routing `F.route('[*]/', 'homepage')` (`F.websocket()` is supported too)
- updated: `F.route(url, ...)` - `url`can be String Array with multiple relative paths by @Harry-Stot
- updated: `F.file()` supports flags instead of middleware and the flags supports extensions `['.jpg', '.png']`. The `name` argument has been removed.
- updated: `F.localize()` supports flags and the `name` argument has been removed
- updated: `F.sitemap()` returns object with a new field: `wildcard: {Boolean}`
- updated: `F.problem()`, `F.change()`, `controller.problem()` and `controller.change()` write logs to the file
- updated: `F.mail()` and `controller.mail()` subject is translated according to the language
- updated: `F.file(fnValidation/relative_path, fnExecute, [flags])` the file routing is completely changed
- updated: `export.booting` can contain `root` attribute for `package` applications
- updated: `Array.orderBy()` added quicksort algorithm
- updated: `Date.format()` supports day names `ddd` (short) and `dddd` (full)
- updated: `String.removeDiacritics()` supports multiple languages (by @Harry-Slot)
- updated: (IMPORTANT) `U.getExtension(filename)` --> returns extension without `.` dot
- updated: (IMPORTANT) `F.resize(url, action(image), [flags])` new resize routing
- updated: `F.resize()` flags can contain http/https `path` e.g. `F.resize('/img/*.*', (image) => image.minify(), ['https://www.totaljs.com/img/']);`
- updated: `U.GUID()` supports better charset by Guy Fraser
- updated: `Date.add(number)` supports number increase/decrease in milliseconds
- updated: `U.send(name, stream, url, callback, [cookies], [headers], [method], [timeout])` supports cookies and timeout
- updated: `U.request()` supports a new flag `< 200` (kB), it means that the method stores a content with maxixmum size 200 kB.
- updated: `ErrorBuilder` instance contains a new property `instance.unexpected` when is `instance.push()` a classic Error's instance.
- updated: configuration files + resources support types like String, Number, Array, Date, etc. via `key (type) : value`
- updated: `F.use(name, [url], [types])` - now supports new attributes `url`, and `types`

- fixed: `Websocket.destroy()`
- fixed: Too many open files with `F.log()` and `F.logger()`
- fixed: `String.isJSON()` the problem with `\n` character
- fixed: `FrameworkImage.save()` problem with streams
- fixed: `CLEANUP(stream)` method
- fixed: `controller.memorize()` problem with `controller.content()`
- fixed: `multipart/form-data` parser
- fixed: `Array.async()` without arguments
- fixed: view inline helpers
- fixed: `FrameworkImage.save()` doens't work when it doesn't contain any operation
- fixed: Windows paths
- fixed: problem with `websocket.destroy()`
- fixed: `F.cors()`
- fixed: WebSocket initialization (critical)
- fixed: Mail sender (problem with ZOHO SMTP)
- fixed: `Number.add()` problem with percentage
- fixed: `U.isDate()` by Guy Fraser
- fixed: `U.parseXML` problem with `CDATA`
- fixed: `U.join()` problem with Windows path by Martin Smola
- fixed: uploading files (problem with unexpected closed requests)
- fixed: `F.assert()` a problem with external URL address

- renamed: event `route-add` to `route`
- renamed: `F.versionNode` to `F.version_node`

- removed: (IMPORTANT) `X-Powered-By` header
- removed: `SCHEMA()`
- removed: composer from `SchemaBuilderEntity`
- removed: rules from `SchemaBuilderEntity`
- removed: obsolete code
- removed: `controller.async()`
- removed: `framework.async()`
- removed: `Utils.validate()`
- removed: `Utils.isEmail()`
- removed: `Utils.isURL()`
- removed: `Utils.isValid()`
- removed: `Utils.isNullOrEmpty()`
- removed: `controller.global` property by Guy Fraser (a problem with referrencing)
- removed: `controller.database()`, use `F.database()`
- removed: `controller.functions()`
- removed: `controller.models()`

- improved: Controller initialization by Guy Fraser
- improved: SMTP sender
- improved: redirecting
- improved: Array.orderBy(), added quicksort algorithm
- improved: ErrorBuilder
- improved: `WebSocket.send()` for JSON communication
- improved: code (a lot)
- improved: preparing `SchemaBuilderEntity`
- improved: performance
- improved: a lot of code by Guy Fraser

======= 1.9.7

- added: `F.web()` --> alias to F.route()
- added: `F.cors(url, flags, credentials)`
- added: `config['default-response-maxage']`, default value `11111111`
- added: `U.get(obj, path)` reads a value from `obj` by path
- added: `U.set(obj, path, value)` sets a value into `obj` by path
- added: (IMPORTANT) `config['default-root']` can replace root relative path
- added: `FrameworkImage` --> `instance.make(function(image) {})`
- added: `FrameworkImage` supports middleware `FrameworkImage.middleware(extension, fn)`
- added: `controller.$get([helper], callback)` or alias `controller.$read([helper], callback)` - schema must be defined in the route
- added: `controller.$remove([helper], callback)` - schema must be defined in the route
- added: `controller.$save([helper], callback)` - schema must be defined in the route
- added: `controller.$query([helper], callback)` - schema must be defined in the route
- added: `controller.$transform(name, [helper], callback)` - schema must be defined in the route
- added: `controller.$workflow([name, [helper], callback)` - schema must be defined in the route
- added: `controller.$operation(name, [helper], callback)` - schema must be defined in the route
- added: `controller.$async(callback, [index])` - schema must be defined in the route
- added: new `F.route()` flag `binary` (works only with `raw` flag)
- added: `U.ls2()` --> returns additional information about files (stat Object);
- added: `Pagination` is a global variable
- added: `SchemaBuilder.workflow2(name, options, callback)` skips preparing and validation
- added: `SchemaBuilder.transform2(name, options, callback)` skips preparing and validation
- added: `SchemaBuilder.operation2(name, options, callback)` skips preparing and validation
- added: `ErrorBuilder.exception(message)` - adds a new exception message
- added: `F.findConnection()` finds a websocket connection
- added: `F.findConnections()` finds websocket connections

- updated: (IMPORTANT) Array.async([NEW: threadCount (Number)], [callback]) supports `threads`
- updated: (IMPORTANT) Array.wait(onItem(item, index), [callback], [threadCount]) supports `threads`
- updated: (IMPORTANT) U.streamer(beg, [end], callback) --> supports "end" delimiter
- updated: Date.format(format, [resource_name]) supports name of months via `MMM` (short) and `MMMM` (full)
- updated: Resources support months e.g. `January     : Január`
- updated: `F.merge()` supports directories, e.g. `F.merge('app.js', '/js/*.js')`
- updated: NoSQL embeddded version
- updated: `U.ls()` --> [filter] can be `string` or `RegExp`
- updated: `@{meta(title, [description], [keywords], [image])}` and `@{keywords(value)}` keywords can be String Array
- updated: `@{section name}` can be used in the view more times
- updated: `U.request()` flags supports `number` for timeout and encoding `utf8`, `ascii`, etc.
- updated: `F.restfull()` each action support SchemaBuilder

- fixed: (IMPORTANT) Expires headers - problem with Russian timezone, reported by [Андрей Владимирович](https://github.com/anddesigner)
- fixed: (IMPORTANT) SchemaBuilder validation
- fixed: (IMPORTANT) view caching
- fixed: (IMPORTANT) U.keywords()
- fixed: @{checkbox} value binding
- fixed: dynamic views translator caching
- fixed: URL search string in `F.redirect()` (doesn't work on local relative address)
- fixed: binary / executable for Windows
- fixed: SUCCESS()
- fixed: Schema Validation is performed after F.onAuthorize().
- fixed: checking of maximum request length
- fixed: regexp routing
- fixed: F.restrictions.allow()
- fixed: `U.request()` and fixed `head` method, callback returns headers when is `head` method used
- fixed: Pagination by DusanDragula
- fixed: View inline helpers - reported by [Андрей Владимирович](https://github.com/anddesigner)
- fixed: `Array.findIndex` - reported by [Liao San-Kai](https://github.com/liaosankai)
- fixed: `WebSocket.send()` problem with `[id]` and `[blacklist]`

- improved: performance in `Expires Header`

======= 1.9.6

- added: MailMessage.manually() and removes auto-sending mail --> works only with `F.mail()` and `controller.Mail()`.
- added: view engine supports now `@{'route-to-static-file.jpg'}`
- added: `U.clone(obj, [skip])`
- added: `U.parseTheme(path)` --> parses theme name
- added: `@{href}` or `@{href(obj)}` or `@{href(key, value)}` --> query string manipulation (more in documentation)
- added: `.jsx` content-type
- added: `robot` flag into the routing (for search engines)
- added: property `req.robot`
- added: property `controller.robot`
- added: property `controller.mobile`
- added: support for default theme name, e.g. `=?/index` (the framework replaces `?` for `default-theme`)
- added: String.localeCompare2(value) --> same as localeCompare() but this method works with diacritics
- added: F.register(filename); --> the methods registers new e.g. resource (it solves the problem with resources in packages)

- updated: (IMPORTANT) controller.isSecure was renamed to controller.secured
- updated: (IMPORTANT) req.isSecure was renamed to req.secured
- updated: (IMPORTANT) Array.wait(onItem, onCallback, [NEW: threadCount (Number) or removeItemFromArray (Boolean)]) supports `threads`
- updated: `F.mail()` supports themes with view nema like this `=default/someview'`
- updated: `@{import()}` supports movies and images
- updated: `@{import()}` can contain schema name in the path like this `=YOURTHEME/somefile.js`
- updated: `F.route('/', '=themeName/viewname')` supports inline themes
- updated: `F.resize()` added new options parameter --> `direction` (top, center or bottom)
- updated: SUCCESS(), now supports function as first argument and the method returns wrapped function too

- fixed: problem with views path (`./some/path/in/hdd/` routed view anywhere)
- fixed: static file routing (`@{import()}`, `@{routeScript}`, etc..)
- fixed: miss `Sec-WebSocket-Protocol` by Liao San-Kai
- fixed: `MailMessage.send()` --> `options` argument is optional
- fixed: problem with UTF8 in U.request() by Ivan Marchukov
- fixed: WebSocket parser
- fixed: WebSocket closing message (problem with UTF8)
- fixed: U.getExtension()
- fixed: problem with WebSocket `destroy`
- fixed: sync2() doesn't work
- fixed: problem with themes in controller.memorize()
- fixed: problem with timeout in controller.memorize()
- fixed: fixed unitialized memory block in `mail` (by ChALkeR)
- fixed: problem with static files (directories with extensions)

- removed: all `controller.current...()` methods
- removed: all `@{current...()}` methods
- removed: (IMPORTANT) `framework.fs`
- removed: (IMPORTANT) `controller.fs`

- improved: (IMPORTANT) SchemaBuilder by Ivan Marchukov
- improved: (IMPORTANT) ViewEngine performance about 15%
- improved: request cookie parsing

======= 1.9.5

I had to skip v1.9.4 version because of NPM (my mistake).

- added: (IMPORTANT) new feature: THEMES
- added: `@{theme}` --> return String
- added: `F.onTheme` delegate
- added: `controller.theme(theme_name)` --> select theme;
- added: `config['default-theme']`
- added: `U.keywords(content, [forSearch], [alternative(true|false|soundex)], [max_count(200)], [max_length(20)], [min_length(2)]);`
- added: `String.prototype.keywords([forSearch], [alternative(true|false|soundex)], [max_count(200)], [max_length(20)], [min_length(2)])`
- added: `String.prototype.soundex()`
- added: `F.wait(name, [enable])` the server waits for pending task and it responds via 503 status code
- added: `U.parseQuery()` and `String.parseQuery()`
- added: `U.join(path1, path2, path3)`
- added: `U.getName(path)`
- added: `F.on('error400')`
- added: `F.on('error401')`
- added: `F.on('error403')`
- added: `F.on('error404')`
- added: `F.on('error408')`
- added: `F.on('error431')`

- updated: (IMPORTANT) F.onAuthorization() was renamed to F.onAuthorize()
- updated: `Date.format()` supports `w` and `ww` for week number
- updated: `Date.add()` supports `w`, `ww`, `week`, `weeks`
- updated: MailMessage supports display name `mail.from('Name <vali@demail>');`
- updated: MailMessage supports display name `mail.to('Name <vali@demail>');`
- updated: MailMessage supports display name `mail.to(email, [name], [clear]);`
- updated: MailMessage supports display name `mail.cc('Name <vali@demail>');`
- updated: MailMessage supports display name `mail.cc(email, [name], [clear]);`
- updated: U.resolve(url, [callback]) --> `callback` is optional

- fixed: HTTP cache for HTML 5 offline manifest files
- fixed: async() error handling
- fixed: NoSQL embedded paths
- fixed: problem with empty SMTP options
- fixed: ErrorBuilder default transformation to JSON
- fixed: Error handling
- fixed: SchemaBuilder request auto-validation
- fixed: String.isJSON()
- fixed: F.responsePipe() --> problem with transmitted headers
- fixed: evaluating of @{helpers.helper_name()}
- fixed: HTML minification of UTF8 characters
- fixed: U.isEqual()
- fixed: FrameworkImage.save() in Windows by LiaoTzukai
- fixed: SchemaBuilder prefix by Dušan Dragula

- improved performance of the response
- improved total performance
- improved view engine performance

======= 1.9.3

- added: (IMPORTANT) merging supports BLOCKS (.js,.css), e.g. F.merge('merge.js', 'fileA.js#management,common', 'fileB.js#management')
- added: (IMPORTANT) a route with schema binding can contain filter e.g. `*Schema#update` or `*Group/Schema#create` --> the framework validates only fields by filter
- added: TRANSFORM([transform], obj)
- added: NEWTRANSFORM(name, fn, [isDefault]) --> alias for TransformBuilder.addTransform()
- added: packages can be stored as directories (recommended for debug mode only)
- added: F.localize(name, url, [middleware], [options], [minify]) --> minify argument
- added: email supports calendar (.ics) request sending
- added: SchemaBuilderEntity.make(function(schema))
- added: F.install() supports packages mapping
- added: Support for unicode routing
- added: Packages can be loaded in framework structure (/controllers/, /modules/) `exports.booting = true`
- added: route flags can contains object --> the object is an additional options for middleware
- added: Utils.btoa(str) --> returns base64
- added: Utils.atob(str) --> returns binary
- added: global.TRY(fnScope, [fnError]) --> creates safe scope (more in documentation)
- added: Utils.getExtension(filename)
- added: @{head} can be imported as @{import('head')}
- added: @{meta} can be imported as @{import('meta')}
- added: controller.cookie('KEY') --> for reading
- added: controller.cookie('KEY', 'VALUE', expire, [options]) --> for writting
- added: framework.onParseQuery(function(value)) --> for parsing values from the requests
- added: framework.onParseXML(function(value)) --> for parsing values from the requests
- added: framework.onParseJSON(function(value)) --> for parsing values from the requests

- updated: (IMPORTANT) F.onValidation() was renamed to F.onValidate()
- updated: (IMPORTANT) SchemaBuilderEntity.onValidation() was renamed to SchemaBuilderEntity.onValidate()
- updated: (IMPORTANT) SchemaBuilderEntity.setValidation() was renamed to SchemaBuilderEntity.setValidate()
- updated: CSS compressor removes comments
- updated: F.restrictions.allow('IP') --> does not have to be full IP
- updated: F.restrictions.disallow('IP') --> does not have to be full IP
- updated: String.startsWith() and String.endsWith() according to ES6 but with the backward compatibility
- updated: String.parseDate() supports JSON format and classic date serialization
- updated: U.request() --> response always returns string
- updated: debug.js --> now watchs packages

- fixed: framework starting path (fixed problem with PM2 module)
- fixed: controller.memorize() - prevention for multiple requests
- fixed: routing (POST request without content-type is considered as `application/x-www-form-urlencoded`)
- fixed: sync2()
- fixed: U.minifyHTML() - now compresses JS and CSS in HTML
- fixed: Async.cancel()
- fixed: email attachments
- fixed: throwing error in global middleware
- fixed: Pagination.last()
- fixed: CSS auto-vendor-prefixes
- fixed: `tpm` binary (bug in creating packages on Windows)
- fixed: controller generators
- fixed: F.install() --> problem with names via URL import
- fixed: F.map() on Windows (problem with paths)
- fixed: HTML compression in views
- fixed: U.Async() object (problem with waitingFor)
- fixed: F.map(), problem in Windows
- fixed: CLEANUP(stream, [callback]);
- fixed: HTTP CACHE

- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/blocks

======= 1.9.2 (HOTFIX)

- added: support for node +v4.0.0

- updated: F.load(.., ..., [path]) path arguments supports '..' for parent directory
- updated: PageBuilder (+added properties: `nextPage`, `prevPage`, `firstPage`, `lastPage`) by [Liao San-Kai](https://github.com/liaosankai)
- updated: NoSQL

- fixed: U.request() --> `DELETE` method has `application/x-www-form-urlencoded` as default content type
- fixed: routing with `delete` flag
- fixed: F.worker()
- fixed: WebSocket event handlers
- fixed: sync2()
- fixed: @{place}
- fixed: @{section}
- fixed: controller.memorize() - problem with different layouts

- improve: routing performance with F.onAuthorization()

======= 1.9.1 (HOTFIX)

- added: new sitemap system
- added: a default schema validator is F.onValidation()
- added: ErrorBuilder.setContentType() --> default application/json
- added: View engine supports `else if`
- added: U.parseBoolean(val, [def])
- added: F.backup(filename, path, [callback], [filter]) --> backup some path to one file
- added: F.restore(filename, target, [callback], [filter]) --> restore backup file (but not evaluating)
- added: MailMessage supports custom headers `message.headers = { key: 'value' }`
- added: @{notranslate} --> disables view translation
- added: F.mode('debug') or F.mode('release') --> changes a mode of the framework
- added: EACHSCHEMA([group], prepare(group, name, schema))

- updated: MailMessage.bcc(email, [clear]) --> added clear
- updated: MailMessage.cc(email, [clear]) --> added clear
- updated: MailMessage.reply(email, [clear]) --> added clear

- fixed: uploading files
- fixed: prevention for mail double callback calling (by Andrea Sessa)
- fixed: worker messaging
- fixed: problem with schema parser (by Andrea Sessa)
- fixed: F.load() --> "versions" is configurable
- fixed: "raw" receiving of data
- fixed: U.request(), the problem with default method
- fixed: F.exists() - problem with URL query string
- fixed: framework startup path
- fixed: Date.format()
- fixed: Assertion Testing

======= 1.9.0

- added: (IMPORTANT) ISOMORPHIC using
- added: (IMPORTANT) new flag `mobile` (mobile routing), you can create a route to mobile device
- added: (IMPORTANT) new flag `delay` for long time operations (it removes timeout)
- added: readonly `req.mobile` -> returns `boolean`
- added: new view tag: @{mobile} –> returns `boolean`
- added: new view tag: @{isomorphic} –> returns `Object` with isomorphic objects
- added: `config['disable-clear-temporary-directory'] = false` (after start)
- added: `config['allow-compatibility'] = false` - a backward compatibility mode
- added: `config['default-timezone']`
- added: `config['directory-isomorphic']`
- added: `config['directory-private']`
- added: `F.path.private([filename])`
- added: `F.path.isomorphic([filename])`
- added: `Controller.ping()` for WebSocket
- added: `global.DB()` --> same as `global.DATABASE()`
- added: `global.isomorphic` --> returns `framework.isomorphic` --> returns isomorphic objects
- added: `global.is_client` and `global.is_server` for isomorphic
- added: cache for HTTP routing
- added: RegExp routing `F.route('/{/^\\d+$/}', ...)`
- added: `F.responseBinary(req, res, contentType, buffer, [type], [download], [headers])`
- added: `SchemaBuilderEntity.filter(custom, [model], [reverse])`
- added: `SchemaBuilderEntity.trim = true`(enable/disable trim strings (default: true))
- added: `Number.prototype.add(value, [decimals])` -> supports percentage
- added: `Date.prototype.toUTC([ticksOnly])`
- added: `Date.prototype.extend()` -> extend current datetime about new date or time (more in documentation)
- added: `F.stats.request.mobile`, `F.stats.request.desktop`
- added: `res.setHeader('Vary', 'Accept-Encoding, User-Agent')` for same url addresses and different devices (desktop vs mobile)
- added: binary - `total --translatecsv`
- added: controller.jsonp(method_name, obj, [headers], [beautify], [replacer]);
- added: CSS variables likes sass, example: `$color: red;`
- added: CSS nesting
- added: modificators for dynamic modification before compilation: views, styles and scripts
- added: TransformBuilder
- added: F.load(debug, load_types, [path]);
- added: F.isWorker (is true when is called F.load())
- added: F.isCluster (is true when the framework is running in the cluster)
- added: F.logmail(address, [subject], body, [callback]) --> send e-mail message as plain text
- added: Array.unique([property]) by Andrea Sessa
- added: Array.pair(array, property, fn(itemA, itemB), [remove]) - pair arrays
- added: String.base64ToBuffer();
- added: terminal -> `tpm unpack [package_name] [optional: target_directory]`
- added: versions is applied to raw HTML
- added: versions supports auto-mapping
- added: sync2(), e.g. sync2(fn), diff with v1: sync(fn)() and v2: sync2(fn)
- added: "dependencies" file for installing dependencies (modules, packages, etc.)
- added: @{nocompress html}, @{nocompress js}, @{nocompress css}, @{nocompress all}
- added: req.authorize(callback(err, userprofile, isAuthorized))
- added: res.content(code, body, type, [compress]) -> alias for F.responseContent()
- added: F.localize(name, path, [middleware], [options]) - auto translating static files
- added: F.listener(req, res) -> for multiple server listeners
- added: F.restful(url, flags, onQuery, onGet, onSave, onDelete) -> creates routing
- added: F.onSchema(req, group, name, callback(err, body)) -> for custom schemas
- added: @{import(filename1, filename2, filenameN)}
- added: SchemaBuilderEntity.setError(function(error, model, type, name));
- added: F.snapshot(url, filename, [callback]);
- added: CLEANUP(stream, [callback]) - clean up readable streams
- added: configs directory
- added: F.behaviour(url, flags);
- added: behaviour: disable-measuring (default: false)
- added: behaviour: disable-middleware (default: false)

- updated: (IMPORTANT) routing: `json` flag is not required for receiving incomming data as JSON
- updated: `F.mail(address, subject, view, [model], [callback], [language])` added language
- updated: `F.view(name, model, [layout], [repository], [language])` added language
- updated: `F.route(url, ...)`, `F.websocket(url, ...)` --> URL can be function(url, req, [flags])
- updated: `versions` affects F.map() and F.merge()
- updated: `controller.mail(address, subject, view, [model], [callback], [language])` added language
- updated: `config['allow-performance']` is set to true
- updated: (IMPORTANT) `F.map(url, filename/directory, [filter])` supports mapping directories
- updated: (IMPORTANT) arguments order `SchemaBuilderEntity.setValidate(function(name, value, path, model, schema){})`
- updated: (IMPORTANT) `U.extend(target, source, [rewrite]);` --> rewrite is by default: __true__
- updated: `SchemaBuilderEntity.setPrepare(function(name, value, index, model){})` --> __model__ is new
- updated: `SchemaBuilderEntity.define(name, value, required, [custom])` --> __custom__ is new
- updated: HTML compressor
- updated: favicon `(removed rel="icon")`
- updated: binary `tpm create [package] [directory]` (added argument [package], [directory])
- updated: better handling middleware errors and added prevention of "memory leak"
- updated: (IMPORTANT): Websocket ping is set to 3 minutes
- updated: framework responds for bad requests with HTTP 403
- updated: Mail (added support for Office365)
- updated: Date.prototype.add() supports e.g. Date.prototype.add('25 days')
- updated: String.prototype.params() -> supports double "{{"
- updated: F.schedule(date, [repeat], fn) --> added [repeat]
- updated: `F.responseStream()` and `controller.stream()` added [nocompress] argument
- updated: binary `tpm` supports install package from different URL

- removed: XSS check

- fixed: `controller.binary(buffer, contentType, [download], [headers])`
- fixed: routing `DELETE`
- fixed: `binary` (creating empty-project, bad record with smtp options)
- fixed: calling generator action
- fixed: `binary --translate` (filenames)
- fixed: SchemaBuilderEntity prepare (problem with nullable Boolean)
- fixed: (IMPORTANT) 431 system route
- fixed: F.log(), F.logger() –> problem with objects, reported by Nikita Shmidt
- fixed: Number formatting (problem with negative numbers)

- improved: performance +15%
- improved: code optimalization
- improved: Date.prototype.format()
- improved: String.prototype.format()
- improved: Number.prototype.pluralize()
- improved: view debugging

__IMPORTANT:__
`exports.install = function(framework) {}` framework variable is removed but with backward compatibility (`config['allow-compatibility']`).

======= 1.8.0

source-code: "tabs" instead of "spaces"

- added: SchemaBuilderEntity->setPrepare(function(name, value, index))
- added: SchemaBuilderEntity–>setPrefix(prefix)
- added: SchemaBuilderEntity->setResource(resourcename)
- added: auto-trim strings in SchemaBuilderEntity
- added: Controller.route;
- added: ErrorBuilder is a global class
- added: F.on('upload-begin', function(req, file) {})
- added: F.on('upload-end', function(req, file) {})
- added: config['static-accepts']: woff2
- added: F.logger(filename, arg1, ...), controller.logger(...), @{logger(...)}
- added: (IMPORTANT) F.exists(req, res, callback(next, filename))
- added: callback: F.responseFile(), controller.file(), response.file()
- added: callback: F.responseImage(), controller.image(), response.image()
- added: callback: F.responseImageWithoutCache()
- added: callback: F.responseStream(), controller.stream(), response.stream()
- added: callback: F.responseStatic(), response.continue()
- added: Array.prototype.findIndex(cb, [value]) returns Number
- added: Array.prototype.toObject([name]) returns Object
- added: Array.prototype.limit(max, fn(items, next), [callback])
- added: Array.prototype.compare(propName, arr, comparer)
- added: Image.geometry(w, h, options)
- added: Image.thumbnail(w, h, options)
- added: Image.filter(type)
- added: `config['default-maximum-file-descriptors'] = 0` (0 = the watcher is disabled)
- added: `config['default-interval-clear-dnscache'] = 2880` for clearing DNS cache of Utils.request(), Utils.download()
- added: Utils.resolve(url, callback(err, uri)) DNS cache
- added: Utils.clearDNS() clears DNS cache
- added: Utils.isObject()
- added: String.prototype.parseJSON()
- added: Date.prototype.diff([date], type)
- added: framework.onCompileView(name, content, model)
- added: framework.on('cache-set', function(name, value, expire))
- added: `@{compile handlerbars}CONTENT TO COMPILE@{end}`
- added: `@{compile}CONTENT TO COMPILE@{end}`
- added: Utils.streamer(delimiter, function(value, index)) returns function
- added: HEAD method support for (controller.json(), .view(), .plain(), .file(), .stream())
- added: global.NEWSCHEMA([group], name) for creating new schemas (more in docs)
- added: global.GETSCHEMA([group], name) for getting new schemas (more in docs)
- added: global.FINISHED(res/stream, callback) --> real end of the stream
- added: global.DESTROY(stream) --> destroys the stream
- added: (IMPORTANT) node.js generators for the routes

- updated: (IMPORTANT): for evaluation multiple roles in routing (@role) framework validates only one role
- updated: GZIP compression for static files (added .md, .json)
- updated: request schema parser and XML parser -> better handling errors
- updated: wrapped decodeURIComponent for prevention of parsing
- updated: removed HTTP cache in DEBUG mode
- updated: Image.miniature(w,h,color,[filter]) --> added filter
- updated: binary supports translation files `--translate my-localization.txt`
- updated: framework.mail() --> returns MailMessage
- updated: controller.mail() --> returns MailMessage
- updated: SchemaBuilderEntity.$async(callback, [return-only-this-index])
- updated: translation @(#KEY) (direct reading) or @(TEXT TO TRANSLATE) (hash reading)
- updated: Utils.request(), Utils.download() supports `dnscache` flag for caching host IP
- updated: SchemaBuilderEntity.validation()
- updated: F.cache.set(key, value, expire, [sync])
- updated: NoSQL
- updated: (IMPORTANT): Websocket ping is disabled by default

- fixed: Image.resize()
- fixed: F.usage() --> fixed queue pendings
- fixed: (CRITICAL) SchemaBuilderEntity preparing (problem with prototypes)
- fixed: (CRITICAL) a package or module installation from the URL address
- fixed: (CRITICAL) response content-length
- fixed: framework.redirect()
- fixed: HTTP cache (added longer time)
- fixed: auto JSON parsing in `json` request
- fixed: Pagination.last() (Nikita Shmidt)
- fixed: loading packages
- fixed: callback error in MailMessage
- fixed: TPM restore package
- fixed: Utils.request() --> double calling of callback()
- fixed: routing with `get` and `json` flag together

- replaced: (IMPORTANT) `uri` to `url` in F.problems, F.changes, F.errors (saves memory)

- improved: U.removeDiacritics() -> increase about 30%
- improved: handling files
- improved: auto-image-resizer (routes)
- improved: Image.miniature() -> increase about 50%
- improved: U.queue()
- improved: (IMPORTANT) SchemaBuilder validation and preparation

__GENERATORS__:

- added: Image.$$save(filename, [writer])
- added: Image.$$measure();
- added: Image.$$identify();
- added: Utils.$$request();
- added: Utils.$$download();
- added: Utils.$$send();
- added: Utils.$$wait();
- added: Utils.$$resolve();
- added: HttpFile.$$copy()
- added: HttpFile.$$read()
- added: HttpFile.$$md5()

======= 1.7.2

- added: Array.prototype.extend(obj, [rewrite])
- added: SchemaBuilderEntity->constant(name, [value])
- added: Utils.minifyHTML(value);
- added: Utils.minifyScript(value);
- added: Utils.minifyStyle(value);
- added: FrameworkImage.measureSVG(buffer);
- added: auto-parsing SVG width/height
- added: framework.translator([language], text);
- added: TRANSLATOR
- added: SUCCESS(boolean, [value]) returns { success: boolean, value: [value] }
- added: framework.onLocate(req, res) --> this method sets the current localization
- added: new installation event framework.on('module#name');
- added: new installation event framework.on('controller#name');
- added: new installation event framework.on('model#name');
- added: new installation event framework.on('definition#name');
- added: new installation event framework.on('config#name');

- updated: CSS compressor (better compression)
- updated: Utils.Request() supports head method

- fixed: binary `total --diff`
- fixed: debug.js (fixed port)
- fixed: F.onCompileStyle and F.onCompileJavaScript (problem with filename)
- fixed: Number.prototype.pluralize()
- fixed: WebSocket message parsing
- fixed: (CRITICAL) mail sender (problem with CRLF in BASE64)
- fixed: (CRITICAL) `../src/node_http_parser.cc, line 392.`
- fixed: the framework duplicates width/height in upload auto-parser
- fixed: JPG width/height auto-parser

======= 1.7.1 (HOTFIX)

This version will work on `io.js` without problems.

- added: framework.schedule(date/string/number, fn);
- added: (IMPORTANT) a prevention for the HeaderSent exception
- added: new option `sleep` for framework.http() & framework.https()
- added: request.ip caching
- added: framework.useConfig(filename-configuration)

- updated: String.toSearch() removes non-word characters
- updated: Utils.trim() supports arrays

- fixed: framework.versionNode (updated for io.js)
- fixed: (CRITICAL) if the controller middleware does not exist framework throws exception correctly
- fixed: Utils.validation() (for Arrays)
- fixed: authorization routing
- fixed: (CRITICAL) request with multipart content-type (+fixed problem XSS)
- fixed: (CRITICAL) controller.memorize() in JSON output
- fixed: (CRITICAL) uploading files, problem with the filename/name field (if it contained `;`)

- removed: mmr

======= 1.7.0

Framework supports a backward compatibility.
Framework supports: one file only (all libraries in one JS file)
Framework loads modules, packages, models, definitions, controllers

- added: SCHEMA(name), returns group of schemas
- added: Builders.Schema() - schema supports onGet, onSave, onRemove, onQuery
- added: Builders.Schema() - schema supports workflows
- added: Builders.Schema() - schema supports composer
- added: Builders.Schema() - schema supports transformations
- added: Builders.Schema() - schema supports grouping `Builders.schema('group').get('schema_name)`
- added: Builders.Schema() - schema supports rules
- added: Builders.Schema().make(obj, callback(err, model)) - make object with $save, $remove, $compose, etc.
- added: framework.mail() - is alias for controller.mail()
- added: framework.view(name, [model], [layout], [repository]) - is alias for controller.view()
- added: validate handler contains new parameter model -> (name, value, path, schema, model)
- added: String.prototype.replaceAt(index, character)
- added: String.prototype.parseXML()
- added: String.prototype.toSearch()
- added: async queue - Utils.queue(name, maximumCalls, fn) (for e.g. EMFILE, too many open files)
- added: Utils.isEqual(obj1, obj2, [properties])
- added: ErrorBuilder.prototype.push()
- added: ErrorBuilder.prototype.transform()
- added: ErrorBuilder.prototype.output()
- added: ErrorBuilder.prototype.setTransform(name) - set default transform
- added: ErrorBuilder.addTransform(name, fn, [isDefault]) - add transform
- added: ErrorBuilder.setDefaultTransform() for all ErrorBuilders
- added: Pagination.addTransform(name, fn, [isDefault]) - add transform
- added: Pagination.setDefaultTransform(name) for all Paginations
- added: Pagination.prototype.transform()
- added: Pagination.prototype.setTransform(name) - set default transform
- added: Pagination.prototype.first()
- added: Pagination.prototype.last()
- added: Pagination.prototype.isFirst
- added: Pagination.prototype.isLast
- added: framework.config['allow-custom-titles'] - (default: false)
- added: new option into Mail: rejectUnauthorized (for TLS)
- added: @{log()} and @{LOG()} into views
- added: @{console} (.log, .info, etc.) into views
- added: framework.on('controller-render-head', function(controller) {})
- added: framework.on('controller-render-meta', function(controller) {})
- added: framework.on('init')
- added: framework.merge('/merge.js', '/js/file1.js', '/js/file2.js')
- added: framework supports X-Forwarded-Protocol header
- added: FrameworkImage supports buffer
- added: auto-vendor-prefixes: box-sizing
- added: new flag `noxhr` or `-xhr` because all route contains +xhr as default
- added: config['default-errorbuilder-resource-name']
- added: config['default-errorbuilder-resource-prefix']
- added: config['allow-handle-static-files']
- added: FrameworkCache.get() alias for FrameworkCache.read()
- added: supports creating route without action (framework wraps action)
- added: .md (markdown) into static-accepts
- added: (modules, models, sources and controllers) exports.id instead of export.name
- added: framework.map(url, new_filename)
- added: framework.config['directory-packages'] for packages
- added: (IMPORTANT) PACKAGES (same as modules but package can contain many files in one file)
- added: framework.stats.request.request (requests count)
- added: FrameworkImage.miniature(w, h, bgColor)
- added: Array.first([def])
- added: Array.last([def])
- added: framework.routing(name)
- added: global --> ROUTING(name)
- added: global --> NOOP() empty function (exists: noop(), Utils.noop())
- added: global --> DEBUG boolean property (is the framework in debug mode?)
- added: global --> RELEASE boolean property (is the framework in release mode?)
- added: global --> TEST boolean property (is the framework in test mode?)
- added: global --> F object property (is alias for "framework")
- added: routing supports schemas `*custom-schema/User` and we can define it in flags
- added: String.prototype.parseBool()
- added: String.prototype.parseJSON()
- added: framework.responseImagePrepare(req, res, fnPrepare, fnProcess, [headers])
- added: response.throw400([problem])
- added: response.throw401([problem])
- added: response.throw403([problem])
- added: response.throw404([problem])
- added: response.throw408([problem])
- added: response.throw431([problem])
- added: response.throw500([error])
- added: response.throw501([problem])
- added: response.redirect(url, [permanent])
- added: view supports localization
- added: assertion testing --> framework sets global.assert = require('assert')
- added: module/controller supports dependencies --> exports.dependencies = ['moduleA', 'moduleB'];
- added: framework.dependencies (this object contains all installed total.js dependencies)
- added: controller.translate([text]);
- added: framework.translate([language], text)
- added: @{body.} instead of @{post.}
- added: @{query.} instead of @{get.}
- added: @{files} uploaded files
- added: .manifest to accept list
- added: BINARY added --diff for creating difference between two resources

- updated: framework.resize(), added: options.cache (true/false, default: true)
- updated: the route flag can contian number (TIMEOUT for current route)
- updated: (IMPORTANT) framework doesn't remove subdirectories with files in temporary directory
- updated: (IMPORTANT) all models are loaded after is the framework loaded
- updated: framework.redirect(url, redirectTo, [permanent]) supports relative redirects
- updated: Utils.request(), timeout is possible to add as cookie, headers or encoding
- updated: Utils.request() returns EventEmitter (begin, end, data(chunk, percentage))
- updated: Utils.request() supports auto-redirect if response status code is 301
- updated: Utils.download() returns EventEmitter (begin, end, data(chunk, percentage))
- updated: Controller.proxy() - returns EventEmitter (begin, end, data(chunk, percentage))
- updated: Array.wait(fnItem, fnCallback, removeItems) - default: function doesn't remove items
- updated: Builders.UrlBuilder() -> toString([skipEmpty])
- updated: Number.format([decimals], [separator], [decimalSeparator])
- updated: Date.format([format]) - format is optional, function returns ISO format without "Z"
- updated: response.send(), response.json() - supports ErrorBuilder
- updated: framework.error() (returns a wrapped delegate if error is undefined)
- updated: controller.baa([message]) - read documentation
- updated: Array.where(), Array.find(), Array.remove() - added a new functionality
- updated: @{view(name, [model], [expire], [expire-key])}
- updated: @{cookie(name)} --> read cookie
- updated: framework.mail(address, subject, view, model, callback, replyTo) - added: replyTo
- updated: controller.view(name) can execute without name (controller.viewname contains name according to URL)
- updated: @{post} is deprecated
- updated: @{get} is deprecated
- updated: String.encode(), String.decode()
- updated: (IMPORTANT) changed the arguments in callback for workflow, compose, transform
- updated: BINARY total --translate SOME TEXT create translate identifier

- renamed: config['directory-angular'] to config['directory-public-virtual']
- renamed: config['allow-compress-html'] to config['allow-compile-html']
- renamed: (IMPORTANT) default view layout from `_layout` to `layout`
- renamed: Utils.parseDateExpire() -> Utils.parseDateExpiration()

- removed: JS CSS
- removed: (IMPORTANT) view markup for Angular.js from the core (it will be a module)
- removed: Controller.fileAsync()
- removed: Controller.await()
- removed: Controller.wait()
- removed: Controller.run()
- removed: Controller.complete()
- removed: Controller.jsonAsync()
- removed: Controller.viewAsync()
- removed: Controller.redirectAsync()
- removed: framework.run()

- fixed: LOG()
- fixed: view engine rendering (fixed problem with undefined and null values)
- fixed: buffer exceeded if a framework receives a data
- fixed: if path starts '/' then is view loaded directly from /views/ directory
- fixed: xml parser
- fixed: problem with parsing a bad JSON datas - framework.decrypt();
- fixed: String.prototype.parseDate()
- fixed: path in framework.resize()
- fixed: framework.responseImageWithoutCache()
- fixed: appending .js or .css through @{head()}
- fixed: WebSocket authorization
- fixed: WebSocketClient.req
- fixed: routing (+ asterix routing)
- fixed: controller.cancel() (after framework.emit('controller', ...))
- fixed: view helpers (calling without arguments)
- fixed: dynamic cache of views
- fixed: mail sending
- fixed: clearing temporary directory
- fixed: parse JSON by the JSON route
- fixed: paths in Windows
- fixed: subject encoding in mail (supports UTF-8)
- fixed: sender name encoding in mail (supports UTF-8)
- fixed: Utils.trim()
- fixed: Utils.validation() (problem with schema array)
- fixed: Response.cookie()
- fixed: String.prototype.format() --> null/undefined --> returns empty string
- fixed: Utils.request() problem with unicode
- fixed: framework.assert() problem with unicode
- fixed: XML parsing

- improvements: routing performance

- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/static-file-merge
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/framework-schema-and-validation

======= 1.6.2 (HOTFIX)

- updated: obtaining `req.xhr` before middleware

======= 1.6.1 (HOTFIX)

- added: `ErrorBuilder.errors` list of errors
- added: transform-style, perspective, backface-visibility into the CSS auto-vendor-prefixes
- added: WebSocket supports global middleware
- added: WebSocketClient.isWebSocket (for middleware instead of Response)

- updated: assertion testing (author: @toshipon)

- fixed: controller.callback([view_name]), supports NoSQL Embeded Database
- fixed: WebSocket auto-ping
- fixed: (debug mode) caching of static files
- fixed: global middleware (fixed exception in exception)
- fixed: Mail (problem with secure option, author: @asessa)
- fixed: binary (if debug.pid exists then is deleted and created again)

- improvements: framework (comparison of undefined)

======= 1.6.0

- added: framework.http(mode, [options]) - mode: test, debug or development, release or production
- added: framework.https(mode, [options]) - I recommend to use NGINX as HTTPS proxy
- added: middleware delegate: function(req, res, next, [options], [controller]) { next(); }
- added: middleware to framework.websocket(url, funcInitialize, [flags], [protocols], [allow], [maximumSize], [middleware])
- added: middleware to framework.file([name], [fnValidation], [fnExecute], [middleware])
- added: middleware to framework.use(name), this is global middleware
- added: middleware can add as flag: '#middleware1', '#middleware2'
- added: Response.controller, link to the current controller (if exists)
- added: Response.send([code], body, [contentType])
- added: Response.json(obj);
- added: Response.file(filename, [downloadName], [headers])
- added: Response.stream(contentType, stream, [downloadName], [headers])
- added: Response.continue();
- added: Response.req (current request)
- added: Request.query;
- added: Request.body;
- added: Request.files;
- added: controller.middleware(names, [options], [callback])
- added: controller.body --> is same as Controller.post
- added: controller.query --> is same as Controller.get
- added: controller.isController (for middleware)
- added: controller.json(obj, [beautify], [replacer]) and ErrorBuilder.json([beautify], [replacer]), author: bir <https://github.com/bir>
- added: utils.wait(fnValid, fnCallback, [timeout(default: 5000 ms)], [interval(default: 500 ms)])
- added: new flag: 'xml' in controller.route()
- added: new flag: 'xml' in utils.request()
- added: new flag: 'xml' in framework.assert()
- added: assertion testing: exports.usage = function() {} for custom results of test
- added: assertion testing: exports.disabled = true for disabling current test
- added: assertion testing: priority (example: exports.priority = 1)
- added: routing supports multiple HTTP-VERBS/METHODS together (author: bir <https://github.com/bir>)
- added: routing supports options for middleware, author: bir <https://github.com/bir>
- added: config-test (new config file)
- added: config['default-interval-clear-resources'], default 20 (minutes)
- added: config['default-interval-clear-temporary'], default 3 (minutes)
- added: config['default-interval-precompile-views'], default 61 (minutes)
- added: config['default-interval-websocket-ping'], default 1 (minutes)
- added: config['disable-strict-server-certificate-validation'], default true
- added: create automatically a ping message for websocket clients
- added: global INSTALL(type, name, declaration/url/function, [options], [callback]);
- added: global UNINSTALL(type, name, [options]);
- added: global CONTROLLER(name);
- added: framework.install(type, name, declaration/url/function, [options], [callback]);
- added: framework.uninstall(type, name, [options]);
- added: framework.on('install', function(type, name) {});
- added: framework.on('uninstall', function(type, name) {});
- added: framework.on('route-add', function(type, route) {})
- added: module/model/source/controller: exports.name = 'name ';
- added: module/model/source/controller: exports.version = 'version';
- added: model/source: exports.install = function(framework, options, name) {}
- added: module/model/source/controller: exports.uninstall = function(framework, options) {}
- added: String.prototype.parseDateExpire() - parse expiration date, example: '1 minute', '1 year'
- added: String.parseConfig([default]);
- added: framework.fs.create.database()
- added: framework.fs.rm.database()
- added: controller.isTransfer
- added: Date.compare(date) - for instance of date;
- added: Date.compare(d1, d2);
- added: Controller.date(type, date)
- added: Controller.callback([viewName])
- added: HttpFile.type (HttpFile.contentType is deprecated)
- added: controller.section(name, [value]);

- updated: NoSQL v2.0.8
- updated: String.parseDate('yyyy-MM-dd HH:mm:ss') - time is optional
- updated: module: exports.install = function(framework, options) {};
- updated: (IMPORTANT) INCLUDE(name, [options]), SOURCE(name, [options]) –> object
- updated: (IMPORTANT) SOURCE(name, [options]), framework.source(name, [options]) –> object
- updated: framework.controller(name) - definition was removed (use: framework.install())
- updated: framework.run([http], config, [port], [ip], [options])
- updated: utils.validate(), Builders.validate() –> prepare function (added: schemaName): function(name, value, path, schemaName)
- updated: framework.assert() supports "data" as function (for future data)
- updated: empty-project
- updated: request.signature([key]) - added key param
- updated: middleware function to: function(req, res, next) {}
- update: expiration supports string (framework.cache, response.cookie), example: '1 minute'
- updated: $view(name, model, [expire]), $viewToggle(name, model, [expire]) - added expiration {String}
- updated: controller.validate('schema_name', model);
- updated: Angular.js version
- updated: @{css()} and @{js()} supports multiple values
- updated: @{place()} doesn't add `<script>` tag automatically

- renamed: framework.on('expire') -> framework.on('cache-expire')
- renamed: framework.accepts(extension, [contentType]) -> framework.accept(extension, [contentType])

- fixed: controller.custom()
- fixed: utils.validate()
- fixed: long messages in WebSocket by Andrea Sessa <https://plus.google.com/u/0/104713619368072403016>
- fixed: view engine parser (reported by @tohachan)
- fixed: Builders.prepare()
- fixed: Builders.validate()
- fixed: framework.responseFile()
- fixed: framework.onCompileStatic()
- fixed: framework configuration
- fixed: JS CSS
- fixed: Auto vendor prefixer (CSS)
- fixed: Image.command()

- removed: (IMPORTANT) COMPONENTS()
- removed: (IMPORTANT) prefixes + framework.onPrefix()
- removed: (IMPORTANT) controller.framework (use: framework. instead of self.framework)
- removed: (IMPORTANT) global middleware from controllers
- removed: (IMPORTANT) global module #
- removed: (IMPORTANT) Request.data.get
- removed: (IMPORTANT) Request.data.post
- removed: (IMPORTANT) Request.data.files
- removed: (IMPORTANT) view engine: templates were changed to views
- removed: (IMPORTANT) `@{content()}`
- removed: (IMPORTANT) framework.injectModel() -> framework.install()
- removed: (IMPORTANT) framework.injectModule() -> framework.install()
- removed: (IMPORTANT) framework.injectSource() -> framework.install()
- removed: (IMPORTANT) framework.injectDefinition() -> framework.install()
- removed: (IMPORTANT) framework.injectController() -> framework.install()
- removed: (IMPORTANT) framework.onRoute() - TIP: use middleware
- removed: (IMPORTANT) framework.onRequest() - TIP: use middleware
- removed: (IMPORTANT) controller & module -> exports.request()

- clean code
- improvements: framework

======= 1.5.3 (HOTFIX)

- added: request.query (alias for request.data.get)

- (IMPORTANT) renamed: framework.partial() to framework.middleware()

- fixed: exit code in assertion testing (bug with lowest priority)
- (CRITICAL) fixed: WebSocket event

======= 1.5.2 (HOTFIX)

- added: CONFIG(name) - returns a value from the config file
- added: RESOURCE(name, key) - returns a value from the resource file
- added: utils.parseXML(xml)
- added: config['static-accept'] += '.json'
- added: String.prototype.slug([max])
- added: Array.prototype.orderBy([name], [asc])
- added: framework.on('request', function(req, res) {})
- added: framework.on('websocket', function(req, socket) {})

- updated: assertion testing

- fixed: WebSocket in IE
- fixed: calling global helpers like this: @{someHelper('some-argument')}
- fixed: controller.proxy()
- fixed: request.signature()
- fixed: cache.read() - problem with exact expiration
- fixed: "options" route flag
- fixed: configuration (fixer: @peterkc)
- fixed: schemas
- fixed: assertion testing
- fixed: view @{foreach ....}

======= 1.5.0 & 1.5.1

- added: TOTAL.JS PACKAGE MANAGER (new binary: tpm === [t]otal.js [p]ackage [m]anager)
- added: JS CSS (important: removed LESS)
- added: framework.noCache(req, [res])
- added: request.noCache()
- added: response.noCache()
- added: new config file (this file is loaded in a debug and in a release mode): /some-app/config
- added: String.prototype.startsWith(text, [ignoreCase]);
- added: String.prototype.endsWith(text, [ignoreCase]);
- added: picture auto resizer: framework.resize(url, [width], [height], [extensions], [path], [options])
- added: .webm into the config['static-accepts']
- added: in views - into the repository, model, user, session, get, post, global, config can assign some value: @{repository.name = 'total.js'}
- added: in views - supports @{foreach [property] in [array]} ... @{end}
- added: in views - supports nested conditions
- added: in views - supports inline helpers
- added: in views - supports sections
- added: controller.throw400([problem])
- added: controller.throw401([problem])
- added: controller.throw403([problem])
- added: controller.throw404([problem])
- added: controller.throw500(error)
- added: controller.throw501([problem])
- added: request.signature()
- added: Builders.create(schemaName)
- added: controller.exception
- added: framework.onMail(address, subject, body, callback)
- added: controller.mail(address, subject, viewName, [model], [callback])
- added: controller.transfer(url, [flags])

- updated: config['default-websocket-encodedecode'] - default: true
- updated: @{options(array/object)} - supports Object
- updated: utils.request(url, flags, [data], callback, cookies, headers, encoding, timeout)
- updated: utils.download(url, flags, [data], callback, cookies, headers, encoding, timeout)
- updated: framework.eval(string/url/function) - this function supports eval code from another URL
- updated: assertion testing (new features)
- updated: framework.isProcessed(filename or request)
- updated: framework.isProcessing(filename or request)
- updated: binary (some changes and improvements)
- updated: template engine
- updated: ErrorBuidler.toString([delimiter])

- renamed: ErrorBuilder.length -> ErrorBuilder.count

- fixed: framework.isProcessed()
- fixed: binary (test.js in empty-project)
- fixed: @{ngCommon()}
- fixed: @{ngStyle()}
- fixed: measure JPG - extended buffer
- fixed: utils.validate()
- fixed: Mail sender (problem with TLS)

- removed: IMPORTANT: old template engine was removed from templates
- removed: IMPORTANT: LESS CSS

- improvements: views
- improvements: templates

- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/controller-transfer
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/controller-mail
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/css-jscss
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/routing-resize
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/views-place-sections
- EXAMPLE (UPD): https://github.com/totaljs/examples/tree/master/views
- EXAMPLE (UPD): https://github.com/totaljs/examples/tree/master/views-custom-helper

======= 1.4.0

- added: new global methods: INCLUDE() - framework.source(), SOURCE() - framework.source(), MODEL(name) -> framework.model(), MODULE(name) -> framework.module(), DATABASE() -> framework.database()
- added: unauthorize flag
- added: config['allow-compress-html'] (default: true)
- added: controller.language (read from request.language)
- added: framework sets response['Content-Length'] for some static files

- updated: debug.js (added "source")

- fixed: View not found (message includes full filename)
- fixed: @{ngFilter()}
- fixed: routing priority
- fixed: config['allow-gzip']
- fixed: utils.decode()
- fixed: utils.request()

- renamed: String.prototype.link([max]) to -> String.prototype.linker([max])

- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/font-awesome
- EXAMPLE (UPD): https://github.com/totaljs/examples/tree/master/websocket
- EXAMPLE (UPD): https://github.com/totaljs/examples/tree/master/angularjs-websocket
- EXAMPLE (UPD): https://github.com/totaljs/examples/tree/master/config-debug-release

- MODULES (NEW): https://github.com/totaljs/modules/tree/master/twitter

======= 1.3.1 (HOTFIX)

- updated: angular.js version (v1.2.15)

- fixed: partial views rendering in the layout
- fixed: internally utils

======= 1.3.0

- added: supports CoffeeScript
- added: framework.isWindows (readonly, boolean)
- added: framework.isCoffee (readonly, boolean)
- added: framework.config['directory-source'], great for business logic
- added: framework.injectSource(name)
- added: framework.source(name), call a business logic
- added: new global methods include() and source() are linked into the config['directory-source']
- added: config['default-websocket-encodedecode'] - encodeURIComponent && decodeURIComponent (IMPORTANT: default: false)
- added: Builders.ErrorBuilder.resource(filename, prefix) - can change resource filename or prefix
- added: new global variables - Builders, Mail, Utils
- added: Builders.validate(schemaName, model) - returns ErrorBuilder from everywhere (uses framework.resource)
- added: allowed controllers in subdirectories
- added: utils.assign(obj, path, value/function) - read more in documentation

- updated: Builders.schema(name, obj, [defaults], [validator]) - validator is new
- updated: Builders.validation(name, [arr] or [function])
- updated: controller.find(id or function)
- updated: utils.copy(source, [target]);
- updated: WebSocket.close([id], [message], [code]);
- updated: WebSocketClient.close([message], [code]);

- fixed: Controller properties on the WebSocket connections
- fixed: binary
- fixed: utils.validation()
- fixed: multipart upload (problem with multiple values)
- fixed: layout in partial views (from the controller)
- fixed: Windows path

IMPORTANT:
rewritten: WebSocket + WebSocket supports: text, JSON, binary, ping + pong

- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/angularjs-bootstrap
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/bootstrap
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/framework-schema-validation
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/webrtc (unfinished but for an idea)
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/framework-business-logic-source
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/framework-inject-business-logic-source

======= 1.2.3-1 (HOTFIX)

IMPORTANT:
- fixed: [authorize] flag
- updated: utils.copy(source, target), previous: utils.copy(target, source);

======= 1.2.3

- added: view @{helper('name', [arg1], [arg2], ...)}
- added: controller.helper(name, [arg1], [arg2], ...)
- added: controller.change(message)
- added: new markup /*auto*/ for auto-vendor-prefixes
- added: [authorize] flag
- added: @{ng(name)}
- added: @{ngTemplate(name, [id])}
- added: @{ngController(name)}
- added: @{ngFilter(name)}
- added: @{ngService(name)}
- added: @{ngDirective(name)}
- added: @{ngResource(name)}
- added: @{ngCommon(name)}
- added: @{ngInclude(name)}
- added: @{ngStyle(name)}
- added: @{ngLocale(name)}
- added: @{helper(helperName, [param1], [param2], ...)}
- added: config['directory-angular']
- added: config['angular-version']
- added: config['angular-i18n-version']
- added: binary: total -angular [or] total -a
- added: framework.change(message, [name], [uri], [ip]);
- added: framework.changes;
- added: framework.on('change', message, [name], [uri], [ip]);

IMPORTANT:
- added: routing with asterix, example: framework.route('/subpage/*', ...);

IMPORTANT:
- updated: [logged] flag is obsolete, new flag: authorize
- updated: [unlogged] flag is obsolete (without flag)

- fixed: helpers
- fixed: static files caching in debug mode

- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/angularjs
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/angularjs-websocket
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/angularjs-common
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/angularjs-mongodb-rest-resources
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/angularjs-routing
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/changes
- EXAMPLE (UPD): https://github.com/totaljs/examples/tree/master/routing
- EXAMPLE (UPD): https://github.com/totaljs/examples/tree/master/problems

======= 1.2.1-1 (NPM problem)
======= 1.2.1   (NPM problem)
======= 1.2.0

- new: NEW TEMPLATE ENGINE 2.0

- added: route to website, route to file and route to websocket is possible everywhere
- added: node harmony functions (see example)
- added: gc() into framework.on('service')
- added: config['allow-performance'] true/false (default, false)
- added: config['default-image-converter'] (default "gm" - GraphicsMagick, another possibility: "im" - ImageMagick)
- added: new views/templates/contents cache
- added: framework.problem(message, [name], [uri], [ip]);
- added: framework.on('problem', message, [name], [uri], [ip])
- added: framework.problems;
- added: req.language;
- added: controller.title()
- added: controller.description()
- added: controller.keywords()
- added: controller.problem(message)
- added: controller.memorize(key, expire, fnTo, [fnFrom]) - cache for controller.view(), controller.json(), controller.plain()
- added: Array.prototype.trim()
- added: Array.prototype.wait()
- added: Array.prototype.async()
- added: String.prototype.hash([type])
- added: Pagination.next([format]), Pagination.prev([format])
- added: utils.isRegExp(obj)

- updated: license
- updated: parsing of configuration: # and // is a comment
- updated: auto-vendor-prefixes (updated linear-gradient prioraty according to w3schools.com)
- updated: websocket.send(message, [id], [blacklist]), id and blacklist can be a function
- updated: controller.view400([problem])
- updated: controller.view403([problem])
- updated: controller.view404([problem])
- updated: controller.view501([problem])
- updated: controller.plain(contentBody, [headers]) - added JSON serialized for objects
- updated: controller.json(obj, [header], [beaufity]);
- updated: framework.usage([detailed]) - returns OBJECT
- updated: FrameworkCache.removeAll(search or regexp-pattern)
- updated: @{sitemap} is currently: @{sitemap()}
- updated: PageBuilder
- updated: @{template()} and controller.template() - default repository is controller repository

- removed: border-radius and box-shadow from auto-vendor-prefixes

- obsolete: Array.prototype.waiting()

- fixed: controller.view500()
- fixed: controller.proxy(), utils.request(), utils.download() - problem with NGINX, missing Content-Length header
- fixed: WebSocket skips throwing error (socket close, EPIPE)
- fixed: mail (SPAM fixes)
- fixed: buffer.write (new node => 0.11.11)
- fixed: IP and heroku deploy

- rewritten: view engine
- rewritten: template engine (according to view engine)

- improvements: views
- improvements: templates
- improvements: partial routing

IMPORTANT: framework.usage() returns OBJECT
IMPORTANT: markup of template is OBSOLETE. Templates support only view markup.

- EXAMPLE (NEW): https://github.com/totaljs/demo
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/heroku
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/controller-memorize
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/generators
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/routing-inline
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/problems
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/mongoose
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/pagination
- EXAMPLE (UPD): https://github.com/totaljs/examples/tree/master/templates

======= 1.1.0

- added: new feature COMPONENTS
- added: new feature MODELS
- added: framework.id
- added: framework.isDebug
- added: framework.isTest
- added: framework.model(name)
- added: framework.controller(name, definition)
- added: framework.functions
- added: framework.assert(name, callback)
- added: framework.assert(name, url, callback, method, data, headers, xhr)
- added: framework.injectComponent(name, url)
- added: framework.injectModel(name, url)
- added: framework.path.components([filename])
- added: framework.path.models([filename])
- added: controller.model(name)
- added: controller.$model - (property contains current model)
- added: flag: OPTIONS

- updated: framework.usage([detailed])
- updated: BINARY
- updated: WebSocket skips throwing error (ECONNRESET)

- fixed: framework.controller(name)
- fixed: // char in views and templates
- fixed: assertion testing
- fixed: mail attachment (fixed: line too long)
- fixed: "@charset" keyword in CSS
- fixed: cache-control header
- fixed: HTML conditional comments in views
- fixed: controller.cors(), fixed problem with preflight
- fixed: controller.empty() -> added 204 http status code

improvements: views (in release mode)

- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/components
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/models
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/minimal
- EXAMPLE (NEW): https://github.com/totaljs/examples/tree/master/framework-functions
- EXAMPLE (UPD): https://github.com/totaljs/examples/tree/master/cors
- EXAMPLE (UPD): https://github.com/totaljs/examples/tree/master/cluster

======= 1.0.2 (HOTFIX)

- fixed: mail message (problem with diacritics in OUTLOOK)

======= 1.0.1 (HOTFIX)

- added: advanced template conditions

- fixed: builders.prepare()
- fixed: binary (command-line tools)
- fixed: views conditions