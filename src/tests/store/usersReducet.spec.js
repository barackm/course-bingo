import createStore from '../../store/createStore';

const store = createStore();

describe('Users reducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().users).toEqual({
      loading: false,
      list: [],
      error: null,
      foundUser: null,
    });
  });
  it('should handle the API_CALL_BEGIN action', () => {
    store.dispatch({ type: 'API_CALL_BEGIN' });
    expect(store.getState().users.loading).toEqual(true);
  });
  it('should handle the LOAD_USERS_SUCCESS action', () => {
    store.dispatch({
      type: 'LOAD_USERS_SUCCESS',
      payload: [{ id: 1, name: 'John' }],
    });
    expect(store.getState().users.list).toEqual([{ id: 1, name: 'John' }]);
  });
  it('should handle the LOAD_USERS_FAILURE action', () => {
    store.dispatch({
      type: 'LOAD_USERS_FAILURE',
      payload: { error: 'Something bad happened' },
    });
    expect(store.getState().users.error).toEqual({
      error: 'Something bad happened',
    });
  });

  it('should handle the REMOVE_USER_SUCCESS action', () => {
    store.dispatch({
      type: 'REMOVE_USER_SUCCESS',
      payload: { id: 1 },
    });
    expect(store.getState().users.list).toEqual([]);
  });

  it('should handle the REMOVE_USER_FAILURE action', () => {
    store.dispatch({
      type: 'REMOVE_USER_FAILURE',
      payload: { error: 'Something bad happened' },
    });
    expect(store.getState().users.error).toEqual({
      error: 'Something bad happened',
    });
  });

  it('should not handle the CREATE_USER_SUCCESS action', () => {
    store.dispatch({
      type: 'CREATE_USER_SUCCESS',
      payload: { id: 1 },
    });
    expect(store.getState().users.list).toEqual([]);
  });

  it('should not handle the CREATE_USER_FAILURE action', () => {
    store.dispatch({
      type: 'CREATE_USER_FAILURE',
      payload: { error: 'Something bad happened' },
    });
    expect(store.getState().users.error).toEqual({
      error: 'Something bad happened',
    });
  });

  it('should handle the UPDATE_USER_SUCCESS action', () => {
    store.dispatch({
      type: 'UPDATE_USER_SUCCESS',
      payload: { id: 1 },
    });
    expect(store.getState().users.error).toEqual({
      error: 'Something bad happened',
    });
  });

  it('should handle the UPDATE_USER_FAILURE action', () => {
    store.dispatch({
      type: 'UPDATE_USER_FAILURE',
      payload: { error: 'Something bad happened' },
    });
    expect(store.getState().users.error).toEqual({
      error: 'Something bad happened',
    });
  });

  it('should not handle LOAD_COURSES_SUCCESS', () => {
    store.dispatch({
      type: 'LOAD_COURSES_SUCCESS',
      payload: [{ id: 1, name: 'John' }],
    });
    expect(store.getState().users.list).toEqual([]);
  });
});
