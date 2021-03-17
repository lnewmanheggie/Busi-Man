const db = require("../models");

// Defining methods for the announcement controller
module.exports = {
  findAll: function (req, res) {
    db.Announcements
      .find({ company: req.company })
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    req.body.company = req.company
    db.Announcements
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log("ERR:", err)
        res.status(422).json(err)
      });
  }
};