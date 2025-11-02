import axios from 'axios';
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'https://expense-tracker-backend-cz3n.onrender.com/api';

export const fetchTransactionsApi = (params) =>
  axios.get(`${API_BASE}/transactions`, { params }).then(res => res.data);

export const createTransactionApi = (payload) =>
  axios.post(`${API_BASE}/transactions`, payload).then(res => res.data);

export const updateTransactionApi = (id, payload) =>
  axios.put(`${API_BASE}/transactions/${id}`, payload).then(res => res.data);

export const deleteTransactionApi = (id) =>
  axios.delete(`${API_BASE}/transactions/${id}`).then(res => res.data);
