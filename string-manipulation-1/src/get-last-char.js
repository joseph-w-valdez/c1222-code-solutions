/* exported getLastChar */
/*

pseudocode logic
----------------
getLastChar(string)

objective
----------------
given a string of any value,  say the last character, whether it's a letter, number, or any other character

plan
----------------
look at string[string.length-1] and return it

*/

function getLastChar(string) {
  return string[string.length - 1];
}
