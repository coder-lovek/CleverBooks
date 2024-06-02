import React from 'react';

const Reviews = () => {
    return (
        <div className="reviews-container">
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="review-card">
                <div className="review-content">
                    <p className="review-text">"I've been using this product for a few weeks now, and I'm amazed by the results! It's incredibly effective and easy to use. Definitely worth the investment."</p>
                    <p className="review-author">- Emily Smith</p>
                </div>
            </div>
            <div className="review-card">
                <div className="review-content">
                    <p className="review-text">"This company provides excellent customer service and support. I had a question about my order, and their team responded promptly and helped me resolve the issue. Highly recommended!"</p>
                    <p className="review-author">- Michael Johnson</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
