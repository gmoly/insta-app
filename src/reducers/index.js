const initialState = {
    trips: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    
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
            return state;
    }
    
    return state;
}

export default reducer;