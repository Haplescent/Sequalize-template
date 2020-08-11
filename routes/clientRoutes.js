const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.send(path.resolve(__dirname, "../client/public/index.html"));
});

module.exports = router;
