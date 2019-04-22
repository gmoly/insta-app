const tripsLoaded = (newTrips) => {
    return {
        type: 'FETCH_TRIPS_SUCCESS',
        payload: newTrips
    };
};

const tripsRequested = () => {
    return {
        type: 'FETCH_TRIPS_REQUEST'
    }
};

const tripsError = (error) => {
    return {
        type: 'FETCH_TRIPS_FAILURE',
        payload: error
    }
};

const fetchTrips = (tripsService, dispatch) => () => {
    dispatch(tripsRequested());
    tripsService.getTrips()
    .then((data) => dispatch(tripsLoaded(data)))
    .catch((err) => dispatch(tripsError(err)));
}

export {
    fetchTrips
};