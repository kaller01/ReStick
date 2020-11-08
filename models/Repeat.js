const mongoose = require("mongoose");

const RepeatSchema = mongoose.Schema({
  schedule: Date,
  repetition: {
    interval: Number,
    efactor: Number,
    repetition: Number
  },
  card: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cards",
  },
  stack: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "stacks"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = mongoose.model("repeats", RepeatSchema);
