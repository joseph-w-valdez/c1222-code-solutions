console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
plan
---------------
make object literal representing the players
make function to create object literal containing all 52 cards with associated value
use for loops to iterate through all possible values and suits and create an object literal that represents that card
(should not produce duplicates but double-check)
make a function for shuffling the deck using Math.random and then placing it at that index
(make sure no values are overwritten)
make a reset function to establish a new game
make a function for distributing the cards to each player, two-at-a-time and in order
make a function for player decision making likelihood to hit, stay, or fold (again probably using Math.random)
after each player has made their decisions
check which player has the highest score and log them as the winner
in case of a tie, rerun the game but with only those two players until one wins

notes
---------------
shuffleDeck(deck) works correctly but logging the deck gets weird results. hopefully not an issue..

*/

var defaultPlayers = [
  {
    name: 'Max',
    hand: null
  },
  {
    name: 'Tycho',
    hand: null
  },
  {
    name: 'The Heavy',
    hand: null
  },
  {
    name: 'Strong Bad',
    hand: null
  }
];

var players = JSON.parse(JSON.stringify(defaultPlayers));

var suit = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
var deck = [];
var score = 0;
var winningPlayer = null;

function createDeck() {
  for (let rankIndex = 0; rankIndex < rank.length; rankIndex++) {
    var card = {};
    for (let suitIndex = 0; suitIndex < suit.length; suitIndex++) {
      card.rank = rank[rankIndex];
      card.suit = suit[suitIndex];
      if (rank[rankIndex] === 'Ace') {
        card.value = 11;
      } else if (rank[rankIndex] === 'Jack' || rank[rankIndex] === 'Queen' || rank[rankIndex] === 'King') {
        card.value = 10;
      } else {
        card.value = rank[rankIndex] * 1;
      }
      deck.push(card);
      card = {};
    }
  }
  shuffleDeck(deck);
}

function shuffleDeck(deck) {
  var finalCardIndex = deck.length - 1;
  var finalCard;
  while (finalCardIndex > 0) {
    var randomNewDeckIndex = Math.floor(finalCardIndex * Math.random(0, finalCardIndex));
    finalCard = deck[finalCardIndex];
    deck[finalCardIndex] = deck[randomNewDeckIndex];
    deck[randomNewDeckIndex] = finalCard;
    finalCardIndex--;
  }
}

createDeck();

var $playButton = document.querySelector('form');
var $headerText = document.querySelector('.header');
var $winnerText = document.querySelector('.winner-text');
var $buttonText = document.querySelector('button');
var $roundCounter = document.querySelector('.round-counter');
var $winnerImg = document.querySelector('img');

var $roundCount = 0;

function handleButton(event) {
  event.preventDefault();
  console.log('THIS IS THE START OF A BRAND NEW GAME. USE THIS TO DETERMINE THE SEPARATION OF THE PREVIOUS GAME AND THIS NEW ONE.');
  startGame();

}
$playButton.addEventListener('submit', handleButton);

function newGame() {
  deck = [];
  winningPlayer = null;
  players = JSON.parse(JSON.stringify(defaultPlayers));
  createDeck();
}

function startGame() {
  newGame();
  playGame();
  $roundCount++;
  endGame();
}

function playGame() {
  dealCards();
  eliminateOver21();
  checkWinner();
}

function dealCards() {
  for (let dealCardsToPlayer = 0; dealCardsToPlayer < players.length; dealCardsToPlayer++) {
    players[dealCardsToPlayer].hand = [];
    players[dealCardsToPlayer].hand.push(deck.pop());
    console.log('deckvalue :  ', deck);
    score = players[dealCardsToPlayer].hand[players[dealCardsToPlayer].hand.length - 1].value;
    players[dealCardsToPlayer].value = score;
    score = 0;
  }
  for (let dealCardsToPlayer = 0; dealCardsToPlayer < players.length; dealCardsToPlayer++) {
    players[dealCardsToPlayer].hand.push(deck.pop());
    score = players[dealCardsToPlayer].hand[players[dealCardsToPlayer].hand.length - 1].value;
    players[dealCardsToPlayer].value += score;
    score = 0;
  }
}

function eliminateOver21() {
  var survivingPlayers = [];

  for (let player = 0; player < players.length; player++) {
    console.log(players[player].value, players[player]);
    if (players[player].value <= 21) {
      survivingPlayers.push(players[player]);
    }
  }
  players = JSON.parse(JSON.stringify(survivingPlayers));
  return survivingPlayers;
}

var nullPlayer = {
  value: 0
};

var tiedPlayers = [];

function checkWinner() {
  var winner = nullPlayer;

  console.log('winnervalue :  ', winner);
  for (let player = 0; player < players.length; player++) {
    if (tiedPlayers.length < 1 && players[player].value > winner.value) {
      winner = players[player];
    } else if (tiedPlayers.length < 1 && players[player].value === winner.value) {
      tiedPlayers.push(winner);
      tiedPlayers.push(players[player]);
      console.log('THERE WAS A TIE CHECK THIS SECTION FOR DEBUGGING');
      winner = nullPlayer;
    } else if (tiedPlayers.length > 1 && players[player].value > tiedPlayers[0].value) {
      tiedPlayers = [];
      winner = players[player];
    } else if (tiedPlayers.length > 1 && players[player].value === tiedPlayers[0].value) {
      tiedPlayers.push(players[player]);
    }
  }
  if (tiedPlayers.length > 1) {
    players = JSON.parse(JSON.stringify(tiedPlayers));
    tiedPlayers = [];
    winner = nullPlayer;
    console.log('playersvalue before running tiebreaker:  ', players);
    playGame();
  } else {
    winningPlayer = winner.name;
    players = JSON.parse(JSON.stringify(winner));
  }
}

function endGame() {
  console.log('round number :  ', $roundCount);
  $roundCounter.textContent = $roundCount;
  $headerText.textContent = 'And the winner is... ';
  $winnerText.textContent = winningPlayer + '!';
  $buttonText.textContent = 'Play Again?';
  if (winningPlayer === 'The Heavy') {
    $winnerImg.setAttribute('src', './images/TheHeavy.png');
  } else if (winningPlayer === 'Max') {
    $winnerImg.setAttribute('src', './images/Max.png');
  } else if (winningPlayer === 'Strong Bad') {
    $winnerImg.setAttribute('src', './images/StrongBad.png');
  } else {
    $winnerImg.setAttribute('src', './images/Tycho.png');
  }

  console.log('playersvalue :  ', players);
}
