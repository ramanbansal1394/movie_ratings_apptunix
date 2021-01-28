const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, lowercase: true, unique: true },
    password: { type: String, trim: true, required: true },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", schema);

module.exports = user;
