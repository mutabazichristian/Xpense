import React from "react";
import ExpensesViewer from "./ExpensesViewer";
import searchIcon from "../images/icon-search.svg"

function ViewExpenses() {

    return (
        <div className="view-expense-page">
            <div className="view-expenses-container">
                <div className="view-expenses-title">
                    <h1>View Xpenses</h1>
                </div>
                <ExpensesViewer />
                <div className="search-bar">
                    <input type="text" placeholder="search here" />
                    <img src={searchIcon} alt="search button" className="btn-search" />
                </div>
            </div>
        </div>
    )
}
export default ViewExpenses;