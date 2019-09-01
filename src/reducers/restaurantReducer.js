import { FETCH_RESTAURANTS_FAILURE, FETCH_RESTAURANTS_STARTED, FETCH_RESTAURANTS_SUCCESS } from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_RESTAURANTS_SUCCESS:
            return { isFetching: false, data: action.payload };
        case FETCH_RESTAURANTS_FAILURE:
            return { isFetching: false, error: action.payload };;
        case FETCH_RESTAURANTS_STARTED:
            return { isFetching: true, data: state };
        default:
            return { isFetching: false, data: state };;
    }
};