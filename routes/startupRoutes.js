const express = require("express");
const startupController = require("../controllers/startupController");
const router = express.Router();

router.get("/getStartup/:id", startupController.get);
router.get("/getStartups", startupController.getMany);
router.post("/new", startupController.create);

module.exports = router;