"use strict";
const { check } = require("express-validator");
const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;
const validations = require('./rating');

const movieIdValidator = [
    check("id", "Movie ID is required.").notEmpty(),
    check("id", "Invalid Movie ID.").custom(str => {
        if (ObjectID.isValid(str) === false) {
            return false;
        } else {
            return true;
        }
    }),
]

const ratings = [
    ...movieIdValidator, ...validations.getRatings
]

module.exports = { movieIdValidator, ratings };
