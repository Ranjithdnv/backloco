const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema(
  {
    moviename: { type: Number },
    writtenby: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Location", LocationSchema);
