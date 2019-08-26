import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';

const Header =  () => {
    return (
        <div className="header header-bar">
            <div className="ui header-container container">
                <h2 className="title">
                    <Link to="/" className="link" >We Eat</Link>    
                </h2>
            </div>
        </div>
    )
};

export default Header;