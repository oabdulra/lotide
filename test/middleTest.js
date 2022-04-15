
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#middle", () => {

  it("returns [2,3] for [1,2,3,4]", () => {
    assert.notStrictEqual(middle([1,2,3,4]),[2, 3]);
  });
  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.notStrictEqual(middle[1,2,3,4,5,6],[3,4]);
  })
  it("returns 5 for [1,2,3,4,5,5,6,7,8,9]", () => {
    assert.notStrictEqual(middle([1,2,3,4,5,6,7,8,9]),[5]);
  })
  it("returns 1 for [1]", () => {
    assert.notStrictEqual(middle([1]),[1]);
  })

});


// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9])); //should be [5]
// console.log(middle([1]));