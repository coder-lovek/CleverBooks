import React from 'react';

const KeyProblems = () => {
    return (
        <div className="key-problems-container">
            <h2 className="section-title">Key Problems Solved</h2>
            <div className="problems-grid">
                <div className="problem-card">
                    <h3 className="problem-title">Inventory Management</h3>
                    <p className="problem-description">Difficulty in tracking inventory levels and managing stock efficiently, leading to overstocking or stockouts.</p>
                </div>
                <div className="problem-card">
                    <h3 className="problem-title">Order Fulfillment</h3>
                    <p className="problem-description">Challenges in processing and fulfilling orders accurately and on time, resulting in customer dissatisfaction.</p>
                </div>
                <div className="problem-card">
                    <h3 className="problem-title">Customer Communication</h3>
                    <p className="problem-description">Issues with communication channels, such as delayed responses to customer inquiries or lack of personalized interactions.</p>
                </div>
                <div className="problem-card">
                    <h3 className="problem-title">Data Analysis</h3>
                    <p className="problem-description">Difficulty in analyzing sales data and identifying trends or patterns to make informed business decisions.</p>
                </div>
            </div>
        </div>
    );
};

export default KeyProblems;
