import React from "react";

const PaymentButton = ({ amount }) => {
  const handlePayment = async () => {
    const res = await fetch("https://my-stock-backend.onrender.com/api/payment/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }), // Razorpay uses paise
    });

    const orderData = await res.json();

    const options = {
      key:  process.env.RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: "INR",
      name: "MyStock",
      description: "Add Funds",
      order_id: orderData.id,
      handler: function (response) {
        alert("Payment successful!");
        console.log(response);
        // OPTIONAL: Verify payment or update DB
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={handlePayment} className="btn btn-primary">
      Add ₹{amount}
    </button>
  );
};

export default PaymentButton;

