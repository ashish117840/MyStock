const yahooFinance = require("yahoo-finance2").default;

const getQuotes = async (req, res) => {
  try {
    const symbols = req.query.symbols?.split(","); // e.g., RELIANCE.NS,SBIN.NS
    if (!symbols || symbols.length === 0) {
      return res.status(400).json({ error: "No symbols provided" });
    }

    const result = await yahooFinance.quote(symbols);
    res.json(result);
  } catch (error) {
    console.error("Yahoo API error:", error);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
};

module.exports = { getQuotes };


