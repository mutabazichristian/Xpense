import React from "react";

function BtnNewExpense(props){
    const {scrollToNewExpense}= props
    return(
        <div onClick={scrollToNewExpense} className="btn-new-expense">
            <p>+ New Expense</p>
        </div>
    )
}

export default BtnNewExpense;