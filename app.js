

// Exercise 1
// Declaration - with a declaration keyword and identifier
// Assignment - using the assignment operator to assign a variable a value

// Var and let variables can be re-assigned
// Const variables cannot be re-assigned

// Camel Casing is a naming convention in JS
// Ex: thisIsCamelCased

const firstName = "David";
let lastName = "Howard";
var age = 28;
let isRight = true;

let fullName = firstName + " " + lastName;
console.log(fullName);

// Template strings denoted by backticks
let templateFullName = `${firstname} ${lastname}`; 
console.log(templateFullName);

let city = "Alabaster";
let pasttime = "Music";

let myStory =
  "Hello I am " + fullName + ". I live in " + city + ". I like " + pasttime + ", and coding.";
console.log(myStory);

let templateMyStory = `Hello I am ${fullName}. I live in ${city}. I like ${pasttime}, and coding.`;
console.log(templateMyStory);
