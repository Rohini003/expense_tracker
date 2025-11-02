# 💰 Expense Tracker Application

An intuitive Expense Tracker web application that allows users to add, view, filter, and manage income and expenses with visual insights.  
Built with React (Vite) on the frontend and Node.js, Express, and MongoDB on the backend.

---

## 🚀 Live Demo

- Frontend: [https://expense-tracker-frontend-ol4x.onrender.com/](https://expense-tracker-frontend-ol4x.onrender.com/)
- Backend API: [https://expense-tracker-backend-cz3n.onrender.com/](https://expense-tracker-backend-cz3n.onrender.com/)

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Redux Toolkit (State Management)
- Axios (API Calls)
- Tailwind CSS + shadcn/ui (Styling)
- Recharts (Charts)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Express Validator (Validation)
- CORS & dotenv (Environment Config)
- Render (Hosting)

---

##  Features

Add income and expense transactions  
View, filter, and search by category, type, or date range  
Visualize data using pie and bar charts  
Redux-based state management for global consistency  
Responsive, minimal UI with Tailwind CSS  
Fully connected REST API with MongoDB  
Hosted frontend & backend on Render  

---

## API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `POST` | `/api/transactions` | Create a new transaction |
| `GET` | `/api/transactions` | Fetch all or filtered transactions |
| `GET` | `/api/transactions/:id` | Fetch single transaction |
| `PUT` | `/api/transactions/:id` | Update transaction |
| `DELETE` | `/api/transactions/:id` | Delete transaction |
---

## 🧰 Setup Instructions (Local)

// 1.  Clone the Repository
```bash
git clone https://github.com/Rohini003/expense_tracker
cd expense-tracker

// 2. Backend setup
cd backend
npm install

// 3. setup .env file
MONGO_URI=your_mongodb_connection_string
PORT=5000

// 4. Backend start command
node server.js

// 5.  Frontend Setup
cd ../frontend
npm install

// 6. create .env in frontend
VITE_API_BASE_URL=http://localhost:5000/api
Run this command 
npm run dev

--------
Author
Rohini Parase


