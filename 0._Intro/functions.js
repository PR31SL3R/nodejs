//create a function that is called greetings and prints out hello world
//hoisting - funktioner bliver løftet da hele js documentet bliver læst med det samme

function helloWorld() {
    console.log("helloworld");
}

helloWorld();



//anonym function er en function uden noget navn
const annonFunc = function (){
console.log("hello");
}

// create a function that is called interact. its body is empty



function interact(anyFunctionReference, second) {

    console.log(anyFunctionReference, second);

    poke();

    shove();

   
}

// call interact and pass anonfunc greeting as an argument

interact(annonFunc);

interact();

interact(1);

interact(1,2)

function poke(){
console.log("poke");
}

interact(poke)

function shove(){
    console.log("Puuuush");
}


// call interact with a poke interaction
// define a poke interaction and use it as a callback that is called later by interact


//flexbox froggy er mere elegant bootstrap pure css bootstrap squarespace 


// define a function inline in interact that does a new interaction




poke();

function InteractWithSomeone(anyFunctionReference, name){
    anyFunctionReference(name);

}

const callBackLater = (name) => {
    console.log("hello " + name);
    console.log('hello ');

}



InteractWithSomeone(callBackLater,"rune")

// create help with homework later function that helps a person later

const helpWithHomeworkLater = (name) => {
    console.log("help later")

}

InteractWithSomeone(helpWithHomeworkLater)


