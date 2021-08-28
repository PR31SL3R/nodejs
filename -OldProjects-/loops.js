//25/2 - loops

// we aim to use functional approaches like map filter find ect


//Loop through array using mao - print result

const failures = ["misclick","falling","tripping","dancing","fail"]
                    //lamdba
failures.map((item, index) => console.log(item, index))


// print with index numbers  
//const newArray = items.map(console.log)



//map returns an empty array of the given size - use failure to get original array

    const newfailures = failures.map((failure) =>{
        return{failure}
    })

    console.log(newfailures)

    //newfailures oneliner to getoriginal array

    const newfailures2 = failures.map((failure) => failure)
    console.log(newfailures2)

    // create a new server from scratch project 2

