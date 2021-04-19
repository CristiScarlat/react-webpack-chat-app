const express = require("express");
const router = express.Router();

router.get("/status", (req, res) => {
  res.status(200)
  res.json({ status: "I am alive" })
});

module.exports = router;