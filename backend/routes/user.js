const { f1 } = require("../controllers/user");
const express = require("express");
const router = express.Router();

//if router gets something/user, then this will be executed
router.get("/user", f1);

module.exports = router;
