const express = require("express");
const router = express.Router();
const {
  createLine,
  getAllLines,
  getLineById,
  updateLine,
  deleteLine
} = require("../controllers/lineController");

router.post("/", createLine);
router.get("/", getAllLines);
router.get("/:line_id", getLineById);
router.put("/:line_id", updateLine);
router.delete("/:line_id", deleteLine);

module.exports = router;
