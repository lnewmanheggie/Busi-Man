const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  barcode: { type: Number, required: true },
  name: { type: String, required: true },
  count: { type: Number, required: true },
  price: { type: Number, required: true},
  employee: {type: String, required: true},
  company: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Transactions = mongoose.model("Transactions", transactionSchema);

module.exports = Transactions;