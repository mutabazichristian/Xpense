import React from 'react';
import { Popover } from '@headlessui/react';
import uploadImage from '../Assets/uploadIcon.svg'

function EditPopover(props) {
    const {expense, expenseTitle, expenseAmount, expenseCategory, expenseDate, expenseImage,
        setExpenseTitle, setExpenseAmount, setExpenseCategory, setExpenseDate, setExpenseImage,
        expenseDescription, setExpenseDescription, updateHandler} = props;
    return (
        <Popover className='pop-over-edit'>
            {({ open }) => (
                <>
                    <Popover.Button>
                        Edit
                    </Popover.Button>
                    <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
                    <Popover.Panel>
                        <form className="form">
                            <h1>New Xpense</h1>
                            {/* <div>
                    Noooooooooo
                </div> */}
                            <div className="new-expense-form-input">
                                <label >Title/Name</label>
                                <input type="text" value={expenseTitle} onChange={(e) => {
                                    setExpenseTitle(e.target.value)
                                }} />
                            </div>
                            <div className="new-expense-form-input">
                                <label >Amount</label>
                                <input type="number" value={expenseAmount} onChange={(e) => {
                                    setExpenseAmount(e.target.value)
                                }} />
                            </div>
                            <div className="new-expense-form-input">
                                <label >Category</label>
                                <select name="category" value={expenseCategory} id="category" onChange={(e) => {
                                    setExpenseCategory(e.target.value)
                                }}>
                                    <option value="food">food</option>
                                    <option value="transport">transport</option>
                                    <option value="clothes">clothes</option>
                                    <option value="entertainment">Entertainment</option>
                                    <option value="others">others</option>
                                </select>
                            </div>
                            <div className="new-expense-form-input">
                                <label >Date</label>
                                <input type="date" value={expenseDate} onChange={(e) => {
                                    setExpenseDate(e.target.value)
                                }} />
                            </div>
                            <div className="new-expense-form-input">
                                <label >Description</label>
                                <input type="text" value={expenseDescription} onChange={(e) => {
                                    setExpenseDescription(e.target.value)
                                }} />
                            </div>
                            <div className="new-expense-form-input">
                                <label >Upload Receipt</label>
                                <div id="input" value={expenseImage} onChange={(e) => {
                                    setExpenseImage(e.target.value)
                                }}>
                                    <img src={uploadImage} alt="upload" />
                                </div>
                            </div>
                            <button className="btn-save-expense" onClick={()=>{updateHandler(expense[6],expense)}}>
                                Save
                            </button>
                        </form>
                    </Popover.Panel>

                </>
            )}
        </Popover>
    );
}

export default EditPopover;