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
    for (const key in students[i]) {
      if (key === 'name') {
        result.push(students[i][key]);
      }
    }
  }
  return result;
}
