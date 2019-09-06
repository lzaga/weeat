import {
    FETCH_RESTAURANTS_FAILURE,
    FETCH_RESTAURANTS_STARTED,
    FETCH_RESTAURANTS_SUCCESS,
    ADD_RESTAURANT_FAILURE,
    ADD_RESTAURANT_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    data: [],
    filters: {
        max_delivery_time: '',
        rating: '',
        cuisine: ''
    }
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_RESTAURANTS_SUCCESS:
            return { isFetching: false, data: action.payload.data, filters: action.payload.filters };
        case FETCH_RESTAURANTS_FAILURE:
            return { isFetching: false, error: action.payload, filters: INITIAL_STATE.filters };
        case FETCH_RESTAURANTS_STARTED:
            return { isFetching: true, data: state.data, filters: state.filters};
        case ADD_RESTAURANT_SUCCESS:
            return { isFetching: false, data: [ ...state.data, action.payload ], filters: state.filters };
        case ADD_RESTAURANT_FAILURE:
            return { isFetching: false, addRestaurantError: action.payload, data: state.data, filters: INITIAL_STATE.filters };
        default:
            return state;
    }
};