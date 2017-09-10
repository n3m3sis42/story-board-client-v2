import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Header extends Component {

//TODO add styling -- see React Router Training for NavLink props

  renderLinks = () => {
    if (this.props.authenticated) {
      return (
        <div className="navbar-item">
          <NavLink to="/signout">Sign Out</NavLink>
        </div>
      )
    } else {
      return ([
        <div className="navbar-item">
          <NavLink to="/signin">Sign In</NavLink>
        </div>,
        <div className="navbar-item">
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      ])
    }
  }

  render() {
    return (
        <nav className="navbar">
          <NavLink to="/">Home</NavLink>
            <div>
              {this.renderLinks()}
            </div>
        </nav>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header)
