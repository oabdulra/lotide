const findKeyByValue = (obj , searchVal) => {

  
  let returnKey = undefined;

  for (let i in obj) {

    console.log(i);
    if (obj[i] === searchVal) {
      
      returnKey = i;
      return returnKey;
    }
    

  }

  return returnKey;

};

module.exports = findKeyByValue;



