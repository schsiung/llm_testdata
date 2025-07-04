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
        "name": "backend-cluster-examples-path-matcher.endpoints.cloudesf-testing.cloud.goog_local",
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
      },
      {
        "connectTimeout": "20s",
        "dnsLookupFamily": "V4_PREFERRED",
        "loadAssignment": {
          "clusterName": "http-bookstore-abc9876-uc.a.run.app",
          "endpoints": [
            {
              "lbEndpoints": [
                {
                  "endpoint": {
                    "address": {
                      "socketAddress": {
                        "address": "http-bookstore-abc9876-uc.a.run.app",
                        "portValue": 443
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        "name": "backend-cluster-http-bookstore-abc9876-uc.a.run.app:443",
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
            "sni": "http-bookstore-abc9876-uc.a.run.app"
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
                          "https://http-bookstore-abc9876-uc.a.run.app",
                          "https://http-bookstore-edf123456-uc.a.run.app/shelves"
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
                              "operation": "ingress GetShelf"
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
                              "safeRegex": {
                                "regex": "^/libraries/[^\\/]+/shelves/[^\\/]+\\/?$"
                              }
                            },
                            "name": "1.examples_path_matcher_endpoints_cloudesf_testing_cloud_goog.GetShelf",
                            "route": {
                              "cluster": "backend-cluster-http-bookstore-edf123456-uc.a.run.app:443",
                              "hostRewriteLiteral": "http-bookstore-edf123456-uc.a.run.app",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "15s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.backend_auth": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.backend_auth.PerRouteFilterConfig",
                                "jwtAudience": "https://http-bookstore-edf123456-uc.a.run.app/shelves"
                              },
                              "com.google.espv2.filters.http.path_rewrite": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.path_rewrite.PerRouteFilterConfig",
                                "constantPath": {
                                  "path": "/shelves",
                                  "urlTemplate": "/libraries/{library_id=*}/shelves/{shelfId=*}"
                                }
                              }
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress ESPv2_Autogenerated_CORS_GetShelf"
                            },
                            "match": {
                              "headers": [
                                {
                                  "name": ":method",
                                  "stringMatch": {
                                    "exact": "OPTIONS"
                                  }
                                }
                              ],
                              "safeRegex": {
                                "regex": "^/libraries/[^\\/]+/shelves/[^\\/]+\\/?$"
                              }
                            },
                            "name": "1.examples_path_matcher_endpoints_cloudesf_testing_cloud_goog.ESPv2_Autogenerated_CORS_GetShelf",
                            "route": {
                              "cluster": "backend-cluster-http-bookstore-edf123456-uc.a.run.app:443",
                              "hostRewriteLiteral": "http-bookstore-edf123456-uc.a.run.app",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "15s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.backend_auth": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.backend_auth.PerRouteFilterConfig",
                                "jwtAudience": "https://http-bookstore-edf123456-uc.a.run.app/shelves"
                              },
                              "com.google.espv2.filters.http.path_rewrite": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.path_rewrite.PerRouteFilterConfig",
                                "constantPath": {
                                  "path": "/shelves",
                                  "urlTemplate": "/libraries/{library_id=*}/shelves/{shelfId=*}"
                                }
                              }
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress Google_Autogenerated_Unrecognized_Delete_Method_Call"
                            },
                            "match": {
                              "headers": [
                                {
                                  "name": ":method",
                                  "stringMatch": {
                                    "exact": "DELETE"
                                  }
                                }
                              ],
                              "safeRegex": {
                                "regex": "^/.*\\/?$"
                              }
                            },
                            "name": "1.examples_path_matcher_endpoints_cloudesf_testing_cloud_goog.Google_Autogenerated_Unrecognized_Delete_Method_Call",
                            "route": {
                              "cluster": "backend-cluster-http-bookstore-abc9876-uc.a.run.app:443",
                              "hostRewriteLiteral": "http-bookstore-abc9876-uc.a.run.app",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "15s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.backend_auth": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.backend_auth.PerRouteFilterConfig",
                                "jwtAudience": "https://http-bookstore-abc9876-uc.a.run.app"
                              }
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress Google_Autogenerated_Unrecognized_Get_Method_Call"
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
                              "safeRegex": {
                                "regex": "^/.*\\/?$"
                              }
                            },
                            "name": "1.examples_path_matcher_endpoints_cloudesf_testing_cloud_goog.Google_Autogenerated_Unrecognized_Get_Method_Call",
                            "route": {
                              "cluster": "backend-cluster-http-bookstore-abc9876-uc.a.run.app:443",
                              "hostRewriteLiteral": "http-bookstore-abc9876-uc.a.run.app",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "15s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.backend_auth": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.backend_auth.PerRouteFilterConfig",
                                "jwtAudience": "https://http-bookstore-abc9876-uc.a.run.app"
                              }
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress ESPv2_Autogenerated_CORS_Google_Autogenerated_Unrecognized_Get_Method_Call"
                            },
                            "match": {
                              "headers": [
                                {
                                  "name": ":method",
                                  "stringMatch": {
                                    "exact": "OPTIONS"
                                  }
                                }
                              ],
                              "safeRegex": {
                                "regex": "^/.*\\/?$"
                              }
                            },
                            "name": "1.examples_path_matcher_endpoints_cloudesf_testing_cloud_goog.ESPv2_Autogenerated_CORS_Google_Autogenerated_Unrecognized_Get_Method_Call",
                            "route": {
                              "cluster": "backend-cluster-http-bookstore-abc9876-uc.a.run.app:443",
                              "hostRewriteLiteral": "http-bookstore-abc9876-uc.a.run.app",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "15s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.backend_auth": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.backend_auth.PerRouteFilterConfig",
                                "jwtAudience": "https://http-bookstore-abc9876-uc.a.run.app"
                              }
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress Google_Autogenerated_Unrecognized_Patch_Method_Call"
                            },
                            "match": {
                              "headers": [
                                {
                                  "name": ":method",
                                  "stringMatch": {
                                    "exact": "PATCH"
                                  }
                                }
                              ],
                              "safeRegex": {
                                "regex": "^/.*\\/?$"
                              }
                            },
                            "name": "1.examples_path_matcher_endpoints_cloudesf_testing_cloud_goog.Google_Autogenerated_Unrecognized_Patch_Method_Call",
                            "route": {
                              "cluster": "backend-cluster-http-bookstore-abc9876-uc.a.run.app:443",
                              "hostRewriteLiteral": "http-bookstore-abc9876-uc.a.run.app",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "15s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.backend_auth": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.backend_auth.PerRouteFilterConfig",
                                "jwtAudience": "https://http-bookstore-abc9876-uc.a.run.app"
                              }
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress Google_Autogenerated_Unrecognized_Post_Method_Call"
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
                              "safeRegex": {
                                "regex": "^/.*\\/?$"
                              }
                            },
                            "name": "1.examples_path_matcher_endpoints_cloudesf_testing_cloud_goog.Google_Autogenerated_Unrecognized_Post_Method_Call",
                            "route": {
                              "cluster": "backend-cluster-http-bookstore-abc9876-uc.a.run.app:443",
                              "hostRewriteLiteral": "http-bookstore-abc9876-uc.a.run.app",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "15s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.backend_auth": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.backend_auth.PerRouteFilterConfig",
                                "jwtAudience": "https://http-bookstore-abc9876-uc.a.run.app"
                              }
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress Google_Autogenerated_Unrecognized_Put_Method_Call"
                            },
                            "match": {
                              "headers": [
                                {
                                  "name": ":method",
                                  "stringMatch": {
                                    "exact": "PUT"
                                  }
                                }
                              ],
                              "safeRegex": {
                                "regex": "^/.*\\/?$"
                              }
                            },
                            "name": "1.examples_path_matcher_endpoints_cloudesf_testing_cloud_goog.Google_Autogenerated_Unrecognized_Put_Method_Call",
                            "route": {
                              "cluster": "backend-cluster-http-bookstore-abc9876-uc.a.run.app:443",
                              "hostRewriteLiteral": "http-bookstore-abc9876-uc.a.run.app",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "15s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.backend_auth": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.backend_auth.PerRouteFilterConfig",
                                "jwtAudience": "https://http-bookstore-abc9876-uc.a.run.app"
                              }
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress UnknownHttpMethodForPath_/libraries/{library_id}/shelves/{shelf_id}"
                            },
                            "directResponse": {
                              "body": {
                                "inlineString": "The current request is matched to the defined url template \"/libraries/{library_id}/shelves/{shelf_id}\" but its http method is not allowed"
                              },
                              "status": 405
                            },
                            "match": {
                              "safeRegex": {
                                "regex": "^/libraries/[^\\/]+/shelves/[^\\/]+\\/?$"
                              }
                            }
                          },
                          {
                            "decorator": {
                              "operation": "ingress UnknownHttpMethodForPath_/**"
                            },
                            "directResponse": {
                              "body": {
                                "inlineString": "The current request is matched to the defined url template \"/**\" but its http method is not allowed"
                              },
                              "status": 405
                            },
                            "match": {
                              "safeRegex": {
                                "regex": "^/.*\\/?$"
                              }
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