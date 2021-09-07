// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

//Concatenation "," = " +"
// vi vil gerne undgå type interference som kommer med plus
console.log("My first name is" , firstName , "and my last name is" , lastName);
//using variables
console.log(`My first name is ${firstName} and my last name is ${lastName}`);


// --------------------------------------
// Exercise 2 - Numbers and Strings

//datatype float og number
// type interferrence

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2021
// You cannot touch line 1 or 2

console.log(parseInt(year) + number) // please - parses until first lettet
console.log(Number(year) + number) // absolute - only parses actual numbers

// --------------------------------------