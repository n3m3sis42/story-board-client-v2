import _ from 'lodash'
import React, { Component } from 'react'
import Draggable from 'react-draggable'
import SceneForm from './scene_form'
import SceneCard from './scene_card'

export default class Scene extends Component {

  state = {
    editing: false,
  }

  edit = () => {
    this.setState({ editing: true })
  }

  display = () => {
    this.setState({ editing: false })
  }

  onDragStop = (e, ui) => {
    const { lastX, lastY, deltaX, deltaY, x, y } = ui
    console.log(lastX, lastY, ui.x, ui.y, e, ui)
    const data = { ...this.props.scene, x_coord: lastX, y_coord: lastY }
    if (deltaX !== 0 || deltaY !== 0) {
      this.props.updateScene(data)
    }
  }

  renderDisplay = () => {
    return (
      <SceneCard {...this.props} edit={this.edit}>
        {this.props.scene}
      </SceneCard>
    )
  }

  renderForm = () => {
    const { scene: { title, notes } } = this.props
    return (
      <SceneForm {...this.props} display={this.display} initialValues={{ title, notes }}>
        {this.props.scene}
      </SceneForm>
    )
  }

  // absolutePosition = (scene) => {
  //   return {
  //     position: 'absolute',
  //     bottom:
  //   }
  // }

  render() {
    const scene = this.props
    // this.startingPosition(scene)
    const { scene: { id, x_coord, y_coord } } = this.props
    const dragHandlers = {onStop: this.onDragStop, onStart: this.onDragStart}
    const position = (x_coord || y_coord) ? {x: x_coord, y: y_coord} : {x: null, y: null}
    // const absolutePosition = scene.status === "Idea" ? this.absolutePosition(scene) : null

    return (
      <Draggable
        axis="both"
        bounds={'.story-board'}
        grid={[190, 190]}
        key={id}
        defaultPosition={position}
        {...dragHandlers}>
          <div className="tile-container">
            <div className="tile">
              {this.state.editing ? this.renderForm() : this.renderDisplay()}
            </div>
          </div>
      </Draggable>
    )
  }
}
