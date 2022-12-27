/* exported getWords */

/*

pseudocode logic
----------------
getWords(string)

objective
----------------
given a string that may or may not contain any words,
give it back an array of each word (if any) split into separate strings
make a check for an empty string first

plan
----------------
use the split() method using " " as the argument

*/

function getWords(string) {
  if (string === '') {
    return [];
  } else return string.split(' ');
}
