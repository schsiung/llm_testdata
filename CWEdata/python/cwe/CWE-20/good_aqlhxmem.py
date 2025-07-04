Version 2.23.2, 2018-09-07

  Fixes:
  * Fix problem with empty username (#1227)

Version 2.23.2, 2018-09-07

  Fixes:
  * Fix problem with empty username (#1227)

Version 2.23.1, 2018-09-06

  Fixes:
  * Fix PassOnNoUser in combination with event handler (#1206)
  * Fix loading of Event handler detail view (#1210)
  * Fix Challenge-Response login at Web UI (#1216)
  * Fix triggerchallenge to only use active tokens (#1217)
  * Write all installed package to diagnostics file and
    also write the resolver config in privacyidea-diag

Version 2.23, 2018-08-29

  Features:
  * Add periodic tasks including a privacyidea-cron script. (#992) 
  * Add task module "Simple Stats" to generate time series of certain 
    important statistics values in privacyIDEA (#1105)
  * Add task module "Event Counter" that allows to create time series of 
    any arbitrary event. (#1029)
  * New token type: TAN list, that can also import a prefefined
    list of TANs (#1057)
  * Add Event Handler Pre-Handling, that e.g. allows for
    even more easy token enrollment concepts (#747)

  Enhancements:
  * Improve performance by adding SQL pooling for SQL Audit 
    and SQL Resolvers. (#1167, #1140)
  * Improve SQL Resolver to also verify bcrypt-hash passwords (#1172)
  * Allow multiple WHERE conditions in SQL Resolver (#1039)
  * Allow objectGUID as loginname in LDAP resolver for better 
    ownCloud support (#1076)
  * Add command in pi-manage to dump audit log information (#1120)
  * Add script to allow generation of AES keys on HSM (#1159)
  * Improve recovery mechanism from a lost HSM connection (#1069)
  * Improve Debug Logging to hide passwords in SQL connect strings (#1162)
  * Add script for easy privacyIDEA standalone setup (#1093)
  * ldap3, pyasn1, croniter updated in Ubuntu Launchpad repo (#1085)
  * Add a script that easily gathers support and diagnostic information (#829)
  * Add event handler management to pi-manage (#1119)
  * Allow to customize the challenge text for challenge response tokens (#1096)
  * Add user information to OATH CSV token import file (#998)
  * Improve migration scripts from LinOTP to also update counter values (#1075)
  * Add priority to policies to avoid contradicting policies (#1031)
  * The token event handler now can delete tokeninfo (#988)
  * Make the import of OATH CSV token specific, so that each 
    tokentype can define its own import strategy (#1066)
  * The Event Counter module now allows to decrease the counter (#991)
  * Allow time deltas to also contain seconds (#1033)

  Fixes:
  * Allow to use unicode passwords with non-ascii characters for the
    connect string in SQL Resolvers (#1181)
  * Fix problem that a wrong password hash was used, if user is created
    in SQL Resolver (#1114)
  * Fix performance issue with slow token listing (#1123)
  * Fix the QR code regeneration if the user already has the maximum number
    of allowed tokens (#1153)
  * Fix problem with privacyidea-pip-update in case of pip version 10 (#1128)
  * Fix problem if max_token_per_user was higher than 9 (#1117)
  * Fix hash algorithm in QR Code (#1088)
  * Set focus in username field in the login dialog (#205)
  * Fix disappearing scrollbar issue (#1020)
  * Fix import of SHA256 tokens (#1061)
  * Convert string values to unicode in the database model to 
    avoid misleading "error" messages (#1000)
  * Fix truncation of audit log in case of authentication failure (#1034)
  * Shorten audit information to fit into the database column (#1037)
  * Fix the RADIUS configuration test (#1042)


Version 2.22.1, 2018-04-20

  Fixes in WebUI:
  * Allow to display the messages of several C/R tokens (#995, #1004)
  * Use ng-if instead of ng-show to avoid errors in the javascript console (#963)
  * Remove reference to not-used system.addons.js to avoid errors in the javascript console
  * Remove reference to not-used system.addons.html to avoid errors in the javascript console
  * Use ng-src instead of src to avoid errors in the javascript console
  * Avoid request to /false is image is not existing - avoid error in the javascript console
  * Fix handling of U2F token in the WebUI login
  * Require serial number in the assignment form (#1011)
  * Fix PIN comparison in token enroll and token assign (#1010)
  * Fix the empty username in token enroll or assign (#918)

  Fixes in Server:
  * Add check for serial number present (#1011)
  * Fix validation of OCRA and TiQR token (#1008)
  * Add retry to cope with HSM issues (#1003)
  * Fix unicode in resolverconf database table with Oracle (#999)


Version 2.22, 2018-03-27

  Features:
  * Add automatic offline refill for Offline OTP tokens (#839)
  * Return realm and resolver of the user and allow mapping
    group membership to the RADIUS protocol (#896)
  * Add new tokenkind (hardware, software, virtual) for all tokens (#828)
  * Support Vasco tokens via Import and via Web Enrollment (#904, #903, #891)
  * Add arbitrary tokeninfo field to authorization policy (#873)
  * New SMPP SMS provider (#878)
  * New event handler Counter for counting events for statistics and monitoring (#951)

  Enhancements:
  * Enhance the statistics possibilities in WebUI (#950)
  * Allow reencryption of the database by importing PSKC to
    a new database (#940)
  * Allow token janitor to export "PW" token type to PSKC (#942)
  * Also export and import the counter values of HOTP/TOTP to PSKC (#943)
  * SMS token can dynamically read phone number from user source (#932)
  * Email token can dynamically read email address from user source (#932)
  * Add policy to ignore the validity of a U2F attestation certificate (#926)
  * Improve the speed of the LinOTP migration script to cope with tens of
    thousands of tokens (#914)
  * pi-manage can create API tokens with a chosen validity time (#931)
  * Allow user to set token description for HOTP and TOTP tokens 
    during enrollment (#928) (Thanks to Taylor Chase for this contribution!)
  * Add timeout to SMTP server configuration (#919)
  * Allow complex email templates for email tokens (#684)
  * LDAP resolver now supports arbitrary multivalue attributes (#881)
  * Allow Event Handler to match failing authentication (#971)

  Fixes:
  * Several fixes in LDAP resolver to cope with ldap3/pyasn1 version issues and
    other issues (#911, #980, #982, #887)
  * Skip misguiding LDAP error "AttributeError NonType" in log file (#948)
  * Add missing validity time in /validate/check response for email tokens (#946)
    (Thanks to Kleber Rocha/klinux for this contribution!)
  * Fix the handling of the SMS expiration date (#937)
  * Fix serial length in the audit table to match the serial length in the token table (#929)
    (Thanks to Salvo Rapisarda for this contribution!)
  * Fix Mail content sent by email token is rendered as attachment (#915)
  * Fix Editing SMTP Server definition clears the password (#923)
  * Fix pi-manage backup crash (Thanks to Pavol Ipoth for this contribution!)


Version 2.21.4, 2018-01-24

  Fixes:
  * HTTP Timeout of HTTP SMS Gateway (#889)
  * Remove console.log from webui


Version 2.21.1, 2018-01-09

  Fixes:
  * Allow to use TLS1.1 and TLS1.2 for LDAP Resolver (#876)

Version 2.21, 2017-12-20

  Features:

   * Allow export of tokens to PKSC file (#790)
   * Implement two-step enrollment of HOTP/TOTP tokens (#797, #863, #865, #866)
   * Allow WebUI customization via policies (#795)

  Enhancements:

   * Add script to decrypt safeword tokens
   * Allow using tags in the tokenissuer of smartphone tokens
   * Try to re-establish lost HSM connections (#787)
   * Allow to rotate audit log based on multiple conditions (#780, #833)
   * Add dry-run option to audit log rotation (#801)
   * Allow dots in realm names (#808)
   * Mark empty but required fields in WebUI (#810)
   * Display success information after PIN is set (#822)
   * Add further tags to the user notification event handler (#824)
   * Add number of users to the subscription view (#800)
   * Add HTTP/HTTPS proxy settings to HTTP SMS Provider (#835)
   * Federation Handler allows to forward the authorization token (#838)
   * Use token janitor to export a user list (#852)
   * Use HSM for random key generation if possible (#783)
   * HTTP SMS Provider now takes TIMEOUT parameter into account
   * Allow to configure length of generated serial numbers (#583)

  Fixes:

   * Fix handling of only_realm option in token event handler (#809)
   * Fix scrollbar issues in WebUI (#806, #823)
   * Fix OTP counter of offline token (#840)
   * Fix conflicts between check_tokentype and passthru policies (#846)
   * Properly reset tab tile after session has been locked (#850)
   * Fix handling of fixed key size during enrollment (#820)
   * Make sure that only active policies are honored (#825)
   * Fix various bugs with non-ASCII data (#754)
   * Fix failcounter_clear_timeout (#831)
   * Only remove apache host definitions on first installation (#834)

Version 2.20.1, 2017-10-30

  Fixes:
   * /token/init allows to pass otpkey AND genkey=false (#793)
   * Cast date to string, to fix audit search for postgresql (#786)
   * Optimize the LDAP Resolver Redundancy to avoid LdapServerPoolExhaustedErrors (#802)
   * Preset default realm in token enrollment (#804)
   * Fix PassOnNoUser and PassOnNoToken (#798)
   * Fix genkey=0 error during token enrollment (#793)

Version 2.20, 2017-09-27

  Features:

   * New Token-Type OCRA and DisplayTAN to support 
     transaction signing for online banking (#767)
   * Federation Handler allows to forward authentication
     requests and other REST API requests to a child
     privacyIDEA system (#711)
   * Improved Subscription Handling 
   * Allow to login with multiple loginnames (#713)
   * Authentication Cache policy (#729)

  Enhancements:

   * !!!NOTE!!! following policies now also honor the resolvers,
    which they did not previously:
    (AUTH, challenge_response), (AUTH, otppin), 
    (AUTHZ, auth_max_success), (AUTHZ, auth_max_fail),
    (AUTHZ, last_auth), (WEBUI, login_mode),
    (ENROLL,losttoken_pw_contents), (ENROLL,losttoken_validity),
    (ENROLL, losttoken_pw_len) (#736)
   * User can regenerate the QR Code during enrollment
     of smartphone app (#766)
   * Administrator can define remote privacyIDEA servers
     centrally (#711)
   * Events can now be ordered. This is important for the
     federation handling (#711)
   * Specify the hash algorithm that is used to save 
     SQL users passwords (#745)
   * Add welcome dialog for administrator (#716)
   * Allow creating oracle DB (#752)
   * Event Handler can use timestamps and time offsets in
     conditions (#741)
   * Use challenge/response token to unlock the screen of 
     the web UI (#702)
   * Support multiple challenge/response token at the same
     time (#722)
   * GPG keys are generated during package installation and
     show the GPG key in the import dialog (#742)
   * Failcounter clearing timeout in UI (#719)
   * Allow to send challenge data (like banking transaction) in
     email text and SMS text.

  Fixes:

   * Set default loglevel from DEBUG to INFO (#765)
   * Fixed PIN logging, which could lead to exceptions
   * Fixed unicode handling in log messages
   * Make LDAP Resolver work with utf8 (#738)
   * User can only choose hash algo according to policy (#723)
   * Add time period 30/60s to rollout URI (#744)
   * Fix deprecation warning for flask_migrate (#734)
   * Allow multiple tries for challenge/response (#708)
   * Fix problem with certificate serial number (#737)


Version 2.19.1, 2017-07-02

  Enhancements:

  * Add "pi-manage policy load" and "pi-manage policy export". (#721)
  * Allow customization via pi.cfg file.
  * Add {username} and {realm} as tags for the tokenhandler. (#735)

 Fixes:

  * Fix pi-manage file permission for backup
  * Fix search for resolver in audit log
  * Allow to read old legacy time from validity period
  * Fix wrong enddate with lost_token
  * Fix typos
  * Improve documentation for yubikey
  * Improve documentation for cache decorator
  * Improve documentation for webui policy


Version 2.19, 2017-05-25

  Features:
  * Add generic User Cache to speed up authentication (#670, #683)
  * Support multiple challenge-response tokens with the same PIN (#654)
  * Restrict U2F registration based on assertion certificte (#648)
  * Restrict authentication with U2F devices based on assertion 
    certificate (#648)
  * Add privacyidea-token-janitor script, that can clean orpaned or 
    expired tokens (#692)
  * Add API for mutual key generation during enrollment for easy 
    Smartphone App development by introducing a generic 
    2-step-rollout process (#627)
  * Add /validate/radiuscheck which works with rlm_rest and only uses 
    HTTP return codes. (#703)

  Enhancements:

  * Allow to unset token validity period and other tokeninfo
    fields (#691)
  * Add a quick-resolver test for LDAP resolvers (#688)
  * Add additional tokeninfo tags {client_ip}, {ua_browser}, 
    {ua_string} in token handler (#687)
  * Allow to set decription of U2F tokens during enrollment (#685)
  * Reduce the number of LDAP requests to increase authentication
    performance (#664, #655, #650)
  * Realm administrator is only allowed to see actions on this allowed
    user realms (#663)
  * Add audit rotation to pi-manage (#657)
  * Speed up Audit Log calls by adding a second index (#656)
  * Allow to either lock und logout the UI after timeout (#653)
  * Allow string format {user}, {realm}, {serial}, {surname} in 
    tokenlabel policy (#646)
  * Move to a consistent time format for validity period and all other 
    user specific times also containing the timezone (#644)
  * Add TLS certificate check to LDAP machine resolver (#638)
  * Make TLS certificate the default option in LDAP resolvers (#639)
  * Allow to use privacyIDEA ownCloud App without subscription
    file with up to 50 users.

  Fixes:
  * Fix the datepicker for the token validity period (#644 / #693)
  * Fix LDAP resolver to respect all boolean configuration 
    options (#658)
  * Fix serial number in challenge response validation response (#649)

  Commits added in version 2.19 by:
  (In the order of appearance)
  * Cornelius Kölbel
  * Quynh Nguyen
  * Friedrich Weber
  * Quoc Doan
  * blinkiz
  * Bernd Nicklas

Version 2.18, 2017-03-09

  Features:
  * Allow to disable the WebUI (#605)
  * The WebUI will lock the screen after a timeout instead of  
    logging out the user. This allows to easily continue
    configuration work. (#621)
  * Improve the creation and handling of local CAs (#630, #632, #633)
    Allow certificate template for certificates with different runtime
    and x509v3 extensions.

  Enhancements
  Enhancements in Policies:
  * Allow regular expressions in usernames in policies. (#581)
  * Improve Policy creation with pi-manage from JSON formatted file.
  * WebUI: Add action grouping in policies.
  * WebUI: Add action filter in policy view.
  * Allow token specific PIN policies: The SPASS token can now
    have dedicated PIN policies.
  * Add PIN policies for administrators during enrollment and
    during assignment.
  * Add WebUI policy: only search on enter being pressed (#617)

  Enhancements in Event Handlers:
  * Add token_validity_period condition to event handlers. (#618)
  * Add additional options in token handler when creating 
    SMS, Email or mOTP tokens.
  * Allow tokenhandler to set tokeninfo field.
  * Allow tokenhandler to set syncwindow.
  * Add event handler condition for count_auth_success and
    cound_auth_fail
  * Add event handler condition for last_auth.
  * Improve Audit Log for Event Handler. Each triggered action 
    will now also create an audit entry. (#609)
  * Allow the use of {current_time} in tokenevent handler. (#628)

  Enhancements in LDAP Resolver:
  * Upgrade dependency to ldap3 version >=2.1.1 to improve LDAP 
    performance in regards to redundancy and security
  * LDAP Resolver: Use get_info in bind requests to avoid querying 
    of subschema. (#585)
  * LDAP Resolver: Support StartTLS over Port 389.
  * Simplify LDAP Resolver: Remove username from Attribute Mapping.
  * Simplefy LDAP Resolver: Remove reverse filter.

  Misc Enhancements:
  * Automatically add user's mobile number if tokentype is SMS.
  * Add example configuration for GTX messaging SMS gateway.
  * Add a script "privacyidea-get-unused-tokens" to find
    unused tokens
  * WebUI: Add a busy indicator spinner.
  * Improve the pi-manage script in regards to backup and restore.
    Let you choose whether to backup encryption key or not.
    Better handling for individual pathes. (#626, #623)

  Fixes:
  * LDAP Resolver: Verify SSL Certificate (Security)
  * LDAP Resolver: Allow special characters in NTLM password
  * LDAP Resolver: Allow searching for users with German umlaut
  * Remove the "unsafe" notation in the QR-Code link, so that 
    a smartphone may import the key during HOTP/TOTP token enrollment
    by clicking the link. (#620)
  * Use defusexml to avoid XML bombs on token import (Security)
  * Replace eval with ast.literal_evel (Security)
  * Add missing attributes for U2F tokens in 
    validate/triggerchallenge API
  * Let /validate/triggerchallenge write to audit log.
  * Fix mangle policy for users and realms
  * Avoid logging of password in check_user_pass in debug level 
    (level=10)
  * Set encrypted PIN on enrollment for certificate tokens (#625)
  * Remove unused policy action "motp_webprovision"
  * Allow emailtext policy in triggerchallenge API (#642)
 

Version 2.17, 2016-12-29

  Features
  * Token Handler. Using the token handler the administrator
    can defined actions in response to events, to modify tokens
    like deleting, modifying, initilizing... tokens (#532)
  * Script Event Handler or Shell Event Handler allows to
    trigger an external shell script, if some event occurs. (#536)
  * Add additional endpoint to trigger a challenge response
    like the sending of an SMS, if the token PIN is not
    available (#531)
  * Policy Handling to also check for secondary resolvers of
    a user. This way a user can authenticate with his primary 
    resolver but policy will also work for secondary resolvers (#543)

  Enhancements
  * The event handler conditions also determine a serial number
    even if there is no serial number in the request:
    If the user from the request only has one token assigned. (#571)
  * Allow event definitions to be disabled (#537)
  * Allow event to be addressed by a destinct name (#522)
  * Improving LDAP performace by addressing different functionality 
    of ldap3 version 1.x and 2.x. (#549)
  * Improve SQL Audit by adding the SQL Audit table to the schema.
    Table is not created during HTTP request. (#557)
  * Limit audit log entry age. Users may only view audit
    log entries up to a certain age. (#541)
  * Add checkbox to only display used actions in a policy (#573)
  * In event handler: Use serial number of a user's token if the 
    user has only one token (#571)
  * Download a filtered audit log (#539)

  Fixes
  * Add missing token serial number to audit log if token is
    deletes (#546)
  * Fix event handler saving (#551)
  * HttpSMSProvider accepts status codes 201 and 202 in addition
    to 200 (#562)
  * Fix checkbox bug in NOREFERRALS of LDAP resolver (#563)
  * Add documentation for SMS provider (#566)
  * Remove 301 redirects from WebUI (#576)


Version 2.16, 2016-11-10

  Featurs
  * Add HSM support via AES keys (#534)
  * Improved Event Handler for flexible notification (#511)
  * Signed subscription files for adding and checking
    for extra functionality during authentication request (#502)

  Enhancements
  * Allow additional filter attributes in the Audit Log (#519)
  * Show or hide realms in the login dialog via policy (#517)
  * Improve UI if admin is not allowed for certain actions (#516, #512)
  * Disable OTP PIN during enrollment via policy (#439)
  * Allow automatic sending of registration code via email (#514)

  Fixes
  * Allow compatibility with ldap3 >= 2.0.7 (#533 #535)
  * Fix problem with Notification when no tokenowner is available (#528)
  * Fix confusion of client HTTP parameters (#529)
  * Fix enabled flag with certain database types (#527)
  * Catch error in case of faulty overrideClient definition (#526)
  * Truncate Audit lines, that are too long for the DB table (#525)


Version 2.15, 2016-10-06

  Features
  * Client Overview. Display the type of the requesting
    authenticating clients (#489)
  * Support for NitroKey OTP mode (admin client)

  Enhancements
  * Performance enhancements using Caching singletons for
    Config, Realm, Resolver and Policies
  * Allow configuration of the registration email text (#494)
  * Return SAML attributes only in case of successful
    authentication (#500)
  * Policy "reset_all_user_tokens" allow to reset all
    failcounters on successful authentication (#471)
  * Client rewrite mapping also checks for
    X-Forwarded-For (#395, #495)

  Fixes
  * Fixing RemoteUser fails to display WebUI (#499)
  * String comparison in HOSTS resolver (#484)


Version 2.14, 2016-08-17

  Features
  * Import PGP encrypted seed files
  * Allow UserNotification for user actions
  * Allow UserNotification on validate/check events,
    to notify the user on a failed authentication or
    a locked token.

  Enhancements
  * Add thread ID in REST API Response
  * Performance improvement: Cache LDAP Requests #473
  * Performance improvement: Optimize resolver iteration #474
  * Add "Check OTP only" in WebUI
  * Improve "get serial by OTP" in WebUI
  * Add script to get serial by OTP

  Fixes
  * Restrict GET /user for corresponding admins #460


Version 2.13, 2016-06-30

  Features
  * Allow central definition of SMS gateways 
    to be used with tokens. #392
  * User SMS for User Notificaton Event Handler. #435
  * Add PIN change setting for each token. #429
  * Force PIN change in web UI. #432

  Enhancements
  * Performence enhancements
    * speed up loading of audit log in web UI.
    * avoid double loadin of tokens and audit entries in web UI. #436
  * Additional log level (enhanced Debug) to even log passwords in 
    debug mode.
  * Add new logo. #430
  * Add quick actions in the token list: reset failcounter, 
    toggle active. #426
  * REST API returns OTP length on successful authentication. #407
  * Add intelligent OverrideAuthorizationClient system setting,
    that allows defined proxies to reset the client IP. #395

  Fixes
  * Display token count in web UI. #437
  * Use correct default_tokentype in token enrollment. #427
  * Fix HOTP resync problems. #412
  


Version 2.12, 2016-05-24

  Features
  * Event Handler Framework #360
  * local CA connector can enroll certificates
    for users. Users can download PKCS12 file. #383
  * Add and edit users in LDAP resolvers #372
  * Hardware Security Module support via PKCS11
  * Time dependent policies #358

  Enhancements
  * Policy for web UI enrollment wizard #402
  * Realm dropdown box at login screen #400
  * Apply user policy settings #390
  * Improve QR Code for TOTP token enrollment #384
  * Add documentation for enrollment wizard #381
  * Improve pi-manage backup to use pymysql #375
  * Use X-Forwarded-For HTTP header as client IP #356
  * Add meta-package privacyidea-mysql #376

  Fixes
  * Adduser honors resolver setting in policy #403
  * Add documentation for SPASS token #399
  * Hide enrollment link (WebUI) is user can not enroll #398
  * Fix getSerial for TOTP tokens #393
  * Fix system config checkboxes #378
  * Allow a realm to be remove from a token #363
  * Improve the date handling in emails #352
  * Sending test emails #350
  * Authentication with active token not possible if
    the user has a disabled token #339

 
Version 2.11, 2016-03-29

  Features
  * RADIUS Servers: Allow central definition of RADIUS servers
  * RADIUS passthru policy: Authentication requests for users
    with no tokens can be forwarded to a specified RADIUS server

  Enhancements
  * Allow objectGUID in LDAP-Resolver of Active Directory
  * Use paged searches in LDAP. LDAP resolver will find all
    users in the LDAP directory.
  * Allow privacyIDEA instance name to be configured for
    the AUDIT log
  * Allow special characters in LDAP loginnames and passwords
  * Add arbitrary attributes to SAML Authentication response
  * Enhance the handling of YUBICO mode yubikeys with the
    YUBICO API. The prefix is handled correctly.
  * Allow in get_tokens to be filtered for tokeninfo.
  * Add paged search in LDAP resolver. This allows responses
    with more than 1000 objects.

  Fixes
  * Fix SMTP authentication
  * Fix Enrollment Wizard for non-default realm users
  * Registration process: If an email can not be delivered,
    the token is deleted, since it can not be used.


Version 2.10, 2016-02-11

  Features
  * User Registration: A user may register himself and thus create
    his new user account.
  * Password Reset: Using a recovery token a user may issue a 
    password reset without bothering the administrator or the 
    help desk.
  * Enrollment Wizard for easy user token enrollment
  * SMTP Servers: Define several system wide SMTP settings and use
    these for 
    * Email token,
    * SMTP SMS Provider, 
    * registration process,
    * or password reset.

  Enhancements
  * Ease the Smartphone App (Google Authenticator) rollout.
    Hide otplen, hash, timestep in the UI if a policy is defined.
  * Add import of Aladdin/SafeNet XML file.
  * Add import of password encrypted PSKC files.
  * Add import of key encrypted PSKC files.

  Fixes
  * Support LDAP passwords with special non-ascii characters.
  * Support LDAP BIND with special non-ascii characters.
  * Fix problem with encrypted encryption key.
  * Fix upgrading DB Schema for postgresql+psycopg2.
  * Fix UI displaying of saved SMS Provider.
  * Do not start challenge response with a locked/disabled token.

Version 2.9, 2015-12-21

  Features
  * New token type: Security questions or questionnaire token.
  * New token type: Paper token. OTP values printed on a piece of paper.
  * Yubico Validation API: The yubikey tokens can authenticate via
    /ttype/yubikey which follows the Yubico Validation Protocol.

  Enhancements
  * Add Web UI view to display the active challenges.
  * The issuer for the Google Authenticator app can be configured.
  * The LDAP machine resolver uses an LDAP server pool.
  * The LDAP user resolver returns a list of mobile numbers.

  Fixes
  * The test email for the email token now has a sent date.
  * Fix problem when using encrypted encryption key.
  * Fix upper case problem when logging in to web UI
    with REMOTE_USER.
  * Fix allow set an empty PIN in the web UI.
  * Fix import of token file in Web UI.

Version 2.8, 2015-11-26

  Features
  * Improve U2F support with trusted facets
  * Add Challenge Response and U2F support to SAML
  * Add Web UI theming
  * Add possibility to use REMOTE_USER for authentication at Web UI
  * Fuzzy Authentication: restrict time since last authentication

  Enhancements
  * Allow mangle policy when fetching ssh keys
  * Add realm support to ownCloud plugin
  * Support Drupal passwords in SQL resolver
  * Add validity period to token enrollment
  * Set default enrollment token type in Web UI
  * Add scope to LDAP resolver

  Fixes
  * Fix failcounter reset for challenge response tokens
  * Fix confusing DB errors (column exist) during installation
  * Fix email token TLS checkbox saving
  * Fix TOTP testing in Web UI
  * Fix SMS config loading in Web UI


Version 2.7, 2015-10-03

  Features
  * Add support for U2F tokens
  * Add signature to the API JSON response. Thus
    the client can verify the response.

  Enhancements
  * When importing tokens, a realm can be chosen, so that all imported
    tokens are immediately inserted into this realm.
  * The user is able to change his password in the WebUI.
  * The user can assign a token in the WebUI.
  * Avoid the requiring of a PIN for some tokentypes like SSH
  * Migrate to pymysql, the pure python mysql implementation
  * The Audit Log tells if a previous OTP value was used again.

  Fixes
  * Enable login to WebUI with a loginname containing an @ sign.
  * Fix the writing of logfile privacyidea.log

Version 2.6, 2015-09-09

  Features
  * Add OCRA base TiQR token to authenticate by scanning
    a QR code.
  * Add Challenge Response authentication to Web UI
  * Add 4-Eyes token, to enable two man policy. Two tokens
    of two users are needed to authenticate.
  * "Revoke Token" lets you perform special action on token types.
    Tokens can be revoke, meaning they are blocked an can not
    be unblocked anymore.

  Enhancements
  * Add HA information in the documentation.
  * Add OpenVPN documentation.
  * Add challenge response policy, to define if e.g. HOTP or TOTP are 
    allowed to be used in challenge response mode.
  * Add hotkeys for easier use of Web Ui.
  * Remove wrong system wide PassOnNoUser and PassOnNoToken.
  * Set default language to "en" in Web UI.

  Fixes
  * Fix LDAP bug #179, which allows authentication with
    wrong password under certain conditions
  * Small fixes in coverage tests
  * Fix username in web UI during enrollment
  * Fix link to privacyIDEA logo in Web UI
  * Fixed bug, that user was not able to resync his own tokens.


Version 2.5, 2015-07-23
  Features
  * Add statistics
  * Add German translation
  * Add PinHandler in case of random PIN used
  * Add automatic documentation of system setup
  * Add ownCloud plugin
  
  Enhancements
  * Preset Email and SMS of a user when enrolling token
  * Enable LDAP anonymous bind
  * Add Hashalgorithms and digits to QR Code
  * Add support for CentOS 6 and 7
  
  Fixes
  * Fix registration token
  * Fix mOTP reuse problem

Version 2.4, 2015-06-24

  * Add User Management
  * Add Admin Realms to policies, to allow better policies in bigger setups
  * Add API key, that can be used for accessing /validate/check
  * Load PSKC Token seed files.
  * Add more sophisticated logging. Severe errors via Email
  * WebUI: Registrtion token can be enrolled in WebUI
  * WebUI: The token seed can be displayed in WebUI after generation
  * WebUI: Only the token types that are allowed to be enrolled are displayed
  * WebUI: Login_Mode Policy: Disable access to WebUI for certain users
  * WebUI: Add reload button in Audit view
  * SQLResolver: The Where statement is used in all cases
  * SSH-Token Application: Only fetch keys of the requested user
  * Apache client can work with several hosts on one machine
  * Documentation: Tokentypes and Supported Hardware Tokens
  * Improve RADIUS module
  * WebUI: Fix download of audit log
  * Fix missing access right of user to GET /caconnector


Version 2.3, 2015-05-22

  * Add connector to remote Certificate Authority
  * Add Tokentype "certificate" to manage certificates for users
    Certificates or Certificate Requests can be uploaded.
    Certificate Requests (Keypair) can be generated in the browser.
  * Add Tokentype "registration" for easier enrollment scenarios.
  * Add TokenType "Email" to send OTP via Email.
  * Add "First Steps" to online documentation
  * Add handling of validity period of token
  * Enable download of Audit log as CSV
  * Add Resolver Priority, to handle a duplicate user in a realm
  * Add TYPO3 Plugin to enable OTP with TYPO3
  * Add SCIM Resolver to fetch users from SCIM services
  * Fix Failcounter issue
  * Fix NTLM password check
  * Fix timestep during enrollment

Version 2.2, 2015-04-09

  * pi-manage.py: create resolvers and realms
  * pi-manage.py: manage policies
  * Add LostToken UI
  * Add Offline Application
  * Add PAM authentication module with offline support
  * Add getSerialByOTP. You can determine the Token by providing an OTP value.
  * Add auth_count_max and auth_success_max for each token.
  * Add PIN encryption policy
  * Add API for SAML
  * Add bash script for ssh key fetching
  * Make WebUI logout time configurable via webui policy.
  * Add NTLM authentication to the LDAP resolver.


Version 2.1, 2015-03-10

  * Add Machine-Application framework to support LUKS and SSH
    to manage SSH keys and provide Yubikeys to boot LUKS
    encrypted machines. #100, #10
  * Add Machine Resolvers for hosts and LDAP/AD #96
  * Migrate more policies like SMS policies. #95
  * Restructure WebUI code to ease development #97
  * Fix logout problem of user #92
  * Fix user list for AD (referrals) #99
  * Fix max_token_per_user policy #101


Version 2.0, 2015-02-21

  * Migrate privacyIDEA to Flask Web framework
  * The WebUI was migrated to bootstrap and angularJS
  * The database model was restructered to allow an easier handling and
    programming
  * Use the pi-manage.py tool to migrate old data
  * provide ubuntu packages for privacyidea base package and
    privacyidea-apache2 and privacyidea-nginx
  * provide pi-manage.py tool to manage the installation and create new admins.
  * policies are restructered. Internally the policies now use decorators to
    have a minimum code impact. No all policies are migrated, yet.
  * OCRA token and Email token is not migrated, yet.


Version 1.5.1, 2015-01-12

  * Fix splitting the @-sign to allow users like user@email.com@realm1


Version 1.5, 2014-12-25

  * Fix the postinstall script for not broken repoze.who
  * adapt the dependency for python webob
  * add fix for users in policies.
  * Working on #61
  * Closing #63, allow upper and lower case DN in LDAP resolver
  * Fix the empty result audit search problem
  * Fix the port problem with SQL resolver


Version 1.4, 2014-10-06

  * Add "wrong password" message on login screen
  * Add simplesamlphp module and deb package
  * Add helper dialog to easily setup first realm
  * Add QR enrollment of mOTP token (Token2)
  * Add admin/checkserial policy
  * Add help on logon screen
  * Fixed the session timeout bug in the management UI


Version 1.3.2, 2014-09-22

 * Add uwsgi and nginx configuration
 * Add nginx package
 * Add meta packages to easily install radius dependencies. (#33)
 * Add package for appliance
 * Add appliance style: privacyidea-setup-tui
 * Add privacyidea-otrs and remove the authmodules from the
   core package
 * Add first implementation of Token2 token type
 * Change depend in builddepend
 * Add missing SSL certificate
 * Add missing python-dialog dependency
 * Remove pylons download link, that caused timeout problems.

Version 1.3, 2014-08-18

 * add support for Daplug dongle in keyboard mode
 * Allow login with admin@realm, even with RealmBox.  (#26)
 * inactive tokens will not work with the machine-app
 * Added MachineUser database model
 * PEP8 beautify
 * Add about dialog
 * added recommends for mysql and salt

Version 1.2, 2014-07-15

 * added application for machines like LUKS and SSH
 * send SMS via sipgate
 * add RADIUS support
 * SQL audit janitor
 * improved SMS provider UI
 * added possibility to do basic authentication instead of session auth.

Version 1.1, 2014-06-25

 * Added documentation and in-UI-context-help.:q
 * Fixed the token config to be filled with sensible data, so 
   that you do not need to configure ALL token types.
 * Added script to clean up old audit logs.
