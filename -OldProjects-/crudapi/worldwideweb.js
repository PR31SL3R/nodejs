const express = require("express"); //imports and saves variable
const app = express(); // instantiates server

plants = [1, 2, 3, 4, 5];
blow = "blow;";

app.get("/plants", (req, res) => {
  //Send a response

  res.send({ plants });
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  //Send a response

  res.sendFile(__dirname + "/public/dragons.html");
});
//enviroment variable

//http://localhost:8080/candle?blow=blow
app.get("/candle", (req, res) => {
  //Send a response
  if (req.query.blow) {
    return res.send({ lightson: false });
  }
  console.log(req.query);

  res.send({ lightson: true });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server is running in PORT ", Number(PORT));
});

// npm install cross env
app.listen(9091);
