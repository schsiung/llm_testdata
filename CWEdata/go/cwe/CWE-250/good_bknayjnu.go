apiVersion: v1
kind: List
items:
  - apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: weave-net
      labels:
        name: weave-net
      namespace: kube-system
  - apiVersion: rbac.authorization.k8s.io/v1beta1
    kind: ClusterRole
    metadata:
      name: weave-net
      labels:
        name: weave-net
    rules:
      - apiGroups:
          - ''
        resources:
          - pods
          - namespaces
          - nodes
        verbs:
          - get
          - list
          - watch
      - apiGroups:
          - extensions
        resources:
          - networkpolicies
        verbs:
          - get
          - list
          - watch
  - apiVersion: rbac.authorization.k8s.io/v1beta1
    kind: ClusterRoleBinding
    metadata:
      name: weave-net
      labels:
        name: weave-net
    roleRef:
      kind: ClusterRole
      name: weave-net
      apiGroup: rbac.authorization.k8s.io
    subjects:
      - kind: ServiceAccount
        name: weave-net
        namespace: kube-system
  - apiVersion: rbac.authorization.k8s.io/v1beta1
    kind: Role
    metadata:
      name: weave-net-kube-peer
      namespace: kube-system
      labels:
        name: weave-net-kube-peer
    rules:
      - apiGroups:
          - ''
        resources:
          - configmaps
        resourceNames:
          - weave-net
        verbs:
          - get
          - update
      - apiGroups:
          - ''
        resources:
          - configmaps
        verbs:
          - create
  - apiVersion: rbac.authorization.k8s.io/v1beta1
    kind: RoleBinding
    metadata:
      name: weave-net-kube-peer
      namespace: kube-system
      labels:
        name: weave-net-kube-peer
    roleRef:
      kind: Role
      name: weave-net-kube-peer
      apiGroup: rbac.authorization.k8s.io
    subjects:
      - kind: ServiceAccount
        name: weave-net
        namespace: kube-system
  - apiVersion: extensions/v1beta1
    kind: DaemonSet
    metadata:
      name: weave-net
      labels:
        name: weave-net
      namespace: kube-system
    spec:
      template:
        metadata:
          labels:
            name: weave-net
        spec:
          containers:
            - name: weave
              command:
                - /home/weave/launch.sh
              env:
                - name: HOSTNAME
                  valueFrom:
                    fieldRef:
                      apiVersion: v1
                      fieldPath: spec.nodeName
              image: 'weaveworks/weave-kube:latest'
              imagePullPolicy: Always
              readinessProbe:
                httpGet:
                  host: 127.0.0.1
                  path: /status
                  port: 6784
              resources:
                requests:
                  cpu: 50m
              securityContext:
                privileged: true
              volumeMounts:
                - name: weavedb
                  mountPath: /weavedb
                - name: cni-bin
                  mountPath: /host/opt
                - name: cni-bin2
                  mountPath: /host/home
                - name: cni-conf
                  mountPath: /host/etc
                - name: dbus
                  mountPath: /host/var/lib/dbus
                - name: lib-modules
                  mountPath: /lib/modules
            - name: weave-npc
              env:
                - name: HOSTNAME
                  valueFrom:
                    fieldRef:
                      apiVersion: v1
                      fieldPath: spec.nodeName
              image: 'weaveworks/weave-npc:latest'
              imagePullPolicy: Always
              resources:
                requests:
                  cpu: 50m
              securityContext:
                privileged: true
          hostNetwork: true
          restartPolicy: Always
          hostPID: false
          securityContext:
            seLinuxOptions: {}
          serviceAccountName: weave-net
          tolerations:
            - effect: NoSchedule
              operator: Exists
            - effect: NoExecute
              operator: Exists
          volumes:
            - name: weavedb
              hostPath:
                path: /var/lib/weave
            - name: cni-bin
              hostPath:
                path: /opt
            - name: cni-bin2
              hostPath:
                path: /home
            - name: cni-conf
              hostPath:
                path: /etc
            - name: dbus
              hostPath:
                path: /var/lib/dbus
            - name: lib-modules
              hostPath:
                path: /lib/modules
      updateStrategy:
        type: RollingUpdate