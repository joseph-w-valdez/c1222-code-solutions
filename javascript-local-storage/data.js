/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', stringifyToDoList);

function stringifyToDoList(object) {
  var toDoString = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', toDoString);
}
