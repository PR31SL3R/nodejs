let variableB;

console.log

{
    let scopedVariable = "abc";
    // this is a new scope. It creates a new excecution call stack
{
    // scope within a scope nested scope.
    scopedVariable = 123;
}

}

function someApplivation(){
    let myFavNumber = 43;
    const theirfav = whatsyourfav();
    return(myFavNumber,whatsyourfav)
}

//allways use let or const

for(let i = 0; i <= 6; i++){
    setTimeout(() => {
        console.log(i);
    },1000);
}

// install node
// npm == jre for node

//pom.xml is for dependencies and meta-information(artifacts) and build script
//npm install
//install node 
// install npm express

//node modules is where dppendencies are installed
//npm install
//npm install express

//eslint and  airbnb program?