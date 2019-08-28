import React from 'react';
import _ from 'lodash';

import './RestaurantView.css';
import { CUISINES } from './iconTypes';

const RestaurantView = (props) => {
    const cuisine = props.restaurant.cuisine;
    const rating = () => {
        const stars = [];
        _.times(props.restaurant.rating, (i) => {
            stars.push(<i className="star icon" key={i} />);
        });

        return (
            <div className="rating"> {stars} </div>
        )
    };

    return (
        <div className="item-container">
            <div className="ui image">
                <span className="icon-image">{CUISINES[cuisine]}</span>
            </div>
            <div className="content">
                <h3 className="header">
                    {props.restaurant.name}
                </h3>
                <div className="meta">
                    <div className="flex-restaurant-meta">
                        <p>{cuisine}</p>
                        {rating()}
                    </div>
                    <div className="description">
                        <p> <b>Where: </b>{props.restaurant.address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RestaurantView;