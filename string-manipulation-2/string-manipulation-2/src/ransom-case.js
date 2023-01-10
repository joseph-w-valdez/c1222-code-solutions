/* exported ransomCase */
/*
pseudocode logic
----------------
ransomCase(string)

objective
----------------
given a string, alternate all letters from upper to lower case, starting with lowercasing

plan
----------------
make a new variable containing the first letter of the string, forced to lowercasing
use a for loop to go through the whole string, starting at the second letter (since it
always starts lowercased and it was already added to the new variable)
use a nested if loop to check if i is an even or odd number
if i is odd, capitalize it and concatenate it to the new variable
if i is even, lowercase it and concatenate it to the new variable
return the new variable
*/

function ransomCase(string) {
  var result = string[0].toLowerCase();
  for (let i = 1; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string.toLowerCase()[i];
    } else {
      result += string.toLowerCase()[i].toUpperCase();
    }
  }
  return result;
}
