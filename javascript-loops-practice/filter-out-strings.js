/* exported filterOutStrings */
function filterOutStrings(values) {
  var result = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== typeof 's') {
      result.push(values[i]);
    }
  }
  return result;
}
