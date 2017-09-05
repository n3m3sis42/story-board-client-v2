import _ from 'lodash'
import Draggable from 'react-draggable'
import React, { Component } from 'react';
import Scene from '../components/scene'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sceneActions from '../actions/scenes'

class SceneContainer extends Component {

  componentDidMount() {
    this.props.fetchScenes()
  }

  addNewScene = () => {
    this.props.createScene({title: 'Untitled Scene', notes: ''})
  }

  renderScenes = () => {
    return _.map(this.props.scenes, scene => {
      return (
        <Scene
          key={scene.id}
          scene={scene}
          {...this.props}
        />
      )
    })
  }

  render() {
    console.log(this.props)

    return (
      <div className="Scenes-container">
        <div className="Scenes-container header">
          <h3>Scenes</h3>
        </div>
        <div className="Scenes-container controls">
          <button className="Scenes-container btn" onClick={this.addNewScene} >
            +
          </button>
          <span className="Scenes-container notification">
            {this.props.notification}
          </span>
        </div>
        <div className="Scenes-container body">
          {this.renderScenes()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    scenes: state.scenes,
    activeScene: state.activeScene
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(sceneActions, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(SceneContainer)
