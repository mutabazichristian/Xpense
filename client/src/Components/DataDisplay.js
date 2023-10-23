import React from "react";

function DataDisplay(){

    return(
        <div className="data-display">
            <ul className="statistics-filter-list">
                <li>Date</li>
                <li>Category</li>
                <li>Amount</li>
                <li className="export-btn">Export</li>
            </ul>
        </div>
    )
}

export default DataDisplay;