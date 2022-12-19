/* exported getStudentNames */

/* var students2 = [
  {
    name: 'Shrek',
    age: 5
  },
  {
    name: 'Donkey',
    age: 2
  },
  {
    name: 'Fiona',
    age: 1
  }
]; */

function getStudentNames(students) {

  var result = [];
  for (let i = 0; i < students.length; i++) {
    result.push(students[i].name);
  }
  return result;
}

/* console.log(getStudentNames(students2));
['Shrek', 'Donkey', 'Fiona'];
 */
