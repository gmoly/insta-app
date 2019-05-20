import { itemsLoaded, itemsRequested, itemsError } from './base_actions';

const fetchTrips = (tripsService) => () => (dispatch) => {
    dispatch(itemsRequested('FETCH_TRIPS_REQUEST'));
    tripsService.getTrips()
    .then((data) => dispatch(itemsLoaded('FETCH_TRIPS_SUCCESS',data)))
    .catch((err) => dispatch(itemsError('FETCH_TRIPS_FAILURE',err)));
}

const createTrip = (tripService, newTrip, userId) => () => (dispatch) => {
    const tripData = tripService.mapInstItemsToTrip(newTrip, userId)
    dispatch(itemsLoaded('CREATE_TRIP', tripData))
}

const saveTrip = (tripData, tripService) => () => (dispatch) => {
    tripService.saveTrip(tripData)
    .then(() => dispatch(itemsRequested('SAVE_TRIP')))
    .catch((err) => dispatch(itemsError('SAVE_TRIP_FAILURE',err)) );
}

export { fetchTrips, createTrip, saveTrip };