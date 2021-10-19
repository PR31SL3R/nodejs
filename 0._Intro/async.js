// why
// since Javascript is single-threaded
// we want to avoid blocking

// when 
// requesting (over a network)
// database
// user input
// I/O = (File handling)
// Pyramid of doom/CALL BACK HELL



// promisses er det samme som callbacks
// 2 forskellige states

//pending 


//fulfilled
    //resolved/rejected
/*
new Promise((resolve,reject) => {
    setTimeout(() => {
        try {
            throw new Error("shoot");
            resolve("everything went well");

            
        } catch {
            reject("Oh NO");
            
        }
    },4000);
    resolve("Everything went well");
})
.then(message => console.log("the message is", message))
.catch(errorMessage => console.log("error message", errorMessage));


/* Create a promise that resolves with "noice "  and rejects with "damn"*/

/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw new Error("shoot");
            resolve("Everyting went well");
        } catch {
            reject("OH NO!");
        }
    }, 4000);
})
.then(message => console.log("The message is:", message))
.catch(errorMessage => console.log("Error was:", errorMessage));
*/

/*

function nodeIsAMood(params) {
    return new Promise((resolve, reject) => {
    


new Promise((resolve,reject) => {
    setTimeout(()=> {
    try {
        resolve("Noice");
        
    } catch (error) {
        reject("danm");
        
    }
}, 3000);

});

}

nodeIsAMood()
.then(console.log)
.catch(console.log)

*/

async function asyncAwait(params) {
    const message = await nodeIsAMood();
    console.log(message);
}

asyncAwait();