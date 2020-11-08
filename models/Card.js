const mongoose = require("mongoose");

const CardSchema = mongoose.Schema({
  front: String,
  back: String,
  quick: Boolean,
  repetition: {
    schedule: Date,
    factor: Number,
  }
});

module.exports = mongoose.model("cards", CardSchema);
