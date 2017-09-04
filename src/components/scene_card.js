import React, { Component } from 'react';

export default class SceneCard extends Component {

  handleClick = (event) => {
    this.props.selectScene(this.props.scene)
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
