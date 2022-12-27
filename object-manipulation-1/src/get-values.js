/* exported getValues */

/*
pseudocode logic
----------------
getValues(object)

objective
----------------
given an object, get  all of the values of its properties

plan
----------------
use a for in loop to go to they keys level and push them into a new empty array
*/

function getValues(object) {
  var result = [];
  for (var values in object) {
    result.push(object[values]);
  }
  return result;
}
