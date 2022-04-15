const findKeyByValue = require('../findKeyByValue');

const assert = require('chai').assert;

describe("#findKeyByValue" , () => {


  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };


  it("should return 'drama' when given the object and key 'The Wire' ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama") 
    
  })

  it("should return 'comedy' when given the object and key 'Brooklyn Nine-Nine' ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy") 
    
  })


});


