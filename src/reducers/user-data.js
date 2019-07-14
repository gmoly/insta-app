const updateUserData = (state, action) => {

    if (state === undefined){
        return {
            user: null,
            loading: true,
            err: null
        };
    }

    switch (action.type) {
        case 'FETCH_INST_PROFILE_REQUEST':
        return {
            user: null, 
            loading: true,
            error: null
        };
        case 'FETCH_INST_PROFILE_SUCCESS': 
        return {
            user: action.payload,
            loading: false,
            error: null
        };
        case 'FETCH_INST_PROFILE_FAILURE':
        return {
            user: null,
            loading: false,
            error: action.payload
        };
            default: 
                return state.userData;
    }
}

export default updateUserData;