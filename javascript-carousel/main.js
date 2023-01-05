var $leftArrowButton = document.querySelector('.left-arrow');
var $rightArrowButton = document.querySelector('.right-arrow');
var $firstImage = document.querySelector('.first');

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

var $firstRadioButton = document.querySelector('.radio-button-1');
var $secondRadioButton = document.querySelector('.radio-button-2');
var $thirdRadioButton = document.querySelector('.radio-button-3');
var $fourthRadioButton = document.querySelector('.radio-button-4');
var $fifthRadioButton = document.querySelector('.radio-button-5');

$firstRadioButton.addEventListener('click', handleFirstRadioButton);
function handleFirstRadioButton(event) {
  clearInterval(startingIntervalId);
  $firstImage.classList.add('carousel-first');
  $firstImage.classList.remove('carousel-second');
  $firstImage.classList.remove('carousel-third');
  $firstImage.classList.remove('carousel-fourth');
  $firstImage.classList.remove('carousel-fifth');
  $firstRadioButton.classList.add('active-button-index');
  $secondRadioButton.classList.remove('active-button-index');
  $thirdRadioButton.classList.remove('active-button-index');
  $fourthRadioButton.classList.remove('active-button-index');
  $fifthRadioButton.classList.remove('active-button-index');
  startingIntervalId = setInterval(handleRightArrowButton, 3000);
}

$secondRadioButton.addEventListener('click', handleSecondRadioButton);
function handleSecondRadioButton(event) {
  clearInterval(startingIntervalId);
  $firstImage.classList.remove('carousel-first');
  $firstImage.classList.add('carousel-second');
  $firstImage.classList.remove('carousel-third');
  $firstImage.classList.remove('carousel-fourth');
  $firstImage.classList.remove('carousel-fifth');
  $secondRadioButton.classList.add('active-button-index');
  $firstRadioButton.classList.remove('active-button-index');
  $thirdRadioButton.classList.remove('active-button-index');
  $fourthRadioButton.classList.remove('active-button-index');
  $fifthRadioButton.classList.remove('active-button-index');
  startingIntervalId = setInterval(handleRightArrowButton, 3000);
}

$thirdRadioButton.addEventListener('click', handleThirdRadioButton);
function handleThirdRadioButton(event) {
  clearInterval(startingIntervalId);
  $firstImage.classList.remove('carousel-first');
  $firstImage.classList.remove('carousel-second');
  $firstImage.classList.add('carousel-third');
  $firstImage.classList.remove('carousel-fourth');
  $firstImage.classList.remove('carousel-fifth');
  $thirdRadioButton.classList.add('active-button-index');
  $secondRadioButton.classList.remove('active-button-index');
  $firstRadioButton.classList.remove('active-button-index');
  $fourthRadioButton.classList.remove('active-button-index');
  $fifthRadioButton.classList.remove('active-button-index');
  startingIntervalId = setInterval(handleRightArrowButton, 3000);
}

$fourthRadioButton.addEventListener('click', handleFourthRadioButton);
function handleFourthRadioButton(event) {
  clearInterval(startingIntervalId);
  $firstImage.classList.remove('carousel-first');
  $firstImage.classList.remove('carousel-second');
  $firstImage.classList.remove('carousel-third');
  $firstImage.classList.add('carousel-fourth');
  $firstImage.classList.remove('carousel-fifth');
  $fourthRadioButton.classList.add('active-button-index');
  $secondRadioButton.classList.remove('active-button-index');
  $thirdRadioButton.classList.remove('active-button-index');
  $firstRadioButton.classList.remove('active-button-index');
  $fifthRadioButton.classList.remove('active-button-index');
  startingIntervalId = setInterval(handleRightArrowButton, 3000);
}

$fifthRadioButton.addEventListener('click', handleFifthRadioButton);
function handleFifthRadioButton(event) {
  clearInterval(startingIntervalId);
  $firstImage.classList.remove('carousel-first');
  $firstImage.classList.remove('carousel-second');
  $firstImage.classList.remove('carousel-third');
  $firstImage.classList.remove('carousel-fourth');
  $firstImage.classList.add('carousel-fifth');
  $fifthRadioButton.classList.add('active-button-index');
  $secondRadioButton.classList.remove('active-button-index');
  $thirdRadioButton.classList.remove('active-button-index');
  $fourthRadioButton.classList.remove('active-button-index');
  $firstRadioButton.classList.remove('active-button-index');
  startingIntervalId = setInterval(handleRightArrowButton, 3000);
}

var startingIntervalId = setInterval(handleRightArrowButton, 3000);
