const Line = require("../models/Line");

exports.createLine = async (req, res) => {
  const { name, color } = req.body;
  const line = new Line({ name, color });
  await line.save();
  res.status(201).json({message: "Line is Created Successfully", line});
};

exports.getAllLines = async (req, res) => {
  const lines = await Line.find();
  res.json({message: "All Lines", lines});
};

exports.getLineById = async (req, res) => {
  const line = await Line.findById(req.params.line_id);
  if (!line) return res.status(404).json({ message: "Line not found" });
  res.json({message: `Line ID is: ${req.params.line_id}`, line});
};

exports.updateLine = async (req, res) => {
  const line = await Line.findByIdAndUpdate(req.params.line_id, req.body, { new: true });
  if (!line) return res.status(404).json({ message: "Line not found" });
  res.json({ message: "Line was Updated", line });
};

exports.deleteLine = async (req, res) => {
  const line = await Line.findByIdAndDelete(req.params.line_id);
  if (!line) return res.status(404).json({ message: "Line not found" });
  res.json({ message: "Line deleted" });
};
