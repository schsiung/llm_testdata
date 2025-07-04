.\" reposync
.TH "reposync" "1" "27 April 2007" "" ""
.SH "NAME"
reposync \- synchronize yum repositories to a local directory
.SH "SYNOPSIS"
\fBreposync\fP [options]
.SH "DESCRIPTION"
\fBreposync\fP is used to synchronize a remote yum repository to a local
directory, using yum to retrieve the packages.
.SH "OPTIONS"
.IP "\fB\-h, \-\-help\fP"
Display a help message, and then quit.
.IP "\fB\-c CONFIG, \-\-config=CONFIG\fP"
Config file to use (defaults to /etc/yum.conf).
.IP "\fB\-a ARCH, \-\-arch=ARCH\fP"
Act as if running the specified arch (default: current arch, note: does
not override $releasever. x86_64 is a superset for i*86.).
.IP "\fB\-\-source\fP"
Also download .src.rpm files.
.IP "\fB\-r REPOID, \-\-repoid=REPOID\fP"
Specify repo ids to query, can be specified multiple times (default is
all enabled).
.IP "\fB\-e\ CACHEDIR, \-\-cachedir CACHEDIR\fP"
Directory in which to store metadata.
.IP "\fB\-t, \-\-tempcache\fP"
Use a temp dir for storing/accessing yum-cache.
.IP "\fB\-d, \-\-delete\fP"
Delete local packages no longer present in repository.
.IP "\fB\-p DESTDIR, \-\-download_path=DESTDIR\fP"
Path to download packages to: defaults to current directory.
.IP "\fB\-\-norepopath\fP"
Don't add the reponame to the download path.
Can only be used when syncing a single repository (default is
to add the reponame).
.IP "\fB\-g, \-\-gpgcheck\fP"
Remove packages that fail GPG signature checking after downloading.
exit status is '1' if at least one package was removed.
.IP "\fB\-u, \-\-urls\fP"
Just list urls of what would be downloaded, don't download.
.IP "\fB\-l, \-\-plugins\fP"
Enable yum plugin support.
.IP "\fB\-m, \-\-downloadcomps\fP"
Also download comps.xml.
.IP "\fB\-\-download-metadata\fP"
Download all the non-default metadata
.IP "\fB\-n, \-\-newest\-only\fP"
Download only newest packages per-repo.
.IP "\fB\-q, \-\-quiet\fP"
Output as little information as possible.
.IP "\fB\-\-allow-path-traversal\fP"
Allow packages stored outside their repo directory to be synced.
These are packages that are referenced in metadata by using absolute paths or
up-level ".." symbols, and are normally skipped by \fBreposync\fR for security
reasons.

\fBCAUTION:\fR Using this option has potential security implications since, by
providing malicious repodata, an attacker could make \fBreposync\fR write to
arbitrary locations on the file system that are accessible by the user running
it.
.IP "\fB\-\-allow-path-traversal\fP"
Allow packages stored outside their repo directory to be synced.
These are packages that are referenced in metadata by using absolute paths or
up-level ".." symbols, and are normally skipped by \fBreposync\fR for security
reasons.

\fBCAUTION:\fR Using this option has potential security implications since, by
providing malicious repodata, an attacker could make \fBreposync\fR write to
arbitrary locations on the file system that are accessible by the user running
it.
.SH "EXAMPLES"
.IP "Sync all packages from the 'updates' repo to the current directory:"
\fB reposync \-\-repoid=updates\fP
.IP "Sync only the newest packages from the 'updates' repo to the current directory:"
\fB reposync \-n \-\-repoid=updates\fP
.IP "Sync packages from the 'updates' and 'extras' repos to the current directory:"
\fB reposync \-\-repoid=updates \-\-repoid=extras\fP
.IP "Sync all packages from the 'updates' repo to the \fBrepos\fP directory:"
\fB reposync \-p repos \-\-repoid=updates\fP
.IP "Sync all packages from the 'updates' repo to the \fBrepos\fP directory excluding x86_64 arch. Edit \fI/etc/yum.conf\fR adding option \fBexclude=*.x86_64\fR. Then: 
\fBreposync \-p repos \-\-repoid=updates\fP
.SH "FILES"
\fBreposync\fP uses the yum libraries for retrieving information and
packages. If no configuration file is specified, the default yum
configuration will be used.
.PP
.nf 
/etc/yum.conf
/etc/yum/repos.d/
.fi
.SH "SEE ALSO"
.nf
.I yum.conf (5)
http://yum.baseurl.org/
.fi
.SH "AUTHORS"
.nf 
See the Authors file included with this program.
.fi

.PP 
.SH "BUGS"
There are of course no bugs, but should you find any, you should first
consult the FAQ section on http://yum.baseurl.org/wiki/Faq and if unsuccessful
in finding a resolution contact the mailing list: yum-devel@lists.baseurl.org.
To file a bug use http://bugzilla.redhat.com for Fedora/RHEL/Centos
related bugs and http://yum.baseurl.org/report for all other bugs.

.fi