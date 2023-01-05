/* var $leftArrowButton = document.querySelector('.left-arrow');
var $rightArrowButton = document.querySelector('.right-arrow');
var $firstImage = document.querySelector('#first');

$rightArrowButton.addEventListener('click', handleRightArrowButton);
function handleRightArrowButton(event) {
  if ($firstImage.classList.contains('carousel-first')) {
    handleSecondRadioButton();
  } else if ($firstImage.classList.contains('carousel-second')) {
    handleThirdRadioButton();
  } else if ($firstImage.classList.contains('carousel-third')) {
    handleFourthRadioButton();
  } else if ($firstImage.classList.contains('carousel-fourth')) {
    handleFifthRadioButton();
  } else {
    handleFirstRadioButton();
  }
}

$leftArrowButton.addEventListener('click', handleLeftArrowButton);
function handleLeftArrowButton(event) {
  if ($firstImage.classList.contains('carousel-fifth')) {
    handleFourthRadioButton();
  } else if ($firstImage.classList.contains('carousel-fourth')) {
    handleThirdRadioButton();
  } else if ($firstImage.classList.contains('carousel-third')) {
    handleSecondRadioButton();
  } else if ($firstImage.classList.contains('carousel-second')) {
    handleFirstRadioButton();
  } else {
    handleFifthRadioButton();
  }
}

var $firstRadioButton = document.querySelector('#carousel-first');
var $secondRadioButton = document.querySelector('#carousel-second');
var $thirdRadioButton = document.querySelector('#carousel-third');
var $fourthRadioButton = document.querySelector('#carousel-fourth');
var $fifthRadioButton = document.querySelector('#carousel-fifth');

$firstRadioButton.addEventListener('click', handleRadioButton);
$secondRadioButton.addEventListener('click', handleRadioButton);
$thirdRadioButton.addEventListener('click', handleRadioButton);
$fourthRadioButton.addEventListener('click', handleRadioButton);
$fifthRadioButton.addEventListener('click', handleRadioButton);

var startingIntervalId = setInterval(handleRightArrowButton, 3000);

function handleRadioButton(event) {
  clearInterval(startingIntervalId);
  var classUpdater = event.target.getAttribute('id');
  var classString = 'slide ' + classUpdater;
  $firstImage.className = classString;
  startingIntervalId = setInterval(handleRightArrowButton, 3000);
}
 */
