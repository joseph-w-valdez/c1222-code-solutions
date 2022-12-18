/* exported truncate */
/*
pseudocode logic
----------------
truncate(length, string)

objective
----------------
given a string, shorten it to a given length of characters, including spaces

plan
----------------
make a new variable with an empty string
use slice to extract a range of characters and assign that to the new variable
return the new variable concatenated with an ellipsis

*/

function truncate(length, string) {
  var result = '';
  result = string.slice(0, length);
  return result + '...';
}
