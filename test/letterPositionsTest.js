const letterPositions = require('../letterPositions');

const assert = require('chai').assert;

describe("#letterPositions" , () => {

  

  it("should return 1 when presented with 'hello' and look for e's positions", () => {
    assert.notStrictEqual(letterPositions('hello').e , [1]);
  })

  it("should return 2,3 when presented with 'hello' and look for l's positions", () => {
    assert.notStrictEqual(letterPositions('hello').l , [2,3]);
  })

  


});

