---
apiVersion: v1
kind: ServiceAccount
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-apiserver
  namespace: {{.Namespace}}
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-apiserver
rules:
- apiGroups:
  - admissionregistration.k8s.io
  resources:
  - validatingwebhookconfigurations
  - mutatingwebhookconfigurations
  verbs:
  - get
  - create
  - update
- apiGroups:
  - apiregistration.k8s.io
  resources:
  - apiservices
  verbs:
  - get
  - create
  - update
- apiGroups:
  - ""
  resources:
  - pods
  verbs:
  - get
  - list
  - delete
  - patch
- apiGroups:
  - kubevirt.io
  resources:
  - virtualmachines
  - virtualmachineinstances
  verbs:
  - get
  - list
  - watch
  - patch
- apiGroups:
  - kubevirt.io
  resources:
  - virtualmachineinstancemigrations
  verbs:
  - create
  - get
  - list
  - watch
  - patch
- apiGroups:
  - kubevirt.io
  resources:
  - virtualmachineinstancepresets
  verbs:
  - watch
  - list
- apiGroups:
  - ""
  resources:
  - configmaps
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - ""
  resources:
  - limitranges
  verbs:
  - watch
  - list
- apiGroups:
  - apiextensions.k8s.io
  resources:
  - customresourcedefinitions
  verbs:
  - get
  - list
  - watch
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-apiserver
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: kubevirt-apiserver
subjects:
- kind: ServiceAccount
  name: kubevirt-apiserver
  namespace: {{.Namespace}}
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-apiserver-auth-delegator
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:auth-delegator
subjects:
- kind: ServiceAccount
  name: kubevirt-apiserver
  namespace: {{.Namespace}}
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-apiserver
  namespace: {{.Namespace}}
rules:
- apiGroups:
  - ""
  resources:
  - secrets
  verbs:
  - get
  - list
  - delete
  - update
  - create
- apiGroups:
  - ""
  resources:
  - configmaps
  verbs:
  - get
  - list
  - watch
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-apiserver
  namespace: {{.Namespace}}
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: kubevirt-apiserver
subjects:
- kind: ServiceAccount
  name: kubevirt-apiserver
  namespace: {{.Namespace}}
---
apiVersion: v1
kind: ServiceAccount
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-controller
  namespace: {{.Namespace}}
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-controller
rules:
- apiGroups:
  - policy
  resources:
  - poddisruptionbudgets
  verbs:
  - get
  - list
  - watch
  - delete
  - create
  - patch
- apiGroups:
  - ""
  resources:
  - pods
  - configmaps
  - endpoints
  verbs:
  - get
  - list
  - watch
  - delete
  - update
  - create
- apiGroups:
  - ""
  resources:
  - events
  verbs:
  - update
  - create
  - patch
- apiGroups:
  - ""
  resources:
  - pods/finalizers
  verbs:
  - update
- apiGroups:
  - ""
  resources:
  - nodes
  verbs:
  - get
  - list
  - watch
  - update
  - patch
- apiGroups:
  - ""
  resources:
  - persistentvolumeclaims
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - kubevirt.io
  resources:
  - '*'
  verbs:
  - '*'
- apiGroups:
  - cdi.kubevirt.io
  resources:
  - '*'
  verbs:
  - '*'
- apiGroups:
  - k8s.cni.cncf.io
  resources:
  - network-attachment-definitions
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - apiextensions.k8s.io
  resources:
  - customresourcedefinitions
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - authorization.k8s.io
  resources:
  - subjectaccessreviews
  verbs:
  - create
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-controller
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: kubevirt-controller
subjects:
- kind: ServiceAccount
  name: kubevirt-controller
  namespace: {{.Namespace}}
---
apiVersion: v1
kind: ServiceAccount
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-handler
  namespace: {{.Namespace}}
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-handler
rules:
- apiGroups:
  - kubevirt.io
  resources:
  - virtualmachineinstances
  verbs:
  - update
  - list
  - watch
- apiGroups:
  - ""
  resources:
  - persistentvolumeclaims
  verbs:
  - get
- apiGroups:
  - ""
  resources:
  - nodes
  verbs:
  - patch
- apiGroups:
  - ""
  resources:
  - events
  verbs:
  - create
  - patch
- apiGroups:
  - apiextensions.k8s.io
  resources:
  - customresourcedefinitions
  verbs:
  - get
  - list
  - watch
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-handler
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: kubevirt-handler
subjects:
- kind: ServiceAccount
  name: kubevirt-handler
  namespace: {{.Namespace}}
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-handler
  namespace: {{.Namespace}}
rules:
- apiGroups:
  - ""
  resources:
  - configmaps
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - ""
  resources:
  - secrets
  verbs:
  - create
  - get
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-handler
  namespace: {{.Namespace}}
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: kubevirt-handler
subjects:
- kind: ServiceAccount
  name: kubevirt-handler
  namespace: {{.Namespace}}
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-monitoring
  namespace: {{.Namespace}}
rules:
- apiGroups:
  - ""
  resources:
  - services
  - endpoints
  - pods
  verbs:
  - get
  - list
  - watch
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-monitoring
  namespace: {{.Namespace}}
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: kubevirt-monitoring
subjects:
- kind: ServiceAccount
  name: prometheus-k8s
  namespace: openshift-monitoring