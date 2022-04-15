
//const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {

  it("Should result in true when presented [1,2,3] and [1,2,3]", () => {
    assert.strictEqual(eqArrays([1,2,3],[1,2,3]),true);
  });
  it("Should result in false when presented [1,2,3] and [3,2,1]", () => {
    assert.strictEqual(eqArrays([1,2,3],[3,2,1]),false);
  });
  it("Should result in false when presented ['1','2','3'] and ['1','2',3]", () => {
    assert.strictEqual(eqArrays(['1','2','3'],['1','2',3]),false);
  });

});



// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);