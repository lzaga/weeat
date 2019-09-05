import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions';

class Cuisine extends React.Component {
    state = { cuisines: [], value: '' };

    componentWillReceiveProps(nextProps) {
        if (nextProps.restaurants.data.length > 0 && this.state.cuisines.length === 0) {
            const cuisines = [];

            nextProps.restaurants.data.map(restaurant => {
                if(!cuisines[restaurant.cuisine]) {
                    cuisines.push(restaurant.cuisine);
                }
            })
    
            this.setState({ cuisines });
        }
    };

    renderOptions() {
        if (this.props.restaurants.data.length > 0 && this.state.cuisines.length > 0) {
            return this.state.cuisines.map((cuisine, i) => {
                return (
                    <option key={i} value={cuisine}>{cuisine}</option>
                )
            })
        }

        return null;
    };

    changeCuisineFilter = (e) => {
        const params = { cuisine: e.target.value};

        this.props.fetchRestaurants(params);
    }

    render() {
        return (
            <select className="ui dropdown" onChange={this.changeCuisineFilter} value={this.state.value} >
                 <option value=''>Cuisine</option>
                {this.renderOptions()}
            </select>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps, { fetchRestaurants })(Cuisine);
