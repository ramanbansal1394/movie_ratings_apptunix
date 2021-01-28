"use strict";
const rating = require("./rating");

module.exports = (app) => {
  try {
    app.use("/rating", rating);
  } catch (err) {
    console.log("routes-err", err);
  }
};
