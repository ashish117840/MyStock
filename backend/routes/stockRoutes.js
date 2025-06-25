const express = require("express");
const router = express.Router();
const { getQuotes } = require("../controllers/stockController");

router.get("/quote", getQuotes);

module.exports = router;