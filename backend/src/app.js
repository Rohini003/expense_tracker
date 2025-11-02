const express = require('express');
const cors = require('cors');
const transactions = require('./routes/transactions');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/transactions', transactions);

app.get('/', (req, res) => res.send('Expense Tracker API'));

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;

