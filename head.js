//using the function I made previously to check for assertion
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};

const head = function(arr) {

  let headOfArray = arr[0];
  return headOfArray;

};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
