var student = {
  firstName: 'Joseph',
  lastName: 'Valdez',
  age: 31

};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value for fullName is:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'emergency room tech';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'CR-V',
  year: 2012
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('the color of my car is ', vehicle['color']);
console.log('the value of isConvertible is: ', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Pierre',
  type: 'Labrador'
};

delete pet.name;
delete pet.type;

console.log('the value of pet is: ', pet);
