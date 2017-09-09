import _ from 'lodash'
import React, { Component } from 'react'
import Scene from './scene'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sceneActions from '../../actions/scenes'

class SceneContainer extends Component {

  // TODO might make more sense to refactor this so we fetch the scenes only on the project action/reducer -- then we don't have to call the scene fetch here and we can bind the actions to create/delete/edit scenes to the Scene component instead of this container -- not sure yet if the store would still need to be on the SceneContainer or if it should be on Scene as well

  componentDidMount() {
    this.props.fetchScenes()
  }

  addNewScene = () => {
    // TODO call renderScene from "Scenes-container body sidebar"
    this.props.createScene({title: 'Untitled Card', notes: '', project_id: 1})
    console.log("new scene", this.props)
  }

  renderScene = (scene) => {
    return (<Scene key={scene.id} scene={scene} {...this.props} />)
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
        <div className="Scenes-container body" id="scene-container">
          <div className="Scenes-container body story-board">
            {_.map(this.props.scenes, scene => { return this.renderScene(scene) })}
          </div>
          <div className="Scenes-container body sidebar">

          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { scenes: state.scenes }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(sceneActions, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(SceneContainer)
