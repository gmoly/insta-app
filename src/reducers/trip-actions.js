const tripActions = (state, action) => {

    if (state === undefined){
        return {
            trip: []
        };
    }

        switch (action.type) {
            case 'CREATE_TRIP':
            return {
                trip: action.payload,
            };
           
            default: 
                return state.tripData;
    }
}

export default tripActions;