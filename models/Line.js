const mongoose = require("mongoose");

const LineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true }
});

module.exports = mongoose.model("Line", LineSchema);
