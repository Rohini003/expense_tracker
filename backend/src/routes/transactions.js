const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const controller = require('../controllers/transactionController');

// Create
router.post('/',
  [
    body('type').isIn(['income', 'expense']).withMessage('type must be income or expense'),
    body('amount').isNumeric().withMessage('amount must be a number').custom(v => v >= 0),
    body('category').isString().notEmpty().withMessage('category required'),
    body('date').isISO8601().toDate().withMessage('date must be valid ISO date'),
  ],
  controller.createTransaction
);

// Read (with filters)
router.get('/', controller.getTransactions);

// Read single
router.get('/:id', controller.getTransactionById);

// Update
router.put('/:id',
  [
    body('type').optional().isIn(['income', 'expense']),
    body('amount').optional().isNumeric().custom(v => v >= 0),
    body('date').optional().isISO8601().toDate()
  ],
  controller.updateTransaction
);

// Delete
router.delete('/:id', controller.deleteTransaction);

module.exports = router;

