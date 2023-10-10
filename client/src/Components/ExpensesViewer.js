import React from "react";

function ExpensesViewer(){
        
    return(
        <div className="expenses-viewer">
            <ul className="expenses-viewer-filter-list">
                <li>Title</li>
                <li>Date</li>
                <li>Category</li>
                <li>Amount</li>
                <li>Receipt</li>
            </ul>
        </div>
    )
}

export default ExpensesViewer;