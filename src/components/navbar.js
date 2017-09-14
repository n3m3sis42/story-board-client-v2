import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {

  renderLinks = () => {
    if (this.props.authenticated) {
      return (
      <span>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/signout">SIGN OUT</NavLink>
      </span>
    )
    } else {
      return (
      <span>
        <NavLink to="/signin">SIGN IN</NavLink>
        <NavLink to="/signup">SIGN UP</NavLink>
      </span>
    )
    }
  }

  render() {

    return (
      <nav className="navbar">
        <NavLink to="/">HOME</NavLink>
        {this.renderLinks()}
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Navbar)
