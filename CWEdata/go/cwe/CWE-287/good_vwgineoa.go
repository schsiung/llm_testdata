{
  "admin": {},
  "layeredRuntime": {
    "layers": [
      {
        "name": "static-runtime",
        "staticLayer": {
          "re2.max_program_size.error_level": 1000
        }
      }
    ]
  },
  "node": {
    "cluster": "ESPv2_cluster",
    "id": "ESPv2"
  },
  "staticResources": {
    "clusters": [
      {
        "connectTimeout": "20s",
        "dnsLookupFamily": "V4_PREFERRED",
        "loadAssignment": {
          "clusterName": "127.0.0.1",
          "endpoints": [
            {
              "lbEndpoints": [
                {
                  "endpoint": {
                    "address": {
                      "socketAddress": {
                        "address": "127.0.0.1",
                        "portValue": 8082
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        "name": "backend-cluster-examples-dynamic-routing-wd6ufmzfya-uc.a.run.app_local",
        "type": "LOGICAL_DNS"
      },
      {
        "connectTimeout": "20s",
        "loadAssignment": {
          "clusterName": "169.254.169.254",
          "endpoints": [
            {
              "lbEndpoints": [
                {
                  "endpoint": {
                    "address": {
                      "socketAddress": {
                        "address": "169.254.169.254",
                        "portValue": 80
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        "name": "metadata-cluster",
        "type": "STRICT_DNS"
      },
      {
        "connectTimeout": "5s",
        "dnsLookupFamily": "V4_ONLY",
        "loadAssignment": {
          "clusterName": "servicecontrol.googleapis.com",
          "endpoints": [
            {
              "lbEndpoints": [
                {
                  "endpoint": {
                    "address": {
                      "socketAddress": {
                        "address": "servicecontrol.googleapis.com",
                        "portValue": 443
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        "name": "service-control-cluster",
        "transportSocket": {
          "name": "envoy.transport_sockets.tls",
          "typedConfig": {
            "@type": "type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext",
            "commonTlsContext": {
              "validationContext": {
                "trustedCa": {
                  "filename": "/etc/ssl/certs/ca-certificates.crt"
                }
              }
            },
            "sni": "servicecontrol.googleapis.com"
          }
        },
        "type": "LOGICAL_DNS"
      },
      {
        "connectTimeout": "20s",
        "dnsLookupFamily": "V4_PREFERRED",
        "loadAssignment": {
          "clusterName": "http-bookstore-abc123456-uc.a.run.app",
          "endpoints": [
            {
              "lbEndpoints": [
                {
                  "endpoint": {
                    "address": {
                      "socketAddress": {
                        "address": "http-bookstore-abc123456-uc.a.run.app",
                        "portValue": 443
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        "name": "backend-cluster-http-bookstore-abc123456-uc.a.run.app:443",
        "transportSocket": {
          "name": "envoy.transport_sockets.tls",
          "typedConfig": {
            "@type": "type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext",
            "commonTlsContext": {
              "alpnProtocols": [
                "h2"
              ],
              "validationContext": {
                "trustedCa": {
                  "filename": "/etc/ssl/certs/ca-certificates.crt"
                }
              }
            },
            "sni": "http-bookstore-abc123456-uc.a.run.app"
          }
        },
        "type": "LOGICAL_DNS",
        "typedExtensionProtocolOptions": {
          "envoy.extensions.upstreams.http.v3.HttpProtocolOptions": {
            "@type": "type.googleapis.com/envoy.extensions.upstreams.http.v3.HttpProtocolOptions",
            "explicitHttpConfig": {
              "http2ProtocolOptions": {
                "connectionKeepalive": {
                  "interval": "30s",
                  "timeout": "10s"
                }
              }
            }
          }
        }
      },
      {
        "connectTimeout": "20s",
        "dnsLookupFamily": "V4_PREFERRED",
        "loadAssignment": {
          "clusterName": "http-bookstore-edf123456-uc.a.run.app",
          "endpoints": [
            {
              "lbEndpoints": [
                {
                  "endpoint": {
                    "address": {
                      "socketAddress": {
                        "address": "http-bookstore-edf123456-uc.a.run.app",
                        "portValue": 443
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        "name": "backend-cluster-http-bookstore-edf123456-uc.a.run.app:443",
        "transportSocket": {
          "name": "envoy.transport_sockets.tls",
          "typedConfig": {
            "@type": "type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext",
            "commonTlsContext": {
              "validationContext": {
                "trustedCa": {
                  "filename": "/etc/ssl/certs/ca-certificates.crt"
                }
              }
            },
            "sni": "http-bookstore-edf123456-uc.a.run.app"
          }
        },
        "type": "LOGICAL_DNS"
      }
    ],
    "listeners": [
      {
        "address": {
          "socketAddress": {
            "address": "0.0.0.0",
            "portValue": 8080
          }
        },
        "filterChains": [
          {
            "filters": [
              {
                "name": "envoy.filters.network.http_connection_manager",
                "typedConfig": {
                  "@type": "type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager",
                  "commonHttpProtocolOptions": {
                    "headersWithUnderscoresAction": "REJECT_REQUEST"
                  },
                  "httpFilters": [
                    {
                      "name": "com.google.espv2.filters.http.header_sanitizer",
                      "typedConfig": {
                        "@type": "type.googleapis.com/espv2.api.envoy.v11.http.header_sanitizer.FilterConfig"
                      }
                    },
                    {
                      "name": "com.google.espv2.filters.http.header_sanitizer",
                      "typedConfig": {
                        "@type": "type.googleapis.com/espv2.api.envoy.v11.http.header_sanitizer.FilterConfig"
                      }
                    },
                    {
                      "name": "com.google.espv2.filters.http.backend_auth",
                      "typedConfig": {
                        "@type": "type.googleapis.com/espv2.api.envoy.v11.http.backend_auth.FilterConfig",
                        "depErrorBehavior": "BLOCK_INIT_ON_ANY_ERROR",
                        "imdsToken": {
                          "cluster": "metadata-cluster",
                          "timeout": "30s",
                          "uri": "http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/identity"
                        },
                        "jwtAudienceList": [
                          "ESPv2"
                        ]
                      }
                    },
                    {
                      "name": "com.google.espv2.filters.http.path_rewrite",
                      "typedConfig": {
                        "@type": "type.googleapis.com/espv2.api.envoy.v11.http.path_rewrite.FilterConfig"
                      }
                    },
                    {
                      "name": "com.google.espv2.filters.http.grpc_metadata_scrubber",
                      "typedConfig": {
                        "@type": "type.googleapis.com/espv2.api.envoy.v11.http.grpc_metadata_scrubber.FilterConfig"
                      }
                    },
                    {
                      "name": "envoy.filters.http.router",
                      "typedConfig": {
                        "@type": "type.googleapis.com/envoy.extensions.filters.http.router.v3.Router",
                        "suppressEnvoyHeaders": true
                      }
                    }
                  ],
                  "httpProtocolOptions": {
                    "enableTrailers": true
                  },
                  "localReplyConfig": {
                    "bodyFormat": {
                      "jsonFormat": {
                        "code": "%RESPONSE_CODE%",
                        "message": "%LOCAL_REPLY_BODY%"
                      }
                    }
                  },
                  "mergeSlashes": true,
                  "normalizePath": true,
                  "pathWithEscapedSlashesAction": "KEEP_UNCHANGED",
                  "routeConfig": {
                    "name": "local_route",
                    "virtualHosts": [
                      {
                        "domains": [
                          "*"
                        ],
                        "name": "backend",
                        "routes": [
                          {
                            "decorator": {
                              "operation": "ingress ListShelves"
                            },
                            "match": {
                              "headers": [
                                {
                                  "name": ":method",
                                  "stringMatch": {
                                    "exact": "GET"
                                  }
                                }
                              ],
                              "path": "/shelves"
                            },
                            "name": "1.examples_dynamic_routing_wd6ufmzfya_uc_a_run_app.ListShelves",
                            "route": {
                              "cluster": "backend-cluster-http-bookstore-abc123456-uc.a.run.app:443",
                              "hostRewriteLiteral": "http-bookstore-abc123456-uc.a.run.app",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "7s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.backend_auth": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.backend_auth.PerRouteFilterConfig",
                                "jwtAudience": "ESPv2"
                              },
                              "com.google.espv2.filters.http.path_rewrite": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.path_rewrite.PerRouteFilterConfig",
                                "pathPrefix": "/shelves"
                              }
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress ListShelves"
                            },
                            "match": {
                              "headers": [
                                {
                                  "name": ":method",
                                  "stringMatch": {
                                    "exact": "GET"
                                  }
                                }
                              ],
                              "path": "/shelves/"
                            },
                            "name": "1.examples_dynamic_routing_wd6ufmzfya_uc_a_run_app.ListShelves",
                            "route": {
                              "cluster": "backend-cluster-http-bookstore-abc123456-uc.a.run.app:443",
                              "hostRewriteLiteral": "http-bookstore-abc123456-uc.a.run.app",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "7s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.backend_auth": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.backend_auth.PerRouteFilterConfig",
                                "jwtAudience": "ESPv2"
                              },
                              "com.google.espv2.filters.http.path_rewrite": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.path_rewrite.PerRouteFilterConfig",
                                "pathPrefix": "/shelves"
                              }
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress CreateShelf"
                            },
                            "match": {
                              "headers": [
                                {
                                  "name": ":method",
                                  "stringMatch": {
                                    "exact": "POST"
                                  }
                                }
                              ],
                              "path": "/shelves"
                            },
                            "name": "1.examples_dynamic_routing_wd6ufmzfya_uc_a_run_app.CreateShelf",
                            "route": {
                              "cluster": "backend-cluster-http-bookstore-edf123456-uc.a.run.app:443",
                              "hostRewriteLiteral": "http-bookstore-edf123456-uc.a.run.app",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "23s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.path_rewrite": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.path_rewrite.PerRouteFilterConfig",
                                "constantPath": {
                                  "path": "/shelves"
                                }
                              }
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress CreateShelf"
                            },
                            "match": {
                              "headers": [
                                {
                                  "name": ":method",
                                  "stringMatch": {
                                    "exact": "POST"
                                  }
                                }
                              ],
                              "path": "/shelves/"
                            },
                            "name": "1.examples_dynamic_routing_wd6ufmzfya_uc_a_run_app.CreateShelf",
                            "route": {
                              "cluster": "backend-cluster-http-bookstore-edf123456-uc.a.run.app:443",
                              "hostRewriteLiteral": "http-bookstore-edf123456-uc.a.run.app",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "23s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.path_rewrite": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.path_rewrite.PerRouteFilterConfig",
                                "constantPath": {
                                  "path": "/shelves"
                                }
                              }
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress UnknownHttpMethodForPath_/shelves"
                            },
                            "directResponse": {
                              "body": {
                                "inlineString": "The current request is matched to the defined url template \"/shelves\" but its http method is not allowed"
                              },
                              "status": 405
                            },
                            "match": {
                              "path": "/shelves"
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress UnknownHttpMethodForPath_/shelves"
                            },
                            "directResponse": {
                              "body": {
                                "inlineString": "The current request is matched to the defined url template \"/shelves\" but its http method is not allowed"
                              },
                              "status": 405
                            },
                            "match": {
                              "path": "/shelves/"
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress UnknownOperationName"
                            },
                            "directResponse": {
                              "body": {
                                "inlineString": "The current request is not defined by this API."
                              },
                              "status": 404
                            },
                            "match": {
                              "prefix": "/"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "statPrefix": "ingress_http",
                  "upgradeConfigs": [
                    {
                      "upgradeType": "websocket"
                    }
                  ],
                  "useRemoteAddress": false,
                  "xffNumTrustedHops": 2
                }
              }
            ]
          }
        ],
        "name": "ingress_listener"
      }
    ]
  }
}