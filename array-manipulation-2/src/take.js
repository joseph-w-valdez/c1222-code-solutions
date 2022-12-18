/* exported take */
/*
pseudocode logic
----------------
take(array, count)

objective
----------------
given an array, return a new array only containing a given number of items

plan
----------------
create a new empty array
check if the given array has any items, if not return the new array
if not, use a for loop to go through the given array
use a nested if loop to determine if i is equal to or lower than count to
make sure to stop after going through all intended items
if so, push it to the new array
if not, return the new array

*/

function take(array, count) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (i < count) {
        result.push(array[i]);
      } else {
        return result;
      }
    }
  }

}
