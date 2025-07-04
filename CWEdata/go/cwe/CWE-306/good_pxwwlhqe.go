swagger: "2.0"
info:
  title: MinIO Console Server
  version: 0.1.0
consumes:
  - application/json
produces:
  - application/json
schemes:
  - http
  - ws
basePath: /api/v1
# We are going to be taking `Authorization: Bearer TOKEN` header for our authentication
securityDefinitions:
  key:
    type: oauth2
    flow: accessCode
    authorizationUrl: http://min.io
    tokenUrl: http://min.io
# Apply the key security definition to all APIs
security:
  - key: [ ]
paths:
  /login:
    get:
      summary: Returns login strategy, form or sso.
      operationId: LoginDetail
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/loginDetails"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      # Exclude this API from the authentication requirement
      security: [ ]
      tags:
        - UserAPI
    post:
      operationId: LoginOperator
        - name: body
          required: true
            $ref: "#/definitions/loginOperatorRequest"
        204:
        default:
          schema:
      security: [ ]
        - UserAPI
  /login/oauth2/auth:
      summary: Identity Provider oauth2 callback endpoint.
        204:
      parameters:
          in: body
          schema:
      responses:
          description: A successful login.
          description: Generic error response.
            $ref: "#/definitions/error"
      tags:

    post:
      summary: Logout from Operator.
      operationId: Logout
      responses:
        200:
          description: A successful response.
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - UserAPI
        204:
  /session:
    get:
      operationId: SessionCheck
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/operatorSessionResponse"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - UserAPI


  /subscription/info:
    get:
      summary: Subscription info
      operationId: SubscriptionInfo
      responses:
        200:
          description: A successful response.
          schema:
        default:
          description: Generic error response.
            $ref: "#/definitions/error"
        - OperatorAPI

  /subscription/validate:
    post:
      summary: Validates subscription license
      operationId: SubscriptionValidate
      parameters:
        - name: body
          in: body
          required: true
          schema:
            $ref: "#/definitions/subscriptionValidateRequest"
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/license"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /subscription/refresh:
    post:
      summary: Refresh existing subscription license
      operationId: SubscriptionRefresh
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/license"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /subscription/namespaces/{namespace}/tenants/{tenant}/activate:
    post:
      summary: Activate a particular tenant using the existing subscription license
      operationId: SubscriptionActivate
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
      responses:
        204:
          description: A successful response.
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI


  /tenants:
    get:
      summary: List Tenant of All Namespaces
      operationId: ListAllTenants
      parameters:
        - name: sort_by
          in: query
          required: false
          type: string
        - name: offset
          in: query
          required: false
          type: integer
          format: int32
        - name: limit
          in: query
          required: false
          type: integer
          format: int32
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/listTenantsResponse"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI
    post:
      summary: Create Tenant
      operationId: CreateTenant
      parameters:
        - name: body
          in: body
          required: true
          schema:
            $ref: "#/definitions/createTenantRequest"
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/createTenantResponse"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespace:
    post:
      summary: Creates a new Namespace with given information
      operationId: CreateNamespace
      parameters:
        - name: body
          in: body
          required: true
          schema:
            $ref: "#/definitions/namespace"
      responses:
        201:
          description: A successful response.
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespaces/{namespace}/tenants:
    get:
      summary: List Tenants by Namespace
      operationId: ListTenants
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: sort_by
          in: query
          required: false
          type: string
        - name: offset
          in: query
          required: false
          type: integer
          format: int32
        - name: limit
          in: query
          required: false
          type: integer
          format: int32
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/listTenantsResponse"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespaces/{namespace}/tenants/{tenant}/security:
    get:
      summary: Tenant Security
      operationId: TenantSecurity
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/tenantSecurityResponse"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI
    post:
      summary: Update Tenant Security
      operationId: UpdateTenantSecurity
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
        - name: body
          in: body
          required: true
          schema:
            $ref: "#/definitions/updateTenantSecurityRequest"
      responses:
        204:
          description: A successful response.
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespaces/{namespace}/tenants/{tenant}:
    get:
      summary: Tenant Details
      operationId: TenantDetails
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/tenant"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI
    delete:
      summary: Delete tenant and underlying pvcs
      operationId: DeleteTenant
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
        - name: body
          in: body
          required: false
          schema:
            $ref: "#/definitions/deleteTenantRequest"
      responses:
        204:
          description: A successful response.
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI
    put:
      summary: Update Tenant
      operationId: UpdateTenant
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
        - name: body
          in: body
          required: true
          schema:
            $ref: "#/definitions/updateTenantRequest"
      responses:
        201:
          description: A successful response.
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespaces/{namespace}/tenants/{tenant}/pools:
    post:
      summary: Tenant Add Pool
      operationId: TenantAddPool
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
        - name: body
          in: body
          required: true
          schema:
            $ref: "#/definitions/pool"
      responses:
        201:
          description: A successful response.
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI
    put:
      summary: Tenant Update Pools
      operationId: TenantUpdatePools
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
        - name: body
          in: body
          required: true
          schema:
            $ref: "#/definitions/poolUpdateRequest"
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/tenant"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespaces/{namespace}/tenants/{tenant}/pvcs:
    get:
      summary: List all PVCs from given Tenant
      operationId: ListPVCsForTenant
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/listPVCsResponse"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespaces/{namespace}/tenants/{tenant}/usage:
    get:
      summary: Get Usage For The Tenant
      operationId: GetTenantUsage
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/tenantUsage"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespaces/{namespace}/tenants/{tenant}/pods:
    get:
      summary: Get Pods For The Tenant
      operationId: GetTenantPods
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
      responses:
        200:
          description: A successful response.
          schema:
            type: array
            items:
              $ref: "#/definitions/tenantPod"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespaces/{namespace}/tenants/{tenant}/pods/{podName}:
    get:
      summary: Get Logs for Pod
      operationId: GetPodLogs
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
        - name: podName
          in: path
          required: true
          type: string
      responses:
        200:
          description: A successful response.
          schema:
            type: string
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI
    delete:
      summary: Delete pod
      operationId: DeletePod
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
        - name: podName
          in: path
          required: true
          type: string
      responses:
        204:
          description: A successful response.
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespaces/{namespace}/tenants/{tenant}/pods/{podName}/events:
    get:
      summary: Get Events for Pod
      operationId: GetPodEvents
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
        - name: podName
          in: path
          required: true
          type: string
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/eventListWrapper"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespaces/{namespace}/tenants/{tenant}/certificates:
    put:
      summary: Tenant Update Certificates
      operationId: TenantUpdateCertificate
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
        - name: body
          in: body
          required: true
          schema:
            $ref: "#/definitions/tlsConfiguration"
      responses:
        201:
          description: A successful response.
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespaces/{namespace}/tenants/{tenant}/encryption:
    put:
      summary: Tenant Update Encryption
      operationId: TenantUpdateEncryption
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
        - name: body
          in: body
          required: true
          schema:
            $ref: "#/definitions/encryptionConfiguration"
      responses:
        201:
          description: A successful response.
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespaces/{namespace}/tenants/{tenant}/yaml:
    get:
      summary: Get the Tenant YAML
      operationId: GetTenantYAML
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/tenantYAML"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI
    put:
      summary: Put the Tenant YAML
      operationId: PutTenantYAML
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: tenant
          in: path
          required: true
          type: string
        - name: body
          in: body
          required: true
          schema:
            $ref: "#/definitions/tenantYAML"
      responses:
        201:
          description: A successful response.
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /namespaces/{namespace}/resourcequotas/{resource-quota-name}:
    get:
      summary: Get Resource Quota
      operationId: GetResourceQuota
      parameters:
        - name: namespace
          in: path
          required: true
          type: string
        - name: resource-quota-name
          in: path
          required: true
          type: string
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/resourceQuota"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /cluster/max-allocatable-memory:
    get:
      summary: Get maximum allocatable memory for given number of nodes
      operationId: GetMaxAllocatableMem
      parameters:
        - name: num_nodes
          in: query
          required: true
          type: integer
          format: int32
          minimum: 1
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/maxAllocatableMemResponse"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /get-parity/{nodes}/{disksPerNode}:
    get:
      summary: Gets parity by sending number of nodes & number of disks
      operationId: GetParity
      parameters:
        - name: nodes
          in: path
          required: true
          type: integer
          minimum: 2
        - name: disksPerNode
          in: path
          required: true
          type: integer
          minimum: 1
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/parityResponse"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /direct-csi/drives:
    get:
      summary: Get direct-csi drives list
      operationId: GetDirectCSIDriveList
      parameters:
        - name: nodes
          in: query
          required: false
          type: string
        - name: drives
          in: query
          required: false
          type: string
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/getDirectCSIDriveListResponse"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /direct-csi/volumes:
    get:
      summary: Get direct-csi volumes list
      operationId: GetDirectCSIVolumeList
      parameters:
        - name: nodes
          in: query
          required: false
          type: string
        - name: drives
          in: query
          required: false
          type: string
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/getDirectCSIVolumeListResponse"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /direct-csi/drives/format:
    post:
      summary: Format direct-csi drives from a list
      operationId: DirectCSIFormatDrive
      parameters:
        - name: body
          in: body
          required: true
          schema:
            $ref: "#/definitions/formatConfiguration"
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/formatDirectCSIDrivesResponse"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /list-pvcs:
    get:
      summary: List all PVCs from namespaces that the user has access to
      operationId: ListPVCs
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/listPVCsResponse"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

  /nodes/labels:
    get:
      summary: List node labels
      operationId: ListNodeLabels
      responses:
        200:
          description: A successful response.
          schema:
            $ref: "#/definitions/nodeLabels"
        default:
          description: Generic error response.
          schema:
            $ref: "#/definitions/error"
      tags:
        - OperatorAPI

definitions:

  error:
    type: object
    required:
      - message
      - detailedMessage
    properties:
      code:
        type: integer
        format: int32
      message:
        type: string
      detailedMessage:
        type: string
  loginDetails:
    type: object
    properties:
      loginStrategy:
        type: string
        enum: [ form, redirect, service-account ]
      redirect:
        type: string
  loginRequest:
    type: object
    required:
      - accessKey
      - secretKey
    properties:
      accessKey:
        type: string
      secretKey:
        type: string
  loginOauth2AuthRequest:
    type: object
    required:
      - state
      - code
    properties:
      state:
        type: string
      code:
        type: string
  loginOperatorRequest:
    type: object
    required:
      - jwt
    properties:
      jwt:
        type: string
  operatorSessionResponse:
    type: object
    properties:
      pages:
        type: array
        items:
          type: string
      features:
        type: array
        items:
          type: string
      status:
        type: string
        enum: [ ok ]
      operator:
        type: boolean

  tenantStatus:
    type: object
    properties:
      write_quorum:
        type: integer
        format: int32
      drives_online:
        type: integer
        format: int32
      drives_offline:
        type: integer
        format: int32
      drives_healing:
        type: integer
        format: int32
      health_status:
        type: string
      usage:
        type: object
        properties:
            type: integer
          raw_usage:
            format: int64
            type: integer
          capacity_usage:
            type: integer
            format: int64
  tenantSecurityResponse:
    type: object
    properties:
      autoCert:
        type: boolean
      customCertificates:
        type: object
        properties:
          minio:
            type: array
            items:
              $ref: "#/definitions/certificateInfo"
          minioCAs:
            type: array
            items:
              $ref: "#/definitions/certificateInfo"

  updateTenantSecurityRequest:
    type: object
    properties:
      autoCert:
        type: boolean
      customCertificates:
        type: object
        properties:
          secretsToBeDeleted:
            type: array
            items:
              type: string
          minio:
            type: array
            items:
              $ref: "#/definitions/keyPairConfiguration"
          minioCAs:
            type: array
            items:
              type: string

  certificateInfo:
    type: object
    properties:
      serialNumber:
        type: string
      name:
        type: string
      domains:
        type: array
        items:
          type: string
      expiry:
        type: string

  tenant:
    type: object
    properties:
      name:
        type: string
      creation_date:
        type: string
      deletion_date:
        type: string
      currentState:
        type: string
      pools:
        type: array
        items:
          $ref: "#/definitions/pool"
      image:
        type: string
      namespace:
        type: string
      total_size:
        type: integer
        format: int64
      enable_prometheus:
        type: boolean
      subnet_license:
        $ref: "#/definitions/license"
      endpoints:
        type: object
        properties:
          minio:
            type: string
          console:
            type: string
      logEnabled:
        type: boolean
      monitoringEnabled:
        type: boolean
      idpAdEnabled:
        type: boolean
      idpOidcEnabled:
        type: boolean
      encryptionEnabled:
        type: boolean
      status:
        $ref: "#/definitions/tenantStatus"
      minioTLS:
        type: boolean

  tenantUsage:
    type: object
    properties:
      used:
        type: integer
        format: int64
      disk_used:
        type: integer
        format: int64

  tenantList:
    type: object
    properties:
      name:
        type: string
      pool_count:
        type: integer
      instance_count:
        type: integer
      total_size:
        type: integer
      volume_count:
        type: integer
      creation_date:
        type: string
      deletion_date:
        type: string
      currentState:
        type: string
      namespace:
        type: string
      health_status:
        type: string
      capacity_raw:
        type: integer
        format: int64
      capacity_raw_usage:
        type: integer
        format: int64
      capacity:
        type: integer
        format: int64
      capacity_usage:
        type: integer
        format: int64

  listTenantsResponse:
    type: object
    properties:
      tenants:
        type: array
        items:
          $ref: "#/definitions/tenantList"
        title: list of resulting tenants
      total:
        type: integer
        format: int64
        title: number of tenants accessible to tenant user

  updateTenantRequest:
    type: object
    properties:
      image:
        type: string
        pattern: "^((.*?)/(.*?):(.+))$"
      image_registry:
        $ref: "#/definitions/imageRegistry"
      image_pull_secret:
        type: string
      enable_prometheus:
        type: boolean

  imageRegistry:
    type: object
    required:
      - registry
      - username
      - password
    properties:
      registry:
        type: string
      username:
        type: string
      password:
        type: string

  createTenantRequest:
    type: object
    required:
      - name
      - namespace
      - pools
    properties:
      name:
        type: string
        pattern: "^[a-z0-9-]{3,63}$"
      image:
        type: string
      pools:
        type: array
        items:
          $ref: "#/definitions/pool"
      mounth_path:
        type: string
      access_key:
        type: string
      secret_key:
        type: string
      enable_console:
        type: boolean
        default: true
      enable_tls:
        type: boolean
        default: true
      enable_prometheus:
        type: boolean
        default: false
      namespace:
        type: string
      erasureCodingParity:
        type: integer
      annotations:
        type: object
        additionalProperties:
          type: string
      labels:
        type: object
        additionalProperties:
          type: string
      logSearchConfiguration:
        $ref: "#/definitions/logSearchConfiguration"
      prometheusConfiguration:
        $ref: "#/definitions/prometheusConfiguration"
      image_registry:
        $ref: "#/definitions/imageRegistry"
      image_pull_secret:
        type: string
      idp:
        type: object
        $ref: "#/definitions/idpConfiguration"
      tls:
        type: object
        $ref: "#/definitions/tlsConfiguration"
      encryption:
        type: object
        $ref: "#/definitions/encryptionConfiguration"
      expose_minio:
        type: boolean
      expose_console:
        type: boolean

  metadataFields:
    type: object
    properties:
      annotations:
        type: object
        additionalProperties:
          type: string
      labels:
        type: object
        additionalProperties:
          type: string
      node_selector:
        type: object
        additionalProperties:
          type: string

  keyPairConfiguration:
    type: object
    required:
      - crt
      - key
    properties:
      crt:
        type: string
      key:
        type: string

  tlsConfiguration:
    type: object
    properties:
      minio:
        type: array
        items:
          $ref: "#/definitions/keyPairConfiguration"
      ca_certificates:
        type: array
        items:
          type: string

  logSearchConfiguration:
    type: object
    properties:
      storageClass:
        type: string
        default: ""
      storageSize:
        type: number
        default: 5
      image:
        type: string
      securityContext:
        type: object
        $ref: '#/definitions/securityContext'
      postgres_securityContext:
        type: object
        $ref: '#/definitions/securityContext'
      postgres_image:
        type: string
      postgres_init_image:
        type: string
  prometheusConfiguration:
    type: object
    properties:
      storageClass:
        type: string
        default: ""
      storageSize:
        type: number
        default: 5
      image:
        type: string
      sidecar_image:
        type: string
      init_image:
        type: string
      securityContext:
        type: object
        $ref: '#/definitions/securityContext'
  idpConfiguration:
    type: object
    properties:
      oidc:
        type: object
        required:
          - configuration_url
          - client_id
          - secret_id
          - claim_name
        properties:
          configuration_url:
            type: string
          client_id:
            type: string
          secret_id:
            type: string
          callback_url:
            type: string
          claim_name:
            type: string
          scopes:
            type: string
      keys:
        type: array
        items:
          type: object
          required:
            - access_key
            - secret_key
          properties:
            access_key:
              type: string
            secret_key:
              type: string
      active_directory:
        type: object
        required:
          - url
        properties:
          url:
            type: string
          username_format:
            type: string
          username_search_filter:
            type: string
          group_search_base_dn:
            type: string
          group_search_filter:
            type: string
          group_name_attribute:
            type: string
          skip_tls_verification:
            type: boolean
          server_insecure:
            type: boolean
          server_start_tls:
            type: boolean
          lookup_bind_dn:
            type: string
          lookup_bind_password:
            type: string
          user_dn_search_base_dn:
            type: string
          user_dn_search_filter:
            type: string
          user_dns:
            type: array
            items:
              type: string

  encryptionConfiguration:
    allOf:
      - $ref: "#/definitions/metadataFields"
      - type: object
        properties:
          image:
            type: string
          replicas:
            type: string
          server:
            type: object
            $ref: "#/definitions/keyPairConfiguration"
          client:
            type: object
            $ref: "#/definitions/keyPairConfiguration"
          gemalto:
            type: object
            $ref: "#/definitions/gemaltoConfiguration"
          aws:
            type: object
            $ref: "#/definitions/awsConfiguration"
          vault:
            type: object
            $ref: "#/definitions/vaultConfiguration"
          gcp:
            type: object
            $ref: "#/definitions/gcpConfiguration"
          azure:
            type: object
            $ref: "#/definitions/azureConfiguration"
          securityContext:
            type: object
            $ref: '#/definitions/securityContext'

  vaultConfiguration:
    type: object
    required:
      - endpoint
      - approle
    properties:
      endpoint:
        type: string
      engine:
        type: string
      namespace:
        type: string
      prefix:
        type: string
      approle:
        type: object
        required:
          - id
          - secret
        properties:
          engine:
            type: string
          id:
            type: string
          secret:
            type: string
          retry:
            type: integer
            format: int64
      status:
        type: object
        properties:
          ping:
            type: integer
            format: int64
      tls:
        type: object
        properties:
          key:
            type: string
          crt:
            type: string
          ca:
            type: string

  awsConfiguration:
    type: object
    required:
      - secretsmanager
    properties:
      secretsmanager:
        type: object
        required:
          - endpoint
          - region
          - credentials
        properties:
          endpoint:
            type: string
          region:
            type: string
          kmskey:
            type: string
          credentials:
            type: object
            required:
              - accesskey
              - secretkey
            properties:
              accesskey:
                type: string
              secretkey:
                type: string
              token:
                type: string

  gemaltoConfiguration:
    type: object
    required:
      - keysecure
    properties:
      keysecure:
        type: object
        required:
          - endpoint
          - credentials
        properties:
          endpoint:
            type: string
          credentials:
            type: object
            required:
              - token
              - domain
            properties:
              token:
                type: string
              domain:
                type: string
              retry:
                type: integer
                format: int64
          tls:
            type: object
            required:
              - ca
            properties:
              ca:
                type: string

  gcpConfiguration:
    type: object
    required:
      - secretmanager
    properties:
      secretmanager:
        type: object
        required:
          - project_id
        properties:
          project_id:
            type: string
          endpoint:
            type: string
          credentials:
            type: object
            properties:
              client_email:
                type: string
              client_id:
                type: string
              private_key_id:
                type: string
              private_key:
                type: string

  azureConfiguration:
    type: object
    required:
      - keyvault
    properties:
      keyvault:
        type: object
        required:
          - endpoint
        properties:
          endpoint:
            type: string
          credentials:
            type: object
            required:
              - tenant_id
              - client_id
              - client_secret
            properties:
              tenant_id:
                type: string
              client_id:
                type: string
              client_secret:
                type: string

  createTenantResponse:
    type: object
    properties:
      externalIDP:
        type: boolean
      console:
        type: array
        items:
          $ref: "#/definitions/tenantResponseItem"

  tenantResponseItem:
    type: object
    properties:
      access_key:
        type: string
      secret_key:
        type: string

  tenantPod:
    type: object
    required:
      - name
    properties:
      name:
        type: string
      status:
        type: string
      timeCreated:
        type: integer
      podIP:
        type: string
      restarts:
        type: integer
      node:
        type: string

  pool:
    type: object
    required:
      - servers
      - volumes_per_server
      - volume_configuration
    properties:
      name:
        type: string
      servers:
        type: integer
      volumes_per_server:
        type: integer
        format: int32
      volume_configuration:
        type: object
        required:
          - size
        properties:
          size:
            type: integer
          storage_class_name:
            type: string
          labels:
            type: object
            additionalProperties:
              type: string
          annotations:
            type: object
            additionalProperties:
              type: string
      resources:
        $ref: "#/definitions/poolResources"
      node_selector:
        type: object
        additionalProperties:
          type: string
        description: "NodeSelector is a selector which must be true for
          the pod to fit on a node. Selector which must match a node's
          labels for the pod to be scheduled on that node. More info:
          https://kubernetes.io/docs/concepts/configuration/assign-pod-node/"
      affinity:
        $ref: "#/definitions/poolAffinity"
      tolerations:
        $ref: "#/definitions/poolTolerations"
      securityContext:
        type: object
        $ref: '#/definitions/securityContext'

  poolTolerations:
    description: Tolerations allows users to set entries like effect,
      key, operator, value.
    items:
      description: The pod this Toleration is attached to tolerates
        any taint that matches the triple <key,value,effect> using
        the matching operator <operator>.
      properties:
        effect:
          description: Effect indicates the taint effect to match.
            Empty means match all taint effects. When specified, allowed
            values are NoSchedule, PreferNoSchedule and NoExecute.
          type: string
        key:
          description: Key is the taint key that the toleration applies
            to. Empty means match all taint keys. If the key is empty,
            operator must be Exists; this combination means to match
            all values and all keys.
          type: string
        operator:
          description: Operator represents a key's relationship to
            the value. Valid operators are Exists and Equal. Defaults
            to Equal. Exists is equivalent to wildcard for value,
            so that a pod can tolerate all taints of a particular
            category.
          type: string
        tolerationSeconds:
          $ref: "#/definitions/poolTolerationSeconds"
        value:
          description: Value is the taint value the toleration matches
            to. If the operator is Exists, the value should be empty,
            otherwise just a regular string.
          type: string
      type: object
    type: array

  poolTolerationSeconds:
    description: TolerationSeconds represents the period of
      time the toleration (which must be of effect NoExecute,
      otherwise this field is ignored) tolerates the taint.
      By default, it is not set, which means tolerate the taint
      forever (do not evict). Zero and negative values will
      be treated as 0 (evict immediately) by the system.
    type: object
    required:
      - seconds
    properties:
      seconds:
        type: integer
        format: int64

  poolResources:
    description: If provided, use these requests and limit for cpu/memory
      resource allocation
    properties:
      limits:
        additionalProperties:
          type: integer
          format: int64
        description: "Limits describes the maximum amount of compute
          resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"
        type: object
      requests:
        additionalProperties:
          additionalProperties:
          type: integer
          format: int64
        description: "Requests describes the minimum amount of compute
          resources required. If Requests is omitted for a container,
          it defaults to Limits if that is explicitly specified, otherwise
          to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"
        type: object
    type: object

  poolAffinity:
    description: If specified, affinity will define the pod's scheduling
      constraints
    properties:
      nodeAffinity:
        description: Describes node affinity scheduling rules for
          the pod.
        properties:
          preferredDuringSchedulingIgnoredDuringExecution:
            description: The scheduler will prefer to schedule pods
              to nodes that satisfy the affinity expressions specified
              by this field, but it may choose a node that violates
              one or more of the expressions. The node that is most
              preferred is the one with the greatest sum of weights,
              i.e. for each node that meets all of the scheduling
              requirements (resource request, requiredDuringScheduling
              affinity expressions, etc.), compute a sum by iterating
              through the elements of this field and adding "weight"
              to the sum if the node matches the corresponding matchExpressions;
              the node(s) with the highest sum are the most preferred.
            items:
              description: An empty preferred scheduling term matches
                all objects with implicit weight 0 (i.e. it's a no-op).
                A null preferred scheduling term matches no objects
                (i.e. is also a no-op).
              properties:
                preference:
                  description: A node selector term, associated with
                    the corresponding weight.
                  $ref: "#/definitions/nodeSelectorTerm"
                  type: object
                weight:
                  description: Weight associated with matching the
                    corresponding nodeSelectorTerm, in the range 1-100.
                  format: int32
                  type: integer
              required:
                - preference
                - weight
              type: object
            type: array
          requiredDuringSchedulingIgnoredDuringExecution:
            description: If the affinity requirements specified by
              this field are not met at scheduling time, the pod will
              not be scheduled onto the node. If the affinity requirements
              specified by this field cease to be met at some point
              during pod execution (e.g. due to an update), the system
              may or may not try to eventually evict the pod from
              its node.
            properties:
              nodeSelectorTerms:
                description: Required. A list of node selector terms.
                  The terms are ORed.
                items:
                  $ref: "#/definitions/nodeSelectorTerm"
                type: array
            required:
              - nodeSelectorTerms
            type: object
        type: object
      podAffinity:
        description: Describes pod affinity scheduling rules (e.g.
          co-locate this pod in the same node, pool, etc. as some
          other pod(s)).
        properties:
          preferredDuringSchedulingIgnoredDuringExecution:
            description: The scheduler will prefer to schedule pods
              to nodes that satisfy the affinity expressions specified
              by this field, but it may choose a node that violates
              one or more of the expressions. The node that is most
              preferred is the one with the greatest sum of weights,
              i.e. for each node that meets all of the scheduling
              requirements (resource request, requiredDuringScheduling
              affinity expressions, etc.), compute a sum by iterating
              through the elements of this field and adding "weight"
              to the sum if the node has pods which matches the corresponding
              podAffinityTerm; the node(s) with the highest sum are
              the most preferred.
            items:
              description:
                The weights of all of the matched WeightedPodAffinityTerm
                fields are added per-node to find the most preferred
                node(s)
              properties:
                podAffinityTerm:
                  $ref: "#/definitions/podAffinityTerm"
                weight:
                  description: weight associated with matching the
                    corresponding podAffinityTerm, in the range 1-100.
                  format: int32
                  type: integer
              required:
                - podAffinityTerm
                - weight
              type: object
            type: array
          requiredDuringSchedulingIgnoredDuringExecution:
            description: If the affinity requirements specified by
              this field are not met at scheduling time, the pod will
              not be scheduled onto the node. If the affinity requirements
              specified by this field cease to be met at some point
              during pod execution (e.g. due to a pod label update),
              the system may or may not try to eventually evict the
              pod from its node. When there are multiple elements,
              the lists of nodes corresponding to each podAffinityTerm
              are intersected, i.e. all terms must be satisfied.
            items:
              $ref: "#/definitions/podAffinityTerm"
            type: array
        type: object
      podAntiAffinity:
        description: Describes pod anti-affinity scheduling rules
          (e.g. avoid putting this pod in the same node, pool, etc.
          as some other pod(s)).
        properties:
          preferredDuringSchedulingIgnoredDuringExecution:
            description: The scheduler will prefer to schedule pods
              to nodes that satisfy the anti-affinity expressions
              specified by this field, but it may choose a node that
              violates one or more of the expressions. The node that
              is most preferred is the one with the greatest sum of
              weights, i.e. for each node that meets all of the scheduling
              requirements (resource request, requiredDuringScheduling
              anti-affinity expressions, etc.), compute a sum by iterating
              through the elements of this field and adding "weight"
              to the sum if the node has pods which matches the corresponding
              podAffinityTerm; the node(s) with the highest sum are
              the most preferred.
            items:
              description:
                The weights of all of the matched WeightedPodAffinityTerm
                fields are added per-node to find the most preferred
                node(s)
              properties:
                podAffinityTerm:
                  $ref: "#/definitions/podAffinityTerm"
                weight:
                  description: weight associated with matching the
                    corresponding podAffinityTerm, in the range 1-100.
                  format: int32
                  type: integer
              required:
                - podAffinityTerm
                - weight
              type: object
            type: array
          requiredDuringSchedulingIgnoredDuringExecution:
            description: If the anti-affinity requirements specified
              by this field are not met at scheduling time, the pod
              will not be scheduled onto the node. If the anti-affinity
              requirements specified by this field cease to be met
              at some point during pod execution (e.g. due to a pod
              label update), the system may or may not try to eventually
              evict the pod from its node. When there are multiple
              elements, the lists of nodes corresponding to each podAffinityTerm
              are intersected, i.e. all terms must be satisfied.
            items:
              $ref: "#/definitions/podAffinityTerm"
            type: array
        type: object
    type: object

  nodeSelectorTerm:
    type: object
    description: A null or empty node selector term
      matches no objects. The requirements of them are
      ANDed. The TopologySelectorTerm type implements
      a subset of the NodeSelectorTerm.
    properties:
      matchExpressions:
        description: A list of node selector requirements
          by node's labels.
        items:
          description: A node selector requirement is
            a selector that contains values, a key,
            and an operator that relates the key and
            values.
          properties:
            key:
              description: The label key that the selector
                applies to.
              type: string
            operator:
              description: Represents a key's relationship
                to a set of values. Valid operators
                are In, NotIn, Exists, DoesNotExist.
                Gt, and Lt.
              type: string
            values:
              description: An array of string values.
                If the operator is In or NotIn, the
                values array must be non-empty. If the
                operator is Exists or DoesNotExist,
                the values array must be empty. If the
                operator is Gt or Lt, the values array
                must have a single element, which will
                be interpreted as an integer. This array
                is replaced during a strategic merge
                patch.
              items:
                type: string
              type: array
          required:
            - key
            - operator
          type: object
        type: array
      matchFields:
        description: A list of node selector requirements
          by node's fields.
        items:
          description: A node selector requirement is
            a selector that contains values, a key,
            and an operator that relates the key and
            values.
          properties:
            key:
              description: The label key that the selector
                applies to.
              type: string
            operator:
              description: Represents a key's relationship
                to a set of values. Valid operators
                are In, NotIn, Exists, DoesNotExist.
                Gt, and Lt.
              type: string
            values:
              description: An array of string values.
                If the operator is In or NotIn, the
                values array must be non-empty. If the
                operator is Exists or DoesNotExist,
                the values array must be empty. If the
                operator is Gt or Lt, the values array
                must have a single element, which will
                be interpreted as an integer. This array
                is replaced during a strategic merge
                patch.
              items:
                type: string
              type: array
          required:
            - key
            - operator
          type: object
        type: array

  podAffinityTerm:
    description: Required. A pod affinity term, associated
      with the corresponding weight.
    properties:
      labelSelector:
        description: A label query over a set of resources,
          in this case pods.
        properties:
          matchExpressions:
            description: matchExpressions is a list
              of label selector requirements. The requirements
              are ANDed.
            items:
              description: A label selector requirement
                is a selector that contains values,
                a key, and an operator that relates
                the key and values.
              properties:
                key:
                  description: key is the label key
                    that the selector applies to.
                  type: string
                operator:
                  description: operator represents a
                    key's relationship to a set of values.
                    Valid operators are In, NotIn, Exists
                    and DoesNotExist.
                  type: string
                values:
                  description: values is an array of
                    string values. If the operator is
                    In or NotIn, the values array must
                    be non-empty. If the operator is
                    Exists or DoesNotExist, the values
                    array must be empty. This array
                    is replaced during a strategic merge
                    patch.
                  items:
                    type: string
                  type: array
              required:
                - key
                - operator
              type: object
            type: array
          matchLabels:
            additionalProperties:
              type: string
            description: matchLabels is a map of {key,value}
              pairs. A single {key,value} in the matchLabels
              map is equivalent to an element of matchExpressions,
              whose key field is "key", the operator
              is "In", and the values array contains
              only "value". The requirements are ANDed.
            type: object
        type: object
      namespaces:
        description: namespaces specifies which namespaces
          the labelSelector applies to (matches against);
          null or empty list means "this pod's namespace"
        items:
          type: string
        type: array
      topologyKey:
        description: This pod should be co-located (affinity)
          or not co-located (anti-affinity) with the
          pods matching the labelSelector in the specified
          namespaces, where co-located is defined as
          running on a node whose value of the label
          with key topologyKey matches that of any node
          on which any of the selected pods is running.
          Empty topologyKey is not allowed.
        type: string
    required:
      - topologyKey
    type: object

  resourceQuota:
    type: object
    properties:
      name:
        type: string
      elements:
        type: array
        items:
          $ref: "#/definitions/resourceQuotaElement"

  resourceQuotaElement:
    type: object
    properties:
      name:
        type: string
      hard:
        type: integer
        format: int64
      used:
        type: integer
        format: int64

  deleteTenantRequest:
    type: object
    properties:
      delete_pvcs:
        type: boolean

  poolUpdateRequest:
    type: object
    required:
      - pools
    properties:
      pools:
        type: array
        items:
          $ref: "#/definitions/pool"

  maxAllocatableMemResponse:
    type: object
    properties:
      max_memory:
        type: integer
        format: int64

  parityResponse:
    type: array
    items:
      type: string


  subscriptionValidateRequest:
    type: object
    properties:
      license:
        type: string
      email:
        type: string
      password:
        type: string
  license:
    type: object
    properties:
      email:
        type: string
      organization:
        type: string
      account_id:
        type: integer
      storage_capacity:
        type: integer
      plan:
        type: string
      expires_at:
        type: string

  getDirectCSIDriveListResponse:
    type: object
    properties:
      drives:
        type: array
        items:
          $ref: "#/definitions/directCSIDriveInfo"

  directCSIDriveInfo:
    type: object
    properties:
      drive:
        type: string
      capacity:
        type: number
        format: int64
      allocated:
        type: number
        format: int64
      volumes:
        type: number
        format: int64
      node:
        type: string
      status:
        type: string
      message:
        type: string

  getDirectCSIVolumeListResponse:
    type: object
    properties:
      volumes:
        type: array
        items:
          $ref: "#/definitions/directCSIVolumeInfo"

  directCSIVolumeInfo:
    type: object
    properties:
      volume:
        type: string
      capacity:
        type: number
        format: int64
      node:
        type: string
      drive:
        type: string


  csiFormatErrorResponse:
    type: object
    properties:
      node:
        type: string
      drive:
        type: string
      error:
        type: string

  formatDirectCSIDrivesResponse:
    type: object
    properties:
      formatIssuesList:
        type: array
        items:
          $ref: "#/definitions/csiFormatErrorResponse"

  tenantYAML:
    type: object
    properties:
      yaml:
        type: string

  listPVCsResponse:
    type: object
    properties:
      pvcs:
        type: array
        items:
          $ref: "#/definitions/pvcsListResponse"

  pvcsListResponse:
    type: object
    properties:
      namespace:
        type: string
      name:
        type: string
      status:
        type: string
      volume:
        type: string
      tenant:
        type: string
      capacity:
        type: string
      storageClass:
        type: string
      age:
        type: string

  nodeLabels:
    type: object
    additionalProperties:
      type: array
      items:
        type: string

  namespace:
    type: object
    required:
      - name
    properties:
      name:
        type: string

  eventListWrapper:
    type: array
    items:
      $ref: "#/definitions/eventListElement"

  eventListElement:
    type: object
    properties:
      namespace:
        type: string
      last_seen:
        type: integer
        format: int64
      event_type:
        type: string
      reason:
        type: string
      object:
        type: string
      message:
        type: string

  formatConfiguration:
    type: object
    required:
      - drives
      - force
    properties:
      drives:
        type: array
        minLength: 1
        items:
          type: string
      force:
        type: boolean
  securityContext:
     type: object
     required:
       - runAsUser
       - runAsGroup
       - runAsNonRoot
       - fsGroup
     properties:
       runAsUser:
         type: string
       runAsGroup:
         type: string
       runAsNonRoot:
         type: boolean
       fsGroup:
         type: string
