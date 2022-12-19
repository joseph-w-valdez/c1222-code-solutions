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

/* function reverseWords(string) {
  var container = [];
  var result = [];
  var objectLiteral = {};
  container.push(string.split(' '));
  for (let i = 0; i < container.length; i++) {
    for (let j = 0; j < container[i].length; j++) {
      var temp = '';
      temp[container[i]] = container[i][j];
    }
  }
  return temp; */
