import { itemsRequested, itemsLoaded, itemsError } from "./base_actions";

function authSetToken(token) {
    return {
      type: 'AUTH_SET_TOKEN',
      payload: token
    };
  }
  
  function authDiscardToken() {
    return {
      type: 'AUTH_DISCARD_TOKEN'
    };
  }
  
  function authSetUser(user) {
    return {
      type: 'AUTH_SET_USER',
      payload: user
    };
  }

  function authError(err) {
    return {
      type: 'AUTH_FAILUR',
      payload: err
    };
  }
  

const fetchInstItems = (instagramService, token) => () => (dispatch) => {
    dispatch(itemsRequested('FETCH_INST_ITEMS_REQUEST'));
    instagramService.getProfileItems(token)
    .then((data) => dispatch(itemsLoaded('FETCH_INST_ITEMS_SUCCESS',data)))
    .catch((err) => dispatch(itemsError('FETCH_INST_ITEMS_FAILURE',err)));
}

const authInstUser = (instagramService, token) => () => (dispatch) => {
    dispatch(authSetToken(token));
    instagramService.getProfileInfo(token)
    .then((data) => dispatch(authSetUser(data)))
    .catch((err) => dispatch(authError(err)));
}

const signOutInstUser = () => () => (dispatch) => {
    dispatch(authDiscardToken());
}

export {fetchInstItems, authInstUser, signOutInstUser};