import { itemsLoaded, itemsRequested, itemsError } from './base_actions';

const searchTrips = (from, size, query, searchService) => () => (dispatch) => {
    dispatch(itemsRequested('SEARCH_TRIPS_REQUEST'));
    searchService.findTrips(from, size, query)
    .then((result) =>  dispatch(itemsLoaded('SEARCH_TRIPS_SUCCESS', result.data))) 
    .catch((err) => dispatch(itemsError('SEARCH_TRIPS_FAILURE', err)))
}

export { searchTrips };