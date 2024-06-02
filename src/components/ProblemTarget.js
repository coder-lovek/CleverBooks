import React, { useState } from 'react';

const ProblemTarget = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabData = [
        {
            title: "Real-time Updates",
            description: "Get instant updates on your inventory levels and sales to make informed decisions."
        },
        {
            title: "Intuitive Dashboard",
            description: "A user-friendly dashboard that provides a clear overview of your inventory and sales data."
        },
        {
            title: "Inventory Tracking",
            description: "Effortlessly track your inventory movements, from stock in to stock out, with ease."
        },
        {
            title: "Customizable Reports",
            description: "Generate customized reports tailored to your business needs for deeper insights."
        },
        {
            title: "Multi-platform Support",
            description: "Access your inventory management system from anywhere, on any device."
        },
        // Add more features as needed
    ];

    return (
        <div className="problem-target-container">
            <h2 className="section-title">Our Features</h2>
            <div className="tab-container">
                {tabData.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>
            <div className="description-container">
                <p className="description-text">{tabData[activeTab].description}</p>
            </div>
        </div>
    );
};

export default ProblemTarget;
