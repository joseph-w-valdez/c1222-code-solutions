/* exported tail */

/*
pseudocode logic
----------------
tail(array)

objective
---------------
make new array of everything besides the first value of the original array

plan
--------------
use for loop to iterate through all values excluding index 0 and use unshift() to add them to a new empty array

*/

function tail(array) {
  const result = [];
  for (let i = array.length - 1; i > 0; i--) {
    result.unshift(array[i]);
  }
  return result;
}
