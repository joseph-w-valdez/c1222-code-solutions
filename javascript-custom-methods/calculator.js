/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var result = 0;
    for (let index = 0; index < numbers.length; index++) {
      result += numbers[index];
    }
    return result;
  },
  getAverage: function (numbers) {
    var sum = 0;
    for (let index = 0; index < numbers.length; index++) {
      sum += numbers[index];
    }
    var result = sum / numbers.length;
    return result;
  }
};
