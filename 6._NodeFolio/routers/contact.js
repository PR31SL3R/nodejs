const router = require("express").Router();

router.post("/api/contact", (req, res) => {
    console.log(req.body);
    //res.send("<h1>OK!</h1>");
    res.redirect("/contact");
});



module.exports = {
    router
};