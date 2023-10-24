import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cookies, useCookies } from 'react-cookie';
import Navbar from "./Components/Navbar"
import SummaryPage from "./Components/SummaryPage";
import NewExpensePage from "./Components/NewExpensePage";
import ViewExpensesPage from "./Components/ViewExpensePage";
import StatisticsPage from "./Components/StatisticsPage";
import FeedbackPage from "./Components/FeedbackPage";
import Login from "./Components/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
//state..

function App() {
  const [email, setEmail] = useState('')
  const [cookies, setCookies] = useCookies(['authCookie']);
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenseImage, setExpenseImage] = useState('');

  return (
    <BrowserRouter>
      <Routes>

        <Route  element={<ProtectedRoutes/>}>

          <Route path='/' element={<div><h1>Hi It's working</h1></div>}/>
          <Route path='/about' element={<div><h1>About this App</h1></div>}/>
          <Route path='/FAQ' element={<div><h1>FAQ</h1></div>}/>
        </Route>
        <Route path='/login' element={<Login email={email} setEmail={setEmail}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
{/* <Route path='/' element={
          false ?
            <div>
              <Navbar />
              <SummaryPage />
              <NewExpensePage />
              <ViewExpensesPage email={email} setEmail={setEmail} />
              <StatisticsPage />
              <FeedbackPage />
            </div>
            :
            <Login
              email={email} setEmail={setEmail} cookies={cookies}
            />
        }
        />
     */}


//protecteted ... js-cookie .. cookie auth ... null || '' redirecting login 
// outlet .. route 
        // <Route path="/" element={<div>
        //   <Navbar />
        //   <SummaryPage />
        //   <NewExpensePage
        //   expenseTitle={expenseTitle} expenseAmount={expenseAmount} expenseCategory={expenseCategory} expenseDate={expenseDate} expenseImage={expenseImage}
        //   setExpenseAmount={setExpenseAmount} setExpenseTitle={setExpenseTitle} setExpenseCategory={setExpenseCategory} setExpenseDate={setExpenseDate} setExpenseImage={setExpenseImage}
        //   />
        //   <ViewExpensesPage email={email} setEmail={setEmail} />
        //   <StatisticsPage />
        //   <FeedbackPage />

        // </div>}>
        // </Route>

//route ... portected .... authenticated 
//route loogin 