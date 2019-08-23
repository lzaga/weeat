import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRestaurants } from '../actions/';
import RestaurantView from './RestaurantView';
import './RestaurantList.css';

class RestaurantList extends Component {
    componentDidMount(){
        this.props.fetchRestaurants();
    };

    renderList() {
        return this.props.restaurants.map(restaurant => {
            return (
                <div className="item box" key={restaurant.id}>
                        <RestaurantView restaurant={restaurant}/>
                </div>
            )
        })
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