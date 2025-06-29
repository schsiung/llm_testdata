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
        "name": "backend-cluster-examples-service-control.endpoints.cloudesf-testing.cloud.goog_local",
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
                      "name": "com.google.espv2.filters.http.service_control",
                      "typedConfig": {
                        "@type": "type.googleapis.com/espv2.api.envoy.v11.http.service_control.FilterConfig",
                        "depErrorBehavior": "BLOCK_INIT_ON_ANY_ERROR",
                        "generatedHeaderPrefix": "X-Endpoint-",
                        "imdsToken": {
                          "cluster": "metadata-cluster",
                          "timeout": "30s",
                          "uri": "http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token"
                        },
                        "requirements": [
                          {
                            "apiKey": {
                              "allowWithoutApiKey": true
                            },
                            "apiName": "1.examples_service_control_endpoints_cloudesf_testing_cloud_goog",
                            "apiVersion": "1.0.0",
                            "metricCosts": [
                              {
                                "cost": "1",
                                "name": "read-requests"
                              }
                            ],
                            "operationName": "1.examples_service_control_endpoints_cloudesf_testing_cloud_goog.ListShelves",
                            "serviceName": "examples-service-control.endpoints.cloudesf-testing.cloud.goog"
                          },
                          {
                            "apiName": "1.examples_service_control_endpoints_cloudesf_testing_cloud_goog",
                            "apiVersion": "1.0.0",
                            "operationName": "1.examples_service_control_endpoints_cloudesf_testing_cloud_goog.CreateShelf",
                            "serviceName": "examples-service-control.endpoints.cloudesf-testing.cloud.goog"
                          }
                        ],
                        "scCallingConfig": {
                          "networkFailOpen": true
                        },
                        "serviceControlUri": {
                          "cluster": "service-control-cluster",
                          "timeout": "30s",
                          "uri": "https://servicecontrol.googleapis.com:443/v1/services"
                        },
                        "services": [
                          {
                            "backendProtocol": "http1",
                            "clientIpFromForwardedHeader": true,
                            "jwtPayloadMetadataName": "jwt_payloads",
                            "producerProjectId": "cloudesf-testing",
                            "serviceConfig": {
                              "logging": {
                                "producerDestinations": [
                                  {
                                    "logs": [
                                      "endpoints_log"
                                    ],
                                    "monitoredResource": "api"
                                  }
                                ]
                              },
                              "logs": [
                                {
                                  "name": "endpoints_log"
                                }
                              ],
                              "metrics": [
                                {
                                  "displayName": "Read requests",
                                  "metricKind": "DELTA",
                                  "name": "read-requests",
                                  "type": "read-requests",
                                  "valueType": "INT64"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    },
                                    {
                                      "key": "/protocol"
                                    },
                                    {
                                      "key": "/response_code"
                                    },
                                    {
                                      "key": "/response_code_class"
                                    },
                                    {
                                      "key": "/status_code"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/request_count",
                                  "type": "serviceruntime.googleapis.com/api/consumer/request_count",
                                  "valueType": "INT64"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    },
                                    {
                                      "key": "/error_type"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/error_count",
                                  "type": "serviceruntime.googleapis.com/api/consumer/error_count",
                                  "valueType": "INT64"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/total_latencies",
                                  "type": "serviceruntime.googleapis.com/api/consumer/total_latencies",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/protocol"
                                    },
                                    {
                                      "key": "/response_code"
                                    },
                                    {
                                      "key": "/response_code_class"
                                    },
                                    {
                                      "key": "/status_code"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/request_count",
                                  "type": "serviceruntime.googleapis.com/api/producer/request_count",
                                  "valueType": "INT64"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/error_type"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/error_count",
                                  "type": "serviceruntime.googleapis.com/api/producer/error_count",
                                  "valueType": "INT64"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/total_latencies",
                                  "type": "serviceruntime.googleapis.com/api/producer/total_latencies",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    },
                                    {
                                      "key": "/end_user"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/top_request_count_by_end_user",
                                  "type": "serviceruntime.googleapis.com/api/consumer/top_request_count_by_end_user",
                                  "valueType": "INT64"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    },
                                    {
                                      "key": "/end_user_country"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/top_request_count_by_end_user_country",
                                  "type": "serviceruntime.googleapis.com/api/consumer/top_request_count_by_end_user_country",
                                  "valueType": "INT64"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    },
                                    {
                                      "key": "/referer"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/top_request_count_by_referer",
                                  "type": "serviceruntime.googleapis.com/api/consumer/top_request_count_by_referer",
                                  "valueType": "INT64"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/protocol"
                                    },
                                    {
                                      "key": "/response_code"
                                    },
                                    {
                                      "key": "/consumer_id"
                                    },
                                    {
                                      "key": "/status_code"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/top_request_count_by_consumer",
                                  "type": "serviceruntime.googleapis.com/api/producer/top_request_count_by_consumer",
                                  "valueType": "INT64"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    },
                                    {
                                      "key": "/quota_group_name"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/quota_used_count",
                                  "type": "serviceruntime.googleapis.com/api/consumer/quota_used_count",
                                  "valueType": "INT64"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/request_overhead_latencies",
                                  "type": "serviceruntime.googleapis.com/api/consumer/request_overhead_latencies",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/backend_latencies",
                                  "type": "serviceruntime.googleapis.com/api/consumer/backend_latencies",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/request_sizes",
                                  "type": "serviceruntime.googleapis.com/api/consumer/request_sizes",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/response_sizes",
                                  "type": "serviceruntime.googleapis.com/api/consumer/response_sizes",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/request_overhead_latencies",
                                  "type": "serviceruntime.googleapis.com/api/producer/request_overhead_latencies",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/backend_latencies",
                                  "type": "serviceruntime.googleapis.com/api/producer/backend_latencies",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/request_sizes",
                                  "type": "serviceruntime.googleapis.com/api/producer/request_sizes",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/response_sizes",
                                  "type": "serviceruntime.googleapis.com/api/producer/response_sizes",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/consumer_id"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/top_request_sizes_by_consumer",
                                  "type": "serviceruntime.googleapis.com/api/producer/top_request_sizes_by_consumer",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/consumer_id"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/top_response_sizes_by_consumer",
                                  "type": "serviceruntime.googleapis.com/api/producer/top_response_sizes_by_consumer",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    },
                                    {
                                      "key": "/protocol"
                                    },
                                    {
                                      "key": "/response_code"
                                    },
                                    {
                                      "key": "/response_code_class"
                                    },
                                    {
                                      "key": "/status_code"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/by_consumer/request_count",
                                  "type": "serviceruntime.googleapis.com/api/producer/by_consumer/request_count",
                                  "valueType": "INT64"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    },
                                    {
                                      "key": "/error_type"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/by_consumer/error_count",
                                  "type": "serviceruntime.googleapis.com/api/producer/by_consumer/error_count",
                                  "valueType": "INT64"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/by_consumer/total_latencies",
                                  "type": "serviceruntime.googleapis.com/api/producer/by_consumer/total_latencies",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    },
                                    {
                                      "key": "/quota_group_name"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/by_consumer/quota_used_count",
                                  "type": "serviceruntime.googleapis.com/api/producer/by_consumer/quota_used_count",
                                  "valueType": "INT64"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/by_consumer/request_overhead_latencies",
                                  "type": "serviceruntime.googleapis.com/api/producer/by_consumer/request_overhead_latencies",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/by_consumer/backend_latencies",
                                  "type": "serviceruntime.googleapis.com/api/producer/by_consumer/backend_latencies",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/by_consumer/request_sizes",
                                  "type": "serviceruntime.googleapis.com/api/producer/by_consumer/request_sizes",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "labels": [
                                    {
                                      "key": "/credential_id"
                                    }
                                  ],
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/by_consumer/response_sizes",
                                  "type": "serviceruntime.googleapis.com/api/producer/by_consumer/response_sizes",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/streaming_request_message_counts",
                                  "type": "serviceruntime.googleapis.com/api/producer/streaming_request_message_counts",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/streaming_response_message_counts",
                                  "type": "serviceruntime.googleapis.com/api/producer/streaming_response_message_counts",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/streaming_request_message_counts",
                                  "type": "serviceruntime.googleapis.com/api/consumer/streaming_request_message_counts",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/streaming_response_message_counts",
                                  "type": "serviceruntime.googleapis.com/api/consumer/streaming_response_message_counts",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/streaming_durations",
                                  "type": "serviceruntime.googleapis.com/api/producer/streaming_durations",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/streaming_durations",
                                  "type": "serviceruntime.googleapis.com/api/consumer/streaming_durations",
                                  "valueType": "DISTRIBUTION"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/request_bytes",
                                  "type": "serviceruntime.googleapis.com/api/producer/request_bytes",
                                  "valueType": "INT64"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/producer/response_bytes",
                                  "type": "serviceruntime.googleapis.com/api/producer/response_bytes",
                                  "valueType": "INT64"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/request_bytes",
                                  "type": "serviceruntime.googleapis.com/api/consumer/request_bytes",
                                  "valueType": "INT64"
                                },
                                {
                                  "metricKind": "DELTA",
                                  "name": "serviceruntime.googleapis.com/api/consumer/response_bytes",
                                  "type": "serviceruntime.googleapis.com/api/consumer/response_bytes",
                                  "valueType": "INT64"
                                }
                              ],
                              "monitoredResources": [
                                {
                                  "labels": [
                                    {
                                      "key": "cloud.googleapis.com/location"
                                    },
                                    {
                                      "key": "cloud.googleapis.com/uid"
                                    },
                                    {
                                      "key": "serviceruntime.googleapis.com/api_version"
                                    },
                                    {
                                      "key": "serviceruntime.googleapis.com/api_method"
                                    },
                                    {
                                      "key": "serviceruntime.googleapis.com/consumer_project"
                                    },
                                    {
                                      "key": "cloud.googleapis.com/project"
                                    },
                                    {
                                      "key": "cloud.googleapis.com/service"
                                    }
                                  ],
                                  "type": "api"
                                }
                              ],
                              "monitoring": {
                                "consumerDestinations": [
                                  {
                                    "metrics": [
                                      "serviceruntime.googleapis.com/api/consumer/request_count",
                                      "serviceruntime.googleapis.com/api/consumer/error_count",
                                      "serviceruntime.googleapis.com/api/consumer/quota_used_count",
                                      "serviceruntime.googleapis.com/api/consumer/total_latencies",
                                      "serviceruntime.googleapis.com/api/consumer/request_overhead_latencies",
                                      "serviceruntime.googleapis.com/api/consumer/backend_latencies",
                                      "serviceruntime.googleapis.com/api/consumer/request_sizes",
                                      "serviceruntime.googleapis.com/api/consumer/response_sizes",
                                      "serviceruntime.googleapis.com/api/consumer/top_request_count_by_end_user",
                                      "serviceruntime.googleapis.com/api/consumer/top_request_count_by_end_user_country",
                                      "serviceruntime.googleapis.com/api/consumer/top_request_count_by_referer",
                                      "serviceruntime.googleapis.com/api/consumer/streaming_request_message_counts",
                                      "serviceruntime.googleapis.com/api/consumer/streaming_response_message_counts",
                                      "serviceruntime.googleapis.com/api/consumer/streaming_durations",
                                      "serviceruntime.googleapis.com/api/consumer/request_bytes",
                                      "serviceruntime.googleapis.com/api/consumer/response_bytes"
                                    ],
                                    "monitoredResource": "api"
                                  }
                                ],
                                "producerDestinations": [
                                  {
                                    "metrics": [
                                      "serviceruntime.googleapis.com/api/producer/request_count",
                                      "serviceruntime.googleapis.com/api/producer/error_count",
                                      "serviceruntime.googleapis.com/api/producer/total_latencies",
                                      "serviceruntime.googleapis.com/api/producer/request_overhead_latencies",
                                      "serviceruntime.googleapis.com/api/producer/backend_latencies",
                                      "serviceruntime.googleapis.com/api/producer/request_sizes",
                                      "serviceruntime.googleapis.com/api/producer/response_sizes",
                                      "serviceruntime.googleapis.com/api/producer/top_request_count_by_consumer",
                                      "serviceruntime.googleapis.com/api/producer/top_request_sizes_by_consumer",
                                      "serviceruntime.googleapis.com/api/producer/top_response_sizes_by_consumer",
                                      "serviceruntime.googleapis.com/api/producer/streaming_request_message_counts",
                                      "serviceruntime.googleapis.com/api/producer/streaming_response_message_counts",
                                      "serviceruntime.googleapis.com/api/producer/streaming_durations",
                                      "serviceruntime.googleapis.com/api/producer/request_bytes",
                                      "serviceruntime.googleapis.com/api/producer/response_bytes",
                                      "serviceruntime.googleapis.com/api/producer/by_consumer/request_count",
                                      "serviceruntime.googleapis.com/api/producer/by_consumer/error_count",
                                      "serviceruntime.googleapis.com/api/producer/by_consumer/total_latencies",
                                      "serviceruntime.googleapis.com/api/producer/by_consumer/quota_used_count",
                                      "serviceruntime.googleapis.com/api/producer/by_consumer/request_overhead_latencies",
                                      "serviceruntime.googleapis.com/api/producer/by_consumer/backend_latencies",
                                      "serviceruntime.googleapis.com/api/producer/by_consumer/request_sizes",
                                      "serviceruntime.googleapis.com/api/producer/by_consumer/response_sizes"
                                    ],
                                    "monitoredResource": "api"
                                  }
                                ]
                              }
                            },
                            "serviceConfigId": "2019-12-16r0",
                            "serviceName": "examples-service-control.endpoints.cloudesf-testing.cloud.goog",
                            "tracingDisabled": true
                          }
                        ]
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
                            "name": "1.examples_service_control_endpoints_cloudesf_testing_cloud_goog.ListShelves",
                            "route": {
                              "cluster": "backend-cluster-examples-service-control.endpoints.cloudesf-testing.cloud.goog_local",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "15s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.service_control": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.service_control.PerRouteFilterConfig",
                                "operationName": "1.examples_service_control_endpoints_cloudesf_testing_cloud_goog.ListShelves"
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
                            "name": "1.examples_service_control_endpoints_cloudesf_testing_cloud_goog.ListShelves",
                            "route": {
                              "cluster": "backend-cluster-examples-service-control.endpoints.cloudesf-testing.cloud.goog_local",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "15s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.service_control": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.service_control.PerRouteFilterConfig",
                                "operationName": "1.examples_service_control_endpoints_cloudesf_testing_cloud_goog.ListShelves"
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
                            "name": "1.examples_service_control_endpoints_cloudesf_testing_cloud_goog.CreateShelf",
                            "route": {
                              "cluster": "backend-cluster-examples-service-control.endpoints.cloudesf-testing.cloud.goog_local",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "15s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.service_control": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.service_control.PerRouteFilterConfig",
                                "operationName": "1.examples_service_control_endpoints_cloudesf_testing_cloud_goog.CreateShelf"
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
                            "name": "1.examples_service_control_endpoints_cloudesf_testing_cloud_goog.CreateShelf",
                            "route": {
                              "cluster": "backend-cluster-examples-service-control.endpoints.cloudesf-testing.cloud.goog_local",
                              "idleTimeout": "300s",
                              "retryPolicy": {
                                "numRetries": 1,
                                "retryOn": "reset,connect-failure,refused-stream"
                              },
                              "timeout": "15s"
                            },
                            "typedPerFilterConfig": {
                              "com.google.espv2.filters.http.service_control": {
                                "@type": "type.googleapis.com/espv2.api.envoy.v11.http.service_control.PerRouteFilterConfig",
                                "operationName": "1.examples_service_control_endpoints_cloudesf_testing_cloud_goog.CreateShelf"
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