import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Project extends Component {

  displayScenes = () => {
    console.log(this.props)
    const url = `/projects/${this.props.project.id}/scenes`
    this.props.history.push(url)
  }

  parseDate = (dateString) => {
    return dateString.match(/\d+?-\d+?-\d+/g)
  }

  render() {
    const { project: { id, name, description, created_at, updated_at } } = this.props
    if (this.props.location.pathname.includes("/projects")){
      return (
        <div>
          <Link to={`/projects/${id}`}><h3><strong>{name ? name : null}</strong></h3></Link>
          <p>{description ? description : null}</p>
          <p>Created on {created_at ? this.parseDate(created_at) : null}</p>
          <p>Last updated on {updated_at ? this.parseDate(updated_at) : null}</p>
          <button type="button" className="btn" onClick={this.displayScenes}>SCENES</button>
        </div>
      )
    }
  }
}
