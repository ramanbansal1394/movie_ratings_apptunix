const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    release_date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const movie = mongoose.model("movie", schema);

module.exports = movie;
