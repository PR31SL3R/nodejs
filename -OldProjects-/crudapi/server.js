const express = require("express");  //imports and saves variable
const app = express(); // instantiates server

let plants = [
    {
        id: 1,
        title: "this will bite tou"
    },
    {
        id: 2,
        title: "scary terry"
    }
];


app.get("/plants", (req, res) => {
    //Send a response
    
    res.send({plants});
    
    })

    //app.get("/plants/:id", (req, res) => {
        //Send a response
       // const plantid = req.params.id
       // const foundplant = plants.find(x => x.id === req.params.id)

       // console.log(foundplant);
        
       // res.send(foundplant);
        
       // })

       app.get("/plants/:id", (req, res) => {
        let plant = plants.find(plant => plant.id === parseInt(req.params.id));
        if (!plants) return res.status(404).send("The plant with given id was not found");
     
        res.send(plant);
    });

    app.listen(9091);