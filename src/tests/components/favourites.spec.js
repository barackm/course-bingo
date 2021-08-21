import { BrowserRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from '../../store/createStore';

import Favourites from '../../containers/Favourites';

const store = createStore();

describe('Favourites', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Route
              path="/"
              component={(props) => <Favourites history={props.history} />}
            />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
