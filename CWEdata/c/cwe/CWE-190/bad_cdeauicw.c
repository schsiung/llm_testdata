2018-xx-xx -- x.x.x

  * Fixed: Out-of-bounds write in uriComposeQuery* and uriComposeQueryEx*
      Thanks to Google Autofuzz team for the report!
  * Fixed: Fix off-by-one in uriComposeQueryCharsRequired* and ...Ex*
      Reported space requirements were 1 byte bigger than necessary
  * Fixed: Detect integer overflow in uriComposeQuery* and uriComposeQueryEx*
      Thanks to Google Autofuzz team for the report!
  * TODO BUMP SONAME

2018-08-18 -- 0.8.6

  * Fixed: Bad/NULL .hostText.afterLast when parsing certain rather pathologic
      but well-formed URIs with empty host (e.g. "//:%aa@") (GitHub #15)
      Thanks to Kurt Schwehr for the report!
  * Fixed: Fix uriRemoveBaseUri for case where scheme, host name,
      IPvFuture address or path segments of the source address were
      string prefixes of the related counterpart in the base URI.
      Thanks to Yang Yu for the patch! (GitHub #19, #20)
  * Fixed: Make UriStringToUnixFilename and UriStringToWindowsFilename
      support minimal representation a la RFC 8089, e.g. file:/bin/bash
      (compare to file:///bin/bash with three slashes) (GitHub #12, #14)
      Thanks to Zane van Iperen for the report!
  * Fixed: Documentation typos (GitHub #10, #11)
      Thanks to Graham Percival!
  * Improved: Made API docs of uriRemoveBaseUri more clear
      (related to GitHub #19)
  * Soname: 1:22:0

2018-02-07 -- 0.8.5

  * Changed: The uriparser project has moved from SourceForge to GitHub:
      Code + issue tracker: https://github.com/uriparser/uriparser
      New website: https://uriparser.github.io/
      Please update any links of yours, accordingly. Thank you!
  * Fixed: Memleak in out-of-memory clean-up code
      of URI normalization, related to SF.net bug #28.
      Thanks to Chris Hills for the report!
  * Fixed: Fix compilation of uriparse(1) on FreeBSD
      Thanks to Ed Schouten for the patch!
  * Fixed: Fix C90 compilation errors
      Thanks to Joel Cunningham for the patches!
  * Fixed: Space requirements documented for uriWindowsFilenameToUriStringA
      given URI "file://server1/file1.txt" (SF.net bug #31)
      Thanks to threedyd for the report!
  * Fixed: Compiler warnings
      Thanks to Joel Cunningham for the patches!
  * Fixed: Stop exporting internal function RemoveBaseUriImpl
      Thanks to Joel Cunningham for the report!
  * Fixed: API documentation front page no longer empty with Doxygen 1.8.13
  * Fixed: "make -C doc install" fixed for lack of .map files
  * Improved: Communicate that absolutePath is always URI_FALSE for URIs
      with a host in uriparse CLI tool output and Uri.h header
      (GitHub #2, SF.net #30)
  * Soname: 1:21:0

2015-10-12 -- 0.8.4

  * Fixed: Stack overflow on parsing malformed IPv6 addresses with
      more than eigtht quads.  Thanks to Alexander Klink for the report!
  * Soname: 1:20:0

2015-10-04 -- 0.8.3

  * Fixed: uriCompareRange reported NULL pointer and range of
      length zero as equal, by mistake.
      Thanks to Robert Kausch and his Coverity report.
  * Fixed: Use-after-free in out-of-memory code of uriMakeOwner.
      Thanks to Chris Hills and his Klocwork-based report (SF.net bug #28)
  * Soname: 1:19:0

2015-04-27 -- 0.8.2

  * Fixed: Broken conversion from/to Windows network shares (SF.net bug #21)
      Thanks to Adam Gross and Dmitry Repkin!
  * Fixed: Limit uriCompareRange return values to -1/0/1 (SF.net bug #24)
      As a side effect, this fixes the test suite for AArch64.
      Thanks to Marcin Juszkiewicz for the patch!
  * Fixed: MinGW Makefile:
      LIB_DIR fixed from ../../lib leftover to ../../src (SF.net bug #27)
      Thanks to Dmytro Zagashev for the report!
  * Fixed: Add missing NULL checks to UriStringToFilename (SF.net bug #25)
      Thanks to Jerome Custodio for the report!
  * Changed: Leave inlining decisions to GCC
  * Soname: 1:18:0

2014-10-20 -- 0.8.1

  * Fixed: Sync URI_VER_* preprocessor defines (were at 0.7.6, SF.net bug #23)
  * Fixed: Bug in internal function that may flip uriEqualsUri results around
  * Added: Function uriAddBaseUriEx allowing to resolve URIs with
      a scheme identical to that of the base URI to resolve against
      as if the URI to resolve had no scheme specified, when flag
      URI_RESOLVE_IDENTICAL_SCHEME_COMPAT is specified
      (SF.net feature request #4)
  * Soname: 1:17:0

2014-07-12 -- 0.8.0.1

  * Fixed: ISO C90 warnings (SF.net bug #20)
  * Changed: No longer ship RFC documents (to make things easier for Debian)
  * Soname: 1:16:0

2013-12-20 -- 0.8.0

  * Fixed: Resolution of relative URI "/" broken
      Thanks to Mo McRoberts for the patch!
  * Fixed: uriAddBaseUri produced uriUri objects with both host
      and the absolutePath flag set (while the absolutePath flag
      should only be true for URI objects without a host) when
      resolving absolute URIs like "/" or "/foo/bar".
      Now the absolutePath flag is set to URI_FALSE and an empty
      segment is added as necessary
  * Fixed: .errorCode could end up unset, previously
      Thanks to Radu Hociung for the patch!  (SF.net bug #16)
  * Fixed: Resolve use of non-POSIX "sed -r" used when building
     documentation  (SF.net bug #18)
     Thanks to Ryan Schmidt for reporting!
  * Fixed: Build DLL with -no-undefined on Windows
      Thanks to Michel Zou for the patch!  (SF.net bug #19)
  * Added: Command line tool "uriparse"
      Thanks to Radu Hociung for coding!  (SF.net feature request #3)
  * Soname: 1:15:0

2013-08-24 -- 0.7.9

  * Fixed: Error position ended up as NULL for some syntax errors.
      Thanks to Daniel Solano Gómez for the patch!  (SF.net bug #14)
  * Soname: 1:14:0

2013-05-13 -- 0.7.8

  * Fixed: Fix dissection of query string "q=hello&x=&y=" (SF.net bug #12)
      Thanks to Marc Novakowski for reporting!
  * Soname: 1:13:0

2012-04-05 -- 0.7.7

  * Fixed: Fix rejection of some valid characters for userinfo
      section, e.g. "http://%2Fuser:%2F21@host/" (SF.net bug #11)
  * Fixed: Fix rejection of valid double colon in userinfo
      section, e.g. "http://::@host/"
  * Soname: 1:12:0

2012-01-20 -- 0.7.6

  * Fixed: Qt Compressed Help file was not installed
  * Fixed: Shadow/VPATH build doc generation
  * Fixed: Compile error from Doxygen when configuring with
      neither --enable-doc nor --disable-doc
  * Fixed: Code documentation errors
      Thanks to Valentin Haenel for the patch!
  * Fixed: Fix include path in pkg-config, i.e. remove
      "/uriparser" suffix as uriparser's headers are meant to
      be included by statements like #include <uriparser/....> .
      Thanks to Philip de Nier for reporting!
  * Fixed: Compilation in context of Eclipse + Cygwin + wchar_t
      (SF.net bug #10)
      Thanks to Gary Mazzaferro for reporting!
  * Fixed: Selection of supported character widths at build
      time: <char *> or <wchar_t *> or both
  * Added: configure parameters to disable either character
      widths: --disable-char, --disable-wchar_t
  * Soname: 1:11:0

2009-03-04 -- 0.7.5

  * Added: pkg-config file
  * Fixed: File Doxyfile.in was missing from release archives
      Thanks to Rakesh Pandit for reporting!
  * Fixed: Doc generation troubles
  * Changed: No longer shipping bundled libcpptest
  * Changed: New dependencies:
      - libcpptest 1.1.0 or later
      - pkg-config
      The libcpptest dependency can be disabled through
      configuring with --disable-test, which excludes the
      test suite from compilation.
  * Soname: 1:10:0

2008-12-23 -- 0.7.4

  * Fixed: Null pointer de-referencing when dissecting query
      strings starting with "&" right after "?" (SF.net bug #7).
      Thanks to Harvey Vrsalovic for reporting!
  * Fixed: Memory leak in uriFreeQueryList function (SF.net bug #6)
      Thanks to Daniel Chapiesky for reporting!
  * Fixed: Memory leak in uriNormalizeSyntax(Ex) functions (SF.net bug #6)
      Thanks to Daniel Chapiesky for reporting!
  * Improved: Nested configure hacks resolved
  * Soname: 1:9:0

2008-11-08 -- 0.7.3

  * Fixed: Missing NULL check in parsing routines
      Thanks to Sezai Tekin for reporting!
  * Fixed: uriparser now builds on Cygwin
  * Fixed: Now shipping gnulib's config.guess from HEAD
      which is suitable for Haiku (SF.net bug #5)
  * Changed: swprintf requirement resolved
  * Changed: Build system changes:
      - configure option --enable-doc added
      - configure.in renamed to configure.ac
      - some Autotools files moved to build-aux directory
  * Added: Qt Assistant documentation output:
      - Qt Compressed Help (.qch) at <doc/uriparser-doc-*.qch>
      - Qt Help Project (.qhp) at <doc/html/index.qhp>
      Generation requires Doxygen 1.5.7.1-20081103 or later.
  * Soname: 1:8:0

2008-09-01 -- 0.7.2

  * Fixed: Bad cleanup logic in functions
      - uriAddBaseUri(..)
      - uriRemoveBaseUri(..)
      Previously you needed to call uriFreeUriMembers on return code
      URI_ERROR_MALLOC and only then. So that's why these functions now
      take cleanup off your shoulders. An extra call to uriFreeUriMembers
      from your side is still needed in case of success.
  * Soname: 1:7:0

2008-04-27 -- 0.7.1

  * Fixed: Bogus syntax error when parsing URIs with port-like
      passwords, e.g. "http://user:21@host/" (SF.net bug #1)
      Thanks to Friedrich Delgado Friedrichs for reporting!
  * Fixed: Parser did not handle trailing slashes correctly in some cases,
      which also made the structures produced from parsing "http://e.com/"
      and "http://e.com" indistinguishable. (SF.net bug #2)
      Thanks to Edward Z. Yang for reporting!

2008-04-04 -- 0.7.0

  * Added: Dissection and composition of query strings
  * Added: Documentation improvements
      (in|out|inout indicators, addition of \since and \see)
  * Changed: Code::Blocks project files updated from file format
      version 1.4 to 1.6, which is produced by Code::Blocks 8.02
  * Added: Code::Blocks workspace file
  * Soname: 1:5:0

2008-02-25 -- 0.6.4

  * Added: Syntax-based normalization can now handle relative URIs,
      e.g. "../../a/b/.././c" is normalized to "../../a/c"
  * Fixed: Normalization code could free foreign memory
  * Fixed: Normalization processed the path segment even when asked not to
  * Added: MinGW Makefile and related readme
      Thanks to Michael Anthony Puls II!
  * Fixed: Documentation bug not requiring enough memory for the output
      buffer when converting a relative file URI back to a filename
  * Soname: 1:4:0

2008-02-11 -- 0.6.3

  * Fixed: Two major crash bugs in normalization code
      Thanks to Adrian Manrique for the patch!
  * Added: Brief usage tutorial
  * Soname: 1:3:0

2008-02-08 -- 0.6.2

  * Fixed: Freeing a normalized URI like "http://test?"
      caused a crash. Thanks to Adrian Manrique for reporting!
  * Fixed: Filename <--> URI string conversion helpers can
      now handle relative URIs and filenames
  * Soname: 1:2:0

2007-12-23 -- 0.6.1

  * Fixed: Percent-encodings in hostnames were not repaired during normalization.
      Thanks to Adrian Manrique for reporting!
  * Fixed: Percent-encodings were fixed after dot removal not before during
      normalization.
      Thanks to Adrian Manrique for reporting!
  * Fixed: Include path order bug
      Thanks to Ed Schouten for reporting this!
  * Fixed: Shadow builds now possible
      Thanks to Adeodato Simó for the patch!
  * Added: Version guards for Autoconf/Automake
      Thanks to Martin Michlmayr for reporting!
  * Soname: 1:1:0

2007-09-17 -- 0.6.0

  * Fixed: Proper soname updates from now on, starting at 1:0:0
  * Removed: Visual Studio 2003 project files

2007-09-13 -- 0.5.2

  * Added: RemoveBaseUri function to create URI references
  * Added: Unix/Windows filename <--> URI string conversion helpers
  * Added: EscapeEx function to escape text blocks without zero termination
  * Fixed: Bug in ToString for URIs with scheme, path, but no host (e.g. "f:/.//g")
  * Fixed: AddBase now resolves ".//g" with base "f:/a" to "f:/.//g" instead of
      "f://g" which would result in "g" becoming the authority part when parsing
      a recomposition (ToString) of that URI structure. This is a whole in RFC 3986,
      see http://lists.w3.org/Archives/Public/uri/2007Aug/0003.html for details.

2007-08-09 -- 0.5.1

  * Fixed: Empty host bug (URIs like "///g")
  * Fixed: Relative URIs are no longer touched by normalization
  * Fixed: MergePath failed for empty paths
  * Fixed: Bug with "." segments in AddBase
      All of the above revealed by test cases from 4Suite (http://4suite.org/)

2007-07-28 -- 0.5.0

  * Added: Syntax-based normalization
  * Added: Percent-encoding function Escape
  * Improved: Malloc/NULL checks added
  * Added: New function UnescapeInPlaceEx can also decode '+' to ' '
      and convert line breaks
  * Added: Exact space computation for ToString, see ToStringCharsRequired
  * Added: --enable-sizedown for saving space and slower code
  * Fixed: Two internal functions were exposed in the API by mistake:
      uriPushToStack and uriStackToOctet
  * Added: Visual Studio 2005 project files
  * Removed: Legacy code (removal was announced for 0.5.0)

2007-07-06 -- 0.4.1

  * Fixed: ToString did not work for IPv4 and IPv6 hosts

2007-07-03 -- 0.4.0

  * Added: References resolution (think relative to absolute)
  * Added: Naive URI equality check
  * Added: URIs can now be converted back to strings
  * Fixed: The first path segment of a relative URI was eaten
      (functions ParseSegmentNz and ParseMustBeSegmentNzNc)
  * Fixed: uri->scheme.first was not reset in some cases
      (function ParseMustBeSegmentNzNc)
  * Improved: Test suite now built on "make check", not before
  * Fixed: Test suite always returned 0 (success)

2007-04-23 -- 0.3.4

  * Added: Shared library support (moved to libtool)

2007-04-03 -- 0.3.3

  * Fixed: Now unix EOLs constantly
  * Fixed: Added forgotten files to release package

2007-03-31 -- 0.3.2

  * Fixed: Now compiles on FreeBSD

2007-03-28 -- 0.3.1

  * Fixed: Now compiles on Mac OS X

2007-03-26 -- 0.3.0

  * Added: New API, old marked deprecated
  * Added: Unicode support (think wchar_t)
  * Added: Doxygen code documentation
  * Added: Test suite using CppTest
  * Changed: Library code is now licensed under the new BSD license.
      The test suite code is licensed under LGPL.

2006-12-08 -- 0.2.1