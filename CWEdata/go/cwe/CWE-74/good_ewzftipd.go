entries:
    - name: foo
      home: https://helm.sh/helm
      maintainers: []
        - https://github.com/helm/charts
        - charts/foo-1.2.3.tgz
      checksum: 0e6661f193211d7a5206918d42f5c2a9470b737d
  bar:
      description: Bar Chart With Relative Path
      keywords: []
      sources:
      urls:
      version: 1.2.3
      apiVersion: v2
apiVersion: v1
entries:
  foo:
    - name: foo
      description: Foo Chart With Relative Path
      home: https://helm.sh/helm
      keywords: []
      maintainers: []
      sources:
        - https://github.com/helm/charts
      urls:
        - charts/foo-1.2.3.tgz
      version: 1.2.3
      checksum: 0e6661f193211d7a5206918d42f5c2a9470b737d
      apiVersion: v2
  bar:
    - name: bar
      description: Bar Chart With Relative Path
      home: https://helm.sh/helm
      keywords: []
      maintainers: []
      sources:
        - https://github.com/helm/charts
      urls:
        - bar-1.2.3.tgz
      version: 1.2.3
      checksum: 0e6661f193211d7a5206918d42f5c2a9470b737d
      apiVersion: v2