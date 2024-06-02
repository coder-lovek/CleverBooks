// Navbar.jsx

import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#4CAF50' }}>
            <div className="container">
                <button className="navbar-brand btn btn-link">CrestBooks</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" type="button">Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" type="button">About</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" type="button">Services</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" type="button">Contact</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
