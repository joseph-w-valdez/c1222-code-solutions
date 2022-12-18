/* exported chunk */
/*
pseudocode logic
----------------
chunk(array, size)

objective
----------------
given an array, break the array up into subarrays consisting of a given size of items

plan
----------------
set an empty array to represent the result
use a for loop to iterate through all items, using a final expression to add the given size each new loop
in the for loop, slice the given array from the current i index to the i + size index (to cut it into chunks)
and push each chunk into the result
return the result
*/

function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
