const express = require("express");
const app = express();

app.use(express.static("public"));

/* Import and use routes */
const projectsRouter = require("./routers/projects.js");
app.use(projectsRouter.router);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/projects", (req, res) => {
    res.sendFile(__dirname + "/public/projects/projects.html");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});
