import React, { useState } from "react";
import uploadImage from "../images/uploadIcon.svg"

function NewExpensePage() {
    const newExpenseData = [];
    const [expenseTitle, expenseAmount, expenseCategory, expenseDate, expenseImage,
        setExpenseTitle, setExpenseAmount, setExpenseCategory, setExpenseDate, setExpenseImage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('these are the values');


    }

    return (
        <div className="new-expense" onSubmit={handleSubmit}>
            <form className="form" >
                <h1>New Xpense</h1>
                {/* <div>
                    Noooooooooo
                </div> */}
                <div className="new-expense-form-input">
                    <label htmlFor="">Title/Name</label>
                    <input type="text" value={expenseTitle} onChange={(e) => {
                        setExpenseTitle(e.target.value)
                    }} />
                </div>
                <div className="new-expense-form-input">
                    <label htmlFor="">Amount</label>
                    <input type="number" value={expenseAmount} onChange={(e) => {
                        setExpenseAmount(e.target.value)
                    }} />
                </div>
                <div className="new-expense-form-input">
                    <label htmlFor="">Category</label>
                    <select name="category" value={expenseCategory} id="category" onChange={(e) => {
                        setExpenseCategory(e.target.value)
                    }}>
                        {/*getOptions()*/}
                    </select>
                </div>
                <div className="new-expense-form-input">
                    <label htmlFor="">Date</label>
                    <input type="date" value={expenseDate} onChange={(e) => {
                        setExpenseDate(e.target.value)
                    }} />
                </div>
                <div className="new-expense-form-input">
                    <label htmlFor="">Upload Receipt</label>
                    <div id="input" value={expenseImage} onChange={(e) => {
                        setExpenseImage(e.target.value)
                    }}>
                        <img src={uploadImage} alt="upload" />
                    </div>
                </div>
                <button className="btn-save-expense" type='submit'>
                    Save
                </button>
            </form>
        </div>
    )
}
export default NewExpensePage;