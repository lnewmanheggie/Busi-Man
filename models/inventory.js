const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  barcode: { type: Number, required: true },
  name: { type: String, required: true },
  count: { type: Number, required: true },
  price: { type: Number, required: true},
  company: {type: String, required: true}
});

const Inventory = mongoose.model("Item", inventorySchema);

module.exports = Inventory;