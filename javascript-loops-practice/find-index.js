/* exported findIndex */
function findIndex(array, value) {
  let result;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      result = i;
      return result;
    } else {
      result = -1;
    }
  }
  return result;
}
