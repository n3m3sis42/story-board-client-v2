import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createProject } from '../../actions/projects'

class ProjectForm extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field
    const className = `${touched && error ? 'error-text' : ''}`
    return (
      <div>
        <label>{field.label}</label>
        <input
          className="form-input"
          type="text"
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className={className}>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createProject(values)
    this.props.history.goBack()
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div className="project-list-item">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Add New Project</h3>
          <Field
            label="Project Name: "
            name="name"
            component={this.renderField}
          />
          <Field
            label="Project Description: "
            name="description"
            component={this.renderField}
          />
          <br />
          <button type="submit" className="btn form-btn">Submit</button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.name) {
    errors.name = "Please enter a project name."
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'AddProjectForm'
  })(connect(null, { createProject })(ProjectForm))
