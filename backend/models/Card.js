const mongoose = require("mongoose");

const CardSchema = mongoose.Schema({
  front: String,
  back: String,
  quick: Boolean,
});

module.exports = mongoose.model("cards", CardSchema);
