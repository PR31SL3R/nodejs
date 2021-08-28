require ("express");

//understanding callback function

const express = require("express");
const app = express();


app.get("/", (req, res) => {
//Send a response

res.send({});



})

app.get("/about", (req,res) =>{

    res.json({
        Version: "1.0.0"
    });


});
// try to send a headtag
app.get("/page", (req,res) =>{

    res.send("<h1>test</h1>");
//"<h1>test</h1>"

});



//create a route on the endpoint me which send a json that represents you.



// GET
// POST
// UPDATE
// DELETE

//const weekdays = ["Sunday", "Monday", "Tuesday", "Weddnesday", "Thursday", "Friday", "Saturday"];

app.get("/day",(req,res) => {


    const currentWeekday = new Date().getDay();
    res.send({day: weekdays[currentWeekday]});
});
    
    app.get("/me", (reg, res) => { 
        res.send({ message: "My name is jesper"} );
    } );
    
    //npm install .-g nodemon
    //a way of running the code- g is globally
    
    //nodemon app.js
    //nodemon testfile

//keep on bottom - starts the server
app.listen(9090);