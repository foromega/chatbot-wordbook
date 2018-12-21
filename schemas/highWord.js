const mongoose = require("mongoose");

const { Schema } = mongoose;

const highWordSchema = new Schema({
  word: { type: String, required: true, unique: true },
  meaning: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("HighWord", highWordSchema);