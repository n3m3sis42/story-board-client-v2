import React, { Component } from 'react';

export default class SceneCard extends Component {

  delete = () => {
    this.props.deleteScene(this.props.scene.id)
  }

  edit = () => {
    this.props.edit()
  }

  render() {
    const { title, notes } = this.props.children

    return (
      <div>
        <span className="tile-delete" onClick={this.delete}>x</span>
        <h4>{title ? title : null}</h4>
        <div className="tile-long-txt">{notes ? notes : null}</div>
        <span className="tile-btn" onClick={this.edit}>EDIT</span>
      </div>
    )
  }
}
