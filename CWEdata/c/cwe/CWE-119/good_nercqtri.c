yodl (3.07.00)

  * Hanno B\"ock reported an invalid memory read found by the address sanitizer
    (using -fsanitize=address). Fixed in this release. The address santizer
    also reported some memory leaks which are not nice, but their fix will
    probably take some more time.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Thu, 04 Feb 2016 22:35:44 +0100

yodl (3.07.00)

  * Hanno B\"ock reported an invalid memory read found by the address sanitizer
    (using -fsanitize=address). Fixed in this release. The address santizer
    also reported some memory leaks which are not nice, but their fix will
    probably take some more time.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Thu, 04 Feb 2016 22:35:44 +0100

yodl (3.06.00)

  * The title, author, date and affiliation elements in html document headers
    have received CSS id selectors (respectively 'title', 'author', 'date' and
    'affiliation') which can be used to tune the way these elements are
    displayed. 

  * In html conversions, to follow xhtml requirements, elements without a
    closing element (like <hr>) are provided with an end-slash (e.g., <hr/>).

  * Fixed the plainhtml macro: it now generates html text.

  * Converted to github

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Mon, 07 Dec 2015 22:21:36 +0100

yodl (3.05.01)

  * The chartables defined in latex.tables.yo now surround <, > and *
    characters by $s (e.g., $<$), preventing LaTeX from processing them in a
    special way (e.g., forming ligatures like one character for >>).

  * Added the file `required' listing the non-standard software that is
    required to build yodl and its user guide

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Tue, 19 May 2015 19:28:26 +0200

yodl (3.05.00)

  * Html conversion by default uses html5, and generates html5 type html
    pages, several macros were adapted accordingly. 

  * New macros (use `man yodlmacros' for their definitions):
        attrib
        htmlheadfile
        htmlstyle
        nohtmlfive
        nohtmlimgstyle
        sethtmlmetacharset

  * Modified macros:
        @counters
        @symbols
        center
        dit
        endcenter
        figure
        htmlbodyopt     - deprecated
        htmlheadopt
        htmlstylesheet
        itdesc
        notocclearpage
        sc
        startcenter
        strong
        tt

  * the `build' script no longer maintains 'stamp' files: build macros, build
    manual and build man commands result in rerunning the command. All
    macro-constructions, including the creation of the macro-list, are now
    concentrated in 'build macros'.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Sat, 03 Jan 2015 22:33:55 +0100

yodl (3.04.00)

 * The redef() and redefinemacro() descriptions missed the name of the macro
    to be redefined: they require 3 instead of 2 args.

* The yodlverbinsert program is now C++, and supports -a: process all lines
    and -n: prefix lines by numbers. Yodlverbinsert ignores initial and
    trailing blank lines.

 * Removed some compiler warnings, among which a strange statement in
    parser/pbeginnested.cc, where pp->d_insert was assigned a value within
    the condition of a conditional assignment. See the difference between the
    git-commit at Tue Sep 23 09:45:29 2014 +0200 and the next commit.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Wed, 24 Sep 2014 20:01:42 +0200

yodl (3.03.0)

  * Reorganized the macro-construction because of a persistent xlatin1.tex bug
    (see 3.02.1's changelog entry). The macros for man- and manual-pages are
    now constructed under tmp/wip, so they can't conflict anymore with the
    distribution macros which are constructed under tmp/install. The
    xlatin1.bug was observed intermittently, making its fix kind of
    difficult. 

  * Added the file icmake/README explaining the steps/elements of the macro
    construction process.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Wed, 09 Oct 2013 12:47:12 +0200

yodl (3.02.1)

  * Repaired recurrent bug, fixed since yodl 2.14.4, about missing local-path
    location specification in scripts/createmacros causing xlatin1.tex to be
    included as ./xlatin1.tex.

  * Modified Yodl's build script's 'build sf' mode

yodl (3.02.0)

  * Repaired failing `return to parent directory' after INCLUDEFILE
    bug, intermittently observed th txt-files.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Tue, 21 May 2013 09:39:58 +0200

yodl (3.01.0)

  * Re-implemented l_chdir in src/lexer/lchdir.c and new_getcwd in
    src/new/getcwd.c following compilation problems on GNU-hurd, as reported
    by Svante Signell

  * Yodl's build script now honors CFLAGS en LDFLAGS environment variables.

  * Repaired some inconsistencies in the INSTALL.txt file

  * The yodl2whatever script sets the path to the yodl binaries as configured
    unless the YODL_BIN environment variable has been set, in which case that
    environment variable' value is used as the path prefix when calling yodl
    programs. 

  * Added 'build sf' to create the files to be uploaded to sourceforge. This
    function is for Internal Use Only

  * Renamed the 'sourceforge' directory to 'sf'

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Sun, 10 Mar 2013 12:37:45 +0100

yodl (3.00.0)

  * When including files the included file's directory path becomes the
    cwd. This results in file-inclusion handling like C's #include directive.
    Previously the cwd remained fixed, causing problems if the same 
    files are included for different documents where these included files
    themselves also include files. The -L (--legacy-include) option can be
    specified to prevent the change of working directory (and thus to revert
    to the original handling of includefile specifications.

  * The includefile macro no longer defines a label equal to its argument just
    before the file is included. Instead the macro lincludefile can be used,
    which provides more control of the label that is defined, if required. The
    added benefit is a *much* smaller .idx file, resulting in faster
    processing. 

  * The recognition of filenames no longer favors files without extensions
    above files having the .yo extension. Files to be included are supposed to
    have a .yo (=DEFAULT_EXT) extension (using (l)includefile), but the
    extension does not have to be explicitly specified. Only if no file having
    the DEFAULT_EXT is found the file is attempted as specified.

  * Single-line functions whose addresses are not required are now inline

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Sun, 07 Nov 2010 17:18:05 +0100

yodl (2.15.2)

  * Added macro cellsline to set multiple horizontal lines in one table row.

  * Bug fix in yodlverbinsert (confused markers provided as command-line
    argument with markers to which additional characters were appended
    appearing in scanned files).

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Fri, 12 Mar 2010 10:50:13 +0100

yodl (2.15.1)

  * Added a chartable translation to macros/yodl/chartables/man.tables.yo: in
    man-pages the - character is by default interpreted as hyphen, not as
    minus. The chartable now defines    '-' = "\\-"    turning - characters
    into man-page minus characters. Forced hyphens can be written as 
    manpagecommand(\CHAR(40)hy)

  * Added scripts/hrefnotmpinstall (href no tmp/install) removing tmp/install
    hyperlinks from html-version of the manual: given yodl.html, 
    the manual pages now link locally to each other.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Mon, 27 Jul 2009 11:32:35 +0200

yodl (2.15.0)

  * Detected a bug! Lines starting with + characters (like +NOTRANS, but also
    \'e since those constructions are substituded by +NOTRANS... sequences)
    were not properly converted: the + appeared in the output. Caused by
    p_handledefaultnewline, separating the + from its trailing chars. Repaired
    by testing for an initial +, followed by adding what's trailing if found.

  * The yodlbuiltin man-page (not appearing in the distribution) is now added.

  * The subscript and superscript macro descriptions were improved.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Thu, 16 Jul 2009 22:38:57 +0200

yodl (2.14.4)

  * Missing local-path location specification in scripts/createmacros caused
    xlatin1.tex to be included as ./xlatin1.tex. Now repaired.

  * Yodl2whatever's --intermediate option didn't accept a (file) argument. Now
    repaired. 

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Wed, 13 May 2009 11:38:42 +0200

yodl (2.14.3)

  * Tony Mancill and George Danchev discovered a flaw in the build script: it
    used previously installed macro files. Now repaired: Installation should
    run fine on a system not yet supporting Yodl.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Mon, 27 Apr 2009 20:56:33 +0200

yodl (2.14.2)

  * Yodl2whatever uses `eval' to call yodl. Without this --define options
    are not properly recognized

  * Build script completely rewritten

  * Added striproff as the script `yodlstriproff', and renamed the manpage 
    accordingly

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Wed, 15 Apr 2009 19:58:05 +0200

yodl (2.14.1)

  * Build script allows separate construction of program, man pages and 
    manual, using the standard installation path or the binaries constructed
    from the source package

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Sat, 21 Mar 2009 09:08:58 +0100

yodl (2.14.0)

  * Character tables now accept hexadecimal and octal constants in their
    double quoted character redefinition strings.

  * Double and single quotes appearing in man-page texts are now handled
    properly: the double quote is set as \(dq\& and the single quote as \(dq\&

  * All Yodl manual pages refer to all remaining Yodl manual pages

  * Several warnings generated by cppcheck on `src/verbinsert.c' were
    fixed. One remains, which turns out to be a cppcheck false positive.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Sun, 15 Mar 2009 13:11:08 +0100

yodl (2.13.2)

  * yodl2whatever did not remove intermediate files when no post processing
    was required. Now repaired.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Fri, 24 Oct 2008 15:04:10 +0200

yodl (2.13.1)

  * yodl2whatever no longer supports the --unique-output and --path
    option. Instead, communication between yodl and yodlpost is handled
    through temporary files created by mktemp(1). The temporary files will be
    removed following the yodl conversion. The yodl2whatever script offers the
    --intermediate=filename option to allow users to keep the intermediate
    files.

yodl (2.12.2)

  * TEMPORARY MODIFICATION: manual construction will not rebuild the yodl.pdf
    file to circumvent a bug in ps2pdf on some architectures. The manual/pdf
    directory will not be cleaned by `build clean'. To force the construction
    of the yodl.pdf file call `build manual pdf' in the ./manual directory
    immediately following the call of `build manual'.

yodl (2.12.1)

  * Introducing a subversion number: major.minor.subversion.

  * yodlpost's `#define BLOCK_POSTQUEUE' is replaced by an `-l <size>' option,
    by default using `-l 1000', allowing large(r) lines in index-files to be
    processed. The old BLOCK_POSTQUEUE value was set at 500.
 
  * All symbols starting with _ were renamed to symbols from which the _ was
    removed.

  * Repaired the [nl]subsubsect() macro that did not typeset a proper section 
    heading in html files. It does so now.

yodl (2.11)

  * repaired src/yodl/gramuppercase.c src/yodl/grampushmacro.c 
    src/yodl/gramdefinemacro.c in which addresses of
    size_t variables were passed to functions expecting addresses of ints
    comparable modifications to yodl/src/yodlpost/handlexmltocentry.c
    yodl/src/yodlpost/handlehtmltocentry.c yodl/src/yodlpost/handlexmltoc.c
    yodl/src/yodlpost/handletxttocentry.c
  * The hm_pjw function in hashmap/hmpjw.c uses a different procedure to 
    determine the most significant nibble, producing the same hashvalues as
    the previous version.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Mon, 12 Mar 2007 20:28:34 +0100

yodl (2.10)

  * repaired scores of compilation warnings in the sources detected by 
    Daniel Richard G. while compiling for the amd64.

  * Changed the organization of the Stack: it now consists of unions, allowing
    for cast-less storage and retrieval of various types. With it comes a
    slight reorganization of the code: the Media struct, till now defined in
    the lexer.ih file has its struct defined separately in src/mediastruct in
    order to allow Stack access to it. See src/HIERARCHY for an overview.

  * Moved l_media functions from lexer to new class Media, required for the
    new Stack organization

  * The src/build script contains #defines allowing extensive compilation
    tests (as suggested by Daniel Richard G.) as well as compilations for
    gprof, the GNU profiler. Running the profiler after building the yodl
    manual shows that currenly no clear speedup-targets exist.

  * The appendix() macro now creates html chapters starting at 1, as suggested
    by Karel Kubat.

  * The yodl2whatever script now handles versions of the getopt(1) program
    that can't handle long options. They still can't be handled, but the
    script now doesn't break. Long options defined for the script itself are
    still recognized (--no-warnings, --tmp, --unique-output).

  * Some systems (Notably: Mac OSX) apparently don't support the getline()
    function, used in the verbinsert program. Verbinsert now contains its own
    version: `y_getline()'

  * Added the euro() macro setting the euro symbol.

  * Removed the ./debian subdirectory which does not belong to the Yodl
    package itself. The Debian packaging files can be obtained from, e.g.,
    https://svn.openfmi.net/debian-addons-bg/yodl

  * Changed unsigned into size_t where appropriate.

yodl (2.04a)
  * repaired <txt> definition of lchapter.raw, which put the label, rather 
    than the chapter's title in the document's contents.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Tue, 05 Sep 2006 16:32:08 +0200

yodl (2.04)

    From patches offered by Colin Watson:

  * gcc's printf format checking features is used where available.
  * Memory properly freed on error path in construct_tocentry.
  * Reuse of va_list in string_vformat is fixed; the correct way to do this is
    to va_copy it first, although this requires some care regarding
    portability.
  
    Additional modification:

  * The generic `yodl2whatever' has been given two more options to allow users
    to prevent file-collisions when the same user calls yodl to process a
    document while another invokation of yodl by that user is still running:

    --tmp=<path>: By default, the temporary file is written in the /tmp
                   directory. Specify an alternate directory using 
                   --tmp = path-to-alternate-tmp-directory
    --unique-output: By default, yodl will use a temporary output file that 
                   is rewritten at each new yodl-invokation. If that's not 
                   what you want, specify the --unique-output flag, which
                   will use the process-id as part of the temporary output
                   file. This file is NOT removed when the yodl-conversion
                   fails. 

    The yodl2whatever man-page is modified accordingly.

yodl (2.03)

  * Added the program `yodlverbinsert', placing the contents of a `labeled
    section' from some text file (usually a C or C++ source) in a verb()
    macro, writing the generated verb() command to the standard output stream.
    Updated the user guide accordingly and added a manual page: `man
    yodlverbinsert' gives details and examples.

yodl (2.02) unstable; urgency=low

  * Following suggestions by Karel Kubat, several data files were modified:
    global variables are initialized to prevent compilation problems. Also,
    Karel's contrib/build.pl script was modified by Karel. I changed the
    initialization of the $config{TOPLEVEL_VERSION} so that it first tries to
    read the current toplevel version from the src/config.h file, to promote
    version synchronization.

    Some minor changes to macro files were made, and several superfluous files
    were removed from the distribution.

    Adapted several debian-files, updating the standards and debhelper
    versions, removed debian/ from the .orig archive and added an upstream
    changelog file, keeping this file for future Debian changes only. The 
    initial version of the upstream-changelog file is this file: Yodl's
    debian/changelog until (including) version 2.02.

    Disregard the comment in version 2.01.03 about plans to discontinue
    icmake. Icmake's build script will be kept and will remain to be yodl's 
    main build-tool. Many functions used in the src/build script have been
    rebuilt, resulting in the removal of many system-function calls and thus
    increasing its speed of execution.

    Compilation warnings in src/subst/substaction.c and src/process/pparent.c
    were solved.

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Wed, 23 Aug 2006 10:42:12 +0200

yodl (2.01.03) unstable; urgency=low

  * The XXtocclearpage symbol, used by the tocclearpage() and notocclearpage()
    macros, was erroneously defined for the HTML convertor instead of the
    LaTeX convertor. Also, the macro tocclearpage() did not assign a non-empty
    value to the XXtocclearpage macro, so the macro had no effect.
    
    Added the file yodl/debian/compat
    
    Following suggestions by Karel Kubat, macros/rawmacros/footnote.raw was
    modified for HTML-usage. With the HTML convertor a non-breakable space is
    inserted before the (parenthesized) footnote-text.
    
    A `contrib' directory is created below /usr/share/doc/yodl. Currently it
    contains a perl-script `build.pl' that may be used to create the
    yodl-package. It is not maintained by me (Frank), but was supplied by
    Karel Kubat. Note that it does not update the program version, but uses a
    hard-coded version as set by the script. Karel (karel@e-tunity.com) should
    be contacted for any questions related to this script. Furthermore, the
    dependency on `icmake' will probably be removed from Yodl in the near
    future: I'm planning to standardize the package building using a series of
    generic shell-scripts, which may render the build.pl script obsolete as
    well.
    
    The build-script will now install in yodl/yodl/debian/yodl instead of
    yodl/yodl/debian/tmp

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Mon, 13 Mar 2006 20:53:23 +0100

yodl (2.01.02) unstable; urgency=low

  * Changed the lsect(), lsubsect(), lsubsubsect(), sect(), subsect() and
    subsubsect() macros (for html and xml use) since the l...() macros set the
    lastnumber value too late. New XX...sect[Counter].raw files were defined
    to factorize common parts. The l...sect() macros now first set the next
    section number, and then define a label. Finally the section code is
    inserted. The ...sect() macros set the counter, followed by the section's
    code. 

    Furthermore, added n-tilde and N-tilde definitions to chartables.

    Note the change of my e-mail address: it's now @rug.nl, instead of
    @rc.rug.nl

 -- Frank B. Brokken <f.b.brokken@rug.nl>  Fri, 29 Jul 2005 14:38:57 +0200

yodl (2.01.01) unstable; urgency=low

  * Ai, another leftover from the previous bug-repair: if the suspected
    macro call was already part of the set if supected macros calls the
    already read open parentheses wasn't pushed back. It's now repaired.

    Also, followed Karel's suggestion to do system("rm -rf bin/* libyodl.a
    */o/*"); in yodl/src/build, rather than just -f, in order to removed 
    any CVS directories that might be there as well. Since this part should
    not contain any useful info for CVS it shouldn't matter that CVS is 
    removed. 

 -- Frank B. Brokken <f.b.brokken@rc.rug.nl>  Thu, 20 Jan 2005 08:23:11 +0100

yodl (2.01.00) unstable; urgency=low

  * Forced subdir creation at manual construction (in yodl/manual: html/
    latex/ pdf/ ps/ txt/), as suggested by Karel Kubat

    Repaired a bug in the man-page construction in yodlpost:
    handle_ignore_ws didn't ignore multiple white lines. Repaired by
    adding appropriate test

    Repaired a bug in yodl itself:
    -w flag eats initial openparen of parenthesized list. Not specifying -w
    doesn't. Repaired by pushing back an open-parenthesis after recognizing a
    suspected user macro which doesn't turn out to be a user macro in
    src/parser/pnousermacro.c. See the comments in that source for details.

 -- Frank B. Brokken <f.b.brokken@rc.rug.nl>  Tue, 14 Dec 2004 20:50:53 +0100

yodl (2.00.06) unstable; urgency=low

  * Repaired dangling links of yodl2XXX.1.gz manpages

 -- Frank B. Brokken <f.b.brokken@rc.rug.nl>  Sat,  6 Nov 2004 14:53:37 +0100

yodl (2.00.05) unstable; urgency=low

  * Minor repairs of txt-conversion em() and bf() macros

 -- Frank B. Brokken <f.b.brokken@rc.rug.nl>  Wed, 13 Oct 2004 16:35:16 +0200

yodl (2.00.04) unstable; urgency=low

  * Added .../macros/rawmacros/xxsetmandocumentheader.raw, provided by Karel
    Kubat allowing man-conversions for article, books, report, etc;
    Added new counter XXused to indicate that a list has been used in XML mode,
    adapted related macros accordingly;
    Repaired several inconsistencies in enumeration()/itemization(), following
    Karel's hints;
    Repaired references to xml-skeletons, which were consistently expected in
    /usr/share/yodl rather than in /usr/share/yodl/xml/

 -- Frank B. Brokken <f.b.brokken@rc.rug.nl>  Wed, 29 Sep 2004 23:15:06 +0200

yodl (2.00.03) unstable; urgency=low

  * yodlpost/handleignorews.cc: called file_copy2offset(src, dest, offset)
    rather than file_copy2offset(dest, src, offset). Happened only here.
    Added some comment to file_copy2offset() itself, and repaired
    itemization() and enumeration() macros.  
    Added minor modifications to macros/build and manual/yo/manual.yo.

 -- Frank B. Brokken <f.b.brokken@rc.rug.nl>  Mon, 27 Sep 2004 21:06:12 +0200

yodl (2.00.02) unstable; urgency=low

  * - Added the standard htmlstylesheet() and htmlheadopt() macros to be used
    in the html converter to add, respectively, a stylesheet or any option
    into the head of html files.
    - Modified yodl2whatever to deduct the default output filename from the
    last specified .yo file

 -- Frank B. Brokken <f.b.brokken@rc.rug.nl>  Fri, 24 Sep 2004 12:53:20 +0200

yodl (2.00.01) unstable; urgency=low

  * eit() in the text-convertor did not properly handle the XXenumcounter

 -- Frank B. Brokken <f.b.brokken@rc.rug.nl>  Tue, 21 Sep 2004 15:09:58 +0200

yodl (2.00) unstable; urgency=low

  * Complete rewrite. See the manual for the modifications. Old yodl-sources
    will usually require minor modifications

 -- Frank B. Brokken <f.b.brokken@rc.rug.nl>  Tue, 31 Aug 2004 11:37:28 +0200

yodl (1.31.18-7) unstable; urgency=low

  * In the lexer, if we've stepped back over all pre-pushed input, ensure
    that future pushes reallocate the buffer rather than underrunning
    (closes: #203599).
  * Check policy up to 3.5.6: no changes required. Work is needed on
    compiler options for later versions.

 -- Colin Watson <cjwatson@debian.org>  Mon, 29 Sep 2003 08:23:03 +0100

yodl (1.31.18-6) unstable; urgency=low

  * Simply remove root-owned out/dummy.dep files in the clean target rather
    than trying to chown them to $LOGNAME, which doesn't work under pbuilder
    (closes: #189620).
  * Use '%option noyywrap' rather than the messy local definition of
    yywrap(), which doesn't build properly with current flex.
  * Remove src/yodl2html-post/parser.c on clean to avoid bizarre build
    failures (thanks, Daniel Schepler).

 -- Colin Watson <cjwatson@debian.org>  Fri,  2 May 2003 09:21:08 +0100

yodl (1.31.18-5) unstable; urgency=low

  * Reinstate URL in control file, as it's useful for people browsing
    http://packages.debian.org/ (thanks, Oohara Yuuma).
  * Remove some cruft from debian/rules.
  * Use dh_installinfo rather than the incorrect code in debian/postinst and
    debian/prerm (which looked at /usr/info!).

 -- Colin Watson <cjwatson@debian.org>  Mon, 11 Nov 2002 20:34:34 +0000

yodl (1.31.18-4) unstable; urgency=low

  * Remove URL/authors from control file (should just be in copyright file).

 -- Colin Watson <cjwatson@debian.org>  Tue, 16 Jul 2002 00:37:11 +0100

yodl (1.31.18-3) unstable; urgency=low

  * Make startit() and endit() correctly generate <ul></ul> rather than
    <dl></dl> (thanks, Frank B. Brokken).
  * Update Frank's e-mail address.

 -- Colin Watson <cjwatson@debian.org>  Sun,  6 Jan 2002 15:25:22 +0000

yodl (1.31.18-2) unstable; urgency=low

  * New maintainer (closes: #111032).
  * Reintroducing package to unstable because five packages build-depend on
    it. When those packages migrate to a different documentation system,
    yodl may safely be removed.

  * Unexport NAME in debian/rules; the Hurd sets it, which confuses stepmake
    (closes: #111019, #111085).
  * ' generates \&' rather than \' for groff -man output, as \' is an acute
    accent, not an apostrophe (thanks, Matt Kraai; closes: #51258).
  * Recommend python rather than python1.5. yodl seems to work fine with
    newer versions of python, and python1.5 wouldn't have worked because it
    doesn't provide /usr/bin/python.
  * Add build-dependencies.
  * Policy version 3.2.1.

 -- Colin Watson <cjwatson@debian.org>  Thu, 22 Nov 2001 20:09:33 +0000

yodl (1.31.18-1.1) unstable; urgency=low

  * Non Maintainer Upload.
  * Package is orphaned, setting Maintainer to Debian QA Group.
  * Apply patch from James Troup to fix build issues. (Closes: #119172)
  * Fix Python Recommends. (Closes: #119204)
  * Fix all lintian errors. (Fix changelog, strip binaries, remove
    INSTALL.txt)
  * Remove dh_suidregister from debian/rules.

 -- Steve Kowalik <stevenk@debian.org>  Mon, 12 Nov 2001 12:10:11 +1100

yodl (1.31.18-1) unstable; urgency=low

  * New maintainer
  * New upstream version

 -- Scott Hanson <shanson@debian.org>  Sat,  4 Dec 1999 10:56:51 +0100

yodl (1.31.16-1) unstable; urgency=low

  * New upstream release.
  * Partially upgraded to standards version 3.0.1:
     - Updated copyright to point to /usr/share/common-licenses
     - First step towards FHS-compliance: Man and info pages are now
       installed under /usr/share.

 -- Anthony Fok <foka@debian.org>  Wed, 25 Aug 1999 02:41:38 -0600

yodl (1.31.11-1) unstable; urgency=low

  * New upstream release.
  * Re-added Yodl info page and added doc-base support.

 -- Anthony Fok <foka@debian.org>  Wed, 17 Mar 1999 00:47:31 -0700

yodl (1.31.10-1) unstable; urgency=low

  * New upstream release.
  * [debian/control]: Updated to Standards-Version: 2.5.0.0
  * [debian/copyright]: Updated the address to the upstream FTP site.
  * Various minor clean-ups.

 -- Anthony Fok <foka@debian.org>  Sat, 13 Feb 1999 14:09:47 -0700

yodl (1.31.7-1) frozen unstable; urgency=low

  * New upstream release, mostly bugfixes.
  * Tweaked debian/rules aclocal.m4 (hence configure) to make sure that
    yodl is compiled with optimization "-O2" turned on.
  * s/-mgs/-ms/g in config.make.in and yodlconverters.yo.in because
    Debian's groff only has -ms, not -mgs.
  * [debian/control]: Recommends: groff.

 -- Anthony Fok <foka@debian.org>  Thu, 12 Nov 1998 03:04:58 -0700

yodl (1.31.6-1) unstable; urgency=low

  * [Documentation/GNUmakefile]: Removed "texinfo" that was added to
      "default:" in Debian's yodl_1.31.2-1 because the NEWS file says
      "don't make texinfo by default" in Yodl 1.31.4, and otherwise
      the build process fails, most likely my fault.  :-)
  * [debian/rules]: Now, in the "clean:" target, runs either
      "find . -user root | xargs -r chown $$SUDO_USER.$$SUDO_GID" or
      "find . -user root | xargs -r chown $$LOGNAME" to deal with all those
      root-owned "out/*" files generated during a "sudo debian/rules clean"
      run.  Thanks to Roman Hodek <Roman.Hodek@informatik.uni-erlangen.de>
      for reporting a similar problem with the lilypond package.  :-)
  * Removed postinst and prerm and adjusted debian/GNUmakefile accordingly,
    as Yodl's info files are not built or installed for this release.
  * [debian/control]: Oops!  Forgot to add dependencies!  :-)
      Added "Depends: ${shlibs:Depends}"
      and "Recommends: python-base (>= 1.5.1)".

 -- Anthony Fok <foka@debian.org>  Sat, 10 Oct 1998 14:47:05 -0600

yodl (1.31.2-1) unstable; urgency=low

  * New upstream release.
  * Applied patch 1.31.2.jbr1:
      - src/yodl/grampipethrough.c: A popen _must_ be closed with a
        pclose _not_ a fclose.  Pipes were never getting closed on
        Windows NT cygnus.
  * [Documentation/GNUmakefile]: Added "texinfo" to "default:",
      otherwise Documentation/out/yodl.info* would not be built
      and "make install" would complain.
  * [debian/postinst,debian/prerm]: Added calls to install-info.
  * [Documentation/links.yo]: The e-mail address and command for subscribing
      to the Yodl Mailing List was wrong.  Fixed.

 -- Anthony Fok <foka@debian.org>  Tue,  8 Sep 1998 05:08:54 -0600

yodl (1.31.0-1) unstable; urgency=low

  * Initial upload to Debian's FTP server.
  * Minor revisions in config.make.in and debian/rules.
  * Note that this package was created by Yodl and lilypond's co-author,
    Jan Nieuwenhuizen <janneke@gnu.org>.  He did all the Debianization
    work for me.  I am so amazed!  All I am doing now is uploading it. 
    Thanks a lot, Jan!  :-)

 -- Anthony Fok <foka@debian.org>  Wed, 12 Aug 1998 12:52:18 -0600

yodl (1.30.0.pre9-2) unstable; urgency=low

  * support for 'make deb' target

 -- Jan Nieuwenhuizen <janneke@gnu.org>  Fri,  3 Jul 1998 17:53:37 +0200

yodl (1.30.0.pre9-1) unstable; urgency=low

  * Initial Release (copied from lilypond-0.1.71-1)

 -- Jan Nieuwenhuizen <janneke@gnu.org>  Fri,  3 Jul 1998 17:33:37 +0200

Local variables:
mode: debian-changelog
End: