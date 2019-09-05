import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions';

class Rating extends React.Component {
    state = { value: '' };

    changeRatingFilter = (e) => {
        const params = { rating: e.target.value};

        this.props.fetchRestaurants(params);
    }

    render() {
        return (
            <select className="ui dropdown" onChange={this.changeRatingFilter} value={this.state.value} >
                 <option value='0'>Rating</option>
                 <option value='1'>1</option>
                 <option value='2'>2</option>
                 <option value='3'>3</option>
                 <option value='4'>4</option>
                 <option value='5'>5</option>
            </select>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    }
}
export default connect(mapStateToProps, { fetchRestaurants })(Rating);
