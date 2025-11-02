import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ChartView from './ChartView';

export default function Dashboard() {
  const { items } = useSelector(s => s.transactions);

  const summary = useMemo(() => {
    let income = 0, expense = 0, byCategory = {};
    (items || []).forEach(t => {
      if (t.type === 'income') income += t.amount;
      else expense += t.amount;
      byCategory[t.category] = (byCategory[t.category] || 0) + t.amount;
    });
    return { income, expense, byCategory };
  }, [items]);

  const chartData = Object.entries(summary.byCategory).map(([name, value]) => ({ name, value }));

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">Summary</h2>

      <div className="mb-3">
        <div className="flex justify-between">
          <div>Income</div>
          <div className="text-green-600 font-bold">₹{summary.income}</div>
        </div>
        <div className="flex justify-between">
          <div>Expense</div>
          <div className="text-red-600 font-bold">₹{summary.expense}</div>
        </div>
        <div className="flex justify-between border-t mt-2 pt-2">
          <div>Balance</div>
          <div className="font-bold">₹{summary.income - summary.expense}</div>
        </div>
      </div>

      <h3 className="text-md font-medium mb-2">By Category</h3>
      <ChartView data={chartData} />
    </div>
  );
}
