const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/busiman"
);

const userSeed = [
  {
    firstName: 'test',
    lastName: 'testtest',
    email: 'test@test.com',
    company: 'testing',
    password: '123testme',
    confirmPassword: '123testme'
  }

]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });