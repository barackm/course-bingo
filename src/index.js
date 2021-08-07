import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import createStore from './store/createStore';

import './assets/css/main.css';
import './index.css';
import './assets/css/inputs.css';
import './assets/css/auth.css';
import signupUserAsync from './store/thunks/authThunk';

const store = createStore();
store.dispatch(
  signupUserAsync({
    user: {
      first_name: 'user1',
      last_name: 'user1last',
      email: 'user1@gmail.com',
      password: '123456',
      password_confirmation: '123456',
    },
  }),
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
