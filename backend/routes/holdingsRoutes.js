const express = require("express");
const router = express.Router();
const { getAllHoldings } = require("../controllers/holdingsController");

router.get("/", getAllHoldings);

module.exports = router;