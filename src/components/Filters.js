import React from 'react';
import Rating from './filters/Rating';
import Cuisine from './filters/Cuisine';
import DelivaryTime from './filters/DelivaryTime';


const Filters = props => {
    return (
        <div className="filterContainer">
            <Cuisine />
            <Rating />
            <DelivaryTime />
        </div>
    )
};

export default Filters;
