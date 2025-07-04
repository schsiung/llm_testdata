Source: rdiffweb
Section: web
Priority: optional
Maintainer: Patrik Dufresne <patrik@ikus-soft.com>
Build-Depends:
 coreutils,
 debhelper-compat (= 13),
 dh-sequence-python3,
 gzip,
 python3,
 python3-all-dev,
 python3-apscheduler,
 python3-babel,
 python3-cached-property,
 python3-cherrypy3,
 python3-configargparse,
 python3-distro,
 python3-future,
 python3-humanfriendly,
 python3-jinja2,
 python3-ldap3,
 python3-nose,
 python3-parameterized,
 python3-pip,
 python3-psutil,
 python3-pytest,
 python3-setuptools,
 python3-setuptools-scm,
 python3-sqlalchemy,
 python3-wtforms,
 python3-zxcvbn,
 rdiff-backup,
Rules-Requires-Root: no
Standards-Version: 4.5.1
Homepage: https://www.ikus-soft.com/en/rdiffweb/
Vcs-Git: https://gitlab.com/ikus-soft/rdiffweb.git
Vcs-Browser: https://gitlab.com/ikus-soft/rdiffweb

Package: rdiffweb
Architecture: all
Depends:
 coreutils,
 gzip,
 libjs-bootstrap,
 libjs-chart.js,
 libjs-chartkick.js,
 libjs-jquery,
 python3-distutils,
 python3-future,
 rdiff-backup,
 ${python3:Depends},
Suggests:
 python3-psycopg2,
Description: web interface to rdiff-backup repositories
 Rdiffweb is a web application that allows you to view repositories generated
 by rdiff-backup. The purpose of this application is to ease the management
 of backups and quickly restore your data with a rich and powerful web
 interface.