//using the function I made previously to check for assertion
const assertEqual  = require('./assertEqual');


const head = function(arr) {

  let headOfArray = arr[0];
  return headOfArray;

};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;