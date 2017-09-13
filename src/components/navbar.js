import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {

  renderLinks = () => {
    if (this.props.authenticated) {
      return (
      <div>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/signout">Sign Out</NavLink>
      </div>
    )
    } else {
      return (
      <div>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    )
    }
  }

  render() {

    return (
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        {this.renderLinks()}
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Navbar)
