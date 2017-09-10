import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
import { BrowserRouter as Router } from 'react-router-dom'
import reducers from './reducers';
import App from './components/app'
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise,ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
