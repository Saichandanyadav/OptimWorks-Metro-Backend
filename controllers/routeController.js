const Station = require("../models/Station");
const { findRoute } = require("../utils/graphUtils");

exports.findOptimalRoute = async (req, res) => {
  try {
    const { source, destination } = req.body;
    const stations = await Station.find().populate("line");
    const result = findRoute(source, destination, stations);

    if (!result) {
      return res.status(404).json({ message: "Route not found" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
