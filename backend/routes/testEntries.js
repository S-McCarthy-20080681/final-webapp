const entryModel = require('../api/entryModel.js');

const entries = [
        {
          id: 1,
          title: "Creating an Online Journal for my Web App class",
          body: "This is an entry to a Stub API, to give me some data to work with while developing my web app"
  
      },
];

module.exports = loadEntries = () => {
  entryModel.find({}).remove(function() {
    entryModel.collection.insert(entries, (err, docs) => {
      if (err) {
        console.log(`failed to load Entry Data`);
      } else {
        console.info(`${entries.length} journal entries were successfully stored!`);
      }
    });
  });
};