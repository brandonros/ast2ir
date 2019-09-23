// for (;;) {}
describe('ForStatement', () => {
  const example = {
    "type": "ForStatement",
    "start": 0,
    "end": 32,
    "init": {
      "type": "VariableDeclaration",
      "start": 5,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9,
          "end": 14,
          "id": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "i"
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 14,
            "value": 0,
            "raw": "0"
          }
        }
      ],
      "kind": "let"
    },
    "test": {
      "type": "BinaryExpression",
      "start": 16,
      "end": 22,
      "left": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "name": "i"
      },
      "operator": "<",
      "right": {
        "type": "Literal",
        "start": 20,
        "end": 22,
        "value": 10,
        "raw": "10"
      }
    },
    "update": {
      "type": "UpdateExpression",
      "start": 24,
      "end": 27,
      "operator": "++",
      "prefix": true,
      "argument": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "name": "i"
      }
    },
    "body": {
      "type": "BlockStatement",
      "start": 29,
      "end": 32,
      "body": []
    }
  }
})