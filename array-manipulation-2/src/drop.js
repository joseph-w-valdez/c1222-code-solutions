/* exported drop */
/*
pseudocode logic
----------------
drop(array,count)

objective
----------------
given an array return a new array of all the items after the given count

plan
----------------
create a new empty array
check if the given array has any items, if not return the new array
if not, use a for loop to go through the given array starting at the given count (this should correspond to the correct index)
push values to the new array
return the new array

*/

function drop(array, count) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    for (let i = count; i < array.length; i++) {
      result.push(array[i]);
    }

  }

  return result;
}
