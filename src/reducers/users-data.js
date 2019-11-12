const updateUsersData = (state, action) => {

    if (state === undefined){
        return {
            users: null,
            loading: true,
            err: null
        };
    }

    switch (action.type) {
        case 'FETCH_PROFILES_REQUEST':
        return {
            users: null, 
            loading: true,
            error: null
        };
        case 'FETCH_PROFILES_SUCCESS': 
        return {
            users: action.payload,
            loading: false,
            error: null
        };
        case 'FETCH_PROFILES_FAILURE':
        return {
            users: null,
            loading: false,
            error: action.payload
        };
            default: 
                return state.usersData;
    }
}

export default updateUsersData;