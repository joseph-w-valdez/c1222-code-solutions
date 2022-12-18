/* exported takeRight */
/*
pseudocode logic
----------------
takeRight(array, count)

objective
----------------
given an array, return a new array including just the amount of items specified counting from the end
if the count is larger than the amount of items from the array, return the given array

plan
----------------
check if the count is greater than the array, if so, return the given array
if not, create an empty array representing the result
use a for loop to go through and add each item, starting from array.length - count
and push those values to the result array
after the for loop, return the array

*/

function takeRight(array, count) {
  if (count > array.length) {
    return array;
  } else {
    var result = [];
    for (let i = array.length - count; i < array.length; i++) {
      result.push(array[i]);
    }
    return result;
  }
}
