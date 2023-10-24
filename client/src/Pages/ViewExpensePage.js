import React, { useState, useEffect } from "react";
import ExpensesViewer from "../Components/ExpensesViewer";
import searchIcon from "../Assets/icon-search.svg"
import axios from "axios";

function ViewExpenses(props) {
    const [expenses, setExpense] = useState([]);

    useEffect(() => {
        const sessionId = localStorage.getItem('sessionId');
        axios.post('http://localhost:8080/expenses')
            .then(res => {
                const expenses = res.data;
                console.log(expenses);
            })
            .catch(err => console.log(err))
    }, [expenses])


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