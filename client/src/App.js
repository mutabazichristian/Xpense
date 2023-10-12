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
  const [isLoggedIn, setIsLoggedIn] = useState('false');
  useEffect(() => {
    const sessionId = localStorage.getItem('sessionId');
    setIsLoggedIn(!!sessionId);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? (
          <div>
            <Navbar />
            <SummaryPage />
            <NewExpensePage />
            <ViewExpensesPage />
            <StatisticsPage />
            <FeedbackPage />
          </div>) :
          (<Login />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
