import axios from "axios";

// 🔹 Backend API base URL (Render backend URL after hosting)
const API_BASE = "https://expense-tracker-backend-cz3n.onrender.com"; 
// For local testing, you can temporarily use: 
// const API_BASE = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
