const { model } = require("mongoose");

const {Schema} = require("mongoose");

const PositionsSchema = new Schema({
  product:String,
  name: String,
  qty: Number,
  avg: Number,     // renamed from -avg
  price: Number,   // renamed from -price
  net: String,
  day: String,
  isLoss: Boolean,
});

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };