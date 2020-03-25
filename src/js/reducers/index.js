import { combineReducers } from 'redux';
import locations_store from '../reducers/locations/index';

const mainReducer = combineReducers({
    locations_store
});

export default mainReducer;