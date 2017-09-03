import React, { Component } from 'react';
import { connect } from 'react-redux'

export default class SceneCard extends Component {

  handleClick = (scene) => {
    console.log(this.props, scene)
    // this.props.selectScene(scene)
    // NOTE uncomment this once I have a selectScene action
    // this.props.selectScene(scene)
  }

  handleDelete = (id) => {
    // NOTE uncomment this once I have a deleteScene action
    // this.props.deleteScene(id)
  }

  render() {
    const scene = this.props.scene
    return (
      <div className="tile">
        <span className="delete" onClick={this.handleDelete}>x</span>
        <h4 onClick={this.handleClick}>{scene.title}</h4>
        <p onClick={this.handleClick}>{scene.notes}</p>
      </div>
    )
  }
}
