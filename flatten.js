const flatten = function(arrayToFlatten) {

  const newFlatArray = [];

  for (let i = 0; i < arrayToFlatten.length; i++) {

    if (Array.isArray(arrayToFlatten[i])) {

      for (let j = 0; j < arrayToFlatten[i].length; j++) {

        newFlatArray.push(arrayToFlatten[i][j]);
        
      }

    } else {

      newFlatArray.push(arrayToFlatten[i]);
    }

  }

  return newFlatArray;
  

};

module.exports = flatten;
