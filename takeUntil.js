const eqArrays = function(arrayOne , arrayTwo) {

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  
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

const takeUntil = function(array, callback) {

  let returnArr = array;

  returnArr.forEach((arrEntry , i) => {

    if (callback(arrEntry) === true) {
      returnArr = returnArr.slice(0 , i);
    }

  });

  return returnArr;
  
};

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
*/