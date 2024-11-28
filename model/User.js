const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
