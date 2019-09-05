import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions';

class DelivaryTime extends React.Component {
    render() {
        return (
            <div>
                DelivaryTime
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps, { fetchRestaurants })(DelivaryTime);
