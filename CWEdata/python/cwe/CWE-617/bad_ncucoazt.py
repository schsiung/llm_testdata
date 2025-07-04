# RUN: not tfg-translate -graphdef-to-mlir %s 2>&1 | FileCheck %s

# CHECK: Function 'foo' has empty control result name

library {
  function {
    signature {
      name: "foo"
      control_output: "output"
    }
    node_def {
      name: "y"
      op: "NoOp"
      attr {
        key: "T"
        value {
          placeholder: "T"
        }
      }
    }
    control_ret {
      key: "output"
      value: ""
    }
  }
}