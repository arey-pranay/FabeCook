const express = require("express");
const router = express.Router();

app.get("/user", (req, res) => {
  res.send("Welcome to user home");
});

module.exports = router;
