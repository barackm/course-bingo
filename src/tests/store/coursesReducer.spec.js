import createStore from '../../store/createStore';

const store = createStore();

describe('Course reducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().courses).toEqual({
      error: null,
      list: [],
      loading: false,
    });
  });

  it('should handle the LOAD_COURSES_SUCCESS action', () => {
    const courses = [
      {
        id: 1,
        name: 'Test course',
        description: 'Test description',
        image: 'test.png',
        createdAt: '2017-01-01T00:00:00.000Z',
        updatedAt: '2017-01-01T00:00:00.000Z',
      },
    ];

    const action = {
      type: 'LOAD_COURSES_SUCCESS',
      payload: courses,
    };

    store.dispatch(action);

    expect(store.getState().courses.list).toEqual(courses);
  });

  it('should handle the LOAD_COURSES_FAILURE action', () => {
    const error = 'Error';

    const action = {
      type: 'LOAD_COURSES_FAILURE',
      payload: error,
    };

    store.dispatch(action);
    expect(store.getState().courses.error).toEqual(error);
  });

  it('should throw an error when dispatching invalid action', () => {
    expect(() => {
      store.dispatch({ name: 'INVALID_ACTTION' });
    }).toThrow(
      'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.',
    );
  });
  it('should handle the ADD_COURSE_SUCCESS', () => {
    const course = {
      id: 1,
      name: 'Test course',
      description: 'Test description',
      image: 'test.png',
      createdAt: '2017-01-01T00:00:00.000Z',
      updatedAt: '2017-01-01T00:00:00.000Z',
    };

    const action = {
      type: 'ADD_COURSE_SUCCESS',
      payload: course,
    };

    store.dispatch(action);

    expect(store.getState().courses.list.length).toBe(2);
  });

  it('should handle the ADD_COURSE_FAILURE', () => {
    const error = 'Error';

    const action = {
      type: 'ADD_COURSE_FAILURE',
      payload: error,
    };

    store.dispatch(action);

    expect(store.getState().courses.error).toEqual(error);
  });

  it('should not handle LOAD_USERS_SUCCESS action', () => {
    const action = {
      type: 'LOAD_USERS_SUCCESS',
      payload: [],
    };

    store.dispatch(action);

    expect(store.getState().users.list).toEqual([]);
  });

  it('should not handle LOAD_USERS_FAILURE action', () => {
    const error = 'Error';

    const action = {
      type: 'LOAD_USERS_FAILURE',
      payload: error,
    };

    store.dispatch(action);

    expect(store.getState().courses.error).toBe(error);
  });
});
