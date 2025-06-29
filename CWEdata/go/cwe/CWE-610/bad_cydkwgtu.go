# This file is generated from the individual YAML files by generate-deployment.sh. Do not
# edit this file directly but instead edit the source files and re-render.
#
# Generated from:
#       examples/contour/00-common.yaml
#       examples/contour/01-contour-config.yaml
#       examples/contour/01-crds.yaml
#       examples/contour/02-job-certgen.yaml
#       examples/contour/02-rbac.yaml
#       examples/contour/02-role-contour.yaml
#       examples/contour/02-service-contour.yaml
#       examples/contour/02-service-envoy.yaml
#       examples/contour/03-contour.yaml
#       examples/contour/03-envoy.yaml
#

---
apiVersion: v1
kind: Namespace
metadata:
  name: projectcontour
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: contour
  namespace: projectcontour
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: envoy
  namespace: projectcontour

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

---
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  annotations:
    controller-gen.kubebuilder.io/version: v0.5.0
  creationTimestamp: null
  name: extensionservices.projectcontour.io
spec:
  preserveUnknownFields: false
  group: projectcontour.io
  names:
    kind: ExtensionService
    listKind: ExtensionServiceList
    plural: extensionservices
    shortNames:
    - extensionservice
    - extensionservices
    singular: extensionservice
  scope: Namespaced
  versions:
  - name: v1alpha1
    schema:
      openAPIV3Schema:
        description: ExtensionService is the schema for the Contour extension services
          API. An ExtensionService resource binds a network service to the Contour
          API so that Contour API features can be implemented by collaborating components.
        properties:
          apiVersion:
            description: 'APIVersion defines the versioned schema of this representation
              of an object. Servers should convert recognized schemas to the latest
              internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources'
            type: string
          kind:
            description: 'Kind is a string value representing the REST resource this
              object represents. Servers may infer this from the endpoint the client
              submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds'
            type: string
          metadata:
            type: object
          spec:
            description: ExtensionServiceSpec defines the desired state of an ExtensionService
              resource.
            properties:
              loadBalancerPolicy:
                description: The policy for load balancing GRPC service requests.
                  Note that the `Cookie` and `RequestHash` load balancing strategies
                  cannot be used here.
                properties:
                  requestHashPolicies:
                    description: RequestHashPolicies contains a list of hash policies
                      to apply when the `RequestHash` load balancing strategy is chosen.
                      If an element of the supplied list of hash policies is invalid,
                      it will be ignored. If the list of hash policies is empty after
                      validation, the load balancing strategy will fall back the the
                      default `RoundRobin`.
                    items:
                      description: RequestHashPolicy contains configuration for an
                        individual hash policy on a request attribute.
                      properties:
                        headerHashOptions:
                          description: HeaderHashOptions should be set when request
                            header hash based load balancing is desired. It must be
                            the only hash option field set, otherwise this request
                            hash policy object will be ignored.
                          properties:
                            headerName:
                              description: HeaderName is the name of the HTTP request
                                header that will be used to calculate the hash key.
                                If the header specified is not present on a request,
                                no hash will be produced.
                              minLength: 1
                              type: string
                          type: object
                        terminal:
                          description: Terminal is a flag that allows for short-circuiting
                            computing of a hash for a given request. If set to true,
                            and the request attribute specified in the attribute hash
                            options is present, no further hash policies will be used
                            to calculate a hash for the request.
                          type: boolean
                      type: object
                    type: array
                  strategy:
                    description: Strategy specifies the policy used to balance requests
                      across the pool of backend pods. Valid policy names are `Random`,
                      `RoundRobin`, `WeightedLeastRequest`, `Cookie`, and `RequestHash`.
                      If an unknown strategy name is specified or no policy is supplied,
                      the default `RoundRobin` policy is used.
                    type: string
                type: object
              protocol:
                description: Protocol may be used to specify (or override) the protocol
                  used to reach this Service. Values may be h2 or h2c. If omitted,
                  protocol-selection falls back on Service annotations.
                enum:
                - h2
                - h2c
                type: string
              protocolVersion:
                description: This field sets the version of the GRPC protocol that
                  Envoy uses to send requests to the extension service. Since Contour
                  always uses the v3 Envoy API, this is currently fixed at "v3". However,
                  other protocol options will be available in future.
                enum:
                - v3
                type: string
              services:
                description: Services specifies the set of Kubernetes Service resources
                  that receive GRPC extension API requests. If no weights are specified
                  for any of the entries in this array, traffic will be spread evenly
                  across all the services. Otherwise, traffic is balanced proportionally
                  to the Weight field in each entry.
                items:
                  description: ExtensionServiceTarget defines an Kubernetes Service
                    to target with extension service traffic.
                  properties:
                    name:
                      description: Name is the name of Kubernetes service that will
                        accept service traffic.
                      type: string
                    port:
                      description: Port (defined as Integer) to proxy traffic to since
                        a service can have multiple defined.
                      exclusiveMaximum: true
                      maximum: 65536
                      minimum: 1
                      type: integer
                    weight:
                      description: Weight defines proportion of traffic to balance
                        to the Kubernetes Service.
                      format: int32
                      type: integer
                  required:
                  - name
                  - port
                  type: object
                minItems: 1
                type: array
              timeoutPolicy:
                description: The timeout policy for requests to the services.
                properties:
                  idle:
                    description: Timeout after which, if there are no active requests
                      for this route, the connection between Envoy and the backend
                      or Envoy and the external client will be closed. If not specified,
                      there is no per-route idle timeout, though a connection manager-wide
                      stream_idle_timeout default of 5m still applies.
                    pattern: ^(((\d*(\.\d*)?h)|(\d*(\.\d*)?m)|(\d*(\.\d*)?s)|(\d*(\.\d*)?ms)|(\d*(\.\d*)?us)|(\d*(\.\d*)?µs)|(\d*(\.\d*)?ns))+|infinity|infinite)$
                    type: string
                  response:
                    description: Timeout for receiving a response from the server
                      after processing a request from client. If not supplied, Envoy's
                      default value of 15s applies.
                    pattern: ^(((\d*(\.\d*)?h)|(\d*(\.\d*)?m)|(\d*(\.\d*)?s)|(\d*(\.\d*)?ms)|(\d*(\.\d*)?us)|(\d*(\.\d*)?µs)|(\d*(\.\d*)?ns))+|infinity|infinite)$
                    type: string
                type: object
              validation:
                description: UpstreamValidation defines how to verify the backend
                  service's certificate
                properties:
                  caSecret:
                    description: Name of the Kubernetes secret be used to validate
                      the certificate presented by the backend
                    type: string
                  subjectName:
                    description: Key which is expected to be present in the 'subjectAltName'
                      of the presented certificate
                    type: string
                required:
                - caSecret
                - subjectName
                type: object
            required:
            - services
            type: object
          status:
            description: ExtensionServiceStatus defines the observed state of an ExtensionService
              resource.
            properties:
              conditions:
                description: "Conditions contains the current status of the ExtensionService
                  resource. \n Contour will update a single condition, `Valid`, that
                  is in normal-true polarity. \n Contour will not modify any other
                  Conditions set in this block, in case some other controller wants
                  to add a Condition."
                items:
                  description: "DetailedCondition is an extension of the normal Kubernetes
                    conditions, with two extra fields to hold sub-conditions, which
                    provide more detailed reasons for the state (True or False) of
                    the condition. \n `errors` holds information about sub-conditions
                    which are fatal to that condition and render its state False.
                    \n `warnings` holds information about sub-conditions which are
                    not fatal to that condition and do not force the state to be False.
                    \n Remember that Conditions have a type, a status, and a reason.
                    \n The type is the type of the condition, the most important one
                    in this CRD set is `Valid`. `Valid` is a positive-polarity condition:
                    when it is `status: true` there are no problems. \n In more detail,
                    `status: true` means that the object is has been ingested into
                    Contour with no errors. `warnings` may still be present, and will
                    be indicated in the Reason field. There must be zero entries in
                    the `errors` slice in this case. \n `Valid`, `status: false` means
                    that the object has had one or more fatal errors during processing
                    into Contour.  The details of the errors will be present under
                    the `errors` field. There must be at least one error in the `errors`
                    slice if `status` is `false`. \n For DetailedConditions of types
                    other than `Valid`, the Condition must be in the negative polarity.
                    When they have `status` `true`, there is an error. There must
                    be at least one entry in the `errors` Subcondition slice. When
                    they have `status` `false`, there are no serious errors, and there
                    must be zero entries in the `errors` slice. In either case, there
                    may be entries in the `warnings` slice. \n Regardless of the polarity,
                    the `reason` and `message` fields must be updated with either
                    the detail of the reason (if there is one and only one entry in
                    total across both the `errors` and `warnings` slices), or `MultipleReasons`
                    if there is more than one entry."
                  properties:
                    errors:
                      description: "Errors contains a slice of relevant error subconditions
                        for this object. \n Subconditions are expected to appear when
                        relevant (when there is a error), and disappear when not relevant.
                        An empty slice here indicates no errors."
                      items:
                        description: "SubCondition is a Condition-like type intended
                          for use as a subcondition inside a DetailedCondition. \n
                          It contains a subset of the Condition fields. \n It is intended
                          for warnings and errors, so `type` names should use abnormal-true
                          polarity, that is, they should be of the form \"ErrorPresent:
                          true\". \n The expected lifecycle for these errors is that
                          they should only be present when the error or warning is,
                          and should be removed when they are not relevant."
                        properties:
                          message:
                            description: "Message is a human readable message indicating
                              details about the transition. \n This may be an empty
                              string."
                            maxLength: 32768
                            type: string
                          reason:
                            description: "Reason contains a programmatic identifier
                              indicating the reason for the condition's last transition.
                              Producers of specific condition types may define expected
                              values and meanings for this field, and whether the
                              values are considered a guaranteed API. \n The value
                              should be a CamelCase string. \n This field may not
                              be empty."
                            maxLength: 1024
                            minLength: 1
                            pattern: ^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$
                            type: string
                          status:
                            description: Status of the condition, one of True, False,
                              Unknown.
                            enum:
                            - "True"
                            - "False"
                            - Unknown
                            type: string
                          type:
                            description: "Type of condition in `CamelCase` or in `foo.example.com/CamelCase`.
                              \n This must be in abnormal-true polarity, that is,
                              `ErrorFound` or `controller.io/ErrorFound`. \n The regex
                              it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)"
                            maxLength: 316
                            pattern: ^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$
                            type: string
                        required:
                        - message
                        - reason
                        - status
                        - type
                        type: object
                      type: array
                    lastTransitionTime:
                      description: lastTransitionTime is the last time the condition
                        transitioned from one status to another. This should be when
                        the underlying condition changed.  If that is not known, then
                        using the time when the API field changed is acceptable.
                      format: date-time
                      type: string
                    message:
                      description: message is a human readable message indicating
                        details about the transition. This may be an empty string.
                      maxLength: 32768
                      type: string
                    observedGeneration:
                      description: observedGeneration represents the .metadata.generation
                        that the condition was set based upon. For instance, if .metadata.generation
                        is currently 12, but the .status.conditions[x].observedGeneration
                        is 9, the condition is out of date with respect to the current
                        state of the instance.
                      format: int64
                      minimum: 0
                      type: integer
                    reason:
                      description: reason contains a programmatic identifier indicating
                        the reason for the condition's last transition. Producers
                        of specific condition types may define expected values and
                        meanings for this field, and whether the values are considered
                        a guaranteed API. The value should be a CamelCase string.
                        This field may not be empty.
                      maxLength: 1024
                      minLength: 1
                      pattern: ^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$
                      type: string
                    status:
                      description: status of the condition, one of True, False, Unknown.
                      enum:
                      - "True"
                      - "False"
                      - Unknown
                      type: string
                    type:
                      description: type of condition in CamelCase or in foo.example.com/CamelCase.
                        --- Many .condition.type values are consistent across resources
                        like Available, but because arbitrary conditions can be useful
                        (see .node.status.conditions), the ability to deconflict is
                        important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
                      maxLength: 316
                      pattern: ^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$
                      type: string
                    warnings:
                      description: "Warnings contains a slice of relevant warning
                        subconditions for this object. \n Subconditions are expected
                        to appear when relevant (when there is a warning), and disappear
                        when not relevant. An empty slice here indicates no warnings."
                      items:
                        description: "SubCondition is a Condition-like type intended
                          for use as a subcondition inside a DetailedCondition. \n
                          It contains a subset of the Condition fields. \n It is intended
                          for warnings and errors, so `type` names should use abnormal-true
                          polarity, that is, they should be of the form \"ErrorPresent:
                          true\". \n The expected lifecycle for these errors is that
                          they should only be present when the error or warning is,
                          and should be removed when they are not relevant."
                        properties:
                          message:
                            description: "Message is a human readable message indicating
                              details about the transition. \n This may be an empty
                              string."
                            maxLength: 32768
                            type: string
                          reason:
                            description: "Reason contains a programmatic identifier
                              indicating the reason for the condition's last transition.
                              Producers of specific condition types may define expected
                              values and meanings for this field, and whether the
                              values are considered a guaranteed API. \n The value
                              should be a CamelCase string. \n This field may not
                              be empty."
                            maxLength: 1024
                            minLength: 1
                            pattern: ^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$
                            type: string
                          status:
                            description: Status of the condition, one of True, False,
                              Unknown.
                            enum:
                            - "True"
                            - "False"
                            - Unknown
                            type: string
                          type:
                            description: "Type of condition in `CamelCase` or in `foo.example.com/CamelCase`.
                              \n This must be in abnormal-true polarity, that is,
                              `ErrorFound` or `controller.io/ErrorFound`. \n The regex
                              it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)"
                            maxLength: 316
                            pattern: ^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$
                            type: string
                        required:
                        - message
                        - reason
                        - status
                        - type
                        type: object
                      type: array
                  required:
                  - lastTransitionTime
                  - message
                  - reason
                  - status
                  - type
                  type: object
                type: array
                x-kubernetes-list-map-keys:
                - type
                x-kubernetes-list-type: map
            type: object
        type: object
    served: true
    storage: true
    subresources:
      status: {}
status:
  acceptedNames:
    kind: ""
    plural: ""
  conditions: []
  storedVersions: []
---
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  annotations:
    controller-gen.kubebuilder.io/version: v0.5.0
  creationTimestamp: null
  name: httpproxies.projectcontour.io
spec:
  preserveUnknownFields: false
  group: projectcontour.io
  names:
    kind: HTTPProxy
    listKind: HTTPProxyList
    plural: httpproxies
    shortNames:
    - proxy
    - proxies
    singular: httpproxy
  scope: Namespaced
  versions:
  - additionalPrinterColumns:
    - description: Fully qualified domain name
      jsonPath: .spec.virtualhost.fqdn
      name: FQDN
      type: string
    - description: Secret with TLS credentials
      jsonPath: .spec.virtualhost.tls.secretName
      name: TLS Secret
      type: string
    - description: The current status of the HTTPProxy
      jsonPath: .status.currentStatus
      name: Status
      type: string
    - description: Description of the current status
      jsonPath: .status.description
      name: Status Description
      type: string
    name: v1
    schema:
      openAPIV3Schema:
        description: HTTPProxy is an Ingress CRD specification.
        properties:
          apiVersion:
            description: 'APIVersion defines the versioned schema of this representation
              of an object. Servers should convert recognized schemas to the latest
              internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources'
            type: string
          kind:
            description: 'Kind is a string value representing the REST resource this
              object represents. Servers may infer this from the endpoint the client
              submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds'
            type: string
          metadata:
            type: object
          spec:
            description: HTTPProxySpec defines the spec of the CRD.
            properties:
              includes:
                description: Includes allow for specific routing configuration to
                  be included from another HTTPProxy, possibly in another namespace.
                items:
                  description: Include describes a set of policies that can be applied
                    to an HTTPProxy in a namespace.
                  properties:
                    conditions:
                      description: 'Conditions are a set of rules that are applied
                        to included HTTPProxies. In effect, they are added onto the
                        Conditions of included HTTPProxy Route structs. When applied,
                        they are merged using AND, with one exception: There can be
                        only one Prefix MatchCondition per Conditions slice. More
                        than one Prefix, or contradictory Conditions, will make the
                        include invalid.'
                      items:
                        description: MatchCondition are a general holder for matching
                          rules for HTTPProxies. One of Prefix or Header must be provided.
                        properties:
                          header:
                            description: Header specifies the header condition to
                              match.
                            properties:
                              contains:
                                description: Contains specifies a substring that must
                                  be present in the header value.
                                type: string
                              exact:
                                description: Exact specifies a string that the header
                                  value must be equal to.
                                type: string
                              name:
                                description: Name is the name of the header to match
                                  against. Name is required. Header names are case
                                  insensitive.
                                type: string
                              notcontains:
                                description: NotContains specifies a substring that
                                  must not be present in the header value.
                                type: string
                              notexact:
                                description: NoExact specifies a string that the header
                                  value must not be equal to. The condition is true
                                  if the header has any other value.
                                type: string
                              notpresent:
                                description: NotPresent specifies that condition is
                                  true when the named header is not present. Note
                                  that setting NotPresent to false does not make the
                                  condition true if the named header is present.
                                type: boolean
                              present:
                                description: Present specifies that condition is true
                                  when the named header is present, regardless of
                                  its value. Note that setting Present to false does
                                  not make the condition true if the named header
                                  is absent.
                                type: boolean
                            required:
                            - name
                            type: object
                          prefix:
                            description: Prefix defines a prefix match for a request.
                            type: string
                        type: object
                      type: array
                    name:
                      description: Name of the HTTPProxy
                      type: string
                    namespace:
                      description: Namespace of the HTTPProxy to include. Defaults
                        to the current namespace if not supplied.
                      type: string
                  required:
                  - name
                  type: object
                type: array
              routes:
                description: Routes are the ingress routes. If TCPProxy is present,
                  Routes is ignored.
                items:
                  description: Route contains the set of routes for a virtual host.
                  properties:
                    authPolicy:
                      description: AuthPolicy updates the authorization policy that
                        was set on the root HTTPProxy object for client requests that
                        match this route.
                      properties:
                        context:
                          additionalProperties:
                            type: string
                          description: Context is a set of key/value pairs that are
                            sent to the authentication server in the check request.
                            If a context is provided at an enclosing scope, the entries
                            are merged such that the inner scope overrides matching
                            keys from the outer scope.
                          type: object
                        disabled:
                          description: When true, this field disables client request
                            authentication for the scope of the policy.
                          type: boolean
                      type: object
                    conditions:
                      description: 'Conditions are a set of rules that are applied
                        to a Route. When applied, they are merged using AND, with
                        one exception: There can be only one Prefix MatchCondition
                        per Conditions slice. More than one Prefix, or contradictory
                        Conditions, will make the route invalid.'
                      items:
                        description: MatchCondition are a general holder for matching
                          rules for HTTPProxies. One of Prefix or Header must be provided.
                        properties:
                          header:
                            description: Header specifies the header condition to
                              match.
                            properties:
                              contains:
                                description: Contains specifies a substring that must
                                  be present in the header value.
                                type: string
                              exact:
                                description: Exact specifies a string that the header
                                  value must be equal to.
                                type: string
                              name:
                                description: Name is the name of the header to match
                                  against. Name is required. Header names are case
                                  insensitive.
                                type: string
                              notcontains:
                                description: NotContains specifies a substring that
                                  must not be present in the header value.
                                type: string
                              notexact:
                                description: NoExact specifies a string that the header
                                  value must not be equal to. The condition is true
                                  if the header has any other value.
                                type: string
                              notpresent:
                                description: NotPresent specifies that condition is
                                  true when the named header is not present. Note
                                  that setting NotPresent to false does not make the
                                  condition true if the named header is present.
                                type: boolean
                              present:
                                description: Present specifies that condition is true
                                  when the named header is present, regardless of
                                  its value. Note that setting Present to false does
                                  not make the condition true if the named header
                                  is absent.
                                type: boolean
                            required:
                            - name
                            type: object
                          prefix:
                            description: Prefix defines a prefix match for a request.
                            type: string
                        type: object
                      type: array
                    enableWebsockets:
                      description: Enables websocket support for the route.
                      type: boolean
                    healthCheckPolicy:
                      description: The health check policy for this route.
                      properties:
                        healthyThresholdCount:
                          description: The number of healthy health checks required
                            before a host is marked healthy
                          format: int64
                          minimum: 0
                          type: integer
                        host:
                          description: The value of the host header in the HTTP health
                            check request. If left empty (default value), the name
                            "contour-envoy-healthcheck" will be used.
                          type: string
                        intervalSeconds:
                          description: The interval (seconds) between health checks
                          format: int64
                          type: integer
                        path:
                          description: HTTP endpoint used to perform health checks
                            on upstream service
                          type: string
                        timeoutSeconds:
                          description: The time to wait (seconds) for a health check
                            response
                          format: int64
                          type: integer
                        unhealthyThresholdCount:
                          description: The number of unhealthy health checks required
                            before a host is marked unhealthy
                          format: int64
                          minimum: 0
                          type: integer
                      required:
                      - path
                      type: object
                    loadBalancerPolicy:
                      description: The load balancing policy for this route.
                      properties:
                        requestHashPolicies:
                          description: RequestHashPolicies contains a list of hash
                            policies to apply when the `RequestHash` load balancing
                            strategy is chosen. If an element of the supplied list
                            of hash policies is invalid, it will be ignored. If the
                            list of hash policies is empty after validation, the load
                            balancing strategy will fall back the the default `RoundRobin`.
                          items:
                            description: RequestHashPolicy contains configuration
                              for an individual hash policy on a request attribute.
                            properties:
                              headerHashOptions:
                                description: HeaderHashOptions should be set when
                                  request header hash based load balancing is desired.
                                  It must be the only hash option field set, otherwise
                                  this request hash policy object will be ignored.
                                properties:
                                  headerName:
                                    description: HeaderName is the name of the HTTP
                                      request header that will be used to calculate
                                      the hash key. If the header specified is not
                                      present on a request, no hash will be produced.
                                    minLength: 1
                                    type: string
                                type: object
                              terminal:
                                description: Terminal is a flag that allows for short-circuiting
                                  computing of a hash for a given request. If set
                                  to true, and the request attribute specified in
                                  the attribute hash options is present, no further
                                  hash policies will be used to calculate a hash for
                                  the request.
                                type: boolean
                            type: object
                          type: array
                        strategy:
                          description: Strategy specifies the policy used to balance
                            requests across the pool of backend pods. Valid policy
                            names are `Random`, `RoundRobin`, `WeightedLeastRequest`,
                            `Cookie`, and `RequestHash`. If an unknown strategy name
                            is specified or no policy is supplied, the default `RoundRobin`
                            policy is used.
                          type: string
                      type: object
                    pathRewritePolicy:
                      description: The policy for rewriting the path of the request
                        URL after the request has been routed to a Service.
                      properties:
                        replacePrefix:
                          description: ReplacePrefix describes how the path prefix
                            should be replaced.
                          items:
                            description: ReplacePrefix describes a path prefix replacement.
                            properties:
                              prefix:
                                description: "Prefix specifies the URL path prefix
                                  to be replaced. \n If Prefix is specified, it must
                                  exactly match the MatchCondition prefix that is
                                  rendered by the chain of including HTTPProxies and
                                  only that path prefix will be replaced by Replacement.
                                  This allows HTTPProxies that are included through
                                  multiple roots to only replace specific path prefixes,
                                  leaving others unmodified. \n If Prefix is not specified,
                                  all routing prefixes rendered by the include chain
                                  will be replaced."
                                minLength: 1
                                type: string
                              replacement:
                                description: Replacement is the string that the routing
                                  path prefix will be replaced with. This must not
                                  be empty.
                                minLength: 1
                                type: string
                            required:
                            - replacement
                            type: object
                          type: array
                      type: object
                    permitInsecure:
                      description: Allow this path to respond to insecure requests
                        over HTTP which are normally not permitted when a `virtualhost.tls`
                        block is present.
                      type: boolean
                    rateLimitPolicy:
                      description: The policy for rate limiting on the route.
                      properties:
                        global:
                          description: Global defines global rate limiting parameters,
                            i.e. parameters defining descriptors that are sent to
                            an external rate limit service (RLS) for a rate limit
                            decision on each request.
                          properties:
                            descriptors:
                              description: Descriptors defines the list of descriptors
                                that will be generated and sent to the rate limit
                                service. Each descriptor contains 1+ key-value pair
                                entries.
                              items:
                                description: RateLimitDescriptor defines a list of
                                  key-value pair generators.
                                properties:
                                  entries:
                                    description: Entries is the list of key-value
                                      pair generators.
                                    items:
                                      description: RateLimitDescriptorEntry is a key-value
                                        pair generator. Exactly one field on this
                                        struct must be non-nil.
                                      properties:
                                        genericKey:
                                          description: GenericKey defines a descriptor
                                            entry with a static key and value.
                                          properties:
                                            key:
                                              description: Key defines the key of
                                                the descriptor entry. If not set,
                                                the key is set to "generic_key".
                                              type: string
                                            value:
                                              description: Value defines the value
                                                of the descriptor entry.
                                              minLength: 1
                                              type: string
                                          type: object
                                        remoteAddress:
                                          description: RemoteAddress defines a descriptor
                                            entry with a key of "remote_address" and
                                            a value equal to the client's IP address
                                            (from x-forwarded-for).
                                          type: object
                                        requestHeader:
                                          description: RequestHeader defines a descriptor
                                            entry that's populated only if a given
                                            header is present on the request. The
                                            descriptor key is static, and the descriptor
                                            value is equal to the value of the header.
                                          properties:
                                            descriptorKey:
                                              description: DescriptorKey defines the
                                                key to use on the descriptor entry.
                                              minLength: 1
                                              type: string
                                            headerName:
                                              description: HeaderName defines the
                                                name of the header to look for on
                                                the request.
                                              minLength: 1
                                              type: string
                                          type: object
                                        requestHeaderValueMatch:
                                          description: RequestHeaderValueMatch defines
                                            a descriptor entry that's populated if
                                            the request's headers match a set of 1+
                                            match criteria. The descriptor key is
                                            "header_match", and the descriptor value
                                            is static.
                                          properties:
                                            expectMatch:
                                              default: true
                                              description: ExpectMatch defines whether
                                                the request must positively match
                                                the match criteria in order to generate
                                                a descriptor entry (i.e. true), or
                                                not match the match criteria in order
                                                to generate a descriptor entry (i.e.
                                                false). The default is true.
                                              type: boolean
                                            headers:
                                              description: Headers is a list of 1+
                                                match criteria to apply against the
                                                request to determine whether to populate
                                                the descriptor entry or not.
                                              items:
                                                description: HeaderMatchCondition
                                                  specifies how to conditionally match
                                                  against HTTP headers. The Name field
                                                  is required, but only one of the
                                                  remaining fields should be be provided.
                                                properties:
                                                  contains:
                                                    description: Contains specifies
                                                      a substring that must be present
                                                      in the header value.
                                                    type: string
                                                  exact:
                                                    description: Exact specifies a
                                                      string that the header value
                                                      must be equal to.
                                                    type: string
                                                  name:
                                                    description: Name is the name
                                                      of the header to match against.
                                                      Name is required. Header names
                                                      are case insensitive.
                                                    type: string
                                                  notcontains:
                                                    description: NotContains specifies
                                                      a substring that must not be
                                                      present in the header value.
                                                    type: string
                                                  notexact:
                                                    description: NoExact specifies
                                                      a string that the header value
                                                      must not be equal to. The condition
                                                      is true if the header has any
                                                      other value.
                                                    type: string
                                                  notpresent:
                                                    description: NotPresent specifies
                                                      that condition is true when
                                                      the named header is not present.
                                                      Note that setting NotPresent
                                                      to false does not make the condition
                                                      true if the named header is
                                                      present.
                                                    type: boolean
                                                  present:
                                                    description: Present specifies
                                                      that condition is true when
                                                      the named header is present,
                                                      regardless of its value. Note
                                                      that setting Present to false
                                                      does not make the condition
                                                      true if the named header is
                                                      absent.
                                                    type: boolean
                                                required:
                                                - name
                                                type: object
                                              minItems: 1
                                              type: array
                                            value:
                                              description: Value defines the value
                                                of the descriptor entry.
                                              minLength: 1
                                              type: string
                                          type: object
                                      type: object
                                    minItems: 1
                                    type: array
                                type: object
                              minItems: 1
                              type: array
                          type: object
                        local:
                          description: Local defines local rate limiting parameters,
                            i.e. parameters for rate limiting that occurs within each
                            Envoy pod as requests are handled.
                          properties:
                            burst:
                              description: Burst defines the number of requests above
                                the requests per unit that should be allowed within
                                a short period of time.
                              format: int32
                              type: integer
                            requests:
                              description: Requests defines how many requests per
                                unit of time should be allowed before rate limiting
                                occurs.
                              format: int32
                              minimum: 1
                              type: integer
                            responseHeadersToAdd:
                              description: ResponseHeadersToAdd is an optional list
                                of response headers to set when a request is rate-limited.
                              items:
                                description: HeaderValue represents a header name/value
                                  pair
                                properties:
                                  name:
                                    description: Name represents a key of a header
                                    minLength: 1
                                    type: string
                                  value:
                                    description: Value represents the value of a header
                                      specified by a key
                                    minLength: 1
                                    type: string
                                required:
                                - name
                                - value
                                type: object
                              type: array
                            responseStatusCode:
                              description: ResponseStatusCode is the HTTP status code
                                to use for responses to rate-limited requests. Codes
                                must be in the 400-599 range (inclusive). If not specified,
                                the Envoy default of 429 (Too Many Requests) is used.
                              format: int32
                              maximum: 599
                              minimum: 400
                              type: integer
                            unit:
                              description: Unit defines the period of time within
                                which requests over the limit will be rate limited.
                                Valid values are "second", "minute" and "hour".
                              enum:
                              - second
                              - minute
                              - hour
                              type: string
                          required:
                          - requests
                          - unit
                          type: object
                      type: object
                    requestHeadersPolicy:
                      description: The policy for managing request headers during
                        proxying.
                      properties:
                        remove:
                          description: Remove specifies a list of HTTP header names
                            to remove.
                          items:
                            type: string
                          type: array
                        set:
                          description: Set specifies a list of HTTP header values
                            that will be set in the HTTP header. If the header does
                            not exist it will be added, otherwise it will be overwritten
                            with the new value.
                          items:
                            description: HeaderValue represents a header name/value
                              pair
                            properties:
                              name:
                                description: Name represents a key of a header
                                minLength: 1
                                type: string
                              value:
                                description: Value represents the value of a header
                                  specified by a key
                                minLength: 1
                                type: string
                            required:
                            - name
                            - value
                            type: object
                          type: array
                      type: object
                    responseHeadersPolicy:
                      description: The policy for managing response headers during
                        proxying. Rewriting the 'Host' header is not supported.
                      properties:
                        remove:
                          description: Remove specifies a list of HTTP header names
                            to remove.
                          items:
                            type: string
                          type: array
                        set:
                          description: Set specifies a list of HTTP header values
                            that will be set in the HTTP header. If the header does
                            not exist it will be added, otherwise it will be overwritten
                            with the new value.
                          items:
                            description: HeaderValue represents a header name/value
                              pair
                            properties:
                              name:
                                description: Name represents a key of a header
                                minLength: 1
                                type: string
                              value:
                                description: Value represents the value of a header
                                  specified by a key
                                minLength: 1
                                type: string
                            required:
                            - name
                            - value
                            type: object
                          type: array
                      type: object
                    retryPolicy:
                      description: The retry policy for this route.
                      properties:
                        count:
                          description: NumRetries is maximum allowed number of retries.
                            If not supplied, the number of retries is one.
                          format: int64
                          minimum: 0
                          type: integer
                        perTryTimeout:
                          description: PerTryTimeout specifies the timeout per retry
                            attempt. Ignored if NumRetries is not supplied.
                          pattern: ^(((\d*(\.\d*)?h)|(\d*(\.\d*)?m)|(\d*(\.\d*)?s)|(\d*(\.\d*)?ms)|(\d*(\.\d*)?us)|(\d*(\.\d*)?µs)|(\d*(\.\d*)?ns))+|infinity|infinite)$
                          type: string
                        retriableStatusCodes:
                          description: "RetriableStatusCodes specifies the HTTP status
                            codes that should be retried. \n This field is only respected
                            when you include `retriable-status-codes` in the `RetryOn`
                            field."
                          items:
                            format: int32
                            type: integer
                          type: array
                        retryOn:
                          description: "RetryOn specifies the conditions on which
                            to retry a request. \n Supported [HTTP conditions](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on):
                            \n - `5xx` - `gateway-error` - `reset` - `connect-failure`
                            - `retriable-4xx` - `refused-stream` - `retriable-status-codes`
                            - `retriable-headers` \n Supported [gRPC conditions](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-grpc-on):
                            \n - `cancelled` - `deadline-exceeded` - `internal` -
                            `resource-exhausted` - `unavailable`"
                          items:
                            description: RetryOn is a string type alias with validation
                              to ensure that the value is valid.
                            enum:
                            - 5xx
                            - gateway-error
                            - reset
                            - connect-failure
                            - retriable-4xx
                            - refused-stream
                            - retriable-status-codes
                            - retriable-headers
                            - cancelled
                            - deadline-exceeded
                            - internal
                            - resource-exhausted
                            - unavailable
                            type: string
                          type: array
                      type: object
                    services:
                      description: Services are the services to proxy traffic.
                      items:
                        description: Service defines an Kubernetes Service to proxy
                          traffic.
                        properties:
                          mirror:
                            description: If Mirror is true the Service will receive
                              a read only mirror of the traffic for this route.
                            type: boolean
                          name:
                            description: Name is the name of Kubernetes service to
                              proxy traffic. Names defined here will be used to look
                              up corresponding endpoints which contain the ips to
                              route.
                            type: string
                          port:
                            description: Port (defined as Integer) to proxy traffic
                              to since a service can have multiple defined.
                            exclusiveMaximum: true
                            maximum: 65536
                            minimum: 1
                            type: integer
                          protocol:
                            description: Protocol may be used to specify (or override)
                              the protocol used to reach this Service. Values may
                              be tls, h2, h2c. If omitted, protocol-selection falls
                              back on Service annotations.
                            enum:
                            - h2
                            - h2c
                            - tls
                            type: string
                          requestHeadersPolicy:
                            description: The policy for managing request headers during
                              proxying. Rewriting the 'Host' header is not supported.
                            properties:
                              remove:
                                description: Remove specifies a list of HTTP header
                                  names to remove.
                                items:
                                  type: string
                                type: array
                              set:
                                description: Set specifies a list of HTTP header values
                                  that will be set in the HTTP header. If the header
                                  does not exist it will be added, otherwise it will
                                  be overwritten with the new value.
                                items:
                                  description: HeaderValue represents a header name/value
                                    pair
                                  properties:
                                    name:
                                      description: Name represents a key of a header
                                      minLength: 1
                                      type: string
                                    value:
                                      description: Value represents the value of a
                                        header specified by a key
                                      minLength: 1
                                      type: string
                                  required:
                                  - name
                                  - value
                                  type: object
                                type: array
                            type: object
                          responseHeadersPolicy:
                            description: The policy for managing response headers
                              during proxying. Rewriting the 'Host' header is not
                              supported.
                            properties:
                              remove:
                                description: Remove specifies a list of HTTP header
                                  names to remove.
                                items:
                                  type: string
                                type: array
                              set:
                                description: Set specifies a list of HTTP header values
                                  that will be set in the HTTP header. If the header
                                  does not exist it will be added, otherwise it will
                                  be overwritten with the new value.
                                items:
                                  description: HeaderValue represents a header name/value
                                    pair
                                  properties:
                                    name:
                                      description: Name represents a key of a header
                                      minLength: 1
                                      type: string
                                    value:
                                      description: Value represents the value of a
                                        header specified by a key
                                      minLength: 1
                                      type: string
                                  required:
                                  - name
                                  - value
                                  type: object
                                type: array
                            type: object
                          validation:
                            description: UpstreamValidation defines how to verify
                              the backend service's certificate
                            properties:
                              caSecret:
                                description: Name of the Kubernetes secret be used
                                  to validate the certificate presented by the backend
                                type: string
                              subjectName:
                                description: Key which is expected to be present in
                                  the 'subjectAltName' of the presented certificate
                                type: string
                            required:
                            - caSecret
                            - subjectName
                            type: object
                          weight:
                            description: Weight defines percentage of traffic to balance
                              traffic
                            format: int64
                            minimum: 0
                            type: integer
                        required:
                        - name
                        - port
                        type: object
                      minItems: 1
                      type: array
                    timeoutPolicy:
                      description: The timeout policy for this route.
                      properties:
                        idle:
                          description: Timeout after which, if there are no active
                            requests for this route, the connection between Envoy
                            and the backend or Envoy and the external client will
                            be closed. If not specified, there is no per-route idle
                            timeout, though a connection manager-wide stream_idle_timeout
                            default of 5m still applies.
                          pattern: ^(((\d*(\.\d*)?h)|(\d*(\.\d*)?m)|(\d*(\.\d*)?s)|(\d*(\.\d*)?ms)|(\d*(\.\d*)?us)|(\d*(\.\d*)?µs)|(\d*(\.\d*)?ns))+|infinity|infinite)$
                          type: string
                        response:
                          description: Timeout for receiving a response from the server
                            after processing a request from client. If not supplied,
                            Envoy's default value of 15s applies.
                          pattern: ^(((\d*(\.\d*)?h)|(\d*(\.\d*)?m)|(\d*(\.\d*)?s)|(\d*(\.\d*)?ms)|(\d*(\.\d*)?us)|(\d*(\.\d*)?µs)|(\d*(\.\d*)?ns))+|infinity|infinite)$
                          type: string
                      type: object
                  required:
                  - services
                  type: object
                type: array
              tcpproxy:
                description: TCPProxy holds TCP proxy information.
                properties:
                  healthCheckPolicy:
                    description: The health check policy for this tcp proxy
                    properties:
                      healthyThresholdCount:
                        description: The number of healthy health checks required
                          before a host is marked healthy
                        format: int32
                        type: integer
                      intervalSeconds:
                        description: The interval (seconds) between health checks
                        format: int64
                        type: integer
                      timeoutSeconds:
                        description: The time to wait (seconds) for a health check
                          response
                        format: int64
                        type: integer
                      unhealthyThresholdCount:
                        description: The number of unhealthy health checks required
                          before a host is marked unhealthy
                        format: int32
                        type: integer
                    type: object
                  include:
                    description: Include specifies that this tcpproxy should be delegated
                      to another HTTPProxy.
                    properties:
                      name:
                        description: Name of the child HTTPProxy
                        type: string
                      namespace:
                        description: Namespace of the HTTPProxy to include. Defaults
                          to the current namespace if not supplied.
                        type: string
                    required:
                    - name
                    type: object
                  includes:
                    description: "IncludesDeprecated allow for specific routing configuration
                      to be appended to another HTTPProxy in another namespace. \n
                      Exists due to a mistake when developing HTTPProxy and the field
                      was marked plural when it should have been singular. This field
                      should stay to not break backwards compatibility to v1 users."
                    properties:
                      name:
                        description: Name of the child HTTPProxy
                        type: string
                      namespace:
                        description: Namespace of the HTTPProxy to include. Defaults
                          to the current namespace if not supplied.
                        type: string
                    required:
                    - name
                    type: object
                  loadBalancerPolicy:
                    description: The load balancing policy for the backend services.
                      Note that the `Cookie` and `RequestHash` load balancing strategies
                      cannot be used here.
                    properties:
                      requestHashPolicies:
                        description: RequestHashPolicies contains a list of hash policies
                          to apply when the `RequestHash` load balancing strategy
                          is chosen. If an element of the supplied list of hash policies
                          is invalid, it will be ignored. If the list of hash policies
                          is empty after validation, the load balancing strategy will
                          fall back the the default `RoundRobin`.
                        items:
                          description: RequestHashPolicy contains configuration for
                            an individual hash policy on a request attribute.
                          properties:
                            headerHashOptions:
                              description: HeaderHashOptions should be set when request
                                header hash based load balancing is desired. It must
                                be the only hash option field set, otherwise this
                                request hash policy object will be ignored.
                              properties:
                                headerName:
                                  description: HeaderName is the name of the HTTP
                                    request header that will be used to calculate
                                    the hash key. If the header specified is not present
                                    on a request, no hash will be produced.
                                  minLength: 1
                                  type: string
                              type: object
                            terminal:
                              description: Terminal is a flag that allows for short-circuiting
                                computing of a hash for a given request. If set to
                                true, and the request attribute specified in the attribute
                                hash options is present, no further hash policies
                                will be used to calculate a hash for the request.
                              type: boolean
                          type: object
                        type: array
                      strategy:
                        description: Strategy specifies the policy used to balance
                          requests across the pool of backend pods. Valid policy names
                          are `Random`, `RoundRobin`, `WeightedLeastRequest`, `Cookie`,
                          and `RequestHash`. If an unknown strategy name is specified
                          or no policy is supplied, the default `RoundRobin` policy
                          is used.
                        type: string
                    type: object
                  services:
                    description: Services are the services to proxy traffic
                    items:
                      description: Service defines an Kubernetes Service to proxy
                        traffic.
                      properties:
                        mirror:
                          description: If Mirror is true the Service will receive
                            a read only mirror of the traffic for this route.
                          type: boolean
                        name:
                          description: Name is the name of Kubernetes service to proxy
                            traffic. Names defined here will be used to look up corresponding
                            endpoints which contain the ips to route.
                          type: string
                        port:
                          description: Port (defined as Integer) to proxy traffic
                            to since a service can have multiple defined.
                          exclusiveMaximum: true
                          maximum: 65536
                          minimum: 1
                          type: integer
                        protocol:
                          description: Protocol may be used to specify (or override)
                            the protocol used to reach this Service. Values may be
                            tls, h2, h2c. If omitted, protocol-selection falls back
                            on Service annotations.
                          enum:
                          - h2
                          - h2c
                          - tls
                          type: string
                        requestHeadersPolicy:
                          description: The policy for managing request headers during
                            proxying. Rewriting the 'Host' header is not supported.
                          properties:
                            remove:
                              description: Remove specifies a list of HTTP header
                                names to remove.
                              items:
                                type: string
                              type: array
                            set:
                              description: Set specifies a list of HTTP header values
                                that will be set in the HTTP header. If the header
                                does not exist it will be added, otherwise it will
                                be overwritten with the new value.
                              items:
                                description: HeaderValue represents a header name/value
                                  pair
                                properties:
                                  name:
                                    description: Name represents a key of a header
                                    minLength: 1
                                    type: string
                                  value:
                                    description: Value represents the value of a header
                                      specified by a key
                                    minLength: 1
                                    type: string
                                required:
                                - name
                                - value
                                type: object
                              type: array
                          type: object
                        responseHeadersPolicy:
                          description: The policy for managing response headers during
                            proxying. Rewriting the 'Host' header is not supported.
                          properties:
                            remove:
                              description: Remove specifies a list of HTTP header
                                names to remove.
                              items:
                                type: string
                              type: array
                            set:
                              description: Set specifies a list of HTTP header values
                                that will be set in the HTTP header. If the header
                                does not exist it will be added, otherwise it will
                                be overwritten with the new value.
                              items:
                                description: HeaderValue represents a header name/value
                                  pair
                                properties:
                                  name:
                                    description: Name represents a key of a header
                                    minLength: 1
                                    type: string
                                  value:
                                    description: Value represents the value of a header
                                      specified by a key
                                    minLength: 1
                                    type: string
                                required:
                                - name
                                - value
                                type: object
                              type: array
                          type: object
                        validation:
                          description: UpstreamValidation defines how to verify the
                            backend service's certificate
                          properties:
                            caSecret:
                              description: Name of the Kubernetes secret be used to
                                validate the certificate presented by the backend
                              type: string
                            subjectName:
                              description: Key which is expected to be present in
                                the 'subjectAltName' of the presented certificate
                              type: string
                          required:
                          - caSecret
                          - subjectName
                          type: object
                        weight:
                          description: Weight defines percentage of traffic to balance
                            traffic
                          format: int64
                          minimum: 0
                          type: integer
                      required:
                      - name
                      - port
                      type: object
                    type: array
                type: object
              virtualhost:
                description: Virtualhost appears at most once. If it is present, the
                  object is considered to be a "root" HTTPProxy.
                properties:
                  authorization:
                    description: This field configures an extension service to perform
                      authorization for this virtual host. Authorization can only
                      be configured on virtual hosts that have TLS enabled. If the
                      TLS configuration requires client certificate validation, the
                      client certificate is always included in the authentication
                      check request.
                    properties:
                      authPolicy:
                        description: AuthPolicy sets a default authorization policy
                          for client requests. This policy will be used unless overridden
                          by individual routes.
                        properties:
                          context:
                            additionalProperties:
                              type: string
                            description: Context is a set of key/value pairs that
                              are sent to the authentication server in the check request.
                              If a context is provided at an enclosing scope, the
                              entries are merged such that the inner scope overrides
                              matching keys from the outer scope.
                            type: object
                          disabled:
                            description: When true, this field disables client request
                              authentication for the scope of the policy.
                            type: boolean
                        type: object
                      extensionRef:
                        description: ExtensionServiceRef specifies the extension resource
                          that will authorize client requests.
                        properties:
                          apiVersion:
                            description: API version of the referent. If this field
                              is not specified, the default "projectcontour.io/v1alpha1"
                              will be used
                            minLength: 1
                            type: string
                          name:
                            description: "Name of the referent. \n More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names"
                            minLength: 1
                            type: string
                          namespace:
                            description: "Namespace of the referent. If this field
                              is not specifies, the namespace of the resource that
                              targets the referent will be used. \n More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
                            minLength: 1
                            type: string
                        type: object
                      failOpen:
                        description: If FailOpen is true, the client request is forwarded
                          to the upstream service even if the authorization server
                          fails to respond. This field should not be set in most cases.
                          It is intended for use only while migrating applications
                          from internal authorization to Contour external authorization.
                        type: boolean
                      responseTimeout:
                        description: ResponseTimeout configures maximum time to wait
                          for a check response from the authorization server. Timeout
                          durations are expressed in the Go [Duration format](https://godoc.org/time#ParseDuration).
                          Valid time units are "ns", "us" (or "µs"), "ms", "s", "m",
                          "h". The string "infinity" is also a valid input and specifies
                          no timeout.
                        pattern: ^(((\d*(\.\d*)?h)|(\d*(\.\d*)?m)|(\d*(\.\d*)?s)|(\d*(\.\d*)?ms)|(\d*(\.\d*)?us)|(\d*(\.\d*)?µs)|(\d*(\.\d*)?ns))+|infinity|infinite)$
                        type: string
                    required:
                    - extensionRef
                    type: object
                  corsPolicy:
                    description: Specifies the cross-origin policy to apply to the
                      VirtualHost.
                    properties:
                      allowCredentials:
                        description: Specifies whether the resource allows credentials.
                        type: boolean
                      allowHeaders:
                        description: AllowHeaders specifies the content for the *access-control-allow-headers*
                          header.
                        items:
                          description: CORSHeaderValue specifies the value of the
                            string headers returned by a cross-domain request.
                          pattern: ^[a-zA-Z0-9!#$%&'*+.^_`|~-]+$
                          type: string
                        type: array
                      allowMethods:
                        description: AllowMethods specifies the content for the *access-control-allow-methods*
                          header.
                        items:
                          description: CORSHeaderValue specifies the value of the
                            string headers returned by a cross-domain request.
                          pattern: ^[a-zA-Z0-9!#$%&'*+.^_`|~-]+$
                          type: string
                        type: array
                      allowOrigin:
                        description: AllowOrigin specifies the origins that will be
                          allowed to do CORS requests. "*" means allow any origin.
                        items:
                          type: string
                        type: array
                      exposeHeaders:
                        description: ExposeHeaders Specifies the content for the *access-control-expose-headers*
                          header.
                        items:
                          description: CORSHeaderValue specifies the value of the
                            string headers returned by a cross-domain request.
                          pattern: ^[a-zA-Z0-9!#$%&'*+.^_`|~-]+$
                          type: string
                        type: array
                      maxAge:
                        description: MaxAge indicates for how long the results of
                          a preflight request can be cached. MaxAge durations are
                          expressed in the Go [Duration format](https://godoc.org/time#ParseDuration).
                          Valid time units are "ns", "us" (or "µs"), "ms", "s", "m",
                          "h". Only positive values are allowed while 0 disables the
                          cache requiring a preflight OPTIONS check for all cross-origin
                          requests.
                        type: string
                    required:
                    - allowMethods
                    - allowOrigin
                    type: object
                  fqdn:
                    description: The fully qualified domain name of the root of the
                      ingress tree all leaves of the DAG rooted at this object relate
                      to the fqdn.
                    type: string
                  rateLimitPolicy:
                    description: The policy for rate limiting on the virtual host.
                    properties:
                      global:
                        description: Global defines global rate limiting parameters,
                          i.e. parameters defining descriptors that are sent to an
                          external rate limit service (RLS) for a rate limit decision
                          on each request.
                        properties:
                          descriptors:
                            description: Descriptors defines the list of descriptors
                              that will be generated and sent to the rate limit service.
                              Each descriptor contains 1+ key-value pair entries.
                            items:
                              description: RateLimitDescriptor defines a list of key-value
                                pair generators.
                              properties:
                                entries:
                                  description: Entries is the list of key-value pair
                                    generators.
                                  items:
                                    description: RateLimitDescriptorEntry is a key-value
                                      pair generator. Exactly one field on this struct
                                      must be non-nil.
                                    properties:
                                      genericKey:
                                        description: GenericKey defines a descriptor
                                          entry with a static key and value.
                                        properties:
                                          key:
                                            description: Key defines the key of the
                                              descriptor entry. If not set, the key
                                              is set to "generic_key".
                                            type: string
                                          value:
                                            description: Value defines the value of
                                              the descriptor entry.
                                            minLength: 1
                                            type: string
                                        type: object
                                      remoteAddress:
                                        description: RemoteAddress defines a descriptor
                                          entry with a key of "remote_address" and
                                          a value equal to the client's IP address
                                          (from x-forwarded-for).
                                        type: object
                                      requestHeader:
                                        description: RequestHeader defines a descriptor
                                          entry that's populated only if a given header
                                          is present on the request. The descriptor
                                          key is static, and the descriptor value
                                          is equal to the value of the header.
                                        properties:
                                          descriptorKey:
                                            description: DescriptorKey defines the
                                              key to use on the descriptor entry.
                                            minLength: 1
                                            type: string
                                          headerName:
                                            description: HeaderName defines the name
                                              of the header to look for on the request.
                                            minLength: 1
                                            type: string
                                        type: object
                                      requestHeaderValueMatch:
                                        description: RequestHeaderValueMatch defines
                                          a descriptor entry that's populated if the
                                          request's headers match a set of 1+ match
                                          criteria. The descriptor key is "header_match",
                                          and the descriptor value is static.
                                        properties:
                                          expectMatch:
                                            default: true
                                            description: ExpectMatch defines whether
                                              the request must positively match the
                                              match criteria in order to generate
                                              a descriptor entry (i.e. true), or not
                                              match the match criteria in order to
                                              generate a descriptor entry (i.e. false).
                                              The default is true.
                                            type: boolean
                                          headers:
                                            description: Headers is a list of 1+ match
                                              criteria to apply against the request
                                              to determine whether to populate the
                                              descriptor entry or not.
                                            items:
                                              description: HeaderMatchCondition specifies
                                                how to conditionally match against
                                                HTTP headers. The Name field is required,
                                                but only one of the remaining fields
                                                should be be provided.
                                              properties:
                                                contains:
                                                  description: Contains specifies
                                                    a substring that must be present
                                                    in the header value.
                                                  type: string
                                                exact:
                                                  description: Exact specifies a string
                                                    that the header value must be
                                                    equal to.
                                                  type: string
                                                name:
                                                  description: Name is the name of
                                                    the header to match against. Name
                                                    is required. Header names are
                                                    case insensitive.
                                                  type: string
                                                notcontains:
                                                  description: NotContains specifies
                                                    a substring that must not be present
                                                    in the header value.
                                                  type: string
                                                notexact:
                                                  description: NoExact specifies a
                                                    string that the header value must
                                                    not be equal to. The condition
                                                    is true if the header has any
                                                    other value.
                                                  type: string
                                                notpresent:
                                                  description: NotPresent specifies
                                                    that condition is true when the
                                                    named header is not present. Note
                                                    that setting NotPresent to false
                                                    does not make the condition true
                                                    if the named header is present.
                                                  type: boolean
                                                present:
                                                  description: Present specifies that
                                                    condition is true when the named
                                                    header is present, regardless
                                                    of its value. Note that setting
                                                    Present to false does not make
                                                    the condition true if the named
                                                    header is absent.
                                                  type: boolean
                                              required:
                                              - name
                                              type: object
                                            minItems: 1
                                            type: array
                                          value:
                                            description: Value defines the value of
                                              the descriptor entry.
                                            minLength: 1
                                            type: string
                                        type: object
                                    type: object
                                  minItems: 1
                                  type: array
                              type: object
                            minItems: 1
                            type: array
                        type: object
                      local:
                        description: Local defines local rate limiting parameters,
                          i.e. parameters for rate limiting that occurs within each
                          Envoy pod as requests are handled.
                        properties:
                          burst:
                            description: Burst defines the number of requests above
                              the requests per unit that should be allowed within
                              a short period of time.
                            format: int32
                            type: integer
                          requests:
                            description: Requests defines how many requests per unit
                              of time should be allowed before rate limiting occurs.
                            format: int32
                            minimum: 1
                            type: integer
                          responseHeadersToAdd:
                            description: ResponseHeadersToAdd is an optional list
                              of response headers to set when a request is rate-limited.
                            items:
                              description: HeaderValue represents a header name/value
                                pair
                              properties:
                                name:
                                  description: Name represents a key of a header
                                  minLength: 1
                                  type: string
                                value:
                                  description: Value represents the value of a header
                                    specified by a key
                                  minLength: 1
                                  type: string
                              required:
                              - name
                              - value
                              type: object
                            type: array
                          responseStatusCode:
                            description: ResponseStatusCode is the HTTP status code
                              to use for responses to rate-limited requests. Codes
                              must be in the 400-599 range (inclusive). If not specified,
                              the Envoy default of 429 (Too Many Requests) is used.
                            format: int32
                            maximum: 599
                            minimum: 400
                            type: integer
                          unit:
                            description: Unit defines the period of time within which
                              requests over the limit will be rate limited. Valid
                              values are "second", "minute" and "hour".
                            enum:
                            - second
                            - minute
                            - hour
                            type: string
                        required:
                        - requests
                        - unit
                        type: object
                    type: object
                  tls:
                    description: If present the fields describes TLS properties of
                      the virtual host. The SNI names that will be matched on are
                      described in fqdn, the tls.secretName secret must contain a
                      certificate that itself contains a name that matches the FQDN.
                    properties:
                      clientValidation:
                        description: "ClientValidation defines how to verify the client
                          certificate when an external client establishes a TLS connection
                          to Envoy. \n This setting: \n 1. Enables TLS client certificate
                          validation. 2. Specifies how the client certificate will
                          be validated (i.e.    validation required or skipped). \n
                          Note: Setting client certificate validation to be skipped
                          should be only used in conjunction with an external authorization
                          server that performs client validation as Contour will ensure
                          client certificates are passed along."
                        properties:
                          caSecret:
                            description: Name of a Kubernetes secret that contains
                              a CA certificate bundle. The client certificate must
                              validate against the certificates in the bundle. If
                              specified and SkipClientCertValidation is true, client
                              certificates will be required on requests.
                            minLength: 1
                            type: string
                          skipClientCertValidation:
                            description: SkipClientCertValidation disables downstream
                              client certificate validation. Defaults to false. This
                              field is intended to be used in conjunction with external
                              authorization in order to enable the external authorization
                              server to validate client certificates. When this field
                              is set to true, client certificates are requested but
                              not verified by Envoy. If CACertificate is specified,
                              client certificates are required on requests, but not
                              verified. If external authorization is in use, they
                              are presented to the external authorization server.
                            type: boolean
                        type: object
                      enableFallbackCertificate:
                        description: EnableFallbackCertificate defines if the vhost
                          should allow a default certificate to be applied which handles
                          all requests which don't match the SNI defined in this vhost.
                        type: boolean
                      minimumProtocolVersion:
                        description: MinimumProtocolVersion is the minimum TLS version
                          this vhost should negotiate. Valid options are `1.2` (default)
                          and `1.3`. Any other value defaults to TLS 1.2.
                        type: string
                      passthrough:
                        description: Passthrough defines whether the encrypted TLS
                          handshake will be passed through to the backing cluster.
                          Either Passthrough or SecretName must be specified, but
                          not both.
                        type: boolean
                      secretName:
                        description: SecretName is the name of a TLS secret in the
                          current namespace. Either SecretName or Passthrough must
                          be specified, but not both. If specified, the named secret
                          must contain a matching certificate for the virtual host's
                          FQDN.
                        type: string
                    type: object
                required:
                - fqdn
                type: object
            type: object
          status:
            description: Status is a container for computed information about the
              HTTPProxy.
            properties:
              conditions:
                description: "Conditions contains information about the current status
                  of the HTTPProxy, in an upstream-friendly container. \n Contour
                  will update a single condition, `Valid`, that is in normal-true
                  polarity. That is, when `currentStatus` is `valid`, the `Valid`
                  condition will be `status: true`, and vice versa. \n Contour will
                  leave untouched any other Conditions set in this block, in case
                  some other controller wants to add a Condition. \n If you are another
                  controller owner and wish to add a condition, you *should* namespace
                  your condition with a label, like `controller.domain.com/ConditionName`."
                items:
                  description: "DetailedCondition is an extension of the normal Kubernetes
                    conditions, with two extra fields to hold sub-conditions, which
                    provide more detailed reasons for the state (True or False) of
                    the condition. \n `errors` holds information about sub-conditions
                    which are fatal to that condition and render its state False.
                    \n `warnings` holds information about sub-conditions which are
                    not fatal to that condition and do not force the state to be False.
                    \n Remember that Conditions have a type, a status, and a reason.
                    \n The type is the type of the condition, the most important one
                    in this CRD set is `Valid`. `Valid` is a positive-polarity condition:
                    when it is `status: true` there are no problems. \n In more detail,
                    `status: true` means that the object is has been ingested into
                    Contour with no errors. `warnings` may still be present, and will
                    be indicated in the Reason field. There must be zero entries in
                    the `errors` slice in this case. \n `Valid`, `status: false` means
                    that the object has had one or more fatal errors during processing
                    into Contour.  The details of the errors will be present under
                    the `errors` field. There must be at least one error in the `errors`
                    slice if `status` is `false`. \n For DetailedConditions of types
                    other than `Valid`, the Condition must be in the negative polarity.
                    When they have `status` `true`, there is an error. There must
                    be at least one entry in the `errors` Subcondition slice. When
                    they have `status` `false`, there are no serious errors, and there
                    must be zero entries in the `errors` slice. In either case, there
                    may be entries in the `warnings` slice. \n Regardless of the polarity,
                    the `reason` and `message` fields must be updated with either
                    the detail of the reason (if there is one and only one entry in
                    total across both the `errors` and `warnings` slices), or `MultipleReasons`
                    if there is more than one entry."
                  properties:
                    errors:
                      description: "Errors contains a slice of relevant error subconditions
                        for this object. \n Subconditions are expected to appear when
                        relevant (when there is a error), and disappear when not relevant.
                        An empty slice here indicates no errors."
                      items:
                        description: "SubCondition is a Condition-like type intended
                          for use as a subcondition inside a DetailedCondition. \n
                          It contains a subset of the Condition fields. \n It is intended
                          for warnings and errors, so `type` names should use abnormal-true
                          polarity, that is, they should be of the form \"ErrorPresent:
                          true\". \n The expected lifecycle for these errors is that
                          they should only be present when the error or warning is,
                          and should be removed when they are not relevant."
                        properties:
                          message:
                            description: "Message is a human readable message indicating
                              details about the transition. \n This may be an empty
                              string."
                            maxLength: 32768
                            type: string
                          reason:
                            description: "Reason contains a programmatic identifier
                              indicating the reason for the condition's last transition.
                              Producers of specific condition types may define expected
                              values and meanings for this field, and whether the
                              values are considered a guaranteed API. \n The value
                              should be a CamelCase string. \n This field may not
                              be empty."
                            maxLength: 1024
                            minLength: 1
                            pattern: ^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$
                            type: string
                          status:
                            description: Status of the condition, one of True, False,
                              Unknown.
                            enum:
                            - "True"
                            - "False"
                            - Unknown
                            type: string
                          type:
                            description: "Type of condition in `CamelCase` or in `foo.example.com/CamelCase`.
                              \n This must be in abnormal-true polarity, that is,
                              `ErrorFound` or `controller.io/ErrorFound`. \n The regex
                              it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)"
                            maxLength: 316
                            pattern: ^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$
                            type: string
                        required:
                        - message
                        - reason
                        - status
                        - type
                        type: object
                      type: array
                    lastTransitionTime:
                      description: lastTransitionTime is the last time the condition
                        transitioned from one status to another. This should be when
                        the underlying condition changed.  If that is not known, then
                        using the time when the API field changed is acceptable.
                      format: date-time
                      type: string
                    message:
                      description: message is a human readable message indicating
                        details about the transition. This may be an empty string.
                      maxLength: 32768
                      type: string
                    observedGeneration:
                      description: observedGeneration represents the .metadata.generation
                        that the condition was set based upon. For instance, if .metadata.generation
                        is currently 12, but the .status.conditions[x].observedGeneration
                        is 9, the condition is out of date with respect to the current
                        state of the instance.
                      format: int64
                      minimum: 0
                      type: integer
                    reason:
                      description: reason contains a programmatic identifier indicating
                        the reason for the condition's last transition. Producers
                        of specific condition types may define expected values and
                        meanings for this field, and whether the values are considered
                        a guaranteed API. The value should be a CamelCase string.
                        This field may not be empty.
                      maxLength: 1024
                      minLength: 1
                      pattern: ^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$
                      type: string
                    status:
                      description: status of the condition, one of True, False, Unknown.
                      enum:
                      - "True"
                      - "False"
                      - Unknown
                      type: string
                    type:
                      description: type of condition in CamelCase or in foo.example.com/CamelCase.
                        --- Many .condition.type values are consistent across resources
                        like Available, but because arbitrary conditions can be useful
                        (see .node.status.conditions), the ability to deconflict is
                        important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
                      maxLength: 316
                      pattern: ^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$
                      type: string
                    warnings:
                      description: "Warnings contains a slice of relevant warning
                        subconditions for this object. \n Subconditions are expected
                        to appear when relevant (when there is a warning), and disappear
                        when not relevant. An empty slice here indicates no warnings."
                      items:
                        description: "SubCondition is a Condition-like type intended
                          for use as a subcondition inside a DetailedCondition. \n
                          It contains a subset of the Condition fields. \n It is intended
                          for warnings and errors, so `type` names should use abnormal-true
                          polarity, that is, they should be of the form \"ErrorPresent:
                          true\". \n The expected lifecycle for these errors is that
                          they should only be present when the error or warning is,
                          and should be removed when they are not relevant."
                        properties:
                          message:
                            description: "Message is a human readable message indicating
                              details about the transition. \n This may be an empty
                              string."
                            maxLength: 32768
                            type: string
                          reason:
                            description: "Reason contains a programmatic identifier
                              indicating the reason for the condition's last transition.
                              Producers of specific condition types may define expected
                              values and meanings for this field, and whether the
                              values are considered a guaranteed API. \n The value
                              should be a CamelCase string. \n This field may not
                              be empty."
                            maxLength: 1024
                            minLength: 1
                            pattern: ^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$
                            type: string
                          status:
                            description: Status of the condition, one of True, False,
                              Unknown.
                            enum:
                            - "True"
                            - "False"
                            - Unknown
                            type: string
                          type:
                            description: "Type of condition in `CamelCase` or in `foo.example.com/CamelCase`.
                              \n This must be in abnormal-true polarity, that is,
                              `ErrorFound` or `controller.io/ErrorFound`. \n The regex
                              it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)"
                            maxLength: 316
                            pattern: ^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$
                            type: string
                        required:
                        - message
                        - reason
                        - status
                        - type
                        type: object
                      type: array
                  required:
                  - lastTransitionTime
                  - message
                  - reason
                  - status
                  - type
                  type: object
                type: array
                x-kubernetes-list-map-keys:
                - type
                x-kubernetes-list-type: map
              currentStatus:
                type: string
              description:
                type: string
              loadBalancer:
                description: LoadBalancer contains the current status of the load
                  balancer.
                properties:
                  ingress:
                    description: Ingress is a list containing ingress points for the
                      load-balancer. Traffic intended for the service should be sent
                      to these ingress points.
                    items:
                      description: 'LoadBalancerIngress represents the status of a
                        load-balancer ingress point: traffic intended for the service
                        should be sent to an ingress point.'
                      properties:
                        hostname:
                          description: Hostname is set for load-balancer ingress points
                            that are DNS based (typically AWS load-balancers)
                          type: string
                        ip:
                          description: IP is set for load-balancer ingress points
                            that are IP based (typically GCE or OpenStack load-balancers)
                          type: string
                        ports:
                          description: Ports is a list of records of service ports
                            If used, every port defined in the service should have
                            an entry in it
                          items:
                            properties:
                              error:
                                description: 'Error is to record the problem with
                                  the service port The format of the error shall comply
                                  with the following rules: - built-in error values
                                  shall be specified in this file and those shall
                                  use   CamelCase names - cloud provider specific
                                  error values must have names that comply with the   format
                                  foo.example.com/CamelCase. --- The regex it matches
                                  is (dns1123SubdomainFmt/)?(qualifiedNameFmt)'
                                maxLength: 316
                                pattern: ^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$
                                type: string
                              port:
                                description: Port is the port number of the service
                                  port of which status is recorded here
                                format: int32
                                type: integer
                              protocol:
                                default: TCP
                                description: 'Protocol is the protocol of the service
                                  port of which status is recorded here The supported
                                  values are: "TCP", "UDP", "SCTP"'
                                type: string
                            required:
                            - port
                            - protocol
                            type: object
                          type: array
                          x-kubernetes-list-type: atomic
                      type: object
                    type: array
                type: object
            type: object
        required:
        - metadata
        - spec
        type: object
    served: true
    storage: true
    subresources:
      status: {}
status:
  acceptedNames:
    kind: ""
    plural: ""
  conditions: []
  storedVersions: []
---
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  annotations:
    controller-gen.kubebuilder.io/version: v0.5.0
  creationTimestamp: null
  name: tlscertificatedelegations.projectcontour.io
spec:
  preserveUnknownFields: false
  group: projectcontour.io
  names:
    kind: TLSCertificateDelegation
    listKind: TLSCertificateDelegationList
    plural: tlscertificatedelegations
    shortNames:
    - tlscerts
    singular: tlscertificatedelegation
  scope: Namespaced
  versions:
  - name: v1
    schema:
      openAPIV3Schema:
        description: TLSCertificateDelegation is an TLS Certificate Delegation CRD
          specification. See design/tls-certificate-delegation.md for details.
        properties:
          apiVersion:
            description: 'APIVersion defines the versioned schema of this representation
              of an object. Servers should convert recognized schemas to the latest
              internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources'
            type: string
          kind:
            description: 'Kind is a string value representing the REST resource this
              object represents. Servers may infer this from the endpoint the client
              submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds'
            type: string
          metadata:
            type: object
          spec:
            description: TLSCertificateDelegationSpec defines the spec of the CRD
            properties:
              delegations:
                items:
                  description: CertificateDelegation maps the authority to reference
                    a secret in the current namespace to a set of namespaces.
                  properties:
                    secretName:
                      description: required, the name of a secret in the current namespace.
                      type: string
                    targetNamespaces:
                      description: required, the namespaces the authority to reference
                        the the secret will be delegated to. If TargetNamespaces is
                        nil or empty, the CertificateDelegation' is ignored. If the
                        TargetNamespace list contains the character, "*" the secret
                        will be delegated to all namespaces.
                      items:
                        type: string
                      type: array
                  required:
                  - secretName
                  - targetNamespaces
                  type: object
                type: array
            required:
            - delegations
            type: object
          status:
            description: TLSCertificateDelegationStatus allows for the status of the
              delegation to be presented to the user.
            properties:
              conditions:
                description: "Conditions contains information about the current status
                  of the HTTPProxy, in an upstream-friendly container. \n Contour
                  will update a single condition, `Valid`, that is in normal-true
                  polarity. That is, when `currentStatus` is `valid`, the `Valid`
                  condition will be `status: true`, and vice versa. \n Contour will
                  leave untouched any other Conditions set in this block, in case
                  some other controller wants to add a Condition. \n If you are another
                  controller owner and wish to add a condition, you *should* namespace
                  your condition with a label, like `controller.domain.com\\ConditionName`."
                items:
                  description: "DetailedCondition is an extension of the normal Kubernetes
                    conditions, with two extra fields to hold sub-conditions, which
                    provide more detailed reasons for the state (True or False) of
                    the condition. \n `errors` holds information about sub-conditions
                    which are fatal to that condition and render its state False.
                    \n `warnings` holds information about sub-conditions which are
                    not fatal to that condition and do not force the state to be False.
                    \n Remember that Conditions have a type, a status, and a reason.
                    \n The type is the type of the condition, the most important one
                    in this CRD set is `Valid`. `Valid` is a positive-polarity condition:
                    when it is `status: true` there are no problems. \n In more detail,
                    `status: true` means that the object is has been ingested into
                    Contour with no errors. `warnings` may still be present, and will
                    be indicated in the Reason field. There must be zero entries in
                    the `errors` slice in this case. \n `Valid`, `status: false` means
                    that the object has had one or more fatal errors during processing
                    into Contour.  The details of the errors will be present under
                    the `errors` field. There must be at least one error in the `errors`
                    slice if `status` is `false`. \n For DetailedConditions of types
                    other than `Valid`, the Condition must be in the negative polarity.
                    When they have `status` `true`, there is an error. There must
                    be at least one entry in the `errors` Subcondition slice. When
                    they have `status` `false`, there are no serious errors, and there
                    must be zero entries in the `errors` slice. In either case, there
                    may be entries in the `warnings` slice. \n Regardless of the polarity,
                    the `reason` and `message` fields must be updated with either
                    the detail of the reason (if there is one and only one entry in
                    total across both the `errors` and `warnings` slices), or `MultipleReasons`
                    if there is more than one entry."
                  properties:
                    errors:
                      description: "Errors contains a slice of relevant error subconditions
                        for this object. \n Subconditions are expected to appear when
                        relevant (when there is a error), and disappear when not relevant.
                        An empty slice here indicates no errors."
                      items:
                        description: "SubCondition is a Condition-like type intended
                          for use as a subcondition inside a DetailedCondition. \n
                          It contains a subset of the Condition fields. \n It is intended
                          for warnings and errors, so `type` names should use abnormal-true
                          polarity, that is, they should be of the form \"ErrorPresent:
                          true\". \n The expected lifecycle for these errors is that
                          they should only be present when the error or warning is,
                          and should be removed when they are not relevant."
                        properties:
                          message:
                            description: "Message is a human readable message indicating
                              details about the transition. \n This may be an empty
                              string."
                            maxLength: 32768
                            type: string
                          reason:
                            description: "Reason contains a programmatic identifier
                              indicating the reason for the condition's last transition.
                              Producers of specific condition types may define expected
                              values and meanings for this field, and whether the
                              values are considered a guaranteed API. \n The value
                              should be a CamelCase string. \n This field may not
                              be empty."
                            maxLength: 1024
                            minLength: 1
                            pattern: ^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$
                            type: string
                          status:
                            description: Status of the condition, one of True, False,
                              Unknown.
                            enum:
                            - "True"
                            - "False"
                            - Unknown
                            type: string
                          type:
                            description: "Type of condition in `CamelCase` or in `foo.example.com/CamelCase`.
                              \n This must be in abnormal-true polarity, that is,
                              `ErrorFound` or `controller.io/ErrorFound`. \n The regex
                              it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)"
                            maxLength: 316
                            pattern: ^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$
                            type: string
                        required:
                        - message
                        - reason
                        - status
                        - type
                        type: object
                      type: array
                    lastTransitionTime:
                      description: lastTransitionTime is the last time the condition
                        transitioned from one status to another. This should be when
                        the underlying condition changed.  If that is not known, then
                        using the time when the API field changed is acceptable.
                      format: date-time
                      type: string
                    message:
                      description: message is a human readable message indicating
                        details about the transition. This may be an empty string.
                      maxLength: 32768
                      type: string
                    observedGeneration:
                      description: observedGeneration represents the .metadata.generation
                        that the condition was set based upon. For instance, if .metadata.generation
                        is currently 12, but the .status.conditions[x].observedGeneration
                        is 9, the condition is out of date with respect to the current
                        state of the instance.
                      format: int64
                      minimum: 0
                      type: integer
                    reason:
                      description: reason contains a programmatic identifier indicating
                        the reason for the condition's last transition. Producers
                        of specific condition types may define expected values and
                        meanings for this field, and whether the values are considered
                        a guaranteed API. The value should be a CamelCase string.
                        This field may not be empty.
                      maxLength: 1024
                      minLength: 1
                      pattern: ^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$
                      type: string
                    status:
                      description: status of the condition, one of True, False, Unknown.
                      enum:
                      - "True"
                      - "False"
                      - Unknown
                      type: string
                    type:
                      description: type of condition in CamelCase or in foo.example.com/CamelCase.
                        --- Many .condition.type values are consistent across resources
                        like Available, but because arbitrary conditions can be useful
                        (see .node.status.conditions), the ability to deconflict is
                        important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
                      maxLength: 316
                      pattern: ^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$
                      type: string
                    warnings:
                      description: "Warnings contains a slice of relevant warning
                        subconditions for this object. \n Subconditions are expected
                        to appear when relevant (when there is a warning), and disappear
                        when not relevant. An empty slice here indicates no warnings."
                      items:
                        description: "SubCondition is a Condition-like type intended
                          for use as a subcondition inside a DetailedCondition. \n
                          It contains a subset of the Condition fields. \n It is intended
                          for warnings and errors, so `type` names should use abnormal-true
                          polarity, that is, they should be of the form \"ErrorPresent:
                          true\". \n The expected lifecycle for these errors is that
                          they should only be present when the error or warning is,
                          and should be removed when they are not relevant."
                        properties:
                          message:
                            description: "Message is a human readable message indicating
                              details about the transition. \n This may be an empty
                              string."
                            maxLength: 32768
                            type: string
                          reason:
                            description: "Reason contains a programmatic identifier
                              indicating the reason for the condition's last transition.
                              Producers of specific condition types may define expected
                              values and meanings for this field, and whether the
                              values are considered a guaranteed API. \n The value
                              should be a CamelCase string. \n This field may not
                              be empty."
                            maxLength: 1024
                            minLength: 1
                            pattern: ^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$
                            type: string
                          status:
                            description: Status of the condition, one of True, False,
                              Unknown.
                            enum:
                            - "True"
                            - "False"
                            - Unknown
                            type: string
                          type:
                            description: "Type of condition in `CamelCase` or in `foo.example.com/CamelCase`.
                              \n This must be in abnormal-true polarity, that is,
                              `ErrorFound` or `controller.io/ErrorFound`. \n The regex
                              it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)"
                            maxLength: 316
                            pattern: ^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$
                            type: string
                        required:
                        - message
                        - reason
                        - status
                        - type
                        type: object
                      type: array
                  required:
                  - lastTransitionTime
                  - message
                  - reason
                  - status
                  - type
                  type: object
                type: array
                x-kubernetes-list-map-keys:
                - type
                x-kubernetes-list-type: map
            type: object
        required:
        - metadata
        - spec
        type: object
    served: true
    storage: true
    subresources:
      status: {}
status:
  acceptedNames:
    kind: ""
    plural: ""
  conditions: []
  storedVersions: []

---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: contour-certgen
  namespace: projectcontour
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: contour
  namespace: projectcontour
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: contour-certgen
subjects:
- kind: ServiceAccount
  name: contour-certgen
  namespace: projectcontour
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: contour-certgen
  namespace: projectcontour
rules:
- apiGroups:
  - ""
  resources:
  - secrets
  verbs:
  - create
  - update
---
apiVersion: batch/v1
kind: Job
metadata:
  name: contour-certgen-v1.17.0
  namespace: projectcontour
spec:
  ttlSecondsAfterFinished: 0
  template:
    metadata:
      labels:
        app: "contour-certgen"
    spec:
      containers:
      - name: contour
        image: docker.io/projectcontour/contour:v1.17.0
        imagePullPolicy: Always
        command:
        - contour
        - certgen
        - --kube
        - --incluster
        - --overwrite
        - --secrets-format=compact
        - --namespace=$(CONTOUR_NAMESPACE)
        env:
        - name: CONTOUR_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
      restartPolicy: Never
      serviceAccountName: contour-certgen
      securityContext:
        runAsNonRoot: true
        runAsUser: 65534
        runAsGroup: 65534
  parallelism: 1
  completions: 1
  backoffLimit: 1

---

apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: contour
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: contour
subjects:
- kind: ServiceAccount
  name: contour
  namespace: projectcontour

# The following ClusterRole is generated from kubebuilder RBAC tags by
# generate-rbac.sh. Do not edit this file directly but instead edit the source
# files and re-render.

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  creationTimestamp: null
  name: contour
rules:
- apiGroups:
  - ""
  resources:
  - configmaps
  verbs:
  - create
  - get
  - update
- apiGroups:
  - ""
  resources:
  - endpoints
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - ""
  resources:
  - namespaces
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - ""
  resources:
  - secrets
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - ""
  resources:
  - services
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - apiextensions.k8s.io
  resources:
  - customresourcedefinitions
  verbs:
  - list
- apiGroups:
  - networking.k8s.io
  resources:
  - ingressclasses
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - networking.k8s.io
  resources:
  - ingresses
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - networking.k8s.io
  resources:
  - ingresses/status
  verbs:
  - create
  - get
  - update
- apiGroups:
  - networking.x-k8s.io
  resources:
  - backendpolicies
  - gatewayclasses
  - gateways
  - httproutes
  - tcproutes
  - tlsroutes
  - udproutes
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - networking.x-k8s.io
  resources:
  - backendpolicies/status
  - gatewayclasses/status
  - gateways/status
  - httproutes/status
  - tcproutes/status
  - tlsroutes/status
  - udproutes/status
  verbs:
  - update
- apiGroups:
  - projectcontour.io
  resources:
  - extensionservices
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - projectcontour.io
  resources:
  - extensionservices/status
  verbs:
  - create
  - get
  - update
- apiGroups:
  - projectcontour.io
  resources:
  - httpproxies
  - tlscertificatedelegations
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - projectcontour.io
  resources:
  - httpproxies/status
  verbs:
  - create
  - get
  - update

---
apiVersion: v1
kind: Service
metadata:
  name: contour
  namespace: projectcontour
spec:
  ports:
  - port: 8001
    name: xds
    protocol: TCP
    targetPort: 8001
  selector:
    app: contour
  type: ClusterIP

---
apiVersion: v1
kind: Service
metadata:
  name: envoy
  namespace: projectcontour
  annotations:
    # This annotation puts the AWS ELB into "TCP" mode so that it does not
    # do HTTP negotiation for HTTPS connections at the ELB edge.
    # The downside of this is the remote IP address of all connections will
    # appear to be the internal address of the ELB. See docs/proxy-proto.md
    # for information about enabling the PROXY protocol on the ELB to recover
    # the original remote IP address.
    service.beta.kubernetes.io/aws-load-balancer-backend-protocol: tcp
spec:
  externalTrafficPolicy: Local
  ports:
  - port: 80
    name: http
    protocol: TCP
    targetPort: 8080
  - port: 443
    name: https
    protocol: TCP
    targetPort: 8443
  selector:
    app: envoy
  type: LoadBalancer

---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: contour
  name: contour
  namespace: projectcontour
spec:
  replicas: 2
  strategy:
    type: RollingUpdate
    rollingUpdate:
      # This value of maxSurge means that during a rolling update
      # the new ReplicaSet will be created first.
      maxSurge: 50%
  selector:
    matchLabels:
      app: contour
  template:
    metadata:
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "8000"
      labels:
        app: contour
    spec:
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - podAffinityTerm:
              labelSelector:
                matchLabels:
                  app: contour
              topologyKey: kubernetes.io/hostname
            weight: 100
      containers:
      - args:
        - serve
        - --incluster
        - --xds-address=0.0.0.0
        - --xds-port=8001
        - --contour-cafile=/certs/ca.crt
        - --contour-cert-file=/certs/tls.crt
        - --contour-key-file=/certs/tls.key
        - --config-path=/config/contour.yaml
        command: ["contour"]
        image: docker.io/projectcontour/contour:v1.17.0
        imagePullPolicy: IfNotPresent
        name: contour
        ports:
        - containerPort: 8001
          name: xds
          protocol: TCP
        - containerPort: 8000
          name: metrics
          protocol: TCP
        - containerPort: 6060
          name: debug
          protocol: TCP
        livenessProbe:
          httpGet:
            path: /healthz
            port: 8000
        readinessProbe:
          tcpSocket:
            port: 8001
          initialDelaySeconds: 15
          periodSeconds: 10
        volumeMounts:
          - name: contourcert
            mountPath: /certs
            readOnly: true
          - name: contour-config
            mountPath: /config
            readOnly: true
        env:
        - name: CONTOUR_NAMESPACE
          valueFrom:
            fieldRef:
              apiVersion: v1
              fieldPath: metadata.namespace
        - name: POD_NAME
          valueFrom:
            fieldRef:
              apiVersion: v1
              fieldPath: metadata.name
      dnsPolicy: ClusterFirst
      serviceAccountName: contour
      securityContext:
        runAsNonRoot: true
        runAsUser: 65534
        runAsGroup: 65534
      volumes:
        - name: contourcert
          secret:
            secretName: contourcert
        - name: contour-config
          configMap:
            name: contour
            defaultMode: 0644
            items:
            - key: contour.yaml
              path: contour.yaml

---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  labels:
    app: envoy
  name: envoy
  namespace: projectcontour
spec:
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 10%
  selector:
    matchLabels:
      app: envoy
  template:
    metadata:
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "8002"
        prometheus.io/path: "/stats/prometheus"
      labels:
        app: envoy
    spec:
      containers:
      - command:
        - /bin/contour
        args:
          - envoy
          - shutdown-manager
        image: docker.io/projectcontour/contour:v1.17.0
        imagePullPolicy: IfNotPresent
        lifecycle:
          preStop:
            exec:
              command:
                - /bin/contour
                - envoy
                - shutdown
        livenessProbe:
          httpGet:
            path: /healthz
            port: 8090
          initialDelaySeconds: 3
          periodSeconds: 10
        name: shutdown-manager
      - args:
        - -c
        - /config/envoy.json
        - --service-cluster $(CONTOUR_NAMESPACE)
        - --service-node $(ENVOY_POD_NAME)
        - --log-level info
        command:
        - envoy
        image: docker.io/envoyproxy/envoy:v1.18.3
        imagePullPolicy: IfNotPresent
        name: envoy
        env:
        - name: CONTOUR_NAMESPACE
          valueFrom:
            fieldRef:
              apiVersion: v1
              fieldPath: metadata.namespace
        - name: ENVOY_POD_NAME
          valueFrom:
            fieldRef:
              apiVersion: v1
              fieldPath: metadata.name
        ports:
        - containerPort: 8080
          hostPort: 80
          name: http
          protocol: TCP
        - containerPort: 8443
          hostPort: 443
          name: https
          protocol: TCP
        readinessProbe:
          httpGet:
            path: /ready
            port: 8002
          initialDelaySeconds: 3
          periodSeconds: 4
        volumeMounts:
          - name: envoy-config
            mountPath: /config
            readOnly: true
          - name: envoycert
            mountPath: /certs
            readOnly: true
        lifecycle:
          preStop:
            httpGet:
              path: /shutdown
              port: 8090
              scheme: HTTP
      initContainers:
      - args:
        - bootstrap
        - /config/envoy.json
        - --xds-address=contour
        - --xds-port=8001
        - --xds-resource-version=v3
        - --resources-dir=/config/resources
        - --envoy-cafile=/certs/ca.crt
        - --envoy-cert-file=/certs/tls.crt
        - --envoy-key-file=/certs/tls.key
        command:
        - contour
        image: docker.io/projectcontour/contour:v1.17.0
        imagePullPolicy: IfNotPresent
        name: envoy-initconfig
        volumeMounts:
        - name: envoy-config
          mountPath: /config
        - name: envoycert
          mountPath: /certs
          readOnly: true
        env:
        - name: CONTOUR_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
      automountServiceAccountToken: false
      serviceAccountName: envoy
      terminationGracePeriodSeconds: 300
      volumes:
        - name: envoy-config
          emptyDir: {}
        - name: envoycert
          secret:
            secretName: envoycert
      restartPolicy: Always