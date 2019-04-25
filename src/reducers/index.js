import updateTripList from './trip-list';
import updateInstItemList from './list-inst-items';
import updateAuthData from './auth-data';

const reducer = (state, action) => {
        return {
            tripList: updateTripList(state, action),
            instItemList: updateInstItemList(state, action),
            authData: updateAuthData(state, action)
        };
}

export default reducer;