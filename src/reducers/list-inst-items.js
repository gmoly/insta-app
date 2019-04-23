const updateInstItemList = (state, action) => {

    if (state === undefined){
        return {
            items: [],
            loading: true,
            error: null
        };
    }

        switch (action.type) {
            case 'FETCH_INST_ITEMS_REQUEST':
            return {
                items: [], 
                loading: true,
                error: null
            };
            case 'FETCH_INST_ITEMS_SUCCESS': 
            return {
                items: action.payload,
                loading: false,
                error: null
            };
            case 'FETCH_INST_ITEMS_FAILURE':
            return {
                items: [],
                loading: false,
                error: action.payload
            };

            default: 
                return state.instItemList;
    }
}

export default updateInstItemList;