const countOnly = require('../countOnly');

const assert = require('chai').assert;

describe("#countOnly" , () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("should return 1 when looking for Jason ", () => {
    assert.strictEqual(result1["Jason"], 1);
  })

  it("should return 2 when looking for Fang", () => {
    assert.strictEqual(result1["Fang"], 2);
  })


});