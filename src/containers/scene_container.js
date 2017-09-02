import React, { Component } from 'react';
import SceneCard from '../components/scene_card'
import SceneForm from './scene_form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectScene } from '../actions/index'

class SceneContainer extends Component {
// TODO build this out again later so it renders the cards again like in v1, just trying to wire up Redux for now

  addNewScene = () => {

  }

  renderScene = (scene) => {
    const id = scene.id

    if (!this.props.activeScene) {
      return <SceneCard key={id} scene={scene} />
    }

    return (
      (scene === this.props.activeScene.id) ?
      <SceneForm key={id} scene={scene} /> :
      <SceneCard key={id} scene={scene} />
    )
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
          {this.props.scenes.map(this.renderScene)}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ scenes }) {
  return { scenes }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectScene: selectScene }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SceneContainer)
