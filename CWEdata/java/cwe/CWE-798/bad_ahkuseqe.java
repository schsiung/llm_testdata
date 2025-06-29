{
    "realm": "demo",
    "enabled": true,
    "accessTokenLifespan": 60,
    "accessCodeLifespan": 60,
    "accessCodeLifespanUserAction": 300,
    "ssoSessionIdleTimeout": 600,
    "ssoSessionMaxLifespan": 36000,
    "sslRequired": "external",
    "registrationAllowed": false,
    "privateKey": "MIICXAIBAAKBgQCrVrCuTtArbgaZzL1hvh0xtL5mc7o0NqPVnYXkLvgcwiC3BjLGw1tGEGoJaXDuSaRllobm53JBhjx33UNv+5z/UMG4kytBWxheNVKnL6GgqlNabMaFfPLPCF8kAgKnsi79NMo+n6KnSY8YeUmec/p2vjO2NjsSAVcWEQMVhJ31LwIDAQABAoGAfmO8gVhyBxdqlxmIuglbz8bcjQbhXJLR2EoS8ngTXmN1bo2L90M0mUKSdc7qF10LgETBzqL8jYlQIbt+e6TH8fcEpKCjUlyq0Mf/vVbfZSNaVycY13nTzo27iPyWQHK5NLuJzn1xvxxrUeXI6A2WFpGEBLbHjwpx5WQG9A+2scECQQDvdn9NE75HPTVPxBqsEd2z10TKkl9CZxu10Qby3iQQmWLEJ9LNmy3acvKrE3gMiYNWb6xHPKiIqOR1as7L24aTAkEAtyvQOlCvr5kAjVqrEKXalj0Tzewjweuxc0pskvArTI2Oo070h65GpoIKLc9jf+UA69cRtquwP93aZKtW06U8dQJAF2Y44ks/mK5+eyDqik3koCI08qaC8HYq2wVl7G2QkJ6sbAaILtcvD92ToOvyGyeE0flvmDZxMYlvaZnaQ0lcSQJBAKZU6umJi3/xeEbkJqMfeLclD27XGEFoPeNrmdx0q10Azp4NfJAY+Z8KRyQCR2BEG+oNitBOZ+YXF9KCpH3cdmECQHEigJhYg+ykOvr1aiZUMFT72HU0jnmQe2FVekuG+LJUt2Tm7GtMjTFoGpf0JwrVuZN39fOYAlo+nTixgeW7X8Y=",
    "publicKey": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrVrCuTtArbgaZzL1hvh0xtL5mc7o0NqPVnYXkLvgcwiC3BjLGw1tGEGoJaXDuSaRllobm53JBhjx33UNv+5z/UMG4kytBWxheNVKnL6GgqlNabMaFfPLPCF8kAgKnsi79NMo+n6KnSY8YeUmec/p2vjO2NjsSAVcWEQMVhJ31LwIDAQAB",
    "requiredCredentials": [ "password" ],
    "users" : [
        {
            "username" : "bburke@redhat.com",
            "enabled": true,
            "email" : "bburke@redhat.com",
            "firstName": "Bill",
            "lastName": "Burke",
            "credentials" : [
                { "type" : "password",
                    "value" : "password" }
            ],
            "realmRoles": [ "user", "offline_access"  ],
            "clientRoles": {
                "account": [ "manage-account" ]
            }
        },
        {
            "username" : "stian",
            "enabled": true,
            "email" : "stian@redhat.com",
            "firstName": "Stian",
            "lastName": "Thorgersen",
            "credentials" : [
                { "type" : "password",
                    "value" : "password" }
            ],
            "realmRoles": [ "user", "offline_access"  ],
            "clientRoles": {
                "account": [ "manage-account" ]
            }
        },
        {
            "username" : "mposolda@redhat.com",
            "enabled": true,
            "email" : "mposolda@redhat.com",
            "firstName": "Marek",
            "lastName": "Posolda",
            "credentials" : [
                { "type" : "password",
                    "value" : "password" }
            ],
            "realmRoles": [ "user", "offline_access" ],
            "clientRoles": {
                "account": [ "manage-account" ]
            }
        },
        {
            "username" : "admin",
            "enabled": true,
            "email" : "admin@admin.com",
            "firstName": "Admin",
            "lastName": "Burke",
            "credentials" : [
                { "type" : "password",
                    "value" : "password" }
            ],
            "realmRoles": [ "user","admin" ],
            "clientRoles": {
                "realm-management": [ "realm-admin" ],
                "account": [ "manage-account" ]
            }
        },
        {
            "username" : "service-account-product-sa-client",
            "enabled": true,
            "serviceAccountClientId": "product-sa-client",
            "realmRoles": [ "user" ]
        }
    ],
    "roles" : {
        "realm" : [
            {
                "name": "user",
                "description": "User privileges"
            },
            {
                "name": "admin",
                "description": "Administrator privileges"
            }
        ]
    },
    "scopeMappings": [
        {
            "client": "third-party",
            "roles": ["user"]
        },
        {
            "client": "offline-access-portal",
            "roles": ["user", "offline_access"]
        }
    ],
    "clients": [
        {
            "clientId": "customer-portal",
            "enabled": true,
            "adminUrl": "/customer-portal",
            "baseUrl": "/customer-portal",
            "redirectUris": [
                "/customer-portal/*"
            ],
            "secret": "password"
        },
        {
            "clientId": "customer-portal-filter",
            "enabled": true,
            "adminUrl": "/customer-portal-filter/keycloak",
            "baseUrl": "/customer-portal-filter",
            "redirectUris": [
                "/customer-portal-filter/*"
            ],
            "secret": "password"
        },
        {
            "clientId": "customer-portal-js",
            "enabled": true,
            "publicClient": true,
            "baseUrl": "/customer-portal-js",
            "redirectUris": [
                "/customer-portal-js/*"
            ]
        },
        {
            "clientId": "angular-product",
            "enabled": true,
            "publicClient": true,
            "baseUrl": "/angular-product/index.html",
            "redirectUris": [
                "/angular-product/*"
            ]
        },
		{
            "clientId": "angular2-product",
            "enabled": true,
            "publicClient": true,
            "baseUrl": "/angular2-product/index.html",
            "redirectUris": [
                "/angular2-product/*"
            ]
        },
        {
            "clientId": "customer-portal-cli",
            "enabled": true,
            "publicClient": true,
            "redirectUris": [
                "urn:ietf:wg:oauth:2.0:oob",
                "http://localhost"
            ]
        },
        {
            "clientId": "product-portal",
            "enabled": true,
            "adminUrl": "/product-portal",
            "baseUrl": "/product-portal",
            "redirectUris": [
                "/product-portal/*"
            ],
            "clientAuthenticatorType": "client-jwt",
            "attributes": {
                "use.jwks.url": "true",
                "jwks.url": "/product-portal/k_jwks"
            }
        },
        {
            "clientId": "database-service",
            "enabled": true,
            "adminUrl": "/database",
            "baseUrl": "/database",
            "bearerOnly": true
        },
        {
            "clientId": "third-party",
            "enabled": true,
            "consentRequired": true,
            "redirectUris": [
                "/oauth-client/*",
                "/oauth-client-cdi/*"
            ],
            "secret": "password"
        },
        {
            "clientId": "admin-client",
            "enabled": true,
            "publicClient": true,
            "standardFlowEnabled": false,
            "directAccessGrantsEnabled": true
        },
        {
            "clientId": "product-sa-client",
            "enabled": true,
            "secret": "password",
            "serviceAccountsEnabled": true
        },
        {
            "clientId": "offline-access-portal",
            "enabled": true,
            "consentRequired": true,
            "adminUrl": "/offline-access-portal",
            "baseUrl": "/offline-access-portal",
            "redirectUris": [
                "/offline-access-portal/*"
            ],
            "secret": "password"
        }
    ],
    "clientScopeMappings": {
        "realm-management": [
            {
                "client": "admin-client",
                "roles": ["realm-admin"]
            },
            {
                "client": "customer-portal",
                "roles": ["realm-admin"]
            },
            {
                "client": "customer-portal-filter",
                "roles": ["realm-admin"]
            }
        ]
    }


}