/* exported equal */
/*
pseudocode logic
----------------
equal(first, second)

objective
----------------
see if two given arrays are strictly equal to each other

plan
----------------
use an if statement with a check if both arrays have the same amount of items
if not, return false
if so, use a for look to iterate through each item then
if any value of both arrays at the same index does not strictly equal each other, return false
if the for loop finished, without returning, return true

*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let index = 0; index < first.length; index++) {
    if (first[index] !== second[index]) {
      return false;
    }
  }
  return true;
}

/* console.log("equal(['foo', 'bar', 'baz'], ['foo', 'bar', 'baz'])value :  ", equal(['foo', 'bar', 'baz'], ['foo', 'bar', 'baz'])); */
