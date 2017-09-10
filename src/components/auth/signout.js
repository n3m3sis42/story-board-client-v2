import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authActions from '../../actions/auth'

class SignOut extends Component {

  componentWillMount() {
    this.props.signUserOut()
  }

  render() {
    return (
      <div>
        Sorry to see you go!
      </div>
    )
  }
}

export default connect(null, authActions)(SignOut)
