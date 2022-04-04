const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};

const eqArrays = function(arrayOne , arrayTwo) {

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  
  for (let i = 0; i < arrayOne.length; i++) {

    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }

  }

  return true;
};

const eqObjects = function(object1, object2) {


  if (Object.keys(object1).length !== Object.keys(object2).length) {

    return false;
  }

  for (let key of Object.keys(object1)) {

              
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {

      if (!eqArrays(object1[key],object2[key])) {
                  
        return false;

      }

    } else if (object1[key] !== object2[key]) {

      return false;

    }

  }
  return true;

};

/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, ba), false);

const cheesePizza = { crust: "thin", sauce: "bbq sauce", cheese: "mozz"};
const cheesePizza2 = { crust: "thick", sauce: "tomato", cheese: "mozz"};
const cheesePizza3 = { crust: "thick", sauce: "tomato", cheese: "parm"};

assertEqual(eqObjects(cheesePizza, cheesePizza2),true); // should fail
assertEqual(eqObjects(cheesePizza2, cheesePizza3),false); //should pass


const cd = { c: "1", d: [2, 3] };
const dc = { d: [2, 3], c: "1" };
assertEqual(eqObjects(cd, dc) , true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const objArr1 = { a: [1,2], b: [2,3,5], c: [3,4]};
const objArr2 = { a: [1,2], b: [2,3,5,7], c: [3,4]};

assertEqual(eqObjects(objArr1,objArr2),true);

*/
