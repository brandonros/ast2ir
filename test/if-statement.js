describe('IfStatement', () => {
  const example = {
    "type": "IfStatement",
    "start": 0,
    "end": 34,
    "test": {
      "type": "Identifier",
      "start": 4,
      "end": 5,
      "name": "a"
    },
    "consequent": {
      "type": "BlockStatement",
      "start": 7,
      "end": 10,
      "body": []
    },
    "alternate": {
      "type": "IfStatement",
      "start": 16,
      "end": 34,
      "test": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "name": "b"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 23,
        "end": 26,
        "body": []
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 32,
        "end": 34,
        "body": []
      }
    }
  }
})