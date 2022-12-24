/* exported unique */
/*
pseudocode logic
----------------
unique(array)

objective
----------------
given an array of items, return a new array without any repeating values within

plan
---------------
create an empty variable representing the result
use a for loop to iterate through all items in the given array
use a nested if loop to check if the item doesn't already exist in there using !result.includes()
if it's not already in there, push it into the array
if it is, just keep going through the loop
return the result

*/

function unique(array) {
  var result = [];
  for (var arrayItemIndex = 0; arrayItemIndex < array.length; arrayItemIndex++) {
    if (!result.includes(array[arrayItemIndex])) {
      result.push(array[arrayItemIndex]);
    }
  }
  return result;
}

/* console.log('unique([false, true, false, true])value :  ', unique([false, true, false, true])); */
