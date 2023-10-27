import React from "react";

function ExpensesViewer(props) {
    const { expenses } = props;
    const deleteHandler = () => {

    }
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
                {expenses.map(expenses => (
                    <tr key={expenses[1]} className="expense-component">
                        <td>{expenses[0]}</td>
                        <td>{expenses[1]}</td>
                        <td>{expenses[2]}</td>
                        <td>{expenses[3]}</td>
                        <td>{expenses[4]}</td>
                        <td>{expenses[5]}</td>
                        <td><button onClick={deleteHandler}>delete</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default ExpensesViewer;