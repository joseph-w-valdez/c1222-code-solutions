/* exported isPalindromic */
/*
pseudocode logic
----------------
isPalindromic(string)

objective
----------------
say true or false if the given string is a palindrome (same backwards and forwards)

plan
----------------
remove all spaces in the given string by settting a blank variable to an empty string and
using a for loop to concatenate all characters from the string to the new variable
unless it's an empty space
make a copy of half of the string using a for loop and reverse it
check if this is strictly equal to the front half of the string by
checking it against the result of slicing the front half of the word
if it matches, return true. if not, return false
*/

function isPalindromic(string) {
  var noSpaces = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      noSpaces += string[i];
    }
  }
  var backend = '';
  for (let i = noSpaces.length - 1; i > noSpaces.length / 2 - 1; i--) {
    backend += noSpaces[i];
  }
  var frontend = noSpaces.slice(0, noSpaces.length / 2 + 1);
  if (frontend === backend) {
    return true;
  } else {
    return false;
  }
}

/* isPalindromic('racecar');
console.log('isPalindromic("racecar")value :  ', isPalindromic('racecar'));
isPalindromic('taco cat');
console.log('isPalindromic("taco cat")value :  ', isPalindromic('taco cat'));
isPalindromic('sam i am');
console.log('isPalindromic("sam i am")value :  ', isPalindromic('sam i am'));
 */
