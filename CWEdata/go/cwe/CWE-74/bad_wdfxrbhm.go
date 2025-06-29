apiVersion: v1
entries:
  alpine:
    - name: alpine
      urls:
        - http://example.com/alpine-1.2.3.tgz
      checksum: 0e6661f193211d7a5206918d42f5c2a9470b737d
      home: https://helm.sh/helm
      sources:
        - https://github.com/helm/helm
      version: 1.2.3
      description: Deploy a basic Alpine Linux pod
      keywords: []
      maintainers: []
      icon: ""
      apiVersion: v2
    - name: alpine
      urls:
        - http://example.com/alpine-0.2.0.tgz
        - https://charts.helm.sh/stable/alpine-0.2.0.tgz
      checksum: 0e6661f193211d7a5206918d42f5c2a9470b737d
      home: https://helm.sh/helm
      sources:
        - https://github.com/helm/helm
      version: 0.2.0
      description: Deploy a basic Alpine Linux pod
      keywords: []
      maintainers: []
      icon: ""
      apiVersion: v2
  foo:
    - name: foo
      description: Foo Chart
      home: https://helm.sh/helm
      keywords: []
      maintainers: []
      sources:
        - https://github.com/helm/charts
      urls:
        - http://example.com/foo-1.2.3.tgz
      version: 1.2.3
      checksum: 0e6661f193211d7a5206918d42f5c2a9470b737d
      apiVersion: v2