import _ from 'lodash'
import React, { Component } from 'react'
import Scene from './scene'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sceneActions from '../../actions/scenes'

class SceneContainer extends Component {

  componentWillMount() {
    this.props.fetchScenes(this.props.match.params.id)
  }

  addNewScene = () => {
    const projectId = this.props.match.params.id
    const newScene = {
      title: 'New Scene', status: 'Idea',
      notes: '',
      // x_coord: -720,
      // y_coord: 0,
      project_id: projectId
    }
    this.props.createScene(newScene)
  }

  getScreenPosition = (scene) => {
    const { status, x_coord, y_coord } = scene
    console.log(status, x_coord, y_coord)
  }

  renderScene = (scene) => {
    this.getScreenPosition(scene)
    return <Scene key={scene.id} scene={scene} {...this.props} />
  }

  render() {
    return (
      <div>
        <div className="Scenes-container header">
          <h3>Scenes</h3>
        </div>
        <div className="controls">
          <button className="btn" onClick={this.addNewScene} >
            +
          </button>
          <span className="notification">
            {this.props.notification}
          </span>
          </div>
          <div className="body" id="scene-container">
            <div className="story-board">
              {_.map(this.props.scenes, scene => {
                if (scene.status !== "Idea") {
                  return this.renderScene(scene)
                }
              })}
            </div>
            <div className="story-board-sidebar-right">
              {_.map(this.props.scenes, scene => {
                if (scene.status == "Idea") {
                  return this.renderScene(scene)
                }
              })}

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
