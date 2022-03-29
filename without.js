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


const without = function(source, itemsToRemove) {

  const returnArray = source.slice(0);

  console.log(returnArray);

  //now we need to loop through both arrays that we take in to look for the values

  for (let i = 0; i < returnArray.length; i++) {

    for (let j = 0; j < itemsToRemove.length; j++) {

      if (source[i] === itemsToRemove[j]) {

        returnArray.splice((returnArray.indexOf(j)),1);
      }

    }
  }

  return console.log(returnArray);
  
};

/*
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
const testing = [1,2,3,4,5,6];
without(testing, [2,4]);
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/