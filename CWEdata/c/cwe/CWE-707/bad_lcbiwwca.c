CHANGES:
0.1
	- initial release
0.2
	- added 'show' option, to display a note without editing
	- changed 'open' option to 'edit' to differentiate it from
	 'show', 'open' has been left for backward compatibility
0.2.1
	- added man page thanks to Salvatore Bonaccorso
	 <carnil <at> debian.org>
0.2.2
	- patch to build/Makefile to fix bug when building on ubuntu
	 provided by Angel Abad
	 http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=627306
	 https://bugs.launchpad.net/ubuntu/+source/nodau/+bug/785135
0.2.3
	- patches to Makefiles to improve build portability provided by
	 Mats Andersson <bsd <at> gisladisker.se>
0.3rc1
	- use an external editor for editing using the EDITOR
	 environment variable
	- move database location to comply with XDG standard
	- rewritten Makefiles
	- add support for encrypted notes
	- add a config file
0.3rc2
	- add GPL exception for linking with OpenSSL
	- updates to Makefile to allow passing of flags by environment
	 variable
	- updates to man page about configuration file by Salvatore
	 Bonaccorso <carnil <at> debian.org>
	- updates to man page and README file to document configuration
	 settings by Ryan MacNish <ryan <at> nisshh.com>
0.3rc3
	- only give user write permission when creating config/data
	 directories
	- prevent segfault when list'ing with no matches
0.3rc4
	- remove dependency on PATH_MAX to hopefully improve GNU Hurd
	 compatability
0.3rc5
	- remove dependency on PATH_MAX to hopefully improve GNU Hurd
	 compatability - do it properly!
0.3rc6
	- fix a segv in the database code
	- make encryption work again (when did this get broken?)
0.3rc7
	- allow passing CPPFLAGS by Salvatore Bonaccorso
	 <carnil <at> debian.org>
0.3.0
	- no changes, it seems stable
0.3.1
	- fix various compiler warnings
0.3.2
	- add 'create' as a synonym for 'new'
	- make 'edit' auto-create a note if it does not exist and
	 edit_autocreate is true in config
0.3.3
	- some documentation improvements by Salvatore Bonaccorso
	 <carnil <at> debian.org>
0.3.4
	- fixes to Makefile by Salvatore Bonaccorso
	 <carnil <at> debian.org>
0.3.5
	- make note editing scriptable, by allowing note content to be
	 piped to stdin
	- stop stack corruption on db_update with long notes
	- changes to temporary file handling to fix security
	 vulnerability - https://github.com/darkrose/nodau/issues/17
0.3.6
	- add append option to help text by Salvatore Bonaccorso
	 <carnil <at> debian.org>
	- fix compiler warning in usage()
0.3.7
	- prevent segv when env is empty
	- prevent segv in config file creation
0.3.8
	- add support for openssl 1.1 (by Salvatore Bonaccorso
	 <carnil <at> debian.org>)
	- fix typo in an error message
	- a bunch of small fixes to remove some compiler warnings
0.3.9
	- fix segfault when running 'nodau list' with search keyword,
	 and there are no matches (by Omer Dagan
	 <mr.omer.dagan <at> gmail.com>)
	- remove variable definitions in header file that caused issues
	 with gcc 10
0.3.10
    - Move to parametetrized SQL statement allows using chars like "'"
     in notes, and also avoid sql injection