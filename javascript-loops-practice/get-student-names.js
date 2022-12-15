/* exported getStudentNames */

function getStudentNames(students) {

  var result = [];
  for (let i = 0; i < students.length; i++) {
    for (const prop in students[i]) {
      result.push(students[i][prop]);
    }
  }
  return result;
}

// ['Shrek', 'Donkey', 'Fiona']
