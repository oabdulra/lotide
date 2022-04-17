const takeUntil = function(array, callback) {

  let returnArr = array;

  returnArr.forEach((arrEntry , i) => {

    if (callback(arrEntry) === true) {
      returnArr = returnArr.slice(0 , i);
    }

  });

  return returnArr;
  
};

module.exports = takeUntil ;
