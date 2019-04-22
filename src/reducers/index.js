const initialState = {
    trips: [],
    loading: true
};

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'TRIPS_REQUESTED':
        return {
            trips: [], 
            loading: true
        };
        case 'TRIPS_LOADED': 
        return {
            trips: action.payload,
            loading: false
        };

        default: 
            return state;
    }
    
    return state;
}

export default reducer;