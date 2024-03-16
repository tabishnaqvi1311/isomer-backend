const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/getUser/:id", userController.getUser);

module.exports = router;