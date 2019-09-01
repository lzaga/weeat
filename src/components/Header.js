import React from 'react';
import { Link } from "react-router-dom";

import styles from './Header.module.sass';
import { CUTLERY } from './iconTypes';

const Header =  () => {
    return (
        <div className={`header ${styles.headerBar}`} >
            <div id="headerContainer" className="ui container">
                <h2 className={styles.title}>
                    <Link to="/" className={styles.link} >
                        <span className={styles.webfontIcons}>{CUTLERY}</span>
                        We Eat
                    </Link>    
                </h2>
            </div>
        </div>
    )
};

export default Header;