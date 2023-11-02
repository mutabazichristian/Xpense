import React from "react";
import EditPopover from './EditPopover'

function ExpensesViewer(props) {
    const { expenses, setExpenses, expenseTitle, expenseAmount, expenseCategory, expenseDate, expenseImage,
        setExpenseTitle, setExpenseAmount, setExpenseCategory, setExpenseDate, setExpenseImage,
        expenseDescription, setExpenseDescription, deleteHandler, updateHandler } = props;
    console.log(expenses);
    return (
        <div className="expenses-viewer">
            <ul className="expenses-viewer-filter-list">
                <li>Title</li>
                <li>Date</li>
                <li>Category</li>
                <li>Amount</li>
                <li>Receipt</li>
                <li>Description</li>
            </ul>
            <table className="expenses-viewer-filter-list2">
                {/*
                    ORDER OF THE ARRAY DATA: TITLE, CATEGORY, AMOUNT, DATE, RECEIPT, DESCRIPTION, EXPENSEID */}
                {expenses.map(expense => (
                    <tr key={expense[6]}>
                        <td>{expense[0]}</td>
                        <td>{expense[1]}</td>
                        <td>{expense[2]}</td>
                        <td>{new Date(expense[3]).toLocaleDateString()}</td>
                        <td>View Receipt</td>
                        {expense[5] && <td>{expense[5]}</td>}
                        <td><button onClick={() => deleteHandler(expense[6])}>delete</button></td>
                        <td><EditPopover updateHandler={updateHandler} expense={expense} expenses={expenses} setExpenses={setExpenses}
                            expenseTitle={expenseTitle} expenseAmount={expenseAmount} expenseCategory={expenseCategory} expenseDate={expenseDate} expenseImage={expenseImage}
                            setExpenseAmount={setExpenseAmount} setExpenseTitle={setExpenseTitle} setExpenseCategory={setExpenseCategory}
                            setExpenseDate={setExpenseDate} setExpenseImage={setExpenseImage} expenseDescription={expenseDescription} setExpenseDescription={setExpenseDescription} deleteHandler={deleteHandler}

                        /></td>
                    </tr>
                ))}

            </table>
        </div>
    )
}

export default ExpensesViewer;