// class Animal {}
describe('ClassBody', () => {
  const example = {
    "type": "ClassBody",
    "start": 14,
    "end": 53,
    "body": [
      {
        "type": "MethodDefinition",
        "start": 18,
        "end": 51,
        "kind": "method",
        "static": false,
        "computed": false,
        "key": {
          "type": "Identifier",
          "start": 18,
          "end": 25,
          "name": "sayName"
        },
        "value": {
          "type": "FunctionExpression",
          "start": 25,
          "end": 51,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 28,
            "end": 51,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 34,
                "end": 47,
                "argument": {
                  "type": "Literal",
                  "start": 41,
                  "end": 47,
                  "value": "name",
                  "raw": "'name'"
                }
              }
            ]
          }
        }
      }
    ]
  }
})