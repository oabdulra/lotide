const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};

const countLetters = function (strToCount) {

  //converting string to an array without spaces 
  let strToArray = strToCount.split(' ').join('').split('');
  
  

  //console.log(strToArray);
  
  const charCount = {};
  
  for (let letter = 0 ; letter<strToArray.length ; letter++){

    
    
      if (typeof charCount[strToArray[letter]] !==  'undefined'){

        charCount[strToArray[letter]] += 1;

      }
      else {
        charCount[strToArray[letter]] = 1;
      }
    }

  
  
  return charCount;
};

//console.log(countLetters("lighthouse in the house"));