const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/busiman"
);
const AnnoucementsSeed = [
    {
    nameofemployee: "joe",
    date: new Date(Date.now()),
    body: "tom has added apples to the store."
  
    }
];
db.Annoucements
  .remove({})
  .then(() => db.Annoucements.collection.insertMany(AnnoucementsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });