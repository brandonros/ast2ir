// with (foo) {} - note: disabled in strict mode
describe('WithStatement', () => {
  const example = {
    "type": "WithStatement",
    "start": 0,
    "end": 13,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 1,
        "column": 13
      }
    },
    "object": {
      "type": "Identifier",
      "start": 6,
      "end": 9,
      "loc": {
        "start": {
          "line": 1,
          "column": 6
        },
        "end": {
          "line": 1,
          "column": 9
        }
      },
      "name": "foo"
    },
    "body": {
      "type": "BlockStatement",
      "start": 11,
      "end": 13,
      "loc": {
        "start": {
          "line": 1,
          "column": 11
        },
        "end": {
          "line": 1,
          "column": 13
        }
      },
      "body": []
    }
  }
})