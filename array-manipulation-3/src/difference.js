/* exported difference */
/*
psedocode logic
---------------
difference(first, second)

objective
---------------
given two arrays, only include items if they are only found in one of the two arrays

plan
---------------
create an empty array representing the result
use a for loop to iterate through each item in the first given array
use a nested for loop to check if that item is not in the second given array using !second.include(first[item])
if it's not included, push it to the result array
if it is included, keep going through the loop
do a similar for loop but checking if an item in the second given array is in the first given array
return the result

*/

function difference(first, second) {
  var result = [];
  for (let arrayIndex = 0; arrayIndex < first.length; arrayIndex++) {
    if (!second.includes(first[arrayIndex])) {
      result.push(first[arrayIndex]);
    }
  }
  for (let arrayIndex = 0; arrayIndex < second.length; arrayIndex++) {
    if (!first.includes(second[arrayIndex])) {
      result.push(second[arrayIndex]);
    }
  }
  return result;
}

/* console.log("difference(['html', 'css', 'javascript'], ['php', 'css', 'sql'])value :  ", difference(['html', 'css', 'javascript'], ['php', 'css', 'sql'])); */
