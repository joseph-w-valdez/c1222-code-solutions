/* exported reverse */

/*
pseudocode logic
----------------
reverse(array)

objective
---------------
a new array containing everything but front-to-back

plan
--------------
use a for loop to go through each method and add them to a new empty array in reverse order

*/

function reverse(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.unshift(array[i]);
  }
  return result;
}
