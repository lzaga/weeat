import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions';
import styles from '../Filters.module.sass';

class Rating extends React.Component {
  changeRatingFilter = e => {
    const params = { rating: e.target.value };

    this.props.fetchRestaurants(params);
  };

  render() {
    return (
      <div>
        <h5 className="ui header">Rating:</h5>
        <select
          className={`ui dropdown ${styles['filterBox']}`}
          onChange={this.changeRatingFilter}
          value={this.props.restaurants.filters['rating']}
        >
          <option value="">Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
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
)(Rating);
