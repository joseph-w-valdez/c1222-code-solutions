/* exported intersection */
/*
pseudocode logic
----------------
intersection(first, second)

objective
----------------
given two arrays, return a result array that has items that are only in both given arrays

plan
---------------
create an empty array representing the result
use a for loop to iterate through each item in the first given array
use a nested for loop to check if that item is not in the second given array using !second.include(first[item])
if it's included, push it to the result array
if it isn't included, keep going through the loop
do a similar for loop but checking if an item in the second given array is in
the first given array and also not already in the result array
return the result

*/

function intersection(first, second) {
  var result = [];
  for (let arrayIndex = 0; arrayIndex < first.length; arrayIndex++) {
    if (second.includes(first[arrayIndex])) {
      result.push(first[arrayIndex]);
    }
  }
  for (let arrayIndex = 0; arrayIndex < second.length; arrayIndex++) {
    if (first.includes(second[arrayIndex]) && !result.includes(second[arrayIndex])) {
      result.push(second[arrayIndex]);
    }
  }
  return result;
}

/* console.log('intersection([2, 1], [2, 3])value :  ', intersection([2, 1], [2, 3])); */
