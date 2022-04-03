const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};

const countLetters = function (strToCount) {

  let strToArray = strToCount.split("");
  strToArray = strToCount.replace(/\s+/g, '');
  

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

console.log(countLetters("lighthouse in the house"));