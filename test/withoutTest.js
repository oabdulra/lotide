const without = require('../without');

const assert = require('chai').assert;

describe("#without" , () => {

  const words = ["hello", "world", "lighthouse"];
  const results1 = without(words, ["lighthouse"]); 
  const testing = [1,2,3,4,5,6];
  const results2 = without(testing, [2,4]);
  const results3 = without([0, 1, 2, 3, 2, 1], [0, 1, 2]);
  const results4 = without(["1", "1", "1", "2", "3", "1", "1", "3"], ["1", 2, "3"]);
  const results5 = without([1,2,3,4,5,6,8,6,3,2,1], [1,2,6]);


  it("should return ['hello','world'] when running without(words, ['lighthouse']", () => {
    assert.deepEqual(results1,['hello','world']);
  })

  it("should return [1,3,5,6] when running without(testing, [2,4])", () => {
    assert.deepEqual(results2,[1,3,5,6]);
  })

  it("should return [3] when running without([0,1,2,3,2,1], [0,1,2])", () => {
    assert.deepEqual(results3,[3]);
  })

  it("should return ['2'] when running without([`1`, `1`, `1`, `2`, `3`, `1`, `1`], [`1`, 2, `3`])", () => {
    assert.deepEqual(results4,['2']);
  })

  it("should return [3,4,5,8,3] when running without([1,2,3,4,5,6,8,6,3,2,1], [1,2,6])", () => {
    assert.deepEqual(results5,[3,4,5,8,3]);
  })


});