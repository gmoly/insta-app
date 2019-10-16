const searchData = (state, action) => {

    if (state === undefined){
        return {
            hits: null,
            loading: true,
            error: null
        };
    }

        switch (action.type) {
            case 'SEARCH_TRIPS_REQUEST':
            return {
                hits: null, 
                loading: true,
                error: null
            };
            case 'SEARCH_TRIPS_SUCCESS': 
            return {
                hits: action.payload,
                loading: false,
                error: null
            };
            case 'SEARCH_TRIPS_FAILURE':
            return {
                hits: null,
                loading: false,
                error: action.payload
            };

            default: 
                return state.searchData;
    }
}

export default searchData;