/* exported includesSeven */
function includesSeven(array) {
  var result;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 7) {
        return true;
      } else {
        result = false;
      }
    }
  } else {
    return false;
  }

  return result;
}
