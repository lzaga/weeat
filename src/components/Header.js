import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';
import { HEADER as IconHeader } from './iconTypes';

const Header =  () => {
    return (
        <div className="header header-bar">
            <div className="ui header-container container">
                <h2 className="title">
                    <Link to="/" className="link" >
                        <span className="webfont-icons">{IconHeader}</span>
                        We Eat
                    </Link>    
                </h2>
            </div>
        </div>
    )
};

export default Header;