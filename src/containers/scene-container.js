import React, { Component } from 'react';
import ScenesAdapter from '../adapters/ScenesAdapter'
import SceneCard from '../components/scene-card'
import SceneForm from './scene-form'

class SceneContainer extends Component {


}

function mapStateToProps(state) {
  return {
    scenes: state.scenes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectScene: selectScene }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SceneContainer)
