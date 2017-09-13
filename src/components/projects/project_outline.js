import React, { Component } from 'react'
import _ from 'lodash'

export default class ProjectOutline extends Component {

  componentWillMount() {
    console.log(this.props)
  }

  renderOutlineItem(scene) {
    const { id, title, notes } = scene
    return (
      <li key={id} className="outline-item">
        <strong><p>{title}</p></strong>
        <div>{notes}</div>
      </li>
    )
  }

  renderOutline() {
    const scenes = this.props
    return (
      <div></div>
      // <ul className="outline">
      //   {_.map(scenes, scene => {
      //     return this.renderOutlineItem(scene)})}
      // </ul>
    )
  }

  render() {
    return (
      this.renderOutline()
    )
  }

}
