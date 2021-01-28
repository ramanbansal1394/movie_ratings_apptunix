"use strict";
const { check, body } = require("express-validator");
const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

/**
 *    Api
 * validations
 */
// const registration = [
//   check("username", "Username is required.").notEmpty(),
//   check("password", "Password is required.").notEmpty(),
//   check("email", "Email is required.").notEmpty(),
//   check("email", "Invalid Email.").isEmail(),
//   check("confirm_password", "Confirm password is required.").notEmpty(),
//   body("password", "Password should be atleast 7 characters long.").custom((str) => {
//     if (String(str).trim().length > 6) {
//       return true;
//     } else {
//       return false;
//     }
//   }),
//   body("confirm_password", "Passwords do not matched.").custom((str, { req }) => {
//     if (req.body.password && str && str === req.body.password) {
//       return true;
//     } else {
//       return false;
//     }
//   }),
// ];

// const updateUser = [
//   check("id", "ID is required.").custom(str => {
//     if (str === 'undefined' || str === '' || str === 'null' || str === undefined || str === null) {
//       return false;
//     } else {
//       return true;
//     }
//   }),
//   check("id", "Invalid ID.").custom(str => {
//     if (ObjectID.isValid(str) === false) {
//       return false;
//     } else {
//       return true;
//     }
//   }),
//   check("username", "Username is required.").notEmpty(),
//   check("email", "Email is required.").notEmpty(),
//   check("email", "Invalid Email.").isEmail(),
// ];

// const deleteUser = [
//   check("id", "ID is required.").custom(str => {
//     if (str === 'undefined' || str === '' || str === 'null' || str === undefined || str === null) {
//       return false;
//     } else {
//       return true;
//     }
//   }),
//   check("id", "Invalid ID.").custom(str => {
//     if (ObjectID.isValid(str) === false) {
//       return false;
//     } else {
//       return true;
//     }
//   }),
// ];

// const login = [
//   check("username", "Username is required.").notEmpty(),
//   check("password", "Password is required.").notEmpty(),
// ]

// const forgotPassword = [
//   check("email", "Email is required.").notEmpty(),
//   check("email", "Invalid Email.").isEmail(),
// ]

// const changePassword = [
//   check("id", "ID is required.").custom(str => {
//     if (str === 'undefined' || str === '' || str === 'null' || str === undefined || str === null) {
//       return false;
//     } else {
//       return true;
//     }
//   }),
//   check("id", "Invalid ID.").custom(str => {
//     if (ObjectID.isValid(str) === false) {
//       return false;
//     } else {
//       return true;
//     }
//   }),
//   check("oldPassword", "Old password is required.").notEmpty(),
//   check("newPassword", "New password is required.").notEmpty(),
//   body("newPassword", "Password should be atleast 7 characters long.").custom((str) => {
//     if (String(str).trim().length > 6) {
//       return true;
//     } else {
//       return false;
//     }
//   }),
// ]

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
