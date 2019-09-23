// export function foo() { }
describe('ExportNamedDeclaration', () => {
  const example = {
    "type": "ExportNamedDeclaration",
    "start": 0,
    "end": 26,
    "declaration": {
      "type": "FunctionDeclaration",
      "start": 7,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 19,
        "name": "foo"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "name": "a"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 26,
        "body": []
      }
    },
    "specifiers": [],
    "source": null
  }
})