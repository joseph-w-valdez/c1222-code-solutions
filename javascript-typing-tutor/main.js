/*
pseudocode logic
----------------

objectives
---------------
have an array of phrases
on load, pick a phrase and display it on screen
have it interactive so that it will have an underscore underneath the active letter
use an eventListener to check specifically for the item

*/

var phrases = [
  'Look, sir. Look, sir. Mr. Knox, sir.',
  "Let's do tricks with bricks and blocks, sir.",
  "Let's do tricks with chicks and clocks, sir. "
];
var exceptionList = ['Shift', 'CapsLock', 'Alt', 'Tab', 'Control', 'Meta', 'ContextMenu', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft',
  'Insert', 'Home', 'PageUp', 'Delete', 'End', 'PageDown', 'ScrollLock', 'Pause', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
  'F11', 'F12', '`', 'Escape', 'Backspace', 'Enter', '-', '='];

function addLetter(letterNumber) {
  var $newCharacter = document.createElement('span');
  return $newCharacter;
}
var $phraseNumber = 0;
var $phraseString = phrases[$phraseNumber];
var $activeCharacterIndex = 0;
var $firstRow = document.querySelector('.row');
var $newCol;
displayPhrase($phraseNumber);

function displayPhrase(phraseNumber) {
  $phraseString = phrases[phraseNumber];
  $newCol = document.createElement('div');
  $newCol.setAttribute('class', 'col-100');
  $firstRow.appendChild($newCol);
  var $characterSpan;
  for (let character = 0; character < $phraseString.length; character++) {
    $characterSpan = addLetter($phraseString[character]);
    $characterSpan.textContent = $phraseString[character];
    $newCol.appendChild($characterSpan);
  }
}

var $allSpans = document.querySelectorAll('span');
window.addEventListener('keydown', handleKeyPress);

function checkIfException(character) {
  if (exceptionList.includes(character)) {
    return true;
  }
  return false;
}

function nextCharacterIndex() {
  if ($activeCharacterIndex === $phraseString.length - 1) {
    $newCol.remove();
    $phraseNumber++;
    $activeCharacterIndex = 0;
    displayPhrase($phraseNumber);
    $allSpans = document.querySelectorAll('span');
    $activeSpan = $allSpans[$activeCharacterIndex];
    $activeSpan.classList.add('active-letter');
  } else {
    $activeCharacterIndex++;
    $activeSpan = $allSpans[$activeCharacterIndex];
    $activeSpan.classList.add('active-letter');
  }
}

var $activeSpan = $allSpans[$activeCharacterIndex];
$activeSpan.classList.add('active-letter');

function handleKeyPress(event) {

  if (!checkIfException(event.key)) {
    if (event.key === $activeSpan.textContent) {
      $activeSpan.classList.add('successful-press');
      $activeSpan.classList.remove('failed-press');
      $activeSpan.classList.remove('active-letter');

      nextCharacterIndex();

    } else {
      $activeSpan.classList.add('failed-press');
    }
  } else {
    return undefined;
  }
}
