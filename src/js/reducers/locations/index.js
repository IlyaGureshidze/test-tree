import * as types from '../../constants/LocationsActionTypes';

const initialState = {
    isFetching: false,
    locations: [],
    modal_status: false
};

const products_store = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LOCATIONS:
            return {
                ...state
            };
        case types.GET_LOCATIONS_SUCCESS:
            return {
                ...state,
                locations: action.locations,
                isFetching: false,
            };
        case types.GET_LOCATIONS_FAILED:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default products_store;