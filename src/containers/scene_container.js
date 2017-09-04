import _ from 'lodash'
import React, { Component } from 'react';
import SceneCard from '../components/scene_card'
import SceneForm from './scene_form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sceneActions from '../actions/scenes'
import { selectScene } from '../actions/scenes'

class SceneContainer extends Component {

  componentDidMount() {
    this.props.fetchScenes()
  }

  addNewScene = () => {
    this.props.createScene({title: '', notes: ''})
  }

 renderScenes = () => {
    return _.map(this.props.scenes, scene => {
      if (!this.props.activeScene) {
        return <SceneCard key={scene.id} scene={scene} deleteScene={this.props.deleteScene} />
      }

      return (
        (scene.id === this.props.activeScene.id) ?
        <SceneForm key={scene.id} scene={scene} /> :
        <SceneCard key={scene.id} scene={scene} deleteScene={this.props.deleteScene}/>
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
