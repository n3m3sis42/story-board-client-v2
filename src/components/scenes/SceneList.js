import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sceneActions from '../../actions/scenes'

class SceneList extends React.Component {

  componentDidMount() {
    this.props.fetchScenes(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchScenes(nextProps.match.params.id)
    }
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

  render() {
    const items = _.map(this.props.scenes, scene => {
      return this.renderOutlineItem(scene) })

    if (items.length === 0) {
        return <div></div>
    }

    return (
      <ul className='project-details-item'>
        {items}
      </ul>
    )
  }
}


function mapStateToProps(state) {
  return { scenes: state.scenes }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(sceneActions, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(SceneList)
