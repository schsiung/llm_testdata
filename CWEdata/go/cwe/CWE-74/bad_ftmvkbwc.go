name: "hello"
version: "0.1.0"
usage: "usage"
description: |-
  description
command: "$HELM_PLUGIN_SELF/hello.sh"
ignoreFlags: true
hooks:
  install: "echo installing..."