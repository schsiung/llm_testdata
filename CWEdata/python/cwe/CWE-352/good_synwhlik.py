Flask==1.1.1
Jinja2==2.10.3
itsdangerous==1.1.0
click==6.7
MarkupSafe==1.1.1
pyOpenSSL==19.0.0
httplib2==0.14.0
wtforms==2.2.1
Flask-RESTful==0.3.7
Flask-Login==0.4.1
Flask-Migrate==2.5.2
flask-talisman==0.7.0
Flask-WTF==0.14.3
passlib==1.7.1
aniso8601==8.0.0
blinker==1.4
psycopg2==2.8.3
python-dateutil==2.8.0
pytz>=2019.3
PyYAML==5.1.2
redis==3.5.0
requests==2.21.0
SQLAlchemy==1.3.10
# We can't upgrade SQLAlchemy-Searchable version as newer versions require PostgreSQL > 9.6, but we target older versions at the moment.
SQLAlchemy-Searchable==0.10.6
# We need to pin the version of pyparsing, as newer versions break SQLAlchemy-Searchable-10.0.6 (newer versions no longer depend on it)
pyparsing==2.3.0
SQLAlchemy-Utils==0.34.2
sqlparse==0.3.0
statsd==3.3.0
greenlet==0.4.16
gunicorn==20.0.4
rq==1.5.0
rq-scheduler==0.9.1
jsonschema==3.1.1
RestrictedPython==5.0
pysaml2==6.1.0
pycrypto==2.6.1
funcy==1.13
sentry-sdk>=0.14.3,<0.15.0
semver==2.8.1
xlsxwriter==1.2.2
pystache==0.5.4
parsedatetime==2.4
PyJWT==1.7.1
cryptography==2.8
simplejson==3.16.0
ua-parser==0.8.0
user-agents==2.0
maxminddb-geolite2==2018.703
pypd==1.1.0
disposable-email-domains>=0.0.52
gevent==1.4.0
sshtunnel==0.1.5
supervisor==4.1.0
supervisor_checks==0.8.1
werkzeug==0.16.1
# Install the dependencies of the bin/bundle-extensions script here.
# It has its own requirements file to simplify the frontend client build process
-r requirements_bundles.txt
# Uncomment the requirement for ldap3 if using ldap.
# It is not included by default because of the GPL license conflict.
# ldap3==2.2.4
Authlib==0.15.5
Authlib==0.15.5