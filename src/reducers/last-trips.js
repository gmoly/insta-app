const lastTrips = (state, action) => {

    if (state === undefined){
        return {
            trips: null,
            loading: true,
            error: null
        };
    }

        switch (action.type) {
            case 'FETCH_LAST_TRIPS_REQUEST':
            return {
                trips: null, 
                loading: true,
                error: null
            };
            case 'FETCH_LAST_TRIPS_SUCCESS': 
            return {
                trips: action.payload,
                loading: false,
                error: null
            };
            case 'FETCH_LAST_TRIPS_FAILURE':
            return {
                trips: null,
                loading: false,
                error: action.payload
            };

            default: 
                return state.lastTrips;
    }
}

export default lastTrips;