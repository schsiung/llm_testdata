filesystem: "root"
mode: 0644
path: "/etc/kubernetes/kubelet.conf"
contents:
  inline: |
    kind: KubeletConfiguration
    apiVersion: kubelet.config.k8s.io/v1beta1
    authentication:
      x509:
        clientCAFile: /etc/kubernetes/kubelet-ca.crt
      anonymous:
        enabled: false
    cgroupDriver: systemd
    clusterDNS:
      - {{.ClusterDNSIP}}
    clusterDomain: cluster.local
    containerLogMaxSize: 50Mi
    maxPods: 250
    kubeAPIQPS: 50
    kubeAPIBurst: 100
    rotateCertificates: true
    serializeImagePulls: false
    staticPodPath: /etc/kubernetes/manifests
    systemReserved:
      cpu: 500m
      memory: 1Gi
      ephemeral-storage: 1Gi
    featureGates:
      IPv6DualStack: true
      LegacyNodeRoleBehavior: false
      NodeDisruptionExclusion: true
      RotateKubeletServerCertificate: true
      SCTPSupport: true
      ServiceNodeExclusion: true
      SupportPodPidsLimit: true
    serverTLSBootstrap: true