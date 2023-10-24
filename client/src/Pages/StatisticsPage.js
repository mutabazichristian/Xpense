import React from "react";
import DataDisplay from "../Components/DataDisplay";

function StatisticsPage() {

    return (
        <div className="statistics-page">
            <div className="statistics-container">
                <h1>Statistics</h1>
                <DataDisplay/>
                <ul className="chart-type-list">
                    <li>Pie Chart</li>
                    <li>Bar</li>
                    <li>Time-Cash</li>
                </ul>
            </div>

        </div>
    )
}

export default StatisticsPage;