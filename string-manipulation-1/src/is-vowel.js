/* exported isVowel */

/*

pseudocode logic
----------------
isVowel(char)

objective
----------------
check if the given character is a vowel

plan
----------------
create array of vowels and use a for loop to see if it is one of those values
if true, return true
if no matches exist, set a variable assigned with the value false
after the for loop, if there are no matches, return result, which should be false

*/

function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === char) {
      return true;
    } else {
      var result = false;
    }
  }
  return result;
}
