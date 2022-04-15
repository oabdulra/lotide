const map = require('../map');

const assert = require('chai').assert;

describe("#map" , () => {

  const words = ["ground", "control", "to", "major", "tom"];
  const wordsResults = ['g','c','t','m','t'];
  const results1 = map(words, word => word[0]);

  it("should equal the same as results1 when mapping words", () => {
    assert.notStrictEqual(results1,wordsResults);
  })

 
  


});