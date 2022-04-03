const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};



const findKeyByValue = (obj , searchVal) => {

  
  let returnKey = undefined; 

  for(let i in obj){

    console.log(i);
    if (obj[i] === searchVal) {
      
      returnKey = i;
      return returnKey;
    }
    

  }

  return returnKey;

}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);