//using the function I made previously to check for assertion
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};


const tail = function(arr) {

  const tailOfArray = arr.slice(1);
  return tailOfArray;

};

// Test Case: Check the original array
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!
//assertEqual((tail(words)).length , 2);