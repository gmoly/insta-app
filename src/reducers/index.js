import updateTripList from './trip-list';
import updateInstItemList from './list-inst-items';
import updateAuthData from './auth-data';
import tripActions from './trip-actions';

const reducer = (state, action) => {
        return {
            tripList: updateTripList(state, action),
            instItemList: updateInstItemList(state, action),
            authData: updateAuthData(state, action),
            trip: tripActions(state, action)
        };
}

export default reducer;