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
