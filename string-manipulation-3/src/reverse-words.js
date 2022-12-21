/* exported reverseWords */
/*
pseudocode logic
----------------
reverseWords(string)

objective
----------------
reverse each word in a string, but retain the word order

plan
----------------
create a container array
separate each word by using split(' ') into its own subarray and add them to the new container array
use a for loop for each subarray and flip the order
add each flipped word into a result array and join them together back into a string

*/
// container = ['this', 'is', 'a', 'test']
// go into each container[i] using a for loop
//

function reverseWords(string) {
  var separatedWords = string.split(' ');
  var reversedWords = [];
  var reversedWord = '';
  for (let i = 0; i < separatedWords.length; i++) {
    for (let j = separatedWords[i].length - 1; j >= 0; j--) {
      reversedWord += separatedWords[i][j];
    }
    reversedWords.push(reversedWord);
    reversedWord = '';
  }
  var result = reversedWords.join(' ');
  return result;
}

/* console.log("reverseWords('All Code All Day') value :  ", reverseWords('All Code All Day'));
console.log("reverseWords('follow your passion') value :  ", reverseWords('follow your passion')); */
