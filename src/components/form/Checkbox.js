import React from 'react';
import styles from './Checkbox.module.sass';

const  Checkbox = props => {
    const { input, label, meta } = props;

    return (
        <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
            <div className={styles.checkbox}>
                <label>{label}</label>
                <input {...input} type='checkbox' autoComplete="off" />
            </div>
        </div>
    );
};

export default  Checkbox;