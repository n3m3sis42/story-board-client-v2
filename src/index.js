import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import reducers from './reducers';

import SceneContainer from './containers/scene_container'
import SearchBar from './containers/search_bar'

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div className="App">
        <div className="App header">
          <h1>Story Board</h1>
        </div>
        <SearchBar />
        <Route path="/" component={SceneContainer} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
