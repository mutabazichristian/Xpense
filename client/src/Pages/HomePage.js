import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import SummaryPage from '../Pages/SummaryPage';
import NewExpensePage from '../Pages/NewExpensePage';
import ViewExpensesPage from '../Pages/ViewExpensePage';
import StatisticsPage from '../Pages/StatisticsPage';
import FeedbackPage from '../Pages/FeedbackPage';

const HomePage = () => {
    const [expenseTitle, setExpenseTitle] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseCategory, setExpenseCategory] = useState('');
    const [expenseDate, setExpenseDate] = useState('');
    const [expenseImage, setExpenseImage] = useState('');
    return (
        <div>
            <Navbar />
            <SummaryPage />
            <NewExpensePage
                expenseTitle={expenseTitle} expenseAmount={expenseAmount} expenseCategory={expenseCategory} expenseDate={expenseDate} expenseImage={expenseImage}
                setExpenseAmount={setExpenseAmount} setExpenseTitle={setExpenseTitle} setExpenseCategory={setExpenseCategory} setExpenseDate={setExpenseDate} setExpenseImage={setExpenseImage}
            />
            <ViewExpensesPage />
            <StatisticsPage />
            <FeedbackPage />
        </div>
    );
};

export default HomePage;