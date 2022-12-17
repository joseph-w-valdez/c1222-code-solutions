/* exported getKeys */

/*
pseudocode logic
----------------
getKeys(object)

objective
----------------
display the properties of an item without its corresponding values

plan
----------------
use a for in loop to extract the keys
*/

function getKeys(object) {
  var result = [];
  for (var keys in object) {
    result.push(keys);
  }
  return result;
}
