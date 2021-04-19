const express = require("express");
const router = express.Router();
const { getUsers } = require("../db/jsonDB")

router.get("/status", (req, res) => {
  res.status(200)
  res.json({ status: "I am alive" })
});

router.get("/users", (req, res) => {
  const users = getUsers()
  res.status(200)
  res.json({ users })
})

module.exports = router;