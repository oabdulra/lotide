const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  
  const results = {};

  //converting the string into an array without spaces
  let sentenceArray = sentence.split(' ').join('').split('');
  
  //console.log(sentenceArray);

  for (let i = 0; i < sentenceArray.length; i++) {

    if (results[sentenceArray[i]]) {
      results[sentenceArray[i]].push(i);
    } else {
      results[sentenceArray[i]] = [i];
    }
  }

  return results;
};

module.exports = letterPositions;


