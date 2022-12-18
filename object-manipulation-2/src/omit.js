/* exported omit */
/*
pseudocode logic
----------------
omit(source, keys)

objective
----------------
create a new object that contains its original keys but removes additional given keys

plan
----------------
create a new variable of an empty object literal representing the result
create a new variable representing the props of the given source
create a new variable representing the values of the given source
use a for loop to go through the array and check if its corresponding value is undefined and
if so, remove the index i for both the props and values arrays
use a for loop to go through the keys array and check if the modified props array includes it
if so, remove the index i for both the props and values arrays
use a for loop to go through the props array and add assign a new object literal each loop consisting of
the index i at the props array and its corresponding values array into the result object literal
return the result

*/

function omit(source, keys) {
  var result = { };
  var array = Object.keys(source);
  var values = Object.values(source);
  for (let i = 0; i < array.length; i++) {
    if (values[i] === undefined) {
      array.splice(i, 1);
      values.splice(i, 1);
    }
  }
  for (let i = 0; i < keys.length; i++) {
    if (array.includes(keys[i])) {
      array.splice(i, 1);
      values.splice(i, 1);
    }
  }
  for (let i = 0; i < array.length; i++) {
    result[array[i]] = values[i];
  }

  return result;
}
