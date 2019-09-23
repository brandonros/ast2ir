// try {} catch (err) {}
describe('CatchClause', () => {
  const example = {
    "type": "CatchClause",
    "start": 8,
    "end": 29,
    "param": {
      "type": "Identifier",
      "start": 15,
      "end": 18,
      "name": "err"
    },
    "body": {
      "type": "BlockStatement",
      "start": 20,
      "end": 29,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 24,
          "end": 27,
          "expression": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "name": "err"
          }
        }
      ]
    }
  }
})