import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as projectActions from '../../actions/projects'
import Project from './project'
import ProjectList from './project_list'
import PrivateRoute from '../PrivateRoute'
import SceneList from '../scenes/SceneList'

class ProjectContainer extends Component {

  componentDidMount() {
    this.props.fetchAllProjects()
  }

  addNewProject = () => {
    this.props.history.push('/projects/new')
  }

  renderProject = (project) => {
    return (
      <div key={project.id} className="project-list-item">
        <Project key={project.id} project={project} {...this.props} />
      </div>
    )
  }

  render() {

    return (
      <div>
          <div className="controls">
            <button className="Projects-container btn" onClick={this.addNewProject} >
              +
            </button>
            <span className= "notification">
              {this.props.notification}
            </span>
          </div>
          <div className="body" id="project-container">
            <div className="project-list-left">
              <Route path="/projects" render={() => <ProjectList {...this.props} addNewProject={this.addNewProject} renderProject={this.renderProject} />}/>
            </div>
            <div className="project-details-right">
              <PrivateRoute path={'/projects/:id'} component={SceneList} />
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
