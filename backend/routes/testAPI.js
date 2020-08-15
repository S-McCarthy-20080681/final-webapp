var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Test route to show that the API works");
});

module.exports = router;