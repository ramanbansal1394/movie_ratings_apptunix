"use strict";
const express = require("express");
const router = express.Router();
const ctr = require("../controllers/rating"); // rating controller
const validations = require("../validations/rating");

router.post("/create", validations.create, ctr.create);
router.get("/ratings", validations.getRatings, ctr.allRatings);

module.exports = router;
