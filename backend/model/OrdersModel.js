const { model } = require("mongoose");

const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,   
  mode: String,
});

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };