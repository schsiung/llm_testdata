# Default values for fluid.
# This is a YAML-formatted file.
# Declare variables to be passed into your templates.

workdir: /tmp
crdUpgrade:
  image: fluidcloudnative/fluid-crd-upgrader:v0.9.0-085b23e

##  if unspecified, will use built-in variable `.Release.Namespace`.
namespace: fluid-system

image:
  imagePullSecrets: []

dataset:
  replicas: 1
  controller:
    image: fluidcloudnative/dataset-controller:v0.9.0-085b23e

csi:
  featureGates: "FuseRecovery=false"
  config:
    hostNetwork: false
  registrar:
    image: fluidcloudnative/csi-node-driver-registrar:v2.3.0
  plugins:
    image: fluidcloudnative/fluid-csi:v0.9.0-085b23e
  kubelet:
    kubeConfigFile: /etc/kubernetes/kubelet.conf
    certDir: /var/lib/kubelet/pki
    kubeConfigFile: /etc/kubernetes/kubelet.conf
    certDir: /var/lib/kubelet/pki
    rootDir: /var/lib/kubelet
  pruneFs: fuse.alluxio-fuse,fuse.jindofs-fuse,fuse.juicefs,fuse.goosefs-fuse,ossfs,alifuse.aliyun-alinas-efc

runtime:
  criticalFusePod: true
  syncRetryDuration: 15s
  mountRoot: /runtime-mnt
  alluxio:
    replicas: 1
    runtimeWorkers: 3
    portRange: 20000-26000
    portAllocatePolicy: random
    enabled: false
    init:
      image: fluidcloudnative/init-users:v0.9.0-085b23e
    controller:
      image: fluidcloudnative/alluxioruntime-controller:v0.9.0-085b23e
    runtime:
      image: alluxio/alluxio-dev:2.9.0
    fuse:
      image: alluxio/alluxio-dev:2.9.0
  jindo:
    replicas: 1
    runtimeWorkers: 3
    portRange: 18000-19999
    portAllocatePolicy: random
    enabled: false
    engine: jindofsx
    queryUfsTotal: true
    smartdata:
      image: registry.cn-shanghai.aliyuncs.com/jindofs/smartdata:4.5.2
    fuse:
      image: registry.cn-shanghai.aliyuncs.com/jindofs/jindo-fuse:4.5.2
    controller:
      image: fluidcloudnative/jindoruntime-controller:v0.9.0-085b23e
    init:
      portCheck:
        enabled: false
      image: fluidcloudnative/init-users:v0.9.0-085b23e
  goosefs:
    replicas: 1
    runtimeWorkers: 3
    portRange: 26000-32000
    portAllocatePolicy: random
    enabled: false
    init:
      image: fluidcloudnative/init-users:v0.9.0-085b23e
    controller:
      image: fluidcloudnative/goosefsruntime-controller:v0.9.0-085b23e
    runtime:
      image: ccr.ccs.tencentyun.com/qcloud/goosefs:v1.2.0
    fuse:
      image: ccr.ccs.tencentyun.com/qcloud/goosefs-fuse:v1.2.0
  juicefs:
    replicas: 1
    enabled: false
    runtimeWorkers: 3
    controller:
      image: fluidcloudnative/juicefsruntime-controller:v0.9.0-085b23e
    fuse:
      image: juicedata/juicefs-fuse:v1.0.4-4.9.2
  thin:
    replicas: 1
    enabled: false
    controller:
      image: fluidcloudnative/thinruntime-controller:v0.9.0-085b23e
  efc:
    replicas: 1
    enabled: false
    controller:
      image: fluidcloudnative/efcruntime-controller:v0.9.0-085b23e
      imagePullPolicy: Always
    init:
      image: registry.cn-zhangjiakou.aliyuncs.com/nascache/init-alifuse:v1.2.2-19dcee9
    master:
      image: registry.cn-zhangjiakou.aliyuncs.com/nascache/efc-master:v1.2.2-19dcee9
    worker:
      image: registry.cn-zhangjiakou.aliyuncs.com/nascache/efc-worker:v1.2.2-19dcee9
    fuse:
      image: registry.cn-zhangjiakou.aliyuncs.com/nascache/efc-fuse:v1.2.2-19dcee9

webhook:
  enabled: true
  image: fluidcloudnative/fluid-webhook:v0.9.0-085b23e
  replicas: 1
  timeoutSeconds: 15
  reinvocationPolicy: Never

fluidapp:
  enabled: true
  replicas: 1
  controller:
    image: fluidcloudnative/application-controller:v0.9.0-085b23e