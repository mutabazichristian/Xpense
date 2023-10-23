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
//state..

function App() {
  const [email, setEmail] = useState('')
  const [cookies, setCookies] = useCookies(['authCookie']);
  console.log('in the app we are accessing the cookie', cookies);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>
          <Navbar />
          <SummaryPage />
          <NewExpensePage />
          <ViewExpensesPage email={email} setEmail={setEmail} />
          <StatisticsPage />
          <FeedbackPage />

        </div>}>
        </Route>
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