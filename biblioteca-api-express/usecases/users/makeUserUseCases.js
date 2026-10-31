import createUser from './createUser.js';
import deleteUser from './deleteUser.js';
import getUserById from './getUserById.js';
import getUsers from './getUsers.js';
import updateUser from './updateUser.js';

function makeUserUseCases(dao) {
  return {
    getUsers() {
      console.log("[UseCase] Executing getUsers");
      return getUsers(dao);
    },  
    getUserById(id) {
      console.log("[UseCase] Executing getUserById", id);
      return getUserById(id, dao);
    },
    createUser(data) {
      console.log("[UseCase] Executing createUser", data);
      return createUser(data, dao);
    },
    updateUser(id, changes) {
      console.log("[UseCase] Executing updateUser", id, changes);
      return updateUser(id, changes, dao);
    },
    deleteUser(id){
      console.log("[UseCase] Executing deleteUser", id);
      return deleteUser(id, dao);
    }
  };
};

export default makeUserUseCases;