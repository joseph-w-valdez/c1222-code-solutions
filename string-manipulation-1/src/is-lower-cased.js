/* exported isLowerCased */

/*

pseudocode logic
----------------
isLowerCased(string)

objective
----------------
given a string of any value, say true if it is all in Lowercase

plan
----------------
string for value
use === operator to its capitalized values and return it
.toLowerCase() method to force Lowercasing

*/

function isLowerCased(string) {
  return string === string.toLowerCase();
}
