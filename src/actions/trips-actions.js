import { itemsLoaded, itemsRequested, itemsError } from './base_actions';

const saveTrip = (tripData, tripService) => () => (dispatch) => {
    tripService.saveTrip(tripData)
    .then((result) => {
        tripData.id = result.key
        dispatch(itemsLoaded('SAVE_TRIP', tripData))
    })
    .catch((err) => dispatch(itemsError('SAVE_TRIP_FAILURE',err)) );
}

const removeTrip = (id, tripService) => () => (dispatch) => {
    tripService.removeTrip(id)
    .then(() => dispatch(itemsRequested('REMOVE_TRIP')))
    .catch((err) => dispatch(itemsError('FETCH_TRIPS_FAILURE',err)))
}

const getTripById = (id, tripService) => () => (dispatch) => {
    dispatch(itemsRequested('FETCH_TRIP_REQUEST'));
    tripService.getTripById(id)
    .then((result) => {if (result.exists()) { return dispatch(itemsLoaded('FETCH_TRIP_SUCCESS', {...result.val(), id: id}))} }) 
    .catch((err) => dispatch(itemsError('FETCH_TRIP_FAILURE', err)))
}

const fetchLastTrips = (count, tripService) => () => (dispatch) => {
    dispatch(itemsRequested('FETCH_LAST_TRIPS_REQUEST'));
    tripService.getLastTrips(count)
    .then((result) => {if (result.exists()) { return dispatch(itemsLoaded('FETCH_LAST_TRIPS_SUCCESS', result.val()))} }) 
    .catch((err) => dispatch(itemsError('FETCH_LAST_TRIPS_FAILURE', err)))
}

export { fetchLastTrips, saveTrip, removeTrip, getTripById };