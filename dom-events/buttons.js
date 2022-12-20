function handleClick(event) {
  console.log("'button-clicked' value :  ", 'button-clicked');
  console.log('event value :  ', event);
  console.log('event.target value :  ', event.target);

}
var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMousover(event) {
  console.log("'button hovered' value :  ", 'button hovered');
  console.log('event value :  ', event);
  console.log('event.target value :  ', event.target);

}
var $mouseOver = document.querySelector('.hover-button');
$mouseOver.addEventListener('mouseover', handleMousover);

function handleDoubleClick(event) {
  console.log("'button double-clicked' value :  ", 'button double-clicked');
  console.log('event value :  ', event);
  console.log('event.target value :  ', event.target);
}

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
