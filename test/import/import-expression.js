// import('dynamicImport.js') - note: fails on https://astexplorer.net/
describe('ImportExpression', () => {
  const example = {
    type: 'ImportExpression',
    start: 0,
    end: 26,
    source: {
      type: 'Literal',
      start: 7,
      end: 25,
      value: 'dynamicImport.js',
      raw: "'dynamicImport.js'"
    }
  }
})
