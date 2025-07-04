Change Log
===========

// http://keepachangelog.com/

All notable changes to this project will be documented in this file.
This project adheres to http://semver.org/[Semantic Versioning], though minor
breaking changes (such as renamed commands) can happen in minor releases.

// tags:
// `Added` for new features.
// `Changed` for changes in existing functionality.
// `Deprecated` for once-stable features removed in upcoming releases.
// `Removed` for deprecated features removed in this release.
// `Fixed` for any bug fixes.
// `Security` to invite users to upgrade in case of vulnerabilities.

v1.12.0 (unreleased)
--------------------

Removed
~~~~~~~

- `tox -e mkvenv` which was deprecated in qutebrowser v1.10.0 is now
  removed. Use the `mkvenv.py` script instead.
- Support for using `config.bind(key, None)` in `config.py` to unbind a
  key was deprecated in v1.8.2 and is now removed. Use
  `config.unbind(key)` instead.
- `:yank markdown` was deprecated in v1.7.0 and is now removed. Use
  `:yank inline [{title}]({url})` instead.

Added
~~~~~

- New `:debug-keytester` command, which shows a "key tester" widget.
  Previously, that was only available as a separate application via `python3 -m
  scripts.keytester`.

Fixed
~~~~~

- Using `:open -s` now only rewrites `http://` in URLs to `https://`, not other
  schemes like `qute://`.

v1.11.1 (unreleased)
--------------------

~~~~~~~~
Security
~~~~~~~~

- After a certificate error was overridden by the user, qutebrowser displays
  the URL as yellow (`colors.statusbar.url.warn.fg`). However, when the
  affected website was subsequently loaded again, the URL was mistakenly
  displayed as green (`colors.statusbar.url.success_https`). While the user
  already has seen a certificate error prompt at this point (or set
  `content.ssl_strict` to `false` which is not recommended), this could still
  provide a false sense of security. This is now fixed.

- After a certificate error was overridden by the user, qutebrowser displays
  the URL as yellow (`colors.statusbar.url.warn.fg`). However, when the
  affected website was subsequently loaded again, the URL was mistakenly
  displayed as green (`colors.statusbar.url.success_https`). While the user
  already has seen a certificate error prompt at this point (or set
  `content.ssl_strict` to `false` which is not recommended), this could still
  provide a false sense of security. This is now fixed.

v1.11.0 (2020-04-27)
--------------------

Added
~~~~~

- New settings:
  * `search.wrap` which can be set to false to prevent wrapping around the page
    when searching. With QtWebEngine, Qt 5.14 or newer is required.
  * `content.unknown_url_scheme_policy` which allows controlling when an
    external application is opened for external links (never, from user
    interaction, always).
  * `content.fullscreen.overlay_timeout` to configure how long the fullscreen
    overlay should be displayed. If set to `0`, no overlay is displayed.
  * `hints.padding` to add additional padding for hints.
  * `hints.radius` to set a border radius for hints (set to `3` by default).
- New placeholders for `url.searchengines` values:
  * `{unquoted}` inserts the search term without any quoting.
  * `{semiquoted}` (same as `{}`) quotes most special characters, but slashes
    remain unquoted.
  * `{quoted}` (same as `{}` in earlier releases) also quotes slashes.

Changed
~~~~~~~

- First adaptions to Qt 5.15, including a stop-gap measure for session loading
  not working properly with it.
- Searching now wraps around the page by default with QtWebKit (where it didn't
  before). Set `search.wrap` to `false` to restore the old behavior.
- The `{}` placeholder for search engines (the `url.searchengines` setting) now
  does not quote slashes anymore, but other characters typically encoded in
  URLs still get encoded. This matches the behavior of search engines in
  Chromium. To revert to the old behavior, use `{quoted}` instead.
- The `content.windowed_fullscreen` setting got renamed to
  `content.fullscreen.window`.
- Mouse-wheel scrolling is now prevented while hints are active.
- Changes to userscripts:
  * `qute-bitwarden` now has an optional `--totp` flag which can be used
    to copy TOTP codes to clipboard (requires the `pyperclip` module).
  * `readability-js` now opens readability tabs next to the original
    tab (using the `:open --related` flag).
  * `readability-js` now displays a favicon for readability tabs.
  * `password_fill` now triggers a `change` JavaScript event after filling the
    data.
- The `dictcli.py` script now shows better error messages.
- Various improvements to the `mkvenv.py` script (mainly useful for development).
- Minor performance improvements.

Deprecated
~~~~~~~~~~

- A warning about old Qt versions is now also shown with Qt 5.9 and 5.10, as
  support for Qt < 5.11 will be dropped in qutebrowser v2.0.

Fixed
~~~~~

- `unsafeWindow` is now defined for Greasemonkey scripts with QtWebKit.
- The proxied `window` global is now shared between different
  Greasemonkey scripts (but still separate from the page's `window`), to
  match the original Greasemonkey implementation.
- The `--output-messages` (`-m`) flag added in v1.9.0 now also works correctly
  when using `:spawn --userscript`.
- `:version` and `--version` now don't crash if there's an (invalid)
  `/etc/os-release` file which has non-comment lines without a `=` character.
- Scripts in `scripts/` now report errors to `stderr` correctly, instead of
  using `stdout`.

v1.10.2 (2020-04-17)
--------------------

Changed
~~~~~~~

- Windows and macOS releases now bundle Qt 5.14.2, including security fixes up
  to Chromium 80.0.3987.132.

Fixed
~~~~~

- The WhatsApp workaround now also works when using WhatsApp in languages other
  than English.
- The `mkvenv.py` script now also works properly on Windows.

v1.10.1 (2020-02-15)
--------------------

Fixed
~~~~~

- Crash when saving data fails during shutdown (which was a regression
  introduced in v1.9.0).
- Error while reading config.py when `fonts.tabs` or `fonts.debug_console` is
  set to a value including `default_size`.
- When a `state` file contains invalid UTF-8 data, a proper error is now
  displayed.

Changed
~~~~~~~

- When the Qt version changes (and also on the first start of v1.10.1 on Qt
  5.14), service workers registered by websites are now deleted. This is done
  as a workaround for QtWebEngine issues causing crashes when visiting pages
  using service workers (such as Google Mail/Drive). No persistent data should
  be affected as websites can re-register their service workers, but a (single)
  backup is kept at `webengine/Service Worker-bak` in qutebrowser's data
  directory.
- Better output on stdout when config errors occur.
- The `mkvenv.py` now ensures the latest versions of `setuptools` and `wheel`
  are installed in the virtual environment, which should speed up installation
  and fix install issues.
- The default for `colors.statusbar.command.private.bg` has been changed to a
  slightly different gray, as a workaround for a Qt issue where the cursor was
  invisible in that case.

v1.10.0 (2020-02-02)
--------------------

Added
~~~~~

- New `colors.webpage.prefers_color_scheme_dark` setting which allows forcing
  `prefers-color-scheme: dark` colors for websites (QtWebEngine with Qt 5.14 or
  newer).
- New `fonts.default_size` setting which can be used to set a bigger font size
  for all UI fonts.

Changed
~~~~~~~

- The `fonts.monospace` setting has been removed and replaced by
  `fonts.default_family`. The new `default_family` setting is improved in
  various ways:
  * It accepts a list of font families (or a single font family) rather than a
    comma-separated string. As an example, instead of
    `fonts.monospace = "Courier, Monaco"`, use
    `fonts.default_family = ["Courier", "Monaco"]`.
  * Since a list is now accepted as value, no quoting of font names with spaces
    is required anymore. As an example, instead of
    `fonts.monospace = '"xos4 Terminus"'`, use
    `fonts.default_family = 'xos4 Terminus'`.
  * It is now empty by default rather than having a long list of font names in
    the default config. When the value is empty, the system's default
    monospaced font is used.
- If `monospace` is now used in a font value, it's used literally and not
  replaced anymore. Instead, `default_family` is replaced as explained above.
- The default `content.headers.accept_language` value now adds a `;q=0.9`
  classifier which should make the value sent more in-line with what other
  browsers do.
- The `qute-pass` userscript now has a new `--mode gopass` switch which uses
  gopass rather than pass.
- The `tox -e mkvenv` (or `mkvenv-pypi`) way of installing qutebrowser is now
  replaced by a `mkvenv.py` script. See the updated
  link:install{outfilesuffix}#tox[install instructions] for details.
- macOS and Windows releases now ship with Qt/QtWebEngine 5.14.1
  * Based on Chromium 77.0.3865.129 with security fixes up to Chromium 79.0.3945.117.
  * Sandboxing is now enabled on Windows.
  * Monospace fonts are now used when a website requests them on macOS 10.15.
  * Web notifications are now supported.

Fixed
~~~~~

- When quitting qutebrowser, components are now cleaned up differently. This
  should fix certain (rare) segmentation faults and exceptions when quitting,
  especially with the new exit scheme introduced in in PyQt5 5.13.1.
- Added a workaround for per-domain settings (e.g. a JavaScript whitelist) not
  being applied in some scenarios with Qt 5.13 and above.
- Added additional site-specific quirk for WhatsApp Web.
- The `qute-pass` userscript now works correctly when a `PASSWORD_STORE_DIR`
  ending with a trailing slash is given.

v1.9.0 (2020-01-08)
-------------------

Added
~~~~~

- Initial support for Qt 5.14.
- New `content.site_specific_quirks` setting which enables workarounds for
  websites with broken user agent parsing (enabled by default, see the "Fixed"
  section for fixed websites).
- New `qt.force_platformtheme` setting to force Qt to use a given platform
  theme.
- New `tabs.tooltips` setting which can be used to disable hover tooltips for
  tabs.
- New settings to configure the appearance of context menus:
  * `fonts.contextmenu`
  * `colors.contextmenu.menu.bg`
  * `colors.contextmenu.menu.fg`
  * `colors.contextmenu.selected.bg`
  * `colors.contextmenu.selected.fg`

Changed
~~~~~~~

- The macOS binaries now require macOS 10.13 High Sierra or newer. Support for
  macOS 10.12 Sierra has been dropped.
- The `content.headers.user_agent` setting now is a format string with the
  default value resembling the behavior of it being set to null before.
  This slightly changes the sent user agent for QtWebKit: Instead of mentioning
  qutebrowser and its version it now mentions the Qt version.
- The `qute-pass` userscript now has a new `--extra-url-suffixes` (`-s`)
  argument which passes extra URL suffixes to the tldextract library.
- A stack is now used for `:tab-focus last` rather than just saving one tab.
  Additionally, `:tab-focus` now understands `stack-prev` and `stack-next`
  arguments to traverse that stack.
- `:hint` now has a new `right-click` target which allows right-clicking
  elements via hints.
- The Terminus font has been removed from the default monospace fonts since it
  caused trouble with HighDPI setups. To get it back, add either
  `"xos4 Terminus"` or `Terminus` (depending on fontconfig version) to the
  beginning of the `fonts.monospace` setting.
- As a workaround for a Qt bug causing a segfault, desktop sharing is now
  automatically rejected on Qt versions before 5.13.2. Note that screen sharing
  still won't work on Linux before Qt 5.14.
- Comment lines in quickmarks/bookmarks files are now ignored. However, note that
  qutebrowser will overwrite those files if bookmark/quickmark commands are used.
- Reopening PDF.js pages from e.g. a session file will now re-download and
  display those PDFs.
- Improved behavior when using `:open-download` in a sandboxed environment (KDE
  Flatpak).
- qutebrowser now enables the new PyQt exit scheme, which should result in
  things being cleaned up more properly (e.g. cookies being saved even without
  a timeout) on PyQt 5.13.1 and newer.
- The `:spawn` command has a new `-m` / `--output-messages` argument which
  shows qutebrowser messages based on a command's standard output/error.
- Improved insert mode detection for some CodeMirror usages (e.g. in
  JupyterLab and Jupyter Notebook).
- If JavaScript is disabled globally, `file://*` now doesn't automatically have
  it enabled anymore. Run `:set -u file://* content.javascript.enabled true` to
  restore the previous behavior.
- Settings with URL patterns can now be used to affect the behavior of the
  QtWebEngine inspector. Note that the underlying URL is `chrome-devtools://*`
  from Qt 5.11 to Qt 5.13, but `devtools://*` with Qt 5.14.
- Improvements when `tabs.tabs_are_windows` is set:
  * Using `:tab-take` and `:tab-give` now shows an error, as the effect of
    doing so would be equal to `:tab-clone`.
  * The `:buffer` completion doesn't show any window sections anymore, only a
    flat list of tabs.
- Improved parsing in some corner cases for the `QtFont` type (used for
  `fonts.tabs` and `fonts.debug_console`).
- Performance improvements for the following areas:
  * Adding settings with URL patterns
  * Matching of settings using URL patterns

Fixed
~~~~~

- Downloads (e.g. via `:download`) now see the same user agent header as
  webpages, which fixes cases where overly restrictive servers/WAFs closed the
  connection before.
- `dictcli.py` now works correctly on Windows again.
- The logic for `:restart` has been revisited, which should fix issues with
  relative basedirs.
- Remaining issues related to Python 3.8 are now fixed (mostly warnings,
  especially on QtWebKit).
- Workaround for a Qt bug where a page never finishes loading with a
  non-overridable TLS error (e.g. due to HSTS).
- The `qute://configdiff` page now doesn't show built-in settings (e.g.
  javascript being enabled for `qute://` and `chrome://` pages) anymore.
- The `qute-lastpass` userscript now stops prompting for passwords when
  cancelling the password input.
- The tab hover text now shows ampersands (&) correctly.
- With QtWebEngine and Qt >= 5.11, the inspector now shows its icons correctly
  even if loading of images is disabled via the `content.images` setting.
- Entering a very long string (over 50k characters) in the completion used to
  crash, now it shows an error message instead.
- Various improvements for URL/searchengine detection:
  * Strings with a dot but with characters not allowed in a URL (e.g. an
    underscore) are now not treated as URL anymore.
  * Strings like "5/8" are now not treated as IP anymore.
  * URLs with an explicit scheme and a space (%20) are correctly treated as
    URLs.
  * Mail addresses are now treated as search terms.
  * With `url.open_base_url` set, searching for a search engine name now works.
  * `url.open_base_url = True` together with `url.auto_search = 'never'` is now
    handled correctly.
  * Fixed crash when a search engine URL turns out to be invalid.
- New "site specific quirks", which work around some broken websites:
  * WhatsApp Web
  * Google Accounts
  * Slack (with older QtWebEngine versions)
  * Dell.com support pages (with Qt 5.7)
  * Google Docs (fixes broken IME/compose key)

v1.8.3 (2019-12-05)
-------------------

Fixed
~~~~~

- Segmentation fault introduced in v1.8.2 when a tab gets closed immediately
  after it has finished loading (e.g. with certain login flows).

v1.8.2 (2019-11-22)
-------------------

Changed
~~~~~~~

- Windows/macOS releases now ship with Qt 5.12.6. This includes security fixes
  up to Chromium 77.0.3865.120 plus a security fix for CVE-2019-13720 from
  Chromium 78.

Fixed
~~~~~

- Unbinding keys via `config.bind(key, None)` accidentally worked in
  v1.7.0 but raises an exception in v1.8.0. It now works again, but is
  deprecated and shows an error. Note that `:config-py-write` did write
  such invalid lines before v1.8.0, so existing config files might need
  adjustments.
- The `readability-js` userscript now handles encodings correctly (which it
  didn't before for some websites).
- <Shift-Insert> can now be used to paste text starting with a hyphen.
- Following hints via the number keypad now works properly again.
- Errors while reading the state file are now displayed instead of causing a
  crash.
- Crash when using `:debug-log-level` without a console attached.
- Downloads are now hidden properly when the browser is in fullscreen mode.
- Crash when setting `colors.webpage.bg` to an empty value with QtWebKit.
- Crash when the history database file is not a proper sqlite database.
- Workaround for missing/broken error pages on Debian.
- A deprecation warning (caused by pywin32) about the imp module on Windows is
  now hidden.

v1.8.1 (2019-09-27)
-------------------

Changed
~~~~~~~

- No code changes - this release only repackages the Windows/macOS
  releases due to issues with the v1.8.0 release.
- Updated dependencies for Windows/macOS releases:
  * macOS and Windows releases now ship with Qt/QtWebEngine 5.12.5. Those
    are based on Chromium 69.0.3497.128 with security fixes up to Chromium
    76.0.3809.87.
  * Qt 5.13 couldn't be used yet due to various bugs in Qt 5.13.0 and .1.

v1.8.0 (2019-09-25)
-------------------

Added
~~~~~

- New userscripts:
  * `readability-js` which uses Mozilla's node.js readability library.
  * `qute-bitwarden` which integrates the Bitwarden CLI.

Changed
~~~~~~~

- The statusbar text for passthrough mode now shows all configured bindings to
  leave the mode, not only one.
- When `:config-source` is used with a relative filename, the file is now
  searched in the config directory instead of the current working directory.
- HTML5 inputs with date/time types now enter insert mode when selected.
- `dictcli.py` now shows where dictionaries are installed to and complains when
  running it as root if doing so would result in a wrong installation path.
- The Makefile now can also run `setup.py build` when invoked without a target.
- Changes to userscripts:
  * qute-pass: Don't run `pass` if only a username is requested.
  * qute-pass: Support private domains like `myrouter.local`.
  * readability: Improved CSS styling.
- Performance improvements in various areas:
  * Loading config files
  * Typing without any completion matches
  * General keyboard handling
  * Scrolling
- `:version` now shows details about the loaded autoconfig.yml/config.py.
- Hosts are now additionally looked up including their ports in netrc files.
- With Qt 5.10 or newer, qutebrowser now doesn't force software rendering with
  Nouveau drivers anymore. However, QtWebEngine/Chromium still do so.
- The XSS Auditor is now disabled by default (`content.xss_auditing` =
  `false`). This reflects a similar change in Chromium, see
  their https://www.chromium.org/developers/design-documents/xss-auditor[XSS
  Auditor Design Document] for details.

Fixed
~~~~~

- `:config-write-py` now correctly writes `config.unbind(...)` lines (instead
  of `config.bind(..., None)`) when unbinding a default keybinding.
- Prevent repeat keyup events for JavaScript when a key is held down.
- The Makefile now rebuilds the manpage correctly.
- `~/.config/qutebrowser/blocked-hosts` can now also contain /etc/hosts-like
  lines, not just simple hostnames.
- Restored compatibility with Jinja2 2.8 (e.g. used on Debian Stretch or Ubuntu
  16.04 LTS).
- Fixed implicit type conversion warning with Python 3.8.
- The desktop file now sets `StartupWMClass` correctly, so the qutebrowser icon
  is no longer shown twice in the Gnome dock when pinned.
- Bindings involving keys which need the AltGr key now work properly.
- Fixed crash (caused by a Qt bug) when typing characters above the Unicode BMP
  (such as certain emoji or CJK characters).
- `dictcli.py` now works properly again.
- Shift can now be used while typing hint keystrings, which e.g. allows typing
  number hints on French keyboards.
- With rapid hinting in number mode, backspace now edits the filter text after
  following a hint.
- A certain type of error ("locking protocol") while initializing sqlite now
  isn't handled as crash anymore.
- Crash when showing a permission request in certain scenarios.

Removed
~~~~~~~

- At least Python 3.5.2 is now required to run qutebrowser, support for 3.5.0
  and 3.5.1 was dropped.


v1.7.0 (2019-07-18)
-------------------

Added
~~~~~

- New settings:
  * `colors.tabs.pinned.*` to control colors of pinned tabs.
  * `hints.leave_on_load` which allows disabling leaving of hint mode when a
    new page is loaded.
  * `colors.completion.item.selected.match.fg` which allows configuring the
    text color for the matching text in the currently selected completion item.
  * `tabs.undo_stack_size` to limit how many undo entries are kept for closed tabs.
- New commands:
  * `:reverse-selection` (`o` in caret mode) to swap the stationary/moving ends
    of a selection.
- New commandline replacements:
  * `{url:domain}`, `{url:auth}`, `{url:scheme}`, `{url:username}`,
    `{url:password}`, `{url:host}`, `{url:port}`, `{url:path}`, `{url:query}`
    for the respective parts of the current URL.
  * `{title}` for the current page title.
- The `{title}` field in `tabs.title.format`, `tabs.title.format_pinned` and
  `window.title_format` got renamed to `{current_title}` (mirroring
  `{current_url}`) in order to not conflict with the new `{title}` commandline
  replacement.
- New `delete` target for `:hint` which removes the hinted element from
  the DOM.
- New `--config-py` commandline argument to use a custom `config.py` file.
- Qt 5.13: Support for notifications (shown via system tray).

Changed
~~~~~~~

- Updated dependencies for Windows/macOS releases:
   - PyQt5 5.12.3 / PyQtWebEngine 5.12.1
   - Qt 5.12.4, which includes security fixes up to Chromium 74.0.3729.157
   - Python 3.7.4
   - OpenSSL 1.1.1
   - Note: This release includes Qt 5.12.4 instead of Qt 5.13.0 due to
     https://bugreports.qt.io/browse/QTBUG-76913[QTBUG-76913] causing frequent
     segfaults with Qt 5.13. After Qt 5.13.1 is released, qutebrowser v1.8.0
     will be released with an updated Qt.
- Completely revamped Windows installer which allows installing without admin
  permissions and allows setting qutebrowser as default browser.
- The desktop file `qutebrowser.desktop` is now renamed to
  `org.qutebrowser.qutebrowser.desktop`.
- Pinned tabs now always show a favicon (even if the site doesn't provide one)
  when shrinking.
- Setting `downloads.location.directory` now changes the directory displayed in
  the download prompt even if `downloads.location.remember` is set.
- The `yank` command gained a new `inline` argument, which allows to e.g. use
  `:yank inline [{title}]({url})`.
- Duplicate consecutive history entries with the same URL are now ignored.
- More detailed error messages when spawning a process failed.
- The `content.pdfjs` setting now supports domain patterns.
- Improved process status output with `:spawn -o`.
- The `colors.tabs.bar.bg` setting is now of type `QssColor` and thus supports
  gradients.
- The `:fullscreen` command now understands a new `--enter` flag which
  causes it to always enter fullscreen instead of toggling the current
  state.
- `--debug-flag stack` is now needed to show stack traces on renderer process
  crashes.
- `--debug-flag chromium` can be used to easily turn on verbose Chromium logging.
- For runtime data (such as the IPC socket), a proper runtime path is now used
  on BSD; only macOS/Windows continue to use the temporary directory.
- PDF.js is now also searched in `/app/share/pdf.js/` (for Flatpak)
- Permission prompts can now be answered with `Y` (`:prompt-accept --save yes`)
  and `N` (`:prompt-accept --save no`) to save the answer as a per-domain
  setting.
- `content.dns_prefetch` is now turned off by default, as it causes crashes
  inside QtWebEngine.
- The (still unofficial) interceptor plugin API now contains `resource_type`
  for a request and allows redirecting requests.
- `:bookmark-remove` now shows a message for consistency with `:bookmark-add`.
- Very early segfaults are now also caught by the crash handler.
- The appdata XML now contains proper release information and an (empty) OARS
  content rating.
- Improved Linux distribution detection.
- Qt 5.13: Request filtering now happens in the UI rather than IO thread.
- Qt 5.13: Support for PDFium (Chromium's PDF viewer) is disabled for now so
  that PDFs can still be downloaded (or shown with PDF.js) properly.
- Various performance improvements (e.g. for showing hints or the :open
  completion).

Deprecated
~~~~~~~~~~

- `:yank markdown` got deprecated, as `:yank inline [{title}]({url})` can now
  be used instead.

Fixed
~~~~~

- Various QtWebEngine load signals are now handled differently, which should
  fix issues with insert mode being left while typing on sites like Google
  Translate.
- Race condition causing a colored statusbar in normal mode when
  entering/exiting caret mode quickly.
- Using `100%` for a hue in a `hsv(...)` config value now corresponds to 359
  (rather than 255), matching the fixed behavior in Qt 5.13.
- Chaining commands with `;;` used to abort with some failing commands. It now
  runs the second command no matter whether the first one succeeded or not.
- Handling of profiles and private windows (and resulting crashes with Qt
  5.12.2).
- Fixes for corner-cases when using `:navigate increment/decrement`.
- The type for the `colors.hints.match.fg` setting was changed to `QtColor`.
  Gradients were never supported for this setting, and with this change, values
  like `rgb(0, 0, 0)` now work as well.
- Permission prompts now show a properly normalized URL with QtWebKit.
- Crash on start when PyQt was built without SSL support with Qt >= 5.12.
- Minor memory leaks.

v1.6.3 (2019-06-18)
-------------------

Fixed
~~~~~

- Crash when hinting and changing/closing the tab before hints are displayed.
- Crash on redirects with Qt 5.13.
- Hide bogus `AA_ShareOpenGLContexts` warning with Qt 5.12.4.
- Workaround for renderer process crashes with Qt 5.12.4.
  If you're unable to update, you can remove `~/.cache/qutebrowser` for the
  same result.

v1.6.2 (2019-05-06)
-------------------

Changed
~~~~~~~

- Windows/macOS releases now ship with Qt 5.12.3, which includes security fixes
  up to Chromium 73.0.3683.75.

Fixed
~~~~~

- Crash when SQL errors occur while using the completion.
- Crash when cancelling a download prompt started in an already closed window.
- Crash when many prompts are opened at the same time.
- Running without Qt installed now displays a proper error again.
- High CPU usage when using the keyhint widget with a low delay.
- Crash with Qt >= 5.14 on redirects.

v1.6.1 (2019-03-20)
-------------------

Changed
~~~~~~~

- Windows/macOS releases now ship with Qt 5.12.2, which includes
  security fixes up to Chromium 72.0.3626.121 (including CVE-2019-5786
  which is known to be exploited in the wild).

Fixed
~~~~~

- Crash when using `:config-{dict,list}-{add,remove}` with an invalid setting.
- Functionality like hinting on pages with an element with ID `_qutebrowser` (such as qutebrowser.org) on Qt 5.12.
- The .desktop file in v1.6.0 was missing the "Actions" key, which is now fixed.
- The SVG icon now has a size of 256x256px set to comply with freedesktop standards.
- Setting `colors.statusbar.*.bg` to a gradient now has the expected effect of
  the gradient spanning the entire statusbar.

v1.6.0 (2019-02-25)
-------------------

Added
~~~~~

- New settings:
  * `tabs.new_position.stacking` which controls whether new tabs opened from a
    page should stack on each other or not.
  * `completion.open_categories` which allows to configure which categories are
    shown in the `:open` completion, and how they are ordered.
  * `tabs.pinned.frozen` to allow/deny navigating in pinned tabs.
  * `hints.selectors` which allows to configure what CSS selectors are used for
    hints, and also allows adding custom hint groups.
  * `input.insert_mode.leave_on_load` to turn off leaving insert mode when a
    new page is loaded.
- New config manipulation commands:
  * `:config-dict-add` and `:config-list-add` to a new element to a dict/list
    setting.
  * `:config-dict-remove` and `:config-list-remove` to remove an element from a
    dict/list setting.
- New `:yank markdown` feature which yanks the current URL and title in
  markdown format.
- Support for new QtWebEngine features in Qt 5.12:
  * Basic support for client certificates. Selecting the certificate to use
    when there are multiple matching certificates isn't implemented yet.
  * Support for DNS prefetching (plus new `content.dns_prefetch` setting).

Changed
~~~~~~~

- Various changes to the Windows and macOS builds:
  * Bundling Qt 5.12.1, based on Chromium 69.0.3497.128 with security fixes up
    to 71.0.3578.94.
  * Windows: A 32-bit build is available again.
  * Windows: The builds now bundle the Universal CRT DLLs, causing them to work
    on earlier versions of Windows 10.
  * macOS: Support for OS X 10.11 El Capitan was dropped, requiring macOS 10.12
    Sierra or newer.
  * macOS: The IPC socket path used to communicate with existing instances
    changed due to changes in Qt 5.12. Please make sure to quit qutebrowser
    before upgrading.
- `:q` now closes the current window instead of quitting qutebrowser completely
  (`:close`), while `:qa` quits (`:quit`). The behavior of `:wq` remains
  unchanged (`:quit --save`), as closing a window while saving the session
  doesn't make sense.
- Completion highlighting is now done differently (using `QSyntaxHighlighter`),
  which should fix some highlighting corner-cases.
- The `QtColor` config type now also understands colors like `rgb(...)`.
- `:yank` now has a `--quiet` option which causes it to not display a message.
- The `:open` completion now also shows search engines by default.
- The `content.host_blocking.enabled` setting now supports URL patterns, so the
  adblocker can be disabled on a given page.
- Elements with a `tabindex` attribute now also get hints by default.
- Various small performance improvements for hints and the completion.
- The Wayland check for QtWebEngine is now disabled on Qt >= 5.11.2, as those
  versions should work without any issues.
- The JavaScript `console` object is now available in PAC files.
- PAC proxies currently don't work properly on QtWebEngine (and never did), so
  an error is now shown when trying to configure a PAC proxy.
- The metainfo file `qutebrowser.appdata.xml` is now renamed to
  `org.qutebrowser.qutebrowser.appdata.xml`.
- The `qute-pass` userscript now understands domains in gpg filenames
  in addition to directory names.
- The autocompletion for `content.headers.user_agent` got updated to only
  include the default and Chrome, as setting the UA to Firefox has various
  bad side-effects.
- Combining Qt 5.12 with an older PyQt can lead to issues, so a warning is
  now shown when starting qutebrowser with that combination.

Fixed
~~~~~

- Invalid world IDs now get rejected for `:jseval` and GreaseMonkey scripts.
- When websites suggest download filenames with invalid characters, those are
  now correctly replaced.
- Invalid hint length calculation in certain rare cases.
- Dragging tabs in the tab bar (which was broken in v1.5.0)
- Using Shift-Home in command mode now works properly.
- Workaround for a Qt bug which prevented
  `content.cookies.accept = no-3rdparty` from working properly on some pages
  like GMail. However, the default for `content.cookies.accept` is still `all`
  to be in line with what other browsers do.
- `:navigate` not incrementing in anchors or queries.
- Crash when trying to use a proxy requiring authentication with QtWebKit.
- Slashes in search terms are now percent-escaped.
- When `scrolling.bar = True` was set in versions before v1.5.0, this now
  correctly gets migrated to `always` instead of `when-searching`.
- Completion highlighting now works again on Qt 5.11.3 and 5.12.1.
- The non-standard header `X-Do-Not-Track` is no longer sent.
- PAC proxies were never correctly supported with QtWebEngine, but are now
  explicitly disallowed.
- macOS: Context menus for download items now show in the correct macOS style.
- Issues with fullscreen handling when exiting a video player.
- Various fixes for Qt 5.12 issues:
  * A javascript error on page load was fixed.
  * `window.print()` works with Qt 5.12 now.
  * Fixed handling of duplicate download filenames.
  * Fixed broken `qute://history` page.
  * Fixed PDF.js not working properly.
  * The download button in PDF.js now works (it's not possible to make
    it work with earlier Qt versions).
  * Since Greasemonkey scripts modifying the DOM fail when being run at
    document-start, some known-broken scripts (Iridium, userstyles.org) are now
    forced to run at document-end.

v1.5.2 (2018-10-26)
-------------------

Changed
~~~~~~~

- The `content.cookies.accept` setting is now set to `all` instead of
  `no-3rdparty` by default, as `no-3rdparty` breaks various pages such as
  GMail.

v1.5.1 (2018-10-10)
-------------------

Fixed
~~~~~

- Flickering when opening/closing tabs (as soon as more than 10 are open) on
  some pages.
- PDF.js is now bundled again with the macOS/Windows release.
- PDF.js is now searched in the correct path (if not installed system-wide)
  instead of hardcoding `~/.local/share/qutebrowser`.
- Improved logging for PDF.js resources which fail to load.
- Crash when closing a tab after doing a search.
- Tabs appearing when hidden after e.g. closing tabs.

v1.5.0 (2018-10-03)
-------------------

Added
~~~~~

- Rewritten PDF.js support:
  * PDF.js support and the `content.pdfjs` setting are now also available with
    QtWebEngine.
  * Opening a PDF file now doesn't start a second request anymore.
  * Opening PDFs on https:// sites now works properly.
  * New `--pdfjs` flag for `prompt-open-download`, so PDFs can be opened in
    PDF.js with `<Ctrl-P>` in the download prompt.
- New settings:
  * `content.mouse_lock` to handle HTML5 pointer locking.
  * `completion.web_history.exclude` which hides a list of URL patterns from
    the completion.
  * `qt.process_model` which can be used to change Chromium's process model.
  * `qt.low_end_device_mode` which turns on Chromium's low-end device mode.
    This mode uses less RAM, but the expense of performance.
  * `content.webrtc_ip_handling_policy`, which allows more
    fine-grained/restrictive control about which IPs are exposed via WebRTC.
  * `tabs.max_width` which allows to have a more "normal" look for tabs.
  * `content.mute` which allows to mute pages (or all tabs) by default.
- Running qutebrowser with QtWebKit or Qt < 5.9 now shows a warning (only
  once), as support for those is going to be removed in a future release.
- New t[iI][hHu] default bindings (similar to `tsh` etc.) to toggle images.
- The qute-pass userscript now has optional OTP support.
- When `:spawn --userscript` is called with a count, that count is now
  passed to userscripts as `$QUTE_COUNT`.

Changed
~~~~~~~

- Windows and macOS releases now bundle Python 3.7, PyQt 5.11.3 and Qt 5.11.2.
  QtWebEngine includes security fixes up to Chromium 68.0.3440.75 and
  http://code.qt.io/cgit/qt/qtwebengine.git/tree/dist/changes-5.11.2/?h=v5.11.2[various other fixes].
- Various performance improvements when many tabs are opened.
- The `content.headers.referer` setting now works on QtWebEngine.
- The `:repeat` command now takes a count which is multiplied with the given
  "times" argument.
- The default keybinding to leave passthrough mode was changed from `<Ctrl-V>`
  to `<Shift-Escape>`, which makes pasting from the clipboard easier in
  passthrough mode and is also unlikely to conflict with webpage bindings.
- The `app_id` is now set to `qutebrowser` for Wayland.
- `Command` or `Cmd` can now be used (instead of `Meta`) to map the Command key
  on macOS.
- Using `:set option` now shows the value of the setting (like `:set option?`
  already did).
- The `completion.web_history_max_items` setting got renamed to
  `completion.web_history.max_items`.
- The Makefile shipped with qutebrowser now supports overriding variables
  `DATADIR` and `MANDIR`.
- Regenerating completion history now shows a progress dialog.
- The `content.autoplay` setting now supports URL patterns on Qt >= 5.11.
- The `content.host_blocking.whitelist` setting now takes a list of URL
  patterns instead of globs.
- In passthrough mode, Ctrl + Mousewheel now also gets passed through to the
  page instead of zooming.
- Editing text in an external editor now simulates a JS "input" event, which
  improves compatibility with websites reacting via JS to input.
- The `qute://settings` page is now properly sorted on Python 3.5.
- `:zoom`, `:zoom-in` and `:zoom-out` now have a `--quiet` switch which causes
  them to not display a message.
- The `scrolling.bar` setting now takes three values instead of being a
  boolean: `always`, `never`, and `when-searching` (which only displays it
  while a search is active).
- '@@' now repeats the last run macro.
- The `content.host_blocking.lists` setting now accepts a `file://` URL to a
  directory, and reads all files in that directory.
- The `:tab-give` and `:tab-take` command now have a new flag `--keep` which
  causes them to keep the old tab around.
- `:navigate` now clears the URL query.

Fixed
~~~~~

- `qute://` pages now work properly on Qt 5.11.2
- Error when passing a substring with spaces to `:tab-take`.
- Greasemonkey scripts which start with an UTF-8 BOM are now handled correctly.
- When no documentation has been generated, the plaintext documentation now can
  be shown for more files such as `qute://help/userscripts.html`.
- Crash when doing initial run on Wayland without XWayland.
- Crash when trying to load an empty session file.
- `:hint` with an invalid `--mode=` value now shows a proper error.
- Rare crash on Qt 5.11.2 when clicking on `<select>` elements.
- Rare crash related to the completion.

Removed
~~~~~~~

- Support for importing pre-v1.0.0 history files has been removed.
- The `content.webrtc_public_interfaces_only` setting has been removed and
  replaced by `content.webrtc_ip_handling_policy`.

v1.4.2 (2018-09-02)
-------------------

Changed
~~~~~~~

- The `content.xss_auditing` setting is now enabled by default, to mirror
  Chromium's rather than Qt's default behavior.
- Long URLs in the statusbar are now elided at the end rather than in the
  middle, to make sure the hostname is completely visible whenever possible.

Fixed
~~~~~

- Crash in Qt 5.7.1 when a website uses `window.print()`.
- The workaround for Nouveau graphic drivers now works properly again.
- Crash when using `:follow-selected` with a link which is outside of the view.
- Workaround for windows not showing as urgent with some window managers
  (like i3).
- Crash when opening URLs with some unicode characters (IDNA 2008). Those URLs
  still won't open though, due to missing support in Qt.
- Crash when a download directory which can't be created is configured.
- Crash in the `importer.py` script when importing Chrome bookmarks from newer Chrome versions.
- The `content.webrtc_public_interfaces_only` option didn't work on Qt 5.11 previously (it now does).
  Note it still does not work on Qt 5.10 (due to a Qt bug) and Qt < 5.9.2.
- Repeated escaping of entries in `qute://log` when refreshing page.
- The host blocker doesn't block 0.0.0.0 anymore.
- Crash when using :// as URL pattern.
- The `:buffer` completion now sorts tabs with indices >= 10 correctly again.

v1.4.1 (2018-07-11)
-------------------

Security
~~~~~~~~

- CVE-2018-10895: Fix CSRF issue on the qute://settings page, leading to
  possible arbitrary code execution. See the related GitHub issue for details:
  https://github.com/qutebrowser/qutebrowser/issues/4060

Fixed
~~~~~

- Rare crash when an error occurs in downloads.
- Newlines are now stripped from the :version pastebin URL.
- There's a new `mkvenv-pypi-old` environment in `tox.ini` which installs an
  older Qt, which is needed on Ubuntu 16.04.
- Worked around a Qt issue which redirects to a `chrome-error://` page when
  trying to use U2F.
- The `link_pyqt.py` script now works correctly with PyQt 5.11.
- The Windows installer now uninstalls the old version before installing the
  new one, fixing issues with qutebrowser not starting after installing v1.4.0
  over v1.3.3.

v1.4.0 (2018-07-03)
-------------------

Added
~~~~~

- Support for the bundled `sip` module in PyQt 5.11 and other changes in
  Qt/PyQt 5.11.x.
- New `--debug-flag log-requests` to log requests to the debug log for
  debugging.
- New `--first` flag for `:hint` (bound to `gi` for inputs) which automatically
  selects the first hint.
- New `input.escape_quits_reporter` setting which can be used to avoid
  accidentally quitting the crash reporter when pressing escape.
- New `qute-lastpass` userscript which uses the LastPass CLI to fill passwords.
- The Makefile now installs a `/usr/share/metainfo/qutebrowser.appdata.xml` file.
- QtWebEngine: Support for printing from webpages via `window.print`.
- QtWebEngine: Support for muting tabs:
  * New `{audio}` field for `window.title_format` and `tabs.title.format` which
    displays `[M]`/`[A]` for muted/recently audible tabs.
  * New `:tab-mute` command (bound to `<Alt-m>`) to mute/unmute a tab.
- QtWebEngine: Support for `content.cookies.accept` with third-party cookies
  blocked by default (requires Qt 5.11).
- QtWebEngine: New settings:
  * Support for requesting persistent storage via
    `navigator.webkitPersistentStorage.requestQuota` with a new
    `content.persistent_storage` setting (requires Qt 5.11).
    This setting also supports URL patterns.
  * Support for registering custom protocol handlers via
    `navigator.registerProtocolHandler` with a new
    `content.register_protocol_handler` setting (requires Qt 5.11).
    This setting also supports URL patterns.
  * Support for WebRTC screen sharing with a new `content.desktop_capture`
    setting (requires Qt 5.10).
    This setting also supports URL patterns.
  * New `content.autoplay` setting to enable/disable automatic video playback
    (requires Qt 5.10).
  * New `content.webrtc_public_interfaces_only` setting to only expose public
    interfaces over WebRTC (requires Qt 5.9.2 or 5.11).
  * New `content.canvas_reading` setting to disable reading from canvas
    elements.

Changed
~~~~~~~

- The following settings now support URL patterns:
  * `content.headers.do_not_track`
  * `content.headers.custom`
  * `content.headers.accept_language`
  * `content.headers.user_agent`
  * `content.ssl_strict`
  * `content.geolocation`
  * `content.notifications`
  * `content.media_capture`
- The Windows/macOS releases now bundle Qt 5.11.1 which is based on
  Chromium 65.0.3325.151 with security fixes up to Chromium 67.0.3396.87.
- New short flags for commandline arguments: `-B` and `-T` for `--basedir` and
  `--temp-basedir`; `-d` and `-D` for `--debug` and `--debug-flag`.
- Deleting history items via `:history-clear` or `:completion-item-del` now
  also removes that URL from QtWebEngine's visited links.
- There's now completion for commands taking a variable count of arguments
  (like `:config-cycle`).
- QtWebEngine: On Qt 5.11.1, no reloads are needed anymore when switching
  between pages with changed settings (e.g. `content.javascript.enabled`).
- The `qt.force_software_rendering` setting changed from a boolean to taking
  different values (`software-opengl`, `qt-quick` and `chromium`) for different
  kinds of software rendering workarounds.
- On Qt 5.11, using wayland with QtWebEngine is now possible when using
  software rendering.
- GreaseMonkey scripts now get their own global scope (based on the page's
  one), which allows scripts like OneeChan to work.
- Rapid hinting is now supported with the `yank` and `yank-primary` targets,
  copying newline-separated links.
- QtWebEngine: On Qt 5.11, the developer tools (inspector) can now be used
  securely and without requiring the `--enable-webengine-inspector` option.
- The `<Enter>` key (`:follow-selected`) now follows the currently focused
  element if there's no selection.
- The `--logfilter` argument now can be prepended with an exclamation mark
  (e.g. `--logfilter '!init,destroy'`) to invert the filter.
- `:view-source` now has a `--pygments` flag which uses the "old" way of
  rendering sources even with QtWebEngine.
- Improved error messages when a setting needs a newer Qt version.
- QtWebEngine: Various improvements to make the cursor more visible in caret
  browsing.
- When a prompt is opened in insert/passthrough mode, the mode is restored
  after closing the prompt.
- On Qt 5.10 or newer, dictionaries are now read from the qutebrowser data
  directory (e.g. `~/.local/share/qutebrowser`) instead of `/usr/share/qt`.
  Existing dictionaries are copied over.
- If an error while parsing `~/.netrc` occurs, the cause of the error is now
  logged.
- On Qt 5.9 or newer, certificate errors now show Chromium's detailed error
  page.
- Greasemonkey scripts now support a "@qute-js-world" tag to run them in a
  different JavaScript context.

Fixed
~~~~~

- Various subtle keyboard focus issues.
- The security fix in v1.3.3 caused URLs with ampersands
  (`www.example.com?one=1&two=2`) to send the wrong arguments when clicked on
  the `qute://history` page.
- Crash when opening a PDF page with PDF.js enabled (on QtWebKit), but no
  PDF.js installed.
- Crash when closing a tab shortly after opening it.

Removed
~~~~~~~

- No prebuilt binaries for 32-bit Windows are supplied anymore. This is due to
  Qt removing QtWebEngine support for those upstream. It might be possible to
  distribute 32-bit binaries again with Qt 5.12 in December, but that will only
  happen if it turns out enough people actually need 32-bit support.
- `:tab-detach` which has been deprecated in v1.1.0 has been removed.
- The `content.developer_extras` setting got removed. On QtWebKit, developer
  extras are now automatically enabled when opening the inspector.

v1.3.3 (2018-06-21)
-------------------

Security
~~~~~~~~

- CVE-2018-1000559: An XSS vulnerability on the `qute://history` page allowed
  websites to inject HTML into the page via a crafted title tag. This could
  allow them to steal your browsing history. If you're currently unable to
  upgrade, avoid using `:history`. See the related GitHub issue for details:
  https://github.com/qutebrowser/qutebrowser/issues/4011.

Fixed
~~~~~

- Crash in a workaround for a Qt 5.11 bug in rare circumstances.
- Workaround for a Qt bug which preserves searches between page loads.
- In v1.3.2 a dependency on the `PyQt5.QtQuickWidgets` module was accidentally
  introduced. Since that module isn't packaged everywhere, it's been removed
  again.

v1.3.2 (2018-06-10)
-------------------

Fixed
~~~~~

- QtWebEngine: Improved workaround for a bug in Qt 5.11 where only the
  top/bottom half of the window is used.
- QtWebEngine: Work around a bug in Qt 5.11 where an endless loading-loop is
  triggered when clicking a link with an unknown scheme.
- QtWebEngine: When switching between pages with changed settings, less
  unnecessary reloads are done now.
- QtWebEngine: It's now possible to open external links such as `magnet://` or
  `mailto:` via hints.

v1.3.1 (2018-05-29)
-------------------

Fixed
~~~~~

- Work around a bug in Qt 5.11 where only the top/bottom half of the window is used.
  This workaround is incomplete, but fixes the majority of the cases where this happens.
- Work around keyboard focus issues with Qt 5.11.
- Work around an issue in Qt 5.11 where e.g. activating JavaScript per-domain
  needed a manual reload in some cases.
- Don't crash when a ² key is pressed (e.g. on AZERTY keyboards).
- Don't crash when a tab is opened and quickly closed again.


v1.3.0 (2018-05-03)
-------------------

Added
~~~~~

- New `:scroll-to-anchor` command to scroll to an anchor in the document.
- New `url.open_base_url` option to open the base URL of a searchengine when no
  search term is given.
- New `tabs.min_width` setting to configure the minimal width for tabs.
- New userscripts:
  * `getbib` to download bibtex information for DOIs on a page.
  * `qute-keepass` to get passwords from KeePassX.

Changed
~~~~~~~

- QtWebEngine: Support for JavaScript Shared Web Workers have been disabled on
  Qt versions older than 5.11 because of security issues in in Chromium.
  You can get the same effect in earlier versions via
  `:set qt.args ['disable-shared-workers']`. An equivalent workaround is also
  contained in Qt 5.9.5 and 5.10.1.
- The file dialog for downloads now has basic tab completion based on the
  entered text.
- `:version` now shows OS information for POSIX OS other than Linux/macOS.
- When there's an error inserting the text from an external editor, a backup
  file is now saved.
- The `window.hide_wayland_decoration` setting got renamed to
  `window.hide_decoration` and now also works outside of wayland.
- The `tabs.favicons.show` setting now can take three values: `'always'` (was
  `True`), `'never'` (was `False`) and `'pinned'` (to only show favicons for
  pinned tabs).
- Hover tooltips on tabs now always show the webpage's title.
- The default value for `content.host_blocking.lists` was changed to only
  include https://github.com/StevenBlack/hosts[Steven Black's hosts-list] which
  combines various sources.
- Error messages when trying to wrap when `tabs.wrap` is `False` are now logged
  to debug instead of messages.

Fixed
~~~~~

- Using hints before a page is fully loaded is now possible again.
- Selecting hints with the number keypad now works again.
- Tab titles for tabs loaded from sessions should now really be correct instead
  of showing the URL.
- Loading URLs with customized settings from a session now avoids an additional
  reload.
- The window icon and title now get set correctly again.
- The `tabs.switching_delay` setting now has a correct maximum value limit set.
- The `taskadd` script now works properly when there's multi-line output.
- QtWebEngine: Worked around issues with GreaseMonkey/stylesheets not being
  loaded correctly in some situations.
- The statusbar now more closely reflects the caret mode state.
- The icon on Windows should now be displayed in a higher resolution.
- The QtWebEngine development tools (inspector) now also work when JavaScript is
  disabled globally.
- Building `.exe` files now works when `upx` is installed on the system.
- The keyhint widget now shows the correct text for chained modifiers.
- Loading GreaseMonkey scripts now also works with Jinja2 2.8 (e.g. on Debian
  Stable).
- Adding styles with GreaseMonkey on fast sites now works properly.
- Window ID 0 is now excluded properly from `:tab-take` completion.
- A rare crash when cancelling a download has been fixed.
- The Makefile (intended for packagers) now supports `PREFIX` properly.
- The workaround for a black window with Nvidia graphics is now enabled on
  non-Linux systems (like FreeBSD) as well.
- Initial support for Qt 5.11.
- Checking for a new version after sending a crash report now works properly
  again.
- `@match` in Greasemonkey scripts now more closely matches the proper pattern
  syntax.
- Searching via `/` or `?` now doesn't handle any characters in a special way.
- Fixed crash when trying to retry some failed downloads on QtWebEngine.
- An invalid spellcheck dictionary filename now doesn't crash anymore.
- When no spellcheck dictionaries are configured, it's now disabled internally.
  This works around an issue with entering special characters on Facebook
  messenger.
- The macOS release now should work again on macOS 10.11 and newer.

v1.2.1 (2018-03-14)
-------------------

Fixed
~~~~~

- qutebrowser now starts properly when the PyQt5 QOpenGLFunctions package wasn't
  found.
- The keybinding cheatsheet on the quickstart page is now loaded from a local
  `qute://` URL again.
- With "tox -e mkvenv-pypi", PyQt 5.10.0 is used again instead of Qt 5.10.1,
  because of an issue with Qt 5.10.1 which causes qutebrowser to fail to start
  ("Could not find QtWebEngineProcess").
- Unbinding keys which were bound in older qutebrowser versions now doesn't
  crash anymore.
- Fixed a crash when reloading a page which wasn't fully loaded with v1.2.0
- Keys on the numeric keypad now fall back to the same bindings without `Num+`
  if no `Num+` binding was found.
- Fixed hinting on some pages with Qt < 5.10.
- Titles are now displayed correctly again for tabs which are cloned or loaded
  from sessions.
- Shortcuts now correctly use `Ctrl` instead of `Command` on macOS again.

v1.2.0 (2018-03-09)
-------------------

Added
~~~~~

- Initial implementation of per-domain settings:
  * `:set` and `:config-cycle` now have a `-u`/`--pattern` argument taking a
    https://developer.chrome.com/extensions/match_patterns[URL match pattern]
    for supported settings.
  * `config.set` in `config.py` now takes a third argument which is the pattern.
  * New `with config.pattern('...') as p:` context manager for `config.py` to
    use the shorthand syntax with a pattern.
  * New `tsh` keybinding to toggle scripts for the current host. With a capital
    `S`, the toggle is saved. With a capital `H`, subdomains are included. With
    `u` instead of `h`, the exact current URL is used.
  * New `tph` keybinding to toggle plugins, with the same additional binding
    described above.
- New QtWebEngine features:
  * Caret/visual mode
  * Authentication via ~/.netrc
  * Retrying downloads with Qt 5.10 or newer
  * Hinting and other features inside same-origin frames
- New flags for existing commands:
  * `:session-load` has a new `--delete` flag which deletes the
    session after loading it.
  * New `--no-last` flag for `:tab-focus` to not focus the last tab when focusing
    the currently focused one.
  * New `--edit` flag for `:view-source` to open the source in an external editor.
  * New `--select` flag for `:follow-hint` which acts like the given string was entered but doesn't necessary follow the hint.
- New special pages:
  * `qute://bindings` (opened via `:bind`) which shows all keybindings.
  * `qute://tabs` (opened via `:buffer`) which lists all tabs.
- New settings:
  * `statusbar.widgets` to configure which widgets should be shown in which
    order in the statusbar.
  * `tabs.mode_on_change` which replaces `tabs.persist_mode_on_change`. It can
    now be set to `restore` which remembers input modes (input/passthrough)
    per tab.
  * `input.insert_mode.auto_enter` which makes it possible to disable entering
    insert mode automatically when an editable element was clicked. Together
    with `input.forward_unbound_keys`, this should allow for emacs-like
    "modeless" keybindings.
- New `:prompt-yank` command (bound to `Alt-y` by default) to yank URLs
  referenced in prompts.
- The `hostblock_blame` script which was removed in v1.0 was updated for the new
  config and re-added.
- New `cycle-inputs.js` script in `scripts/` which can be used with `:jseval -f`
  to cycle through inputs.

Changed
~~~~~~~

- Complete refactoring of key input handling, with various effects:
  * emacs-like keychains such as `<Ctrl-X><Ctrl-C>` can now be bound.
  * Key chains can now be bound in any mode (this allows binding unused keys in
    hint mode).
  * Yes/no prompts don't use keybindings from the `prompt` section anymore, they
    have their own `yesno` section instead.
  * Trying to bind invalid keys now shows an error.
  * The `bindings.default` setting can now only be set in a `config.py`, and
    existing values in `autoconfig.yml` are ignored.
- Improvements for GreaseMonkey support:
  * `@include` and `@exclude` now support regex matches. With QtWebEngine and Qt
    5.8 and newer, Qt handles the matching, but similar functionality will be
    added in Qt 5.11.
  * Support for `@requires`
  * Support for the GreaseMonkey 4.0 API
- The sqlite history now uses write-ahead logging which should be
  a performance and stability improvement.
- When an editor is spawned with `:open-editor` and `:config-edit`, the changes
  are now applied as soon as the file is saved in the editor.
- The `hist_importer.py` script now only imports URL schemes qutebrowser can
  handle.
- Deleting a prefix (`:`, `/` or `?`) via backspace now leaves command mode.
- Angular 1 elements and `<summary>`/`<details>` now get hints assigned.
- `:tab-only` with pinned tabs now still closes unpinned tabs.
- The `url.incdec_segments` option now also can take `port` as possible segment.
- QtWebEngine: `:view-source` now uses Chromium's `view-source:` scheme.
- Tabs now show their full title as tooltip.
- When there are multiple unknown keys in a autoconfig.yml, they now all get
  reported in one error.
- More performance improvements when opening/closing many tabs.
- The `:version` page now has a button to pastebin the information.
- Replacements like `{url}` can now be escaped as `{{url}}`.

Fixed
~~~~~

- QtWebEngine bugfixes:
  * Improved fullscreen handling with Qt 5.10.
  * Hinting and scrolling now works properly on special `view-source:` pages.
  * Scroll positions are now restored correctly from sessions.
  * `:follow-selected` should now work in more cases with Qt > 5.10.
  * Incremental search now flickers less and doesn't move to the second result
    when pressing Enter.
  * Keys like `Ctrl-V` or `Shift-Insert` are now correctly handled/filtered with
    Qt 5.10.
  * Fixed hangs/segfaults on exit with Qt 5.10.1.
  * Fixed favicons sometimes getting cleared with Qt 5.10.
  * Qt download objects are now cleaned up properly when a download is removed.
  * JavaScript messages are now not double-HTML escaped anymore on Qt < 5.11
- QtWebKit bugfixes:
  * Fixed GreaseMonkey-related crashes.
  * `:view-source` now displays a valid URL.
- URLs containing ampersands and other special chars are now shown correctly
  when filtering them in the completion.
- `:bookmark-add "" foo` can now be used to save the current URL with a custom
  title.
- `:spawn -o` now waits until the process has finished before trying to show the
  output. Previously, it incorrectly showed the previous output immediately.
- Suspended pages now should always load the correct page when being un-suspended.
- Exception types are now shown properly with `:config-source` and `:config-edit`.
- When using `:bookmark-add --toggle`, bookmarks are now saved properly.
- Crash when opening an invalid URL from an application on macOS.
- Crash with an empty `completion.timestamp_format`.
- Crash when `completion.min_chars` is set in some cases.
- HTML/JS resource files are now read into RAM on start to avoid crashes when
  changing qutebrowser versions while it's open.
- Setting `bindings.key_mappings` to an empty value is now allowed.
- Bindings to an empty commands are now ignored rather than crashing.

Removed
~~~~~~~

- `QUTE_SELECTED_HTML` is now not set for userscripts anymore except when called
  via hints.
- The `qutebrowser_viewsource` userscript has been removed as
  `:view-source --edit` can now be used.
- The `tabs.persist_mode_on_change` setting has been removed and replaced by
  `tabs.mode_on_change`.

v1.1.2 (2018-03-01)
-------------------

Changed
~~~~~~~

- Windows/macOS releases now bundle Qt 5.10.1 which includes security fixes from
  Chromium up to version 64.0.3282.140.

Fixed
~~~~~

- QtWebEngine: Crash with Qt 5.10.1 when using :undo on some tabs.
- Compatibility with Python 3.7

v1.1.1 (2018-01-20)
-------------------

Fixed
~~~~~

- The Makefile now actually works.
- Fixed crashes with Qt 5.10 when closing a tab before it finished loading.

v1.1.0 (2018-01-15)
-------------------

Added
~~~~~

- Initial support for Greasemonkey scripts. There are still some rough edges,
  but many scripts should already work.
- There's now a `misc/Makefile` file in releases, which should help
  distributions which package qutebrowser, as they can run something like
  `make -f misc/Makefile DESTDIR="$pkgdir" install` now.
- New fields for `window.title_format` and `tabs.title.format`:
  * `{current_url}`
  * `{protocol}`
- New settings:
  * `colors.statusbar.passthrough.fg`/`.bg`
  * `completion.delay` and `completion.min_chars` to update the completion less
    often.
  * `completion.use_best_match` to automatically use the best-matching
    command in the completion.
  * `keyhint.radius` to configure the edge rounding for the key hint widget.
  * `qt.highdpi` to turn on Qt's High-DPI scaling.
  * `tabs.pinned.shrink` (`true` by default) to make it possible
    for pinned tabs and normal tabs to have the same size.
  * `content.windowed_fullscreen` to show e.g. a fullscreened video in the
    window without fullscreening that window.
  * `tabs.persist_mode_on_change` to keep the current mode when
    switching tabs.
  * `session.lazy_restore` which allows to not load pages immediately
    when restoring a session.
- New commands:
  * `:tab-give` and `:tab-take`, to give tabs to another window, or take them
    from another window.
  * `:completion-item-yank` (bound to `<Ctrl-C>`) to yank the current
    completion item text.
  * `:edit-command` to edit the commandline in an editor.
  * `search.incremental` for incremental text search.
- New flags for existing commands:
  * `-o` flag for `:spawn` to show stdout/stderr in a new tab.
  * `--rapid` flag for `:command-accept` (bound to `Ctrl-Enter` by default),
    which allows executing a command in the completion without closing it.
  * `--private` and `--related` flags for `:edit-url`, which have the
    same effect they have with `:open`.
  * `--history` for `:completion-item-focus` which causes it to go
    through the command history when no text was entered. The default bindings for
    cursor keys in the completion changed to use that, so that they can be used
    again to navigate through completion items when a text was entered.
  * `--file` for `:debug-pyeval` which makes it take a filename instead of a
    line of code.
- New `config.source(...)` method for `config.py` to source another file.
- New `{line}` and `{column}` replacements for `editor.command` to position the
  cursor correctly.
- New `qute-pass` userscript as alternative to `password_fill` which allows
  selecting accounts via rofi or any other dmenu-compatile application.
- New `hist_importer.py` script to import history from Firefox/Chromium.

Changed
~~~~~~~

- Some settings got renamed:
  * `tabs.width.bar` -> `tabs.width`
  * `tabs.width.indicator` -> `tabs.indicator.width`
  * `tabs.indicator_padding` -> `tabs.indicator.padding`
  * `session_default_name` -> `session.default_name`
  * `ignore_case` -> `search.ignore_case`
- Much improved user stylesheet handling for QtWebEngine which reduces
  flickering and updates immediately after setting a stylesheet.
- High-DPI favicons are now used when available.
- The `asciidoc2html.py` script now uses Pygments (which is already a dependency
  of qutebrowser) instead of `source-highlight` for syntax highlighting.
- The `:buffer` command now doesn't require quoting anymore, similar to `:open`.
- The `importer.py` script was largely rewritten and now also supports importing
  from Firefox' `places.sqlite` file and Chrome/Chromium profiles.
- Various internal refactorings to use Python 3.5 and ECMAscript 6 features.
- If the `window.hide_wayland_decoration` setting is False, but
  `QT_WAYLAND_DISABLE_WINDOWDECORATION` is set in the environment,
  the decorations are still hidden.
- The `install_dict.py` script for QtWebEngine was renamed to `dictcli.py` and
  can now also upgrade dictionaries correctly.
- `:undo` now can re-open multiple tabs after `:tab-only` was used.
- `:config-write-py` with a relative path now puts the file into the config
  directory.
- The `qute://version` page now also shows the uptime of qutebrowser.
- qutebrowser now prompts to create a non-existing directory when starting a
  download.
- `:jseval --file` now searches relative paths in a `js/` subdir in
  qutebrowser's data dir, e.g. `~/.local/share/qutebrowser/js`.
- The current/default bindings are now shown in the ``:bind` completion.
- Empty categories are now hidden in the `:open` completion.
- Search terms for URLs and titles can now be mixed when filtering the
  completion.
- The default font size for the UI got bumped up from 8pt to 10pt.
- Improved matching in the completion: The words entered are now matched in any
  order, and mixed matches on URL/tite are possible.
- The system's default encoding (rather than UTF-8) is now used to decode
  subprocess output.
- qutebrowser now ensures it's focused again after an external editor is closed.
- The `colors.completion.fg` setting can now be a list, allowing to specify
  different colors for the three completion columns.

Fixed
~~~~~

- More consistent sizing for favicons with vertical tabs.
- Using `:home` on pinned tabs is now prevented.
- Fix crash with unknown file types loaded via `qute://help`.
- Scrolling performance improvements.
- Sites like `qute://help` now redirect to `qute://help/` to make sure links
  work properly.
- Fixes for the size calculation of pinned tabs in the tab bar.
- Worked around a crash with PyQt 5.9.1 compiled against Qt < 5.9.1 when using
  `:yank` or `qute://` URLs.
- Fixed crash when opening `qute://help/img`.
- Fixed `gU` (`:navigate up`) on `qute://help` and webservers not handling `..`
  in a URL.
- Using e.g. `-s backend webkit` to set the backend now works correctly.
- Fixed crash when closing the tab an external editor was opened in.
- When using `:search-next` before a search is finished, no warning about no
  results being found is shown anymore.
- Fix `:click-element` with an ID containing non-alphanumeric characters.
- Fix crash when a subprocess outputs data which is not decodable as UTF-8.
- Fix crash when closing a tab immediately after hinting.
- Worked around issues in Qt 5.10 with loading progress never being finished.
- Fixed a crash when writing a flag before a command (e.g. `:-w open `).
- Fixed a crash when clicking certain form elements with QtWebEngine.

Deprecated
~~~~~~~~~~

- `:tab-detach` has been deprecated, as `:tab-give` without argument can be used
  instead.

Removed
~~~~~~~

- The long-deprecated `:prompt-yes`, `:prompt-no`, `:paste-primary` and `:paste`
  commands have been removed.
- The invocation `:download <url> <dest>` which was deprecated in v0.5.0 was
  removed, use `:download --dest <dest> <url>` instead.
- The `messages.unfocused` option which wasn't used anymore was removed.
- The `x[xtb]` default bindings got removed again as many users accidentally
  triggered them.

v1.0.4 (2017-11-28)
-------------------

Fixed
~~~~~

- The `qute://gpl` page now works correctly again.
- Trying to bind an empty command now doesn't crash anymore.
- Fixed crash when `:config-write-py` fails to write to the given path.
- Fixed crash for some users when selecting a file with Qt 5.9.3
- Improved handling for various SQL errors
- Fix crash when setting content.cache.size to a big value (> 2 GB)

v1.0.3 (2017-11-04)
-------------------

Changed
~~~~~~~

- macOS and Windows builds are now built with PyQt 5.9.1 and Qt 5.9.2, including
  various bugfixes, as well as security fixes from Chromium up to version
  61.0.3163.79.
- Performance improvements for tab rendering.
- The :open-editor command is now not hidden anymore as it's also usable in
  normal mode.

Fixed
~~~~~

- Handle accessing a locked sqlite database gracefully
- Abort pinned tab dialogs properly when a tab is closed e.g. by closing a
  window
- Unbinding a default keybinding twice now doesn't bind it again
- Completions are now sorted correctly again when filtered

v1.0.2 (2017-10-17)
-------------------

Fixed
~~~~~

- Fix workaround for black screens or crashes with Nvidia cards
- Handle a filesystem going read-only gracefully
- Fix crash when setting `fonts.monospace`
- Fix list options not being modifyable via `.append()` in `config.py`
- Mark the content.notifications setting as QtWebKit only correctly
- Fix wrong rendering of keys like `<back>` in the completion

Changed
~~~~~~~

- Nicer error messages and other minor improvements

v1.0.1 (2017-10-13)
-------------------

Fixed
~~~~~

- Fixed starting after customizing `fonts.tabs` or `fonts.debug_console`.
- Fixed starting with old PyQt versions compiled against newer Qt versions.
- Fixed check for PyQt version to correctly enforce 5.7 (not 5.2).

v1.0.0 (2017-10-12)
-------------------

Major changes
~~~~~~~~~~~~~

- Dependency changes:
  * Support for legacy QtWebKit (before 5.212 which is
    https://github.com/annulen/webkit/wiki[distributed independently from Qt])
    is dropped.
  * Support for Python 3.4 is dropped.
  * Support for Qt before 5.7.1 and PyQt before 5.7 is dropped.
  * New dependency on the QtSql module and Qt sqlite support.
  * New dependency on the http://www.attrs.org/[attrs] project (packaged as
    `python-attr` in some distributions).
  * The depedency on PyOpenGL (when using QtWebEngine) got removed. Note
    that PyQt5.QtOpenGL is still a dependency.
  * PyQt5.QtOpenGL is now always required, even with QtWebKit.
- The QtWebEngine backend is now used by default. Note this means that
  QtWebEngine now should be a required dependency, and QtWebKit (if new enough)
  should be changed to an optional dependency.
- Completely rewritten configuration system which ignores the old config file.
  See link:qute://help/configuring.html[] for details.
- Various documentation files got moved to the doc/ subfolder;
 `qutebrowser.desktop` got moved to misc/.
- `:set` now doesn't support toggling/cycling values anymore, that functionality
  got moved to `:config-cycle`.
- New completion engine based on sqlite, which allows to complete
  the entire browsing history. The default for
  `completion.web_history_max_items` got changed to `-1` (unlimited). If the
  completion is too slow on your machine, try setting it to a few 1000 items.
- Up/Down now navigates through the command history instead of selecting
  completion items. Either use Tab to cycle through the completion, or
  https://github.com/qutebrowser/qutebrowser/blob/master/doc/help/configuring.asciidoc#migrating-older-configurations[restore the old behavior].

Added
~~~~~

- QtWebEngine: Spell checking support, see the `spellcheck.languages` setting.
- New `qt.args` setting to pass additional arguments to Qt/Chromium.
- New `backend` setting to select the backend to use.
  Together with the previous setting, this should make most wrapper scripts
  unnecessary.
- qutebrowser can now be set as the default browser on macOS.
- New config commands:
  * `:config-cycle` to cycle an option between multiple values.
  * `:config-unset` to remove a configured option.
  * `:config-clear` to remove all configured options.
  * `:config-source` to (re-)read a `config.py` file.
  * `:config-edit` to open the `config.py` file in an editor.
  * `:config-write-py` to write a `config.py` template file.
- New `:version` command which opens `qute://version`.
- New back/forward indicator in the statusbar.
- New `bindings.key_mappings` setting to map keys to other keys.
- QtWebEngine: Support for proxy authentication.

Changed
~~~~~~~

- Using `:download` now uses the page's title as filename.
- Using `:back` or `:forward` with a count now skips intermediate pages.
- When there are multiple messages shown, the timeout is increased.
- `:search` now only clears the search if one was displayed before, so pressing
  `<Escape>` doesn't un-focus inputs anymore.
- Pinned tabs now adjust to their text's width, so the `tabs.width.pinned`
  setting got removed.
- `:set-cmd-text` now has a `--run-on-count` argument to run the underlying
  command directly if a count was given.
- `:scroll-perc` got renamed to `:scroll-to-perc`.

Removed
~~~~~~~

- Migrating QtWebEngine data written by versions before 2016-11-15 (before
  v0.9.0) is now not supported anymore.
- Upgrading qutebrowser with a version older than v0.4.0 still running now won't
  work properly anymore.
- The `--harfbuzz` and `--relaxed-config` commandline arguments got dropped.

Fixes
~~~~~

- Exiting fullscreen via `:fullscreen` or buttons on a page now
  restores the correct previous window state (maximized/fullscreen).
- When `input.insert_mode.auto_load` is set, background tabs now don't enter
  insert mode anymore.
- The keybinding help widget now works correctly when using keybindings with a
  count.
- The `window.hide_wayland_decoration` setting now works correctly again.

v0.11.1 (2017-10-09)
--------------------

Fixes
~~~~~

- Fixed empty space being shown after tabs in the tabbar in some cases.
- Fixed `:restart` in private browsing mode.
- Fixed printing on macOS.
- Closing a pinned tab via mouse now also prompts for confirmation.
- The "try again" button on error pages works correctly again.
- :spawn -u -d is now disallowed.
- :spawn -d shows error messages correctly now.

v0.11.0 (2017-07-04)
--------------------

New dependencies
~~~~~~~~~~~~~~~~

- New dependency on `PyQt5.QtOpenGL` if QtWebEngine is used. QtWebEngine depends
  on QtOpenGL already, but on distributions packaging split PyQt5 wrappers, the
  wrappers for QtOpenGL are now required.
- New dependency on `PyOpenGL` if QtWebEngine is used.

Added
~~~~~

- Private browsing is now implemented for QtWebEngine, *and changed its
  behavior*: The `general -> private-browsing` setting now only applies to newly
  opened windows, and you can use the `-p` flag to `:open` to open a private
  window.
- New "pinned tabs" feature, with a new `:tab-pin` command (bound
  to `<Ctrl-p>` by default).
- (QtWebEngine) Implemented `:follow-selected`.
- New `:clear-messages` command to clear shown messages.
- New `ui -> keyhint-delay` setting to configure the delay until
  the keyhint overlay pops up.
- New `-s` option for `:open` to force a HTTPS scheme.
- `:debug-log-filter` now accepts `none` as an argument to clear any log
  filters.
- New `--debug-flag` argument which replaces `--debug-exit` and
  `--pdb-postmortem`.
- New `tabs -> favicon-scale` option to scale up/down favicons.
- `colors -> statusbar.bg/fg.private` and `.command.private` to
  customize statusbar colors for private windows.
- New `{private}` field displaying `[Private Mode]` for
  `ui -> window-title-format` and `tabs -> title-format`.
- (QtWebEngine) Proxy support with Qt 5.7.1 (already was supported for 5.8 and
  newer)

Changed
~~~~~~~

- To prevent elaborate phishing attacks, the Punycode version (`xn--*`) is now
  shown in addition to the decoded version for international domain names
  (IDN).
- Starting with legacy QtWebKit now shows a warning message.
  *With the next release, support for it will be removed.*
- The Windows releases are redone from scratch, which means:
  * They now use the new QtWebEngine backend
  * The bundled Qt is updated from 5.5 to 5.9
  * The bundled Python is updated from 3.4 to 3.6
  * They are now generated with PyInstaller instead of cx_Freeze
  * The installer is now generated using NSIS instead of being a MSI
- Improved `qute://history` page (with lazy loading)
- Crash reports are not public anymore.
- Paths like `C:` are now treated as absolute paths on Windows for downloads,
  and invalid paths are handled properly.
- Comments in the config file are now placed before the individual options
  instead of being before sections.
- Messages are now hidden when clicked.
- stdin is now closed immediately for processes spawned from qutebrowser.
- When `ui -> message-timeout` is set to 0, messages are now never cleared.
- Middle/right-clicking the blank parts of the tab bar (when vertical) now
  closes the current tab.
- The adblocker now also blocks non-GET requests (e.g. POST).
- `javascript:` links can now be hinted.
- `:view-source`, `:tab-clone` and `:navigate --tab` now don't open the tab as
  "explicit" anymore, i.e. (with the default settings) open it next to the
  active tab.
- `qute:*` pages now use `qute://*` instead (e.g. `qute://version` instead of
  `qute:version`), but the old versions are automatically redirected.
- Texts in prompts are now selectable.
- The default level for `:messages` is now `info`, not `error`
- Trying to focus the currently focused tab with `:tab-focus` now focuses the
  last viewed tab.
- (QtWebEngine) With Qt 5.9, `content -> cookies-store` can now be set without
  a restart.
- (QtWebEngine) With Qt 5.9, better error messages are now shown for failed
  downloads.
- (QtWebEngine) The underlying Chromium version is now shown in the version
  info.
- (QtWebKit) Renderer process crashes now show an error page on Qt 5.9 or newer.
- (QtWebKit) storage -> offline-web-application-storage` got renamed to `...-cache`
- (QtWebKit) PAC now supports SOCKS5 as type.

Fixed
~~~~~

- The macOS .dmg is now built against Qt 5.9 which fixes various
  important issues (such as not being able to type dead keys).
- Fixed crash with `:download` on PyQt 5.9.
- Cloning a page without history doesn't crash anymore.
- When a download results in a HTTP error, it now shows the error correctly
  instead of crashing.
- Pressing ctrl-c while a config error is shown works as intended now.
- When the key config isn't writable, we now show an error instead of crashing.
- Fixed crash when unbinding an unbound key in the key config.
- Fixed crash when using `:debug-log-filter` when `--filter` wasn't given on startup.
- Fixed crash with some invalid setting values.
- Continuing a search after clearing it now works correctly.
- The tabbar and completion should now be more consistently and correctly
  styled with various system styles.
- Applying styiles in `qt5ct` now shouldn't crash anymore.
- The validation for colors in stylesheets is now less strict,
  allowing for all valid Qt values.
- `data:` URLs now aren't added to the history anymore.
- Accidentally starting with Python 2 now shows a proper error message again.
- For some people, running some userscripts crashed - this should now be fixed.
- Various other rare crashes should now be fixed.
- The settings documentation was truncated with v0.10.1 which should now be
  fixed.
- Scrolling to an anchor in a background tab now works correctly, and javascript
  gets the correct window size for background tabs.
- (QtWebEngine) Added a workaround for a black screen with some setups
- (QtWebEngine) Starting with Nouveau graphics now shows an error message
  instead of crashing in Qt.
- (QtWebEngine) Retrying downloads now shows an error instead of crashing.
- (QtWebEngine) Cloning a view-source tab now doesn't crash anymore.
- (QtWebEngine) `window.navigator.userAgent` is now set correctly when
  customizing the user agent.
- (QtWebEngine) HTML fullscreen is now tracked for each tab separately, which
  means it's not possible anymore to accidentally get stuck in fullscreen state
  by closing a tab with a fullscreen video.
- (QtWebEngine) `:scroll-page` with `--bottom-navigate` now works correctly.
- (QtWebKit) The HTTP cache is disabled on Qt 5.7.1 and 5.8 now as it leads to
  frequent crashes due to a Qt bug.
- (QtWebKit) Fixed Crash when a PAC file returns an invalid value.

v0.10.1 (2017-03-08)
--------------------

Changed
~~~~~~~

- `--qt-arg` and `--qt-flag` can now also be used to pass arguments to Chromium when using QtWebEngine.

Fixed
~~~~~

- URLs are now redacted properly (username/password, and path/query for HTTPS) when using Proxy Autoconfig with QtWebKit
- Crash when updating adblock lists with invalid UTF8-chars in them
- Fixed the web inspector with QtWebEngine
- Version checks when starting qutebrowser now also take the Qt version PyQt was compiled against into account
- Hinting a input now doesn't select existing text anymore with QtWebKit
- The cursor now moves to the end when input elements are selected with QtWebEngine
- Download suffixes like (1) are now correctly stripped with QtWebEngine
- Crash when trying to print a tab which was closed in the meantime
- Crash when trying to open a file twice on Windows

v0.10.0 (2017-02-25)
--------------------

Added
~~~~~

- Userscripts now have a new `$QUTE_COMMANDLINE_TEXT` environment variable, containing the current commandline contents
- New `ripbang` userscript to create a searchengine from a duckduckgo bang
- link:https://github.com/annulen/webkit/wiki[QtWebKit Reloaded] (also called QtWebKit-NG) is now fully supported
- Various new functionality with the QtWebEngine backend:
    * Printing support with Qt >= 5.8
    * Proxy support with Qt >= 5.8
    * The `general -> print-element-backgrounds` option with Qt >= 5.8
    * The `content -> cookies-store` option
    * The `storage -> cache-size` option
    * The `colors -> webpage.bg` option
    * The HTML5 fullscreen API (e.g. youtube videos) with QtWebEngine
    * `:download --mhtml`
- New `qute:history` URL and `:history` command to show the browsing history
- Open tabs are now auto-saved on each successful load and restored in case of a crash
- `:jseval` now has a `--file` flag so you can pass a javascript file
- `:session-save` now has a `--only-active-window` flag to only save the active window
- macOS builds are back, and built with QtWebEngine

Changed
~~~~~~~

- PyQt 5.7/Qt 5.7.1 is now required for the QtWebEngine backend
- Scrolling with the scrollwheel while holding shift now scrolls sideways
- New way of clicking hints which solves various small issues
- When yanking a mailto: link via hints, the mailto: prefix is now stripped
- Zoom level messages are now not stacked on top of each other anymore
- qutebrowser now automatically uses QtWebEngine if QtWebKit is unavailable
- :history-clear now asks for a confirmation, unless it's run with --force.
- `input -> mouse-zoom-divider` can now be 0 to disable zooming by mouse wheel
- `network -> proxy` can also be set to `pac+file://...` now to
  use a local proxy autoconfig file (on QtWebKit)

Removed
~~~~~~~

- (QtWebKit) Various rarely customized settings were removed:
  * `ui -> css-media-type` (defaults to desktop)
  * `general -> site-specific-quirks` (now always turned on)
  * `storage -> offline-storage-default-quota` (defaults to 5MB)
  * `storage -> offline-web-application-cache-quota` (defaults to no quota)
  * `storage -> object-cache-capacities` (default depends on disk space)
  * `content -> css-regions` (now always turned off)
  * `storage -> offline-storage-database` (merged into `storage -> local-storage`)

Fixed
~~~~~

- Various bugs with Qt 5.8 and QtWebEngine:
    * Segfault when closing a window
    * Segfault when closing a tab with a search active
    * Fixed various mouse actions (like automatically entering insert mode) not working
    * Fixed hints sometimes not working
    * Segfault when opening a URL after a QtWebEngine renderer process crash
- Other QtWebEngine fixes:
    * Insert mode now gets entered correctly with a non-100% zoom
    * Crash reports are now re-enabled when using QtWebEngine
    * Fixed crashes when closing tabs while hinting
    * Using :undo or :tab-clone with a view-source:// or chrome:// tab is now prevented, as it segfaults
- `:enter-mode` now refuses to enter modes which can't be entered manually (which caused crashes)
- `:record-macro` (`q`) now doesn't try to record macros for special keys without a text
- Fixed PAC (proxy autoconfig) not working with QtWebKit
- `:download --mhtml` now uses the new file dialog
- Word hints are now upper-cased correctly when hints -> uppercase is true
- Font validation is now more permissive in the config, allowing e.g. "Terminus
  (TTF)" as font name
- Fixed starting on newer PyQt/sip versions with LibreSSL
- When downloading files with QtWebKit, a User-Agent header is set when possible
- Fixed showing of keybindings in the :help completion
- `:navigate prev/next` now detects `rel` attributes on `<a>` elements, and
  handles multiple `rel` attributes correctly
- Fixed a crash when hinting with target `userscript` and spawning a non-existing script
- Lines in Jupyter notebook now trigger insert mode

v0.9.1 (2017-01-13)
-------------------

Fixed
~~~~~

- Prevent websites from downloading files to a location outside of the download
  folder with QtWebEngine.

v0.9.0 (2016-12-28)
-------------------

Added
~~~~~

- *New dependency:* qutebrowser now depends on the Qt QML module, which is
   packaged separately in some distributions (as Qt Declarative/QML/Quick).
- New `:rl-backward-kill-word` command which does what `:rl-unix-word-rubout`
  did before v0.8.0.
- New `:rl-unix-filename-rubout` command which is similar to readline's
  `unix-filename-rubout`.
- New `fonts -> completion.category` setting to customize the font used for
  completion category headers.
- New `:debug-log-capacity` command to adjust how many lines are logged into RAM
  (to report bugs which are difficult to reproduce).
- New `hide-unmatched-rapid-hints` option to not hide hint unmatched hint labels
  in rapid mode.
- New `{clipboard}` and `{primary}` replacements for the commandline which
  replace the `:paste` command.
- New `:insert-text` command to insert a given text into a field on the page,
  which replaces `:paste-primary` together with the `{primary}` replacement.
- New `:window-only` command to close all other windows.
- New `prev-category` and `next-category` arguments to `:completion-item-focus`
  to focus the previous/next category in the completion (bound to `<Ctrl-Tab>`
  and `<Ctrl-Shift-Tab>` by default).
- New `:click-element` command to fake a click on a element.
- New `:debug-log-filter` command to change console log filtering on-the-fly.
- New `:debug-log-level` command to change the console loglevel on-the-fly.
- New `general -> yank-ignored-url-parameters` option to configure which URL
  parameters (like `utm_source` etc.) to strip off when yanking a URL.
- Support for the
  https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API[HTML5 page visibility API]
- New `readability` userscript which shows a readable version of a page (using
  the `readability-lxml` python package)
- New `cast` userscript to show a video on a Google Chromecast
- New `:run-with-count` command which replaces the (undocumented) `:count:command` syntax.
- New `:record-macro` (`q`) and `:run-macro` (`@`) commands for keyboard macros.
- New `ui -> hide-scrollbar` setting to hide the scrollbar independently of the
  `user-stylesheet` setting.
- New `general -> default-open-dispatcher` setting to configure what to open
  downloads with (instead of e.g. `xdg-open` on Linux).
- Support for PAC (proxy autoconfig) with QtWebKit

Changed
~~~~~~~

- Hints are now drawn natively in Qt instead of using web elements. This has a
  few implications for users:
    * The `hints -> opacity` setting does not exist anymore, but you can use
      `rgba(r, g, b, alpha)` colors instead for `colors -> hints.bg`.
    * The `hints -> font` setting is not affected by
      `fonts -> web-family-fixed` anymore. Thus, a transformer got added to
      change `Monospace` to `${_monospace}`.
    * Gradients in hint colors can now be configured by using `qlineargradient`
      and friends instead of `-webkit-gradient`. The most common cases get
      migrated automatically, but if you drastically changed the defaults,
      you'll need to manually adjust your config.
    * Styling hints by styling `qutehint` elements in `user-stylesheet` was
      never officially supported and does not work anymore.
    * Hints are now not affected by the page's stylesheet or zoom anymore.
- `:bookmark-add` now has a `--toggle` flag which deletes the bookmark if it
  already exists.
- `:bookmark-load` now has a `--delete` flag which deletes the bookmark after
  loading it.
- `:open` now also accepts quickmark names instead of URLs
- `:tab-move` now optionally takes an index for absolute moving.
- Commands taking either an argument or a count (like `:zoom` or `:tab-focus`)
  now prefer the count instead of showing an error message.
- `:open` now has an `--implicit` argument to treat the opened tab as implicit
  (i.e. to open it at the position it would be opened if it was a clicked link)
- `:download-open` and `:prompt-open-download` now have an optional `cmdline`
  argument to pass a commandline to open the download with.
- `:yank` now has a position argument to select what to yank instead of using
  flags.
- Replacements like `{url}` can now also be used in the middle of an argument.
  Consequently, commands taking another command (`:later`, `:repeat` and
  `:bind`) now don't immediately evaluate variables.
- Tab titles in the `:buffer` completion now update correctly when a page's
  title is changed via javascript.
- `:hint` now has a `--mode <mode>` flag to override the hint mode configured
  using the `hints -> mode` setting.
- With `new-instance-open-target` set to a tab option, the tab is now opened in
  the most recently focused (instead of the last opened) window. This can be
  configured with the new `new-instance-open-target.window` setting.
  It can also be set to `last-visible` to show the pages in the most recently
  visible window, or `first-opened` to use the first (oldest) available window.
- Word hints now are more clever about getting the element text from some elements.
- Completions for `:help` and `:bind` now also show hidden commands
- The `:buffer` completion now also filters using the first column (id).
- `:undo` has been improved to reopen tabs at the position they were closed.
- `:navigate` now takes a count for `up`/`increment`/`decrement`.
- The `hints -> auto-follow` setting now can be set to
  `always`/`full-match`/`unique-match`/`never` to more precisely control when
  hints should be followed automatically.
- Counts can now be used with special keybindings (e.g. with modifiers).
  This was already implemented for v0.7.0 originally, but got reverted because
  it caused some issues and then never re-applied.
- Sending a command to an existing instance (via "qutebrowser :reload") now
  doesn't mark it as urgent anymore.
- `tabs -> title-format` now treats an empty string as valid.
- Bindings for `:`, `/` and `?` are now configured explicitly and not hardcoded
  anymore.
- The `completion -> show` setting can now be set to `always`, `auto` or
  `never`.
- `:open-editor` can now be used in any mode.
- Lots of improvements to and bugfixes for the QtWebEngine backend, such as
  working hints. However, using qutebrowser directly from git is still advised
  when using `--backend webengine`.
- `content -> javascript-can-open-windows` got renamed to
  `javascript-can-open-windows-automatically`.
- `:prompt-accept` now optionally accepts a value which overrides the one
  entered in the input box. `yes` and `no` can be used as values for yes/no
  questions.
- The new `--qt-arg` and `--qt-flag` arguments can be used to pass
  arguments/flags to Qt's commandline.
- Error/warning/info messages are now shown stacked above the statusbar.
  This also added various new settings:
    * `colors -> messages.fg.error` (renamed from `statusbar.fg.error`)
    * `colors -> messages.bg.error` (renamed from `statusbar.bg.error`)
    * `colors -> messages.border.error`
    * `colors -> messages.fg.warning` (renamed from `statusbar.fg.warning`)
    * `colors -> messages.bg.warning` (renamed from `statusbar.bg.warning`)
    * `colors -> messages.border.warning`
    * `colors -> messages.fg.info`
    * `colors -> messages.bg.info`
    * `colors -> messages.border.info`
    * `fonts -> messages.error`
    * `fonts -> messages.warning`
    * `fonts -> messages.info`
- The `qute:settings` page now also shows option descriptions.
- `qute:version` and `qutebrowser --version` now show various important paths
- `:spawn`/userscripts now show a nicer error when a script wasn't found
- Various functionality now works when javascript is disabled with QtWebKit
- Various commands/settings taking `left`/`right`/`previous` arguments now take
  `prev`/`next`/`last-used` to remove ambiguity.
- The `ui -> user-stylesheet` setting now only takes filenames, not CSS snippets
- `ui -> window-title-format` now has a new `{backend} ` replacement
- `:hint` has a new `--add-history` argument to add the URL to the history for
  yank/spawn targets.
- `:set` now cycles through values if more than one argument is given.
- `:open` now opens `default-page` without a URL even without `-t`/`-b`/`-w` given.

Deprecated
~~~~~~~~~~

- The `:paste` command got deprecated as `:open` with `{clipboard}` and
  `{primary}` can be used instead.
- The `:paste-primary` command got deprecated as `:insert-text {primary}` can
  be used instead.
- The `:prompt-yes` and `:prompt-no` commands got deprecated as
  `:prompt-accept yes` and `:prompt-accept no` can be used instead.

Removed
~~~~~~~

- The `:yank-selected` command got merged into `:yank` as `:yank selection`
  and thus removed.
- The `:completion-item-prev` and `:completion-item-next` commands got merged
  into a new `:completion-focus {prev,next}` command and thus removed.
- The `ui -> hide-mouse-cursor` setting since it was completely broken and
  nobody seemed to care.
- The `hints -> opacity` setting - see the "Changed" section for details.
- The `completion -> auto-open` setting got merged into `completion -> show` and
  thus removed.
- All `--qt-*` arguments got replaced by `--qt-arg` and `--qt-flag` and thus
  removed.
- The `-c`/`--confdir`, `--datadir` and `--cachedir` arguments got removed, as
  `--basedir` should be sufficient.

Fixed
~~~~~

- `:undo` now doesn't undo tabs "closed" by `:tab-detach` anymore.
- Fixed an issue with hint chars not being cleared correctly when leaving hint
  mode.
- `:tab-detach` now fails correctly when there's only one tab open.
- Various small issues with the command completion
- Fixed hang when using multiple spaces in a row with the URL completion
- qutebrowser now still starts with an incorrectly configured
  `$XDG_RUNTIME_DIR`.
- Fixed crash when a userscript writes invalid unicode data to the FIFO
- Fixed crash when a included HTML was not found

v0.8.3 (2016-11-05)
-------------------

Fixed
~~~~~

- Fixed crash when doing `:<space><enter>`, another corner-case introduced in v0.8.0
- Fixed `:open-editor` (`<Ctrl-e>`) on Windows
- Fixed crash when setting `general -> auto-save-interval` to a too big value.
- Fixed crash when using hints on Void Linux.
- Fixed compatibility with Python 3.5.2+ on Debian unstable
- Compatibility with pdfjs v1.6.210
- `:bind` can now be used to bind to an alias (binding by editing `keys.conf`
  already worked before)
- The command completion now updates correctly when changing aliases
- The tabbar now displays correctly with the Adwaita Qt theme
- The default `sk` keybinding now sets the commandline to `:bind` correctly
- Fixed crash when closing a window without focusing it
- Userscripts now can access QUTE_FIFO correctly on Windows

v0.8.2 (2016-08-02)
-------------------

Fixed
~~~~~

- Fixed `general -> private-browsing` not being set correctly until a restart
  (which caused e.g. local storage to be enabled).
- When hinting input fields (`:t`), also consider input elements without a type.
- Fixed crash when opening an invalid URL with a percent-encoded and a real @ in it
- Fixed default `;o` and `;O` bindings
- Fixed local storage not working (and possible other bugs) when using a
  relative path with `--basedir`.
- Fixed crash when deleting a quickmark with Ctrl-D
- Fixed HTML5 video playback on Windows
- Fixed crash when using `:prompt-open-download` with a file with chars not
  encodable with the OS' filesystem encoding (e.g. with `LC_ALL=C`)
- Fixed `:prompt-open-download` with a too long filename (> 255 bytes)
- Fixed crash when cancelling a download after doing `:prompt-open-download`
- Fixed crash when writing a download to disk fails with
  `:prompt-open-download`.
- Fixed `:restart` deleting the basedir when it was given with `--basedir`.

v0.8.1 (2016-07-27)
-------------------

Fixed
~~~~~

- Fix crash when pressing enter without a command
- Adjust error message to point out QtWebEngine is unsupported with the OS
  X .app currently.
- Hide Harfbuzz warning with the macOS .app

v0.8.0 (2016-07-26)
-------------------

Added
~~~~~

- New `:repeat-command` command (mapped to `.`) to repeat the last command.
  Note that two former default bundings conflict with that binding, unbinding
  them via `:unbind .i` and `:unbind .o` is recommended.
- New `qute:bookmarks` page which displays all bookmarks and quickmarks.
- New `:prompt-open-download` (bound to `Ctrl-X`) which can be used to open a
  download directly when getting the filename prompt.
- New `{host}` replacement for tab- and window titles which evaluates
  to the current host.
- New default binding `;t` for `:hint input`.
- New variables `$QUTE_CONFIG_DIR`, `$QUTE_DATA_DIR` and
  `$QUTE_DOWNLOAD_DIR` available for userscripts.
- New option `ui` -> `status-position` to configure the position of the
  status bar (top/bottom).
- New `--pdf <filename>` argument for `:print` WHICH can be used to generate a
  PDF without a dialog.

Changed
~~~~~~~

- `:scroll-perc` now prefers a count over the argument given to it, which means
  `gg` can be used with a count.
- Aliases can now use `;;` to have an alias which executed multiple commands.
- `:edit-url` now does nothing if the URL isn't changed in the spawned editor.
- `:bookmark-add` can now be passed a URL and title to add that as a bookmark
  rather than the current page.
- New `taskadd` userscript to add a taskwarrior task annotated with the
  current URL.
- `:bookmark-del` and `:quickmark-del` now delete the current page's URL if none
  is given.

Fixed
~~~~~

- Compatibility with PyQt 5.7
- Fixed some configuration values being lost when a config option gets removed
  from qutebrowser's code.
- Fix crash when downloading with a full disk
- Using `:jump-mark` (e.g. `''`) when the current URL is invalid doesn't crash
  anymore.

Removed
~~~~~~~

- The ability to display status messages from webpages, as well as the related
  `ui ->  display-statusbar-messages` setting.
- The `general -> wrap-search` setting as searches now always wrap.
  According to a quick straw poll and prior crash logs, almost nobody is using
  `wrap-search = false`, and turning off wrapping is not possible with
  QtWebEngine.
- `:edit-url` now doesn't accept a count anymore as its behavior was confusing
  and it doesn't make much sense to add a count.

v0.7.0 (2016-06-10)
-------------------

Added
~~~~~

- New `:edit-url` command to edit the URL in an external editor.
- New `network -> custom-headers` setting to send custom headers with every request.
- New `{url:pretty}` commandline replacement which gets replaced by the decoded URL.
- New marks to remember a scroll position:
    - New `:jump-mark` command to jump to a mark, bound to `'`
    - New `:set-mark` command to set a mark, bound to ```(backtick)
    - The `'` mark gets set when moving away (hinting link with anchor, searching, etc.) so you can move back with `''`
- New `--force-color` argument to force colored logging even if stdout is not a
  terminal
- New `:messages` command to show error messages
- New pop-up showing possible keybinding when the first key of a keychain is
  pressed. This can be turned off using `:set ui keyhint-blacklist *`.
- New `hints -> auto-follow-timeout` setting to ignore keypresses after
  following a hint when filtering in number mode.
- New `:history-clear` command to clear the entire history
- New `hints -> find-implementation` to select which implementation (JS/Python)
  should be used to find hints on a page. The `javascript` implementation is
  better, but slower.
- New `inputs` group for `:hint` to hint text input fields.

Changed
~~~~~~~

- qutebrowser got a new (slightly updated) logo
- `:tab-focus` can now take a negative index to focus the nth tab counted from
  the right.
- `:yank` can now yank the pretty/decoded URL by adding `--pretty`
- `:navigate` now clears the URL fragment
- `:completion-item-del` (`Ctrl-D`) can now be used in `:buffer` completion to
  close a tab
- Various SSL ciphers are now disabled by default. With recent Qt/OpenSSL
  versions those already all are disabled, but with older versions they might
  not be.
- Show favicons as window icon with `tabs-are-windows` set.
- `:bind <key>` without a command now shows the existing binding
- The optional `colorlog` dependency got removed, as qutebrowser now displays
  colored logs without it.
- URLs are now shown decoded when hovering.
- Keybindings are now shown in the command completion
- Improved behavior when pasting multiple lines
- Rapid hints can now also be used for the `normal` hint target, which can be
  useful with javascript click handlers or checkboxes which don't actually open
  a new page.
- `:zoom-in` or `:zoom-out` (`+`/`-`) with a too large count now zooms to the
  smallest/largest zoom instead of doing nothing.
- The commandline now accepts partially typed commands if they're unique.
- Number hints are now kept filtered after following a hint in rapid mode.
- Number hints are now renumbered after filtering
- Number hints can now be filtered with multiple space-separated search terms
- `hints -> scatter` is now ignored for number hints
- Better history implementation which also stores titles.
  As a consequence, URLs which redirect to another URL are now added to the
  history too, marked with a `-r` suffix to the timestamp field.

Fixed
~~~~~

- Fixed using `:hint links spawn` with flags - you can now use things like the
  `-v` argument for `:spawn` or pass flags to the spawned commands.
- Various fixes for hinting corner-cases where following a link didn't work or
  the hint was drawn at the wrong position.
- Fixed crash when downloading from a URL with SSL errors
- Close file handles correctly when a download failed
- Fixed crash when using `;Y` (`:hint links yank-primary`) on a system without
  primary selection
- Don't display quit confirmation with finished downloads
- Fixed updating the tab index in the statusbar when opening a background tab
- Fixed a crash when entering `:-- ` in the commandline
- Fixed `:debug-console` with PyQt 5.6
- Fixed qutebrowser not starting when `sys.stderr` is `None`
- Fixed crash when cancelling a download which belongs to an MHTML download
- Fixed rebinding of keybindings being case-sensitive
- Fix for tab indicators getting lost when moving tabs
- Fixed handling of backspace in number hinting mode
- Fixed `FileNotFoundError` when starting in some cases on old Qt versions
- Fixed sharing of cookies between tabs when `private-browsing` is enabled
- Toggling values with `:set` now uses lower-case values
- Hints now work with (non-standard) links with spaces around the URL
- Strip off trailing spaces for history entries with no title

v0.6.2 (2016-04-30)
-------------------

Fixed
~~~~~

- Fixed crash when using `:tab-{prev,next,focus}` right after closing the last
  tab with `last-close` set to `close`.
- Fixed crash when doing `:undo` in a new instance with `tabs -> last-close` set
  to `default-page`.
- Fixed crash when starting with --cachedir=""
- Fixed crash in some circumstances when using dictionary hints
- Fixed various crashes related to PyQt 5.6

v0.6.1 (2016-04-10)
-------------------

Fixed
~~~~~~

- Fixed broken cheatsheet image which was missing from package
- Fixed occasional crash when switching/disconnecting monitors
- Fixed crash when downloading non-ascii files with a broken locale (`LC_ALL=C`)
- Added workaround for a Qt/PyQt bug which is too weird to describe here

v0.6.0 (2016-04-04)
-------------------

Added
~~~~~

- New `:buffer` command to easily switch tabs by name. This is not bound to a
  key by default for existing users due to a conflict with the `gt`/`gT`
  bindings (which are now removed from the default bindings).
  You can bind it by hand by running `:bind -f gt set-cmd-text -s :buffer`.
- New `--quiet` argument for the `:debug-pyeval` command to not open a tab with
  the results. Note `:debug-pyeval` is still only intended for debugging.
- The completion now matches each entered word separately.
- A new command `:paste-primary` got added to paste the primary selection, and
  `<Shift-Insert>` got added as a binding so it pastes primary rather than
  clipboard.
- New mode `word` for `hints -> mode` which uses a dictionary and link-texts
  for hints instead of single characters.
- New `--all` argument for `:download-cancel` to cancel all running downloads.
- New `password_fill` userscript to fill passwords using the `pass` executable.
- New `current` hinting mode which forces opening hints in the current tab
  (even with `target="_blank"`)

Changed
~~~~~~~

- Pasting multiple lines via `:paste` now opens each line in a new tab.
- `:navigate increment/decrement` now preserves leading zeroes in URLs.
- `general -> editor` can now also handle `{}` inside another argument (e.g. to open `vim` via `termite`)
- Improved performance when scrolling with many tabs open.
- Shift-Insert now also pastes primary selection for prompts.
- `:download-remove --all` got un-deprecated to provide symmetry with
  `:download-cancel --all`. It does the same as `:download-clear`.
- Improved detection of URLs/search terms when pasting multiple lines.
- Don't remove `qutebrowser-editor-*` temporary file if editor subprocess crashed
- Userscripts are also searched in `/usr/share/qutebrowser/userscripts`.
- Blocked hosts are now also read from a `blocked-hosts` file in the config dir
  (e.g. `~/.config/qutebrowser/blocked-hosts`).

Fixed
~~~~~

- Fixed starting with -c "".
- Fixed crash when a tab is closed twice via javascript (e.g. Dropbox
  authentication dialogs)
- Fixed crash when a notification/geolocation prompt is answered after closing
  the tab it belongs to.
- Fixed crash when downloading a file without any path information (e.g a
  magnet link).
- Fixed crashes when opening an empty URL (e.g. via pasting).
- Fixed validation of duplicate values in `hints -> chars`.
- Fixed crash when PDF.js was partially installed.
- Fixed crash when XDG_DOWNLOAD_DIR was not an absolute path.
- Fixed very long filenames when downloading `data://`-URLs.
- Fixed ugly UI fonts on Windows when Liberation Mono is installed
- Fixed crash when unbinding key from a section which doesn't exist in the config
- Fixed report window after a segfault
- Fixed some directory browser issues on Windows
- Fixed crash when closing a window with a finished download and delayed
  `remove-finished-downloads` setting.
- Fixed crash when hitting `<Tab>` then `<Ctrl-C>` on pages without keyboard
  focus.
- Fixed "Frame load interrupted by policy change" error showing up when
  downloading files with Qt 5.6.

Removed
~~~~~~~

- The `gt`/`gT` bindings (luakit-like alternatives to `J`/`K`) were removed
  (except for existing configs) to make room for the `gt` binding to show
  buffers.

v0.5.1 (2016-01-18)
-------------------

Fixed
~~~~~

- Fixed completion for various config values when using `:set`.
- Fixed config validation for various config values.
- Prevented an error being logged when a website with HTTP authentication was
  opened on Windows.

v0.5.0 (2016-01-05)
-------------------

Added
~~~~~

- Ability to preview PDFs using pdf.js in the browser if it's installed. This
  is disabled by default and can be enabled using the
  `content -> pdfjs-enabled` setting.
- New setting `ui -> hide-wayland-decoration` to hide the window decoration
  when using wayland.
- New userscripts in `misc/userscripts`:
    - `open_download` to easily open a file in your downloads folder.
    - `view_in_mpv` to open a video in mpv and remove it from the page.
    - `qutedmenu` and `dmenu_qutebrowser` to select URLs via dmenu
- New setting `content -> host-blocking-whitelist` to whitelist certain domains
  from the adblocker.
- `{scroll_pos}` can now be used in `ui -> window-title-format` and
  `tabs -> title-format`.
- New setting `general -> url-incdec-segments` to configure which segments of
  the URL should be affected by `:navigate increment/decrement`.
- New `--target` argument to specify how URLs should be opened in an existing
  instance.
- New setting `statusbar.url.fg.success.https` to set the foreground color for
  the URL when a page was loaded via HTTPS.
- The scrollbar in the completion is now styled, and the following new options
  got added:
    * `completion -> scrollbar-width`
    * `completion -> scrollbar-padding`
    * `colors -> completion.scrollbar.fg`
    * `colors -> completion.scrollbar.bg`
- New value `none` for options taking a color system so they don't display a
  gradient:
    * `colors -> tabs.indicator.system`
    * `colors -> downloads.fg.system`
    * `colors -> downloads.bg.system`
- New command `:download-retry` to retry a failed download.
- New command `:download-clear` which replaces `:download-remove --all`.
- `:set-cmd-text` has a new `--append` argument to append to the current
  statusbar text.
- qutebrowser now uses `~/.netrc` if available to authenticate via HTTP.
- New `:fake-key` command to send a fake keypress to a website or to
  qutebrowser.
- New `--mhtml` argument for `:download` to download a page including all
  resources as MHTML file.
- New option `tabs -> title-alignment` to change the alignment of tab titles.

Changed
~~~~~~~

- The `colors -> tabs.bg/fg.selected` option got split into
  `tabs.bg/fg.selected.odd/even`.
- `:spawn --userscript` and `:hint` with the `userscript` target now look up
  relative paths in `~/.local/share/qutebrowser/userscripts` or
  `$XDG_DATA_HOME`. Using a binary in `$PATH` won't work anymore with
  `--userscript`.
- New design for error pages
- Link filtering for hints now checks if the text is contained anywhere in
  the link, and matches case-insensitively.
- The `ui -> remove-finished-downloads` option got changed to an integer and
  now takes a time (in milliseconds) to keep the download around after it's
  finished. When set to `-1`, downloads are never removed.
- The `:follow-hint` command now optionally takes the keystring of a hint to
  follow.
- `:scroll-px` now doesn't take floats anymore, which made little sense.
- Updated the user agent list for the `:set network user-agent` completion.
- Starting with `--debug` doesn't log `VDEBUG` messages anymore (add
  `--loglevel VDEBUG` to get them).
- `:debug-console` now hides the console if it's already shown.
- `:yank-selected` now doesn't log the selected text anymore.
- `general -> log-javascript-console` got changed from a boolean to an option
  taking a loglevel (`none`, `info`, `debug`).
- `:tab-move +/-` now wraps around if `tabs -> wrap` is `true`.
- When a subprocess (like launched by `:spawn`) fails, its stdout/stderr is now
  logged to the console.
- A search engine name can now contain any non-space character, like dashes.

Deprecated
~~~~~~~~~~

- `:download-remove --all` is now deprecated and `:download-clear` should be
  used instead.
- `:download <url> <destination>` is now deprecated and
  `:download --dest <destination> <url>` should be used instead.

Removed
~~~~~~~

- `:scroll` with two pixel-arguments (deprecated in v0.3.0)
- The `:run-userscript` command (deprecated in v0.2.0)
- The `rapid` and `rapid-win` targets for `:hint` (deprecated in v0.2.0)
- The `:cancel-download` command (deprecated in v0.2.0)
- The `:download-page` command (deprecated in v0.2.0)

Fixed
~~~~~

- Fixed retrying of downloads which were started in a now closed tab.
- Fixed displaying of web history if `web-history-max-items` is set to -1.
- Cloned tabs now don't display favicons anymore if show-favicons is False.
- Fixed a crash when clicking a bookmark name and pressing `Ctrl-D`.
- Fixed a crash when a website presents a very small favicon.
- Fixed prompting for download directory when
  `storage -> prompt-download-directory` was unset.
- Fixed crash when using `:follow-hint` outside of hint mode.
- Fixed crash when using `:set foo bar?` with invalid section/option.
- Fixed scrolling to the very left/right with `:scroll-perc`.
- Using an external editor should now work correctly with some funny chars
  (U+2028/U+2029/BOM).
- Movements in caret mode now should work correctly on macOS and Windows.
- Fixed upgrade from earlier config versions.
- Fixed crash when killing a running userscript.
- Fixed characters being passed through when shifted with
  `forward-unbound-keys` set to `auto`.
- Fixed restarting after a crash is reported.
- Removed `.pyc` files accidentally contained in source releases.

v0.4.1 (2015-09-30)
-------------------

Fixed
~~~~~

- Adjusted AppArmor config for the IPC changes in v0.4.0.
- Fixed atime update frequency for IPC file.
- Worked around a Qt issue where middle-clicking caused scrolling with a
  touchpad to restart at the beginning of the page.
- The `completion -> web-history-max-items` setting is now also respected for
  items added after starting qutebrowser.
- Search terms are now shared between different tabs again
- Tests (a reduced subset of them) now run correctly again when DISPLAY is not
  set.
- Fixed an issue causing qutebrowser to crash with Python 3.5 as soon as an ad
  was blocked.
- Fixed an issue causing qutebrowser to not start with more recent Python 3.4
  versions (e.g. on Debian experimental).
- Fixed various `PendingDeprecationWarnings` shown with Python 3.5.

v0.4.0 (2015-09-11)
-------------------

Added
~~~~~

- New bookmark functionality (similar to quickmarks without a name).
    * New command `:bookmark-add` to bookmark the current page (bound to `M`).
    * New command `:bookmark-load` to load a bookmark (bound to `gb`/`gB`/`wB`).
- New (hidden) command `:completion-item-del` (bound to `<Ctrl-D>`) to delete
  the current item in the completion (for quickmarks/bookmarks).
- New settings `tabs -> padding` and `tabs -> indicator-tabbing` to control the
  size/padding of the tabbar.
- New setting `ui -> statusbar-padding` to control the size/padding of the
  status bar.
- New setting `network -> referer-header` to configure when the referer should
  be sent (by default it's only sent while on the same domain).
- New setting `tabs -> show` which supersedes the old `tabs -> hide-*` options
  and has an additional `switching` option which shows tab while switching
  them. There's also a new `show-switching` option to configure the timeout.
- New setting `storage -> remember-download-directory` to remember the last
  used download directory.
- New setting `storage -> prompt-download-directory` to download all downloads
  without asking.
- Rapid hinting is now also possible for downloads.
- Directory browsing via `file://` is now supported.

Changed
~~~~~~~

- Some developer scripts got moved to `scripts/dev/`
- When downloading to a FIFO or special file, a confirmation is displayed as
  this might cause qutebrowser to hang.
- The `:yank-selected` command now works in all modes instead of just caret
  mode and is not hidden anymore.
- `minimal_webkit_testbrowser.py` now has a `--webengine` switch to test
  QtWebEngine if it's installed.
- The column width percentages for the completion view now depend on the
  completion model.
- The values for `tabs -> position` and `ui -> downloads-position` got changed
  from `north`/`south`/`west/`east` to `top`/`bottom`/`left`/`right`. Existing
  configs should be adjusted automatically.
- `:tab-focus`/`gt` now behaves like `:tab-next` if no count/index is given.
- The completion widget doesn't show a border anymore.
- The tabbar doesn't display ugly arrows anymore if there isn't enough space
  for all tabs.
- Some insignificant Qt warnings which were printed on macOS are now hidden.
- Better support for Qt 5.5 and Python 3.5.

Fixed
~~~~~

- Fixed a bug where cookies were saved despite qutebrowser being started in
  private browsing mode.
- The local socket used for inter-process communication (opening new instances)
  is now ensured to only be accessible by the user on all operating systems.
- Various corner cases for inter-process communication issues got fixed.
- `link_pyqt.py` now should work better on untested distributions.
- Fixed various corner-cases with crashes when reading invalid config values
  and the history file.
- Fixed various corner-cases when setting text via an external editor.
- Fixed potential crash when hinting a text field.
- Fixed entering of insert mode when certain disabled text fields were clicked.
- Fixed a crash when using `:set` with `-p` and `!` (invert value)
- Downloads with unknown size are now handled correctly.
- `:navigate increment/decrement` (`<Ctrl-A>`/`<Ctrl-X>`) now handles some
  corner-cases better.
- Fixed a bug where the completion got affected by another window's completion
  if it was open in both windows.
- Fixed a performance issue with large histories when opening previously
  unvisited websites.
- The progress bar now doesn't cause the statusbar to change it's height
  anymore.
- `~` is now always expanded when spawning a script.
- Fixed various corner cases when opening links in an existing instance.
- Fixed a race-condition causing an exception when starting qutebrowser.

Removed
~~~~~~~

- The `tabs -> indicator-space` setting got removed as the new padding settings
  should be used instead.
- The `tabs -> hide-always` and `tabs -> hide-auto` settings got merged into
  the new `tabs -> show` setting.

v0.3.0 (2015-06-28)
-------------------

Added
~~~~~

- New commands `:message-info`, `:message-error` and `:message-warning` to show messages in the statusbar, e.g. from a userscript.
- New command `:scroll-px` which replaces `:scroll` for pixel-exact scrolling.
- New command `:jseval` to run a javascript snippet on the current page.
- New (hidden) command `:follow-selected` (bound to `Enter`/`Ctrl-Enter` by default) to follow the link which is currently selected (e.g. after searching via `/`).
- New (hidden) command `:clear-keychain` to clear a partially entered keychain (bound to `<Escape>` by default, in addition to clearing search).
- New setting `ui -> smooth-scrolling`.
- New setting `content -> webgl` to enable/disable https://www.khronos.org/webgl/[WebGL].
- New setting `content -> css-regions` to enable/disable support for http://dev.w3.org/csswg/css-regions/[CSS Regions].
- New setting `content -> hyperlink-auditing` to enable/disable support for https://html.spec.whatwg.org/multipage/semantics.html#hyperlink-auditing[hyperlink auditing].
- New setting `tabs -> mousewheel-tab-switching` to control mousewheel behavior on the tab bar.
- New arguments `--datadir` and `--cachedir` to set the data/cache location.
- New arguments `--basedir` and `--temp-basedir` (intended for debugging) to set a different base directory for all data, which allows multiple invocations.
- New argument `--no-err-windows` to suppress all error windows.
- New arguments `--top-navigate` and `--bottom-navigate` (`-t`/`-b`) for `:scroll-page` to specify a navigation action (e.g. automatically go to the next page when arriving at the bottom).
- New flag `-d`/`--detach` for `:spawn` to detach the spawned process so it's not closed when qutebrowser is.
- New flag `-v`/`--verbose` for `:spawn` to print information when the process started/exited successfully.
- Many new color settings (foreground setting for every background setting).
- New setting `ui -> modal-js-dialog` to use the standard modal dialogs for javascript questions instead of using the statusbar.
- New setting `colors -> webpage.bg` to set the background color to use for websites which don't set one.
- New setting `completion -> auto-open` to only open the completion when tab is pressed (if set to false).
- New visual/caret mode (bound to `v`) to select text by keyboard.
- There are now some example userscripts in `misc/userscripts`.
- Support for Qt 5.5 and tox 2.0

Changed
~~~~~~~

- *Breaking change for userscripts:* `QUTE_HTML` and `QUTE_TEXT` for userscripts now don't store the contents directly, and instead contain a filename.
- The `content -> geolocation` and `notifications` settings now support a `true` value to always allow those. However, this is *not recommended*.
- New bindings `<Ctrl-R>` (rapid), `<Ctrl-F>` (foreground) and `<Ctrl-B>` (background) to switch hint modes while hinting.
- `<Ctrl-M>` and numpad-enter are now bound by default for bindings where `<Return>` was bound.
- `:hint tab` and `F` now respect the `background-tabs` setting. To enforce a foreground tab (what `F` did before), use `:hint tab-fg` or `;f`.
- `:scroll` now takes a direction argument (`up`/`down`/`left`/`right`/`top`/`bottom`/`page-up`/`page-down`) instead of two pixel arguments (`dx`/`dy`). The old form still works but is deprecated.
- The `ui -> user-stylesheet` setting now also takes file paths relative to the config directory.
- The `content -> cookies-accept` setting now has new `no-3rdparty` (default) and `no-unknown-3rdparty` values to block third-party cookies. The `default` value got renamed to `all`.
- Improved startup time by reading the webpage history while qutebrowser is open.
- The way `:spawn` splits its commandline has been changed slightly to allow commands with flags.
- The default for the `new-instance-open-target` setting has been changed to `tab`.
- Sessions now store zoom/scroll-position separately for each entry.

Deprecated
~~~~~~~~~~

- `:scroll` with two pixel-arguments is now deprecated - `:scroll-px` should be used instead.

Removed
~~~~~~~

- The `--no-crash-dialog` argument which was intended for debugging only was removed as it's replaced by `--no-err-windows` which suppresses all error windows.
- Support for Qt installations without SSL support was dropped.

Fixed
~~~~~

- Scrolling should now work more reliably on some pages where arrow keys worked but `hjkl` didn't.
- Small improvements when checking if an input is a URL or not.
- Fixed wrong cursor position when completing the first item in the completion.
- Fixed exception when using search engines with {foo} in their name.
- Fixed a bug where the same title was shown for all tabs on some systems.
- Don't install the scripts package when installing qutebrowser.
- Fixed searching for terms starting with a hyphen (e.g. `/-foo`)
- Proxy authentication credentials are now remembered between different tabs.
- Fixed updating of the tab title on pages without title.
- Fixed AssertionError when closing many windows quickly.
- Various fixes for deprecated key bindings and auto-migrations.
- Workaround for qutebrowser not starting when there are NUL-bytes in the history (because of a currently unknown bug).
- Fixed handling of keybindings containing Ctrl/Meta on macOS.
- Fixed crash when downloading a URL without filename (e.g. magnet links) via "Save as...".
- Fixed exception when starting qutebrowser with `:set` as argument.
- Fixed horrible completion performance when the `shrink` option was set.
- Sessions now store zoom/scroll-position correctly.

v0.2.1 (2015-04-19)
-------------------

Fixed
~~~~~

- Added missing manpage (doc/qutebrowser.1.asciidoc) to archive.

v0.2.0 (2015-04-19)
-------------------

Added
~~~~~

- Session support
    * new command `:session-load` to load a session.
    * new command `:session-save` to save a session.
    * new command `:session-delete` to delete a session.
    * new setting `general -> save-session` to always save the session on quit.
    * new setting `general -> session-default-name` to configure the session name to use if none is given.
    * new argument `-r`/`--restore` to specify a session to load.
    * new argument `-R`/`--override-restore` to not load a session even if one was saved.
- New commands to manage downloads:
    * `:download` to download a URL or the current page.
    * `:download-cancel` to cancel a download.
    * `:download-delete` to delete a download from disk.
    * `:download-open` to open a finished download.
    * `:download-remove` to remove a download from the list. `:download-remove --all` or the new 'cd' keybinding can be used to clear all finished downloads.
- History completion
    * New option `completion -> timestamp-format` to set the format used to display the history timestamps.
    * New option `completion -> web-history-max-items` to configure how many history items to show in the completion.
    * The option `completion -> history-length` for the command history got renamed to `cmd-history-max-items`.
- Better save logic for the config/state:
    * Only save files if modified (e.g. don't overwrite the config if it was edited outside of qutebrowser and nothing was changed in qutebrowser).
    * Save things (cookies, config, quickmarks, ...) periodically all 15 seconds (time can be changed with the `general -> auto-save-interval` option).
- Opera-like mouse rocker gestures
    * New option `input -> rocker-gestures`. When turned on, the history can be navigated back/forward by holding a mouse button and pressing the other one.
- New `-f` option for `:reload` to reload and bypass the cache.
- Pass more information (`QUTE_MODE`, `QUTE_SELECTED_TEXT`, `QUTE_SELECTED_HTML`, `QUTE_USER_AGENT`, `QUTE_HTML`, `QUTE_TEXT`) to userscripts.
- New `--userscript` option to `:spawn` (which deprecates `:run-userscript`).
- Ability to toggle a value to `:set` by appending a `!` to the value.
- New options to hide the tab-/statusbar:
    * `tabs -> hide-always` for the tabbar
    * `ui -> hide-statusbar` for the statusbar
- New options to configure how the tab/window titles should look:
    * `tabs -> title-format` for the tabbar
    * `ui -> window-title-format` for the window title
- HTML5 Geolocation/Notification support:
    * New option `content -> geolocation` to permanently turn the geolocation off.
    * New option `content -> notifications` to permanently turn notifications off.
- New options to disable javascript prompts/alerts:
    * `content -> ignore-javascript-prompt` to turn off prompts.
    * `content -> ignore-javascript-alerts` to turn off alerts.
- Two new options to customize the behavior of hints:
    * `hints -> min-chars` to set minimum number of chars in hints.
    * `hints -> scatter` which when turned off distributes the hints sequentially (like dwb) instead of scattering their positions (like Vimium).
- Make it possible to use `:open -[twb]` without url.
    * New option `general -> default-page` to set the page to be opened when doing that.
- New `input -> partial-timeout` option to clear partial keystrings.
- New option `completion -> download-path-suggestion` to configure what to show in the completion for downloads.
- Queue messages shown in unfocused windows and show them when the window is focused.
    * New option `ui -> message-unfocused` to disable this behavior.
- New `--relaxed-config` argument which ignores unknown options.
- New `:tab-detach` command to open the current tab in a new window.
- Zooming via Ctrl-Mousewheel.
    * New option `input -> mouse-zoom-divider` to control how much the page is zoomed when rotating the wheel.
- New option (`content -> host-blocking-enabled`) to enable/disable host blocking.
- New values `tab-bg`/`tab-bg-silent` for `new-instance-open-target` to open a background tab.
- New `ui -> downloads-position` setting to move the downloads to the bottom.
- New `ui -> hide-mouse-cursor` option to hide the mouse cursor inside qutebrowser.
- New argument `-s` for qutebrowser to set a temporary config option.
- New argument `-p` for the `:set` command to print the new value.
- New `--rapid` option to `:hint`. The `rapid`/`rapid-win` targets are now deprecated, and `--rapid` can be used as well with the targets run/hover/userscript/spawn as well.
- New `-f` argument to `:bind` to overwrite the old binding.
- New `--qt-name` argument to qutebrowser which is passed to Qt to set `WM_CLASS`.
- Alternating row colors in completion. This adds a new `colors -> completion.alternate-bg` option.

Changed
~~~~~~~

- Ignore quotes with maxsplit-commands (`:open`, `:quickmark-load`, etc.) and don't quote arguments for those commands in the completions. This also means some commands needed adjustments:
    * Clear search when `:search` without arguments is given.  (`:search ""` will now search for the literal text `""`)
    * Add `-s`/`--space` argument to `:set-cmd-text` (as `:set-cmd-text "foo "` will now set the literal text `"foo "`)
- Ignore `;;` for splitting with some commands like `:bind`.
- Add unbound (new) default keybindings to config. This also adds a new `<unbound>` special command.
    * To unbind a command keybinding without binding it to a new key, you now have to bind it to `<unbound>` or it'll be readded automatically.
- If an SSL error is raised multiple times with the same error/certificate/host/scheme/port, the user is only asked once.
- Jump to last instead of first item when pressing Shift-Tab the first time in the completion.
- Add a fullscreen keybinding.
- Add a `:search` command in addition to `/foo` so it's more visible and can be used from scripts.
- Various improvements to documentation, logging, and the crash reporter.
- Expand `~` to the users home directory with `:run-userscript`.
- Improve the userscript runner on Linux/macOS by using `QSocketNotifier`.
- Add luakit-like `gt`/`gT` keybindings to cycle through tabs.
- Show default value for config values in the completion.
- Clone tab icon, tab text and zoom level when cloning tabs.
- Don't open relative file paths with `:open`, only with commandline arguments.
- Expand environment variables in config settings which take a file path.
- Add a list of common user agents to the user agent setting completion.
- Move cursor to end of textboxes when hinting.
- Don't start searches on invalid URLs for quickmarks/startpage.
- Various performance improvements for the completion.
- Always open URLs given as argument in the foreground.
- Improve various error messages.
- Add `startpage`/`default-page` values to `tabs -> last-close`.
- Various improvements to `:restart` - it should be more robust now and uses sessions so all state (focused tab, scroll position, etc.) gets remembered.
- Add tab index display to the statusbar.
- Keep progress bar height fixed when the statusbar is multiline.
- Many improvements to tests and related infrastructure:
    * `init_venv.py` and `run_checks.py` have been replaced by http://tox.readthedocs.org/[tox]. Install tox and run `tox -e mkvenv` instead.
    * The tests now use http://pytest.org/[pytest]
    * Many new tests added
    * Mac Mini buildbot to run the tests on macOS.
    * Coverage recording via http://nedbatchelder.com/code/coverage/[coverage.py].
    * New `--pdb-postmortem argument` to drop into the pdb debugger on exceptions.
    * Use https://github.com/ionelmc/python-hunter[hunter] for line tracing instead of a selfmade solution.

Deprecated
~~~~~~~~~~

- The `:run-userscript` command - use `:spawn --userscript` instead.
- The `rapid` and `rapid-win` targets for `:hint` - use the `--rapid` argument to `:hint` instead.
- The `:cancel-download` command - use `:download-cancel` instead.
- The `:download-page` command - use `:download` instead.

Removed
~~~~~~~

- `init_venv.py` and `run_checks.py` have been replaced by http://tox.readthedocs.org/[tox]. Install tox and run `tox -e mkvenv` instead..

Fixed
~~~~~

- Fix for cache never being used.
- Fixed handling of key release events (e.g. for javascript) when holding a key and pressing a second one.
- Fix handling of commands using `;;` at various places (key config, command parser, `:bind`)
- Fix splitting of flags with arguments (`:bind -m`/`--mode`).
- Fix bindings of special keys with lower-case modifiers (e.g.  `<ctrl-x>`)
- Fix for weird search highlights when changing tabs while search is active.
- Fix starting with `-c ""`.
- Fix removing of partial downloads when a download is cancelled via context menu.
- Fix retrying of downloads which were started in a now closed tab.
- Highlight text case-insensitively in completion.
- Scroll completion to top when showing it.
- Handle unencodable file paths in config types correctly.
- Fix for crash when executing a delayed command (because of a shadowed keybinding) and then unfocusing the window.
- Fix for crash when hinting on a page which doesn't have a URL yet.
- Fix exception when using `:set-cmd-text` with an empty argument.
- Add a timeout to pastebin HTTP replies.
- Various other fixes for small/rare bugs.

v0.1.4 (2015-03-19)
-------------------

Changed
~~~~~~~

* The Windows builds come with Qt 5.4.1 which has some https://lists.schokokeks.org/pipermail/qutebrowser/2015-March/000054.html[related bugfixes].
* Improvements to CPU usage when idle.
* Ensure there's no size for `font-family` settings.
* Handle URLs with double-colon as search strings.
* Adjust prompt size hint based on content.
* Refactor websettings and save/restore defaults.
* Various small improvements to logging.
* Various improvements for hinting.
* Improve parsing of `faulthandler` logs.

Removed
~~~~~~~

* Remove default search engines.
* Remove debug console completing completely.

Fixed
~~~~~

* Ignore RuntimeError in `mouserelease_insertmode`.
* Hide Qt warning when aborting download reply.
* Hide "Error while shutting down tabs" message.
* Clear open target in `acceptNavigationRequest`.
* Fix handling of signals with deleted tabs.
* Restore `sys.std*` in `utils.fake_io` on exceptions.
* Allow font names with integers in them.
* Fix `QIODevice` warnings when closing tabs.
* Set the `QSettings` path to a config-subdirectory.
* Add workaround for adblock-message without window.
* Fix searching for terms starting with a slash.
* Ignore tab key presses if they'd switch focus.

Security
~~~~~~~~

* Stop the icon database from being created when private-browsing is set to true.
* Disable insecure SSL ciphers.

v0.1.3 (2015-02-12)
-------------------

Changed
~~~~~~~

* Various small logging improvements.
* Don't open relative files in `fuzzy_url` with `:open`
* Various crashdialog improvements.
* Hide adblocked iframes.

Fixed
~~~~~

* Handle shutdown of page with prompt correctly.
* fuzzy_url: handle invalid URLs with autosearch off
* Handle explicit searches with `auto-search=false`.
* Abort download override question on error/cancel.
* Set a higher z-index for hint labels.
* Close contextmenu when closing tab to avoid crash.
* Fix statusbar quickly popping up as window.
* Clean up `NetworkManager` after downloads finished.
* Fix restoring of cmd widget after an error.
* Fix retrying of downloads after the tab is closed.
* Fix `check_libraries()` output for Arch Linux.
* Handle all `IPCErrors` properly.
* Handle another `webelem.IsNullError` with hints.
* Handle `UnicodeDecodeError` when reading configs.

Security
~~~~~~~~

* Fix for HTTP passwords accidentally being written to debug log.

v0.1.2 (2015-01-09)
-------------------

Changed
~~~~~~~

* Uncheck sending of debug log by default when private browsing is on.
* Add SSL info to version info.

Removed
~~~~~~~

* Remove hosts-file.net from blocker default lists.

Fixed
~~~~~

* Fix rare exception when a key is pressed shortly after opening a window
* Fix exception with certain invalid URLs like `http:foo:0`
* Work around Qt bug which renders checkboxes on macOS unusable
* Fix exception when a local files can't be read in `:adblock-update`
* Hide 2 more Qt warnings.
* Add `!important` to hint CSS so websites don't override the hint look
* Make `init_venv.py` work with multiple sip `.so` files.
* Fix splitting with certain commands with an empty argument
* Fix uppercase hints.
* Fix segfaults if another page is loaded while a prompt is open
* Fix exception with invalid `ShellCommand` config values.
* Replace unencodable chars
* Fix user-stylesheet setting with an empty value.


v0.1.1 (2014-12-28)
-------------------

Added
~~~~~

* Set window icon and add a qutebrowser.ico file for Windows.
* Ask the user when downloading to an already existing file.
* Add a `network -> proxy-dns-requests` option.
* Add "Remove finished" to the download context menu
* Open and remove clicked downloads.

Changes
~~~~~~~

* Windows releases are now built with Qt 5.4 which brings many improvements and bugfixes.
* Add a troubleshooting section to the FAQ.
* Display IPC errors to the user.
* Rewrite keymode handling to use only one mode which also fixes various bugs.
* Save version to state config.
* Set zoom to default instead of 100% with `:zoom`/`=`.
* Adjust page zoom if default zoom changed.
* Force tabs to be focused on `:undo`.
* Replace manual installation instructions on macOS with homebrew/macports.
* Allow min-/maximizing of print preview on Windows.
* Various documentation improvements.
* Various other small improvements and cleanups.

Removed
~~~~~~~

* Clean up and temporarily disable alias completion.

Fixed
~~~~~

* Fix setting of `QWebSettings` (e.g. web fonts) with empty strings.
* Re-focus web view when leaving prompt/yesno mode.
* Handle `:restart` correctly with Python eggs.
* Handle an invalid cwd properly.
* Fix popping of a dead question in prompter.
* Fix `AttributeError` on config changes on Ubuntu.
* Don't treat things like "31c3" as IP address.
* Handle category being `None` in Qt message handler.
* Force-include pygments in `freeze.py`.
* Fix scroll percentage not updating on some pages like twitter.
* Encode `Content-Disposition` header name properly.
* Fix item sorting in `NeighborList`.
* Handle data being `None` in download read timer.
* Stop download read timer when reply has finished.
* Fix handling of small/big `fuzzyval`'s in `NeighborList`.
* Fix crashes when entering invalid values in `qute:settings`.
* Abort questions in `NetworkManager` when destroyed.
* Fix height calculation of download view.
* Always auto-remove adblock downloads when done.
* Ensure the docs get included in `freeze.py`.
* Fix crash with `:zoom`.

v0.1 (2014-12-14)
-----------------

Initial release.