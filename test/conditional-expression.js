// a ? b : c
describe('ConditionalExpression', () => {
  const example = {
    "type": "ConditionalExpression",
    "start": 0,
    "end": 9,
    "test": {
      "type": "Identifier",
      "start": 0,
      "end": 1,
      "name": "a"
    },
    "consequent": {
      "type": "Identifier",
      "start": 4,
      "end": 5,
      "name": "b"
    },
    "alternate": {
      "type": "Identifier",
      "start": 8,
      "end": 9,
      "name": "c"
    }
  }
})
