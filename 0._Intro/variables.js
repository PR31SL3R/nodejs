//"use strict";

// const skal bruges nu variablen ikke ændrer sig

// total global variable
insanevariable = "this is not good"; // kaster en fejl i strictmode


// let ændrer sig
let age = 27;

const person = {name:"John"}

//dette kan gøres med const
person.name = "Bob";

person.age = 27;

console.log(person);

//dette kan ikke gøres med const
//person = "";
//person = {sound: "bzzz"};
//delete person; ?? kan dette slettes

//console.log(person);

const immuteableperson = Object.freeze(person)
immuteableperson.name = "new name";