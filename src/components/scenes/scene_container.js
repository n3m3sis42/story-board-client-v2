import _ from 'lodash'
import React, { Component } from 'react'
import Scene from './scene'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sceneActions from '../../actions/scenes'
import corkboardBackground from '../../images/bg-corkboard.jpg'

class SceneContainer extends Component {

  // constructor(props) {
  //   super(props)
  //   this.tmpSceneStorage = [{ title: 'New Scene', status: 'Idea', notes: 'fasf', project_id: 1 }]
  // }

  // TODO might make more sense to refactor this so we fetch the scenes only on the project action/reducer -- then we don't have to call the scene fetch here and we can bind the actions to create/delete/edit scenes to the Scene component instead of this container -- not sure yet if the store would still need to be on the SceneContainer or if it should be on Scene as well

  componentDidMount() {
    // so we're going to change this to fetch scenes by id
    // how do we get id well its
    // this.props.match.params.id
    this.props.fetchScenes()
  }

  addNewScene = () => {
    const newScene = { title: 'New Scene', status: 'Idea', notes: '', project_id: 1 }
    this.props.createScene(newScene)
  }

  renderScene = (scene) => {
    return <Scene key={scene.id} scene={scene} {...this.props} />
  }

  render() {
    console.log("HEY IM A SCENE")
    const backgroundStyle = { backgroundImage: `url(${corkboardBackground})` }

    return (
      <div>
        <div className="Scenes-container header">
          <h3>Scenes</h3>
        </div>
        <div className="controls">
          <button className="Scenes-container btn" onClick={this.addNewScene} >
            +
          </button>
          <span className="notification">
            {this.props.notification}
          </span>
        </div>
        <div className="body" id="scene-container">
          <div className="story-board"  style={backgroundStyle}>
            {_.map(this.props.scenes, scene => { return this.renderScene(scene) })}
          </div>
          <div className="story-board-sidebar-right">
            <div>this is on the right</div>

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
