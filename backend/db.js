const mongoose = require('mongoose');
const app = require('./app');

//Connect to Mongo database
mongoose.connect('mongodb+srv://test-user:test@webapp-cluster.u1qae.mongodb.net/entry_db?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;
const entriesCollection = db.collection('entries');

db.on('error', (err) => {
    console.log(`database connection error: ${err}`);
});

db.on('disconnected', () => {
    console.log('database disconnected');
});

db.once('open', () => {
    console.log(`database connected to ${db.name} on ${db.host}`);
});

//TAKEN OUT DUE TO ERRORS IT CAUSES IN BACKEND:

// app.post('/entries', (req, res) => {
//     entriesCollection.insertOne(req.body)
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => console.error(error))
// })

module.exports = db;