apiVersion: v1
kind: ServiceAccount
metadata:
  name: grafana-agent
  namespace: ${NAMESPACE}
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: grafana-agent
rules:
- apiGroups:
  - ""
  resources:
  - nodes
  - nodes/proxy
  - services
  - endpoints
  - pods
  verbs:
  - get
  - list
  - watch
- nonResourceURLs:
  - /metrics
  verbs:
  - get
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: grafana-agent
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: grafana-agent
subjects:
- kind: ServiceAccount
  name: grafana-agent
  namespace: ${NAMESPACE}
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: grafana-agent
  namespace: ${NAMESPACE}
spec:
  minReadySeconds: 10
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      name: grafana-agent
  template:
    metadata:
      labels:
        name: grafana-agent
    spec:
      containers:
      - args:
        - -config.file=/etc/agent/agent.yaml
        command:
        - /bin/agent
        env:
        - name: HOSTNAME
          valueFrom:
            fieldRef:
              fieldPath: spec.nodeName
        imagePullPolicy: IfNotPresent
        image: grafana/agent:v0.21.2
        name: agent
        ports:
        - containerPort: 12345
          name: http-metrics
        volumeMounts:
        - mountPath: /etc/agent
          name: grafana-agent
      serviceAccount: grafana-agent
      volumes:
      - configMap:
          name: grafana-agent
        name: grafana-agent