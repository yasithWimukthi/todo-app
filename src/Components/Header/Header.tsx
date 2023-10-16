// TopNav.tsx
import React from 'react';

const TopNav: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#423a6f'}}>
            <div className="container">
                <a className="navbar-brand text-white" href="/">TODO APP</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;

