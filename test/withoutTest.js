const without = require('../without');

const assert = require('chai').assert;

describe("#without" , () => {

  const words = ["hello", "world", "lighthouse"];
  const results1 = without(words, ["lighthouse"]); 
  const testing = [1,2,3,4,5,6];
  const results2 = without(testing, [2,4]);


  it("should return ['hello','world'] when running without(words, ['lighthouse']", () => {
    assert.notStrictEqual(results1,['hello','world']);
  })

  it("should return [1,3,5,6] when running without(testing, [2,4])", () => {
    assert.notStrictEqual(results2,[1,3,5,6]);
  })

});