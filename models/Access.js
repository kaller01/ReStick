const mongoose = require("mongoose");

const AccessSchema = mongoose.Schema({
  stack: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'stacks'
  },
  permission: Boolean,
  subscribed: Boolean
});

module.exports = mongoose.model("access", AccessSchema);