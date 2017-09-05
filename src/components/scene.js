import React, { Component } from 'react';
import SceneCard from './scene_card'
import SceneForm from '../containers/scene_form'

export default class Scene extends Component {

  handleClick = (event) => {
    this.props.selectScene(this.props.scene)
    }

  handleDelete = () => {
    this.props.deleteScene(this.props.scene.id)
    this.props.unselectScene()
  }

  render() {
    const { scene, activeScene } = this.props
    const { id } = scene

    return (
      <div className="tile">
        {(id === activeScene.id) ?
          <SceneForm
            key={id}
            {...this.props}
          /> :
          <SceneCard
            key={id}
            scene={scene}
            {...this.props}
          />}
      </div>
    )
  }
}
