/* exported dropRight */
/*
pseudocode logic
----------------
dropRight(array, count)

objective
----------------
given an array, return a new array without items after the given count

plan
----------------
check if the count is greater than the array, if so, return the given array
if not, create an empty array representing the result
use a for loop to go through each item, starting from index 0 and stopping at the
array. length - given count (represents counting from the right side)
push items in for loop into the result array
return the array

*/

function dropRight(array, count) {
  var result = [];
  if (count > array.length) {
    return result;
  } else {
    for (let i = 0; i < array.length - count; i++) {
      result.push(array[i]);
    }
    return result;
  }
}
