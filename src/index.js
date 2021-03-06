import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HttpsRedirect from 'react-https-redirect';
import reportWebVitals from './reportWebVitals';

// redux store
import configureStore, { history } from './store/_store';

import App from './App.jsx';

import './index.less';
import './assets/scss/animate.min.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
      <App history={history} />
    </HttpsRedirect>
  </Provider>, document.getElementById('root'));

reportWebVitals();
