const mongoose = require("mongoose");

const StationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  line: { type: mongoose.Schema.Types.ObjectId, ref: "Line" },
  stationNumber: Number,
  distanceFromPrevious: Number,
  isInterchange: Boolean
});

module.exports = mongoose.model("Station", StationSchema);
