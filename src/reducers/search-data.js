const searchData = (state, action) => {

    if (state === undefined){
        return {
            searchResult: null,
            loading: true,
            error: null
        };
    }

        switch (action.type) {
            case 'SEARCH_TRIPS_REQUEST':
            return {
                searchResult: null, 
                loading: true,
                error: null
            };
            case 'SEARCH_TRIPS_SUCCESS': 
            return {
                searchResult: action.payload,
                loading: false,
                error: null
            };
            case 'SEARCH_TRIPS_FAILURE':
            return {
                searchResult: null,
                loading: false,
                error: action.payload
            };

            default: 
                return state.searchData;
    }
}

export default searchData;