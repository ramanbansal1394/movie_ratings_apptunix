"use strict";
const { check } = require("express-validator");
const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

/**
 *    Api
 * validations
 */
const create = [
  check("user_id", "User ID is required.").notEmpty(),
  check("movie_id", "Movie ID is required.").notEmpty(),
  check("rating", "Rating is required.").notEmpty(),
  check("comment", "Comment is required.").notEmpty(),
  check("rating", "Invalid Rating.").custom((value) => {
    if (1 <= value && value <= 5) {
      return true;
    } else {
      return false;
    }
  }),
  check("user_id", "Invalid User ID.").custom(str => {
    if (ObjectID.isValid(str) === false) {
      return false;
    } else {
      return true;
    }
  }),
  check("movie_id", "Invalid Movie ID.").custom(str => {
    if (ObjectID.isValid(str) === false) {
      return false;
    } else {
      return true;
    }
  }),
];


const getRatings = [
  check("limit", "Limit is required.").notEmpty(),
  check("offset", "Offset is required.").notEmpty(),
  check("limit", "Invalid limit.").custom((value) => {
    if (value > -1) {
      return true;
    } else {
      return false;
    }
  }),
  check("offset", "Invalid offset.").custom((value) => {
    if (value > -1) {
      return true;
    } else {
      return false;
    }
  }),
]

module.exports = { create, getRatings };
