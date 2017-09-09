import _ from 'lodash'
import React, { Component } from 'react'
import Draggable from 'react-draggable'
import SceneForm from './scene_form'
import SceneCard from './scene_card'

export default class Scene extends Component {

  state = {
    editing: false,
    dragging: false
  }

  edit = () => {
    this.setState({ editing: true })
  }

  display = () => {
    this.setState({ editing: false })
  }

  canDrop = (e, ui) => {
    console.log(e, ui)
    return _.find(this.props.scenes, {x_coord: ui.lastX, y_coord: ui.lastY})
  }

  onDragStart = (e, ui) => {
    this.setState({ dragging: true })
  }

  onDragStop = (e, ui) => {
    this.setState({ dragging: false })
    console.log(this.canDrop(e, ui))
    const { lastX, lastY, deltaX, deltaY } = ui
    console.log(lastX, lastY, deltaX, deltaY, ui, e, this.props.scenes)
    // TODO create method on back end to determine whether the new coords already contain a scene. if they do, card should snap back to its old location (x_coord, y_coord). else, save new location (which may be in separate coords model/using a separate redux action)
    const data = {
      ...this.props.scene,
      x_coord: lastX,
      y_coord: lastY
    }
    console.log(data)
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
    return (
      <SceneForm {...this.props} display={this.display}>
        {this.props.scene}
      </SceneForm>
    )
  }

  render() {
    const { scene: { id, x_coord, y_coord } } = this.props
    const dragHandlers = {onStop: this.onDragStop, onStart: this.onDragStart}
    // TODO calculate this position on the back end and include it in the json fetched for the scene/project/board before we get in here
    const position = (x_coord || y_coord) ? {x: x_coord, y: y_coord} : {x: null, y: null}

    // NOTE new draggable component for sidebar should have bounds of story-board but be
    // created in sidebar so it is only confined once it's moved into story-board
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