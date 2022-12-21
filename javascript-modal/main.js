var $buttonOpenModal = document.querySelector('.form-open');
var $buttonCloseModal = document.querySelector('.form-popup');
var $popup = document.querySelector('.overlay');
function handleModal(event) {
  event.preventDefault();
  if (event.target.className === 'form-open') {
    $popup.classList.remove('hidden');
  } else if (event.target.className === 'form-popup') {
    $popup.classList.add('hidden');
  }
}
$buttonOpenModal.addEventListener('submit', handleModal);
$buttonCloseModal.addEventListener('submit', handleModal);
