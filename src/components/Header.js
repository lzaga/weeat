import React from 'react';
import { Link } from "react-router-dom";

import styles from './Header.module.sass';
import { CUTLERY } from './iconTypes';

const Header =  () => {
    return (
        <div className={`${styles.headerBar}`} >
            <h2 id={`${styles.headerContainer}`} className={`ui container`} >
                <Link to="/" className={`${styles.link} left floated column`} >
                    <span className={styles.webfontIcons}>{CUTLERY}</span>
                    We Eat
                </Link>    
                <Link to="/new" className={`${styles.link} right floated column`} >
                    <button className="ui button">Add Restaurant</button>
                </Link>
            </h2>
        </div>
    )
};

export default Header;