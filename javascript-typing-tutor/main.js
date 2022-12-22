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

/* var phrases = [
  'Look, sir. Look, sir. Mr. Knox, sir.',
  "Let's do tricks with bricks and blocks, sir.",
  "Let's do tricks with chicks and clocks, sir. "
];

var $activePhrase = document.querySelector('.active-phrase');

function addLetter(letterNumber) {
  var $newCharacter = document.createElement('span');
  return $newCharacter;
}

function displayPhrase(phraseNumber) {
  var $firstCol = document.querySelector('.col-100');
  var $phraseString = phrases[phraseNumber];
  console.log($phraseString.length);
  for (let character = 0; character < $phraseString.length; character++) {
    var $characterSpan = addLetter($phraseString[character]);
    if (character === 0) {
      $characterSpan.setAttribute('class', 'active-letter');
      $characterSpan.textContent = $phraseString[character];
      $firstCol.appendChild($characterSpan);
    } else if ($phraseString[character] === ' ') {
      $characterSpan.innerHTML = '&nbsp;';
      $firstCol.appendChild($characterSpan);
    } else {
      $characterSpan.textContent = $phraseString[character];
      $firstCol.appendChild($characterSpan);
    }
  }

}

displayPhrase(0);
 */
