import { combineReducers } from 'redux';
import restaurantsReducer from './restaurantReducer';

export default combineReducers({
    restaurants: restaurantsReducer
});