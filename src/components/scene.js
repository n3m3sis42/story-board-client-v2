import React, { Component } from 'react';
import Draggable from 'react-draggable'
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

  onDragStop = (e, ui) => {
    const { lastX, lastY } = ui
    const data = {
      ...this.props.scene,
      x_coord: lastX,
      y_coord: lastY
    }
    this.props.updateScene(data)
  }

  render() {
    const { scene, activeScene } = this.props
    const { id, x_coord, y_coord } = scene
    const dragHandlers = {onStop: this.onDragStop}

    return (
      <Draggable
        axis="both"
        grid={[210, 210]}
        key={scene.id}
        defaultPosition={{x: x_coord, y: y_coord}}
        scene={scene}
        {...dragHandlers}>
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
      </Draggable>
    )
  }
}
