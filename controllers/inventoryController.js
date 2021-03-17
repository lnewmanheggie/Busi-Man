const db = require("../models");

// Defining methods for the inventoryController
module.exports = {
  findAll: function (req, res) {
    db.Inventory
      .find({ company: req.company })
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    req.body.company = req.company
    db.Inventory
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log("ERR:", err)
        res.status(422).json(err)
      });
  },
  updateAdd: function (req, res) {
    req.body.company = req.company;
    db.Inventory
      .findOneAndUpdate({ barcode: req.body.barcode, company: req.body.company }, 
        { $inc: { count: req.body.count } })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log("ERR:", err)
        res.status(422).json(err)});
  },
  updateRemove: function (req, res) {
    req.body.company = req.company;
    console.log(req.body.company);
    db.Inventory
      .findOneAndUpdate({ barcode: req.body.barcode, company: req.body.company },
         { $inc: { count: -req.body.count } })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log("ERR:", err)
        res.status(422).json(err)});
  },
  remove: function (req, res) {
    req.body.company = req.company;
    db.Inventory
      .find({ barcode: req.params.barcode, company: req.body.company })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};