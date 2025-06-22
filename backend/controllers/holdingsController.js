const { HoldingsModel } = require("../model/HoldingsModel");

exports.getAllHoldings = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
};