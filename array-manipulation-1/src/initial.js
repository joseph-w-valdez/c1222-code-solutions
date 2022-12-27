/* exported initial */

/*
pseudocode logic
----------------
initial(array)

objective
---------------
a new array containing everything except the last value

plan
--------------
use a for loop to go through everything but the last value and use unshift()

*/

function initial(array) {
  const result = [];
  for (let i = array.length - 2; i >= 0; i--) {
    result.unshift(array[i]);
  }
  return result;
}
