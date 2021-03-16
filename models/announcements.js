const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnnoucementsSchema = new Schema({
  nameofemployee: { type: String, required: true },
  date: { type: Date, default: Date.now },
  body: { type: String, required: true },
  company: {type: String, required: true}
});

const Annoucements = mongoose.model("Announcements", AnnoucementsSchema);

module.exports = Annoucements;