import _ from 'lodash'
import React, { Component } from 'react';
import SceneCard from '../components/scene_card'
import SceneForm from './scene_form'
import { connect } from 'react-redux'
import { fetchScenes } from '../actions'
import { selectScene } from '../actions'

// TODO SceneContainer needs to be connected to the activeScene piece of state -- per Grider course, if multiple child components need access to a piece (like form and card), parent should be wired to Redux, not one/both child components

class SceneContainer extends Component {
// TODO build this out again later so it renders the cards again like in v1, just trying to wire up Redux for now

  componentDidMount() {
    this.props.fetchScenes()
  }

  addNewScene = () => {

  }

  // renderScene = (scene) => {
  //   console.log(scene)
  //   const id = scene.id
  //
  //   if (!this.props.activeScene) {
  //     return <SceneCard key={id} scene={scene} />
  //   }
  //
  //   return (
  //     (scene === this.props.activeScene.id) ?
  //     <SceneForm key={id} scene={scene} /> :
  //     <SceneCard key={id} scene={scene} />
  //   )
  // }

 renderScenes = () => {
    return _.map(this.props.scenes, scene => {
      console.log(scene)
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
          {this.props.scenes ? this.renderScenes() : null}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {scenes: state.scenes }
}

// not mapping state to props and directly calling action creator instead of using mapDispatchToProps
export default connect (mapStateToProps, { fetchScenes })(SceneContainer)
