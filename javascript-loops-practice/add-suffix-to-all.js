/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var result = [];
  for (let i = 0; i < words.length; i++) {
    var temp = words[i] + suffix;
    result.push(temp);
  }
  return result;
}
