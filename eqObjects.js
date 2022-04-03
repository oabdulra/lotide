const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};

const eqObjects = function(object1, object2) {


  if (Object.keys(object1).length === Object.keys(object2).length) {

    for (let key of Object.keys(object1)) {

      //console.log(key);
      
      if (object1[key] !== object2[key]){

        return false;
      }

   

    }

     return true;

  }

  else { 
    return false;
  }
    
  
};

const ab = { a: "1", b: "2" };
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
