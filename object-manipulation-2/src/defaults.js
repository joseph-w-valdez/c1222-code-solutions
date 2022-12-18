/* exported defaults */
/*
pseudocode logic
----------------
target(target, source)

objective
----------------
given two objects, add subobjects from the second given object that aren't in the first given object

plan
----------------
create new variables representing the target keys, the source keys, and source values
create an empty object literal to represent the nonduplicate entries of the source keys to prevent overwriting data
use a for loop to go through the source keys and use an includes function on the targetKeys variable
if there isn't a match, add the corresponding sourceKey and sourceValue pair to the empty nonduplicate source object literal
use Object.assign to add in the object literal items from the nonduplicate object literal and assign it to the target

*/

function defaults(target, source) {
  var targetKeys = Object.keys(target);
  var sourceKeys = Object.keys(source);
  var sourceValues = Object.values(source);
  var noDupeSource = {};
  for (let i = 0; i < sourceKeys.length; i++) {
    if (targetKeys.includes(sourceKeys[i]) === false) {
      noDupeSource[sourceKeys[i]] = sourceValues[i];
    }
  }

  target = Object.assign(target, noDupeSource);
}
