const { OrdersModel } = require("../model/OrdersModel");

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new OrdersModel(req.body);
    await newOrder.save();
    res.status(201).json({ message: "Order saved!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save order" });
  }
};