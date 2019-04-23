import updateTripList from './trip-list';

const reducer = (state, action) => {
        return {
            tripList: updateTripList(state, action)
        };
}

export default reducer;