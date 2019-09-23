// (class Animal {})
describe('ClassExpression', () => {
  const example = {
    "type": "ClassExpression",
    "start": 1,
    "end": 26,
    "id": {
      "type": "Identifier",
      "start": 7,
      "end": 10,
      "name": "Foo"
    },
    "superClass": null,
    "body": {
      "type": "ClassBody",
      "start": 11,
      "end": 26,
      "body": [
        {
          "type": "MethodDefinition",
          "start": 15,
          "end": 24,
          "kind": "method",
          "static": false,
          "computed": false,
          "key": {
            "type": "Identifier",
            "start": 15,
            "end": 18,
            "name": "bar"
          },
          "value": {
            "type": "FunctionExpression",
            "start": 18,
            "end": 24,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "name": "a"
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 22,
              "end": 24,
              "body": []
            }
          }
        }
      ]
    }
  }
})