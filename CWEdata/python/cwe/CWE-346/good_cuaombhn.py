#
# This file is autogenerated by pip-compile
# To update, run:
#
#    pip-compile --no-index --output-file=requirements/dev.txt requirements/ci.txt requirements/dev.in
#
alabaster==0.7.12         # via sphinx
ansible==2.9.13           # via -r requirements/../deployment/requirements.in
appdirs==1.4.4            # via -r requirements/ci.txt, black
attrs==19.3.0             # via -r requirements/ci.txt, black, jsonschema
autopep8==1.5.2           # via django-silk
babel==2.7.0              # via sphinx
beautifulsoup4==4.8.1     # via -r requirements/ci.txt, webtest
black==19.10b0            # via -r requirements/ci.txt
bumpversion==0.5.3        # via -r requirements/dev.in
cachetools==4.1.1         # via google-auth
certifi==2018.4.16        # via -r requirements/ci.txt, kubernetes, requests, sentry-sdk
cffi==1.13.2              # via -r requirements/ci.txt, cryptography
chardet==3.0.4            # via -r requirements/ci.txt, requests
click==7.1.2              # via -r requirements/ci.txt, black, pip-tools
cmislib-maykin==0.7.4     # via -r requirements/ci.txt, drc-cmis
commonmark==0.9.1         # via recommonmark
coreapi==2.3.3            # via -r requirements/ci.txt, drf-yasg
coreschema==0.0.4         # via -r requirements/ci.txt, coreapi, drf-yasg
coverage==4.5.4           # via -r requirements/ci.txt
cryptography==3.2.1       # via -r requirements/ci.txt, ansible, django-auth-adfs
dictdiffer==0.8.0         # via -r requirements/ci.txt
django-admin-index==1.2.2  # via -r requirements/ci.txt
django-appconf==1.0.2     # via -r requirements/ci.txt, django-axes
django-auth-adfs-db==0.2.0  # via -r requirements/ci.txt
django-auth-adfs==1.3.1   # via -r requirements/ci.txt, django-auth-adfs-db
django-axes==4.4.0        # via -r requirements/ci.txt
django-choices==1.7.0     # via -r requirements/ci.txt, drc-cmis, vng-api-common, zgw-consumers
django-db-logger==0.1.7   # via -r requirements/ci.txt
django-cors-headers==3.5.0  # via -r requirements/ci.txt
django-debug-toolbar==2.0  # via -r requirements/dev.in
django-extensions==2.2.1  # via -r requirements/dev.in
django-extra-fields==1.2.4  # via -r requirements/ci.txt
django-extra-views==0.13.0  # via -r requirements/ci.txt
django-filter==2.0.0      # via -r requirements/ci.txt, django-loose-fk, vng-api-common
django-ipware==2.1.0      # via -r requirements/ci.txt, django-axes
django-loose-fk==0.7.1    # via -r requirements/ci.txt
django-markup==1.3        # via -r requirements/ci.txt
django-ordered-model==2.1.0  # via -r requirements/ci.txt, django-admin-index
django-privates==1.2.1    # via -r requirements/ci.txt
django-redis==4.10.0      # via -r requirements/ci.txt
django-relativedelta==1.0.5  # via -r requirements/ci.txt, zgw-consumers
django-sendfile2==0.6.0   # via -r requirements/ci.txt, django-privates
django-silk==4.0.1        # via -r requirements/dev.in
django-sniplates==0.7.0   # via -r requirements/ci.txt
django-solo==1.1.3        # via -r requirements/ci.txt, django-auth-adfs-db, drc-cmis, vng-api-common, zgw-consumers
django-webtest==1.9.7     # via -r requirements/ci.txt
django==2.2.10            # via -r requirements/ci.txt, django-auth-adfs, django-auth-adfs-db, django-choices, django-cors-headers, django-db-logger, django-debug-toolbar, django-extra-fields, django-extra-views, django-filter, django-loose-fk, django-markup, django-privates, django-redis, django-relativedelta, django-sendfile2, django-silk, django-sniplates, drc-cmis, drf-nested-routers, drf-yasg, nlx-url-rewriter, vng-api-common, zgw-consumers
djangorestframework-gis==0.14  # via -r requirements/ci.txt
django==2.2.10            # via -r requirements/ci.txt, django-auth-adfs, django-auth-adfs-db, django-choices, django-cors-headers, django-db-logger, django-debug-toolbar, django-extra-fields, django-extra-views, django-filter, django-loose-fk, django-markup, django-privates, django-redis, django-relativedelta, django-sendfile2, django-silk, django-sniplates, drc-cmis, drf-nested-routers, drf-yasg, nlx-url-rewriter, vng-api-common, zgw-consumers
djangorestframework==3.9.4  # via -r requirements/ci.txt, django-extra-fields, django-loose-fk, djangorestframework-gis, drf-nested-routers, drf-yasg, vng-api-common
docutils==0.15.2          # via recommonmark, sphinx
drc-cmis==1.1.2           # via -r requirements/ci.txt
drf-flex-fields==0.5.0    # via -r requirements/ci.txt
drf-nested-routers==0.90.2  # via -r requirements/ci.txt, vng-api-common
drf-writable-nested==0.4.3  # via -r requirements/ci.txt
drf-yasg==1.16.0          # via -r requirements/ci.txt, vng-api-common
factory-boy==2.12.0       # via -r requirements/ci.txt
faker==2.0.1              # via -r requirements/ci.txt, factory-boy
flake8==3.8.3             # via -r requirements/ci.txt
freezegun==0.3.12         # via -r requirements/ci.txt
gemma-zds-client==0.13.0  # via -r requirements/ci.txt, vng-api-common, zgw-consumers
gitdb==4.0.5              # via -r requirements/ci.txt, gitpython
gitpython==3.1.7          # via -r requirements/ci.txt
google-auth==1.21.2       # via kubernetes
gprof2dot==2019.11.30     # via django-silk
httplib2==0.18.1          # via -r requirements/ci.txt, cmislib-maykin
humanize==0.5.1           # via -r requirements/ci.txt
idna==2.6                 # via -r requirements/ci.txt, requests
imagesize==1.1.0          # via sphinx
importlib-metadata==3.1.1  # via -r requirements/ci.txt, flake8, jsonschema
inflection==0.3.1         # via -r requirements/ci.txt, drf-yasg
iso-639==0.4.5            # via -r requirements/ci.txt, vng-api-common
iso8601==0.1.12           # via -r requirements/ci.txt, cmislib-maykin, drc-cmis
isodate==0.6.0            # via -r requirements/ci.txt, vng-api-common
isort==5.0.7              # via -r requirements/ci.txt
itypes==1.1.0             # via -r requirements/ci.txt, coreapi
jinja2==2.10.1            # via -r requirements/ci.txt, ansible, coreschema, django-silk, openshift, sphinx
jsonschema==3.2.0         # via kubernetes-validate
kubernetes-validate==1.18.0  # via -r requirements/../deployment/requirements.in
kubernetes==11.0.0        # via openshift
markdown==3.0.1           # via -r requirements/ci.txt, sphinx-markdown-tables
markupsafe==1.1.1         # via -r requirements/ci.txt, jinja2
maykin-django-better-admin-arrayfield==1.0.5  # via -r requirements/ci.txt
mccabe==0.6.1             # via -r requirements/ci.txt, flake8
nlx-url-rewriter==0.1.2   # via -r requirements/ci.txt
oauthlib==3.1.0           # via requests-oauthlib
openshift==0.11.2         # via -r requirements/../deployment/requirements.in
oyaml==0.7                # via -r requirements/ci.txt, vng-api-common
packaging==19.2           # via sphinx
passlib==1.7.2            # via -r requirements/../deployment/requirements.in
pathspec==0.8.0           # via -r requirements/ci.txt, black
pip-tools==5.1.2          # via -r requirements/dev.in
psycopg2==2.8.4           # via -r requirements/ci.txt
pyasn1-modules==0.2.8     # via google-auth
pyasn1==0.4.8             # via pyasn1-modules, rsa
pycodestyle==2.6.0        # via -r requirements/ci.txt, autopep8, flake8
pycparser==2.19           # via -r requirements/ci.txt, cffi
pyflakes==2.2.0           # via -r requirements/ci.txt, flake8
pygments==2.4.2           # via django-silk, sphinx, sphinx-tabs
pyjwt==1.6.4              # via -r requirements/ci.txt, django-auth-adfs, gemma-zds-client, vng-api-common
pyparsing==2.4.2          # via packaging
pyrsistent==0.17.3        # via jsonschema
python-dateutil==2.7.3    # via -r requirements/ci.txt, django-relativedelta, django-silk, faker, freezegun, kubernetes
python-decouple==3.1      # via -r requirements/ci.txt
python-dotenv==0.8.2      # via -r requirements/ci.txt
python-string-utils==1.0.0  # via openshift
pytz==2019.1              # via -r requirements/ci.txt, babel, django, django-axes, django-silk
pyyaml==5.1               # via -r requirements/../deployment/requirements.in, -r requirements/ci.txt, ansible, gemma-zds-client, kubernetes, kubernetes-validate, oyaml, vng-api-common
recommonmark==0.6.0       # via -r requirements/dev.in
redis==3.3.8              # via -r requirements/ci.txt, django-redis
regex==2020.6.8           # via -r requirements/ci.txt, black
requests-mock==1.6.0      # via -r requirements/ci.txt
requests-oauthlib==1.3.0  # via kubernetes
requests==2.21.0          # via -r requirements/ci.txt, coreapi, django-auth-adfs, django-silk, gemma-zds-client, kubernetes, requests-mock, requests-oauthlib, sphinx, vng-api-common, zgw-consumers
rsa==4.6                  # via google-auth
ruamel.yaml.clib==0.2.2   # via -r requirements/ci.txt, ruamel.yaml
ruamel.yaml==0.16.7       # via -r requirements/ci.txt, drf-yasg, openshift
sentry-sdk==0.16.5        # via -r requirements/ci.txt
six==1.11.0               # via -r requirements/ci.txt, cmislib-maykin, cryptography, django-extensions, django-extra-views, django-markup, drf-yasg, faker, freezegun, google-auth, isodate, jsonschema, kubernetes, openshift, packaging, pip-tools, python-dateutil, requests-mock, websocket-client, webtest
smmap==3.0.4              # via -r requirements/ci.txt, gitdb
snowballstemmer==2.0.0    # via sphinx
soupsieve==1.9.5          # via -r requirements/ci.txt, beautifulsoup4
sphinx-markdown-tables==0.0.14  # via -r requirements/dev.in
sphinx-rtd-theme==0.4.3   # via -r requirements/dev.in
sphinx-tabs==1.3.0        # via -r requirements/dev.in
sphinx==2.2.0             # via -r requirements/dev.in, recommonmark, sphinx-rtd-theme, sphinx-tabs
sphinxcontrib-applehelp==1.0.1  # via sphinx
sphinxcontrib-devhelp==1.0.1  # via sphinx
sphinxcontrib-htmlhelp==1.0.2  # via sphinx
sphinxcontrib-jsmath==1.0.1  # via sphinx
sphinxcontrib-qthelp==1.0.2  # via sphinx
sphinxcontrib-serializinghtml==1.1.3  # via sphinx
sqlparse==0.3.0           # via -r requirements/ci.txt, django, django-debug-toolbar, django-silk
tblib==1.4.0              # via -r requirements/ci.txt
text-unidecode==1.2       # via -r requirements/ci.txt, faker
toml==0.10.1              # via -r requirements/ci.txt, black
typed-ast==1.4.1          # via -r requirements/ci.txt, black
unidecode==1.0.22         # via -r requirements/ci.txt, vng-api-common
uritemplate==3.0.0        # via -r requirements/ci.txt, coreapi, drf-yasg
urllib3==1.24.3           # via -r requirements/ci.txt, kubernetes, requests, sentry-sdk
uwsgi==2.0.18             # via -r requirements/ci.txt
vng-api-common==1.0.52    # via -r requirements/ci.txt, drc-cmis
waitress==1.4.3           # via -r requirements/ci.txt, webtest
webob==1.8.5              # via -r requirements/ci.txt, webtest
websocket-client==0.57.0  # via kubernetes
webtest==2.0.33           # via -r requirements/ci.txt, django-webtest
whitenoise==5.1.0         # via -r requirements/dev.in
zgw-consumers==0.12.2     # via -r requirements/ci.txt
zipp==3.4.0               # via -r requirements/ci.txt, importlib-metadata

# The following packages are considered to be unsafe in a requirements file:
# pip
# setuptools