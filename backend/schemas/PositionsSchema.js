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

module.exports = {PositionsSchema};