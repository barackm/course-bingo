const tokenKey = 'authToken';

const storage = {
  get: (key) => JSON.parse(localStorage.getItem(key)),
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
  setAuthToken: (token) => localStorage.setItem(tokenKey, token),
  getAuthToken: () => localStorage.getItem(tokenKey),
  removeAuthToken: () => localStorage.removeItem(tokenKey),
};

export default storage;
