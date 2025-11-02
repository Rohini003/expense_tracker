import React from 'react';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Expense Tracker</h1>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="md:col-span-2">
            <TransactionForm />
            <TransactionList />
          </section>

          <aside>
            <Dashboard />
          </aside>
        </main>
      </div>
    </div>
  );
}
