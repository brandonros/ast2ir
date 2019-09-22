describe('VariableDeclaration', () => {
  const example = {
    "type": "VariableDeclaration",
    "start": 0,
    "end": 11,
    "declarations": [
      {
        "type": "VariableDeclarator",
        "start": 4,
        "end": 11,
        "id": {
          "type": "Identifier",
          "start": 4,
          "end": 7,
          "name": "foo"
        },
        "init": {
          "type": "Literal",
          "start": 10,
          "end": 11,
          "value": 1,
          "raw": "1"
        }
      }
    ],
    "kind": "var"
  }
})