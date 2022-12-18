/* exported firstChars */
/*
pseudocode logic
----------------
firstChars(length, string)

objective
----------------
given a string, return only the first characters of a given length

plan
----------------
make a new variable containing an empty string
use slice() to start at index 0 and go until length

*/

function firstChars(length, string) {
  return string.slice(0, length);
}
