import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sceneActions from '../../actions/scenes'

class SceneList extends React.Component {

  componentDidMount() {
    console.log(this.props.match)
    this.props.fetchScenes(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      console.log(nextProps.match.params.id)
      this.props.fetchScenes(nextProps.match.params.id)
    }
  }

  render() {
    console.log(this.props)
    const items = _.map(this.props.scenes, scene => { return <li key={scene.id}>{scene.title}</li> })
    return (
      <ul>
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
