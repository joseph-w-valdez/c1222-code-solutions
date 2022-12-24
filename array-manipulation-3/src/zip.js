/* exported zip */
/*
pseudocode logic
----------------
zip(first, second)

objective
----------------
given two arrays, make a new array that has grouped matched pairings
do not include items if they lack a matching pair

plan
----------------
create empty array representing the result
compare the two strings' lengths. whichever one is smaller is set to a new variable representing the length of the result array
use a for loop to go through each item of both arrays, using the variable from above
for each pair, push them into a container array, then push the array into the result array, and then empty the array
return the result

*/

function zip(first, second) {
  var result = [];
  var subArray = [];
  var resultLength = null;
  if (first.length < second.length) {
    resultLength = first.length;
  } else {
    resultLength = second.length;
  }
  for (var arrayItemIndex = 0; arrayItemIndex < resultLength; arrayItemIndex++) {
    subArray.push(first[arrayItemIndex]);
    subArray.push(second[arrayItemIndex]);
    result.push(subArray);
    subArray = [];
  }
  return result;
}

/* console.log("zip(['name', 'course', 'grade'], ['Cody', 'CSS', 9001])value :  ", zip(['name', 'course', 'grade'], ['Cody', 'CSS', 9001]));
console.log("zip(['dog', 'lion', 'hawk', 'tiger'],['cat', 'lamb', 'dove'])value :  ", zip(['dog', 'lion', 'hawk', 'tiger'], ['cat', 'lamb', 'dove'])); */
