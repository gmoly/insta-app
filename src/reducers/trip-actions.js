const tripActions = (state, action) => {

    if (state === undefined){
        return {
            trip: null,
            loading: true,
            error: null
        };
    }

        switch (action.type) {
            case 'SAVE_TRIP':
            return {
                trip: action.payload,
                loading: false,
                error: null
             };
            case 'SAVE_TRIP_FAILURE':
            return {
                ...state.tripData,
                loading: false,
                error: action.payload
            };
            case 'REMOVE_TRIP':
            return {};

            case 'FETCH_TRIP_REQUEST':
            return {
                trip: null, 
                loading: true,
                error: null
            };
            case 'FETCH_TRIP_SUCCESS': 
            return {
                trip: action.payload,
                loading: false,
                error: null
            };
            case 'FETCH_TRIP_FAILURE':
            return {
                trip: null,
                loading: false,
                error: action.payload
            };

            default: 
                return state.tripData;
    }
}

export default tripActions;