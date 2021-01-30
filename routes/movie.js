"use strict";
const express = require("express");
const router = express.Router();
const ctr = require("../controllers/movie"); // movie controller
const validations = require("../validations/movie");

router.get("/count-average/:id",validations.movieIdValidator, ctr.countAverageOfMovie);
router.get("/ratings/:id",validations.ratings, ctr.ratings);

module.exports = router;
