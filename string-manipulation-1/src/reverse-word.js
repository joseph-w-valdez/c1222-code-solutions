/* exported reverseWord */

/*

pseudocode logic
----------------
reverseWord(word)

objective
----------------
flip the letters front-to-back

plan
----------------
use a for loop to iterate through all indices in a loop and concatenate them together

*/

function reverseWord(word) {
  var result = '';
  for (let i = word.length - 1; i >= 0; i--) {
    result = result + word[i];
  }
  return result;
}
