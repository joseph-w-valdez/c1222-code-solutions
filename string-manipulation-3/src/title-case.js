/* exported titleCase */
/*
pseudocode logic
----------------
titleCase(title)

objective
----------------
given a title, return it with APA formatting
-must capitalize the first word of the title and subtitle
-capitalize all "major" words (nouns, verbs, adjectives, adverbs, pronouns, and words after hyphens)
-capitalize all words of 4 letters or more
-use lowercase for minor words of 3 letters or fewer as long as they arent the first word in a title or subtitle
-JavaScript and API always cased like this

plan
----------------
create an empty array
lowercase the entire given string
split the string into individual words using split(' ') and push them into an empty array
use a for loop to iterate through each word in the filled array
loop through each string (word) and use an if statement to check if the string is 4 more than 4 letters or
that if the previous word contains a semicolon or hyphen
if so, capitalize it
if not, keep going
use a for loop to check if any items now strictly equal Javascript or Api and if so, change them to JavaScript and API
join them together with spaces
return the result

*/

var minorWords = ['and', 'or', 'but', 'nor', 'a', 'an', 'the', 'as', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

function checkIfMinorWord(string) {
  for (let j = 0; j < minorWords.length; j++) {
    if (string === minorWords[j]) {
      return true;
    }
  }
}

function titleCase(title) {
  var result = [];
  var lowercased = title.toLowerCase();
  var separatedWords = lowercased.split(' ');
  var singleWord = '';
  for (let i = 0; i < separatedWords.length; i++) {
    if (separatedWords[i] === 'javascript') {
      result.push('JavaScript');
    } else if (separatedWords[i] === 'api') {
      result.push('API');
    } else if (i === 0 && separatedWords[0] !== 'javascript') {
      singleWord = separatedWords[i][0].toUpperCase() + separatedWords[i].substring(1);
      result.push(singleWord);
      singleWord = '';
    } else if (separatedWords[i - 1][separatedWords[i - 1].length - 1] === ':') {
      singleWord = separatedWords[i][0].toUpperCase() + separatedWords[i].substring(1);
      result.push(singleWord);
      singleWord = '';
    } else if (checkIfMinorWord(separatedWords[i]) === true) {
      result.push(separatedWords[i]);
    } else {
      singleWord = separatedWords[i][0].toUpperCase() + separatedWords[i].substring(1);
      result.push(singleWord);
      singleWord = '';
    }
  }

  result = result.join(' ');
  return result;
}
/*
console.log('titleCase(the self-taught programmer: the definitive guide to programming professionally) value :  ', titleCase('the self-taught programmer: the definitive guide to programming professionally'));
console.log("titleCase('javascript: the definitive guide') value :  ", titleCase('javascript: the definitive javaSCRIPT guide'));
 */
