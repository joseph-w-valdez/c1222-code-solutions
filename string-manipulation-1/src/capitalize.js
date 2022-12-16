/* exported capitalize */
/*
pseudocode logic
----------------
capitalize(string)

objective
----------------
given a string, give it back with ONLY the first letter capitalized

plan
----------------
use string[0].toUpperCase() to capitalize the first letter
use slice(1) to extract everything but the first character
use toLowerCase() to make the tail end of the string lowercased
concat them together

*/

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
