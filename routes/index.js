"use strict";
const rating = require("./rating");
const movie = require("./movie");

module.exports = (app) => {
  try {
    app.use("/rating", rating);
    app.use("/movie", movie);
  } catch (err) {
    console.log("routes-err", err);
  }
};
