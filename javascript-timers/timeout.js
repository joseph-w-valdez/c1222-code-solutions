var $message = document.querySelector('.message');

function timeout() {
  $message.textContent = 'Hello, there.';
}

setTimeout(timeout, 2000);
