const initialState = {
    trips: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'TRIPS_REQUESTED':
        return {
            trips: [], 
            loading: true,
            error: null
        };
        case 'TRIPS_LOADED': 
        return {
            trips: action.payload,
            loading: false,
            error: null
        };
        case 'TRIPS_ERROR':
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