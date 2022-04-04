const eqObjects = function(object1, object2) {


  if (Object.keys(object1).length !== Object.keys(object2).length) {

    return false;
  }

  for (let key of Object.keys(object1)) {

              
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {

      if (!eqArrays(object1[key],object2[key])) {
                  
        return false;

      }

    } else if (object1[key] !== object2[key]) {

      return false;

    }

  }
  return true;

};


const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;
  const test = eqObjects(actual, expected);


  if (test) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  = ${expected}`);
  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }

};

