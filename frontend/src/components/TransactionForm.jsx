import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTransaction, fetchTransactions } from '../features/transactions/transactionsSlice';

const defaultForm = { type: 'expense', amount: '', description: '', category: '', date: new Date().toISOString().slice(0,10) };

export default function TransactionForm() {
  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.amount || !form.category) {
      alert('Amount and category are required');
      return;
    }
    setLoading(true);
    try {
      await dispatch(createTransaction({ ...form, amount: Number(form.amount) })).unwrap();
      await dispatch(fetchTransactions()); // refresh
      setForm(defaultForm);
    } catch (err) {
      alert(err.message || 'Failed to add');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow mb-4">
      <div className="grid grid-cols-2 gap-3">
        <select name="type" value={form.type} onChange={onChange} className="p-2 border rounded">
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <input name="amount" type="number" value={form.amount} onChange={onChange} placeholder="Amount" className="p-2 border rounded"/>

        <input name="category" value={form.category} onChange={onChange} placeholder="Category" className="p-2 border rounded"/>
        <input name="date" type="date" value={form.date} onChange={onChange} className="p-2 border rounded"/>

        <input name="description" value={form.description} onChange={onChange} placeholder="Description" className="col-span-2 p-2 border rounded"/>
      </div>

      <div className="mt-3">
        <button disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">
          {loading ? 'Adding...' : 'Add Transaction'}
        </button>
      </div>
    </form>
  );
}
