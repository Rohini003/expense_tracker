import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions, deleteTransaction } from '../features/transactions/transactionsSlice';
import Filters from './Filters';

export default function TransactionList() {
  const dispatch = useDispatch();
  const { items, loading, error, filters } = useSelector(s => s.transactions);

  useEffect(() => {
    dispatch(fetchTransactions(filters));
  }, [dispatch, filters]);

  return (
    <div className="bg-white p-4 rounded shadow">
      <Filters />
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600">Error: {error.message || JSON.stringify(error)}</div>}

      <ul>
        {items.map(tx => (
          <li key={tx._id} className="flex justify-between py-2 border-b">
            <div>
              <div className="font-medium">{tx.category} <span className="text-sm text-gray-500">({tx.type})</span></div>
              <div className="text-sm text-gray-600">{tx.description}</div>
            </div>
            <div className="text-right">
              <div className={`${tx.type === 'expense' ? 'text-red-600' : 'text-green-600'} font-bold`}>₹{tx.amount}</div>
              <div className="text-xs text-gray-500">{new Date(tx.date).toLocaleDateString()}</div>
              <button className="text-xs text-red-500" onClick={() => dispatch(deleteTransaction(tx._id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
