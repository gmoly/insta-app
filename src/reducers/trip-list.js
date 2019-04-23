const updateTripList = (state, action) => {

    if (state === undefined){
        return {
            trips: [],
            loading: true,
            error: null
        };
    }

        switch (action.type) {
            case 'FETCH_TRIPS_REQUEST':
            return {
                trips: [], 
                loading: true,
                error: null
            };
            case 'FETCH_TRIPS_SUCCESS': 
            return {
                trips: action.payload,
                loading: false,
                error: null
            };
            case 'FETCH_TRIPS_FAILURE':
            return {
                trips: [],
                loading: false,
                error: action.payload
            };

            default: 
                return state.tripList;
    }
}

export default updateTripList;