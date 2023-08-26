const { register } = require("../controllers/user");
const express = require("express");
const router = express.Router();

//if router gets something/user, then this will be executed
router.post("/register", register);

module.exports = router;
