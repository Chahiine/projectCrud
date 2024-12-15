const express = require("express");
const router = express.Router();
const User = require("../models/employé");
const usersController = require("../controller/employéController");
const validate = require("../middll/validate");
const employé = require("../models/employé");

router.post("/newemploye", employéController.addemployé);

module.exports = router;