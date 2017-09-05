import React, { Component } from 'react';
import Draggable from 'react-draggable'
import SceneCard from './scene_card'
import SceneForm from '../containers/scene_form'

export default class Scene extends Component {

  // state = {
  //   deltaPosition: {
  //     x: 0, y: 0
  //   }
  // }
  //
  // handleDrag = (e, ui) => {
  //   const { x, y }  = this.state.deltaPosition
  //   this.setState({
  //     deltaPosition: {
  //       x: x + ui.deltaX
  //     }
  //   })
  // }

  onDragStop = (e, ui) => {
    const { lastX, lastY, deltaX, deltaY } = ui
    console.log(this.props.scene, lastX, lastY, deltaX, deltaY)
    const data = {
      ...this.props.scene,
      x_coord: lastX,
      y_coord: lastY
    }
    if (deltaX !== 0 || deltaY !== 0) {
      this.props.updateScene(data)
    }
  }

  render() {
    const { scene, activeScene } = this.props
    const { id, x_coord, y_coord } = scene
    const dragHandlers = {onStop: this.onDragStop}

    return (
      <Draggable
        axis="both"
        grid={[210, 210]}
        key={id}
        defaultPosition={{x: x_coord, y: y_coord}}
        scene={scene}
        {...dragHandlers}>
          <div className="tile">
            {(id === activeScene.id) ?
              <SceneForm
                key={activeScene.id}
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
