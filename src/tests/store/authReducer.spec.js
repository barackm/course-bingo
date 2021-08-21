import createStore from '../../store/createStore';

const store = createStore();

describe('Auth reducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().auth).toEqual({
      currentUser: null,
      isAuthenticated: false,
      loading: false,
      error: null,
      isAdmin: false,
    });
  });
  it('should handle AUTH_API_CALL_START', () => {
    store.dispatch({ type: 'AUTH_API_CALL_START' });
    expect(store.getState().auth).toEqual({
      currentUser: null,
      isAuthenticated: false,
      loading: true,
      error: null,
      isAdmin: false,
    });
  });
  it('should handle SIGNUP_SUCCESS', () => {
    store.dispatch({
      type: 'SIGNUP_SUCCESS',
      payload: { is_admin: false, name: 'user1' },
    });
    expect(store.getState().auth).toEqual({
      currentUser: { is_admin: false, name: 'user1' },
      isAuthenticated: true,
      loading: false,
      error: null,
      isAdmin: false,
    });
  });

  it('should handle SIGNUP_FAILURE', () => {
    store.dispatch({ type: 'SIGNUP_FAILURE', payload: 'Signup failed' });
    expect(store.getState().auth).toEqual({
      currentUser: null,
      isAuthenticated: false,
      loading: false,
      error: 'Signup failed',
      isAdmin: false,
    });
  });

  it('should not handle LOAD_COURSES_SUCCESS', () => {
    store.dispatch({ type: 'LOAD_COURSES_SUCCESS' });
    expect(store.getState().auth).toEqual({
      currentUser: null,
      isAuthenticated: false,
      loading: false,
      error: 'Signup failed',
      isAdmin: false,
    });
  });

  it('should throw an error is trying to dispatch SIGNUP_SUCCESS action without the payload', () => {
    expect(() => {
      store.dispatch({ type: 'SIGNUP_SUCCESS' });
    }).toThrow();
  });

  it('should throw an error is trying to dispatch LOGIN_SUCCESS action without the payload', () => {
    expect(() => {
      store.dispatch({ type: 'LOGIN_SUCCESS' });
    }).toThrow();
  });

  it('should handle LOGIN_SUCCESS action', () => {
    store.dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { is_admin: false, name: 'user1' },
    });
    expect(store.getState().auth).toEqual({
      currentUser: { is_admin: false, name: 'user1' },
      isAuthenticated: true,
      loading: false,
      error: null,
      isAdmin: false,
    });
  });

  it('should handle LOGIN_FAILURE action', () => {
    store.dispatch({ type: 'LOGIN_FAILURE', payload: 'Login failed' });
    expect(store.getState().auth).toEqual({
      currentUser: null,
      isAuthenticated: false,
      loading: false,
      error: 'Login failed',
      isAdmin: false,
    });
  });
});
