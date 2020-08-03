const express = require("express");
const router = express.Router();
const userLogController = require("../controllers/userLog.controller");
//retrieve logs for user by id
router.get("/:id", userLogController.findById);
module.exports = router;
