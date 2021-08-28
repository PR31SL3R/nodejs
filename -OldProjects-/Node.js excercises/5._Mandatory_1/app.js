const express = require("express");
const app = express();

app.use(express.static('public'))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index/index.html");
});

app.get("/week1", (req, res) => {
    res.sendFile(__dirname + "/public/week1.html");
});

app.get("/week2", (req, res) => {
    res.sendFile(__dirname + "/public/week2.html");
});

app.get("/week3", (req, res) => {
    res.sendFile(__dirname + "/public/week3.html");
});

app.get("/week4", (req, res) => {
    res.sendFile(__dirname + "/public/week4.html");
});

app.get("/week5", (req, res) => {
    res.sendFile(__dirname + "/public/week5.html");
});
app.get("/week6", (req, res) => {
    res.sendFile(__dirname + "/public/week6.html");
});
app.get("/week7", (req, res) => {
    res.sendFile(__dirname + "/public/week7.html");
});
app.get("/week8", (req, res) => {
    res.sendFile(__dirname + "/public/week8.html");
});











const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});