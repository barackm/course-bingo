import createStore from '../../store/createStore';

const store = createStore();

describe('Favourite reducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().favourites).toEqual({
      error: null,
      loading: false,
      list: [],
    });
  });

  it('should handle ADD_FAVOURITE_SUCCESS', () => {
    store.dispatch({
      type: 'ADD_FAVOURITE_SUCCESS',
      payload: { name: 'Test' },
    });
    expect(store.getState().favourites.list).toEqual([{ name: 'Test' }]);
  });
  it('should handle REMOVE_FAVOURITE_SUCCESS', () => {
    store.dispatch({
      type: 'REMOVE_FAVOURITE_SUCCESS',
      payload: { name: 'Test' },
    });
    expect(store.getState().favourites.list).toEqual([]);
  });
  console.log(store.getState().favourites);
  it('should handle the API_CALL_BEGIN action', () => {
    store.dispatch({ type: 'API_CALL_BEGIN' });
    expect(store.getState().favourites.loading).toBe(true);
  });

  it('should handle the LOAD_FAVOURITES_SUCCESS action', () => {
    store.dispatch({ type: 'LOAD_FAVOURITES_SUCCESS' });
    expect(store.getState().favourites.loading).toBe(false);
  });

  it('should handle the Favourites_ERROR action', () => {
    store.dispatch({ type: 'LOAD_FAVOURITES_FAILURE', payload: 'Error' });
    expect(store.getState().favourites.error).toBe('Error');
  });
});
