Git v2.30.9 Release Notes
=========================

This release addresses the security issues CVE-2023-25652,
CVE-2023-25815, and CVE-2023-29007.


Fixes since v2.30.8
-------------------

 * CVE-2023-25652:

   By feeding specially crafted input to `git apply --reject`, a
   path outside the working tree can be overwritten with partially
   controlled contents (corresponding to the rejected hunk(s) from
   the given patch).

 * CVE-2023-25815:

   When Git is compiled with runtime prefix support and runs without
   translated messages, it still used the gettext machinery to
   display messages, which subsequently potentially looked for
   translated messages in unexpected places. This allowed for
   malicious placement of crafted messages.

 * CVE-2023-29007:

   When renaming or deleting a section from a configuration file,
   certain malicious configuration values may be misinterpreted as
   the beginning of a new configuration section, leading to arbitrary
   configuration injection.

Credit for finding CVE-2023-25652 goes to Ry0taK, and the fix was
developed by Taylor Blau, Junio C Hamano and Johannes Schindelin,
with the help of Linus Torvalds.

Credit for finding CVE-2023-25815 goes to Maxime Escourbiac and
Yassine BENGANA of Michelin, and the fix was developed by Johannes
Schindelin.

Credit for finding CVE-2023-29007 goes to André Baptista and Vítor Pinho
of Ethiack, and the fix was developed by Taylor Blau, and Johannes
Schindelin, with help from Jeff King, and Patrick Steinhardt.