const tripsLoaded = (newTrips) => {
    return {
        type: 'TRIPS_LOADED',
        payload: newTrips
    };
};

const tripsRequested = () => {
    return {
        type: 'TRIPS_REQUESTED'
    }
};

const tripsError = (error) => {
    return {
        type: 'TRIPS_ERROR',
        payload: error
    }
};

export {
    tripsLoaded, tripsRequested, tripsError
};