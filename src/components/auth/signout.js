import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authActions from '../../actions/auth'

class SignIn extends Component {

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className='error-text'>
          <strong>Oops! {this.props.errorMessage}</strong>
        </div>
      )
    }
  }

  renderField(field) {
    const { meta: { touched, error } } = field
    const className = `${touched && error ? 'error-text' : ''}`
    return (
      <div>
        <label>{field.label}</label>
        <input
          className="form-input"
          type={field.type ? field.type : "text"}
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className={className}>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit({ email, password }) {
    this.props.attemptLogin({ email, password })
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Email: "
          name="email"
          component={this.renderField}
        />
        <Field
          label="Password: "
          name="password"
          type="password"
          component={this.renderField}
        />
        {this.renderAlert()}
        <button type="submit" className="btn form-btn">Sign In</button>
      </form>
    )
  }
}

function validate(values) {
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
  return errors
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  validate,
  form: 'SignInForm',
})
(
  connect(mapStateToProps, authActions)(SignIn)
)
