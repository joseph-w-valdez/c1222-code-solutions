/* exported capitalizeWords */
/*
pseudocode logic
----------------
capitalizeWords(string)

objective
----------------
given a string, make sure that only the first letter of every word is capitalized

plan
----------------
make a new variable containing the first character of the string, forced to be uppercased
use a for loop to go through each character in the string, forced to entirely be in lowercase
start at index 1, since the first letter was already added as a capital letter
use a nested if loop to check if the character at index [i - 1] is strictly equal to an empty space " "
if so,  capitalize it and concatenate it to the new variable
if not, lowecase it and concatenate it to the new variable
return the new variable

*/

function capitalizeWords(string) {
  var result = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      result += string[i].toUpperCase();
    } else {
      result += string[i].toLowerCase();
    }
  }
  return result;
}
