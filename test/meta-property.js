// function foo() { if (!new.target) {} }
describe('MetaProperty', () => {
  const example = {
    "type": "MetaProperty",
    "start": 22,
    "end": 32,
    "meta": {
      "type": "Identifier",
      "start": 22,
      "end": 25,
      "name": "new"
    },
    "property": {
      "type": "Identifier",
      "start": 26,
      "end": 32,
      "name": "target"
    }
  }
})
