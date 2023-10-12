import React from "react";
import Navbar from "./Components/Navbar"
import SummaryPage from "./Components/SummaryPage";
import NewExpensePage from "./Components/NewExpensePage";
import ViewExpensesPage from "./Components/ViewExpensePage";
import StatisticsPage from "./Components/StatisticsPage";
import FeedbackPage from "./Components/FeedbackPage";
import Login from "./Components/Login";
//state..

function App() {
  console.log(localStorage)
  if (localStorage.sessionId) {
    return (
      <div>
        <Navbar />
        <SummaryPage />
        <NewExpensePage />
        <ViewExpensesPage />
        <StatisticsPage />
        <FeedbackPage />
      </div>
    )
  } else {
    return (
      <div>
        <Login />
      </div>);
  }
}

export default App;