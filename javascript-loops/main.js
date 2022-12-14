/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen value: ', getNumbersToTen());
console.log('getNumbersToTen value: ', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty value: ', getEvenNumbersToTwenty());
console.log('getEvenNumbersToTwenty value: ', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeatWord(hi,5) value: ', repeatWord('hi', 5));
console.log('repeatWord(hi,5) value: ', repeatWord('hi', 5));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log(logEachCharacter(''));
console.log(logEachCharacter('Joseph Valdez'));
console.log(logEachCharacter('This is a sentence.'));

function doubleAll(numbers) {
  var doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll([1,2,3,4,5]) value: ', doubleAll([1, 2, 3, 4, 5]));
console.log('doubleAll([3,9,11]) value: ', doubleAll([3, 9, 11]));
console.log('doubleAll([0,2,1]) value: ', doubleAll([0, 2, 1]));

const obj = {
  isbn: 134 - 12312,
  title: 'Fight Club',
  author: 'Tyler Durden'
};

function getKeys(object) {
  var keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
console.log(getKeys());

function getValues(object) {
  var values = [];
  for (const value in obj) {
    values.push(obj[value]);
  }
  return values;
}
console.log(getValues());
