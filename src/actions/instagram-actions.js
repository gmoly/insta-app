import { itemsRequested, itemsLoaded, itemsError } from "./base_actions";

const fetchInstItems = (tripsService, token) => () => (dispatch) => {
    dispatch(itemsRequested('FETCH_INST_ITEMS_REQUEST'));
    tripsService.getProfileItems(token)
    .then((data) => dispatch(itemsLoaded('FETCH_INST_ITEMS_SUCCESS',data)))
    .catch((err) => dispatch(itemsError('FETCH_INST_ITEMS_FAILURE',err)));
}

export default fetchInstItems;