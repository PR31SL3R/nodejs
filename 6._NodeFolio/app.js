const express = require("express");
const app = express();


//path module løser forbidden problemet path.join
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

/* Import and use routes */
const projectsRouter = require("./routers/projects.js");
app.use(projectsRouter.router);

const testRouter = require("./routers/pages.js");
app.use(testRouter.router);

const contactRouter = require("./routers/contact.js");
app.use(contactRouter.router);

const {createPage} = require("./render.js") //descructering




const frontpagePage = createPage("./public/pages/frontpage/frontpage.html", {title: "This is the frontpage"});
const cvPagePage = createPage("./public/pages/cv/cv.html", {title: "CV"});
const contactPage = createPage("./public/pages/contacts/contact.html", {title: "contact"})
const projectsPage = createPage("./public/pages/projects/projects.html", {title: "projects"})


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/projects", (req, res) => {
    res.send(projectsPage);
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

app.get("/cv", (req, res) => {
    res.send(cvPagePage);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});
