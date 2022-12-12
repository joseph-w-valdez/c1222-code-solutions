var colors = [
  'red', 'white', 'blue'
];
console.log('value of the colors[0]: ', colors[0]);
console.log('value of the colors[1]: ', colors[1]);
console.log('value of the colors[2]: ', colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2]);
colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2]);
console.log(colors);

var students = [
  'Leo', 'Don', 'Raph', 'Mikey', 'Usagi'
];
var numberOfStudents = students.length;
var lastIndex = numberOfStudents - 1;
console.log('there are currently', numberOfStudents, "students under Master Splinter's tutelage");
var lastStudent = students[lastIndex];
console.log("Master Splinter's final student is", lastStudent);
