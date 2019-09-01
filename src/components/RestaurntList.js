import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRestaurants } from '../actions/';
import RestaurantView from './RestaurantView';
import styles from './RestaurantList.module.sass';

class RestaurantList extends Component {
    componentDidMount(){
        this.props.fetchRestaurants();
    };

    renderList() {
        console.log(styles)
        if(this.props.restaurants.isFetching) {
            return (
                <div className="ui segment">
                    <div className="ui active loader"></div>
                </div>
            );
        }

        if (this.props.restaurants.error) {
            return (
                <div className="ui red message">Sorry, there was an error</div>
            )
        } else {
            return this.props.restaurants.data.map(restaurant => {
                return (
                    <div key={restaurant.id} className={`item ${styles.box}`} >
                            <RestaurantView restaurant={restaurant}/>
                    </div>
                )
            })
        }
    };

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    };
};

export default connect(mapStateToProps, { fetchRestaurants })(RestaurantList);