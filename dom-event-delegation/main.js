var $taskList = document.querySelector('.task-list');
function handleTaskList(event) {
  event.preventDefault();
  console.log('event.target value :  ', event.target);
  console.log('event.target.tagName value :  ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var targetTagName = event.target.closest('.task-list-item');
    console.log(targetTagName);
    targetTagName.remove();
  }
}
$taskList.addEventListener('click', handleTaskList);
