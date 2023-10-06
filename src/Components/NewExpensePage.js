import React from "react";

function NewExpensePage(){

    return(
        <div className="new-expense">
            <form action="" className="form">
                <h1>New Xpense</h1>
                <div>
                    <label htmlFor="">Title/Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Amount</label>
                    <input type="number" />
                </div>
                <div>
                    <label htmlFor="">Category</label>
                    <select name="category" id="category">
                         {/*getOptions()*/} 
                    </select>
                </div>
                <div>
                    <label htmlFor="">Date</label>
                    <input type="date" />
                </div>
                <div>
                    <label htmlFor="">Upload Receipt</label>
                    <input type="text" />
                </div>
            </form>
        </div>
    )
}
export default NewExpensePage;