/* exported titleCase */
/*
pseudocode logic
----------------
titleCase(title)

objective
----------------
given a title, return it with APA formatting
-must capitalize the first word of the title and subtitle
-capitalize all "major" words (nouns, verbs, adjectives, adverbs, pronouns, and words )

plan
----------------
create a container array
separate each word by using split(' ') into its own subarray and add them to the new container array
use a for loop for each subarray and flip the order
add each flipped word into a result array and join them together back into a string

*/
