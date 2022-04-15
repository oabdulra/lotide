const eqArrays = require('./eqArrays');

const map = function(array , callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));

  }

  return results;
};

module.exports = map;


// const words = ["ground", "control", "to", "major", "tom"];
// const wordsResults = ['g','c','t','m','t'];


// const results1 = map(words, word => word[0]);

// assertArraysEqual(results1, wordsResults);
