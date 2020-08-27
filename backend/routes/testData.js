var express = require("express");
const testData = require('./testEntries.js')
var router = express.Router();

router.get("/", (req, res, next) => {
    res.send(testData);
});

module.exports = router;