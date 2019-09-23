const { Parser } = require('acorn')
const assert = require('assert')
const ast2ir = require('../index')

describe('ArrayExpression', () => {
  const source = `[1,2]`
  const expectedAst = {
    "type": "ArrayExpression",
    "start": 0,
    "end": 5,
    "elements": [
      {
        "type": "Literal",
        "start": 1,
        "end": 2,
        "value": 1,
        "raw": "1"
      },
      {
        "type": "Literal",
        "start": 3,
        "end": 4,
        "value": 2,
        "raw": "2"
      }
    ]
  }
  const expectedIr = `TODO`

  it('should compile source to AST', () => {
    const ast = Parser.parse(source)
    assert(JSON.stringify(ast.body[0].expression) === JSON.stringify(expectedAst))
  })

  it('should compile AST to IR', () => {
    const ir = ast2ir(expectedAst)
    assert(ir === expectedIr)
  })
})
