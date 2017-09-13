import _ from 'lodash'
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

export default class Project extends Component {

  // componentDidMount() {
  //   this.props.history.push('/projects')
  // }

  parseDate = (dateString) => {
    return dateString.match(/\d+?-\d+?-\d+/g)
  }

  render() {
    const { project: { id, name, description, created_at, updated_at } } = this.props
    if (this.props.location.pathname.includes("/projects")){
      return (
        <div>
          <Link to={`/projects/${id}`}><h4>{name ? name : null}</h4></Link>
          <p>{description ? description : null}</p>
          <p>Created on {created_at ? this.parseDate(created_at) : null}</p>
          <p>Last updated on {updated_at ? this.parseDate(updated_at) : null}</p>
        </div>
      )
    }
  }
}
