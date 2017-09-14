import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css'
import './stylesheets/App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import reducers from './reducers';
import App from './components/app'
import { AUTH_USER } from './actions/auth'
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(ReduxThunk))
const store = createStore(reducers, enhancer);

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
