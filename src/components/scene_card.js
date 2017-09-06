import React, { Component } from 'react';

export default class SceneCard extends Component {

  handleClick = (event) => {
    console.log(this.props.scene)
    this.props.selectScene(this.props.scene)
    }

  handleDelete = (event) => {
    console.log(this.props)
    this.props.deleteScene(this.props.scene.id)
    // this.props.unselectScene()
  }

  render() {
    const { scene } = this.props
    const { title, notes } = scene

    return (
        <div>
          <span className="delete" onClick={this.handleDelete}>x</span>
          <h4 onClick={this.handleClick}>{scene ? title : null}</h4>
          <p onClick={this.handleClick}>{scene ? notes : null}</p>
        </div>
    )
  }
}
