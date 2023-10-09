import React from "react";
import UnitSummary from "./UnitSummary";

function ExpensesSummary(){

    return(
        <div className="summary-expense-container">
            <UnitSummary title = "Recent Xpenses" content = "you have no recent Xpenses yet"/>
            <UnitSummary title = "Top Xpenses" content = "you have no recent Xpenses yet"/>
            <UnitSummary title = "Top Categories" content = "you have no recent Xpenses yet"/>
            <UnitSummary title = "Days with most Xpenses" content = "you have no recent Xpenses yet"/>
        </div>
    )
}

export default ExpensesSummary;