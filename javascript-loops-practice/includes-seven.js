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
/*
console.log('includesSeven([1, 2, 3, 4, 5, 6, 7]): ', includesSeven([1, 2, 3, 4, 5, 6, 7]));
console.log('includesSeven([77, 200, 700, "7"]): ', includesSeven([77, 200, 700, '7']));
console.log('includesSeven([1, 2, 3, 4, 5, 6, 7]): ', includesSeven([1, 2, 3, 4, 5, 6, 7]));
console.log('includesSeven([234, "7", 7, 322, 4]): ', includesSeven([234, '7', 7, 322, 4]));
console.log('includesSeven([]): ', includesSeven([]));
console.log('includesSeven([11,7,34,55,43]): ', includesSeven([11, 7, 34, 55, 43]));
 */
