var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Test text to show the express backend is connected to the react frontend");
});

module.exports = router;