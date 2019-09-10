import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions';
import styles from '../Filters.module.sass';

class DeliveryTime extends React.Component {
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
          <option value="120">Speed</option>
          {['15', '30', '40', '60', '90', '100'].map(e => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
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
)(DeliveryTime);
