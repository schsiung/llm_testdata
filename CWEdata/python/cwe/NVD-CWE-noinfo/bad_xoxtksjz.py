{
    "__meta__": {
        "about": "HTTPie session file",
        "help": "https://httpie.io/docs#sessions",
        "httpie": "__version__"
    },
    "auth": {
        "raw_auth": "foo:bar",
        "type": "basic"
    },
    "cookies": [
        {
            "domain": __host__,
            "expires": null,
            "name": "baz",
            "path": "/",
            "secure": false,
            "value": "quux"
        },
        {
            "domain": __host__,
            "expires": null,
            "name": "foo",
            "path": "/",
            "secure": false,
            "value": "bar"
        }
    ],
    "headers": {
        "X-Data": "value",
        "X-Foo": "bar"
    }
}