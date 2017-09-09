import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
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
    // field states:
    // pristine - nothing entered and the user has not yet selected it (how it's rendered by default)
    // touched - user has selected or focused an input and then focused out of it
    // invalid - got an error message and need to display it
    this.props.createProject(values)
  }

  render() {
    // NOTE handleSubmit is one of the props passed by redux form
    const { handleSubmit } = this.props

    // NOTE the field.label property is one we made up -- you can pass arbitray properties to the Field component so they can be accessed in its render function
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn form-btn">Submit</button>
        <Link to="/" className="btn form-btn">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
// NOTE validate function specified in reduxForm call below will be called automatically at certain points in the form's life cycle, such as submittal and when the user presses Enter

// values = {title: '<user input', categories: '<user input', etc}

  const errors = {}

  if (!values.title) {
    errors.title = "Enter a title"
  }
  if (!values.categories) {
    errors.categories = "Enter a category"
  }
  if (!values.content) {
    errors.content = "Enter your content"
  }

  // can also validate based on length or other info

  // If errors is empty, okay to submit the form

  // If errors has ANY values, redux form assumes the form is invalid (and automatically) sets field.meta.error property
  return errors
}

export default reduxForm({
  validate,
  form: 'AddProjectForm'
})(
  connect(null, { createProject })(ProjectForm)
)
