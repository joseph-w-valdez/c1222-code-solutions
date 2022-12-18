/* exported includes */
/*
pseudocode logic
----------------
includes(array, value)

objective
----------------
given an array, return true or false if a given value is within the array

plan
----------------
check if the given array has any items, if not return false
if so, use a for loop to go through the given array
use an if loop to check if any values in the array strictly match the given value
if so, return true
if not, keep going and if the loop finishes, return false

*/

function includes(array, value) {
  if (array === []) {
    return false;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }
}
