const Station = require("../models/Station");

exports.addStation = async (req, res) => {
  const { name, distanceFromPrevious, stationNumber, isInterchange } = req.body;
  const { line_id } = req.params;

  const station = new Station({
    name,
    line: line_id,
    distanceFromPrevious,
    stationNumber,
    isInterchange
  });

  await station.save();
  res.status(201).json({ message: "New Station was added", station });
};

exports.getStationsByLine = async (req, res) => {
  const stations = await Station.find({ line: req.params.line_id }).sort({ stationNumber: 1 });
  res.json(stations);
};

exports.getAllStations = async (req, res) => {
  const stations = await Station.find().populate("line");
  res.json(stations);
};
