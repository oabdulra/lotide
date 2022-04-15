const countLetters = require('../countLetters');

const assert = require('chai').assert;

describe("#countLetters" , () => {

  it("should return 5 when given the word bread", () => {
    assert.notStrictEqual(countLetters("bread"), 2);
  })

  it("should return 11 when given the words Osama Rahman", () => {
    assert.notStrictEqual(countLetters("Osama Rahman"), 11);
  })


});