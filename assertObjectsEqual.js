const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;
  const test = eqObjects(actual, expected);


  if (test) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  = ${expected}`);
  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }

};

module.exports = assertObjectsEqual;
