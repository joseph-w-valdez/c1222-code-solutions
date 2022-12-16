/* exported isUpperCased */

/*

pseudocode logic
----------------
isUpperCased(string)

objective
----------------
given a string of any value, say true if it is all in uppercase

plan
----------------
string for value
use === operator to its capitalized values and return it
.toUpperCase() method to force uppercasing

*/

function isUpperCased(string) {
  return string === string.toUpperCase();
}
