/* exported lastChars */
/*
pseudocode logic
----------------
lastChars(length, string)

objective
----------------
given a string, return only the last characters of a given length

plan
----------------
make a new variable set to the string.length - 1
if length is more than string.length (this would go to negative indices),
set the new variable to 0
use this new variable as the starting index for the slice() function to be used
return a string.slice(startingIndex, string.length) to start from either the intended starting point
or from the beginning of the string and go all the way to the end of the string

*/

function lastChars(length, string) {
  var startingIndex = string.length - length;
  if (string.length < length) {
    startingIndex = 0;
  }
  return string.slice(startingIndex, string.length);
}
