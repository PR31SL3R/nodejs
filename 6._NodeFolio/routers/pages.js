const router = require("express").Router();

router.get("/test", (req, res) => {
    res.send("<h1>test</h1>");
});

module.exports = {
    router
};