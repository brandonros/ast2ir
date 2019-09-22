describe('ImportDeclaration', () => {
  const example = {
    "type": "ImportDeclaration",
    "start": 0,
    "end": 25,
    "specifiers": [
      {
        "type": "ImportSpecifier",
        "start": 9,
        "end": 12,
        "imported": {
          "type": "Identifier",
          "start": 9,
          "end": 12,
          "name": "foo"
        },
        "local": {
          "type": "Identifier",
          "start": 9,
          "end": 12,
          "name": "foo"
        }
      }
    ],
    "source": {
      "type": "Literal",
      "start": 20,
      "end": 25,
      "value": "123",
      "raw": "'123'"
    }
  }
})