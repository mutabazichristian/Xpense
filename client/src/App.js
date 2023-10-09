import React from "react";
import Navbar from "./Components/Navbar"
import SummaryPage from "./Components/SummaryPage";
import NewExpensePage from "./Components/NewExpensePage";
import ViewExpensesPage from "./Components/ViewExpensePage";
import StatisticsPage from "./Components/StatisticsPage";
import FeedbackPage from "./Components/FeedbackPage";

function App() {
  return (
    <div>
      <Navbar />
      <SummaryPage />
      <NewExpensePage />
      <ViewExpensesPage />
      <StatisticsPage /> 
      <FeedbackPage />
    </div>);
}

export default App;
