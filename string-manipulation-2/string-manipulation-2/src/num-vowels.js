/* exported numVowels */
/*
pseudocode logic
----------------
numVowels(string)

objective
----------------
count how many vowels are in a string

plan
----------------
create a new variable assigned to the number 0
use a for loop to go through each character in the string
use a nested if loop to check if it's a vowel, add +1 to the new variable
if not, do nothing and move through the for loop
return the new variable

*/

function numVowels(string) {
  var result = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'A' || string[i] === 'a' || string[i] === 'E' || string[i] === 'e' || string[i] === 'I' || string[i] === 'i' ||
      string[i] === 'O' || string[i] === 'o' || string[i] === 'U' || string[i] === 'u') {
      result++;
    }
  }

  return result;
}
