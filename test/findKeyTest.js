const findKey = require('../findKey');

const assert = require('chai').assert;


describe("#findKey" , () => {

  it("should return 'noma' when given the object and key '2' ", () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2),'noma' ); // => "noma"
    
  })


});