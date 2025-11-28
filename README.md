📦 MyStock – A Full-Stack Inventory & Real-Time Stock Management System

MyStock is a complete MERN-based inventory management system with JWT-secured authentication, real-time stock prices using Yahoo Finance API, and a modern dashboard for insights.

This project is fully deployed and production-ready:

🔗 Live URLs

Frontend: https://my-stock-frontend.vercel.app

Dashboard: https://my-stock-dashboard.vercel.app

Backend API: https://my-stock-backend.onrender.com

🚀 Features
🛍 Product & Stock Management

Add, edit, delete products

Increase or decrease stock

Low-stock alerts

Cloudinary image uploads

🔐 Secure Authentication (JWT)

Login & Signup with encrypted passwords

JWT-based protected routes

Middleware validation for secure API access

📈 Real-Time Stock Price Tracking

Uses Yahoo Finance API

Fetches live prices of products linked with stock symbols

Displays real-time price updates on dashboard/UI

📊 Dashboard Analytics

Stock value charts

Total products, categories, and low-stock summary

Real-time financial trends

🎨 Modern UI

Responsive layout

Tailwind CSS

Clean and fast UX

🛠 Tech Stack
Frontend

React.js

React Router

Tailwind CSS

Axios

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Yahoo Finance API

Cloudinary (Image Uploads)

Dashboard

React.js

Recharts / Chart.js

Axios

📁 Project Structure
MyStock/
├── backend/
├── frontend/
└── dashboard/

⚙️ Installation & Local Development
1️⃣ Clone the Repository
git clone https://github.com/ashish117840/MyStock
cd MyStock

🖥 Backend Setup
Install Dependencies
cd backend
npm install

Create .env
PORT=5000
MONGO_URI=your_mongoDB_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
YAHOO_FINANCE_API_KEY=your_key   # if applicable

Run Backend
npm run dev


Backend runs on:
👉 http://localhost:5000

Live API: https://my-stock-backend.onrender.com

🌐 Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:
👉 http://localhost:5173

Live: https://my-stock-frontend.vercel.app

📊 Dashboard Setup
cd dashboard
npm install
npm run dev


Dashboard runs on:
👉 http://localhost:5174

Live: https://my-stock-dashboard.vercel.app

🔌 API Endpoints
🔐 Authentication
Method	Endpoint	Description
POST	/api/auth/signup	Register user
POST	/api/auth/login	Login user
GET	/api/auth/me	Get logged-in user (JWT protected)
📦 Products
Method	Endpoint	Description
GET	/api/products	Get all products
POST	/api/products	Add new product
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product
📉 Stock Operations
Method	Endpoint	Description
PUT	/api/stock/increase/:id	Increase stock
PUT	/api/stock/decrease/:id	Decrease stock
GET	/api/stock/low	Low stock items
💹 Real-Time Stock Price
Method	Endpoint	Description
GET	/api/stocks/price/:symbol	Get live stock price (Yahoo Finance API)
🚀 Deployment Guide
Frontend → Vercel
Dashboard → Vercel
Backend → Render

Auto deployment enabled on push.

📸 Screenshots (Add Later)

You can add:

Login page

Product dashboard

Stock analytics

🤝 Contributing

Fork the repo

Create a branch

Commit updates

Open a pull request

👤 Author

Ashish Kumar
Full Stack Developer | MERN | React | Node
🔗 GitHub: https://github.com/ashish117840

🔗 LinkedIn: https://www.linkedin.com/in/ashish-kumar7000
