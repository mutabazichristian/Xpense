import React from "react";
import ExpensesSummary from "./ExpensesSummary";

function SummaryPage(){

    return(
        <div className="summary">
            <h1>Daily Xpense Summary</h1>
            <ExpensesSummary/> 
        </div>
    )
}

export default SummaryPage;