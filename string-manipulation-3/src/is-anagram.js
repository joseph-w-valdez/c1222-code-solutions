/* exported isAnagram */
/*
pseudocode logic
----------------
isAnagram(firstString, secondString)

objective
----------------
given two strings, see if they're anagrams of each other (same exact letters)

plan
----------------
remove all spaces in the given strings by settting a blank variable to empty strings and
using a for loop to concatenate all characters from the strings to the new variables
unless it's an empty space. then use toLowerCase() to force them to all be lowercase
see if the number of characters in both strings are equal
if not, return false
if so, convert both strings to arrays and sort them alphabetically then rejoin them as strings
check if they're strictly equal to each other
if so, return true
if not, return false

*/

function isAnagram(firstString, secondString) {
  var noSpacesFirstString = '';
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      noSpacesFirstString += firstString[i];
    }
  }
  noSpacesFirstString = noSpacesFirstString.toLowerCase();
  var noSpacesSecondString = '';
  for (let i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      noSpacesSecondString += secondString[i];
    }
  }
  noSpacesSecondString = noSpacesSecondString.toLowerCase();
  if (noSpacesFirstString.length !== noSpacesSecondString.length) {
    return false;
  } else {
    noSpacesFirstString = noSpacesFirstString.split('').sort(function (a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });
    noSpacesSecondString = noSpacesSecondString.split('').sort(function (a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });
  }
  if (noSpacesFirstString.join('') === noSpacesSecondString.join('')) {

    return true;
  } else {
    return false;
  }
}

/* isAnagram('restful', 'fluster');
console.log("isAnagram('restful', 'fluster')value :  ", isAnagram('restful', 'fluster'));
isAnagram('red dad', 'rad ede');
console.log("isAnagram('red dad', 'rad ede')value :  ", isAnagram('red dad', 'rAd ede')); */
