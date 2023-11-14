const express = require('express');
const {
	createExpenses,
	getAllExpenses,
	deleteExpense
} = require('../controllers/expensesController.js');


const router = express.Router();

//creating new expenses

router.post('/', createExpenses);

//getting all expenses this should be a get request since you
//fetching data from the db not posting data into the db

router.get('/', getAllExpenses);

//deleting all expenses
//this should be a delete request since you are deleting
//from the db

router.delete('/', deleteExpense);

module.exports = router;
