function convertMinutesToSeconds(min) {
  return min * 60;
}
console.log('convertMinutesToSeconds function: 5 minute(s) has ', convertMinutesToSeconds(5), 'seconds');

function greet(name) {
  return '"morning ' + name + '"';
}
console.log('greeting function to Greg:', greet('Greg'));

function getArea(width, height) {
  return width * height;
}
console.log('getArea function with width of 5 and height of 3:', getArea(5, 3));

function getFirstName(person) {
  return person.firstName;
}
console.log('getFirstName of Nunally Lamperouge function: ', getFirstName({ firstName: 'Nunally', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[(array.length - 1)];
}
console.log('the last element of the array [propane, and, propane, accessories] is: ', getLastElement(['propane', 'and', 'propane', 'accessories']));
