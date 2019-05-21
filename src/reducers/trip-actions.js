const tripActions = (state, action) => {

    if (state === undefined){
        return {
            trip: [],
            err: null
        };
    }

        switch (action.type) {
            case 'CREATE_TRIP':
            return {
                trip: action.payload
            };
            case 'SAVE_TRIP':
            return {
                trip: action.payload
             };
            case 'SAVE_TRIP_FAILURE':
            return {
                ...state.tripData,
                err: action.payload
            };
            case 'REMOVE_TRIP':
            return {};

            default: 
                return state.tripData;
    }
}

export default tripActions;