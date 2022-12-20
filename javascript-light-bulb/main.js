var $lightswitch = document.querySelector('.lightbulb');
var $room = document.querySelector('.room');
function lightswitch(event) {
  if (document.querySelector('.lightbulb').classList.contains('switch-on')) {
    $lightswitch.classList.add('switch-off');
    document.querySelector('.lightbulb').classList.remove('switch-on');
    $room.classList.add('switch-off');
    document.querySelector('.room').classList.remove('switch-on');
  } else {
    $lightswitch.classList.add('switch-on');
    document.querySelector('.lightbulb').classList.remove('switch-off');
    $room.classList.add('switch-on');
    document.querySelector('.room').classList.remove('switch-off');
  }
}

$lightswitch.addEventListener('click', lightswitch);
