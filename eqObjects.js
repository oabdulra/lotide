const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length){

    return true;
  }
  else {
    return false;
  }
};

