
const map = function(array , callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));

  }

  return results;
};

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


const words = ["ground", "control", "to", "major", "tom"];
const wordsResults = ['g','c','t','m','t'];


const results1 = map(words, word => word[0]);

assertArraysEqual(results1, wordsResults);
