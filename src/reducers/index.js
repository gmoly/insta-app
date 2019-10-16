import updateInstItemList from './list-inst-items';
import updateAuthData from './auth-data';
import tripActions from './trip-actions';
import userData from './user-data';
import lastTrips from './last-trips';
import searchData from './search-data';

const reducer = (state, action) => {
        return {
            instItemList: updateInstItemList(state, action),
            authData: updateAuthData(state, action),
            tripData: tripActions(state, action),
            userData: userData(state, action),
            lastTrips: lastTrips(state, action),
            searchData: searchData(state, action)
        };
}

export default reducer;