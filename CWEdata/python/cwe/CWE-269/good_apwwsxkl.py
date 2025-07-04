# rdiffweb, A web interface to rdiff-backup repositories
# Copyright (C) 2012-2021 rdiffweb contributors
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

[tox]
envlist = py3,doc,flake8,black,isort,djlint,buster,bullseye,bookworm

[testenv]
passenv = RDIFFWEB_TEST_DATABASE_URI
deps=
  pytest
  coverage
  pytest-cov
  psycopg2-binary
  #cherrypy<9 depends on nosetest
  buster: nose
  buster: apscheduler==3.5.3
  buster: argon2-cffi==18.3.0
  buster: cherrypy==8.9.1
  buster: configargparse==0.13.0
  buster: distro==1.3.0
  buster: humanfriendly==4.18
  buster: Jinja2==2.10
  buster: ldap3==2.4.1
  buster: MarkupSafe==1.1.0
  buster: psutil==5.7.2
  buster: sqlalchemy==1.2.18
  buster: WTForms==2.2.1
  bullseye: apscheduler==3.7.0
  bullseye: argon2-cffi==18.3.0
  bullseye: cherrypy==18.6.1
  bullseye: configargparse==1.2.3
  bullseye: distro==1.5.0
  bullseye: humanfriendly==9.1
  bullseye: Jinja2==2.11.3
  bullseye: ldap3==2.8.1
  bullseye: MarkupSafe==1.1.1
  bullseye: psutil==5.8.0
  bullseye: sqlalchemy==1.3.22
  bullseye: WTForms==2.2.1
  bookworm: apscheduler==3.9.1
  bookworm: argon2-cffi==21.1.0
  bookworm: cherrypy==18.8.0
  bookworm: configargparse==1.5.3
  bookworm: distro==1.7.0
  bookworm: humanfriendly==10.0
  bookworm: Jinja2==3.0.3
  bookworm: ldap3==2.9.1
  bookworm: MarkupSafe==2.1.1
  bookworm: psutil==5.9.0
  bookworm: sqlalchemy==1.4.31
  bookworm: WTForms==2.2.1
extras = test
commands=
  pytest -v --debug --override-ini junit_family=xunit1 --junit-xml=xunit-{envname}.xml --cov=rdiffweb --cov-report xml:coverage-{envname}.xml

[testenv:doc]
deps =
  sphinx
  sphinx_md
  recommonmark
  sphinx-markdown-tables==0.0.3
commands = sphinx-build -W -b html -d {envtmpdir}/doctrees doc {envtmpdir}/html

[testenv:black]
deps = black
commands = black --check --diff setup.py rdiffweb
skip_install = true

[testenv:djlint]
deps = djlint==1.19.2
allowlist_externals = sh
commands = sh -c 'djlint --check rdiffweb/templates/*.html  rdiffweb/templates/**/*.html'
skip_install = true

[testenv:flake8]
deps =
  flake8
commands = flake8 setup.py rdiffweb
skip_install = true

[testenv:isort]
deps = isort>=5.0.1
commands = isort --check --diff setup.py rdiffweb
skip_install = true

[flake8]
ignore =
  E203
  E501
  W503
  E741
  # whitespace before ':'
  E203
  # line too long (86 > 79 characters)
  E501
  # line break before binary operator
  W503
  # ambiguous variable name 'I'
  E741
filename =
  *.py
  setup.py
max-complexity = 20

[isort]
profile = black
line_length = 120