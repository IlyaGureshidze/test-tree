import { JsonUrl } from '../../constants/SiteConstants';
import callRestApi from '../../utils/callRestApi';
import * as types from '../../constants/LocationsActionTypes';

export const checkFetching = (value) => ({
    type: types.GET_LOCATIONS,
    isFetching: value
});

export const requestLocationsIfNeeded = (param) => (dispatch, getState) => {
    const state = getState();
    const dataIsFetching = state.locations_store.isFetching ? state.locations_store.isFetching : false;
    const shouldFetchLocations = (!dataIsFetching);
    if (shouldFetchLocations) {
        dispatch(checkFetching(true));
        dispatch(requestData(param));
    }
};

export const requestData = (request_data) => async (dispatch) => {
    if(request_data.action == 'get_data'){
        callRestApi(JsonUrl)
            .then(response => {
                if(!!response){
                    dispatch(requestLocationsSuccess(response.data));
                }
            })
            .catch(e => {
                console.log("error");
            });
    }
};

export const requestLocationsSuccess = (data) => ({
    type: types.GET_LOCATIONS_SUCCESS,
    locations: data,
    isFetching: false
});