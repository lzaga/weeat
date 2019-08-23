import React from 'react';
import _ from 'lodash';

import './RestaurantView.css';

const RestaurantView = (props) => {
    const rating = () => {
        const stars = [];
        _.times(props.restaurant.rating, (i) => {
            stars.push(<i className="star icon small" key={i}></i>);
        });

        return (
            <div className="rating"> {stars} </div>
        )
    };

    return (
        <div className="left floated content">
            <h3 className="header">{props.restaurant.name}</h3>
            <div className="meta">
                <p>{props.restaurant.cuisine}</p>
                {rating()}
                <div className="description">
                    <p> <b>Where: </b>{props.restaurant.address}</p>
                </div>
            </div>
        </div>
    )
};

export default RestaurantView;