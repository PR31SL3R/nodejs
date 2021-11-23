import express from "express";
const router = express.Router();

import {connectSqlite} from "../database/connectDB.js"

router.get("/games", (req,res) =>{
    const test = 
    console.log("");
    res.send({type: "sdcjnsdjcn"});

})

router.post("/games",(req,res) => {
    const gamesToCreate = req.body;

    const dbConnection = await connectSqlite();
    dbConnection.run("INSERT INTO GAMES ");



    res.send();
})

export default router;