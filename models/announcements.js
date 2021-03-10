const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnnoucementsSchema = new Schema({
  nameofemployee: { type: String, required: true },
  date: { type: Date, default: Date.now },
  body: { type: String, required: true },
});

const Annoucements = mongoose.model("Item", AnnoucementsSchema);

module.exports = Annoucements;

// const mongoose = require("mongoose");
// const db = require("../models");
// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/busiman"
// );
// const AnnoucementsSeed = [
//     {
//     nameofemployee: "",
//     date: "date here?",
//     body: "tom has added apples to the store."
  
//     }
// ];
// db.Annoucements
//   .remove({})
//   .then(() => db.Annoucements.collection.insertMany(AnnoucementsSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });