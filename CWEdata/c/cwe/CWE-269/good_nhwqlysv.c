#!/usr/bin/make -f

export DH_VERBOSE=1
export DEB_BUILD_HARDENING=1

# enable Debian Hardening
# see: https://wiki.debian.org/Hardening
export DEB_BUILD_MAINT_OPTIONS = hardening=+all
DPKG_EXPORT_BUILDFLAGS = 1
include /usr/share/dpkg/default.mk

BUILDDIR := builddir
DEB_VERSION_REVISION := $(shell echo $(DEB_VERSION) | sed -e 's/^.*-//')
RELEASE := $(shell lsb_release -r -s) # Use changelog based DEB_DISTRIBUTION instead?
TMP:=$(CURDIR)/debian/tmp

CC := $(DEB_HOST_GNU_TYPE)-gcc
CXX := $(DEB_HOST_GNU_TYPE)-g++

# Parallel build support as advised
# at https://www.debian.org/doc/debian-policy/ch-source.html#s-debianrules-options
ifneq (,$(filter parallel=%,$(DEB_BUILD_OPTIONS)))
    NUMJOBS = $(patsubst parallel=%,%,$(filter parallel=%,$(DEB_BUILD_OPTIONS)))
    MAKEFLAGS += -j$(NUMJOBS)
else
    # NUMJOBS cannot be empty as it is used as a parameter to mtr, default to 1.
    NUMJOBS = 1
endif

# Ignore test suite exit code on unstable platforms
ifneq (,$(filter $(DEB_HOST_ARCH),mips mipsel mips64el alpha powerpc sh4 hurd-i386 sparc64 kfreebsd-i386 kfreebsd-amd64))
    TESTSUITE_FAIL_CMD:=true
else
    TESTSUITE_FAIL_CMD:=exit 1
endif

ifeq (32,$(DEB_HOST_ARCH_BITS))
    CMAKEFLAGS += -DWITHOUT_ROCKSDB=true
endif

# Skip TokuDB if arch is not amd64 (also disable for kfreebsd-amd64 as it FTBFS)
# Skipped on the x32 ABI too; untested, but unlikely to work given i386 is not
# supported.
ifneq ($(DEB_HOST_ARCH),amd64)
    CMAKEFLAGS += -DWITHOUT_TOKUDB=true
endif

# Disable jemalloc on mips* due to #843926
ifneq (,$(filter $(DEB_HOST_ARCH), mips mipsel mips64 mips64el))
    CMAKEFLAGS += -DWITH_JEMALLOC=no
endif

# Add support for verbose builds
MAKEFLAGS += VERBOSE=1

override_dh_auto_clean:
	@echo "RULES.$@"
	dh_testdir
	dh_testroot
	[ ! -d mysql-test/var ] || rm -rf mysql-test/var
	rm -rf $(BUILDDIR)
	debconf-updatepo # Update po-files when clean runs before each build

override_dh_prep:
        # Don't clean /tmp/ away, it is needed by all binary packages

override_dh_auto_configure:
	@echo "RULES.$@"
	dh_testdir

	# Versioned symbols are only available on Linux.
	# Remove symbols file on kFreeBSD builds so that
	# dpkg-gensymbols will not fail the build.
ifneq (,$(filter $(DEB_HOST_ARCH), kfreebsd-i386 kfreebsd-amd64))
	rm debian/libmariadb3.symbols
endif

	mkdir -p $(BUILDDIR) && cd $(BUILDDIR) && \
	sh -c  'PATH=$${MYSQL_BUILD_PATH:-"/usr/lib/ccache:/usr/local/bin:/usr/bin:/bin"} \
	    	CC=${CC} \
	    	CXX=${CXX} \
	    cmake -DCMAKE_INSTALL_PREFIX=/usr \
	    $(CMAKEFLAGS) \
	    -DCOMPILATION_COMMENT="mariadb.org binary distribution" \
	    -DMYSQL_SERVER_SUFFIX="-$(DEB_VERSION_REVISION)" \
	    -DSYSTEM_TYPE="debian-$(DEB_HOST_GNU_SYSTEM)" \
	    -DCMAKE_SYSTEM_PROCESSOR=$(DEB_HOST_ARCH) \
	    -DBUILD_CONFIG=mysql_release \
	    -DINSTALL_LIBDIR=lib/$(DEB_HOST_MULTIARCH) \
	    -DINSTALL_PLUGINDIR=lib/mysql/plugin \
	    -DINSTALL_MYSQLTESTDIR=share/mysql/mysql-test \
	    -DPLUGIN_AWS_KEY_MANAGEMENT=NO \
	    -DDEB=$(DEB_VENDOR) ..'

# This is needed, otherwise 'make test' will run before binaries have been built
override_dh_auto_build:
	@echo "RULES.$@"
	# Print build env info to help debug builds on different platforms
	dpkg-architecture
	cd $(BUILDDIR) && $(MAKE)

override_dh_auto_test:
	@echo "RULES.$@"
	dh_testdir
	# Skip unstable tests if such are defined for arch
	[ ! -f debian/unstable-tests.$(DEB_HOST_ARCH) ] || cat debian/unstable-tests.$(DEB_HOST_ARCH) >> mysql-test/unstable-tests
	# Run testsuite
ifeq (,$(filter nocheck,$(DEB_BUILD_OPTIONS)))
	cd $(BUILDDIR)/mysql-test && ./mtr --force --mem --parallel=$(NUMJOBS) --skip-rpl --suite=main --skip-test-list=unstable-tests  || $(TESTSUITE_FAIL_CMD) ;
endif

override_dh_auto_install:
	@echo "RULES.$@"
	dh_testdir
	dh_testroot

ifneq (,$(filter linux,$(DEB_HOST_ARCH_OS)))
	# Copy systemd files to a location available for dh_installinit
	cp $(BUILDDIR)/support-files/mariadb.service debian/mariadb-server-10.4.mariadb.service
	cp $(BUILDDIR)/support-files/mariadb@.service debian/mariadb-server-10.4.mariadb@.service
endif

	# make install
	cd $(BUILDDIR) && $(MAKE) install DESTDIR=$(TMP)

	# Delete runnable files we don't want to have in the test data package.
	# This avoids triggering multiple Lintian errors.
	rm -rf $(TMP)/usr/share/mysql/mysql-test/plugin/tokudb/tokudb/*.py
	rm -rf $(TMP)/usr/share/mysql/mysql-test/plugin/tokudb/tokudb/t/*.py

	# nm numeric soft is not enough, therefore extra sort in command
	# to satisfy Debian reproducible build requirements
	nm --defined-only $(BUILDDIR)/sql/mysqld | LC_ALL=C sort | gzip -n -9 > $(TMP)/usr/share/doc/mariadb-server-10.4/mysqld.sym.gz

	# rename and install AppArmor profile
	install -D -m 644 debian/apparmor-profile $(TMP)/etc/apparmor.d/usr.sbin.mysqld
	# install Apport hook
	install -D -m 644 debian/mariadb-server-10.4.py $(TMP)/usr/share/apport/package-hooks/source_mariadb-10.4.py

	# Install libmariadbclient18 compatibility links
	ln -s libmariadb.so.3 $(TMP)/usr/lib/$(DEB_HOST_MULTIARCH)/libmariadbclient.so
	ln -s libmariadb.so.3 $(TMP)/usr/lib/$(DEB_HOST_MULTIARCH)/libmariadbclient.so.18

	# Install libmysqlclientclientXX compatibility links
	ln -s libmariadb.so.3 $(TMP)/usr/lib/$(DEB_HOST_MULTIARCH)/libmysqlclient.so.18
	ln -s libmariadb.so.3 $(TMP)/usr/lib/$(DEB_HOST_MULTIARCH)/libmysqlclient.so.19
	ln -s libmariadb.so.3 $(TMP)/usr/lib/$(DEB_HOST_MULTIARCH)/libmysqlclient.so.20

override_dh_fixperms:
	dh_fixperms
	chmod 04755 debian/mariadb-server-10.4/usr/lib/mysql/plugin/auth_pam_tool_dir/auth_pam_tool
	chmod  0700 debian/mariadb-server-10.4/usr/lib/mysql/plugin/auth_pam_tool_dir
override_dh_fixperms:
	dh_fixperms
	chmod 04755 debian/mariadb-server-10.4/usr/lib/mysql/plugin/auth_pam_tool_dir/auth_pam_tool
	chmod  0700 debian/mariadb-server-10.4/usr/lib/mysql/plugin/auth_pam_tool_dir

override_dh_installlogrotate-arch:
	dh_installlogrotate --name mysql-server

override_dh_systemd_enable:
	dh_systemd_enable --name=mariadb
	dh_systemd_enable --no-enable --name=mariadb@

# Start mysql at sequence number 19 before 20 where apache, proftpd etc gets
# started which might depend on a running database server.
override_dh_installinit-arch:
	#dh_installinit --name=mysql -- defaults 19 21
	dh_systemd_start --restart-after-upgrade

override_dh_installcron-arch:
	dh_installcron --name mysql-server

# If a file is not supposed to be included anywhere, add it to the not-installed
# file and document the reason. Note that dh_install supports the above mentioned
# white list file only starting from Debian Stretch and Ubuntu Xenial.
# To find more, grep build logs for 'but is not installed to anywhere'.
%:
	dh $@ --parallel --with systemd --list-missing

# vim: ts=8