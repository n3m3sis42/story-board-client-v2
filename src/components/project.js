import _ from 'lodash'
import React, { Component } from 'react'

export default class Project extends Component {

  edit = () => {

  }

  parseDate = (dateString) => {
    return dateString.match(/\d+?-\d+?-\d+/g)
  }

  render() {
    const { project: { id, name, description, created_at, updated_at } } = this.props

    return (
          <div className="project-list-item">
              <div>
                <h4>{name ? name : null}</h4>
                <p>{description ? description : null}</p>
                <p>Created on {created_at ? this.parseDate(created_at) : null}</p>
                <p>Last updated on {updated_at ? this.parseDate(updated_at) : null}</p>
              </div>
          </div>
    )
  }
}
