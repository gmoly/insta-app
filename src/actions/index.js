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

export {
    tripsLoaded, tripsRequested
};