const express = require("express");
const router = express.Router();
const { findOptimalRoute } = require("../controllers/routeController");

router.post("/find", findOptimalRoute);

module.exports = router;