const updateAuthData = (state, action) => {

    if (state === undefined){
        return {
            token: null,
            user: [],
            loading: true,
            err: null
        };
    }

        switch (action.type) {
            case 'AUTH_SET_TOKEN':
            return {
                token: action.payload,
                user: [],
                loading: true,
                err: null
            };
            case 'AUTH_DISCARD_TOKEN': 
            return {};
            case 'AUTH_SET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false,
                err: null
            };
            case 'AUTH_FAILUR':
            return {
                token: null,
                user: [],
                loading: false,
                err: action.payload
            };

            default: 
                return state.authData;
    }
}

export default updateAuthData;