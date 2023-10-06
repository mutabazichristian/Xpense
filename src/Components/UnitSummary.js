import React from "react";

function UnitSummary(props) {

    return (
        <div className="unit-summary">
            <p className="unit-summary-title">{props.title}</p>
            <div className="unit-summary-content">
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default UnitSummary;