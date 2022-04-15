const takeUntil = require('../takeUntil');

const assert = require('chai').assert;

describe("#takeUntil" , () => {

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');

  it("should stop and return the array when it reaches -1", () => {
    assert.notStrictEqual(results1,[1,2,5,7.2]);
  })

  it("should stop and return the array when it reaches ,", () => {
    assert.notStrictEqual(results2,["I've","been","to","Hollywood"]);
  })

});