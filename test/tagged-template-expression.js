describe('TaggedTemplateExpression', () => {
  const example = {
    "type": "TaggedTemplateExpression",
    "start": 15,
    "end": 94,
    "tag": {
      "type": "MemberExpression",
      "start": 15,
      "end": 28,
      "object": {
        "type": "Identifier",
        "start": 15,
        "end": 21,
        "name": "styled"
      },
      "property": {
        "type": "Identifier",
        "start": 22,
        "end": 28,
        "name": "button"
      },
      "computed": false
    },
    "quasi": {
      "type": "TemplateLiteral",
      "start": 28,
      "end": 94,
      "expressions": [],
      "quasis": [
        {
          "type": "TemplateElement",
          "start": 29,
          "end": 93,
          "value": {
            "raw": "\n  font-size: 1.5em;\n  background-color: black;\n  color: white;\n",
            "cooked": "\n  font-size: 1.5em;\n  background-color: black;\n  color: white;\n"
          },
          "tail": true
        }
      ]
    }
  }
})