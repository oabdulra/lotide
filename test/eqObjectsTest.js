const eqObjects = require('../eqObjects');

const assert = require('chai').assert;


describe("#eqObjects" , () => {

  const cheesePizza = { crust: "thin", sauce: "bbq sauce", cheese: "mozz"};
  const cheesePizza2 = { crust: "thick", sauce: "tomato", cheese: "mozz"};
  const cheesePizza3 = { crust: "thick", sauce: "tomato", cheese: "parm"};
  const cheesePizza4 = { crust: "thick", sauce: "tomato", cheese: "mozz"};

  it("should return false when presented with cheesePizza and cheesePizza2", () => {
    assert.strictEqual(eqObjects(cheesePizza,cheesePizza2), false);
  })

  it("should return false when presented with cheesePizza and cheesePizza3", () => {
    assert.strictEqual(eqObjects(cheesePizza,cheesePizza3), false);
  })

  it("should return true when presented with cheesePizza2 and cheesePizza4", () => {
    assert.strictEqual(eqObjects(cheesePizza2,cheesePizza4), true);
  })


});