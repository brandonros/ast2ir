// for (const foo in bar) {}
describe('ForInStatement', () => {
  const example = {
    "type": "ForInStatement",
    "start": 0,
    "end": 26,
    "left": {
      "type": "VariableDeclaration",
      "start": 5,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 11,
          "end": 14,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 14,
            "name": "foo"
          },
          "init": null
        }
      ],
      "kind": "const"
    },
    "right": {
      "type": "Identifier",
      "start": 18,
      "end": 21,
      "name": "bar"
    },
    "body": {
      "type": "BlockStatement",
      "start": 23,
      "end": 26,
      "body": []
    }
  }
})