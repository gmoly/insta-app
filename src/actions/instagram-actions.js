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
  

const fetchInstItems = (instagramService, token, last_id) => () => (dispatch) => {
    dispatch(itemsRequested('FETCH_INST_ITEMS_REQUEST'));
    instagramService.getProfileItems(token, last_id)
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

const fetchProfileInfo = (instagramService, token, userId) => () => (dispatch) => {
  dispatch(itemsRequested('FETCH_INST_PROFILE_REQUEST'));
  instagramService.getProfileInfo(token, userId)
  .then((data) => dispatch(itemsLoaded('FETCH_INST_PROFILE_SUCCESS',data)))
  .catch((err) => dispatch(itemsError('FETCH_INST_PROFILE_FAILURE',err)));
}

export {fetchInstItems, authInstUser, signOutInstUser, fetchProfileInfo};