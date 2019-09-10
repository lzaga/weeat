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
          className={`ui dropdown ${styles.filterBox}`}
          onChange={this.changeRatingFilter}
          value={this.props.restaurants.filters['rating']}
        >
          <option value="0">Rating</option>
          {Array(5)
            .fill()
            .map((e, i) => (
              <option key={i + 1}>{i + 1}</option>
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
)(Rating);
