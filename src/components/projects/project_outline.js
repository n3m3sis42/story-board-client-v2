import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sceneActions from '../../actions/scenes'

// TODO copy in logic as needed from SceneList and also pass props instead of using params?

export default class ProjectOutline extends Component {

  componentWillMount() {
    this.props.fetchScenes(this.props.match.params.id)
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
