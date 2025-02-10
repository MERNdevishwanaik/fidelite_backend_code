const mongoose = require("mongoose");

const GuestSchema = new mongoose.Schema({
  image: String,
  name: String,
  phone: String,
  email: String,
});

module.exports = mongoose.model("Guest", GuestSchema);
