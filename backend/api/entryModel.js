var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    id: {type: Number},
    title: String,
    body: String,
});

module.exports = mongoose.model('Entry', EntrySchema);