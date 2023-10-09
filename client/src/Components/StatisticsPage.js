import React from "react";
import DataDisplay from "./DataDisplay";

function StatisticsPage() {

    return (
        <div className="statics-page">
            <div className="statistics-container">
                <h1>Statistics</h1>
                <DataDisplay/>
                <div className="chart-type-list">
                    <li>Pie Chart</li>
                    <li>Bar</li>
                    <li>Time-Cash</li>
                </div>
            </div>

        </div>
    )
}

export default StatisticsPage;