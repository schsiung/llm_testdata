2022-04-27: Fix wrong boundary checks in inflections parser resulting in stack buffer over-read with corrupt input
2022-04-27: Fix wrong boundary checks in inflections parser resulting in stack buffer over-read with corrupt input
2022-04-26: Fix text formatting
2022-04-26: Fix array boundary check when parsing inflections which could result in buffer over-read with corrupt input
2022-04-23: Fix formatting
2022-04-23: Fix checking boundary of deobfuscation key which could cause buffer over-read with corrupt data
2022-04-23: Fix issue with corrupt data with empty lookup string which could lead to read beyond buffer
2022-04-23: Fix faulty checks for array boundary which caused buffer over-read with corrupt input
2022-04-23: Fix issue with corrupt files with tagvalues_count = 0 that caused null pointer dereference
2022-04-23: Fix issues when mobi_buffer_getpointer returns null. With corrupt data this could lead to out-of-bounds read
2022-04-13: Add packaging status [skip ci]
2022-04-10: Make random generation return proper error codes
2022-04-10: Rewrite randombytes for libmobi
2022-04-07: Add libsodium randombytes.c
2022-04-10: Fix "fallthrough" spelling
2022-04-10: Make declaration match definition
2022-04-10: Fix different sign comparison warning
2022-04-10: Update Xcode project
2022-04-10: Don't run tests if bash is missing
2022-04-10: Looking for libxml2, first try pkg-config
2022-04-04: Update MSVC project
2022-04-02: Add support for GNU/kFreeBSD and GNU/Hurd
2022-04-02: Check for inline, noreturn support in CMake
2022-03-27: Fix format truncation warning
2022-03-21: Version 0.10
2022-03-21: Update Xcode project [skip ci]
2022-03-21: Add functions for retrieving orthographic index entries
2022-02-27: Add basic CMake support
2022-02-26: GHA: fetch tags with checkout
2022-02-26: Minor refactoring of file path manipulation function
2022-02-26: Fix memory handling issues
2022-02-26: Add coverity scan workflow
2022-02-25: Remove obsolete changelog
2022-02-25: Fix md5sum output on Windows
2022-02-25: Fix inconsistent separators in path on Windows builds
2022-02-25: GHA: fix log paths
2022-02-25: GHA: fix workflow syntax
2022-02-25: GHA: upload test logs on failure
2022-02-24: Fix printf format specifier
2022-02-24: Fix sample path in Makefile
2022-02-24: Missing autotools in mingw workflow
2022-02-24: Windows doesn't accept asterisk in file names
2022-02-24: Update workflow, add badge
2022-02-24: Add mingw workflow
2022-02-24: Fix tests in out-of-tree build
2022-02-24: Update man pages
2022-02-24: Replace non-portable strptime
2022-02-24: Make sure both validity period dates are set
2022-02-21: Fix strptime not found on linux build
2022-02-21: Add build github action
2022-02-21: Update README
2022-02-21: Minor code cleanups
2022-02-21: Unify boolean and static usage in tools
2022-02-21: mobimeta: fix null pointer dereference when parsing malformed option
2022-02-18: Add  hybrid spit option to mobitool
2022-02-18: Update documentation
2022-02-18: Test both encrypted hybrid parts
2022-02-18: Fix: fast decryption routine fails for non-huffman compression
2022-02-18: Fix mobitool serial decryption
2022-02-18: Add DRM tests
2022-02-17: Fix build with encryption disabled
2022-02-17: Update tests samples
2022-02-16: Add -h option to tools, update man pages
2022-02-16: Update Xcode settings
2022-02-16: Restructure, cleanup encryption related code, add mobidrm tool
2021-11-19: Improve getopt loop, fix config.h to be accessible from all tools
2021-11-10: Update xcode project
2021-11-10: Add functions to split hybrid files
2021-11-10: Avoid modifying existing records, as caller may keep reference to them
2021-11-05: Fix: tests fail if pid contains asterisk
2021-11-05: Fix: decryption may fail for some records with standard compression
2021-11-05: Replace test samples with self-generated smaller ones
2021-11-05: Skip test in case of missing checksums
2021-10-20: Version 0.9
2021-10-24: Fix out-of-tree build
2021-10-22: Fix mingw build, code formatting
2021-10-14: Fix gcc format truncation warning
2021-10-14: Include autogen.sh in distribution bundle
2021-10-14: Create codeql-analysis.yml
2021-10-14: Fix autoconf 2.70 warnings, clean up
2021-10-14: Build fails with autoconf 2.70
2021-10-11: Version 0.8
2021-10-11: Update Xcode project
2021-10-11: Fix warnings about changed signedness
2021-09-18: Fix potential out-of-buffer read while parsing corrupt file, closes #38
2021-09-18: Fix potential out-of-buffer read while parsing corrupt file, closes #35, #36
2021-09-09: Version 0.7
2021-09-09: fix oob write bug inside libmobi
2021-06-07: Add reference to brew formula
2020-09-02: Fix null pointer dereference in case of broken fragment
2020-08-01: Update changelog
2020-08-01: Version 0.6
2020-07-31: Fix typo
2020-07-31: Add Readme to dist package
2020-07-31: Remove anchor on truncated link
2020-07-31: Fix missing option in man page
2020-07-30: Include test samples in dist package
2020-07-25: Fix gcc 7+ warnings about implicit fall through and format truncation
2020-07-24: Unique names for internal functions to avoid confilicts with static linking
2020-06-24: Close file in error branch
2020-06-24: Fix static compilation with miniz on gcc
2020-06-24: Minor documentation fixes
2020-06-23: Version 0.5
2020-06-23: mobitool: add dump cover option
2020-06-23: Minor documentation improvement
2020-06-23: Fix potential buffer over-read
2019-03-18: Fix: try also "name" attribute when searching for link anchor tags, closes #24
2019-02-22: Add mobi_is_replica function
2019-02-22: Fix potential read beyond buffer
2019-02-22: Travis migration
2018-08-07: Fix: missing items in recreated ncx file
2018-06-20: Fix: printf format warning on some gcc versions
2018-06-20: Fix: make dist broken by nonexistent header files
2018-06-20: VERSION 0.4
2018-06-20: Fix: buffer overflow (CVE-2018-11726)
2018-06-20: Fix: buffer overflow (CVE-2018-11724)
2018-06-20: Fix: read beyond buffer (CVE-2018-11725)
2018-06-20: Fix: buffer overflow (mobitool), closes #18
2018-06-20: Fix: read beyond buffer with corrupted KF8 Boundary record, closes #19
2018-06-20: Fix: read beyond buffer, closes #16, #17
2018-06-20: Updated xcode project files
2018-04-03: Fix: ncx part was not scanned for links, fixes #12
2018-04-02: Fix regression, potential use after free
2018-04-02: Skip broken resources, fixes #10
2018-03-05: Allow processing zero length text records, fixes #9
2017-12-25: Skip broken first resource offset instead of dying
2017-12-18: Skip broken links reconstruction instead of dying
2017-11-27: Disable travis OS X builds, as they usually time out
2017-11-16: Fix: increase max number of dictionary entries per record
2017-11-14: Fix for some encrypted documents with palmdoc encoding
2017-11-06: Fix: potential null pointer dereference
2017-10-16: Manpage cleanup
2017-09-27: Update README
2017-09-26: Increase maximum length of attribute name and value, closes #5
2017-02-26: Remove obsolete files from VS build (closes #3) [ci skip]
2016-11-05: Mobitool: use epub extension if extracted source resource is epub
2016-06-10: Update docs
2016-06-10: Update test files
2016-06-10: Fix: out of bounds read in corrupt font resource
2016-06-10: Prevent memory leak in case of corrupt font resources
2016-06-10: Calculate deobfuscation buffer limit from key length
2016-06-10: Fix: USE_LIBXML2 macro was not included from config.h
2016-06-10: Fix: USE_LIBXML2 macro was not included from config.h
2016-06-09: Fix: memory leak in tools
2016-06-09: Fix: potential out of bounds read
2016-06-09: Fix: memory leak in internal xmlwriter
2016-06-01: Update README
2016-05-19: Feature: verify decryption key type
2016-05-19: Cleanup converting little endian buffer to 32-bit integer
2016-05-19: Feature: check drm expiration dates
2016-05-18: Fix: memory leaks in encryption
2016-05-18: Fix concurrent autotools builds
2016-05-18: use relative path, as $(top_srcdir) fails to be substituted (?)
2016-05-18: update vcxproj
2016-05-18: Include headers in automake sources
2016-05-18: Fix: automake out-of-tree miniz build
2016-05-18: Fix: wrongly detected fdst record broke some ancient documents
2016-05-18: Fix: improve index header parsing, some old dictionaries might not load
2016-05-18: Fix: convert encoding of opf strings from cp1252 indices
2016-05-18: Quiet warnings about unused values of wiped variables
2016-05-18: Fix: potential memory leak
2016-05-18: Fix: wrongly decoded "&copy;" entity
2016-05-16: Fix: huffdic decompression fails in case of huge documents
2016-05-14: Simplify buffer_init_null() function
2016-05-14: Use ARRAYSIZE macro
2016-05-14: Feature: calculate pid for decryption from device serial number
2016-04-29: Use endian-independent byte swapping
2016-04-29: Exclude unused miniz functions from binary
2016-04-29: Add SHA-1 routines
2016-04-27: Fix miniz.c formatting
2016-04-27: Documentation
2016-04-20: Update changelog
2016-04-20: Fix potential null pointer dereference
2016-04-20: Remove useless check
2016-04-20: Fix text record size calculation
2016-04-20: Fix buffer checking and freeing
2016-04-19: Update docs
2016-04-19: Update ChangeLog
2016-04-19: Fix comparison between signed and unsigned integer
2016-04-19: use strdup on linux/glibc
2016-04-19: Add initial write and metadata editing support. Add mobimeta tool.
2016-04-19: Always check whether memory allocation succeeded
2016-04-18: Fix: guarantee array resize step is at least 1
2016-04-13: Workaround to read some old mobipocket files
2016-04-13: Improve pdb dates resolving
2016-04-07: Minor documentation edit
2016-04-07: Update changelog
2016-04-06: Fix format warning
2016-04-06: Update test checksums
2016-04-06: Fix: <dc:date> "event" attribute needs "opf" namespace
2016-04-06: Fix: id attributes in ncx file should be unique
2016-04-06: Store full name in MOBIMobiHeader structure
2016-04-05: Fix formatting
2016-04-05: Fix signedness warning
2016-04-04: Fix potential buffer overflow, closes #2
2016-04-04: Fix potential null pointer dereference
2016-03-23: Fix signedness warnings
2016-03-22: Fix: _mkdir needs direct.h on MinGW
2016-03-22: Fix tests on Windows
2016-03-22: Fix: palmdoc decompression may fail with zero byte in input buffer
2016-03-21: VERSION 03: internal xmlwriter, metadata handling functions, bug fixes
2016-03-21: Feature: add helper functions for metadata extraction
2016-03-21: Load also kf8 data when only kf7 version is requested
2016-03-21: Fix: wrong exth header length check could discard some valid headers
2016-03-20: Get rid of extended attributes in release archive on OS X
2016-03-19: Mobitool: add descriptive error messages based on libmobi return codes
2016-03-04: Add extra length check for CMET record extraction
2016-03-04: Always check buffer allocation result
2016-03-04: Add functions to extract conversion source and log, also add this feature to mobitool
2016-03-04: Remove some stray printfs
2016-03-03: Remove not used AC_FUNC_MALLOC/REALLOC macros that break cross-compilation
2016-03-03: Fix potential illegal memory access in miniz.c
2016-03-03: Fix potential dereference of null pointer in miniz.c
2016-03-03: Fix for Android bionic libc bug (SIZE_MAX missing in stdint.h)
2016-03-03: Fix mobitool compilation on MSVC++
2016-03-03: Add EPUB creation feature to mobitool
2016-03-02: Fix potential buffer overflow, null pointer dereference
2016-03-02: Add travis test for no-external-dependency build
2016-03-02: Fix missing strdup on linux
2016-03-02: Add internal xmlwriter (as an alternative to libxml2)
2016-03-01: Feature: decode html entities in exth header strings
2016-02-29: Fix: potential buffer overflow
2016-02-29: Fix: wrong pid calculation (regression introduced in 0.2)
2016-02-26: VERSION 0.2: increased stability, lots of bugs fixed
2016-02-26: Add Xcode project file
2016-02-26: Preliminary support for MSVC++ compiler
2016-02-26: Do not use variable length arrays
2016-02-26: Refactor mobi_reconstruct_parts() to use MOBIFragment list
2016-02-26: Fix compiler warning about sign conversion
2016-02-26: Fix compiler warning about type conversion
2016-02-26: Check the result of malloc/calloc
2016-02-26: Fix inconsistent use of const between some definitions and declarations
2016-02-24: Fix inconsistence between function declaration and definition
2016-02-24: Fix various potential crashes in case of corrupt input (afl-fuzz)
2016-02-24: Fix dead code warnings in miniz
2015-11-26: Export mobi_get_first_resource_record() function
2015-11-26: Fix: double free on corrupt cdic
2015-11-02: Update docs
2015-11-02: Feature: add helper functions to find resources by flow id
2015-11-02: Feature: export MOBI_NOTSET macro
2015-11-02: Feature: give more options to parse rawml function
2015-10-24: Restore travis.yml
2015-10-24: Fix OSX travis build
2015-10-24: Fix OSX travis build
2015-10-24: Fix multiline inline script
2015-10-24: Enable multi-OS feature
2015-10-24: Fix: unique temporary name for parallel tests
2015-10-24: Fix: decoding video resources falsely reported as failed
2015-10-24: Fix: tests, some md5sum implementations insert double spaces
2015-10-24: Fix for automake < 1.13
2015-10-23: Add simple tests framework
2015-10-23: Fix: increase max index entries per record count, as some rare samples fail
2015-10-22: Fix: incorrectly decoded video/audio resources
2015-10-22: Feature: add option to specify output path
2015-10-14: Add some internal functions to public API: mobi_get_flow_by_uid, mobi_get_resource_by_uid, mobi_get_part_by_uid, mobi_get_exthrecord_by_tag
2015-06-13: update changelog
2015-06-13: fix: various invalid memory access
2015-06-13: don't quit on invalid input, instead substitute with replacement character
2015-06-12: fix typo
2015-06-12: update changelog
2015-06-12: fix: reconstruction failed when there were gaps between fragments
2015-06-12: add EXTH tags
2015-06-12: prevent return of garbage value check return value in case of failed malloc
2015-06-12: fix invalid memory access
2015-04-12: Fix reconstruction of "kindle:embed" links without mime type (regression)
2015-04-12: Add sanity checks to link reconstruction functions, allow skipping some malformed patterns
2015-04-12: Fix infinite loop in guide build while unknown tag was found
2015-04-12: Increase max recursion level for huffman decompression
2015-03-28: update docs
2015-03-28: fix solaris studio compiler warnings
2015-03-28: fix solaris studio compiler build
2015-02-18: Fix "more than one: -compatibility_version specified" error on powerpc
2014-11-24: improve docs
2014-11-24: simplify public header
2014-11-21: changelog update [ci skip]
2014-11-21: README
2014-11-21: fix: add sanity checks
2014-11-21: Fix: add sanity checks
2014-11-21: add sanity check to huffcdic indices count
2014-11-21: fix number of leaks and other minor issues (by coverity scan)
2014-11-20: missing notification email kills coverity scan
2014-11-20: update travis.yml
2014-11-20: upgrade travis.ml with covert scan
2014-11-20: update README.md
2014-11-20: add .travis.yml
2014-11-20: update REAME.md
2014-11-20: update README.md
2014-11-20: update docs
2014-11-20: feature: add decryption support
2014-11-20: mkdir cleanup
2014-11-17: documentation
2014-11-17: strip unneeded <aid/> tags
2014-11-16: fix: potential leak
2014-11-16: fix: regression, some image tags were not reconstructed
2014-11-16: fix: improve ligatures handling
2014-11-16: override darwin linker default versioning
2014-11-15: fix: get proper LIGT entries count from index header
2014-11-15: feature: unpack records into new folder
2014-11-14: make README readable on github
2014-11-14: add README for mobitool
2014-11-14: fix: dictionaries with large inflection rules failed
2014-11-14: feature: support encoded ligatures in index entry labels
2014-11-14: readme
2014-11-14: update changelog
2014-11-13: feature: support for older inflections scheme
2014-11-13: bug: files with short tagx header won't open
2014-11-13: cleanup unneeded include
2014-11-13: use strdup on linux/glibc
2014-11-13: debugging cleanup
2014-11-13: reorganize source files
2014-11-13: use strdup on linux/glibc
2014-11-11: update changelog
2014-11-11: update changeling
2014-11-11: fix: documents with text record size > 4096 failed to load
2014-11-11: add: function to decode flat index entries
2014-11-11: debug: add functions for debugging indices
2014-11-11: cleanup
2014-11-11: fix: variable length value wrongly calculated when going backwards
2014-11-08: update documentation
2014-11-08: update changelog
2014-11-08: add support for reconstructing inflections index entries
2014-11-08: parsing of exth header failed in some cases
2014-11-08: fix: some links reconstruction in kf7 failed
2014-11-08: improve debug info
2014-11-08: failed malloc false reports
2014-11-03: fix problem with uncompressed documents
2014-11-03: fix broken locales
2014-11-03: remove obsolete includes
2014-11-03: git log > changelog
2014-11-03: improved buffer handling
2014-11-03: improved OPF for dictionaries
2014-11-03: proper rawml->orth initialization and freeing
2014-11-03: fix subject field in opf
2014-11-03: handle UTF-16 surrogates, make ORDT lookups locale independent
2014-11-01: move dict reconstruction to separate function
2014-11-01: cleanup
2014-11-01: quiet gcc warning on printf format
2014-11-01: reconstruction of orth dictionary entries
2014-09-27: use mobi_list_del_all()
2014-09-25: postpone conversion to utf8 after all source reconstructions
2014-09-24: comment
2014-09-24: comments
2014-09-12: doxygen comment
2014-09-12: data size in comment
2014-09-05: MOBIArray data type fix
2014-09-05: config.h fixes
2014-06-29: merge master
2014-04-11: initial commit