import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import createStore from './store/createStore';

import 'swiper/swiper-bundle.css';
import './assets/css/main.css';
import './index.css';
import './assets/css/inputs.css';
import './assets/css/auth.css';
import './assets/css/home.css';
import './assets/css/sidebar.css';

const store = createStore();

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
