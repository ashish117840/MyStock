import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("https://my-stock-backend.vercel.app", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);

      // Redirect to dashboard
      window.location.href = "https://my-stock-dashboard.vercel.app";
      alert("Login successful");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="media/images/signup.png"
          alt="Login Promo"
          className="login-image"
        />
      </div>
      <div className="login-right">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="login-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="additional-info">
          <p>© 2025. All rights reserved.</p>
          <p>Support</p>
          <p>
            NSE​ &​ BSE – SEBI Registration no.: INZ000031633
            <br />
            MCX - SEBI Registration no.: INZ000038238
            <br />
            CDSL - SEBI Registration no.: IN-DP-431-2019
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
