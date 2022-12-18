/* exported invert */
/*
pseudocode logic
----------------
invert(source, keys)

objective
----------------
create a new object flips its keys and values

plan
----------------
create a new variable of an empty object literal representing the result
create a new variable representing the props of the given source
create a new variable representing the values of the given source
use a for loop to go through the props array and add assign a new object literal each loop consisting of
the index i at the values array and its corresponding props array into the result object literal
return the result

*/

function invert(source) {
  var result = {};
  var keys = Object.keys(source);
  var values = Object.values(source);
  for (let i = 0; i < values.length; i++) {
    result[values[i]] = keys[i];
  }
  return result;
}
