const eqArrays = function(arrayOne , arrayTwo) {

  for (let i = 0; i < arrayOne.length; i++) {

    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }

  }

  return true;

};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  
  const test = eqArrays(arrayOne , arrayTwo);

  if (test) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne}  = ${arrayTwo}`);
  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} != ${arrayTwo}`);
  }


};

const middle = function(array) {

  let middleArray = [];
  let middleIndex = array.length / 2;

  if (array.length <= 2) {

    return middleArray;
  } else if (array.length % 2 !== 0) {

    middleArray = [array[Math.floor(middleIndex)]];
    //console.log(middleIndex);
    //console.log(array[array.length/2]);
    return middleArray;
  } else if (array.length % 2 === 0) {

    middleArray = [ array[array.length / 2 - 1] , array [array.length / 2] ];
    return middleArray;
  }
};

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9])); //should be [5]
console.log(middle([1]));