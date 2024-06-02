import React from 'react';
import { FaChartLine, FaClock, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';

const KeyMetrics = () => {
    return (
        <div className="key-metrics-container">
            <h2 className="section-title">Why Choose Crest for Inventory Management?</h2>
            <div className="metrics-grid">
                <div className="metric-card">
                    <FaChartLine className="metric-icon" />
                    <h3 className="metric-title">Increase Efficiency</h3>
                    <p className="metric-description">Streamline your inventory processes and boost overall efficiency.</p>
                </div>
                <div className="metric-card">
                    <FaClock className="metric-icon" />
                    <h3 className="metric-title">Save Time</h3>
                    <p className="metric-description">Automate routine tasks and reduce the time spent on manual inventory management.</p>
                </div>
                <div className="metric-card">
                    <FaMoneyBillWave className="metric-icon" />
                    <h3 className="metric-title">Cost Effective</h3>
                    <p className="metric-description">Optimize your inventory to save costs and improve your bottom line.</p>
                </div>
                <div className="metric-card">
                    <FaShieldAlt className="metric-icon" />
                    <h3 className="metric-title">Secure & Reliable</h3>
                    <p className="metric-description">Ensure your inventory data is secure with our reliable management system.</p>
                </div>
            </div>
        </div>
    );
};

export default KeyMetrics;
