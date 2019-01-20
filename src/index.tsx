import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router as BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import configureStore from 'states/configureStore';
import App from 'pages/App';

const store = configureStore();

import 'bootstrap/scss/bootstrap-reboot.scss';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={createBrowserHistory()}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
