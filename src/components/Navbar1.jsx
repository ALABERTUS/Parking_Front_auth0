import React from 'react';
import logo from "../pics/logo.png";

import './Navbar1.css';

const Navbar1 = () => {
    return (
        <div className="navbar1">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
        </div>
    );
}

export default Navbar1;