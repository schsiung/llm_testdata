# Clone this file to `.env` and edit the clone.

NODE_ENV=development

# Companion
# =======================
COMPANION_DATADIR=./output
COMPANION_DOMAIN=localhost:3020
COMPANION_PROTOCOL=http
COMPANION_PORT=3020
COMPANION_CLIENT_ORIGINS=
COMPANION_SECRET=development

# NOTE: Only enable this in development. Enabling it in production is a security risk
COMPANION_ALLOW_LOCAL_URLS=true

# NOTE: Only enable this in development. Enabling it in production is a security risk
COMPANION_ALLOW_LOCAL_URLS=true

COMPANION_DROPBOX_KEY=***
COMPANION_DROPBOX_SECRET=***

COMPANION_BOX_KEY=***
COMPANION_BOX_SECRET=***

COMPANION_GOOGLE_KEY=***
COMPANION_GOOGLE_SECRET=***

COMPANION_INSTAGRAM_KEY=***
COMPANION_INSTAGRAM_SECRET=***

COMPANION_FACEBOOK_KEY=***
COMPANION_FACEBOOK_SECRET=***

COMPANION_ZOOM_KEY=***
COMPANION_ZOOM_SECRET=***

COMPANION_UNSPLASH_KEY=***
COMPANION_UNSPLASH_SECRET=***

# Development environment
# =======================

VITE_UPLOADER=tus
# VITE_UPLOADER=s3
# VITE_UPLOADER=s3-multipart
# xhr will use protocol 'multipart' in companion, if used with a remote service, e.g. google drive.
# If local upload will use browser XHR
# VITE_UPLOADER=xhr
# VITE_UPLOADER=transloadit
# VITE_UPLOADER=transloadit-s3
# VITE_UPLOADER=transloadit-xhr

VITE_COMPANION_URL=http://localhost:3020
VITE_TUS_ENDPOINT=https://tusd.tusdemo.net/files/
VITE_XHR_ENDPOINT=https://xhr-server.herokuapp.com/upload

VITE_TRANSLOADIT_KEY=***
VITE_TRANSLOADIT_TEMPLATE=***
VITE_TRANSLOADIT_SERVICE_URL=https://api2.transloadit.com