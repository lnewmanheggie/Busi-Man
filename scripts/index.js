const mongoose = require("mongoose");
const db = require("../models");
const AnnoucementsSeed = require('./announcementSeed.js');
const inventorySeed = require('./inventorySeed.js');
const userSeed = require('./userSeed');
const transactionSeed = require('./transactionSeed');

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/busiman"
);

db.Transactions
  .remove({})
  .then(() => db.Transactions.collection.insertMany(transactionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Announcements
  .remove({})
  .then(() => db.Announcements.collection.insertMany(AnnoucementsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Inventory
  .remove({})
  .then(() => db.Inventory.collection.insertMany(inventorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
