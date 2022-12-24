/* exported flatten */
/*
pseudocode logic
----------------
flatten(array)

objective
----------------
given an array, produce a new array that removes any nested arrays by one level

plan
----------------
create empty array represending the result
use a for loop to iterate through the given array
use an if statement to check if the datatype is not an array using .isArray()
if it's not an array, push that item into the empty array
if it is an array, use a for loop to iterate through all of its items and
add each of them to the empty array
retun the result

*/

function flatten(array) {
  var result = [];
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    if (!Array.isArray(array[arrayIndex])) {
      result.push(array[arrayIndex]);
    } else {
      for (var subarrayIndex = 0; subarrayIndex < array[arrayIndex].length; subarrayIndex++) {
        result.push(array[arrayIndex][subarrayIndex]);
      }
    }
  }
  return result;
}

/* console.log('flatten([2, 4, 5])value :  ', flatten([2, 4, 5]));
console.log('flatten([[1], [2], 3, 4, [5]])value :  ', flatten([[1], [2], 3, 4, [5]])); */
