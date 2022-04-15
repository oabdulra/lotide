const eqArrays = require('./eqArrays');



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

  return returnArray;
  
};

module.exports = without;

