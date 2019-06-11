import { itemsLoaded, itemsRequested, itemsError } from './base_actions';

const fetchTrips = (tripsService) => () => (dispatch) => {
    dispatch(itemsRequested('FETCH_TRIPS_REQUEST'));
    tripsService.getTrips()
    .then((data) => dispatch(itemsLoaded('FETCH_TRIPS_SUCCESS',data)))
    .catch((err) => dispatch(itemsError('FETCH_TRIPS_FAILURE',err)));
}

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
    .then((result) => { if (result.exists()) { return dispatch(itemsLoaded('FETCH_TRIP_SUCCESS', result.val()))} }) 
    .catch((err) => dispatch(itemsError('FETCH_TRIP_FAILURE', err)))
}

export { fetchTrips, saveTrip, removeTrip, getTripById };