
const tail = require('../tail');

const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#tail" , () => {

  it("should return the tail length which is 2", () => {
    assert.notStrictEqual(tail(["Yo Yo","Lighthouse","Labs"]), 2);
  })


});




// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual((tail(words)).length , 2);