---
apiVersion: v1
kind: ConfigMap
metadata:
  name: contour
  namespace: projectcontour
data:
  contour.yaml: |
    #
    # server:
    #   determine which XDS Server implementation to utilize in Contour.
    #   xds-server-type: contour
    #
    # Specify the Gateway API configuration.
    # gateway:
    #   controllerName: projectcontour.io/projectcontour/contour
    #   name: contour
    #   namespace: projectcontour
    #
    # should contour expect to be running inside a k8s cluster
    # incluster: true
    #
    # path to kubeconfig (if not running inside a k8s cluster)
    # kubeconfig: /path/to/.kube/config
    #
    # Disable RFC-compliant behavior to strip "Content-Length" header if
    # "Tranfer-Encoding: chunked" is also set.
    # disableAllowChunkedLength: false
    # Disable HTTPProxy permitInsecure field
    disablePermitInsecure: false
    tls:
    # minimum TLS version that Contour will negotiate
    # minimum-protocol-version: "1.2"
    # TLS ciphers to be supported by Envoy TLS listeners when negotiating
    # TLS 1.2.
    # cipher-suites:
    # - '[ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305]'
    # - '[ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305]'
    # - 'ECDHE-ECDSA-AES256-GCM-SHA384'
    # - 'ECDHE-RSA-AES256-GCM-SHA384'
    # Defines the Kubernetes name/namespace matching a secret to use
    # as the fallback certificate when requests which don't match the
    # SNI defined for a vhost.
      fallback-certificate:
    #   name: fallback-secret-name
    #   namespace: projectcontour
      envoy-client-certificate:
    #   name: envoy-client-cert-secret-name
    #   namespace: projectcontour
    # The following config shows the defaults for the leader election.
    # leaderelection:
    #   configmap-name: leader-elect
    #   configmap-namespace: projectcontour
    ####
    # ExternalName Services are disabled by default due to CVE-2021-XXXXX
    # You can re-enable them by setting this setting to `true`.
    # This is not recommended without understanding the security implications.
    # Please see the advisory at https://github.com/projectcontour/contour/security/advisories/GHSA-5ph6-qq5x-7jwc for the details.
    # enableExternalNameService: false
    ## 
    ### Logging options
    # Default setting
    accesslog-format: envoy
    # To enable JSON logging in Envoy
    # accesslog-format: json
    # The default fields that will be logged are specified below.
    # To customise this list, just add or remove entries.
    # The canonical list is available at
    # https://godoc.org/github.com/projectcontour/contour/internal/envoy#JSONFields
    # json-fields:
    #   - "@timestamp"
    #   - "authority"
    #   - "bytes_received"
    #   - "bytes_sent"
    #   - "downstream_local_address"
    #   - "downstream_remote_address"
    #   - "duration"
    #   - "method"
    #   - "path"
    #   - "protocol"
    #   - "request_id"
    #   - "requested_server_name"
    #   - "response_code"
    #   - "response_flags"
    #   - "uber_trace_id"
    #   - "upstream_cluster"
    #   - "upstream_host"
    #   - "upstream_local_address"
    #   - "upstream_service_time"
    #   - "user_agent"
    #   - "x_forwarded_for"
    #
    # default-http-versions:
    # - "HTTP/2"
    # - "HTTP/1.1"
    #
    # The following shows the default proxy timeout settings.
    # timeouts:
    #   request-timeout: infinity
    #   connection-idle-timeout: 60s
    #   stream-idle-timeout: 5m
    #   max-connection-duration: infinity
    #   delayed-close-timeout: 1s
    #   connection-shutdown-grace-period: 5s
    #
    # Envoy cluster settings.
    # cluster:
    #   configure the cluster dns lookup family
    #   valid options are: auto (default), v4, v6
    #   dns-lookup-family: auto
    #
    # Envoy network settings.
    # network:
    #   Configure the number of additional ingress proxy hops from the
    #   right side of the x-forwarded-for HTTP header to trust.
    #   num-trusted-hops: 0
    #
    # Configure an optional global rate limit service.
    # rateLimitService:
    #   Identifies the extension service defining the rate limit service,
    #   formatted as <namespace>/<name>.
    #   extensionService: projectcontour/ratelimit
    #   Defines the rate limit domain to pass to the rate limit service.
    #   Acts as a container for a set of rate limit definitions within
    #   the RLS.
    #   domain: contour
    #   Defines whether to allow requests to proceed when the rate limit
    #   service fails to respond with a valid rate limit decision within
    #   the timeout defined on the extension service.
    #   failOpen: false
    #   Defines whether to include the X-RateLimit headers X-RateLimit-Limit,
    #   X-RateLimit-Remaining, and X-RateLimit-Reset (as defined by the IETF
    #   Internet-Draft linked below), on responses to clients when the Rate
    #   Limit Service is consulted for a request.
    #   ref. https://tools.ietf.org/id/draft-polli-ratelimit-headers-03.html
    #   enableXRateLimitHeaders: false
    #
    # Global Policy settings.
    # policy:
    #   # Default headers to set on all requests (unless set/removed on the HTTPProxy object itself)
    #   request-headers:
    #     set:
    #       # example: the hostname of the Envoy instance that proxied the request
    #       X-Envoy-Hostname: %HOSTNAME%
    #       # example: add a l5d-dst-override header to instruct Linkerd what service the request is destined for
    #       l5d-dst-override: %CONTOUR_SERVICE_NAME%.%CONTOUR_NAMESPACE%.svc.cluster.local:%CONTOUR_SERVICE_PORT%
    #   # default headers to set on all responses (unless set/removed on the HTTPProxy object itself)
    #   response-headers:
    #     set:
    #       # example: Envoy flags that provide additional details about the response or connection
    #       X-Envoy-Response-Flags: %RESPONSE_FLAGS%
    #