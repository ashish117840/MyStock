const yahooFinance = require("yahoo-finance2").default;

exports.getStockQuote = async (req, res) => {
  const symbol = req.params.symbol; // e.g., "INFY.NS"
  try {
    const quote = await yahooFinance.quote(symbol);
    res.json(quote);
  } catch (error) {
    console.error("Error fetching stock quote:", error);
    res.status(500).json({ message: "Failed to fetch stock data" });
  }
};
