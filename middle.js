const middle = function(array) {

  let middleArray = [];
  let middleIndex = array.length / 2;

  if (array.length <= 2) {

    return middleArray;
  } else if (array.length % 2 !== 0) {

    middleArray = [array[Math.floor(middleIndex)]];
    //console.log(middleIndex);
    //console.log(array[array.length/2]);
    return middleArray;
  } else if (array.length % 2 === 0) {

    middleArray = [ array[array.length / 2 - 1] , array [array.length / 2] ];
    return middleArray;
  }
};

module.exports =  middle ;