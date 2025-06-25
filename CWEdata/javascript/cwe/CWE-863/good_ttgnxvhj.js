  "contract_name": "ENS",
    {
      "inputs": [
          "name": "node",
        }
      "name": "resolver",
        {
          "type": "address"
      ],
      "type": "function"
    {
      "inputs": [
          "name": "node",
        }
      "name": "owner",
        {
          "type": "address"
      ],
      "type": "function"
    {
      "inputs": [
          "name": "node",
        },
          "name": "label",
        },
          "name": "owner",
        }
      "name": "setSubnodeOwner",
      "payable": false,
    },
      "constant": false,
        {
          "type": "bytes32"
        {
          "type": "uint64"
      ],
      "outputs": [],
      "type": "function"
    {
      "inputs": [
          "name": "node",
        }
      "name": "ttl",
        {
          "type": "uint64"
      ],
      "type": "function"
    {
      "inputs": [
          "name": "node",
        },
          "name": "resolver",
        }
      "name": "setResolver",
      "payable": false,
    },
      "constant": false,
        {
          "type": "bytes32"
        {
          "type": "address"
      ],
      "outputs": [],
      "type": "function"
    {
      "payable": false,
    },
      "anonymous": false,
        {
          "name": "node",
        },
          "indexed": false,
          "type": "address"
      ],
      "type": "event"
    {
      "inputs": [
          "indexed": true,
          "type": "bytes32"
        {
          "name": "label",
        },
          "indexed": false,
          "type": "address"
      ],
      "type": "event"
    {
      "inputs": [
          "indexed": true,
          "type": "bytes32"
        {
          "name": "resolver",
        }
      "name": "NewResolver",
    },
      "anonymous": false,
        {
          "name": "node",
        },
          "indexed": false,
          "type": "uint64"
      ],
      "type": "event"
  ],
  "networks": {},
  "updated_at": 1491026506835