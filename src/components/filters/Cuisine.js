import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions';
import styles from '../Filters.module.sass';

class Cuisine extends React.Component {
  state = { cuisines: [] };

  componentDidUpdate() {
    if (
      this.props.restaurants.data.length > 0 &&
      this.state.cuisines.length === 0
    ) {
      const cuisines = [];

      this.props.restaurants.data.map(restaurant => {
        if (!cuisines[restaurant.cuisine]) {
          cuisines.push(restaurant.cuisine);
        }
      });

      this.setState({ cuisines });
    }
  }

  renderOptions = (cuisine, i) => (
    <option key={i} value={cuisine}>
      {cuisine}
    </option>
  );

  changeCuisineFilter = e => {
    const params = { cuisine: e.target.value };

    this.props.fetchRestaurants(params);
  };

  render() {
    const { restaurants } = this.props;
    const { cuisines } = this.state;

    return (
      <div>
        <h5 className="ui header">Cuisine:</h5>
        <select
          className={`ui dropdown ${styles.filterBox}`}
          onChange={this.changeCuisineFilter}
          value={restaurants.filters['cuisine']}
        >
          <option value="">Cuisine</option>
          {cuisines.map(this.renderOptions)}
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
)(Cuisine);
