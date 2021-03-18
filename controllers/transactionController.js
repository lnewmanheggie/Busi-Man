const db = require("../models");

module.exports = {
    create: function(req, res) {
      req.body.company = req.company;
        db.Transactions
          .create(req.body)
          .then(dbModel => {
            res.json(dbModel)})
          .catch(err => res.status(422).json(err));
      },

      findAll: function (req, res) {
        db.Transactions
          .find({ company: req.company })
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    
}