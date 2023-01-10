/* exported swapChars */
/*
pseudocode logic
----------------
swapChars(firstIndex, secondIndex, string)

objective
----------------
switch the characters in a string from two given positions

plan
----------------
-set a new variable equal to the string from the start to the first index using substring()
-use substring to grab the string from the secondIndex to the next character and concatenate it to the new variable to
 grab the character at the secondIndex and put it in place of where the firstIndex is and concatenate it to the new variable
-use substring to grab the string from the character after the firstIndex to the secondIndex and concatenate it to the new variable to
 grab the string between the given indices and concatenate it to the new variable
-use substring to grab the string from the firstIndex to the next character and concatenate it to the new variable to
 grab the character at the firstIndex and put it in place of where the secondIndex is and concatenate it to the new variable
-use substring to grab the string from the character after the secondIndex until the end of the string (string[string.length]) to
 grab the rest of the string after the secondIndex and concatenate it to the new variable
-return the new variable

*/

function swapChars(firstIndex, secondIndex, string) {
  var result = string.substring(0, firstIndex);
  result += string.substring(secondIndex, secondIndex + 1);
  result += string.substring(firstIndex + 1, secondIndex);
  result += string.substring(firstIndex, firstIndex + 1);
  result += string.substring(secondIndex + 1, string[string.length]);
  return result;
}
