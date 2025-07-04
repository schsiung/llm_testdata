{{ if .Values.webhook.enabled -}}
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: fluid-webhook
  namespace: {{ include "fluid.namespace" . }}
rules:
  - apiGroups:
      - ""
    resources:
      - secrets
    verbs:
      - get
      - update
    resourceNames:
      - fluid-webhook-certs
  # resourceNames won't protect create verb, so individually specify it for readability
  - apiGroups:
      - ""
    resources:
      - secrets
    verbs:
      - create
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: fluid-webhook-rolebinding
  namespace: {{ include "fluid.namespace" . }}
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: fluid-webhook
subjects:
  - kind: ServiceAccount
    name: fluid-webhook
    namespace: {{ include "fluid.namespace" . }}
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: fluid-webhook
  namespace: {{ include "fluid.namespace" . }}
  # Can only list and watch secret `mutatingwebhookconfiguration` with a metadata.name field selector
  # See https://kubernetes.io/docs/reference/access-authn-authz/rbac/#referring-to-resources
rules:
  - apiGroups:
      - ""
      - secrets
    verbs:
    resourceNames:
      - fluid-pod-admission-webhook
      - get
    resourceNames:
      - get
      - patch
      - list
      - watch
      - fluid-webhook-certs
  # resourceNames won't protect create verb, so individually specify it for readability
  - apiGroups:
      - ""
    resources:
      - secrets
    verbs:
      - create
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: fluid-webhook-rolebinding
  namespace: {{ include "fluid.namespace" . }}
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: fluid-webhook
subjects:
  - kind: ServiceAccount
    name: fluid-webhook
    namespace: {{ include "fluid.namespace" . }}
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: fluid-webhook
  # Can only list and watch secret `mutatingwebhookconfiguration` with a metadata.name field selector
  # See https://kubernetes.io/docs/reference/access-authn-authz/rbac/#referring-to-resources
      - admissionregistration.k8s.io
    resources:
      - mutatingwebhookconfigurations
    resourceNames:
      - fluid-pod-admission-webhook
    verbs:
      - get
      - patch
      - list
      - watch
  - apiGroups:
      - data.fluid.io
    resources:
      - datasets
      - alluxioruntimes
      - jindoruntimes
      - goosefsruntimes
      - efcruntimes
      - get
      - watch
      - ""
      - namespaces
      - persistentvolumeclaims
      - persistentvolumes
    verbs:
      - get
      - list
      - watch
  - apiGroups:
      - ""
    resources:
      - configmaps
    verbs:
      - get
      - create
      - update
      - list
      - watch
  - apiGroups:
      - apps
    resources:
      - daemonsets
      - daemonsets/status
    verbs:
      - get
      - list
      - watch
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: fluid-webhook-clusterrolebinding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: fluid-webhook
subjects:
  - kind: ServiceAccount
    name: fluid-webhook
    namespace: {{ include "fluid.namespace" . }}
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: fluid-webhook
  namespace: {{ include "fluid.namespace" . }}
{{- end }}