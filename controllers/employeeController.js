const db = require("../models");

// Defining methods for the employeeController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find({ company: req.company })
      .sort({ firstName: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    req.body.company = req.company;
    db.User
      .findById({ email: req.params.email, company: req.body.company })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};