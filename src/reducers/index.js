import updateTripList from './trip-list';
import updateInstItemList from './list-inst-items';

const reducer = (state, action) => {
        return {
            tripList: updateTripList(state, action),
            instItemList: updateInstItemList(state, action)
        };
}

export default reducer;