import updateTripList from './trip-list';
import updateInstItemList from './list-inst-items';
import updateAuthData from './auth-data';
import tripActions from './trip-actions';
import userData from './user-data';

const reducer = (state, action) => {
        return {
            tripList: updateTripList(state, action),
            instItemList: updateInstItemList(state, action),
            authData: updateAuthData(state, action),
            tripData: tripActions(state, action),
            userData: userData(state, action)
        };
}

export default reducer;