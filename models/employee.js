const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true},
  isManager: {type: Boolean, required: true}
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;