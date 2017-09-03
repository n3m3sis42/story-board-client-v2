import _ from 'lodash'
import React, { Component } from 'react';
import SceneCard from '../components/scene_card'
import SceneForm from './scene_form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sceneActions from '../actions/scenes'
import { selectScene } from '../actions/scenes'

// TODO SceneContainer needs to be connected to the activeScene piece of state -- per Grider course, if multiple child components need access to a piece (like form and card), parent should be wired to Redux, not one/both child components

class SceneContainer extends Component {
// TODO build this out again later so it renders the cards again like in v1, just trying to wire up Redux for now

  componentDidMount() {
    this.props.fetchScenes()
    console.log(this.props)
  }

  addNewScene = () => {
    this.props.createScene({title: '', notes: ''})
  }

 renderScenes = () => {
    return _.map(this.props.scenes, scene => {
      if (!this.props.activeScene) {
        return <SceneCard key={scene.id} scene={scene} />
      }

      return (
        (scene.id === this.props.activeScene.id) ?
        <SceneForm key={scene.id} scene={scene} /> :
        <SceneCard key={scene.id} scene={scene} />
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
