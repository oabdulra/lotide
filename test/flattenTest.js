const flatten = require('../flatten');

const assert = require('chai').assert;

describe("#flatten" , () => {

  

  it("should return false when presented with cheesePizza and cheesePizza2", () => {
    assert.notStrictEqual(flatten(flatten([1, 2, [3, 4, 5 , 9], 5, [6]]) ) , [1,2,3,4,5,9,5,6]);
  })

  


});