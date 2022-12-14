var x = 5;
var y = 10;
var z = 20;
var maximumValue = Math.max(x, y, z);
console.log('Math.max(5,10,20): ', maximumValue);

var heroes = ['Homelander', 'Black Noir', 'Soldier Boy', 'Billy the Butcher'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex value: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomly chosen favorite superhero: ', randomHero);

var library = [
  {
    title: 'Green Eggs and Ham',
    author: 'Dr. Seuss'
  },
  {
    title: 'If You Give A Mouse A Cookie',
    author: 'Laura Numeroff'
  },
  {
    title: 'The Giving Tree',
    author: 'Shel Silverstein'
  }
];
var lastBook = library.pop();
console.log('last book value: ', lastBook);
var firstBook = library.shift();
console.log('first book value: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

var fullName = 'Joseph Valdez';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName value: ', firstAndLastName);
var sayMyName = firstAndLastName[0].toUpperCase();
console.log('sayMyName value: ', sayMyName);
