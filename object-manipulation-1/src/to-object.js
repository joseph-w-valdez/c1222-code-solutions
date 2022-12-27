/* exported toObject */
/*
pseudocode logic
----------------
toObject(keyValuePair)

objective
----------------
given an array with two elements push them into an object literal

plan
----------------

*/

function toObject(keyValuePair) {

  var objectLiteral = {};
  objectLiteral[keyValuePair[0]] = keyValuePair[1];
  return objectLiteral;
}
