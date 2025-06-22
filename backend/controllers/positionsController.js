const { PositionsModel } = require("../model/PositionsModel");

exports.getAllPositions = async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch positions" });
  }
};