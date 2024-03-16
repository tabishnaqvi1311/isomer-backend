const express = require("express");
const authControllers = require("../controllers/authController");
const router = express.Router();

router.post("/login", authControllers.login);
router.post("/signup", authControllers.signup);

module.exports = router;