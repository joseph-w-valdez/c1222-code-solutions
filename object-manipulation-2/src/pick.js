/* exported pick */
/*
pseudocode logic
----------------
pick(source, keys)

objective
----------------
create a new object that contains given keys also within a given source object

plan
----------------
create a new variable of an empty object literal representing the result
create a new variable representing the props of the source array
create a new variable represending the values of the source array
use a for loop to go through the extracted props array and if there's a corresponding value that is undefined, remove it from the keys array
use a for loop to go through the given keys array and use an includes method to check if the value of keys[i] is in the
modified props array.
if so, push it to the object literal representing the result, being sure to match the correct indices using the indexOf method
return the result object literal

*/

function pick(source, keys) {
  var result = {};
  var array = Object.keys(source);
  var values = Object.values(source);
  for (let i = 0; i < array.length; i++) {
    if (values[i] === undefined) {
      array.splice(i, 1);
    }
  }
  for (let i = 0; i < keys.length; i++) {
    if (array.includes(keys[i])) {
      result[Object.keys(source)[array.indexOf(keys[i])]] = Object.values(source)[array.indexOf(keys[i])];
    }
  }

  return result;
}
