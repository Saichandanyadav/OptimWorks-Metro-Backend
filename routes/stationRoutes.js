const express = require("express");
const router = express.Router();
const {
  addStation,
  getStationsByLine,
  getAllStations
} = require("../controllers/stationController");

router.post("/:line_id/stations", addStation);
router.get("/:line_id/stations", getStationsByLine);
router.get("/", getAllStations);

module.exports = router;
