//using the function I made previously to check for assertion
const assertEqual = require('./assertEqual');


const tail = function(arr) {

  const tailOfArray = arr.slice(1);
  return tailOfArray;

};

module.exports = tail;