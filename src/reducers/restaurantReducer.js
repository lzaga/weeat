import {
    FETCH_RESTAURANTS_FAILURE,
    FETCH_RESTAURANTS_STARTED,
    FETCH_RESTAURANTS_SUCCESS,
    ADD_RESTAURANT_FAILURE,
    ADD_RESTAURANT_SUCCESS,
} from '../actions/types';

export default (state = { data: [] }, action) => {
    switch(action.type) {
        case FETCH_RESTAURANTS_SUCCESS:
            return { isFetching: false, data: action.payload };
        case FETCH_RESTAURANTS_FAILURE:
            return { isFetching: false, error: action.payload };;
        case FETCH_RESTAURANTS_STARTED:
            return { isFetching: true, data: state.data };
        case ADD_RESTAURANT_SUCCESS:
            return { isFetching: false, data: [ ...state.data, action.payload ] };
        case ADD_RESTAURANT_FAILURE:
            return { isFetching: false, addRestaurantError: action.payload, data: state.data };
        default:
            return state;
    }
};