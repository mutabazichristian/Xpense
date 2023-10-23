import React from "react";

function FeedbackPage() {

    return (
        <div className="feedback-page">
            <div className="feedback-container">
                <h1>Feedback
                    <p>We value your feedback. It helps us make Xpense more useful.</p>
                </h1>
                <form action="" className="feedback-form">
                    <input type="text" className="feedback-text-area" placeholder="Tell me anything"/>
                    <button className="btn-send-feedback">Send</button>
                </form>
            </div>

        </div>
    )
}

export default FeedbackPage;