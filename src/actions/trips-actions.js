import { itemsLoaded, itemsRequested, itemsError } from './base_actions';

const fetchTrips = (tripsService) => () => (dispatch) => {
    dispatch(itemsRequested('FETCH_TRIPS_REQUEST'));
    tripsService.getTrips()
    .then((data) => dispatch(itemsLoaded('FETCH_TRIPS_SUCCESS',data)))
    .catch((err) => dispatch(itemsError('FETCH_TRIPS_FAILURE',err)));
}

const createTrip = (tripData) => () => (dispatch) => {
    dispatch(itemsLoaded('CREATE_TRIP', tripData))
}

export { fetchTrips, createTrip };