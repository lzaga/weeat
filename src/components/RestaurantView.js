import React from 'react';

import styles from './RestaurantView.module.sass';
import { CuisineIcons } from './iconTypes';
import Rating from './Rating';

const RestaurantView = (props) => {
    const cuisine = props.restaurant.cuisine;

    return (
        <div className={styles.itemContainer}>
            <div className="ui image">
                <span className={styles.iconImage}>
                    {CuisineIcons[cuisine]}
                </span>
            </div>
            <div className="content">
                <h3 className="header">
                    {props.restaurant.name}
                </h3>
                <div className="meta">
                    <div className={styles.flexRestaurantMeta}>
                        <p>{cuisine}</p>
                        <Rating rating={props.restaurant.rating} />
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