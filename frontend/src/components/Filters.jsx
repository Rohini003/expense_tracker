import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, fetchTransactions } from '../features/transactions/transactionsSlice';

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector(s => s.transactions.filters);

  const onChange = (e) => {
    dispatch(setFilters({ [e.target.name]: e.target.value || null }));
  };

  const apply = () => {
    dispatch(fetchTransactions(filters));
  };

  const reset = () => {
    dispatch(setFilters({ type: null, category: null, date: null }));
    dispatch(fetchTransactions({}));
  };

  return (
    <div className="mb-4 flex flex-col gap-3">
      {/* Filter row */}
      <div className="flex gap-2 flex-wrap items-center">
        <select
          name="type"
          value={filters.type || ''}
          onChange={onChange}
          className="p-2 border rounded"
        >
          <option value="">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          name="category"
          value={filters.category || ''}
          onChange={onChange}
          placeholder="Category"
          className="p-2 border rounded"
        />

        {/* Single date input */}
        <input
          name="date"
          type="date"
          value={filters.date || ''}
          onChange={onChange}
          className="p-2 border rounded"
        />
      </div>

      {/* Buttons below */}
      <div className="flex gap-3">
        <button
          onClick={apply}
          className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-700"
        >
          Apply
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
