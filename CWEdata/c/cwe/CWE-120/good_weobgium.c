$NHDT-Branch: NetHack-3.6 $:$NHDT-Revision: 1.3 $ $NHDT-Date: 1578996303 2020/01/14 10:05:03 $

fixes36.5 contains a terse summary of changes made to 3.6.4 in order to
produce 3.6.5 as well as any post-release fixes in binaries.


General Fixes and Modified Features
-----------------------------------
fix accessing mons[-1] when trying to gate in a non-valid demon
fix accessing mons[-1] when monster figures out if a tin cures stoning
have string_for_opt() return empty_optstr on failure
ensure existing callers of string_for_opt() check return value before using it
fix potential buffer overflow in add_menu_coloring()
fix potential buffer overflow in sym_val()
fix potential buffer overflow in pline(), raw_printf(), and config_error_add()
	via bad config file values or command line arguments
fix potential buffer overflow in choose_windows()
	via bad config file values or command line arguments
fix potential buffer overflow in choose_windows()


Fixes to Post-3.6.4 Problems that Were Exposed Via git Repository
------------------------------------------------------------------


Platform- and/or Interface-Specific Fixes or Features
-----------------------------------------------------
Windows OPTIONS=map_mode:fit_to_screen could cause a game start failure


General New Features
--------------------
none
