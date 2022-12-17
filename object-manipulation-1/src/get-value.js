/* exported getValue */
/*
pseudocode logic
----------------
getValue(object, key)

objective
----------------
given items with different properties, pick a specific item with a the value of a specific property

plan
----------------
use a for in loop, looking for a specific given key
*/

function getValue(object, key) {
  var result;
  result = object[key];

  return result;
}
