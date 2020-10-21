const mongoose = require("mongoose");
require('./Card')

const StackSchema = mongoose.Schema({
  name: String,
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'cards'
    },
  ],
  picture: {
    type: String,
  },
});

module.exports = mongoose.model("stacks", StackSchema);
