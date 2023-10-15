import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import SummaryPage from "./Components/SummaryPage";
import NewExpensePage from "./Components/NewExpensePage";
import ViewExpensesPage from "./Components/ViewExpensePage";
import StatisticsPage from "./Components/StatisticsPage";
import FeedbackPage from "./Components/FeedbackPage";
import Login from "./Components/Login";
//state..

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('')
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('sessionId'));
  }, [isLoggedIn])

  console.log(isLoggedIn)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isLoggedIn ? <div>
          <Navbar />
          <SummaryPage />
          <NewExpensePage />
          <ViewExpensesPage email={email} setEmail={setEmail} />
          <StatisticsPage />
          <FeedbackPage />
        </div> : <Login email={email} setEmail={setEmail} sLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;