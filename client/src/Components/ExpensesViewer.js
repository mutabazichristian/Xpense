import React from "react";

function ExpensesViewer({expenses}) {
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
                {expenses.map(expense => (
                    <tr key={expense[0]}>
                        <td>{expense[0]}</td>
                        <td>{expense[1]}</td>
                        <td>{expense[2]}</td>
                        <td>{new Date(expense[3]).toLocaleDateString()}</td>
                        <td>View Receipt</td>
                        {expense[5] && <td>{expense[5]}</td>}
                        <td><button onClick={deleteHandler}>delete</button></td>
                    </tr>
                ))}

            </table>
        </div>
    )
}

export default ExpensesViewer;