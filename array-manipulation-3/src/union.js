/* exported union */
/*
pseudocode logic
----------------
union(first, second)

objective
----------------
given two arrays, return an array of only unique items

plan
----------------
create empty array representing the result
use a for loop to iterate through each item in the first given array
use a nested if look to check if its already in the result array
if it's not there, push it to the result array
repeat for the second array comparing to the first array
return the result

*/

function union(first, second) {
  var result = [];
  for (let arrayIndex = 0; arrayIndex < first.length; arrayIndex++) {
    if (!result.includes(first[arrayIndex])) {
      result.push(first[arrayIndex]);
    }
  }
  for (let arrayIndex = 0; arrayIndex < second.length; arrayIndex++) {
    if (!result.includes(second[arrayIndex])) {
      result.push(second[arrayIndex]);
    }
  }
  return result;
}

/* console.log('union([2, 1], [2, 3])value :  ', union([2, 1], [2, 3])); */
