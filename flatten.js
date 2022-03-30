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

const flatten = function(arrayToFlatten) { 

  const newFlatArray = [];

  for (let i = 0 ; i < arrayToFlatten.length ; i++) {

    if( Array.isArray(arrayToFlatten[i])) {

      for (let j = 0 ; j < arrayToFlatten[i].length ; j++) {

        newFlatArray.push(arrayToFlatten[i][j]);
        
      }

    }
    else {

      newFlatArray.push(arrayToFlatten[i]);
    }

  }

  return newFlatArray;
  

}

//flatten([1, 2, [3, 4, 5 , 9], 5, [6]]) ;