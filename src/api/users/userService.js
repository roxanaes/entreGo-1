import { Service } from '../core/coreService';

class UserService {
  createUser(url, body) {
    return Service.post(url, body);
  }

  deleteUser(id) {
    return Service.delete(id);
  }

  getUser(id) {
    return Service.get(id);
  }

  saveUser(id, body) {
    return Service.put(id, body);
  }

  getAllUser(url) {
    return Service.get(url, body);
  }
}

export {
  UserService
};


