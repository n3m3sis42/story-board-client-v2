import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as projectActions from '../actions/projects'
import Project from './project'
import ProjectForm from './project_form'

class ProjectContainer extends Component {

  componentDidMount() {
    this.props.fetchProjects()
  }

  addNewProject = () => {
    // NOTE not sure if this should render the form in the sidebar or just add another project to the list and let user edit it inline like we do with the scene card.

    // i like the above idea but then having an update form on the righthand side to add characters to the project etc 

  }

  renderProject = (project) => {
    return (<Project key={project.id} project={project} {...this.props} />)
  }

  render() {
    console.log(this.props.projects)

    return (
      <div className="Projects-container">
        <div className="Projects-container header">
          <h3>Projects</h3>
        </div>
        <div className="Projects-container controls">
          <button className="Projects-container btn" onClick={this.addNewProject} >
            +
          </button>
          <span className="Projects-container notification">
            {this.props.notification}
          </span>
        </div>
        <div className="Projects-container body" id="project-container">
          <div className="Projects-container body project-list">
            {_.map(this.props.projects, project => { return this.renderProject(project) })}
          </div>
          <div className="Projects-container body project-details">
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { projects: state.projects }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(projectActions, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(ProjectContainer)
