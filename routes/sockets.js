const express = require("express");
const router = express.Router();

router.get("/api/messages", (req, res) => {
  res.send("messages api is up and running");
});

router.get("/api/draw_line", (req, res) => {
  res.send("draw line api is up and running");
});

module.exports = router;
