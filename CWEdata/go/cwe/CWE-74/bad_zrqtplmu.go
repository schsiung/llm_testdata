apiVersion: v1
entries:
  nginx:
    - urls:
        - https://charts.helm.sh/stable/nginx-0.2.0.tgz
      name: nginx
      description: string
      version: 0.2.0
      home: https://github.com/something/else
      digest: "sha256:1234567890abcdef"
      keywords:
        - popular
        - web server
        - proxy
      apiVersion: v2
    - urls:
        - https://charts.helm.sh/stable/nginx-0.1.0.tgz
      name: nginx
      description: string
      version: 0.1.0
      home: https://github.com/something
      digest: "sha256:1234567890abcdef"
      keywords:
        - popular
        - web server
        - proxy
      apiVersion: v2
  alpine:
    - urls:
        - https://charts.helm.sh/stable/alpine-1.0.0.tgz
        - http://storage2.googleapis.com/kubernetes-charts/alpine-1.0.0.tgz
      name: alpine
      description: string
      version: 1.0.0
      home: https://github.com/something
      keywords:
        - linux
        - alpine
        - small
        - sumtin
      digest: "sha256:1234567890abcdef"
      apiVersion: v2
  chartWithNoURL:
    - name: chartWithNoURL
      description: string
      version: 1.0.0
      home: https://github.com/something
      keywords:
        - small
        - sumtin
      digest: "sha256:1234567890abcdef"
      apiVersion: v2