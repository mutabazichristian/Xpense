import React, { useState, useEffect } from "react";
import ExpensesViewer from "../Components/ExpensesViewer";
import searchIcon from "../Assets/icon-search.svg"
import axios from "axios";

function ViewExpenses(props) {
    const { expenses, setExpenses } = props

    const refreshExpenses = () => {
        axios.post('http://localhost:8080/expenses')
            .then(res => {
                if (res.data != []) {
                    setExpenses(res.data)
                } else {
                    setExpenses([]);
                }
            })
            .catch(err => console.log(err))

    }
    const deleteHandler = (id) => {
        console.log(id);
        axios.post('http://localhost:8080/deleteexpense', { id })
            .then(res => {
                console.log(res);
                //refresh the expenses list
                refreshExpenses();
            })
            .catch(err => console.log(err))
    }
    useEffect(refreshExpenses, [])
    return (
        <div className="view-expense-page">
            <div className="view-expenses-container">
                <div className="view-expenses-title">
                    <h1>View Xpenses</h1>
                </div>
                <ExpensesViewer expenses={expenses} deleteHandler={deleteHandler} />
                <div className="search-bar">
                    <input type="text" placeholder="search here" />
                    <img src={searchIcon} alt="search button" className="btn-search" />
                </div>
            </div>
        </div>
    )
}
export default ViewExpenses;    