const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stockController");

router.get("/quote/:symbol", stockController.getStockQuote);

module.exports = router;