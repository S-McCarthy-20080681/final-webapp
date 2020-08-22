const mongoose = require('mongoose');

//Connect to Mongo database
mongoose.connect('mongodb://127.0.0.1:27017/entry_db', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(`database connection error: ${err}`);
});

db.on('disconnected', () => {
    console.log('database disconnected');
});

db.once('open', () => {
    console.log(`database connected to ${db.name} on ${db.host}`);
})

module.exports = db;