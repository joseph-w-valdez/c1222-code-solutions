/* exported compact */

/*
pseudocode logic
----------------
compact(array)

objective
---------------
remove falsy values

plan
--------------
use a for loop to go through each value in a given array and check if it's truthy, and if so, add it to a new open array

*/

function compact(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}
