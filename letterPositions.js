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

const letterPositions = function(sentence) {
  
  const results = {};

  //converting the string into an array without spaces
  let sentenceArray = sentence.split(' ').join('').split('');
  
  //console.log(sentenceArray);

  for (let i = 0 ; i < sentenceArray.length ; i++){

    if(results[sentenceArray[i]]){
      results[sentenceArray[i]].push(i);
    }
    else{
      results[sentenceArray[i]] = [i];
    }
  }

  return results;
};

//console.log(letterPositions('hot dog'));

//assertArraysEqual(letterPositions("hello").e, [1]);
