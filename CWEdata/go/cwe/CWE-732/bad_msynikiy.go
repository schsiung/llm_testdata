---
apiVersion: v1
kind: ServiceAccount
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-operator
  namespace: {{.Namespace}}
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  labels:
    kubevirt.io: ""
  name: kubevirt-operator
rules:
- apiGroups:
  - kubevirt.io
  resources:
  - kubevirts
  verbs:
  - get
  - list
  - watch
  - patch
  - update
  - patch
- apiGroups:
  - ""
  resources:
  - serviceaccounts
  - services
  - endpoints
  - pods/exec
  verbs:
  - get
  - list
  - watch
  - create
  - update
  - delete
  - patch
- apiGroups:
  - batch
  resources:
  - jobs
  verbs:
  - get
  - list
  - watch
  - create
  - delete
  - patch
- apiGroups:
  - apps
  resources:
  - deployments
  - daemonsets
  verbs:
  - get
  - list
  - watch
  - create
  - delete
  - patch
- apiGroups:
  - rbac.authorization.k8s.io
  resources:
  - clusterroles
  - clusterrolebindings
  - roles
  - rolebindings
  verbs:
  - get
  - list
  - watch
  - create
  - delete
  - patch
  - update
- apiGroups:
  - apiextensions.k8s.io
  resources:
  - customresourcedefinitions
  verbs:
  - get
  - list
  - watch
  - create
  - delete
  - patch
- apiGroups:
  - security.openshift.io
  resources:
  - securitycontextconstraints
  verbs:
  - create
  - get
  - list
  - watch
- apiGroups:
  - security.openshift.io
  resourceNames:
  - privileged
  resources:
  - securitycontextconstraints
  verbs:
  - get
  - patch
  - update
- apiGroups:
  - security.openshift.io
  resourceNames:
  - kubevirt-handler
  - kubevirt-controller
  resources:
  - securitycontextconstraints
  verbs:
  - get
  - list
  - watch
  - update
  - delete
- apiGroups:
  - admissionregistration.k8s.io
  resources:
  - validatingwebhookconfigurations
  verbs:
  - get
  - list
  - watch
  - create
  - delete
  - update
  - patch
- apiGroups:
  - monitoring.coreos.com
  resources:
  - servicemonitors
  - prometheusrules
  verbs:
  - get
  - list
  - watch
  - create
  - delete
  - update
  - patch
- apiGroups:
  - subresources.kubevirt.io
  resources:
  - virtualmachines/start
  - virtualmachines/stop
  - virtualmachines/restart
  verbs:
  - put
- apiGroups:
  - ""
  resources:
  - namespaces
  verbs:
  - get
  - list
  - watch
  - patch
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
- apiGroups:
  - subresources.kubevirt.io
  resources:
  - version
  verbs:
  - get
  - list
- apiGroups:
  - subresources.kubevirt.io
  resources:
  - virtualmachineinstances/console
  - virtualmachineinstances/vnc
  - virtualmachineinstances/pause
  - virtualmachineinstances/unpause
  verbs:
  - get
- apiGroups:
  - subresources.kubevirt.io
  resources:
  - virtualmachines/start
  - virtualmachines/stop
  - virtualmachines/restart
  verbs:
  - update
- apiGroups:
  - kubevirt.io
  resources:
  - virtualmachines
  - virtualmachineinstances
  - virtualmachineinstancepresets
  - virtualmachineinstancereplicasets
  - virtualmachineinstancemigrations
  verbs:
  - get
  - delete
  - create
  - update
  - patch
  - list
  - watch
  - deletecollection
- apiGroups:
  - subresources.kubevirt.io
  resources:
  - virtualmachineinstances/console
  - virtualmachineinstances/vnc
  - virtualmachineinstances/pause
  - virtualmachineinstances/unpause
  verbs:
  - get
- apiGroups:
  - subresources.kubevirt.io
  resources:
  - virtualmachines/start
  - virtualmachines/stop
  - virtualmachines/restart
  verbs:
  - update
- apiGroups:
  - kubevirt.io
  resources:
  - virtualmachines
  - virtualmachineinstances
  - virtualmachineinstancepresets
  - virtualmachineinstancereplicasets
  - virtualmachineinstancemigrations
  verbs:
  - get
  - delete
  - create
  - update
  - patch
  - list
  - watch
- apiGroups:
  - kubevirt.io
  resources:
  - virtualmachines
  - virtualmachineinstances
  - virtualmachineinstancepresets
  - virtualmachineinstancereplicasets
  - virtualmachineinstancemigrations
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - authentication.k8s.io
  resources:
  - tokenreviews
  verbs:
  - create
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
  name: kubevirt-operator
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: kubevirt-operator
subjects:
- kind: ServiceAccount
  name: kubevirt-operator
  namespace: {{.Namespace}}