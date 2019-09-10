import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions';
import styles from '../Filters.module.sass';

class DelivaryTime extends React.Component {
  changeDeliveryTimeFilter = e => {
    const params = { max_delivery_time: e.target.value };

    this.props.fetchRestaurants(params);
  };

  render() {
    return (
      <div>
        <h5 className="ui header">Speed:</h5>
        <select
          className={`ui dropdown ${styles['filterBox']}`}
          onChange={this.changeDeliveryTimeFilter}
          value={this.props.restaurants.filters['max_delivery_time']}
        >
          <option value="">Speed</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="60">60</option>
          <option value="75">75</option>
          <option value="90">90</option>
          <option value="100">100</option>
          <option value="120">120</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
  };
};

export default connect(
  mapStateToProps,
  { fetchRestaurants },
)(DelivaryTime);
