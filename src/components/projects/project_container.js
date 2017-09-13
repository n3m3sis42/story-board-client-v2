import _ from 'lodash'
import React, { Component } from 'react'
import { Route, Redirect, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as projectActions from '../../actions/projects'
import Project from './project'
import ProjectForm from './project_form'
import ProjectOutline from './project_outline'

import PrivateRoute from '../PrivateRoute'
import SceneList from '../scenes/SceneList'
import SceneContainer from '../scenes/scene_container'

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
    console.log(this.props.match.params.id)
    console.log(this.props)

    return (
      <div>
          <div className="Projects-container header">
            <h3>Projects</h3>
          </div>
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


const ProjectList = (props) => {
  return (
    <div>
      {props.location.pathname === '/projects/new' ? <ProjectForm {...props} /> : null}
      {_.map(props.projects, project => { return props.renderProject(project) })}
    </div>

  )

}

function mapStateToProps(state) {
  return { projects: state.projects }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(projectActions, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(ProjectContainer)
