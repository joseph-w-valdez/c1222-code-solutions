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

function titleCase(title) {
  var result = [];
  var lowercased = title.toLowerCase();
  var separatedWords = lowercased.split(' ');
  var singleWord = '';
  for (let i = 0; i < separatedWords.length; i++) {
    if (separatedWords[i] === 'a') {
      result.push(separatedWords[i]);
    } else if (separatedWords[i] === 'javascript') {
      result.push('JavaScript');
    } else if (separatedWords[i] === 'api') {
      result.push('API');
    } else {
      singleWord = separatedWords[i][0].toUpperCase() + separatedWords[i].substring(1);
      result.push(singleWord);
      singleWord = '';
    }
  }
  /* for (let i = 0; i < separatedWords.length; i++) {

  } */
  result = result.join(' ');
  return result;
}
/* console.log("titleCase('composing the software') value :  ", titleCase('a composing: the software'));
console.log("titleCase('professional JavaScript for web developers') value :  ", titleCase('professional JavaScript for web developers')); */
