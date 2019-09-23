// const obj = {foo: 'bar'}
describe('ObjectExpression', () => {
  const example = {
    "type": "ObjectExpression",
    "start": 10,
    "end": 24,
    "properties": [
      {
        "type": "Property",
        "start": 12,
        "end": 22,
        "method": false,
        "shorthand": false,
        "computed": false,
        "key": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "name": "foo"
        },
        "value": {
          "type": "Literal",
          "start": 17,
          "end": 22,
          "value": "bar",
          "raw": "'bar'"
        },
        "kind": "init"
      }
    ]
  }
})