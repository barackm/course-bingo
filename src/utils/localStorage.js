import jwtDecode from 'jwt-decode';

const tokenKey = 'authToken';

const storage = {
  get: (key) => JSON.parse(localStorage.getItem(key)),
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
  setAuthToken: (token) => localStorage.setItem(tokenKey, JSON.stringify(token)),
  getAuthToken: () => JSON.parse(localStorage.getItem(tokenKey)),
  removeAuthToken: () => localStorage.removeItem(tokenKey),
  getCurrentUser: () => {
    const user = storage.getAuthToken(tokenKey);
    return user ? jwtDecode(user) : null;
  },
};

export default storage;
