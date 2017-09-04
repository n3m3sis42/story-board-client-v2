import React, { Component } from 'react';
import { connect } from 'react-redux'

export default class SceneCard extends Component {

  handleClick = () => {
    this.props.selectScene(this.props.scene)
    // this.props.selectScene(scene)
    // NOTE uncomment this once I have a selectScene action
    // this.props.selectScene(scene)
  }

  handleDelete = () => {
    this.props.deleteScene(this.props.scene.id)
  }

  render() {
    const { scene } = this.props
    const { title, notes } = scene

    return (
      <div className="tile">
        <span className="delete" onClick={this.handleDelete}>x</span>
        <h4 onClick={this.handleClick}>{scene ? title : null}</h4>
        <p onClick={this.handleClick}>{scene ? notes : null}</p>
      </div>
    )
  }
}
