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
create empty array representing the result
force the string to be fully lowercased
split the string by spaces
set an empty string to act as a container for each adjusted word
use a for loop to iterate through each word
if the word is 'javascript' it becomes 'JavaScript'; if 'api' -> 'API'; if 'javascript:' -> 'JavaScript:'; if 'api:' -> 'API:'
then push it into the result array
check if the word contains a hyphen by using an if statement and a callback function that loops through to check if any individual letter === '-'
if so, capitalize the first half of the word including the hyphen and set it to a temporary variable
then capitalize the second half of the hyphenated word and set it to another temporary variable
concatenate these two variables together for the full word and push this word to the result array
if the word is not hyphenated, check if it is the first word. if so, capitalize it and add it to the result array
if not, check if the previous word's last letter ended in a semicolon
if so, capitalize it and add it to the result array
if not, check if it is a minor word with an if statement and a callback function that uses a for loop to iterate through
an array containing the defined minor words.
if so, add the word as it is, without capitalization.
if no above conditions apply, capitalize the first letter of the word and add it to the result array
join the result array with a '_' as the argument to space them apart by one space value
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

function checkHyphens(string) {
  for (let j = 0; j < string.length; j++) {
    if (string[j] === '-') {
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
    } else if (separatedWords[i] === 'javascript:') {
      result.push('JavaScript:');
    } else if (separatedWords[i] === 'api:') {
      result.push('API:');
    } else if (checkHyphens(separatedWords[i]) === true) {
      var hyphenIndex = separatedWords[i].indexOf('-');
      var firstHalf = separatedWords[i][0].toUpperCase() + separatedWords[i].slice(1, hyphenIndex + 1);
      var secondHalf = separatedWords[i][hyphenIndex + 1].toUpperCase() + separatedWords[i].substring(hyphenIndex + 2);
      var hyphenatedWord = firstHalf + secondHalf;
      result.push(hyphenatedWord);
    } else if (i === 0) {
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

/* console.log('titleCase(the self-taught programmer: the definitive guide to programming professionally) value :  ', titleCase('the self-taught programmer: the definitive guide to programming professionally'));
console.log("titleCase('javascript: the definitive guide') value :  ", titleCase('javascript: the definitive javaSCRIPT guide'));
console.log("titleCase('secrets of the javascript ninja') value :  ", titleCase('secrets of the javascript ninja'));
console.log("titleCase('speaking Javascript: an in-depth guide for programmers') value :  ", titleCase('speaking Javascript: an in-depth guide for programmers')); */
