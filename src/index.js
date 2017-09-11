import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
// import ReduxPromise from 'redux-promise'
import { BrowserRouter as Router } from 'react-router-dom'
import reducers from './reducers';
import App from './components/app'
import Routes from './components/routes'
import { AUTH_USER } from './actions/auth'
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token')
if (token) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
