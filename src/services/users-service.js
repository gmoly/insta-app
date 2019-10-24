import { get_user, update_user, add_user } from './mongo-db-service';

export default class UsersService {

  updateUser(userData, id) {
      return update_user(id, userData)           
    }

    addUser(userData) {
      return add_user(userData)
    }

    getUser(id) {
       return get_user(id);
    }

}