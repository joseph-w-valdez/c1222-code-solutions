/* exported capitalizeWord */
/*
pseudocode logic
----------------
capitalizeWord(Word)

objective
----------------
given a string, make sure that only the first letter is capitalized, unless it is "JavaScript"

plan
----------------
make a new variable containing an empty string
lowercase the whole word uppercase the first letter and concatenate them together
assign it to the new variable
check if it is strictly "Javascript", and if so, capitalize the S also by slicing it and using concatenation
appropriately, then assign it to the new variable
return the new variable

*/

function capitalizeWord(word) {
  var result = '';
  result = word.toLowerCase;
  result = word.slice(0, 1).toUpperCase() + word.slice(1, word.length).toLowerCase();
  if (result === 'Javascript') {
    result = result.slice(0, 4) + result.slice(4, 5).toUpperCase() + result.slice(5, word.length);
    return result;
  }
  return result;
}
