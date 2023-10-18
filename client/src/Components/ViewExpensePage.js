import React, { useState, useEffect } from "react";
import ExpensesViewer from "./ExpensesViewer";
import searchIcon from "../images/icon-search.svg"
import axios from "axios";

function ViewExpenses(props) {
    const [expenses, setExpense] = useState([]);
    const { email, setEmail } = props;
    useEffect(() => {
        const sessionId = localStorage.getItem('sessionId');
        console.log(`the sessin id is ${sessionId}`);
        axios.post('http://localhost:8080/expenses', { sessionId })
            .then(res => console.log(res))
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