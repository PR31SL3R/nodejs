const express = require("express");
const app = express();
 
app.use(express.json());
 
let plants = [
        {
        id: 1,
        name: "Extremely dangenoderous plant"
    },
    {
        id: 2,
        name: "This one will bite your toes of"
    },
    {
        id: 3,
        name: "I like chicken"
    },
]

let id = plants.length
 
app.get("/plants", (req, res) => {
    res.send({ "These plants will eat you!": plants });
});
 
app.get("/plants/:id", (req, res) => {
    let plant = plants.find(plant => plant.id === parseInt(req.params.id));
    if (!plants) return res.status(404).send("The plant with given id was not found");
 
    res.send(plant);
});
 
app.post("/plants", (req, res) => {
    //Get the data
    const newPlant = req.body
    //add id - discarding old value
    newPlant.id = ++id;
    //send data back
    plants.push(newPlant);
    res.send({Data: newPlant})

    const plant = {
        id: plants.length + 1,
        name: req.body.name
    }
    plants.push(plant);
    res.send({ body: req.body })
});

app.delete("/plants/:id", (req, res) => {
    //get the id
    const id = Number(req.params.id);
    //remove from array - loop
    plants = plants.filter(plant => plant.id !== id);
    res.send({ });

});

app.patch("/plants/:id", (req, res) => {
    let plantUpdated = false;
    //map
    plants = plants.map(plant => {
        if(plant.id === Number(req.params.id)){
            plantUpdated=true;
        //change the plant
        plant.body = req.body
        //unpack the body

        return {... plant , ... req.body, id: plant.id};
    }
        return plant
    })
    

    res.send({})
});
 
const port = 9090;
app.listen(port, (error) => {
    if (error) {
        console.log(error)
    }
    console.log(`Connection established on port ${port}`);
});