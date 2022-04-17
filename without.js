
const without = function(source, itemsToRemove) {

  

  let returnArray = [];

  for (let i = 0; i < source.length; i++) {
    let itemToRemoveExists = false;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        itemToRemoveExists = true;
      }
    }
    if (!itemToRemoveExists) {
      returnArray.push(source[i]);
    }
  }

  return returnArray;
  
};

module.exports = without;

