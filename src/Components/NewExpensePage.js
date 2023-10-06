import React from "react";
import uploadImage from "../images/uploadIcon.svg"

function NewExpensePage() {

    return (
        <div className="new-expense">
            <form action="" className="form">
                <h1>New Xpense</h1>
                <div className="new-expense-form-input">
                    <label htmlFor="">Title/Name</label>
                    <input type="text" />
                </div>
                <div className="new-expense-form-input">
                    <label htmlFor="">Amount</label>
                    <input type="number" />
                </div>
                <div className="new-expense-form-input">
                    <label htmlFor="">Category</label>
                    <select name="category" id="category">
                        {/*getOptions()*/}
                    </select>
                </div>
                <div className="new-expense-form-input">
                    <label htmlFor="">Date</label>
                    <input type="date" />
                </div>
                <div className="new-expense-form-input">
                    <label htmlFor="">Upload Receipt</label>
                    <div id="input">
                        <img src={uploadImage} alt="upload" />
                    </div>
                </div>
                <div className="btn-save-expense">
                    Save
                </div>
            </form>
        </div>
    )
}
export default NewExpensePage;