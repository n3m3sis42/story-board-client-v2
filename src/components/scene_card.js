import React, { Component } from 'react';

class SceneCard extends Component {

  handleClick = () => {
    this.props.onClick(this.props.scene.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.scene.id)
  }

  render() {
    return (
      <div className="tile">
        <span className="delete" onClick={this.handleDelete}>x</span>
        <h4 onClick={this.handleClick}>{this.props.scene.title}</h4>
        <p onClick={this.handleClick}>{this.props.scene.notes}</p>
      </div>
    )
  }
}
