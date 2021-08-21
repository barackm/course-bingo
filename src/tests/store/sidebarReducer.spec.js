import createStore from '../../store/createStore';

const store = createStore();

describe('Sidebar reducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().sidebar).toEqual(false);
  });

  it('should handle the TOGGLE_SIDEBAR action', () => {
    store.dispatch({ type: 'TOGGLE_SIDEBAR' });
    expect(store.getState().sidebar).toEqual(true);
  });

  it('should throw an error if trying to handle an empty action', () => {
    expect(() => {
      store.dispatch({});
    }).toThrow();
  });
});
