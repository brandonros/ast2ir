describe('MethodDefinition', () => {
  const example = {
    "type": "MethodDefinition",
    "start": 12,
    "end": 21,
    "kind": "method",
    "static": false,
    "computed": false,
    "key": {
      "type": "Identifier",
      "start": 12,
      "end": 15,
      "name": "foo"
    },
    "value": {
      "type": "FunctionExpression",
      "start": 15,
      "end": 21,
      "id": null,
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "a"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 21,
        "body": []
      }
    }
  }
})
