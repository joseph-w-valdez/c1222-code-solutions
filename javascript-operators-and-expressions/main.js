var width = 5;
var height = 10;
var area = height * width;
console.log('the area is ', area);
console.log('the data type of the area is ', typeof area);

var bill = 14.99;
var payment = 20.00;
var change = payment - bill;
if (change >= 0) {
  console.log('the change is $' + change);
  console.log('the data type of the change is ' + typeof change);
} else { console.log('make em pay! >:('); }

var quizzes = 80;
var midterm = 92;
var final = 95;
var grade = (quizzes + midterm + final) / 3;
console.log('the grade is ', grade);
console.log('the data type of the grade is', typeof grade);

var firstName = 'Joseph ';
var lastName = 'Valdez';
var fullName = firstName + lastName;
console.log('my full name is ' + fullName);
console.log('the data type of fullName is', typeof fullName);

var pH = 4.3;
var isAcidic = pH < 7;
console.log('is it acidic? ', isAcidic);
console.log('the data type of isAcidic is ', typeof isAcidic);

var headCount = 300;
var isSparta = headCount === 300;
console.log('is this Sparta?', isSparta);
console.log('the data type of isSparta is ', typeof isSparta);

var motto = fullName;
motto = motto + ' is the GOAT!';
console.log('my motto is ', motto);
console.log('the data type of motto is ', typeof motto);
