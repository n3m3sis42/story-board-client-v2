import React, { Component } from 'react';
import SceneContainer from './containers/scene_container'
import SearchBar from './containers/search_bar'

export default class App extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <SceneContainer />
      </div>
    );
  }
}
