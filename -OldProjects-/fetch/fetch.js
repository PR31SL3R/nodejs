const express = require("express");
const app = express();
app.use(express.json()); //send empty json with no body?
app.get("/somepage", (req, res) => {
  res.send("Hello there, general potato");
});
app.use(express.static(__dirname + "/public")); //
const PORT = process.env.PORT || 8080; //cross-env
const fetch = require("node-fetch");
const encoding = require("encoding");
//npm install encoding
//textConverted()



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/proxy", (req, res) => {
  fetch("https://www.google.com/")
    .then((response) => encoding.convert(response.text(), "UTF-8", "DONT KNOW"))
    .then((body) => res.send(body));
});

console.log(PORT);
const server = app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server is running on port:", server.address().port);
});
