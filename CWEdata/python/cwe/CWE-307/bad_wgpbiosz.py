#
# Common requirements for wger
#

# Application
bleach[css]~=5.0
django-bootstrap-breadcrumbs~=0.9
django-formtools~=2.4
django-recaptcha~=3.0.0
Django~=3.2
django-activity-stream~=1.4
django-axes==5.39.0
django-crispy-forms~=1.14
django-simple-history~=3.1
django-email-verification~=0.3.1
django_compressor~=4.1
django_extensions~=3.2
django-storages~=1.13
django-environ==0.9.0
easy-thumbnails==2.8.3
fontawesomefree~=6.2.0
icalendar==4.1.0
invoke==1.7.3
pillow==9.2.0
reportlab==3.6.11
requests==2.28.1


# AWS
#boto3

# REST API
django-cors-headers==3.13.0
django-filter==22.1
djangorestframework~=3.14
djangorestframework-simplejwt[crypto]==5.2.1

# Not used anymore, but needed because some modules are imported in DB migration
# files
django-sortedm2m~=3.1