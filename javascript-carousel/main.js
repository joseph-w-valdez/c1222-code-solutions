/* var $leftArrowButton = document.querySelector('.left-arrow');
var $rightArrowButton = document.querySelector('.right-arrow');
var $firstImage = document.querySelector('#first');

$rightArrowButton.addEventListener('click', handleRightArrowButton);
function handleRightArrowButton(event) {
  clearInterval(startingIntervalId);

  var $activeButtonIndex = document.querySelector('[class="manual-button active-button-index"]');
  classUpdater = $activeButtonIndex.getAttribute('id');
  var shortenedUpdater = classUpdater.substring(0, classUpdater.length - 1);
  var index = classUpdater.substring(classUpdater.length - 1);
  var updatedIndex = index * 1 + 1;
  classUpdater = shortenedUpdater + updatedIndex;
  var classString = 'slide ' + classUpdater;
  $firstImage.className = classString;
  for (let radioButton = 0; radioButton < $radioButtons.length; radioButton++) {
    $radioButtons[radioButton].className = 'manual-button';
  }

  startingIntervalId = setInterval(handleRightArrowButton, 3000);

  classUpdater = event.target.getAttribute('id');

  event.target.classList.add('active-button-index');

}

$leftArrowButton.addEventListener('click', handleLeftArrowButton);
function handleLeftArrowButton(event) {

}
var $radioButtons = document.querySelectorAll('.manual-button');
var $firstRadioButton = document.querySelector('#carousel-1');
var $secondRadioButton = document.querySelector('#carousel-2');
var $thirdRadioButton = document.querySelector('#carousel-3');
var $fourthRadioButton = document.querySelector('#carousel-4');
var $fifthRadioButton = document.querySelector('#carousel-5');

$firstRadioButton.addEventListener('click', handleRadioButton);
$secondRadioButton.addEventListener('click', handleRadioButton);
$thirdRadioButton.addEventListener('click', handleRadioButton);
$fourthRadioButton.addEventListener('click', handleRadioButton);
$fifthRadioButton.addEventListener('click', handleRadioButton);

var startingIntervalId = setInterval(handleRightArrowButton, 3000);

function handleRadioButton(event) {
  clearInterval(startingIntervalId);
  var classUpdater;
  classUpdater = event.target.getAttribute('id');
  var classString = 'slide ' + classUpdater;
  $firstImage.className = classString;
  for (let radioButton = 0; radioButton < $radioButtons.length; radioButton++) {
    $radioButtons[radioButton].className = 'manual-button';
  }
  event.target.classList.add('active-button-index');
  startingIntervalId = setInterval(handleRightArrowButton, 3000);
}
 */
