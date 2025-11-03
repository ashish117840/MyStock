import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = async () => {
    const base = 'https://my-stock-backend.onrender.com';
    const payload = {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "BUY",
    };

    try {
      await axios.post(`${base}/newOrder`, payload);
      GeneralContext.closeBuyWindow();
      window.location.reload();
      return;
    } catch (err) {
      console.error("/newOrder failed, trying /holdings fallback:", err.response?.data || err.message);
    }

    try {
      await axios.post(`${base}/holdings`, {
        name: payload.name,
        qty: payload.qty,
        avg: payload.price,
        price: payload.price,
        net: "+0.00%",
        day: "+0.00%",
        isLoss: false,
      });
      GeneralContext.closeBuyWindow();
      window.location.reload();
    } catch (err2) {
      console.error("Both buy attempts failed:", err2.response?.data || err2.message);
      alert(err2.response?.data?.message || "Failed to place order");
    }
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
