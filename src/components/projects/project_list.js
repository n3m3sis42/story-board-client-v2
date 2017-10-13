import _ from 'lodash'
import React from 'react'
import ProjectForm from './project_form'

const ProjectList = (props) => {
  const { projects, location: { pathname } } = props
  console.log(projects, pathname)

  return (
    <div>
      { pathname === '/projects/new' ? <ProjectForm {...props} /> : null }
      {_.map(_.orderBy(projects, 'created_at', 'desc'), project => { return props.renderProject(project) })}
    </div>

  )

}

export default ProjectList
