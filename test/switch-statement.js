describe('SwitchStatement', () => {
  const example = {
    "type": "SwitchStatement",
    "start": 0,
    "end": 29,
    "discriminant": {
      "type": "Identifier",
      "start": 8,
      "end": 11,
      "name": "foo"
    },
    "cases": [
      {
        "type": "SwitchCase",
        "start": 17,
        "end": 27,
        "consequent": [
          {
            "type": "BlockStatement",
            "start": 25,
            "end": 27,
            "body": []
          }
        ],
        "test": {
          "type": "Literal",
          "start": 22,
          "end": 23,
          "value": 1,
          "raw": "1"
        }
      }
    ]
  }
})
