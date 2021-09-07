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

//var

var oldSchoolJS = -10;
// med var kan man risikere at overskrive variabler da var er "global" og let holder sig til scopet

//for(i = 1; i<6; i++){
//    console.log(i);
//}

for (let i = 1; i < 6; i++){
    setTimeout(function runsafftheloop(){
        console.log(i)
    },1000)
    

}