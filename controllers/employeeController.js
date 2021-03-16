const db = require("../models");

// Defining methods for the employeeController
module.exports = {
  findAll: function(req, res) {
    db.Employee
      .find({})
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Employee
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Employee
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateAdd: function(req, res) {
    db.Employee
      .findOneAndUpdate({ barcode: req.body.barcode }, { $inc: { count: req.body.count }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateRemove: function(req, res) {
    db.Employee
      .findOneAndUpdate({ barcode: req.body.barcode }, { $inc: { count: -req.body.count }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Employee
      .findById({ barcode: req.params.barcode })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};