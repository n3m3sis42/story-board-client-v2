import React, { Component } from 'react';
import SceneCard from '../components/scene_card'
import SceneForm from './scene_form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchScenes } from '../actions/index'

class SceneContainer extends Component {
// TODO build this out again later so it renders the cards again like in v1, just trying to wire up Redux for now

  renderScene(scene) {
    console.log(scene)
    return(
      <tr key={scene.id}>
        <td key={scene.title}>
          {scene.title}
        </td>
      </tr>
    )
  }

  render() {
    console.log(this.props)

    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {this.props.scenes.map(this.renderScene)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ scenes }) {
  return { scenes }
}

export default connect (mapStateToProps)(SceneContainer)
