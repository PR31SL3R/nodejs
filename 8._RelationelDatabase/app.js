//const express = require("express");
// knex og objection
// mro kan genere ovenstående
import express from "express";
const app = express();


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json);

import sauceRouter from "./sauce.js";
import gamesRouter from "./database/games.js";

app.use(sauceRouter);
app.use(gamesRouter);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(8080);