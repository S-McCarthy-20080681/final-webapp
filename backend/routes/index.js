var express = require('express');
var Entry = require('../api/entryModel.js');
var asyncHandler = require('express-async-handler');
var router = express.Router();
require('../db.js');
require('./testEntries.js');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', asyncHandler(async (req, res) => {
  const entries = await Entry.find();
  return res.send(entries);
}));

//add a journal entry
router.post('/', asyncHandler(async (req, res) => {
  const newEntry = req.body;
  if (newEntry) {
    const entry = await Entry.create(newEntry);
    return res.status(201).send({entry});
  } else {
    return handleError(res, err);
  }
}));

//REMOVED AS IT KEEPS IDENTIFYING 'id' AS A STRING, CAUSING A LARGE AMOUNT OF TEXT AND AN ERROR TO POST ON THE APP PAGE
//get a specific journal entry
// router.get('/:id', asyncHandler(async (req, res) => {
//   const id = req.params.id;
//   const entry = await Entry.findById(id);
//   return res.send({entry});
// }));

//error handler
function handleError(res, err) {
  return res.status(500).send(err);
};

//populating entry_db with testEntries
if (process.env.seedDb) {
  loadEntries();
}

module.exports = router;
