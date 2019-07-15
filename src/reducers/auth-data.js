const updateAuthData = (state, action) => {

    if (state === undefined){
        return {
            token: null,
            user: null,
            loading: true,
            err: null
        };
    }

        switch (action.type) {
            case 'AUTH_SET_TOKEN':
            return {
                token: action.payload,
                user: null,
                loading: true,
                err: null
            };
            case 'AUTH_DISCARD_TOKEN': 
            return {
                token: null,
                user: null,
                loading: true,
                err: null
            };
            case 'AUTH_SET_USER':
            return {
                ...state.authData,
                user: action.payload,
                loading: false,
                err: null
            };
            case 'AUTH_FAILUR':
            return {
                token: null,
                user: null,
                loading: false,
                err: action.payload
            };

            default: 
                return state.authData;
    }
}

export default updateAuthData;