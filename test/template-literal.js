describe('TemplateLiteral', () => {
  const example = {
    "type": "TemplateLiteral",
    "start": 0,
    "end": 11,
    "expressions": [
      {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "bar"
      }
    ],
    "quasis": [
      {
        "type": "TemplateElement",
        "start": 1,
        "end": 4,
        "value": {
          "raw": "foo",
          "cooked": "foo"
        },
        "tail": false
      },
      {
        "type": "TemplateElement",
        "start": 10,
        "end": 10,
        "value": {
          "raw": "",
          "cooked": ""
        },
        "tail": true
      }
    ]
  }
})