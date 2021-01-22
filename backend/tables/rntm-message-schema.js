const mongoose = require("mongoose");

const userMessageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
  sendTime: {
    type: String,
  }
});

const rntmUserMessage = mongoose.model("rntmUserMessage", userMessageSchema);
module.exports = rntmUserMessage;
